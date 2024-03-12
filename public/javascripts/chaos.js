$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_SR + "</b></color>")
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

    var EG = 1
    var HLG = 1
    var DEF = 2000
    var LV = 95
    //refreshStats()
    var IS_DMG = 1
    var cm = {}
    var HIDE_SHOW = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang2 + '/Chaos.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        max_index = _chaosschedule.length
        cur_index = _chaosdict[$('#CID').val()]
        if (!cur_index) cur_index = 0

        cur_floor = $('#FID').val() ? (parseInt($('#FID').val()) - 1) : -1
        cur_floor_data = 0

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
                    },
                    {
                        div: {
                            div: '',
                            id: 'chart',
                        },
                        class: 'chart_container'
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
                        class: 'floor_select under',
                        style: {
                            'margin-top': '30px'
                        }
                    },
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
                        class: 'ver under',
                        style: {
                            'margin-top': '10px',
                            'margin-bottom': '40px'
                        }
                    },
                ],
                class: 'content'
            }
        })

        writeVer()

    }

    function writeVer() {
        $('.ver_text_name').html(_chaosschedule[mod(cur_index, max_index)].Name)
        $('.ver_text_time').html(_chaosschedule[mod(cur_index, max_index)].Time)
        writeData()
    }

    function writeData() {
        cur_floor_data = lm(_chaos[mod(cur_index, max_index)].Floors, cur_floor)
        $('.dpc').html(txt.DPC_S[lang] + '<b><color style="color:#f29e38;">' + cur_floor_data.HPSingle + '</color></b>' + '<br>' + txt.DPC_M[lang] + '<b><color style="color:#f29e38;">' + cur_floor_data.HPMulti + '</color></b>')
        $('.f_text').html(cur_floor_data.Floor)
        var buff = _chaos[mod(cur_index, max_index)].Buff
        if (!buff) buff = cur_floor_data.Buff
        $('.buff_name').html(buff.Name)
        $('.buff_desc').html(buff.Desc)
        if (buff.Extra && buff.Extra.length) {
            buff.Extra.forEach(function (t) {
                var affix = ""
                if (t.DMG) {
                    var this_lv = cur_floor_data.Upper[0].Level
                    affix = '<b>' + Math.floor(t.DMG * _enviro[this_lv]) + '</b>'
                    if (t.Color) {
                        affix = `<color style='color:#${elemcolor[t.Color]}'>` + affix + '</color>'
                    }
                }
                $('.buff_desc').render({
                    p: '- ' + t.Name + ' ' + affix,
                    style: {
                        margin: '0'
                    }
                })
            })
        }
        $('.target_c').html(txt.Cycle[lang] + cur_floor_data.TurnNum)
        $('.target_t').empty().render({
            template: {
                p: [
                    {
                        img: imgpre + 'images/Misc/Star.png',
                        class: 'star'
                    }, function (d) {
                        return d.data
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
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemUpper
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            style: {
                                'font-size': '0.75em',
                                color: '#0066FF',
                                'margin-bottom': '27px'
                            }
                        },
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
                                return imgpre + 'images/Element/' + k.data + '.png'
                            },
                            class: 'elem_',
                            data: cur_floor_data.ElemLower
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            style: {
                                'font-size': '0.75em',
                                color: '#0066FF',
                                'margin-bottom': '27px'
                            }
                        },
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

        var floor_name = $('.f_text').html()

        myChart = echarts.init(document.getElementById('chart'))
        var option = {
            title: {
                text: txt.Chart_Title[lang].replace('#', floor_name),
                subtext: txt.Chart_Subtitle[lang],
                left: 'center',
                textStyle: {
                    color: '#000'
                },
                subtextStyle: {
                    color: '#2545ba'
                },
                top: '8%'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [txt.DPC_S[lang], txt.DPC_M[lang]],
                top: '20%'
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '26%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right: '75%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: _chaoshp[floor_name].Name,
                axisLabel: {
                    color: '#000',
                    padding: [5, 0],
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: txt.DPC_S[lang],
                    type: 'line',
                    data: _chaoshp[floor_name].Single
                },
                {
                    name: txt.DPC_M[lang],
                    type: 'line',
                    data: _chaoshp[floor_name].Multi
                }
            ]
        }
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: _chaoshp[$('.f_text').html()].Index[_chaosschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 1,
        })

    }

    $('body').on('click', '.v_r', function () {
        cur_index -= 1
        writeVer()
    })

    $('body').on('click', '.v_l', function () {
        cur_index += 1
        writeVer()
    })

    $('body').on('click', '.f_r', function () {
        cur_floor += 1
        writeData()
    })

    $('body').on('click', '.f_l', function () {
        cur_floor -= 1
        writeData()
    })

    $('body').on('mouseleave', '#chart', function () {
        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: _chaoshp[$('.f_text').html()].Index[_chaosschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 1,
        })
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
            var me = _monster[t.ID]
            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: imgpre + 'images/' + me["1"],
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
                                        return imgpre + 'images/Element/' + k.data + '.png'
                                    },
                                    class: 'elem',
                                    data: me["2"]
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
                                    if (me["3"] && me["3"] > 1) {
                                        s += '<b>×' + me["3"] + '</b>'
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
                class: 'monster_card hover-shadow',
                a: {
                    'data-id': t.ID,
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

    $('body').on('click', '.monster_card', function () {
        window.open(`monster?lang=${lang2}&id=${$(this).attr('data-id')}&lv=${$(this).attr('data-lv')}&hlg=${$(this).attr('data-hl')}&eg=${$(this).attr('data-eg')}&def=2000`)
    })

    $('body').on('click', '.title', function () {
        HIDE_SHOW = 1 - HIDE_SHOW
        if (HIDE_SHOW) {
            $('h3 .links').html(txt.Links_[lang]);
            $('.lang').hide()
            $('.title').html(txt.MoC[lang] + ' ' + VER_SR)
            $('.subtitle').html(txt.HS[lang])
            $('.under').hide()
        } else {
            $('h3 .links').html(txt.Page[lang]);
            $('.lang').show()
            $('.title').html(txt.Title[lang])
            $('.subtitle').html(txt.Subtitle[lang])
            $('.under').show()
        }
    })

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