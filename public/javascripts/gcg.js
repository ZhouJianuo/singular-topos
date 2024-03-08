$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Load_Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_GCG[lang2]);
    $('h3 .tlsub').hide()
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

    var has_2 = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang2 + '/gcg_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    let script_computer_2 = document.createElement('script')
    script_computer_2.src = '/gi/' + lang2 + '/gcg_2.js'
    document.head.append(script_computer_2)
    script_computer_2.onload = function () {
        has_2 = 1
    }

    function begin() {

        I_TYPE = '1'

        if (avid) {
            for (const [ti, di] of Object.entries(_index)) {
                if (di[avid]) {
                    I_TYPE = ti
                    if (has_2) {
                        popItem(di[avid] + 1)
                    } else {
                        $('.lt').show()
                        var ou = setInterval(function () {
                            if (has_2) {
                                $('.lt').hide()
                                popItem(di[avid] + 1)
                                clearInterval(ou)
                            }
                        }, 200)
                    }
                    break
                }
            }
        }

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Avatar.png',
                                },
                                class: (I_TYPE == '1') ? 'active' : '',
                                a: {
                                    'data-id': '1'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Equip.png',
                                },
                                class: (I_TYPE == '4') ? 'active' : '',
                                a: {
                                    'data-id': '4'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Assist.png',
                                },
                                class: (I_TYPE == '3') ? 'active' : '',
                                a: {
                                    'data-id': '3'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Event.png',
                                },
                                class: (I_TYPE == '5') ? 'active' : '',
                                a: {
                                    'data-id': '5'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Monster.png',
                                },
                                class: (I_TYPE == '2') ? 'active' : '',
                                a: {
                                    'data-id': '2'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Back.png',
                                },
                                class: (I_TYPE == '6') ? 'active' : '',
                                a: {
                                    'data-id': '6'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/GCG_UI/Table.png',
                                },
                                class: (I_TYPE == '7') ? 'active' : '',
                                a: {
                                    'data-id': '7'
                                }
                            },
                        ],
                        class: 'a_w_r'
                    },
                    {
                        hr: ''
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })

        renderItems()

    }

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })

    function renderItems() {

        $('.area').empty()

        _card[parseInt(I_TYPE)].forEach(function (t, i) {
            $('.area').render({
                div: [
                    {
                        div: [
                            {
                                img: imgpre + 'images/GCG/' + (t.Icon ? t.Icon : 'UI_Gcg_CardBack_01') + '.png',
                                class: 'item-icon',
                            },
                            {
                                div: [
                                    {
                                        img: imgpre + 'images/GCG_UI/HP.png',
                                        class: 'out_hp_icon'
                                    },
                                    {
                                        span: t.HP ? t.HP.toString() : '',
                                        class: 'out_hp_num',
                                        style: {
                                            'font-family': 'GCG'
                                        }
                                    }
                                ],
                                class: 'out_hp',
                                when: (I_TYPE == '1' || I_TYPE == '2')
                            },
                            {
                                div: function (k) {
                                    for (var j = 0; j < (t.SP ? t.SP : 0); j++) {
                                        $(k.container).render({
                                            img: imgpre + 'images/GCG_UI/SP.png',
                                            class: 'out_sp_icon'
                                        })
                                    }
                                },
                                class: 'out_sp',
                                when: (I_TYPE == '1' || I_TYPE == '2')
                            },
                            {
                                div: function (k) {
                                    for (const [d, n] of Object.entries(t.Cost)) {
                                        $(k.container).render({
                                            span: [
                                                {
                                                    img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                    class: 'cost_dice_out'
                                                },
                                                {
                                                    span: n.toString(),
                                                    class: 'out_hp_num',
                                                    style: {
                                                        margin: '0',
                                                    }
                                                }
                                            ],
                                            style: {
                                                margin: '0',
                                                position: 'relative',
                                                display: 'flex'
                                            }
                                        })
                                    }
                                    if (!Object.entries(t.Cost).length) {
                                        $(k.container).render({
                                            span: [
                                                {
                                                    img: imgpre + 'images/GCG_UI/GCG_COST_DICE_VOID.png',
                                                    class: 'cost_dice_out'
                                                },
                                                {
                                                    span: '0',
                                                    class: 'out_hp_num',
                                                    style: {
                                                        margin: '0',
                                                    }
                                                }
                                            ],
                                            style: {
                                                margin: '0',
                                                position: 'relative',
                                                display: 'flex'
                                            }
                                        })
                                    }
                                },
                                class: 'out_cost',
                                style: {
                                    top: '0px'
                                },
                                when: (I_TYPE == '3' || I_TYPE == '4' || I_TYPE == '5')
                            }
                        ],
                        class: 'item-up',
                    },
                    {
                        div: [
                            {
                                p: t.Name.length ? t.Name : '???',
                                class: 'item-name',
                                style: {
                                    'font-weight': 'bold'
                                }
                            },
                            /*{
                                p: 'ID ' + t._id.toString(),
                                class: 'item-name',
                                style: {
                                    'font-size': '0.7em'
                                }
                            }*/
                        ],
                        class: 'item-down'
                    },
                ],
                class: 'item-card hover-shadow',
                a: {
                    'data-id': i + 1
                }
            })
        })

    }

    $('body').on('click', '.item-card', function () {
        if (has_2) {
            popItem(parseInt($(this).attr('data-id')))
        } else {
            var ou = setInterval(function () {
                if (has_2) {
                    popItem(parseInt($(this).attr('data-id')))
                    clearInterval(ou)
                }
            }, 200)
        }
    })

    function popItem(v) {
        if (I_TYPE == '1' || I_TYPE == '2') popItem_1(v)
        else if (I_TYPE == '3' || I_TYPE == '4' || I_TYPE == '5') popItem_2(v)
        else popItem_3(v)
    }

    function popItem_1(y) {
        this_item = _card[parseInt(I_TYPE)][y - 1]
        this_item_2_choose_from_3 = _card[3][_index['3']['2' + this_item._id + '1']] ? _card[3][_index['3']['2' + this_item._id + '1']] : _card[3][_index['3']['2' + this_item._id + '2']]
        this_item_2_choose_from_4 = _card[4][_index['4']['2' + this_item._id + '1']] ? _card[4][_index['4']['2' + this_item._id + '1']] : _card[4][_index['4']['2' + this_item._id + '2']]
        this_item_2_choose_from_5 = _card[5][_index['5']['2' + this_item._id + '1']] ? _card[5][_index['5']['2' + this_item._id + '1']] : _card[5][_index['5']['2' + this_item._id + '2']]
        this_item_2 = 0
        var show_talent = 1
        if (this_item_2_choose_from_3) {
            this_item_2 = this_item_2_choose_from_3
        } else if (this_item_2_choose_from_4) {
            this_item_2 = this_item_2_choose_from_4
        } else if (this_item_2_choose_from_5) {
            this_item_2 = this_item_2_choose_from_5
        } else {
            this_item_2 = _card[4][_index['4']['214031']]
            show_talent = 0
        }
        var this_K = this_item.K
        if (show_talent) this_K = this_item_2.K.concat(this_K)
        this_K_remove_duplicate = Array.from(new Set(this_K))
        poplayer({
            header: computer_.MiscText.Affix[lang2].substring(3),
            width: '100%',
            template: {
                div: [
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'images/GCG/' + (this_item.Icon ? this_item.Icon : 'UI_Gcg_CardBack_01') + '.png',
                                    },
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: this_item.Title ? this_item.Title : this_item.Name,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center'
                                                    },
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            div: [
                                                                {
                                                                    img: imgpre + 'images/GCG_UI/HP.png',
                                                                    class: 'hpsp_img'
                                                                },
                                                                {
                                                                    p: this_item.HP.toString(),
                                                                    class: 'hp_num',
                                                                    style: {
                                                                        'font-family': 'GCG'
                                                                    }
                                                                }
                                                            ],
                                                            class: 'hpsp_div'
                                                        },
                                                        {
                                                            div: [
                                                                {
                                                                    img: imgpre + 'images/GCG_UI/SP_2.png',
                                                                    class: 'hpsp_img'
                                                                },
                                                                {
                                                                    p: this_item.SP.toString(),
                                                                    class: 'sp_num',
                                                                    style: {
                                                                        'font-family': 'GCG'
                                                                    }
                                                                }
                                                            ],
                                                            class: 'hpsp_div'
                                                        }
                                                    ],
                                                    class: 'hpsp mon_head'
                                                },
                                                {
                                                    div: this_item.Story,
                                                    style: {
                                                        'text-align': 'center'
                                                    },
                                                    class: 'weapon_story',
                                                    when: this_item.Story != undefined
                                                },
                                                {
                                                    div: {
                                                        span: function (k) {
                                                            return _tag[k.data]
                                                        },
                                                        data: this_item.Tag,
                                                        class: 'tag_span'
                                                    },
                                                    class: 'tags mon_head'
                                                },
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section'
                    },
                    {
                        div: [
                            {
                                div: function (k) {
                                    return _skills[k.data].Name
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            if (_skills[k.data].Tag) {
                                                _skills[k.data].Tag.forEach(function (u) {
                                                    $(k.container).render({
                                                        span: _skilltag[u],
                                                        class: 'sbp',
                                                    })
                                                })
                                            }
                                            if (_skills[k.data].Cost) {
                                                for (const [d, n] of Object.entries(_skills[k.data].Cost)) {
                                                    $(k.container).render({
                                                        span: [
                                                            {
                                                                img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                                class: 'cost_dice'
                                                            },
                                                            {
                                                                span: n.toString(),
                                                                class: 'sps_num',
                                                                style: {
                                                                    margin: '0',
                                                                }
                                                            }
                                                        ],
                                                        style: {
                                                            margin: '0',
                                                            position: 'relative',
                                                            top: '2px'
                                                        }
                                                    })
                                                }
                                            }
                                        },
                                        when: function (k) {
                                            return (_skills[k.data].Tag && _skills[k.data].Tag.length) || Object.keys(_skills[k.data].Cost).length
                                        },
                                        style: {
                                            'margin-top': function (k) {
                                                return (_skills[k.data].Cost && Object.entries(_skills[k.data].Cost).length) ? '-16px' : '-2px'
                                            },
                                            'margin-bottom': '10px',
                                        }
                                    },
                                    {
                                        p: function (k) {
                                            return _skills[k.data].Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`)
                                        }
                                    },
                                    {
                                        div: function (k) {
                                            if (!_skills[k.data].C) return
                                            _skills[k.data].C.forEach(function (u) {
                                                if (!_ref[u]) return
                                                $(k.container).render({
                                                    p: [
                                                        {
                                                            img: imgpre + 'images/GCG_UI/JUMP.png',
                                                            class: 'sps',
                                                            when: _ref[u].Ref != undefined
                                                        },
                                                        '<b>' + _ref[u].Name + '</b><br>',
                                                        {
                                                            p: function (k) {
                                                                if (_ref[u].Tag) {
                                                                    _ref[u].Tag.forEach(function (u) {
                                                                        $(k.container).render({
                                                                            span: _tag[u],
                                                                            class: 'sbp',
                                                                        })
                                                                    })
                                                                }
                                                                if (_ref[u].Cost) {
                                                                    for (const [d, n] of Object.entries(_ref[u].Cost)) {
                                                                        $(k.container).render({
                                                                            span: [
                                                                                {
                                                                                    img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                                                    class: 'cost_dice'
                                                                                },
                                                                                {
                                                                                    span: n.toString(),
                                                                                    class: 'sps_num',
                                                                                    style: {
                                                                                        margin: '0',
                                                                                    }
                                                                                }
                                                                            ],
                                                                            style: {
                                                                                margin: '0',
                                                                                position: 'relative',
                                                                                top: '2px'
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            },
                                                            when: (_ref[u].Tag && _ref[u].Tag.length) || Object.keys(_ref[u].Cost).length,
                                                            style: {
                                                                'margin-top': function (k) {
                                                                    return (_ref[u].Cost && Object.entries(_ref[u].Cost).length) ? '-10px' : '4px'
                                                                },
                                                                'margin-bottom': '6px',
                                                            }
                                                        },
                                                        _ref[u].Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                                    ],
                                                    class: 'c_p' + (_ref[u].Ref ? ' ref_card hover-shadow-white' : ''),
                                                    a: {
                                                        'data-id': _ref[u]._id,
                                                    }
                                                })
                                            })
                                        },
                                        when: function (k) {
                                            return _skills[k.data].C && _skills[k.data].C.length
                                        }
                                    }
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        data: this_item.Skills
                    },
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'images/GCG/' + (this_item_2.Icon ? this_item_2.Icon : 'UI_Gcg_CardBack_01') + '.png',
                                    },
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: this_item_2.Title ? this_item_2.Title : this_item_2.Name,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center'
                                                    },
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    div: function (k) {
                                                        for (const [d, n] of Object.entries(this_item_2.Cost)) {
                                                            $(k.container).render({
                                                                div: [
                                                                    {
                                                                        img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                                        class: 'hpsp_img'
                                                                    },
                                                                    {
                                                                        p: n.toString(),
                                                                        class: 'sp_num',
                                                                        style: {
                                                                            'font-family': 'GCG'
                                                                        }
                                                                    }
                                                                ],
                                                                class: 'hpsp_div'
                                                            })
                                                        }
                                                        if (!Object.entries(this_item_2.Cost).length) {
                                                            $(k.container).render({
                                                                div: [
                                                                    {
                                                                        img: imgpre + 'images/GCG_UI/GCG_COST_DICE_VOID.png',
                                                                        class: 'hpsp_img'
                                                                    },
                                                                    {
                                                                        p: '0',
                                                                        class: 'sp_num',
                                                                        style: {
                                                                            'font-family': 'GCG'
                                                                        }
                                                                    }
                                                                ],
                                                                class: 'hpsp_div'
                                                            })
                                                        }
                                                    },
                                                    class: 'hpsp mon_head'
                                                },
                                                {
                                                    div: this_item_2.Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                                    class: 'weapon_story',
                                                    when: this_item_2.Desc != undefined
                                                },
                                                {
                                                    div: {
                                                        span: function (k) {
                                                            return _tag[k.data]
                                                        },
                                                        data: this_item_2.Tag,
                                                        class: 'tag_span'
                                                    },
                                                    class: 'tags mon_head'
                                                },
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section',
                        when: show_talent
                    },
                    {
                        div: {
                            div: function (k) {
                                this_K_remove_duplicate.forEach(function (u) {
                                    $(k.container).render({
                                        p: '<b>' + _keyword[u].Name.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`) + '</b><br>' + _keyword[u].Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                        class: 'c_p'
                                    })
                                })
                            },
                            class: 'a_section_content'
                        },
                        class: 'a_section',
                        when: this_K_remove_duplicate && this_K_remove_duplicate.length
                    }
                ],
                class: 'mon_body'
            },
        })
    }

    function popItem_2(y) {
        this_item = _card[parseInt(I_TYPE)][y - 1]
        poplayer({
            header: computer_.MiscText.Affix[lang2].substring(3),
            width: '100%',
            template: {
                div: [
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'images/GCG/' + (this_item.Icon ? this_item.Icon : 'UI_Gcg_CardBack_01') + '.png',
                                    },
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: this_item.Title ? this_item.Title : this_item.Name,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center'
                                                    },
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    div: function (k) {
                                                        for (const [d, n] of Object.entries(this_item.Cost)) {
                                                            $(k.container).render({
                                                                div: [
                                                                    {
                                                                        img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                                        class: 'hpsp_img'
                                                                    },
                                                                    {
                                                                        p: n.toString(),
                                                                        class: 'sp_num',
                                                                        style: {
                                                                            'font-family': 'GCG'
                                                                        }
                                                                    }
                                                                ],
                                                                class: 'hpsp_div'
                                                            })
                                                        }
                                                        if (!Object.entries(this_item.Cost).length) {
                                                            $(k.container).render({
                                                                div: [
                                                                    {
                                                                        img: imgpre + 'images/GCG_UI/GCG_COST_DICE_VOID.png',
                                                                        class: 'hpsp_img'
                                                                    },
                                                                    {
                                                                        p: '0',
                                                                        class: 'sp_num',
                                                                        style: {
                                                                            'font-family': 'GCG'
                                                                        }
                                                                    }
                                                                ],
                                                                class: 'hpsp_div'
                                                            })
                                                        }
                                                    },
                                                    class: 'hpsp mon_head'
                                                },
                                                {
                                                    div: this_item.Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                                    class: 'weapon_story',
                                                    when: this_item.Desc != undefined
                                                },
                                                {
                                                    div: {
                                                        span: function (k) {
                                                            return _tag[k.data]
                                                        },
                                                        data: this_item.Tag,
                                                        class: 'tag_span'
                                                    },
                                                    class: 'tags mon_head'
                                                },
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section'
                    },
                    {
                        div: {
                            div: {
                                div: function (k) {
                                    if (!this_item.C) return
                                    this_item.C.forEach(function (u) {
                                        if (!_ref[u]) return
                                        $(k.container).render({
                                            p: [
                                                {
                                                    img: imgpre + 'images/GCG_UI/JUMP.png',
                                                    class: 'sps',
                                                    when: _ref[u].Ref != undefined
                                                },
                                                '<b>' + _ref[u].Name + '</b><br>',
                                                {
                                                    p: function (k) {
                                                        if (_ref[u].Tag) {
                                                            _ref[u].Tag.forEach(function (u) {
                                                                $(k.container).render({
                                                                    span: _tag[u],
                                                                    class: 'sbp',
                                                                })
                                                            })
                                                        }
                                                        if (_ref[u].Cost) {
                                                            for (const [d, n] of Object.entries(_ref[u].Cost)) {
                                                                $(k.container).render({
                                                                    span: [
                                                                        {
                                                                            img: imgpre + 'images/GCG_UI/' + d + '.png',
                                                                            class: 'cost_dice'
                                                                        },
                                                                        {
                                                                            span: n.toString(),
                                                                            class: 'sps_num',
                                                                            style: {
                                                                                margin: '0',
                                                                            }
                                                                        }
                                                                    ],
                                                                    style: {
                                                                        margin: '0',
                                                                        position: 'relative',
                                                                        top: '2px'
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    },
                                                    when: (_ref[u].Tag && _ref[u].Tag.length) || Object.keys(_ref[u].Cost).length,
                                                    style: {
                                                        'margin-top': function (k) {
                                                            return (_ref[u].Cost && Object.entries(_ref[u].Cost).length) ? '-10px' : '4px'
                                                        },
                                                        'margin-bottom': '6px',
                                                    }
                                                },
                                                _ref[u].Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                            ],
                                            class: 'c_p' + (_ref[u].Ref ? ' ref_card hover-shadow-white' : ''),
                                            a: {
                                                'data-id': _ref[u]._id,
                                            }
                                        })
                                    })
                                },
                                when: this_item.C && this_item.C.length
                            },
                            class: 'a_section_content'
                        },
                        class: 'a_section',
                        when: this_item.C && this_item.C.length
                    },
                    {
                        div: {
                            div: function (k) {
                                this_item.K.forEach(function (u) {
                                    $(k.container).render({
                                        p: '<b>' + _keyword[u].Name.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`) + '</b><br>' + _keyword[u].Desc.replaceAll('[b]', `<img class='sps' src='${imgpre}images/GCG_UI/`).replaceAll('[a]', `.png'>`),
                                        class: 'c_p'
                                    })
                                })
                            },
                            class: 'a_section_content'
                        },
                        class: 'a_section',
                        when: this_item.K && this_item.K.length
                    }
                ],
                class: 'mon_body'
            },
        })
    }

    function popItem_3(y) {
        this_item = _card[parseInt(I_TYPE)][y - 1]
        poplayer({
            header: computer_.MiscText.Affix[lang2].substring(3),
            width: '100%',
            template: {
                div: [
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'images/GCG/' + (this_item.Icon ? this_item.Icon : 'UI_Gcg_CardBack_01') + '.png',
                                    },
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: this_item.Title ? this_item.Title : this_item.Name,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center'
                                                    },
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    div: this_item.Desc,
                                                    class: 'weapon_story',
                                                    when: this_item.Desc != undefined
                                                },
                                                {
                                                    div: this_item.Unlock,
                                                    class: 'weapon_story',
                                                    when: this_item.Unlock != undefined
                                                },
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section'
                    },
                ],
                class: 'mon_body'
            },
        })
    }

    $('body').on('click', '.ref_card', function () {
        window.open('/gi/gcg/' + $(this).attr('data-id'))
    })

})