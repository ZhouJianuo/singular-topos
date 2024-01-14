$(function () {

    var _lang = 0
    var DATE = new Date()
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('lang=')) && !(c.includes('session'))) {
            _lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
        } else {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + DATE.toUTCString() + ";path=/"); 
        }
    });

    var lang_ = $('#LANG').val()
    if (lang_) {
        var lang = lang_
        document.cookie = 'lang=' + lang_ + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    } else {
        var lang = (_lang === 'EN') ? 'EN' : 'CH';
    }

    var MONSTERID = $('#MONSTERID').val();
    var INTERVAL = $('.com_result input[name="interval"]').val();
    
    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]
    var moreless = 0
    var last_legal_input = "12-3"
    var last_legal_input_2 = "12-3"
    var hp_res = 0
    var res_decrease_percent = 0
    var cur_hp = 0
    var cur_kingdom = {}
    var VERIFY = 0
    $('h3 .title').text(computer_.MiscText.ComputerTitle[lang])
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang])
    $('h3 .tlsub').html(computer_.MiscText.Translate_Computer[lang])

    begin1()

    function begin1() {

        $('.calculate').text(computer_.MiscText.Computer_Button_Calculate[lang]);
        $('input[name="level"]').attr('placeholder', computer_.MiscText.Computer_Input_OverworldPlaceholder[lang]);
        $('input[name="interval"]').attr('placeholder', computer_.MiscText.Computer_Input_Placeholder[lang]);
        $('.download').html(computer_.MiscText.Computer_Download[lang])
        $('.download').click(function () {
            downloadImage(`${imgpre}homdgcat-res/Abyss/HP.jpg`, `HP.jpg`);
        });
        $('.kingdom').render({
            data: _Kingdoms,
            template: {
                kingdom: function (d) {
                    return d.data.Name[lang]
                },
                a: {
                    'data-id': '[[ID]]', class: 'kingdom_[[ID]]', 'data-hd': function (k) {
                        if ((k.data.ID == 19) || (k.data.ID == 21)) return '1'
                        return '0'
                    }
                },
                event: {
                    click: function (d) {
                        if ($(d.sender).hasClass('active')) {
                            return;
                        }
                        $(d.sender).addClass('active').siblings('kingdom').removeClass('active');
                        cur_kingdom = d.org_data
                        monsterRenderPre(d.org_data.Classes);
                    }
                },
                /*style: {
                    'display': function (k) {
                        if (k.data.ID < 5000) return 'none'
                        return ''
                    },
                    'width': '18%'
                }*/
            }
        })
        if (MONSTERID) {
            if (_Monsters) {
                hasInput()
            } else {
                classes_load_2 = setTimeout(function () { $('.lt').show() }, 2000)
                var ou_ = setInterval(function () {
                    if (_Monsters) {
                        clearTimeout(classes_load_2)
                        $('.lt').hide()
                        hasInput()
                        clearInterval(ou_)
                    }
                }, 200)
            }
        } else {
            monsterRenderPre(_Kingdoms[7].Classes)
            $('.kingdom_11').addClass('active')
        }

    }

    function monsterRenderPre(a, b) {
        if (_Monsters) {
            monsterRender(a, b)
        } else {
            classes_load = setTimeout(function () { $('.lt').show() }, 2000)
            var ou = setInterval(function () {
                if (_Monsters) {
                    clearTimeout(classes_load)
                    $('.lt').hide()
                    monsterRender(a, b)
                    clearInterval(ou)
                }
            }, 200)
        }
    }

    function hasInput() {
        var m_object = _Monsters[MONSTERID];
        if (m_object && (m_object.KingdomID || m_object.KingdomID === 0)) {
            var ele = $('.kingdom').find(`.kingdom_${m_object.KingdomID}`);
            ele.addClass('active');
            cur_kingdom = _Kingdoms[ele.index()]
            monsterRenderPre(_Kingdoms[ele.index()].Classes, function () {
                $('.class_monster').find(`.monster_${MONSTERID}`).addClass('active');
                $('.calculate').click();
            });
        }
    }

    $('.com_result .calculate').click(function () {
        hp_res = 0
        var ele = $('.class_monster').find('.active');
        if (!ele.length) {
            return dialog.fail(computer_.MiscText.Computer_Warning_NotSelectedMonster[lang]);
        }
        var regLevel = /^([1-9]|[1-9]\d|1\d{2}|200)$/;
        var regInterval = /^(9|1[0-2])-[1-3]$/;
        if (ele.attr('data-fc')) {
            var interval = ele.attr('data-fc')
            $('input[name="interval"]').val(interval)
        } else {
            var interval = $('input[name="interval"]').val().trim();
        }
        if (regLevel.test(interval)) {
            selectVal = "大世界";
            level = parseInt(interval);
            last_legal_input = interval
        } else if (_SpiralAbyssFloorEntryToLevelCoeffConfig[interval]) {
            selectVal = "深渊";
            last_legal_input = interval
        } else {
            $('input[name="interval"]').val(last_legal_input)
            var interval = last_legal_input;
            if (regLevel.test(interval)) {
                selectVal = "大世界";
                level = parseInt(interval);
            } else if (_SpiralAbyssFloorEntryToLevelCoeffConfig[interval]) {
                selectVal = "深渊";
            } else {
                return
            }
        }
        var data = _Monsters[ele.attr('data-id')]
        var choose_icon = data.Icon[Math.floor(Math.random() * data.Icon.length)]
        $('.result').empty().render({
            data: data,
            template: [{
                div: [{
                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                    class: 'big-img'
                }, {
                    div: [{
                        h5: function (d) {
                            if (d.data.UseCustomColorName && !d.data.RevertName) {
                                return _MonsterCustomColorNameConfig[ele.attr('data-id')].Name[lang]
                            }
                            return d.data.Name[lang]
                        },
                        style: {
                            color: function (d) {
                                return computer_.TextColorConfig[d.data.Color] || '';
                            }
                        }
                    }, {
                        p: {
                            span: `[[${lang}]]`,
                        },
                        datapath: 'Title',
                        class: 'title'
                    }, {
                        div: [{
                            span: function (d) {
                                var Grade = d.data.Grade ? d.data.Grade : 0
                                return "<b><color style='color:" + computer_.GradeConfig[Grade].Color + ";'>" + computer_.GradeConfig[Grade].Desc[lang] + "</color></b>"
                            }
                        }, {
                            span: function (d) {
                                var lv = selectVal === "深渊" ? interval : 'LV' + level;
                                return lv
                            }
                        }, {
                            span: $('select[name="multiplayer"] option:selected').text()
                        }],
                        style: {
                            'display': 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'center',
                            'font-size': '18px'
                        }
                    }, {
                        div: [{
                            span: ["HP ", {
                                i: function (d) {
                                    var lv = selectVal === "深渊" ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level : level;
                                    var hpc = selectVal === "深渊" && !d.data.NotAffectedBySpiralAbyss ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].HPCoeff : 1;
                                    var a = computer_.LevelCurves[lv][d.data.HPCurve];
                                    var mpid = d.data.MultiPlayerID ? d.data.MultiPlayerID : 1
                                    var mpnum = $('select[name="multiplayer"]').val()
                                    var mpcoeff = computer_.MultiPlayerConfig[mpid.toString()].HP[mpnum]
                                    var num = a * d.data.HP * hpc * mpcoeff;
                                    cur_hp = num
                                    return num.toFixed(0)
                                }
                            }]
                        }, {
                            span: ["ATK ", {
                                i: function (d) {
                                    var lv = selectVal === "深渊" ? _SpiralAbyssFloorEntryToLevelCoeffConfig[interval].Level : level;
                                    var a = computer_.LevelCurves[lv][d.data.ATKCurve];
                                    var extra = selectVal === "深渊" ? (d.data.ExtraSpiralAbyssCoeff && d.data.ExtraSpiralAbyssCoeff.ATK || 1) : 1;
                                    var mpid = d.data.MultiPlayerID ? d.data.MultiPlayerID : 1
                                    var mpnum = $('select[name="multiplayer"]').val()
                                    var mpcoeff = computer_.MultiPlayerConfig[mpid.toString()].ATK[mpnum]
                                    var num = a * d.data.ATK * extra * mpcoeff;
                                    return num.toFixed(0)
                                }
                            }]
                        }]
                    }, {
                        span: "<b><color style='color:#0066FF;'>" + computer_.MiscText.Computer_Show[lang] + "</color></b>",
                        class: 'logoshow',
                        style: {
                            'font-size': '15px',
                        }
                    },],
                    style: {
                        padding: '20px'
                    }
                }, {
                    div: [
                        {
                            button: computer_.MiscText.Computer_Result_Button_Tutorial[lang],
                            when: function (d) {
                                return d.data.Tutorial && !(d.data.DisableTutorial)
                            },
                            click: function (p) {
                                poplayer({
                                    header: computer_.MiscText.Computer_Result_Button_Tutorial2[lang],
                                    width: '80%',
                                    template: {
                                        div: function (d) {
                                            $(d.container).html(p.org_data.Tutorial[lang])
                                        },
                                        style: {
                                            'white-space': 'pre-wrap',
                                            'padding': '10px',
                                        },
                                        class: 'ignore'
                                    }
                                })
                            }
                        },
                        {
                            button: computer_.MiscText.Computer_Result_Button_SkillDMG[lang],
                            when: function (d) {
                                return d.data.SkillDMG && d.data.SkillDMG.length
                            },
                            click: function (p) {
                                poplayer({
                                    header: computer_.MiscText.Computer_SkillDMG_Title[lang],
                                    width: '80%',
                                    data: p.org_data,
                                    template: {
                                        div: [
                                            {
                                                div: [
                                                    {
                                                        f1: [
                                                            {
                                                                label: computer_.MiscText.Computer_SkillDMG_MonsterLevel[lang],
                                                                width: '100%'
                                                            },
                                                            {
                                                                input: 'mon_level',
                                                                a: {
                                                                    type: 'text',
                                                                    placeholder: computer_.MiscText.Computer_SkillDMG_Input_MonsterLevelPlaceholder[lang]
                                                                },
                                                                width: '90%',
                                                                style: {
                                                                    'text-align': 'center',
                                                                    'font-size': '15px'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        f1: [
                                                            {
                                                                label: computer_.MiscText.Computer_SkillDMG_AvatarDEF[lang],
                                                                width: '100%'
                                                            },
                                                            {
                                                                input: 'dff',
                                                                a: {
                                                                    type: 'number',
                                                                    placeholder: computer_.MiscText.Computer_SkillDMG_Input_AvatarDEFPlaceholder[lang]
                                                                },
                                                                width: '90%',
                                                                style: {
                                                                    'text-align': 'center',
                                                                    'font-size': '15px'
                                                                }
                                                            }
                                                        ]
                                                    }, {
                                                        button: computer_.MiscText.Computer_SkillDMG_Button_Calculate[lang],
                                                        click: function (d) {
                                                            var regLevel = /^([1-9]|[1-9]\d|1\d{2}|200)$/;
                                                            var regInterval = /^(9|1[0-2])-[1-3]$/;
                                                            var level = $(d.sender).parents('.skill_warp_input').find('input[name="mon_level"]').val();
                                                            var isAbyss = false;
                                                            if (regLevel.test(level)) {
                                                                level = parseInt(level);
                                                                isAbyss = false;
                                                            } else if (regInterval.test(level)) {
                                                                level = _SpiralAbyssFloorEntryToLevelCoeffConfig[level].Level;
                                                                isAbyss = true;
                                                            } else {
                                                                $(d.sender).parents('.skill_warp_input').find('input[name="mon_level"]').val(last_legal_input_2)
                                                                level = last_legal_input_2
                                                                if (regLevel.test(level)) {
                                                                    level = parseInt(level);
                                                                    isAbyss = false;
                                                                } else if (regInterval.test(level)) {
                                                                    level = _SpiralAbyssFloorEntryToLevelCoeffConfig[level].Level;
                                                                    isAbyss = true;
                                                                } else {
                                                                    return;
                                                                }
                                                            }
                                                            var dff = $(d.sender).parents('.skill_warp_input').find('input[name="dff"]').val().trim();
                                                            var LevelBase = computer_.LevelCurves[level][d.org_data.ATKCurve];
                                                            var ele = $('.skill_warp').find('.DMG_td span');
                                                            ele.each(function (i, item) {
                                                                var Multiplier = Number($(item).attr('data-num'));
                                                                var n = Multiplier * Number(LevelBase) * ((500 + 5 * Number(level)) / (500 + 5 * Number(level) + parseInt(dff)))
                                                                if (isAbyss) {
                                                                    n *= (d.org_data.ExtraSpiralAbyssCoeff && d.org_data.ExtraSpiralAbyssCoeff.ATK || 1)
                                                                }
                                                                $(item).text(Math.floor(n))
                                                            })
                                                            ele.show()
                                                        }
                                                    }],
                                                class: 'skill_warp_input'
                                            }, {
                                                table: [{
                                                    thead: {
                                                        tr: [{
                                                            th: computer_.MiscText.Computer_SkillDMG_NameColumnTitle[lang]
                                                        }, {
                                                            th: computer_.MiscText.Computer_SkillDMG_DMGColumnTitle[lang]
                                                        }, {
                                                            th: computer_.MiscText.Computer_SkillDMG_CalculateColumnTitle[lang]
                                                        }]
                                                    }
                                                }, {
                                                    tbody: [{
                                                        tr: [
                                                            {
                                                                td: `[[Name/${lang}]]`
                                                            },
                                                            {
                                                                td: {
                                                                    span: '[[.]]',
                                                                    datapath: 'DMG'
                                                                }
                                                            },
                                                            {
                                                                td: {
                                                                    span: '',
                                                                    a: {
                                                                        'data-num': '[[.]]'
                                                                    },
                                                                    datapath: 'DMG'
                                                                },
                                                                class: 'DMG_td'
                                                            }
                                                        ],
                                                        datapath: 'SkillDMG'
                                                    }]
                                                }],
                                                class: 'dmg_Table'
                                            }],
                                        class: 'skill_warp'
                                    }
                                })
                            }
                        },
                        {
                            button: computer_.MiscText.Computer_Result_Button_SkillData[lang],
                            when: function (d) {
                                return d.data.SkillData
                            },
                            click: function (p) {
                                poplayer({
                                    header: computer_.MiscText.Computer_Result_Button_SkillData2[lang],
                                    width: '80%',
                                    data: p.org_data,
                                    template: {
                                        div: {
                                            img: imgpre + 'homdgcat-res/SkillData/[[.]].jpg',
                                            datapath: 'SkillData'
                                        },
                                        class: 'SkillData'
                                    }
                                })
                            }
                        },
                        {
                            button: computer_.MiscText.Computer_Result_Button_Loot[lang],
                            click: function (d) {
                                poplayer({
                                    header: computer_.MiscText.Computer_Result_Button_Loot[lang],
                                    width: '40%',
                                    data: d.org_data,
                                    template: {
                                        table: [{
                                            thead: { tr: [{ th: "" }, { th: "1★" }, { th: "2★" }, { th: "3★" }, { th: "4★" }] }
                                        }, {
                                            tbody: [{
                                                tr: [{
                                                    td: function (d) {
                                                        return _MonsterDropTypes[d.data.Type][lang]
                                                    }
                                                }, function (d) {
                                                    $(d.container).render({
                                                        data: d.data.Amount,
                                                        template: {
                                                            td: '[[.]]'
                                                        }
                                                    })
                                                }],
                                                datapath: 'Drop'
                                            }]
                                        }],
                                        class: 'ignore'
                                    }
                                })
                            },
                            when: function (d) {
                                return d.data.Drop && d.data.Drop.length
                            }
                        },
                        {
                            button: computer_.MiscText.Computer_Result_Button_Element[lang],
                            click: function (p) {
                                poplayer({
                                    header: computer_.MiscText.Computer_Result_Button_Element[lang],
                                    width: '40%',
                                    template: {
                                        div: function (d) {
                                            var elem_info = computer_.ElemNameConfig[p.org_data.Element.Type]
                                            var content = computer_.MiscText.Computer_Result_Element_Type[lang] + "<color style='color:" + computer_.TextColorConfig[elem_info.Color] + ";'><b>" + elem_info.Text[lang] + "</b></color><br>" +
                                                computer_.MiscText.Computer_Result_Element_Value[lang] + "<color style='color:" + computer_.TextColorConfig[elem_info.Color] + ";'><b>" + p.org_data.Element.Value.toString() + "</b></color>" +
                                                (p.org_data.Element.Immutable ? ("<br><br><b>" + computer_.MiscText.Computer_Result_Element_Immutable[lang]) + "</b>" : "")
                                            $(d.container).html(content)
                                        },
                                        style: {
                                            'white-space': 'pre-wrap',
                                            'padding': '10px'
                                        },
                                        class: 'ignore'
                                    }
                                })
                            },
                            when: function (d) {
                                return d.data.Element
                            }
                        }
                    ],
                    class: 'buttons'
                }],
                class: 'result_head'
            }, {
                div: [{
                    table: [{
                        thead: {
                            tr: [{
                                th: computer_.MiscText.Computer_Result_RESBaseTitle[lang]
                            }, {
                                th: function (d) {
                                    var s = d.data.State;
                                    return _RESStateDescTextConfig[s] && _RESStateDescTextConfig[s][lang] || "状态未知"
                                },
                                datapath: 'RESState',
                                when: function (d) {
                                    return d.data.RESState && d.data.RESState.length;
                                }
                            }, {
                                th: function (d) {
                                    var s = d.data.State;
                                    return _RESStateDescTextConfig[s] && _RESStateDescTextConfig[s][lang] || "变化未知"
                                },
                                datapath: 'RESModify',
                                when: function (d) {
                                    return d.data.RESModify && d.data.RESModify.length;
                                }
                            }]
                        }
                    }, {
                        tbody: function (p) {
                            cur_mon = p.data
                            computer_.RESTypeConfig.forEach(function (t, ind) {
                                $(p.container).render({
                                    data: t,
                                    template: {
                                        tr: [{
                                            td: [
                                                {
                                                    img: imgpre + 'homdgcat-res/Csxylic/[[.]].png',
                                                    datapath: '_id',
                                                    class: 'resicon'
                                                },
                                                {
                                                    span: function (d) {
                                                        var resbase = p.data.RESBase ? (p.data.RESBase[d.data._id] != undefined ? p.data.RESBase[d.data._id] : 0.1) : 0.1;
                                                        var immune = p.data.Immune ? p.data.Immune : []
                                                        if (immune.includes(d.data._id)) {
                                                            var ret = '<b>' + computer_.MiscText.Computer_Result_Immune[lang] + '</b>'
                                                        } else {
                                                            var ret = (resbase * 100).toFixed() + '%'
                                                        }
                                                        return ret
                                                    },
                                                    class: '_res'
                                                },
                                                {
                                                    span: '',
                                                    class: '_hp',
                                                    a: {
                                                        'data-r': ind,
                                                        'data-s': 999
                                                    },
                                                    style: {
                                                        display: 'none'
                                                    }
                                                }

                                            ],
                                            style: {
                                                color: function (d) {
                                                    var color = d.data.Color || '';
                                                    return computer_.TextColorConfig[color];
                                                },
                                            }
                                        }, function (d) {
                                            if (p.data.RESState && p.data.RESState.length) {
                                                p.data.RESState.forEach(function (tt, ind_) {
                                                    $(d.container).render({
                                                        data: tt,
                                                        template: {
                                                            td: [
                                                                {
                                                                    img: imgpre + 'homdgcat-res/Csxylic/' + d.data._id + '.png',
                                                                    class: 'resicon'
                                                                },
                                                                {
                                                                    span: function (a) {
                                                                        var resbase = p.data.RESBase ? (p.data.RESBase[d.data._id] != undefined ? p.data.RESBase[d.data._id] : 0.1) : 0.1;
                                                                        if (a.data['All']) {
                                                                            resbase = resbase + a.data['All'];
                                                                        }
                                                                        if (a.data[d.data._id]) {
                                                                            resbase = resbase + a.data[d.data._id];
                                                                        }
                                                                        var immune = p.data.Immune ? p.data.Immune : []
                                                                        if (immune.includes(d.data._id)) {
                                                                            var ret = '<b>' + computer_.MiscText.Computer_Result_Immune[lang] + '</b>'
                                                                        } else {
                                                                            var ret = (resbase * 100).toFixed() + '%'
                                                                        }
                                                                        return ret
                                                                    },
                                                                    class: '_res'
                                                                },
                                                                {
                                                                    span: '',
                                                                    class: '_hp',
                                                                    a: {
                                                                        'data-r': ind,
                                                                        'data-s': ind_
                                                                    },
                                                                    style: {
                                                                        display: 'none'
                                                                    }
                                                                }
                                                            ],
                                                            style: {
                                                                color: function (a) {
                                                                    var color = d.data.Color || '';
                                                                    return computer_.TextColorConfig[color];
                                                                },
                                                            }
                                                        }
                                                    })
                                                })

                                            }
                                            if (p.data.RESModify && p.data.RESModify.length) {
                                                if ($(d.container).parents('tbody').attr(`${d.data.State}-modify`) == 1) {
                                                    return;
                                                }

                                                $(d.container).render({
                                                    data: p.data.RESModify,
                                                    template: {
                                                        td: `[[Show/${lang}]]`,
                                                        a: {
                                                            rowspan: computer_.RESTypeConfig.length
                                                        },
                                                        style: {
                                                            'text-align': "center"
                                                        }
                                                    }
                                                })
                                                $(d.container).parents('tbody').attr(d.data.State + '-modify', 1);
                                            }

                                        }]
                                    }
                                })
                            })
                            $(p.container).render({
                                template: {
                                    tr: {
                                        td: [
                                            {
                                                span: computer_.MiscText.Computer_ScaleHP_Text[lang],
                                                style: {
                                                    margin: '5px 3px 5px 5px',
                                                    'font-size': { "CH": '15px', "EN": '14px' }[lang]
                                                }
                                            },
                                            {
                                                input: '',
                                                a: {
                                                    type: 'number',
                                                    value: res_decrease_percent.toString()
                                                },
                                                style: {
                                                    margin: '5px 3px 5px 5px'
                                                },
                                                class: 'res_red_input',
                                                width: '80px'
                                            },
                                            {
                                                button: computer_.MiscText.Computer_ScaleHP_Button1[lang],
                                                class: 'hp_res_button',
                                                style: {
                                                    margin: '5px 3px 5px 5px'
                                                }
                                            },
                                            {
                                                span: '<b>ⓘ</b>',
                                                class: 'scale_info',
                                                style: {
                                                    margin: '5px 3px 5px 5px',
                                                    cursor: 'pointer'
                                                }
                                            }
                                        ],
                                        a: {
                                            colspan: 10
                                        },
                                        style: {
                                            'padding-top': '10px'
                                        }
                                    }
                                }
                            })
                        }
                    }],
                    class: 'table-1'
                }, {
                    table: [{
                        thead: {
                            tr: [{
                                th: computer_.MiscText.Computer_Result_BallTitle[lang]
                            }, {
                                th: computer_.MiscText.Computer_Result_WeightEndureTitle[lang]
                            }]
                        }
                    }, {
                        tbody: function (d) {
                            var ball = d.data.Ball;
                            var mpnum = $('select[name="multiplayer"]').val()
                            var mpid = d.data.MultiPlayerID ? d.data.MultiPlayerID : 1
                            var mpcoeff = computer_.MultiPlayerConfig[mpid.toString()].Endure[mpnum]
                            var row = Number(ball && ball.Point || 0) < 4 ? 4 : ball && ball.Point;
                            var rowArr = new Array(row);
                            var endure_extra = d.data.EndureExtra ? d.data.EndureExtra : 1
                            var endure = ((computer_.EndureTemplateConfig[d.data.EndureTemplateID] && computer_.EndureTemplateConfig[d.data.EndureTemplateID].Endure) * mpcoeff * endure_extra).toFixed(5).toString().replace('.00000', '')
                            if (endure.includes(".")) {
                                endure = endure.replace('000', '')
                            }
                            var wane = ((computer_.EndureTemplateConfig[d.data.EndureTemplateID] && (computer_.EndureTemplateConfig[d.data.EndureTemplateID].Wane1 / computer_.EndureTemplateConfig[d.data.EndureTemplateID].Wane2 * endure_extra)) * mpcoeff).toFixed(5).toString().replace('.00000', '').replace('000', '')
                            for (var i = 0; i < rowArr.length; i++) {
                                rowArr[i] = {
                                    pointDes: computer_.BallPointDescConfig[ball && ball.Point] && computer_.BallPointDescConfig[ball && ball.Point][i] || { "CH": "", "EN": "" },
                                    type: computer_.BallTypeDescConfig[ball && ball.Type] || {},
                                    drop: ball && ball.Drop.split('')[i] || false
                                }
                            }
                            rowArr[0].WE = {
                                text: computer_.MiscText.Computer_Result_Weight,
                                num: d.data.Weight.toFixed(0)
                            }
                            rowArr[1].WE = {
                                text: computer_.MiscText.Computer_Result_Endure,
                                num: endure
                            }
                            rowArr[2].WE = {
                                text: computer_.MiscText.Computer_Result_EndureRecover,
                                num: wane
                            }
                            rowArr[3].WE = {
                                text: computer_.MiscText.Computer_Result_EndureReset,
                                num: computer_.EndureTemplateConfig[d.data.EndureTemplateID] && computer_.EndureTemplateConfig[d.data.EndureTemplateID].Recover.toFixed(0)
                            }
                            $(d.container).render({
                                data: rowArr,
                                template: {
                                    tr: [{
                                        td: function (d) {
                                            if (d.data.drop === false) {
                                                return ''
                                            }
                                            $(d.container).render({
                                                data: d.data,
                                                template: [`[[pointDes/${lang}]]`, {
                                                    span: `[[type/Text/${lang}]]`,
                                                    style: {
                                                        color: function (d) {
                                                            return computer_.TextColorConfig[d.data.type.Color] || '';
                                                        }
                                                    }
                                                }, 'x[[drop]]']
                                            })
                                        }
                                    }, {
                                        td: `[[WE/text/${lang}]][[WE/num]]`
                                    }]
                                }
                            })
                            $(d.container).render({
                                template: {
                                    tr: [{
                                        td: {
                                            div: {
                                                button: computer_.MiscText.Computer_Result_Button_BallIntro[lang],
                                                click: function (p) {
                                                    poplayer({
                                                        header: computer_.MiscText.Computer_Result_Button_BallIntro2[lang],
                                                        width: '65%',
                                                        template: {
                                                            div: function (d) {
                                                                $(d.container).html(computer_.MiscText.Computer_Result_Window_BallIntro[lang])
                                                            },
                                                            style: {
                                                                'white-space': 'pre-wrap',
                                                                'padding': '10px'
                                                            },
                                                            class: 'ignore'
                                                        }
                                                    })
                                                },
                                            },
                                            style: {
                                                "display": "flex",
                                                "justify-content": "center"
                                            }
                                        },
                                        style: {
                                            'padding-top': '10px'
                                        }
                                    }, {
                                        td: {
                                            div: {
                                                button: computer_.MiscText.Computer_Result_Button_WeightEndureIntro[lang],
                                                click: function (p) {
                                                    poplayer({
                                                        header: computer_.MiscText.Computer_Result_Button_WeightEndureIntro2[lang],
                                                        width: '55%',
                                                        template: {
                                                            div: function (d) {
                                                                $(d.container).html(computer_.MiscText.Computer_Result_Window_WeightEndureIntro[lang])
                                                            },
                                                            style: {
                                                                'white-space': 'pre-wrap',
                                                                'padding': '10px'
                                                            },
                                                            class: 'ignore'
                                                        }
                                                    })
                                                }
                                            },
                                            style: {
                                                "display": "flex",
                                                "justify-content": "center"
                                            }
                                        },
                                        style: {
                                            'padding-top': '10px'
                                        }
                                    }],
                                    style: {
                                        "text-align": "center",
                                    }
                                }
                            })
                        }
                    }],
                    class: 'table-2'
                }],
                class: 'mon_table'
            }, {
                p: `[[Desc/${lang}]]`,
                class: 'mon_intro',
                style: {
                    'line-height': 2
                }
            }, {
                div: {
                    a: `/EnemyChart/[[.]].png`,
                    t: {
                        img: `/EnemyChart/[[.]].png`,
                        style: {
                            width: '100%'
                        },
                    },
                    attr: {
                        target: '_blank'
                    },
                    datapath: 'Csx' 
                },
                class: 'csxylic'
            }]
        })
        $('.scroller').scrollTop($('.scroller')[0].scrollHeight - $('.com_result').height() - 150)
    })
    function monsterRender(p, cd) {
        $('.class_monster').empty()
        if (cur_kingdom.Disorder && cur_kingdom.Disorder[lang]) {
            $('.class_monster').render({
                p: cur_kingdom.Disorder[lang],
                class: 'disorder',
            })
        }
        $('.class_monster').render({
            data: p,
            template: [{
                category: [{
                    text: function (d) {
                        return d.data.Name[lang]
                    }
                }, {
                    monster: function (l) {
                        var force_interval = l.data.Interval
                        l.data.Monsters.forEach(function (mn) {
                            $(l.container).render({
                                data: mn,
                                template: {
                                    span: function (d) {
                                        var monster = _Monsters[d.data]
                                        var choose_icon = monster.Icon[Math.floor(Math.random() * monster.Icon.length)]
                                        if (!force_interval) {
                                            $(d.container).render({
                                                data: monster,
                                                template: [{
                                                    img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                }, function (d) {
                                                    if (d.data.UseCustomColorName) {
                                                        return _MonsterCustomColorNameConfig[d.data._id].Name[lang]
                                                    } else {
                                                        var mon_color = computer_.TextColorConfig[d.data.Color ? d.data.Color : "None"]
                                                        return "<color style='color:" + mon_color + ";'>" + d.data.Name[lang] + "</color>"
                                                    }
                                                }]
                                            })
                                        } else {
                                            $(d.container).render({
                                                data: monster,
                                                template: [
                                                    {
                                                        img: imgpre + 'homdgcat-res/monster/' + choose_icon + '.png',
                                                        class: 'monicon'
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                span: function (d) {
                                                                    if (d.data.UseCustomColorName) {
                                                                        return _MonsterCustomColorNameConfig[d.data._id].Name[lang]
                                                                    } else {
                                                                        var mon_color = computer_.TextColorConfig[d.data.Color ? d.data.Color : "None"]
                                                                        return "<color style='color:" + mon_color + ";'>" + d.data.Name[lang] + "</color>"
                                                                    }
                                                                },
                                                                class: 'monname'
                                                            },
                                                            {
                                                                br: ''
                                                            },
                                                            {
                                                                span: function () {
                                                                    var HPBase = monster.HP
                                                                    var HPCurve = monster.HPCurve
                                                                    var inter = _SpiralAbyssFloorEntryToLevelCoeffConfig[force_interval]
                                                                    var HP = Math.round(HPBase * computer_.LevelCurves[inter.Level][HPCurve] * inter.HPCoeff)
                                                                    var s = 'HP <color style="color:#cc0000;">' + HP + '</color>'
                                                                    return s
                                                                }
                                                            },
                                                        ],
                                                        class: 'monright'
                                                    }
                                                ]
                                            })
                                        }
                                    },
                                    a: {
                                        "data-id": '[[.]]',
                                        "data-fc": force_interval ? force_interval : '',
                                        class: force_interval ? 'monster_[[.]] monster_card' : 'monster_[[.]]'
                                    },
                                    event: {
                                        click: function (d) {
                                            $('.class_monster').find('span').removeClass('active');
                                            $(d.sender).addClass('active');
                                            if (!$('.com_result input[name="interval"]').val()) {
                                                $('.com_result input[name="interval"]').val(last_legal_input)
                                            }
                                            $('.calculate').click();
                                        }
                                    }
                                }
                            })
                        })
                    }
                }],
                class: 'clearfix',
                a: { 'data-id': '[[ID]]' }
            }
            ]
        })
        cd && cd();
    }

    $("body").on("change", 'select[name="multiplayer"]', function () {
        $('.calculate').click();
    });

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    $('body').on('click', ".hp_res_button", function () {
        hp_res = 1
        res_decrease_percent = parseInt($('.res_red_input').val())
        $('._hp').each(function () {
            var res_percent = $(this).siblings('._res').html()
            if (!res_percent.includes('%')) {
                $(this).html('<b>' + computer_.MiscText.Computer_Result_Immune[lang] + '</b>')
            } else {
                res_percent = parseInt(res_percent.replace('%', ''))
                $(this).html((cur_hp * res(res_percent / 100, res_decrease_percent / 100)).toFixed(0))
            }
        })
        $('._res').hide()
        $('._hp').show()
    });

    $('body').on('click', '.scale_info', function () {
        hp_res = 0
        $('._res').show()
        $('._hp').hide()
        poplayer({
            header: computer_.MiscText.Computer_ScaleHP_TutorialTitle[lang],
            width: '90%',
            template: {
                div: computer_.MiscText.Computer_ScaleHP_Tutorial[lang],
                style: {
                    'white-space': 'pre-wrap',
                    'padding': '10px'
                },
                class: 'ignore'
            }
        })
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

    function rescoeff(r) {
        if (r < 0) {
            return 1 - r / 2
        } else if (r > 0.75) {
            return 1 / (4 * r + 1)
        } else {
            return 1 - r
        }
    }

    function res(base, red) {
        return rescoeff(0.1 - red) / rescoeff(base - red)
    }

    function Verify() {
        VERIFY = parseInt(Math.random() * 10000)
        $('.verify_show').html(computer_.MiscText.Verify[lang] + VERIFY)
    }

    $("body").on("click", ".title", function () {
        moreless += 1
        if (moreless % 2 == 1) {
            $('kingdom[data-hd=0]').hide()
            $('kingdom[data-hd=1]').css('width', '46%')
            $('h3 .subtitle').html(computer_.MiscText.Subtitle_[lang])
            $('h3 .title').html(computer_.MiscText.ComputerTitle_[lang] + _Kingdoms[14].Name.EN.replace(' F11', ''))
            $('h3 .subtitle').css('font-size', '18px')
            $('.kingdom').css('padding-bottom', '0px')
            $('h3 .links').html("<p style='margin-top:13px;color:#df903b;cursor:pointer;'><b>[ " + ((lang == 'CH') ? 'mons.wiki / homdgcat.wiki' : 'en.mons.wiki / en.homdgcat.wiki') + " ]</b></p>")
            $('.tlsub').hide()
            $('.kingdom').css('padding-bottom', '20px')
        } else {
            $('kingdom[data-hd=0]').show()
            $('kingdom[data-hd=1]').css('width', '')
            $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang])
            $('h3 .title').text(computer_.MiscText.ComputerTitle[lang])
            $('h3 .subtitle').css('font-size', '')
            $('.kingdom').css('padding-bottom', '')
            $('h3 .links').html(computer_.MiscText.Page[lang])
            $('.tlsub').show()
            $('.kingdom').css('padding-bottom', '20px')
        }
    });

})