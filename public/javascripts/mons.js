$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .title').attr('href', (lang == 'CH') ? '/?game=SR' : '/en?game=SR')
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])
    $('h3 .lang').hide()
    $('h3 .links').render([
        {
            img: imgpre + 'images/menu.png',
            class: '_menu_'
        },
        {
            img: imgpre + 'images/translate.png',
            class: '_translate_'
        }
    ]);

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
    })

    var EG = $('#EG').val() ? parseInt($('#EG').val()) : 1
    var HLG = $('#HLG').val() ? parseInt($('#HLG').val()) : 1
    var DEF = $('#DEF').val() ? parseInt($('#DEF').val()) : 2000
    var LV = $('#LEVEL').val() ? parseInt($('#LEVEL').val()) : 95
    refreshStats()
    var IS_DMG = 0
    if ($('#DEF').val()) IS_DMG = 1
    var cm = 114514
    var skill_phase = 0

    var show_sch = 0
    var si = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang2 + '/Monster.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        m_s = 0

        let script_2 = document.createElement('script')
        script_2.src = '/data/' + lang2 + '/MonsterSkill.js'
        document.head.append(script_2)
        script_2.onload = function () {
            m_s = 1
            if (cm != 114514) renderSkill(cm)
        }

        if ($('#MONSTER').val() && (_monsterindex[$('#MONSTER').val()] != undefined)) popMons(_monsterindex[$('#MONSTER').val()])
        if ($('#MONSTERID').val() && (_monsterindex[$('#MONSTERID').val()] != undefined)) popMons(_monsterindex[$('#MONSTERID').val()])

        $('container').render({
            template: {
                div: [
                    {
                        p: '+',
                        style: {
                            'font-weight': 'bold',
                            'font-size': '28px',
                            'text-align': 'center',
                            margin: '10px auto -10px',
                            cursor: 'pointer'
                        },
                        class: 'toggle'
                    },
                    {
                        section: {
                            schedule: `[[Name]]`,
                            data: _kingdoms,
                            a: {
                                class: function (d) {
                                    return ((d.data._id == 9999) ? 'active' : '') + ((d.data._id == 9999 || _focus.includes(d.data._id)) ? '' : ' shh')
                                }
                            },
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

        if (!show_sch) {
            $('.shh').hide()
        }

        monsterRender(9999)
    }

    function monsterRender(kid) {
        $('.monster_card_area').empty()
        _monster.forEach(function (t, ind) {
            if (kid == 1000) {
                show = true
            } else if (kid == 1001) {
                show = t.IsBug
            } else if (kid == 1002) {
                show = t.IsComplete
            } else if (kid == 1003) {
                show = t.IsIllusion
            } else if (kid == 9999) {
                show = t.New
            } else if (kid == 7000) {
                show = t._id.toString()[0] == "7"
            } else if (kid == 99) {
                show = (t.Camp == 0) && (t._id < 9999999)
            } else {
                show = (t.Camp == kid) && (t._id < 9999999)
            }
            if (show) {
                $('.monster_card_area').render({
                    template: {
                        div: [
                            {
                                p: t.Name,
                                style: {
                                    'font-weight': 'bold'
                                },
                                class: 'avatar-name'
                            },
                            {
                                img: imgpre + `images/${t.Figure}`,
                                class: 'avatar-head'
                            },
                            {
                                div: [
                                    {
                                        img: function (k) {
                                            return imgpre + 'images/Element/' + k.data + '.png'
                                        },
                                        style: {
                                            width: '17%',
                                            'min-width': '22px',
                                            margin: '0px 3px',
                                        },
                                        data: t.Weak
                                    },
                                    {
                                        span: '<b><color style="color:#99ffff;">' + (t.Stats ? t.Stats.Stance.toFixed(0) : '') + '</color></b>',
                                        class: 'avatar-stat',
                                        style: {
                                            'margin': '0px 8px',
                                            'line-height': '1',
                                            'display': 'flex',
                                            'flex-direction': 'column',
                                            'justify-content': 'center'
                                        }
                                    },
                                ],
                                style: {
                                    display: 'flex',
                                    'justify-content': 'center',
                                    'flex-wrap': 'wrap',
                                    'margin-top': '10px',
                                    'margin-bottom': '0px'
                                },
                            },
                            {
                                p: [
                                    {
                                        span: [
                                            {
                                                img: imgpre + 'images/Misc/_HP.png',
                                                class: 'avatar-staticon'
                                            },
                                            '<b><color style="color:#f29e38;">' + t.Stats.HP.toString() + '</color></b>' + ((t.HPCount && t.HPCount > 1) ? ('×' + t.HPCount) : '')
                                        ],
                                        class: 'avatar-stat'
                                    },
                                ],
                                when: t.Stats
                            },
                        ],
                        class: 'avatar-card hover-shadow',
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
        poplayer({
            header: me.Name + txt.Affix[lang],
            width: '100%',
            template: [
                {
                    div: {
                        section: function (k) {
                            var shown = 0
                            txt.Mon_Head.forEach(function (t, i) {
                                if (i == 1) {
                                    if (me.Csxylic && lang == "CH") shown += 1
                                } else if (i == 3) {
                                    if (me.Status && me.Status.length) shown += 1
                                } else {
                                    shown += 1
                                }
                            })
                            if (shown < 3 && window.innerWidth > 500) shown = 3
                            txt.Mon_Head.forEach(function (t, i) {
                                $(k.container).render({
                                    schedule: t[lang],
                                    class: 'mon_head_option' + (i ? '' : ' active'),
                                    a: {
                                        'data-id': i + 1,
                                        'data-tu': t.EN
                                    },
                                    event: {
                                        click: function (d) {
                                            if ($(d.sender).hasClass('active')) {
                                                return;
                                            }
                                            $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                            poptyp = parseInt($(d.sender).attr('data-id'))
                                            if (poptyp != 2) {
                                                $('.mon_csx').hide()
                                            }
                                            if (poptyp == 1) {
                                                renderBasic(me)
                                            } else if (poptyp == 2) {
                                                $('.mon_body').empty()
                                                $('.mon_csx').show()
                                            } else if (poptyp == 3) {
                                                renderDMG()
                                            } else {
                                                renderStatus(me.Status)
                                            }
                                        }
                                    },
                                    when: function () {
                                        if (i == 1) {
                                            if (me.Csxylic && lang == "CH") return true
                                            return false
                                        }
                                        if (i == 3) {
                                            if (me.Status && me.Status.length) return true
                                            return false
                                        }
                                        return true
                                    },
                                    style: {
                                        width: 'calc((100% - ' + (shown * 40) + 'px) / ' + shown + ')'
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
                },
                {
                    div: {
                        img: imgpre + (me.Csxylic ? ('SREnemyChart/' + me.Csxylic + '.png') : ('images/Misc/a.png')),
                        style: {
                            'max-width': '100%',
                            'max-height': '600px',
                        }
                    },
                    class: 'mon_csx',
                    style: {
                        display: 'none',
                        'margin-top': '-20px'
                    }
                }
            ]
        })
        renderBasic(me)
    }

    function renderBasic(cur_mon) {
        cm = cur_mon
        $('.mon_body').empty().render({
            template: [
                {
                    div: [
                        {
                            div: cur_mon.Name,
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '10px'
                            }
                        },
                        {
                            div: [
                                {
                                    span: {
                                        img: function (k) {
                                            return imgpre + 'images/Element/' + k.data + '.png'
                                        },
                                        class: 'elem_',
                                        style: {
                                            'vertical-align': 'middle'
                                        },
                                        data: cur_mon.Weak
                                    },
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    div: {
                                        img: imgpre + 'images/' + cur_mon.Figure,
                                        class: 'figure',
                                    },
                                    when: cur_mon.Figure != undefined,
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    div: {
                                        img: imgpre + 'images/' + cur_mon.Icon,
                                        height: '80px',
                                    },
                                    when: cur_mon.Figure == undefined,
                                    style: {
                                        display: 'flex',
                                        'flex-direction': 'row',
                                        'justify-content': 'center'
                                    }
                                },
                                {
                                    p: 'ID ' + cur_mon._id,
                                    style: {
                                        'margin': '0px',
                                        'font-size': '13px',
                                        'font-weight': 'bold',
                                        'color': '#fff',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    p: cur_mon.Desc,
                                    style: {
                                        'margin': '0px',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    hr: '',
                                    style: {
                                        margin: '15px 0px 8px'
                                    }
                                },
                                {
                                    div: function (k) {
                                        elemlist.forEach(function (e) {
                                            if (!cur_mon.RESBase[e]) return
                                            $(k.container).render({
                                                div: [
                                                    {
                                                        img: imgpre + 'images/Element/' + e + '.png',
                                                        class: 'statpageicon'
                                                    },
                                                    {
                                                        span: cur_mon.RESBase[e] ? (parseInt(cur_mon.RESBase[e] * 100) + '%') : '0%'
                                                    }
                                                ],
                                                class: 'weakness_single'
                                            })
                                        })
                                    },
                                    class: 'weakness'
                                },
                                {
                                    hr: '',
                                    style: {
                                        margin: '15px 0px 8px'
                                    },
                                    when: cur_mon.DebuffRES
                                },
                                {
                                    div: function (k) {
                                        debufflist.forEach(function (e) {
                                            if (cur_mon.DebuffRES && cur_mon.DebuffRES[e.ID]) {
                                                if (cur_mon.DebuffRES[e.ID] != 1) {
                                                    var res = parseInt(cur_mon.DebuffRES[e.ID] * 100) + '%'
                                                } else {
                                                    var res = txt.Immune[lang]
                                                }
                                                $(k.container).render({
                                                    template: {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Debuff/' + e.Icon + '.png',
                                                                class: 'statpageicon'
                                                            },
                                                            {
                                                                span: e.Name[lang]
                                                            },
                                                            {
                                                                span: res,
                                                                style: {
                                                                    'padding-left': '6px'
                                                                }
                                                            }
                                                        ],
                                                        class: 'weakness_single'
                                                    }
                                                })
                                            }
                                        })
                                    },
                                    when: cur_mon.DebuffRES,
                                    class: 'weakness',
                                    style: {
                                        'margin-bottom': '0'
                                    }
                                }
                            ],
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section'
                },
                {
                    div: [
                        {
                            div: '',
                            class: 'a_section_head basestat',
                        },
                        {
                            div: [
                                {
                                    div: [],
                                    class: 'base_stat_table'
                                },
                                {
                                    div: [
                                        {
                                            span: txt.BaseStatInput[1][lang] + ' : ' + _curvedescrev[lang][HLG],
                                            style: {
                                                margin: 'auto 20px'
                                            }
                                        },
                                        {
                                            span: txt.BaseStatInput[2][lang] + ' : ' + EG,
                                            style: {
                                                margin: 'auto 20px'
                                            }
                                        },
                                    ],
                                    class: 'base_stat_input'
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: LV
                                    },
                                    class: 'base_stat_lv'
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: HLG
                                    },
                                    class: 'base_stat_hlg'
                                },
                                {
                                    input: '',
                                    a: {
                                        type: 'hidden',
                                        value: EG
                                    },
                                    class: 'base_stat_eg'
                                },
                            ],
                            class: 'a_section_content',
                            style: {
                                'border-top': '1px solid #DDDDDD'
                            }
                        }
                    ],
                    class: 'a_section'
                },
            ]
        })
        renderStat(cur_mon)
        if (m_s) renderSkill(cur_mon)
    }

    function renderSkill(cur_mon) {
        $('.mon_body').render({
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
                        renderSkillPhase(cur_mon, i)
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
                renderSkillPhase(cur_mon, 1)
                $('.skill_phase schedule:nth-child(2)').addClass('active')
            } else {
                renderSkillPhase(cur_mon, 0)
                $('.skill_phase schedule:nth-child(1)').addClass('active')
            }
        }
        renderStatus(cur_mon.Status)
    }

    function renderSkillPhase(cur_mon, i) {
        $('.mon_body_').empty()
        $('.mon_body_').render({
            p: txt.Chart_Subtitle[lang],
            class: 'cts'
        })
        if (IS_DMG) {
            $('.mon_body_').render({
                p: txt.MonLV[lang] + LV + '&nbsp;&nbsp;&nbsp;&nbsp;' + txt.AvatarDEF[lang] + DEF,
                class: 'dmg_show'
            })
        }
        var sk = cur_mon.Skills[i].Skills
        sk.forEach(function (skid) {
            var skill = _monsterskill[skid]
            $('.mon_body_').render({
                template: {
                    div: [
                        {
                            div: [
                                (skill.Threat ? "<color style='color:#f29e38;font-weight:normal;'>⚠ </color>" : '') + skill.Name,
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/AddProp/IconEnergyRecovery.png',
                                            style: {
                                                width: '26px',
                                                position: 'relative',
                                                top: '-2px'
                                            }
                                        },
                                        {
                                            span: '+' + (skill.SP ? skill.SP : 0).toFixed(0),
                                            style: {
                                                'font-size': '14px',
                                                color: '#fff',
                                                'font-weight': 'normal',
                                                float: 'right',
                                                'margin-left': '0px',
                                                'margin-right': '0px',
                                            },
                                        }
                                    ],
                                    style: {
                                        'margin-left': '10px',
                                        'margin-right': '5px',
                                        'margin-top': '3px',
                                        'margin-bottom': '-10px',
                                        float: 'right'
                                    },
                                    when: skill.SP
                                }
                            ],
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
                                return skill.Desc.replaceAll('<1>', s1).replaceAll('<2>', s2).replaceAll('<3>', s3).replaceAll('<4>', s4).replaceAll('<5>', s5)
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section'
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
                            select: '',
                            options: _curvedesc[lang],
                            class: 'input_hlg',
                            value: HLG
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
                            img: imgpre + 'images/Misc/DEF_HSR.png',
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
                            img: imgpre + 'images/Misc/DEF_GI.png',
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

    function renderStat(cur_mon) {
        getStats2()
        $('.basestat').empty().render([
            {
                span: {
                    span: '▼',
                    style: {
                        'font-size': '16px',
                        'line-height': '24px'
                    }
                },
                class: 'down',
            },
            {
                div: {
                    span: 'Lv' + LV,
                },
                style: {
                    margin: '0',
                    display: 'flex',
                    'flex-direction': 'column',
                    'justify-content': 'center'
                }
            }, 
            {
                span: {
                    span: '▲',
                    style: {
                        'font-size': '16px',
                        'line-height': '24px'
                    }
                },
                class: 'up',
            },
        ])
        var _eg = _elitegroup[EG]
        var _hlg = _hardlevelgroup[HLG][LV - 1]
        var _hp = cur_mon.Stats.HP * _hlg.HP * _eg.HPRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.HP ? cur_mon.StatsExtra.HP : 0) : 0)
        var _atk = cur_mon.Stats.ATK * _hlg.ATK * _eg.AttackRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.ATK ? cur_mon.StatsExtra.ATK : 0) : 0)
        var _def = cur_mon.Stats.DEF * _hlg.DEF * _eg.DefenceRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.DEF ? cur_mon.StatsExtra.DEF : 0) : 0)
        var _spd = cur_mon.Stats.SPD * _hlg.SPD * _eg.SpeedRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.SPD ? cur_mon.StatsExtra.SPD : 0) : 0)
        var _stance = cur_mon.Stats.Stance * _hlg.Stance * _eg.StanceRatio + (cur_mon.StatsExtra ? (cur_mon.StatsExtra.Stance ? cur_mon.StatsExtra.Stance : 0) : 0)
        var _res = _hlg.StatusRES + cur_mon.StatusRESBase
        var _prob = _hlg.StatusProb
        $('.base_stat_table').empty().render({
            template: [
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconMaxHP.png',
                            class: 'statpageicon'
                        },
                        {
                            span: function () {
                                var s = '<color style="color:#f29e38">' + _hp.toFixed(0) + '</color>'
                                if (cur_mon.HPCount && cur_mon.HPCount > 1) {
                                    s += ' ×' + cur_mon.HPCount
                                }
                                return s
                            },
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: function (k) {
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'statpageicon',
                            data: cur_mon.Weak,
                            style: {
                                margin: '0'
                            }
                        },
                        {
                            span: _stance.toFixed(0),
                            class: 'stat_num',
                            style: {
                                'margin-left': '7px'
                            }
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconSpeed.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _spd.toFixed(2),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconStatusResistance.png',
                            class: 'statpageicon'
                        },
                        {
                            span: (_res * 100).toFixed(1) + '%',
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconStatusProbability.png',
                            class: 'statpageicon'
                        },
                        {
                            span: (_prob * 100).toFixed(1) + '%',
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconDefence.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _def.toFixed(0),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
                {
                    span: [
                        {
                            img: imgpre + 'images/AddProp/IconAttack.png',
                            class: 'statpageicon'
                        },
                        {
                            span: _atk.toFixed(0),
                            class: 'stat_num'
                        }
                    ],
                    class: 'stat_card'
                },
            ]
        })
    }

    function getStats1() {
        LV = parseInt($('.input_lv').val())
        DEF = parseInt($('.input_def').val())
        HLG = parseInt($('.input_hlg').val())
        EG = parseInt($('.input_eg').val())
        refreshStats()
        $('.input_lv').val(LV)
        $('.input_def').val(DEF)
        $('.input_hlg').val(HLG)
        $('.input_eg').val(EG)
    }

    function getStats2() {
        LV = parseInt($('.base_stat_lv').val())
        HLG = parseInt($('.base_stat_hlg').val())
        EG = parseInt($('.base_stat_eg').val())
        refreshStats()
        $('.base_stat_lv').val(LV)
        $('.base_stat_hlg').val(HLG)
        $('.base_stat_eg').val(EG)
    }

    function refreshStats() {
        if (!_elitegroup[EG]) { EG = 1 }
        if (!_hardlevelgroup[HLG]) { HLG = 1 }
        if (!_hardlevelgroup[HLG][LV - 1]) { LV = _hardlevelgroup[HLG].length }
    }

    $('body').on('click', '.up', function () {
        $('.base_stat_lv').val(LV + 1)
        renderStat(cm)
    })

    $('body').on('click', '.down', function () {
        $('.base_stat_lv').val(LV - 1)
        renderStat(cm)
    })

    $('body').on('change', '', function () {
        renderStat(cm)
    })

    $('body').on('click', '.input_calc', function () {
        IS_DMG = 1
        getStats1()
        $(".mon_head_option[data-tu='Enemy']").click()
        $('popbody').scrollTop($('.basestat')[0].offsetTop - 80)
    })

    $('body').on('click', '.input_reset', function () {
        IS_DMG = 0
        $(".mon_head_option[data-tu='Enemy']").click()
    })

    $('body').on('click', '.avatar-card', function () {
        popMons(parseInt($(this).attr('data-id')) - 1)
    })

    $('body').on('click', '.toggle', function () {
        show_sch = 1 - show_sch
        if (show_sch) {
            $('.shh').show()
        } else {
            $('.shh').hide()
        }
    })

    function renderStatus(L) {
        if (!L) return
        if (!L.length) return
        $('.mon_body').render({
            hr: '',
            style: {
                margin: '0 0 15px',
                width: '100%',
                height: '1px',
                'background-color': 'black'
            }
        })
        L.forEach(function (skid) {
            var status = _status[skid]
            var typedesc = "<span style='font-size:14px;color:#fff;font-weight:bold;margin-left:10px;margin-right:5px;float:right;'>" + (status.Type ? ((status.Type == "Buff") ? txt.StatusType.Buff[lang] : txt.StatusType.Debuff[lang]) : txt.StatusType.Other[lang]) + "</span>"
            $('.mon_body').render({
                template: {
                    div: [
                        {
                            div: status.Name + typedesc,
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    span: txt.CanNotDispel[lang] + '<br>',
                                    when: function () {
                                        return status.CanNotDispel
                                    },
                                    style: {
                                        color: '#ffc870',
                                    }
                                },
                                {
                                    span: status.Desc
                                }
                            ],
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_small'
                }
            })
        })
    }

    $('body').on('click', '._subtitle', function () {
        IS_SW += 1
        if (IS_SW % 4 == 1) {
            $('body').css('font-family', "'FW', sans-serif")
        } else if (IS_SW % 4 == 2) {
            $('body').css('font-family', "'SW', sans-serif")
        } else if (IS_SW % 4 == 3) {
            $('body').css('font-family', "'TW', sans-serif")
        } else {
            if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
            else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }
        }
    })

})