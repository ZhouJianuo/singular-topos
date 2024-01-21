$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]
    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').text(computer_.MiscText.AbyssTitle[lang])
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang])
    $('h3 .tlsub').html(computer_.MiscText.Translate_Abyss[lang])

    var moreless = 0
    var cur_schedule_ver = ""
    var cur_schedule_name = ""
    var cur_schedule_id = ""
    var cur_select_floororchart = 5
    var UI = 0
    var cur_floor_index = 0
    var showtop = 1

    DPSDict = dpsdict(_SpiralAbyssDPSData)
    begin1()

    function begin1() {

        currentSpiralAbyss = _SpiralAbyssSchedule[0].Name;
        var non_break = 1;
        var now;
        for (var i_ = 1; non_break && i_ <= _SpiralAbyssSchedule.length; i_++) {
            now = _SpiralAbyssSchedule[_SpiralAbyssSchedule.length - i_];
            if (now.Generation != 99) {
                currentSpiralAbyss = now.Name;
                currentGeneration = now.Generation
                non_break = 0;
            }
        }
        V_OPTIONS = {
            'CH': ['正式服', '测试服v1', '测试服v2', '测试服v3', '测试服v4', '测试服v5', '测试服v6', '惊喜'],
            'EN': ['Live', 'Beta v1', 'Beta v2', 'Beta v3', 'Beta v4', 'Beta v5', 'Beta v6', 'Surprise']
        }

        $('container').render({
            template: [{
                div: [{
                    p: '+',
                    class: 'showtop',
                }, {
                    section: function (d) {
                        $(d.container).render({
                            data: computer_.SpiralAbyssGenerationConfig,
                            template: {
                                schedule: function (p) {
                                    return p.data.Name[lang]
                                },
                                a: {
                                    class: function (d) {
                                        return d.data._id === currentGeneration ? 'activeg' : ''
                                    },
                                    'data-id': function (d) {
                                        return d.data._id
                                    },
                                }
                            }
                        })
                    },
                    class: 'generation'
                }, {
                    section: function (d) {
                        $(d.container).render({
                            data: _SpiralAbyssSchedule,
                            template: {
                                schedule: function (d) {
                                    if (d.data.Show) return d.data.Show[lang].replace('惊喜 ', '').replace('Surprise ', '')
                                    return d.data.Name
                                },
                                a: {
                                    class: function (d) {
                                        gen = d.data.Generation
                                        return d.data.Name === currentSpiralAbyss ? 'active' + ' gg g' + gen : 'gg g' + gen
                                    },
                                    'data-json': function (d) {
                                        return JSON.stringify(d.data)
                                    },
                                    style: function (d) {
                                        var dsp = d.data.Generation == currentGeneration ? '' : 'none'
                                        return 'display:' + dsp + ";"
                                    }
                                }
                            }
                        })
                    },
                    class: 'schedule'
                }, {
                    section: renderResultPre,
                    class: 'result'
                }],
                class: 'content'
            }]
        })

    }


    $(document).on('click', '.schedule schedule', function () {
        var _this = $(this);
        if (_this.hasClass('active')) {
            return;
        }
        _this.addClass('active').siblings('schedule').removeClass('active');
        renderResultPre()
    })

    $(document).on('click', '.generation schedule', function () {
        var _this = $(this);
        if (_this.hasClass('activeg')) {
            return;
        }
        _this.addClass('activeg').siblings('schedule').removeClass('activeg');
        sVersion(_this.attr('data-id'))
    })

    function sVersion(generation) {
        $('.gg').hide();
        $('.g' + generation).show()
    }

    function renderResultPre() {

        var sData = JSON.parse($('schedule.active').attr('data-json'));
        cur_schedule_ver = sData.Name
        cur_schedule_name = sData.Show ? (sData.Show[lang] ? sData.Show[lang] : cur_schedule_ver) : cur_schedule_ver
        cur_schedule_id = sData.Generation
        var Phases = sData.Phases;
        var Blessings = sData.Blessings;
        var Floors = sData.Floors
        var Download = sData.Download;
        var p_b = [];
        Phases.forEach(function (item, i) {
            var a = {
                p_name: computer_.SpiralAbyssPhaseConfig[item][lang],
                b: _SpiralAbyssBlessingConfig[Blessings[i]]
            }
            if (a.b.ShockWaveConfig && a.b.ShockWaveConfig.length) {
                var a_f = [
                    {
                        "Chambers": [
                            {
                                "Name": "9-1",
                                "Level": 72
                            },
                            {
                                "Name": "9-2",
                                "Level": 74
                            },
                            {
                                "Name": "9-3",
                                "Level": 76
                            }
                        ]
                    },
                    {
                        "Chambers": [
                            {
                                "Name": "10-1",
                                "Level": 80
                            },
                            {
                                "Name": "10-2",
                                "Level": 82
                            },
                            {
                                "Name": "10-3",
                                "Level": 85
                            }
                        ]
                    },
                    {
                        "Chambers": [
                            {
                                "Name": "11-1",
                                "Level": 88
                            },
                            {
                                "Name": "11-2",
                                "Level": 90
                            },
                            {
                                "Name": "11-3",
                                "Level": 92
                            }
                        ]
                    },
                    {
                        "Chambers": [
                            {
                                "Name": "12-1",
                                "Level": 95
                            },
                            {
                                "Name": "12-2",
                                "Level": 98
                            },
                            {
                                "Name": "12-3",
                                "Level": 100
                            }
                        ]
                    }
                ]
                a.b.ShockWaveConfig.forEach(function (item) {
                    item.a_f = a_f;
                })
            }
            p_b.push(a)
        })
        function downloadImage(path, imgName) {
            var _OBJECT_URL;
            var request = new XMLHttpRequest();
            request.addEventListener('readystatechange', function (e) {
                if (request.readyState == 4) {
                    _OBJECT_URL = URL.createObjectURL(request.response);
                    var $a = $("<a></a>").attr("href", _OBJECT_URL).attr("download", imgName);
                    $a[0].click();
                }
            });
            request.responseType = 'blob';
            request.open('get', path);
            request.send();
        }
        $('.result').empty().render({
            template: [{
                h4: [{
                    span: sData.Show ? sData.Show[lang] : sData.Name
                }, {
                    em: sData.OpenTime
                }, {
                    button: computer_.MiscText.Abyss_UI[UI][lang],
                    class: 'ui',
                }]
            }, {
                section: function (d) {
                    $(d.container).render({
                        data: computer_.MiscText.Abyss_Select,
                        template: {
                            span: `[[${lang}]]`,
                            a: { 'data-s': `[[${lang}]]` },
                            click: function (d) {
                                if ($(d.sender).hasClass('active')) {
                                    return
                                }
                                cur_floor_index = 0
                                cur_select_floororchart = $(d.sender).index()
                                var text = $(d.sender).attr('data-s');
                                var h = computer_.MiscText.Abyss_Select[0];
                                $(d.sender).addClass('active').siblings('span').removeClass('active');
                                if (h[lang] === text) {
                                    $('.p_b').hide();
                                    $('.p_h').show();
                                    $('.a_floor').hide();
                                } else {
                                    $('.p_b').show();
                                    $('.p_h').hide();
                                    $('.a_floor').hide();
                                }
                            }
                        }
                    })
                    computer_.MiscText.Abyss_Floor.forEach(function (fl, ind) {
                        if (ind < Floors.length) {
                            $(d.container).render({
                                data: fl,
                                template: {
                                    span: `[[${lang}]]`,
                                    a: { 'data-s': `[[${lang}]]` },
                                    click: function (d) {
                                        if ($(d.sender).hasClass('active')) {
                                            return
                                        }
                                        cur_select_floororchart = $(d.sender).index()
                                        $(d.sender).addClass('active').siblings('span').removeClass('active');
                                        $('.p_b').hide();
                                        $('.p_h').hide();
                                        renderFloorPre(Floors[ind])
                                    }
                                }
                            })
                        }
                    })
                    
                    $(d.container).find('span').eq(cur_select_floororchart).addClass('active');
                },
                class: 'a_select'
            }, {
                section: '',
                class: 'a_floor'
            }, {
                section: function (d) {
                    $(d.container).render({
                        data: p_b,
                        template: {
                            div: [{
                                p: `<b>[[p_name]] - [[b/Name/${lang}]]</p>`
                            }, {
                                p: `[[b/Desc/${lang}]]`
                            }, {
                                ul: {
                                    li: [{
                                        p: `[[ShockWaveDesc/${lang}]]`
                                    }, {
                                        ul: {
                                            li: {
                                                span: ['[[Name]] ', {
                                                    em: 0,
                                                    style: {
                                                        color: '#0000FF'
                                                    }
                                                }],
                                                a: { 'data-level': '[[Level]]' },
                                                datapath: 'Chambers',
                                            },
                                            datapath: 'a_f',
                                            when: function (d) {
                                                return d.data.a_f && d.data.a_f.length
                                            }
                                        },
                                        a: { 'data-ra': '[[ShockWaveDMG]]' },
                                        class: 's_w_f'
                                    }],
                                    datapath: 'b/ShockWaveConfig',
                                },
                                class: 'p_b_ul',
                                when: function (d) {
                                    return d.data.b.ShockWaveConfig && d.data.b.ShockWaveConfig.length
                                }
                            }]
                        }
                    })
                },
                class: 'p_b'
            },
            {
                section: function (d) {
                    var SpiralAbyssDPSDatas = _SpiralAbyssDPSData;
                    for (var i = 0; i < SpiralAbyssDPSDatas.length; i++) {
                        $(d.container).render({
                            template: {
                                div: function (d) {
                                    var chartDom = d.container;
                                    var myChart = echarts.init(chartDom);
                                    var SpiralAbyssDPSData = SpiralAbyssDPSDatas[i];
                                    var label_array = [];
                                    var value_array = [];
                                    for (var j = 0; j < SpiralAbyssDPSData.Data.length; j++) {
                                        label_array.push(SpiralAbyssDPSData.Data[j].Ver)
                                        value_array.push(SpiralAbyssDPSData.Data[j].DPS)
                                    }
                                    var option = {
                                        title: {
                                            text: SpiralAbyssDPSData.Title[lang],
                                            subtext: SpiralAbyssDPSData.SubTitle[lang],
                                            left: 'center',
                                            textStyle: {
                                                color: '#000'
                                            },
                                            subtextStyle: {
                                                color: '#2545ba'
                                            },
                                            top: '8%'
                                        },
                                        toolbox: {
                                            feature: {
                                                saveAsImage: {}
                                            },
                                            right: '75%',
                                            top: '10%'
                                        },
                                        tooltip: {
                                            trigger: 'axis'
                                        },
                                        xAxis: {
                                            data: label_array,
                                            axisLabel: {
                                                interval: 0,
                                                rotate: 40
                                            }
                                        },
                                        yAxis: {},
                                        series: [
                                            {
                                                type: "bar",
                                                data: value_array,
                                                color: SpiralAbyssDPSData.Color,
                                            }
                                        ],
                                        grid: {
                                            top: '26%',
                                        },
                                    }
                                    myChart.setOption(option);
                                },
                                class: 'eachets'
                            }
                        })
                    }
                },
                class: 'p_h'
            }]
        })

        if (cur_select_floororchart != 0) {
            $('.p_h').hide()
        }
        if (cur_select_floororchart != 1) {
            $('.p_b').hide()
        }
        if (cur_select_floororchart > 1) {
            renderFloorPre(Floors[cur_select_floororchart - 2])
        }

        $('.s_w_f').find('li span').each(function (i, item) {
            var ra = $(item).parents('.s_w_f').attr('data-ra');
            var Level = $(item).attr('data-level');
            $(item).find('em').text(Math.floor(Number(ra) * computer_.LevelCurves[Level]['5']))
        })
    }

    function renderFloorPre(index) {
        $('.lt').hide()
        cur_floor_index = index
        showdps = 1
        cur_floor_showver = _SpiralAbyssFloorConfig[index].ShowVers ? _SpiralAbyssFloorConfig[index].ShowVers : [0]
        show_vops = {}
        for (var j = 0; j < cur_floor_showver.length; j++) {
            show_vops[V_OPTIONS[lang][cur_floor_showver[j]]] = cur_floor_showver[j]
        }
        if (Math.min(...cur_floor_showver)) {
            selected = Math.max(...cur_floor_showver)
        } else {
            selected = 0
        }
        select_value = selected
        $('.a_floor').empty().render({
            data: _SpiralAbyssFloorConfig[index],
            template: [{
                h5: `[[Disorder/${lang}]]`
            }, {
                ul: {
                    li: [{
                        h6: [{
                            p: ['[[Name]] LV[[Level]]', function (d) {
                                return computer_.SpiralAbyssGoalTypeTemplateConfig[d.data.GoalType][lang]
                            }],
                            class: 'more level_'
                        }, {
                            p: '[[Name]]',
                            class: 'less',
                            style: {
                                display: 'none',
                                'font-size': '22px',
                            }
                        }, {
                            div: dps_show_container_(),
                            class: 'dps_show_container'
                        }, {
                            span: (cur_schedule_id == 99) ? computer_.MiscText.Abyss_Reminder2[lang] : computer_.MiscText.Abyss_Reminder[lang],
                            class: 'avd',
                            style: {
                                'display': 'block',
                                'color': '#6f6f6f',
                                'font-weight': '500',
                            }
                        }],
                        a: {
                            'data-name': '[[Name]]'
                        }
                    }, {
                        div: [{
                            button: computer_.MiscText.Abyss_Chamber_Button_Buff[lang],
                            click: bufferPop,
                            style: {
                                position: 'relative',
                                left: (UI % 2 == 0 && window.innerWidth >= 800) ? '25px' : ''
                            }
                        }, {
                            select: '',
                            options: show_vops,
                            style: {
                                'text-align': 'center',
                                width: '100px'
                            },
                            class: 'version-choose',
                        }, {
                            button: computer_.MiscText.Abyss_Chamber_Button_Cond[lang],
                            click: condPop,
                            style: {
                                position: 'relative',
                                right: (UI % 2 == 0 && window.innerWidth >= 800) ? '25px' : ''
                            }
                        }],
                        class: 'a_floor_button'
                    }, {
                        div: [{
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [
                                                function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Text[lang]
                                                },
                                                {
                                                    i: function (d) {
                                                        return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover[lang]
                                                    },
                                                    when: function (d) {
                                                        return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover
                                                    },
                                                    width: '450px'
                                                }
                                            ],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[0]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class
                                    });
                                },
                                {
                                    ul: {
                                        li: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [weav.Show.Text[lang], {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px'
                                                        }],
                                                        class: 'weav_hover'
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            color: '#808080',
                                                            "font-size": '12px'
                                                        }
                                                    }],
                                                    class: this_class
                                                }, {
                                                    ol: {
                                                        li: [{
                                                            monster: function (m) {
                                                                var monster = _Monsters[m.data.ID];
                                                                var monsterId = m.data.ID;
                                                                var num = m.data.Num;
                                                                var mask = m.data.Mark || false;
                                                                var hpDown = m.data.HPDown || false;
                                                                var hpUp = m.data.HPUp || false;
                                                                var hpOverride = m.data.HPOverride;
                                                                var nameOverride = m.data.Name || false;
                                                                var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                if (!monster) {
                                                                    return;
                                                                }
                                                                $(m.container).render({
                                                                    data: monster,
                                                                    template: [{
                                                                        div: [{
                                                                            a: function (d) {
                                                                                var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                                return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                            },
                                                                            t: [{
                                                                                img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                            }, {
                                                                                span: [{
                                                                                    em: '*',
                                                                                    style: {
                                                                                        "font-style": "normal",
                                                                                        "font-weight": "600",
                                                                                        "color": "#000"
                                                                                    },
                                                                                    when: function () {
                                                                                        return mask;
                                                                                    }
                                                                                }, function (d) {
                                                                                    if (nameOverride) {
                                                                                        return nameOverride[lang]
                                                                                    }
                                                                                    if (d.data.UseCustomColorName) {
                                                                                        return _MonsterCustomColorNameConfig[monsterId].Name[lang]
                                                                                    }
                                                                                    return d.data.Name[lang]
                                                                                }],
                                                                                style: {
                                                                                    color: function (d) {
                                                                                        return computer_.TextColorConfig[d.data.Color] || '';
                                                                                    }
                                                                                },
                                                                                class: 'monster-name'
                                                                            }, {
                                                                                span: ' x' + num,
                                                                                when: function () {
                                                                                    return num
                                                                                }
                                                                            },
                                                                            {
                                                                                em: ' *',
                                                                                style: {
                                                                                    "font-style": "normal",
                                                                                    "font-weight": "600",
                                                                                    "color": "#000"
                                                                                },
                                                                                when: function () {
                                                                                    return mask;
                                                                                },
                                                                                class: 'monster-name-ast'
                                                                            }
                                                                            ],
                                                                            attr: { target: '_blank' }
                                                                        }, affix_s_h(m)]
                                                                    }, {
                                                                        div: [{
                                                                            em: '↓',
                                                                            when: function () {
                                                                                return hpDown
                                                                            },
                                                                            style: {
                                                                                'margin-right': "10px"
                                                                            },
                                                                            class: 'lrhp'
                                                                        }, {
                                                                            em: '↑',
                                                                            when: function () {
                                                                                return hpUp
                                                                            },
                                                                            style: {
                                                                                'margin-right': "10px"
                                                                            },
                                                                            class: 'lrhp'
                                                                        }, {
                                                                            span: function (d) {
                                                                                var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                                var lv = _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level;
                                                                                var hpc = _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].HPCoeff;
                                                                                var a = computer_.LevelCurves[lv][d.data.HPCurve];
                                                                                var hp = hpOverride ? hpOverride : d.data.HP;
                                                                                var num = a * hp * hpc;
                                                                                return num.toFixed(0);
                                                                            },
                                                                            class: 'lrhp'
                                                                        }],
                                                                        style: {
                                                                            display: 'flex',
                                                                            'align-items': 'center',
                                                                            'margin-left': '5px',
                                                                        }
                                                                    }]
                                                                })
                                                            }
                                                        }],
                                                        datapath: 'monsters'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Upper'
                                    },
                                    class: 'u_l_w'
                                }
                            ],
                            class: 'upper'
                        },
                        {
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [function (d) {
                                                return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Text[lang]
                                            }, {
                                                i: function (d) {
                                                    return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover[lang]
                                                },
                                                when: function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover
                                                },
                                                width: '450px'
                                            }],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[1]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class
                                    });
                                },
                                {
                                    ul: {
                                        li: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [weav.Show.Text[lang], {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px'
                                                        }],
                                                        class: 'weav_hover'
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            'font-weight': function (d) {
                                                                return weav.Show.Bold ? 600 : 500
                                                            },
                                                            color: function (d) {
                                                                var color = weav.Show.Color;
                                                                return computer_.TextColorConfig[color] || '#808080';
                                                            },
                                                            "font-size": '12px'
                                                        }
                                                    }],
                                                    class: this_class
                                                }, {
                                                    ol: {
                                                        li: [{
                                                            monster: function (m) {
                                                                var monster = _Monsters[m.data.ID];
                                                                var monsterId = m.data.ID;
                                                                var num = m.data.Num;
                                                                var mask = m.data.Mark || false;
                                                                var hpDown = m.data.HPDown || false;
                                                                var hpUp = m.data.HPUp || false;
                                                                var hpOverride = m.data.HPOverride;
                                                                var nameOverride = m.data.Name || false;
                                                                var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                if (!monster) {
                                                                    return;
                                                                }
                                                                $(m.container).render({
                                                                    data: monster,
                                                                    template: [{
                                                                        div: [{
                                                                            a: function (d) {
                                                                                var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                                return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                            },
                                                                            t: [{
                                                                                img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                            }, {
                                                                                span: [{
                                                                                    em: '*',
                                                                                    style: {
                                                                                        "font-style": "normal",
                                                                                        "font-weight": "600",
                                                                                        "color": "#000"
                                                                                    },
                                                                                    when: function () {
                                                                                        return mask;
                                                                                    }
                                                                                }, function (d) {
                                                                                    if (nameOverride) {
                                                                                        return nameOverride[lang]
                                                                                    }
                                                                                    if (d.data.UseCustomColorName) {
                                                                                        return _MonsterCustomColorNameConfig[monsterId].Name[lang]
                                                                                    }
                                                                                    return d.data.Name[lang]
                                                                                }],
                                                                                style: {
                                                                                    color: function (d) {
                                                                                        return computer_.TextColorConfig[d.data.Color] || '';
                                                                                    }
                                                                                },
                                                                                class: 'monster-name'
                                                                            }, {
                                                                                span: ' x' + num,
                                                                                when: function () {
                                                                                    return num
                                                                                }
                                                                            },
                                                                            {
                                                                                em: ' *',
                                                                                style: {
                                                                                    "font-style": "normal",
                                                                                    "font-weight": "600",
                                                                                    "color": "#000"
                                                                                },
                                                                                when: function () {
                                                                                    return mask;
                                                                                },
                                                                                class: 'monster-name-ast'
                                                                            }],
                                                                            attr: { target: '_blank' }
                                                                        }, affix_s_h(m)]
                                                                    }, {
                                                                        div: [{
                                                                            em: '↓',
                                                                            when: function () {
                                                                                return hpDown
                                                                            },
                                                                            style: {
                                                                                'margin-right': "10px"
                                                                            },
                                                                            class: 'lrhp'
                                                                        }, {
                                                                            em: '↑',
                                                                            when: function () {
                                                                                return hpUp
                                                                            },
                                                                            style: {
                                                                                'margin-right': "10px"
                                                                            },
                                                                            class: 'lrhp'
                                                                        }, {
                                                                            span: function (d) {
                                                                                var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                                var lv = _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level;
                                                                                var hpc = _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].HPCoeff;
                                                                                var a = computer_.LevelCurves[lv][d.data.HPCurve];
                                                                                var hp = hpOverride ? hpOverride : d.data.HP;
                                                                                var num = a * hp * hpc;
                                                                                return num.toFixed(0);
                                                                            },
                                                                            class: 'lrhp'
                                                                        }],
                                                                        style: {
                                                                            display: 'flex',
                                                                            'align-items': 'center',
                                                                            'margin-left': '5px',
                                                                        }
                                                                    }]
                                                                })
                                                            }
                                                        }],
                                                        datapath: 'monsters'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Lower'
                                    },
                                    class: 'u_l_w'
                                }
                            ],
                            class: 'lower'
                        }
                        ],
                        class: 'up_low',
                        when: UI % 2 == 1
                    }, {
                        div: [{
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [
                                                function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Text[lang]
                                                },
                                                {
                                                    i: function (d) {
                                                        return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover[lang]
                                                    },
                                                    when: function (d) {
                                                        return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover
                                                    },
                                                    width: '450px'
                                                }
                                            ],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[0]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class
                                    });
                                },
                                {
                                    div: {
                                        div: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [weav.Show.Text[lang], {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px'
                                                        }],
                                                        class: 'weav_hover'
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            color: '#808080',
                                                            "font-size": '12px'
                                                        }
                                                    }],
                                                    class: this_class
                                                }, {
                                                    moster: {
                                                        div: [
                                                            {
                                                                a: function (d) {
                                                                    var monsterId = d.data.ID;
                                                                    var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                    return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                },
                                                                attr: { target: '_blank' },
                                                                t: function (m) {
                                                                    var monster = _Monsters[m.data.ID];
                                                                    var num = m.data.Num;
                                                                    var mask = m.data.Mark || false;
                                                                    var hpDown = m.data.HPDown || false;
                                                                    var hpUp = m.data.HPUp || false;
                                                                    var hpOverride = m.data.HPOverride;
                                                                    var nameOverride = m.data.Name || false;
                                                                    var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                    if (!monster) return;
                                                                    $(m.container).render([
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: '⊗',
                                                                                    class: 'monicon_mark',
                                                                                    when: mask
                                                                                },
                                                                                {
                                                                                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                                    class: 'monicon'
                                                                                },
                                                                                {
                                                                                    span: (num || '?').toString(),
                                                                                    class: 'monicon_num',
                                                                                    when: num,
                                                                                }
                                                                            ],
                                                                            class: 'monicon_container'
                                                                        },
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: [function (d) {
                                                                                        if (monster.UseCustomColorName && !nameOverride) {
                                                                                            return _MonsterCustomColorNameConfig[monster._id].Name[lang]
                                                                                        } else {
                                                                                            var mon_color = computer_.TextColorConfig[monster.Color ? monster.Color : "None"]
                                                                                            if (nameOverride) return "<color style='color:" + mon_color + ";'>" + nameOverride[lang] + "</color>"
                                                                                            return "<color style='color:" + mon_color + ";'>" + monster.Name[lang] + "</color>"
                                                                                        }
                                                                                    }, affix_s_h(m)],
                                                                                    class: 'monname'
                                                                                },
                                                                                {
                                                                                    br: ''
                                                                                },
                                                                                {
                                                                                    span: function (d) {
                                                                                        var HPBase = monster.HP
                                                                                        if (hpOverride) HPBase = hpOverride
                                                                                        var HPCurve = monster.HPCurve
                                                                                        var inter = _SpiralAbyssFloorEntryToLevelCoeffConfig[$(d.container).parents('.up_low').siblings('h6').attr('data-name')]
                                                                                        var HP = Math.round(HPBase * computer_.LevelCurves[inter.Level][HPCurve] * inter.HPCoeff)
                                                                                        var s = 'HP <color style="color:#cc0000;">' + HP + '</color>'
                                                                                        if (hpDown) s = 'HP <color style="color:#cc0000;">' + HP + ' ↓</color>'
                                                                                        if (hpUp) s = 'HP <color style="color:#cc0000;">' + HP + ' ↑</color>'
                                                                                        return s
                                                                                    }
                                                                                },
                                                                            ],
                                                                            class: 'monright'
                                                                        }
                                                                    ])
                                                                },
                                                                class: 'monster_card'
                                                            },
                                                            affix_hover
                                                        ],
                                                        datapath: 'monsters',
                                                        class: 'acc'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Upper'
                                    },
                                    class: 'u_l_w',
                                    style: {
                                        'padding-right': '0px'
                                    }
                                }
                            ],
                            class: 'upper'
                        },
                        {
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [function (d) {
                                                return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Text[lang]
                                            }, {
                                                i: function (d) {
                                                    return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover[lang]
                                                },
                                                when: function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover
                                                },
                                                width: '450px'
                                            }],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[1]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class
                                    });
                                },
                                {
                                    div: {
                                        div: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [weav.Show.Text[lang], {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px'
                                                        }],
                                                        class: 'weav_hover'
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            'font-weight': function (d) {
                                                                return weav.Show.Bold ? 600 : 500
                                                            },
                                                            color: function (d) {
                                                                var color = weav.Show.Color;
                                                                return computer_.TextColorConfig[color] || '#808080';
                                                            },
                                                            "font-size": '12px'
                                                        }
                                                    }],
                                                    class: this_class
                                                }, {
                                                    moster: {
                                                        div: [
                                                            {
                                                                a: function (d) {
                                                                    var monsterId = d.data.ID;
                                                                    var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                    return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                },
                                                                attr: { target: '_blank' },
                                                                t: function (m) {
                                                                    var monster = _Monsters[m.data.ID];
                                                                    var num = m.data.Num;
                                                                    var mask = m.data.Mark || false;
                                                                    var hpDown = m.data.HPDown || false;
                                                                    var hpUp = m.data.HPUp || false;
                                                                    var hpOverride = m.data.HPOverride;
                                                                    var nameOverride = m.data.Name || false;
                                                                    var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                    if (!monster) return;
                                                                    $(m.container).render([
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: '⊗',
                                                                                    class: 'monicon_mark',
                                                                                    when: mask
                                                                                },
                                                                                {
                                                                                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                                    class: 'monicon'
                                                                                },
                                                                                {
                                                                                    span: (num || '?').toString(),
                                                                                    class: 'monicon_num',
                                                                                    when: num,
                                                                                }
                                                                            ],
                                                                            class: 'monicon_container'
                                                                        },
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: [function (d) {
                                                                                        if (monster.UseCustomColorName && !nameOverride) {
                                                                                            return _MonsterCustomColorNameConfig[monster._id].Name[lang]
                                                                                        } else {
                                                                                            var mon_color = computer_.TextColorConfig[monster.Color ? monster.Color : "None"]
                                                                                            if (nameOverride) return "<color style='color:" + mon_color + ";'>" + nameOverride[lang] + "</color>"
                                                                                            return "<color style='color:" + mon_color + ";'>" + monster.Name[lang] + "</color>"
                                                                                        }
                                                                                    }, affix_s_h(m)],
                                                                                    class: 'monname'
                                                                                },
                                                                                {
                                                                                    br: ''
                                                                                },
                                                                                {
                                                                                    span: function (d) {
                                                                                        var HPBase = monster.HP
                                                                                        if (hpOverride) HPBase = hpOverride
                                                                                        var HPCurve = monster.HPCurve
                                                                                        var inter = _SpiralAbyssFloorEntryToLevelCoeffConfig[$(d.container).parents('.up_low').siblings('h6').attr('data-name')]
                                                                                        var HP = Math.round(HPBase * computer_.LevelCurves[inter.Level][HPCurve] * inter.HPCoeff)
                                                                                        var s = 'HP <color style="color:#cc0000;">' + HP + '</color>'
                                                                                        if (hpDown) s = 'HP <color style="color:#cc0000;">' + HP + ' ↓</color>'
                                                                                        if (hpUp) s = 'HP <color style="color:#cc0000;">' + HP + ' ↑</color>'
                                                                                        return s
                                                                                    }
                                                                                },
                                                                            ],
                                                                            class: 'monright'
                                                                        }
                                                                    ])
                                                                },
                                                                class: 'monster_card'
                                                            }, affix_hover
                                                        ],
                                                        datapath: 'monsters',
                                                        class: 'acc'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Lower'
                                    },
                                    class: 'u_l_w',
                                    style: {
                                        'padding-right': '0px'
                                    }
                                }
                            ],
                            class: 'lower'
                        }
                        ],
                        class: 'up_low',
                        when: false
                    }, {
                        div: [{
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [
                                                function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Text[lang]
                                                },
                                                {
                                                    i: function (d) {
                                                        return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover[lang]
                                                    },
                                                    when: function (d) {
                                                        return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Hover
                                                    },
                                                    width: '450px'
                                                }
                                            ],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[0]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                },
                                                display: 'table',
                                                margin: 'auto',
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[0]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[0]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class,
                                        style: {
                                            'padding-left': '0px',
                                            'padding-right': '0px'
                                        }
                                    });
                                },
                                {
                                    div: {
                                        div: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [w(weav.Show.Text[lang]), {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px',
                                                            style: {
                                                                left: 'calc(50% - 120px)',
                                                                bottom: 'calc(100% + 5px)'
                                                            }
                                                        }],
                                                        class: 'weav_hover',
                                                        style: {
                                                            display: 'table',
                                                            margin: '0px auto 8px',
                                                            padding: '0px 20px',
                                                            'text-align': 'center'
                                                        }
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            color: '#808080',
                                                            "font-size": '12px',
                                                            display: 'table',
                                                            margin: 'auto'
                                                        }
                                                    }],
                                                    class: this_class,
                                                    style: {
                                                        'padding-top': '10px'
                                                    }
                                                }, {
                                                    moster: {
                                                        div: [
                                                            {
                                                                a: function (d) {
                                                                    var monsterId = d.data.ID;
                                                                    var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                    return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                },
                                                                attr: { target: '_blank' },
                                                                t: function (m) {
                                                                    var monster = _Monsters[m.data.ID];
                                                                    var num = m.data.Num;
                                                                    var mask = m.data.Mark || false;
                                                                    var hpDown = m.data.HPDown || false;
                                                                    var hpUp = m.data.HPUp || false;
                                                                    var hpOverride = m.data.HPOverride;
                                                                    var nameOverride = m.data.Name || false;
                                                                    var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                    if (!monster) return;
                                                                    $(m.container).render([
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: '⊗',
                                                                                    class: 'monicon_mark',
                                                                                    when: mask
                                                                                },
                                                                                {
                                                                                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                                    class: 'monicon'
                                                                                },
                                                                                {
                                                                                    span: (num || '?').toString(),
                                                                                    class: 'monicon_num',
                                                                                    when: num,
                                                                                }
                                                                            ],
                                                                            class: 'monicon_container'
                                                                        },
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: function (d) {
                                                                                        var HPBase = monster.HP
                                                                                        if (hpOverride) HPBase = hpOverride
                                                                                        var HPCurve = monster.HPCurve
                                                                                        var inter = _SpiralAbyssFloorEntryToLevelCoeffConfig[$(d.container).parents('.up_low').siblings('h6').attr('data-name')]
                                                                                        var HP = Math.round(HPBase * computer_.LevelCurves[inter.Level][HPCurve] * inter.HPCoeff)
                                                                                        var s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + '</color></b>'
                                                                                        if (hpDown) s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + ' ↓</color></b>'
                                                                                        if (hpUp) s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + ' ↑</color></b>'
                                                                                        return s
                                                                                    }
                                                                                },
                                                                            ],
                                                                            class: 'monbelow'
                                                                        },
                                                                        {
                                                                            div: {
                                                                                p: m.data.Note ? m.data.Note.Text[lang] : '',
                                                                                style: {
                                                                                    color: function (j) {
                                                                                        if (!m.data.Note) return ''
                                                                                        return m.data.Note.Color ? (computer_.TextColorConfig[m.data.Note.Color] ? computer_.TextColorConfig[m.data.Note.Color] : m.data.Note.Color) : '#808080';
                                                                                    },
                                                                                    'font-size': function (j) {
                                                                                        if (!m.data.Note) return ''
                                                                                        if (!m.data.Note.Scale) return ''
                                                                                        if (!m.data.Note.Scale[lang]) return ''
                                                                                        return m.data.Note.Scale[lang] + 'em'
                                                                                    }
                                                                                },
                                                                            },
                                                                            class: 'monnote',
                                                                            when: (m.data.Note != undefined)
                                                                        }
                                                                    ])
                                                                },
                                                                class: 'monster_card'
                                                            },
                                                            {
                                                                div: {
                                                                    div: [
                                                                        {
                                                                            p: function (m) {
                                                                                var monster = _Monsters[m.data.ID];
                                                                                var nameOverride = m.data.Name || false;
                                                                                if (nameOverride) {
                                                                                    return nameOverride[lang]
                                                                                }
                                                                                if (monster.UseCustomColorName) {
                                                                                    return _MonsterCustomColorNameConfig[m.data.ID].Name[lang]
                                                                                }
                                                                                return monster.Name[lang]
                                                                            },
                                                                            class: 'mon_hover_name',
                                                                            style: {
                                                                                color: function (m) {
                                                                                    return computer_.TextColorConfig[_Monsters[m.data.ID].Color] || '';
                                                                                }
                                                                            },
                                                                        },
                                                                        {
                                                                            p: {
                                                                                span: function (d) {
                                                                                    var t = _SpiralAbyssAffixDescConfig[d.data].Show.Text[lang]
                                                                                    if (t.substring(0, 1) == " ") t = t.substring(1)
                                                                                    return t
                                                                                },
                                                                                style: {
                                                                                    color: function (d) {
                                                                                        var color = _SpiralAbyssAffixDescConfig[d.data].Show.Color;
                                                                                        return computer_.TextColorConfig[color] || '';
                                                                                    },
                                                                                    'font-weight': function (d) {
                                                                                        var bold = _SpiralAbyssAffixDescConfig[d.data].Show.Bold;
                                                                                        return bold ? 600 : 500;
                                                                                    },
                                                                                    'margin-left': '0',
                                                                                    'margin-top': '5px',
                                                                                },
                                                                                class: 'affix_s_h',
                                                                                datapath: 'Affix',
                                                                            },
                                                                            class: 'mon_hover_affix',
                                                                            when: function (d) {
                                                                                return d.data.Affix && d.data.Affix.length
                                                                            }
                                                                        }
                                                                    ],
                                                                    class: 'acc_hover_',
                                                                    style: {
                                                                        'border-color': function (m) {
                                                                            return computer_.TextColorConfig[_Monsters[m.data.ID].Color] || '';
                                                                        }
                                                                    },
                                                                },
                                                                class: 'acc_hover'
                                                            }
                                                        ],
                                                        datapath: 'monsters',
                                                        class: 'acc'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Upper'
                                    },
                                    class: 'u_l_w',
                                    style: {
                                        'padding-left': '0px',
                                        'padding-right': '0px',
                                        'padding-top': '15px'
                                    }
                                }
                            ],
                            class: 'upper'
                        },
                        {
                            div: [
                                function (p) {
                                    var ver_list = p.data.GadgetVers;
                                    if (!ver_list) {
                                        var this_class = 'u_l_g'
                                    } else {
                                        var this_class = 'u_l_g sw'
                                        for (var j = 0; j < ver_list.length; j++) {
                                            this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                        }
                                    }
                                    $(p.container).render({
                                        div: {
                                            span: [function (d) {
                                                return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Text[lang]
                                            }, {
                                                i: function (d) {
                                                    return computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover[lang]
                                                },
                                                when: function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Hover
                                                },
                                                width: '450px'
                                            }],
                                            style: {
                                                'font-weight': function (d) {
                                                    return _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Bold ? 600 : 500
                                                },
                                                color: function (d) {
                                                    var color = _SpiralAbyssGadgetDescConfig[d.data.Gadgets[1]].Show.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                },
                                                display: 'table',
                                                margin: 'auto',
                                            }
                                        },
                                        when: function (d) {
                                            return d.data.Gadgets && d.data.Gadgets.length && d.data.Gadgets[1]
                                        },
                                        click: function (d) {
                                            var hover = _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Hover[lang]
                                            if (!hover) {
                                                return;
                                            }
                                            poplayer({
                                                header: _SpiralAbyssGadgetDescConfig[d.org_data.Gadgets[1]].Show.Text[lang],
                                                width: '50%',
                                                height: '400px',
                                                template: {
                                                    div: "<span style='font-size:13px'><b>" + computer_.MiscText.Abyss_Show[lang] + "</b></span><br><br>" + hover
                                                },
                                                class: 'need_header'
                                            })
                                        },
                                        class: this_class,
                                        style: {
                                            'padding-left': '0px',
                                            'padding-right': '0px'
                                        }
                                    });
                                },
                                {
                                    div: {
                                        div: function (p) {
                                            var weav = _SpiralAbyssWaveDescConfig[p.data.WaveDesc];
                                            var extraDesc = p.data.ExtraDesc && p.data.ExtraDesc[lang];
                                            var monsters = p.data.Monsters;
                                            var ver_list = p.data.Vers;
                                            if (!ver_list) {
                                                var this_class = ''
                                            } else {
                                                var this_class = 'sw'
                                                for (var j = 0; j < ver_list.length; j++) {
                                                    this_class = this_class.concat(' sw-' + ver_list[j].toString())
                                                }
                                            }
                                            $(p.container).render({
                                                data: { monsters: monsters },
                                                template: [{
                                                    div: [{
                                                        span: [w(weav.Show.Text[lang]), {
                                                            i: weav.Hover && weav.Hover[lang],
                                                            when: function () {
                                                                return weav.Hover && weav.Hover[lang]
                                                            },
                                                            width: '240px',
                                                            style: {
                                                                left: 'calc(50% - 120px)',
                                                                bottom: 'calc(100% + 5px)'
                                                            }
                                                        }],
                                                        class: 'weav_hover',
                                                        style: {
                                                            display: 'table',
                                                            margin: '0px auto 8px',
                                                            padding: '0px 20px',
                                                            'text-align': 'center'
                                                        }
                                                    }, {
                                                        span: extraDesc,
                                                        when: function () {
                                                            return extraDesc
                                                        },
                                                        style: {
                                                            'font-weight': function (d) {
                                                                return weav.Show.Bold ? 600 : 500
                                                            },
                                                            color: function (d) {
                                                                var color = weav.Show.Color;
                                                                return computer_.TextColorConfig[color] || '#808080';
                                                            },
                                                            "font-size": '12px',
                                                            display: 'table',
                                                            margin: 'auto'
                                                        }
                                                    }],
                                                    class: this_class,
                                                    style: {
                                                        'padding-top': '10px'
                                                    }
                                                }, {
                                                    moster: {
                                                        div: [
                                                            {
                                                                a: function (d) {
                                                                    var monsterId = d.data.ID;
                                                                    var interval = $(d.container).parents('.up_low').siblings('h6').attr('data-name')
                                                                    return '/gi/monster?lang=' + lang + '&id=' + monsterId + '&level=' + interval
                                                                },
                                                                attr: { target: '_blank' },
                                                                t: function (m) {
                                                                    var monster = _Monsters[m.data.ID];
                                                                    var num = m.data.Num;
                                                                    var mask = m.data.Mark || false;
                                                                    var hpDown = m.data.HPDown || false;
                                                                    var hpUp = m.data.HPUp || false;
                                                                    var hpOverride = m.data.HPOverride;
                                                                    var nameOverride = m.data.Name || false;
                                                                    var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                                                    if (!monster) return;
                                                                    $(m.container).render([
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: '⊗',
                                                                                    class: 'monicon_mark',
                                                                                    when: mask
                                                                                },
                                                                                {
                                                                                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                                                    class: 'monicon'
                                                                                },
                                                                                {
                                                                                    span: (num || '?').toString(),
                                                                                    class: 'monicon_num',
                                                                                    when: num,
                                                                                }
                                                                            ],
                                                                            class: 'monicon_container'
                                                                        },
                                                                        {
                                                                            div: [
                                                                                {
                                                                                    span: function (d) {
                                                                                        var HPBase = monster.HP
                                                                                        if (hpOverride) HPBase = hpOverride
                                                                                        var HPCurve = monster.HPCurve
                                                                                        var inter = _SpiralAbyssFloorEntryToLevelCoeffConfig[$(d.container).parents('.up_low').siblings('h6').attr('data-name')]
                                                                                        var HP = Math.round(HPBase * computer_.LevelCurves[inter.Level][HPCurve] * inter.HPCoeff)
                                                                                        var s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + '</color></b>'
                                                                                        if (hpDown) s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + ' ↓</color></b>'
                                                                                        if (hpUp) s = '<b><color style="color:' + (computer_.TextColorConfig[monster.Color] || '') + ';">' + HP + ' ↑</color></b>'
                                                                                        return s
                                                                                    }
                                                                                },
                                                                            ],
                                                                            class: 'monbelow'
                                                                        },
                                                                        {
                                                                            div: {
                                                                                p: m.data.Note ? m.data.Note.Text[lang] : '',
                                                                                style: {
                                                                                    color: function (j) {
                                                                                        if (!m.data.Note) return ''
                                                                                        return m.data.Note.Color ? (computer_.TextColorConfig[m.data.Note.Color] ? computer_.TextColorConfig[m.data.Note.Color] : m.data.Note.Color) : '#808080';
                                                                                    },
                                                                                    'font-size': function (j) {
                                                                                        if (!m.data.Note) return ''
                                                                                        if (!m.data.Note.Scale) return ''
                                                                                        if (!m.data.Note.Scale[lang]) return ''
                                                                                        return m.data.Note.Scale[lang] + 'em'
                                                                                    }
                                                                                },
                                                                            },
                                                                            class: 'monnote',
                                                                            when: (m.data.Note != undefined)
                                                                        }
                                                                    ])
                                                                },
                                                                class: 'monster_card'
                                                            },
                                                            {
                                                                div: {
                                                                    div: [
                                                                        {
                                                                            p: function (m) {
                                                                                var monster = _Monsters[m.data.ID];
                                                                                var nameOverride = m.data.Name || false;
                                                                                if (nameOverride) {
                                                                                    return nameOverride[lang]
                                                                                }
                                                                                if (monster.UseCustomColorName) {
                                                                                    return _MonsterCustomColorNameConfig[m.data.ID].Name[lang]
                                                                                }
                                                                                return monster.Name[lang]
                                                                            },
                                                                            class: 'mon_hover_name',
                                                                            style: {
                                                                                color: function (m) {
                                                                                    return computer_.TextColorConfig[_Monsters[m.data.ID].Color] || '';
                                                                                }
                                                                            },
                                                                        },
                                                                        {
                                                                            p: {
                                                                                span: function (d) {
                                                                                    var t = _SpiralAbyssAffixDescConfig[d.data].Show.Text[lang]
                                                                                    if (t.substring(0, 1) == " ") t = t.substring(1)
                                                                                    return t
                                                                                },
                                                                                style: {
                                                                                    color: function (d) {
                                                                                        var color = _SpiralAbyssAffixDescConfig[d.data].Show.Color;
                                                                                        return computer_.TextColorConfig[color] || '';
                                                                                    },
                                                                                    'font-weight': function (d) {
                                                                                        var bold = _SpiralAbyssAffixDescConfig[d.data].Show.Bold;
                                                                                        return bold ? 600 : 500;
                                                                                    },
                                                                                    'margin-left': '0',
                                                                                    'margin-top': '5px',
                                                                                },
                                                                                class: 'affix_s_h',
                                                                                datapath: 'Affix',
                                                                            },
                                                                            class: 'mon_hover_affix',
                                                                            when: function (d) {
                                                                                return d.data.Affix && d.data.Affix.length
                                                                            }
                                                                        }
                                                                    ],
                                                                    class: 'acc_hover_',
                                                                    style: {
                                                                        'border-color': function (m) {
                                                                            return computer_.TextColorConfig[_Monsters[m.data.ID].Color] || '';
                                                                        }
                                                                    },
                                                                },
                                                                class: 'acc_hover'
                                                            }
                                                        ],
                                                        datapath: 'monsters',
                                                        class: 'acc'
                                                    },
                                                    class: this_class
                                                }]
                                            })
                                        },
                                        datapath: 'Lower'
                                    },
                                    class: 'u_l_w',
                                    style: {
                                        'padding-left': '0px',
                                        'padding-right': '0px',
                                        'padding-top': '15px'
                                    }
                                }
                            ],
                            class: 'lower'
                        }
                        ],
                        class: 'up_low',
                        when: UI % 2 == 0
                    }],
                    datapath: 'Chambers'
                }
            }]
        })
        $('.a_floor').show();
        $('.version-choose').val(selected);
        toggle_ver_instant(selected);
    }

    function bufferPop(d) {
        poplayer({
            header: cur_schedule_ver + ' ' + d.org_data.Name,
            width: '90%',
            data: d.org_data.Buff,
            template: {
                ul: [{
                    li: {
                        ol: {
                            li: function (d) {
                                var s_a_b = computer_.SpiralAbyssBuffDescConfig[d.data];
                                $(d.container).render({
                                    data: s_a_b,
                                    template: [
                                        {
                                            img: imgpre + 'homdgcat-res/monster/[[Icon]].png',
                                            class: 'b_icon'
                                        },
                                        {
                                            span: `[[LastingTypeDesc/Text/${lang}]]`,
                                            style: {
                                                color: function (d) {
                                                    var color = d.data.LastingTypeDesc.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        }, {
                                            span: `[[EffectDesc/${lang}]]`,
                                            class: 'buffer_desc'
                                        }]
                                })
                            },
                            datapath: 'Buff1'
                        }
                    },
                    class: 'buff_1'
                }, {
                    li: {
                        ol: {
                            li: function (d) {
                                var s_a_b = computer_.SpiralAbyssBuffDescConfig[d.data];
                                $(d.container).render({
                                    data: s_a_b,
                                    template: [
                                        {
                                            img: imgpre + 'homdgcat-res/monster/[[Icon]].png',
                                            class: 'b_icon'
                                        },
                                        {
                                            span: `[[LastingTypeDesc/Text/${lang}]]`,
                                            style: {
                                                color: function (d) {
                                                    var color = d.data.LastingTypeDesc.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        }, {
                                            span: `[[EffectDesc/${lang}]]`,
                                            class: 'buffer_desc'
                                        }]
                                })
                            },
                            datapath: 'Buff2'
                        }
                    },
                    class: 'buff_2'
                }, {
                    li: {
                        ol: {
                            li: function (d) {
                                var s_a_b = computer_.SpiralAbyssBuffDescConfig[d.data];
                                $(d.container).render({
                                    data: s_a_b,
                                    template: [
                                        {
                                            img: imgpre + 'homdgcat-res/monster/[[Icon]].png',
                                            class: 'b_icon'
                                        },
                                        {
                                            span: `[[LastingTypeDesc/Text/${lang}]]`,
                                            style: {
                                                color: function (d) {
                                                    var color = d.data.LastingTypeDesc.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                }
                                            }
                                        }, {
                                            span: `[[EffectDesc/${lang}]]`,
                                            class: 'buffer_desc'
                                        }]
                                })
                            },
                            datapath: 'Buff3'
                        }
                    },
                    class: 'buff_3'
                }],
                class: 'buffer_pop'
            },
            class: 'buffer_poplayer'
        })
    }

    function condPop(d) {
        var data = {
            GoalType: computer_.SpiralAbyssGoalTypeTemplateConfig[d.org_data.GoalType],
            GoalParam: computer_.SpiralAbyssGoalParamTemplateConfig[d.org_data.GoalParam]
        }
        poplayer({
            header: computer_.SpiralAbyssGoalTypeTemplateConfig[d.org_data.GoalType][lang],
            width: '40%',
            data: data,
            template: {
                div: [{
                    ul: {
                        li: `[[${lang}]]`,
                        datapath: 'GoalParam'
                    }
                }],
                class: 'cond_pop'
            },
            class: 'need_header'
        })
    }

    function toggle_ver_instant(select_value) {
        showdps = select_value == selected
        $('.dps_show_container').empty().each(function () {
            $(this).render(dps_show_container_())
        })
        select_class = '.sw-' + select_value.toString();
        $('.sw').hide();
        $(select_class).show();
    }

    function dpsdict(datas) {
        var out = {}
        datas.forEach(function (v) {
            if (v.Chamber) {
                out[v.Chamber] = {}
                v.Data.forEach(function (u) {
                    out[v.Chamber][u.Ver] = u.DPS
                })
            }
        })
        return out
    }

    function dps_show_container_() {
        return {
            span: function (p) {
                var dps_num = ""
                if (p.data.DPS && p.data.DPS[select_value.toString()]) {
                    dps_num = p.data.DPS[select_value.toString()]
                } else if (DPSDict[p.data.Name] && DPSDict[p.data.Name][cur_schedule_ver]) {
                    dps_num = DPSDict[p.data.Name][cur_schedule_ver]
                }
                return computer_.MiscText.Abyss_DPS_Show[lang] + "<color style='color:#ff0000;'><b>" + dps_num + "</b></color>"
            },
            style: {
                'display': 'block',
                'font-weight': '500',
            },
            class: 'dps-show',
            when: function (p) {
                return (p.data.DPS && p.data.DPS[select_value.toString()]) || (DPSDict[p.data.Name] && DPSDict[p.data.Name][cur_schedule_ver])
            }
        }
    }

    $("body").on("change", ".version-choose", function () {
        select_value = $(this).val();
        $('.version-choose').val(select_value);
        toggle_ver_instant(select_value)
    });

    $("body").on("mouseenter", ".u_l_g span,.affix_s_h,.weav_hover", function () {
        $(this).find("i").show();
    });
    $("body").on("mouseleave", ".u_l_g span,.affix_s_h,.weav_hover", function () {
        $(this).find("i").hide();
    });

    $("body").on("mouseenter", ".acc .monicon", function () {
        $(this).closest('.acc').find(".acc_hover").show();
    });
    $("body").on("mouseleave", ".acc .monicon", function () {
        $(this).closest('.acc').find(".acc_hover").hide();
    });

    $("body").on("mouseenter", ".affix_s_h", function () {
        $(this).parents('.acc').find("i").show();
    });
    $("body").on("mouseleave", ".affix_s_h", function () {
        $(this).parents('.acc').find("i").hide();
    });

    $("body").on("click", ".ui", function () {
        UI = 1 - UI
        if (cur_floor_index) renderFloorPre(cur_floor_index)
        $(".ui").html(computer_.MiscText.Abyss_UI[UI][lang])
    });

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    $("body").on("click", ".title", function () {
        moreless += 1
        if (moreless % 2 == 1) {
            $('.less').show()
            $('.more').hide()
            $('.a_floor_button').hide()
            $('.a_select').hide()
            $('.generation').hide()
            $('.schedule').hide()
            $('.p_h').show()
            $('.p_b').show()
            if ($('#_H_').val() != '1') $('.p_b').css('margin-top', '30px')
            if ($('#_H_').val() == '1') $('.p_b').css('margin-top', '25px')
            $('h3 .links').html("<p style='margin-top:13px;color:#df903b;cursor:pointer;'><b>[ " + ((lang == 'CH') ? 'abyss.wiki / homdgcat.wiki' : 'en.abyss.wiki / en.homdgcat.wiki') + " ]</b></p>")
            $('.tlsub').hide()
            $('h3 .subtitle').html(computer_.MiscText.Subtitle_[lang])
            $('h3 .title').html(computer_.MiscText.ComputerTitle_[lang] + '<b>' + cur_schedule_name + '</b>')
            $('h3 .subtitle').css('font-size', '18px')
            $('.ui').hide()
            $('.showtop').hide()
            if ($('#_H_').val() == '1') $('.p_h').hide()
        } else {
            $('.less').hide()
            $('.more').show()
            $('.a_floor_button').show()
            $('.a_select').show()
            if (!showtop) {
                $('.generation').css('display', 'flex')
                $('.schedule').css('display', 'flex')
            }
            $('.p_b').css('margin-top', '')
            if (cur_select_floororchart != 0) {
                $('.p_h').hide()
            }
            if (cur_select_floororchart != 1) {
                $('.p_b').hide()
            }
            $('h3 .links').html(computer_.MiscText.Page[lang])
            $('.tlsub').show()
            $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang])
            $('h3 .title').html(computer_.MiscText.ComputerTitle[lang])
            $('h3 .subtitle').css('font-size', '')
            $('.ui').show()
            $('.showtop').show()
        }
    });

    function affix_s_h(m) {
        return {
            span: function (d) {
                var affix = m.data.Affix;
                $(d.container).render({
                    data: affix,
                    template: {
                        span: [{
                            em: function (d) {
                                return _SpiralAbyssAffixDescConfig[d.data].Show.Text[lang]
                            },
                            click: function (d) {
                                var hover = _SpiralAbyssAffixDescConfig[d.org_data].Hover && (_SpiralAbyssAffixDescConfig[d.org_data].Hover[lang]);
                                if (!hover) {
                                    return;
                                }
                                poplayer({
                                    header: _SpiralAbyssAffixDescConfig[d.org_data].Show.Text[lang],
                                    width: '50%',
                                    height: '400px',
                                    template: {
                                        div: "<p style='font-size:13px;color:#FFCC44;text-align:center;padding-bottom:12px'>" + computer_.MiscText.Abyss_Show[lang] + "</p>" + hover
                                    },
                                    class: 'need_header'
                                })
                            }
                        }, {
                            i: function (d) {
                                var hover = _SpiralAbyssAffixDescConfig[d.data].Hover && (computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssAffixDescConfig[d.data].Hover[lang])
                                return hover
                            },
                            when: function (d) {
                                return _SpiralAbyssAffixDescConfig[d.data].Hover && _SpiralAbyssAffixDescConfig[d.data].Hover[lang]
                            },
                            width: '270px',
                            when: UI % 2 == 1
                        }],
                        style: {
                            color: function (d) {
                                var color = _SpiralAbyssAffixDescConfig[d.data].Show.Color;
                                return computer_.TextColorConfig[color] || '';
                            },
                            'font-weight': function (d) {
                                var bold = _SpiralAbyssAffixDescConfig[d.data].Show.Bold;
                                return bold ? 600 : 500;
                            }
                        },
                        class: 'affix_s_h',
                    }
                })
            },
            when: function () {
                return m.data.Affix && m.data.Affix.length
            }
        }
    }

    var affix_hover = {
        i: function (d) {
            var hover = _SpiralAbyssAffixDescConfig[d.data].Hover && (computer_.MiscText.Abyss_Show[lang] + "<br><br>" + _SpiralAbyssAffixDescConfig[d.data].Hover[lang])
            return hover
        },
        datapath: 'Affix',
        a: {
            class: 'affix_hover affix_hover_[[.]]'
        },
    }

    function w(s) {
        var ret = s
        if (ret.substring(ret.length - 2) == ": ") ret = ret.substring(0, ret.length - 2)
        ret = ret.replace("：", "").replace("> ", "").replace(">「", "「")
        return ret
    }

    $('body').on('click', '.showtop', function () {
        showtop = 1 - showtop
        if (showtop) {
            $('.generation').hide()
            $('.schedule').hide()
        } else {
            $('.generation').css('display', 'flex')
            $('.schedule').css('display', 'flex')
        }
    })

    if ($('#_H_').val() == '1') {
        $('.scroller').css('overflow-x', 'scroll !important')
        $('.scroller').css('width', 'calc(100%)')
        $('.result').addClass('result_')
        $('.content').css('padding-left', '0')
        $('.content').css('padding-right', '0')
        $('.p_b').addClass('p_b_')
        $('h3 .tlsub').html(computer_.MiscText.Translate_Abyss2[lang])
    }

})