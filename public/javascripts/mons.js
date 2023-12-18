$(function () {

    var lang_ = $('#LANG').val()
    if (!lang_) {
        var lang = 'CH'
    } else {
        var lang = lang_
    }

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    $('h3 .title').html(txt.Title[lang])
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function() {
        popLinks(lang)
    })

    var EG = 1
    var HLG = 1
    var DEF = 2000
    var LV = 95
    var cur_mon = {}
    var IS_DMG = 0
    var skill_phase = 0

    $('container').render({
        template: {
            div: [
                {
                    section: {
                        schedule: `[[Name/${lang}]]`,
                        data: _kingdoms,
                        event: {
                            click: function (d) {
                                if ($(d.sender).hasClass('active')) {
                                    return;
                                }
                                $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                monsterRender(d.org_data._id);
                            }
                        }
                    }
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    div: [],
                    class: 'monster_card_area'
                }
            ],
            class: 'content'
        }
    })

    function monsterRender(kid) {
        $('.monster_card_area').empty()
        _monster.forEach(function (me, ind) {
            if (kid == 1000) {
                show = true
            } else if (kid == 1001) {
                show = me.Name.EN.includes('Bug')
            } else if (kid == 1002) {
                show = me.Name.EN.includes('Complete')
            } else if (kid == 9999) {
                show = me.New
            } else if (kid == 7000) {
                show = me._id.toString()[0] == "7"
            } else if (kid == 99) {
                show = (me.Camp == 0) && (me._id < 9999999)
            } else {
                show = (me.Camp == kid) && (me._id < 9999999)
            }
            if (show) {
                $('.monster_card_area').render({
                    template: {
                        span: [
                            {
                                img: 'images/' + me.Icon,
                                class: 'monicon'
                            },
                            {
                                div: [
                                    {
                                        span: me.Name[lang],
                                        class: 'monname'
                                    },
                                    {
                                        br: ''
                                    },
                                    {
                                        span: [
                                            {
                                                span: {
                                                    img: function (k) {
                                                        return 'images/Element/' + k.data + '.png'
                                                    },
                                                    class: 'elem',
                                                    data: me.Weak
                                                },
                                                class: 'monelem'
                                            },
                                            {
                                                span: function () {
                                                    var s = 'HP <b><color style="color:#cc0000;">' + me.Stats.HP.toString() + '</color></b>'
                                                    if (me.HPCount && me.HPCount > 1) {
                                                        s += '×' + me.HPCount
                                                    }
                                                    return s
                                                },
                                                when: !(me.StatsExtra && me.StatsExtra.HP),
                                            },
                                        ],
                                        class: 'monname_'
                                    },
                                ],
                                class: 'monright'
                            }
                        ],
                        class: 'monster_card',
                        a: {
                            'data-id': ind + 1
                        }
                    }
                })
            }
        })
    }

    function popMons(ind) {
        var me = _monster[ind]
        cur_mon = me
        poplayer({
            header: me.Name[lang] + txt.Affix,
            width: '100%',
            template: [
                {
                    div: {
                        section: function (k) {
                            txt.Mon_Head.forEach(function (t, i) {
                                $(k.container).render({
                                    schedule: t[lang],
                                    class: 'mon_head_option' + (i ? '' : ' active'),
                                    a: {
                                        'data-id': i + 1
                                    },
                                    event: {
                                        click: function (d) {
                                            if ($(d.sender).hasClass('active')) {
                                                return;
                                            }
                                            $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                            poptyp = parseInt($(d.sender).attr('data-id')) - 1
                                            if (!poptyp) {
                                                renderBasic()
                                            } else if (poptyp == 1) {
                                                renderSkill()
                                            } else {
                                                renderDMG()
                                            }
                                        }
                                    }
                                })
                            })
                            
                        }
                    },
                    class: 'mon_head'
                },
                {
                    div: '',
                    class: 'mon_body'
                }
            ]
        })
    }

    function renderBasic() {
        $('.mon_body').empty().render({
            template: [
                {
                    div: [
                        {
                            div: cur_mon.Name[lang],
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    p: '#' + cur_mon._id
                                },
                                {
                                    p: cur_mon.Desc[lang]
                                }
                            ],
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section'
                }
            ]
        })
    }

    function renderSkill() {
        $('.mon_body').empty().render({
            template: {
                section: '',
                class: 'skill_phase'
            }
        })
        cur_mon.Skills.forEach(function (phase, i) {
            $('.skill_phase').render({
                schedule: txt.SkillPhase[phase.Phase][lang],
                a: {
                    'data-id': phase.Phase + 1
                },
                event: {
                    click: function (d) {
                        if ($(d.sender).hasClass('active')) {
                            return;
                        }
                        $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                        renderSkillPhase(i)
                    }
                }
            })
        })
        $('.mon_body').render({
            template: {
                div: '',
                class: 'mon_body_'
            }
        })
        if (cur_mon.Skills.length) {
            if ((cur_mon.Skills.length > 1) && (cur_mon.Skills[0].Phase == 0)) {
                renderSkillPhase(1)
                $('.skill_phase schedule:nth-child(2)').addClass('active')
            } else {
                renderSkillPhase(0)
                $('.skill_phase schedule:nth-child(1)').addClass('active')
            }
        }
    }

    function renderSkillPhase(i) {
        $('.mon_body_').empty()
        var sk = cur_mon.Skills[i].Skills
        sk.forEach(function (skid) {
            var skill = _monsterskill[skid]
            $('.mon_body_').render({
                template: {
                    div: [
                        {
                            div: skill.Name[lang],
                            class: 'a_section_head'
                        },
                        {
                            div: function () {
                                var COL = elemcolor[skill.Elem]
                                if (!skill.DMG) {
                                    var v1 = 0
                                    var v2 = 0
                                    var v3 = 0
                                    var v4 = 0
                                    var v5 = 0
                                } else {
                                    var v1 = skill.DMG[0] ? skill.DMG[0]: 0
                                    var v2 = skill.DMG[1] ? skill.DMG[1]: 0
                                    var v3 = skill.DMG[2] ? skill.DMG[2]: 0
                                    var v4 = skill.DMG[3] ? skill.DMG[3]: 0
                                    var v5 = skill.DMG[4] ? skill.DMG[4]: 0
                                }
                                if (IS_DMG) {
                                    var defcoeff = (10 * LV + 200) / (10 * LV + 200 + DEF)
                                    var atk = cur_mon.Stats.ATK * _elitegroup[EG].AttackRatio * _hardlevelgroup[HLG][LV - 1].ATK + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.ATK ? cur_mon.StatsExtra.ATK : 0) : 0)
                                    var s1 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v1 * atk * defcoeff) + '</b></color>'
                                    var s2 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v2 * atk * defcoeff) + '</b></color>'
                                    var s3 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v3 * atk * defcoeff) + '</b></color>'
                                    var s4 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v4 * atk * defcoeff) + '</b></color>'
                                    var s5 = '<color style="color:#' + COL +  ';"><b>' + Math.floor(v5 * atk * defcoeff) + '</b></color>'
                                } else {
                                    var s1 = '<color style="color:#' + COL +  ';"><b>' + (v1 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                    var s2 = '<color style="color:#' + COL +  ';"><b>' + (v2 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                    var s3 = '<color style="color:#' + COL +  ';"><b>' + (v3 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                    var s4 = '<color style="color:#' + COL +  ';"><b>' + (v4 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                    var s5 = '<color style="color:#' + COL +  ';"><b>' + (v5 * 100).toFixed(1).replace('.0', '') + '%</b></color>'
                                }
                                return skill.Desc[lang].replace('<1>', s1).replace('<2>', s2).replace('<3>', s3).replace('<4>', s4).replace('<5>', s5)
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_small'
                }
            })
        })
    }

    function renderDMG() {
        $('.mon_body').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.MonsterDMG[0][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                placeholder: '1~100',
                                value: LV
                            },
                            class: 'input_lv'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[1][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                value: DEF
                            },
                            class: 'input_def'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[2][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                value: HLG
                            },
                            class: 'input_hlg'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDMG[3][lang]
                        },
                        {
                            input: '',
                            a: {
                                type: 'number',
                                value: EG
                            },
                            class: 'input_eg'
                        }
                    ],
                    class: 'DMG_input'
                },
                {
                    div: {
                        button: txt.MonsterDMG_CTRL[0][lang],
                        class: 'input_calc'
                    },
                    class: 'DMG_input'
                },
                {
                    div: {
                        button: txt.MonsterDMG_CTRL[1][lang],
                        class: 'input_reset'
                    },
                    class: 'DMG_input'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDEF[0][lang],
                            style: {
                                width: '100%',
                                'text-align': 'center'
                            }
                        },
                        {
                            img: 'images/Misc/DEF_HSR.png',
                            style: {
                                width: '100%',
                                'max-width': '500px'
                            }
                        }
                    ],
                    class: 'DMG_Tut'
                },
                {
                    div: [
                        {
                            p: txt.MonsterDEF[1][lang],
                            style: {
                                width: '100%',
                                'text-align': 'center'
                            }
                        },
                        {
                            img: 'images/Misc/DEF_GI.png',
                            style: {
                                width: '100%',
                                'max-width': '500px'
                            }
                        }
                    ],
                    class: 'DMG_Tut'
                }
            ]
        })
    }

    $('body').on('click', '.input_calc', function () {
        IS_DMG = 1
        LV = parseInt($('.input_lv').val())
        DEF = parseInt($('.input_def').val())
        HLG = parseInt($('.input_hlg').val())
        EG = parseInt($('.input_eg').val())
        if (!_elitegroup[EG]) { EG = 1 }
        if (!_hardlevelgroup[HLG]) { HLG = 1 }
        if (!_hardlevelgroup[HLG][LV - 1]) { LV = _hardlevelgroup[HLG].length }
        $('.mon_head section schedule:nth-child(2)').click()
    })

    $('body').on('click', '.input_reset', function () {
        IS_DMG = 0
        $('.mon_head section schedule:nth-child(2)').click()
    })

    $('body').on('click', '.monster_card', function () {
        popMons(parseInt($(this).attr('data-id')) - 1)
    })

})