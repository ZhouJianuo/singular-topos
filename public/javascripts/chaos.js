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
    //refreshStats()
    var IS_DMG = 1
    var cm = {}
    var HIDE_SHOW = 0

    var max_index = _chaosschedule.length
    var cur_index = _chaosdict[$('#CID').val()]
    if (!cur_index) cur_index = 0

    var cur_floor = $('#FID').val() ? (parseInt($('#FID').val()) - 1) : -1
    var cur_floor_data

    $('container').render({
        template: {
            div: [
                {
                    div: [
                        {
                            div: '◁',
                            class: 'v_l'
                        },
                        {
                            div: [
                                {
                                    p: '',
                                    class: 'ver_text_name'
                                },
                                {
                                    p: '',
                                    class: 'ver_text_time'
                                }
                            ],
                            class: 'ver_text'
                        },
                        {
                            div: '▷',
                            class: 'v_r'
                        }
                    ],
                    class: 'ver'
                },
                {
                    div: [
                        {
                            div: '◁',
                            class: 'f_l'
                        },
                        {
                            div: '',
                            class: 'f_text'
                        },
                        {
                            div: '▷',
                            class: 'f_r'
                        }
                    ],
                    class: 'floor_select'
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    p: '',
                                    class: 'buff_name'
                                },
                                {
                                    p: '',
                                    class: 'buff_desc'
                                }
                            ],
                            class: 'buff'
                        },
                        {
                            div: [
                                {
                                    p: '',
                                    class: 'target_c'
                                },
                                {
                                    div: '',
                                    class: 'target_t'
                                },
                                {
                                    p: '',
                                    class: 'dpc'
                                },
                            ],
                            class: 'target'
                        },
                    ],
                    class: 'info_area'
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'u_r'
                                },
                                {
                                    div: '',
                                    class: 'u_m'
                                }
                            ],
                            class: 'u'
                        },
                        {
                            div: [
                                {
                                    div: '',
                                    class: 'l_r'
                                },
                                {
                                    div: '',
                                    class: 'l_m'
                                }
                            ],
                            class: 'l'
                        }
                    ],
                    class: 'u_l'
                }
            ],
            class: 'content'
        }
    })

    writeVer()

    function writeVer() {
        $('.ver_text_name').html(_chaosschedule[mod(cur_index, max_index)].Name[lang])
        $('.ver_text_time').html(_chaosschedule[mod(cur_index, max_index)].Time)
        writeData()
    }

    function writeData() {
        cur_floor_data = lm(_chaos[mod(cur_index, max_index)].Floors, cur_floor)
        $('.dpc').html(txt.DPC_S[lang] + '<b><color style="color:#f29e38;">' + cur_floor_data.HPSingle + '</color></b>' + '<br>' + txt.DPC_M[lang] + '<b><color style="color:#f29e38;">' + cur_floor_data.HPMulti + '</color></b>')
        $('.f_text').html(cur_floor_data.Floor)
        var buff = _chaos[mod(cur_index, max_index)].Buff
        if (!buff) buff = cur_floor_data.Buff
        $('.buff_name').html(buff.Name[lang])
        $('.buff_desc').html(buff.Desc[lang])
        $('.target_c').html(txt.Cycle[lang] + cur_floor_data.TurnNum)
        $('.target_t').empty().render({
            template: {
                p: [
                    {
                        img: 'images/Misc/Star.png',
                        class: 'star'
                    }, function (d) {
                        return d.data[lang]
                    }
                ],
                style: {
                    'line-height': '28px'
                }
            },
            data: cur_floor_data.Targets
        })
        var _lv = cur_floor_data.Upper[0].Level
        $('.u_r').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.Recommended[0][lang] + ' Lv' + _lv
                        },
                        {
                            img: function (k) {
                                return 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemUpper
                        }
                    ]
                }
            ]
        })
        $('.l_r').empty().render({
            template: [
                {
                    div: [
                        {
                            p: txt.Recommended[1][lang] + ' Lv' + _lv
                        },
                        {
                            img: function (k) {
                                return 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemLower
                        }
                    ]
                }
            ]
        })
        $('.u_m').empty()
        $('.u_m').render({
            template: Lineup(cur_floor_data.Upper)
        })
        $('.l_m').empty()
        $('.l_m').render({
            template: Lineup(cur_floor_data.Lower)
        })
    }

    $('.v_r').on('click', function () {
        cur_index -= 1
        writeVer()
    })

    $('.v_l').on('click', function () {
        cur_index += 1
        writeVer()
    })

    $('.f_r').on('click', function () {
        cur_floor += 1
        writeData()
    })

    $('.f_l').on('click', function () {
        cur_floor -= 1
        writeData()
    })

    function Lineup(L) {
        var out = []
        L.forEach(function (l) {
            out.push(Stage(l))
        })
        return out
    }

    function Stage(l) {
        var waves = []
        l.Monsters.forEach(function (w, i) {
            waves.push(Wave(i, w, l.Level, l.HardLevelGroup, l.EliteGroup))
        })
        var temp = {
            div: [
                {
                    div: waves,
                    class: 'stage_waves'
                }
            ],
            class: 'stage'
        }
        return temp
    }

    function Wave(i, w, stage_lv, stage_hlg, stage_eg) {
        var monsters = []
        w.forEach(function (t) {
            var me = _monster[_monsterindex[t.ID]]
            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: 'images/' + me.Icon,
                                class: 'monicon'
                            },
                        ],
                        class: 'monleft'
                    },
                    {
                        div: [
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
                                span: t.Stance.toString(),
                                class: 'monname',
                                style: {
                                    'margin-left': '5px',
                                    'position': 'relative',
                                    'bottom': '2px',
                                    'font-weight': 'bold'
                                }
                            },
                        ],
                        class: 'monbottom'
                    },
                    {
                        div: [
                            {
                                span: function () {
                                    var s = 'HP <b><color style="color:#cc0000;">' + t.HP.toString() + '</color></b>'
                                    if (me.HPCount && me.HPCount > 1) {
                                        s += '×' + me.HPCount
                                    }
                                    return s
                                },
                                class: 'monname'
                            },
                            {
                                br: ''
                            },
                            {
                                span: function () {
                                    var s = 'SPD <b><color style="color:#2545ba;">' + t.SPD.toString() + '</color></b>'
                                    return s
                                },
                                class: 'monname'
                            },
                        ],
                        class: 'monright'
                    },
                ],
                class: 'monster_card',
                a: {
                    'data-id': _monsterindex[t.ID] + 1,
                    'data-lv': stage_lv,
                    'data-hl': stage_hlg ? stage_hlg : 1,
                    'data-eg': stage_eg ? stage_eg.ID : 1
                }
            })
        })
        var temp = {
            div: [
                {
                    p: txt.Wave[i][lang],
                    class: 'wave_name'
                },
                {
                    div: monsters,
                    class: 'wave_monsters'
                }
            ],
            class: 'wave_wrap'
        }
        return temp
    }

    function popMons(ind) {
        var me = _monster[ind]
        poplayer({
            header: me.Name[lang] + txt.Affix[lang],
            width: '100%',
            template: [
                {
                    div: {
                        section: function (k) {
                            var shown = 0
                            txt.Mon_Head.forEach(function (t, i) {
                                if (i == 1) {
                                    if (me.Csxylic && lang == "CH") shown += 1
                                } else if (i == 4) {
                                    if (me.Status && me.Status.length) shown += 1
                                } else {
                                    shown += 1
                                }
                            })
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
                                            poptyp = parseInt($(d.sender).attr('data-id'))
                                            if (poptyp == 1) {
                                                renderBasic(me)
                                            } else if (poptyp == 2) {
                                                renderCsxylic(me.Csxylic)
                                            } else if (poptyp == 3) {
                                                renderSkill(me)
                                            } else if (poptyp == 4) {
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
                                        if (i == 4) {
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
                            div: [cur_mon.Name[lang], {
                                span: {
                                    img: function (k) {
                                        return 'images/Element/' + k.data + '.png'
                                    },
                                    class: 'elem',
                                    style: {
                                        'vertical-align': 'middle'
                                    },
                                    data: cur_mon.Weak
                                },
                                style: {
                                    'margin-left': '8px',
                                    'white-space': 'pre'
                                }
                            }],
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    img: 'images/' + cur_mon.Icon,
                                    height: '80px'
                                },
                                {
                                    p: 'ID ' + cur_mon._id,
                                    style: {
                                        'margin': '0px',
                                        'font-size': '13px',
                                        'font-weight': 'bold',
                                        'color': '#fff',
                                    }
                                },
                                {
                                    p: cur_mon.Desc[lang],
                                    style: {
                                        'margin': '0px',
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
                            class: 'a_section_head basestat'
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: txt.BaseStatInput[0][lang]
                                                },
                                                {
                                                    input: '',
                                                    a: {
                                                        type: 'number',
                                                        placeholder: '1~100',
                                                        value: LV
                                                    },
                                                    class: 'base_stat_lv'
                                                },
                                                {
                                                    br: '',
                                                },
                                                {
                                                    button: '▼',
                                                    class: 'down'
                                                },
                                                {
                                                    button: '▲',
                                                    class: 'up'
                                                }
                                            ]
                                        },
                                        {
                                            div: [
                                                {
                                                    p: txt.BaseStatInput[1][lang]
                                                },
                                                {
                                                    select: '',
                                                    options: _curvedesc[lang],
                                                    class: 'base_stat_hlg',
                                                    value: HLG
                                                }
                                            ]
                                        },
                                        {
                                            div: [
                                                {
                                                    p: txt.BaseStatInput[2][lang]
                                                },
                                                {
                                                    input: '',
                                                    a: {
                                                        type: 'number',
                                                        value: EG
                                                    },
                                                    class: 'base_stat_eg'
                                                }
                                            ]
                                        }
                                    ],
                                    class: 'base_stat_input'
                                },
                                {
                                    table: [],
                                    class: 'base_stat_table'
                                }
                            ],
                            class: 'a_section_content',
                            style: {
                                display: 'flex'
                            }
                        }
                    ],
                    class: 'a_section_small_4'
                },
                {
                    div: [
                        {
                            div: txt.MonsterLowerStats[1][lang],
                            class: 'a_section_head'
                        },
                        {
                            div: {
                                table: function (k) {
                                    elemlist.forEach(function (e) {
                                        $(k.container).render({
                                            template: {
                                                tr: [
                                                    {
                                                        td: {
                                                            img: 'images/Element/' + e + '.png',
                                                            class: 'statpageicon'
                                                        }
                                                    },
                                                    {
                                                        td: cur_mon.RESBase[e] ? (parseInt(cur_mon.RESBase[e] * 100) + '%') : '0%'
                                                    }
                                                ]
                                            }
                                        })
                                    })
                                }
                            },
                            class: 'a_section_content'
                        },
                    ],
                    class: 'a_section_small_3'
                },
                {
                    div: [
                        {
                            div: txt.MonsterLowerStats[2][lang],
                            class: 'a_section_head'
                        },
                        {
                            div: {
                                table: function (k) {
                                    debufflist.forEach(function (e) {
                                        if (cur_mon.DebuffRES && cur_mon.DebuffRES[e.ID]) {
                                            if (cur_mon.DebuffRES[e.ID] != 1) {
                                                var res = parseInt(cur_mon.DebuffRES[e.ID] * 100) + '%'
                                            } else {
                                                var res = txt.Immune[lang]
                                            }
                                            $(k.container).render({
                                                template: {
                                                    tr: [
                                                        {
                                                            td: {
                                                                img: 'images/Debuff/' + e.Icon + '.png',
                                                                class: 'statpageicon'
                                                            }
                                                        },
                                                        {
                                                            td: e.Name[lang]
                                                        },
                                                        {
                                                            td: res,
                                                            style: {
                                                                'padding-left': '15px'
                                                            }
                                                        }
                                                    ]
                                                }
                                            })
                                        }
                                    })
                                }
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section_smallsmall'
                }
            ]
        })
        renderStat(cur_mon)
    }

    function renderSkill(cur_mon) {
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
    }

    function renderSkillPhase(cur_mon, i) {
        $('.mon_body_').empty()
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
                            div: (skill.Threat ? "<color style='color:#f29e38;font-weight:normal;'>⚠ </color>" : '') + skill.Name[lang] + (skill.SP ? "<span style='font-size:14px;color:#fff;font-weight:normal;margin-left:10px;margin-right:5px;float:right;'>" + txt.HitSP[lang] + skill.SP.toFixed(0) + "</span>" : ''),
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

    function renderStat(cur_mon) {
        getStats2()
        $('.basestat').html(txt.MonsterLowerStats[0][lang] + ' Lv' + LV)
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
                    tr: [
                        {
                            td: props.HP[lang]
                        },
                        {
                            td: function () {
                                var s = _hp.toFixed(0)
                                if (cur_mon.HPCount && cur_mon.HPCount > 1) {
                                    s += ' ×' + cur_mon.HPCount
                                }
                                return s
                            },
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.Stance[lang]
                        },
                        {
                            td: [
                                _stance.toFixed(0), 
                                {
                                    span: {
                                        img: function (k) {
                                            return 'images/Element/' + k.data + '.png'
                                        },
                                        class: 'elem',
                                        style: {
                                            'vertical-align': 'middle'
                                        },
                                        data: cur_mon.Weak
                                    },
                                    style: {
                                        'margin-left': '8px',
                                        'white-space': 'pre'
                                    }
                                }
                            ],
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.SPD[lang]
                        },
                        {
                            td: _spd.toFixed(2),
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.StatusRES[lang]
                        },
                        {
                            td: (_res * 100).toFixed(1) + '%',
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.StatusProb[lang]
                        },
                        {
                            td: (_prob * 100).toFixed(1) + '%',
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.DEF[lang]
                        },
                        {
                            td: _def.toFixed(0),
                            class: 'stat_'
                        }
                    ]
                },
                {
                    tr: [
                        {
                            td: props.ATK[lang]
                        },
                        {
                            td: _atk.toFixed(0),
                            class: 'stat_'
                        }
                    ]
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
        $('.mon_head section schedule:nth-child(2)').click()
    })

    $('body').on('click', '.input_reset', function () {
        IS_DMG = 0
        $('.mon_head section schedule:nth-child(2)').click()
    })

    $('body').on('click', '.monster_card', function () {
        EG = parseInt($(this).attr('data-eg'))
        HLG = parseInt($(this).attr('data-hl'))
        LV = parseInt($(this).attr('data-lv'))
        popMons(parseInt($(this).attr('data-id')) - 1)
    })

    function renderCsxylic(L) {
        $('.mon_body').empty()
        L.forEach(function (t, i) {
            $('.mon_body').render({
                template: {
                    img: 'images/Csxylic/' + t + '.png',
                    width: '100%'
                }
            })
        })
    }

    function renderStatus(L) {
        $('.mon_body').empty()
        L.forEach(function (skid) {
            var status = _status[skid]
            var typedesc = "<span style='font-size:14px;color:#fff;font-weight:bold;margin-left:10px;margin-right:5px;float:right;'>" + (status.Type ? ((status.Type == "Buff") ? txt.StatusType.Buff[lang] : txt.StatusType.Debuff[lang]) : txt.StatusType.Other[lang]) + "</span>"
            $('.mon_body').render({
                template: {
                    div: [
                        {
                            div: status.Name[lang] + typedesc,
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
                                    span: status.Desc[lang]
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

    $('body').on('click', '.title', function () {
        HIDE_SHOW = 1 - HIDE_SHOW
        if (HIDE_SHOW) {
            $('h3 .links').html(txt.Links_[lang]);
            $('.lang').hide()
            $('.title').html(txt.MoC[lang])
            $('.subtitle').html(txt.HS[lang])
        } else {
            $('h3 .links').html(txt.Page[lang]);
            $('.lang').show()
            $('.title').html(txt.Title[lang])
            $('.subtitle').html(txt.Subtitle[lang])
        }
    })

})