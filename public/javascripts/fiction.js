$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang)
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
        popLinks(lang3)
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
    script_computer.src = '/data/' + lang3 + '/Fiction.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        max_index = _fictionschedule.length
        cur_index = _fictiondict[$('#CID').val()]
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
                                        p: txt.Cycle55[lang],
                                        class: 'target_c'
                                    },
                                    {
                                        div: '',
                                        class: 'target_t'
                                    }
                                ],
                                class: 'target'
                            },
                        ],
                        class: 'info_area'
                    },
                    {
                        div: [
                            
                        ],
                        class: 'smallbuff_wrap'
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
                        class: 'floor_select',
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
                        class: 'ver',
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
        $('.ver_text_name').html(_fictionschedule[mod(cur_index, max_index)].Name)
        $('.ver_text_time').html(_fictionschedule[mod(cur_index, max_index)].Time)
        writeData()
    }

    function writeData() {
        cur_floor_data = lm(_fiction[mod(cur_index, max_index)].Floors, cur_floor)
        $('.f_text').html(cur_floor_data.Floor)
        var buff = _fiction[mod(cur_index, max_index)].Blessing
        if (!buff) buff = cur_floor_data.Blessing
        $('.buff_name').html(buff.Name)
        $('.buff_desc').html(buff.Desc)
        $('.smallbuff_wrap').empty()
        _fiction[mod(cur_index, max_index)].Buffs.forEach(function (j) {
            $('.smallbuff_wrap').render({
                template: {
                    div: [
                        {
                            p: j.Name,
                            class: 'smallbuff_name'
                        },
                        {
                            p: j.Desc,
                            class: 'smallbuff_desc'
                        }
                    ],
                    class: 'smallbuff'
                }
            })
        })
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
                text: txt.Chart_Title_[lang].replace('#', floor_name),
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
                data: [txt.Fiction_HP[lang]],
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
                data: _fictionhp[floor_name].Name,
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
                    name: txt.Fiction_HP[lang],
                    type: 'line',
                    data: _fictionhp[floor_name].HP
                }
            ]
        }
        myChart.setOption(option)

        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: _fictionhp[$('.f_text').html()].Index[_fictionschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 0,
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
            dataIndex: _fictionhp[$('.f_text').html()].Index[_fictionschedule[mod(cur_index, max_index)]._id],
            seriesIndex: 0,
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
        l.Waves.forEach(function (w, i) {
            waves.push(Wave(i, w, l.Level, l.HardLevelGroup))
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

    function Wave(i, w, stage_lv, stage_hlg) {
        var monsters = []
        var affix = []
        w.Monsters.forEach(function (t) {
            var me = _monster[t.ID]
            monsters.push({
                span: [
                    {
                        div: [
                            {
                                img: imgpre + 'images/' + me["1"],
                                class: 'monicon'
                            },
                            {
                                span: t.Num.toString(),
                                class: 'monicon_num'
                            }
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
                                    var s = 'PTS <b><color style="color:;">' + t.Score.toString() + '</color></b>'
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
                    'data-eg': w.EliteGroup ? w.EliteGroup.ID : 1
                }
            })
            if (_affix[t.ID]) {
                affix.push(_affix[t.ID])
            }
        })
        var temp = {
            div: [
                {
                    p: txt.Keep[lang].replace("#", w.KeepNum.toString()),
                    class: 'wave_name'
                },
                {
                    div: monsters,
                    class: 'wave_monsters'
                },
                {
                    p: `[[.]]`,
                    style: {
                        'text-align': 'center',
                        'font-size': '0.8em',
                        'font-weight': 'bold'
                    },
                    data: affix,
                    when: affix.length,
                }
            ],
            class: 'wave_wrap'
        }
        return temp
    }

    $('body').on('click', '.monster_card', function () {
        window.open(`monster?lang=${lang3}&id=${$(this).attr('data-id')}&lv=${$(this).attr('data-lv')}&hlg=${$(this).attr('data-hl')}&eg=${$(this).attr('data-eg')}&def=2000`)
    })

    $('body').on('click', '.title', function () {
        HIDE_SHOW = 1 - HIDE_SHOW
        if (HIDE_SHOW) {
            $('h3 .links').html(txt.Links_[lang]);
            $('.lang').hide()
            $('.title').html(txt.Fiction[lang] + ' ' + VER_SR)
            $('.subtitle').html(txt.HS[lang])
        } else {
            $('h3 .links').html(txt.Page[lang]);
            $('.lang').show()
            $('.title').html(txt.Title[lang])
            $('.subtitle').html(txt.Subtitle[lang])
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