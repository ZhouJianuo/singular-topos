$(function () {

    var no_skillicon = [9001, 9002]

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang2)
    })

    var a_w_r = 1
    var this_avatar = 0
    var this_weapon = 0
    var this_relic = 0
    var cur_avatar_page = 1

    var this_avatar_vers = 0
    var this_avatar_cur_ver = 0

    var this_weapon_vers = 0
    var this_weapon_cur_ver = 0

    var cur_rarity = '5'

    var cur_level = 80
    var cur_promote = 1

    var check_interval = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang + '/Avatar_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        a_2 = 0

        let script_computer_2 = document.createElement('script')
        script_computer_2.src = '/data/' + lang + '/Avatar_2.js'
        document.head.append(script_computer_2)
        script_computer_2.onload = function () {
            a_2 = 1
        }

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'images/Misc/IconAvatarDetail.png',
                                },
                                class: 'active _a'
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/Misc/IconAvatarLightCone.png',
                                },
                                class: '_w'
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/Misc/IconRelicFoot.png',
                                },
                                class: '_r1'
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/Misc/IconAvatarRelic.png',
                                },
                                class: '_r2'
                            }
                        ],
                        class: 'a_w_r'
                    },
                    {
                        section: [
                            {
                                schedule: (lang == 'CH') ? '隐藏' : 'Hidden',
                                class: '_r6',
                                a: {
                                    'data-id': 6
                                }
                            },
                            {
                                schedule: '5★',
                                class: 'active _r5',
                                a: {
                                    'data-id': 5
                                }
                            },
                            {
                                schedule: '4★',
                                class: '_r4',
                                a: {
                                    'data-id': 4
                                }
                            },
                            {
                                schedule: '3★',
                                class: '_r3',
                                a: {
                                    'data-id': 3
                                }
                            }
                        ],
                        class: 'rar'
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })
    
        if (avid) {
            avid = avid.replaceAll("_", "").replaceAll("-", "").replaceAll(" ", "").replaceAll("'", "").toUpperCase()
            if (_search_avatar[avid] != undefined) {
                popAvatar(_search_avatar[avid])
            } else if (_search_weapon[avid] != undefined) {
                popWeapon(_search_weapon[avid])
            } else if (_search_relic[avid] != undefined) {
                popRelic(_search_relic[avid])
            }
        }
    
        listAvatar()
    }

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        if ($(this).hasClass('_a')) {
            a_w_r = 1
            listAvatar()
            $('.rar').show()
        } else if ($(this).hasClass('_w')) {
            a_w_r = 2
            listWeapon()
            $('.rar').show()
        } else if ($(this).hasClass('_r1')) {
            a_w_r = 3
            listRelic(1)
            $('.rar').hide()
        } else {
            a_w_r = 4
            listRelic(2)
            $('.rar').hide()
        }
    })

    $('body').on('click', '.rar schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_rarity = $(this).attr('data-id')
        if (cur_rarity == 3) {
            $('.rar-3').show()
            $('.rar-4').hide()
            $('.rar-5').hide()
            $('.rar-6').hide()
        } else if (cur_rarity == 4) {
            $('.rar-3').hide()
            $('.rar-4').show()
            $('.rar-5').hide()
            $('.rar-6').hide()
        } else if (cur_rarity == 5) {
            $('.rar-3').hide()
            $('.rar-4').hide()
            $('.rar-5').show()
            $('.rar-6').hide()
        } else {
            $('.rar-3').hide()
            $('.rar-4').hide()
            $('.rar-5').hide()
            $('.rar-6').show()
        }
    })

    function listAvatar() {
        $('.area').empty()
        _avatar.forEach(function (t, i) {
            var stats = t.Stats
            if (!stats) {
                stats = {
                    HP: 0,
                    ATK: 0,
                    DEF: 0,
                    SPD: 0,
                    Aggro: 0
                }
            }
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Ver ? t.Ver : '???',
                            style: {
                                'font-weight': 'bold'
                            }
                        },
                        {
                            img: no_skillicon.includes(t._id) ? (imgpre + `images/avatarshopicon/999.png`) : (imgpre + `images/${t.Icon}.png`),
                            class: 'avatar-head'
                        },
                        {
                            p: t.Name,
                            style: {
                                'font-weight': 'bold'
                            },
                            class: 'avatar-name'
                        },
                        {
                            div: [
                                {
                                    img: imgpre + 'images/Element/' + t.Element + '.png',
                                    style: {
                                        width: '22%',
                                        'max-width': '35px',
                                        margin: '0px 5px',
                                    },
                                },
                                {
                                    img: imgpre + 'images/Paths/' + t.Path + '.png',
                                    style: {
                                        width: '22%',
                                        'max-width': '35px',
                                        margin: '0px 5px',
                                    },
                                    when: t.Path != undefined
                                },
                            ],
                            style: {
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin-top': '10px',
                                'margin-bottom': '10px'
                            }
                        },
                        {
                            p: [
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_HP.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.HP.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.ATK.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.DEF.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_SPD.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.SPD.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ENERGY.png',
                                            class: 'avatar-staticon'
                                        },
                                        (t.SP ? t.SP : 0).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                }
                            ],
                            when: t.Stats
                        },
                    ],
                    class: 'avatar-card hover-shadow rar-' + (t.Rarity ? t.Rarity : '6'),
                    style: {
                        display: (((t.Rarity ? t.Rarity : '6') == cur_rarity)) ? '' : 'none'
                    },
                    click: function (p) {
                        popAvatar(i)
                    }
                }
            })
        })
    }

    function listWeapon() {
        $('.area').empty()
        _weapon.forEach(function (t, i) {
            var stats = t.Stats
            if (!stats) {
                stats = {
                    HP: 0,
                    ATK: 0,
                    DEF: 0
                }
            }
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Name,
                            style: {
                                'font-weight': 'bold',
                                'margin-top': '12px'
                            },
                            class: 'avatar-name',
                        },
                        {
                            p: '★ ★ ★ ★ ★',
                            style: {
                                'font-weight': 'bold',
                                color: '#df903b'
                            },
                            class: 'avatar-name',
                            when: t.Rarity == 5
                        },
                        {
                            p: '★ ★ ★ ★',
                            style: {
                                'font-weight': 'bold',
                                color: '#ffacff'
                            },
                            class: 'avatar-name',
                            when: t.Rarity == 4
                        },
                        {
                            p: '★ ★ ★',
                            style: {
                                'font-weight': 'bold',
                                color: '#8addff'
                            },
                            class: 'avatar-name',
                            when: t.Rarity == 3
                        },
                        {
                            img: imgpre + `images/lightconemediumicon/${t.Pic}`,
                            class: 'weapon-head'
                        },
                        {
                            div: [
                                {
                                    img: imgpre + 'images/Paths/' + t.Path + '.png',
                                    style: {
                                        width: '30%',
                                        'max-width': '48px',
                                        margin: '0px',
                                    },
                                    when: t.Path != undefined
                                },
                            ],
                            style: {
                                display: 'flex',
                                'justify-content': 'center',
                                'flex-wrap': 'wrap',
                                'margin-top': '10px',
                                'margin-bottom': '10px'
                            }
                        },
                        {
                            p: [
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_HP.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.HP.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.ATK.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon'
                                        },
                                        stats.DEF.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                            ],
                            when: t.Stats
                        },
                    ],
                    class: 'avatar-card hover-shadow rar-' + (t.Rarity ? t.Rarity : '6'),
                    style: {
                        display: (((t.Rarity ? t.Rarity : '6') == cur_rarity)) ? '' : 'none'
                    },
                    click: function (p) {
                        popWeapon(i)
                    }
                }
            })
        })
    }

    function listRelic(tp) {
        $('.area').empty()
        _relic.forEach(function (t, i) {
            if (t.Skills.length == tp) return
            $('.area').render({
                div: [
                    {
                        img: imgpre + 'images/itemfigures/' + t.Icon,
                        class: 'icon'
                    },
                    {
                        p: t.Name,
                        class: 'name'
                    },
                    {
                        p: `[[.]]`,
                        class: 'desc',
                        data: t.Skills
                    },
                ],
                class: 'curio hover-shadow',
                click: function (p) {
                    popRelic(i)
                }
            })
        })
    }

    function popAvatar(ai) {
        cur_level = 80
        cur_promote = 1
        cur_avatar_page = 1
        this_avatar = _avatar[ai]
        poplayer({
            header: this_avatar.Name + txt.Affix[lang],
            width: '100%',
            template: [
                {
                    section: function (k) {
                        txt.Avatar_Head.forEach(function (t, i) {
                            $(k.container).render({
                                schedule: t,
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
                                        renderAvatar(poptyp)
                                    }
                                },
                            })
                        })
                    },
                    class: 'mon_head'
                },
                {
                    div: '',
                    class: 'mon_body'
                },
            ]
        })
        renderAvatar(cur_avatar_page)
    }

    function renderAvatar(i) {
        if (i > 1 && i < 7) {
            if (a_2) {
                renderAvatarAfter(i)
            } else {
                clearInterval(check_interval)
                $('.lt').show()
                check_interval = setInterval(function () {
                    if (a_2) {
                        $('.lt').hide()
                        clearInterval(check_interval)
                        renderAvatarAfter(i)
                    }
                }, 200)
            }
        } else {
            renderAvatarAfter(i)
        }
    }

    function renderAvatarAfter(i) {
        if (a_2) {
            this_avatar_vers = getVer(_avatarskill[this_avatar.Skills[0]])
            this_avatar_cur_ver = this_avatar_vers[1]
        }
        cur_avatar_page = i
        var mats = this_avatar.Mat
        if (!mats) {
            mats = [112003, 112003, 112003, 112003]
        }
        var stats = this_avatar.Stats
        if (!stats) {
            stats = {
                HP: 0,
                ATK: 0,
                DEF: 0,
                SPD: 0,
                Aggro: 0
            }
        }
        var cv = this_avatar.CV
        if (!cv) {
            cv = [{}, {}, {}, {}]
        }
        $('.mon_body').empty()
        if (i == 1) {
            $('.mon_body').render([
                {
                    div: [
                        {
                            div: {
                                p: this_avatar.Name,
                                style: {
                                    'text-align': 'center',
                                    color: "#" + elemcolor[this_avatar.Element],
                                    'margin-top': '20px'
                                }
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    p: 'ID ' + this_avatar._id,
                                    style: {
                                        'text-align': 'center',
                                        'font-size': '0.8em',
                                        'font-weight': 'bold',
                                        'margin-top': '4px',
                                        'margin-bottom': '-4px'
                                    }
                                },
                                {
                                    p: '★ ★ ★ ★ ★',
                                    style: {
                                        width: '100%',
                                        'text-align': 'center',
                                        'font-size': '20px',
                                        margin: '0 auto',
                                    },
                                    when: this_avatar.Rarity == 5
                                },
                                {
                                    p: '★ ★ ★ ★',
                                    style: {
                                        width: '100%',
                                        'text-align': 'center',
                                        'font-size': '20px',
                                        margin: '0 auto',
                                    },
                                    when: this_avatar.Rarity == 4
                                },
                                {
                                    img: no_skillicon.includes(this_avatar._id) ? (imgpre + 'images/avatardrawcard/999.png') : (imgpre + 'images/' + this_avatar.Pic),
                                    class: 'gacha',
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Element/' + this_avatar.Element + '.png',
                                            style: {
                                                width: '13%',
                                                'max-width': '48px',
                                                margin: '0px 5px',
                                            },
                                        },
                                        {
                                            img: imgpre + 'images/Paths/' + this_avatar.Path + '.png',
                                            style: {
                                                width: '13%',
                                                'max-width': '48px',
                                                margin: '0px 5px',
                                            },
                                            when : this_avatar.Path != undefined
                                        },
                                    ],
                                    style: {
                                        display: 'flex',
                                        'justify-content': 'center',
                                        'flex-wrap': 'wrap',
                                        'margin-top': '0px',
                                        'margin-bottom': '10px'
                                    }
                                },
                                {
                                    div: {
                                        p: this_avatar.Camp ? _camp[this_avatar.Camp] : '',
                                        style: {
                                            'font-weight': 'bold',
                                            'text-align': 'center'
                                        },
                                        when: this_avatar.Camp
                                    }
                                },
                                {
                                    div: {
                                        p: this_avatar.Desc ? this_avatar.Desc : '',
                                        style: {
                                            'text-align': 'center'
                                        },
                                        when: Boolean(this_avatar.Desc)
                                    }
                                },
                            ],
                            class: 'a_section_content',
                            style: {
                                'overflow-x': 'hidden',
                                'margin-top': '-12px'
                            }
                        },
                    ],
                    class: 'a_section'
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_Stats[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Misc/_HP.png'
                                        },
                                        {
                                            span: (window.innerWidth >= 800 ? props.HP[lang] : '') + ' <b>' + stats.HP.toFixed(1) + '</b> '
                                        }
                                    ],
                                    class: 'addprop'
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png'
                                        },
                                        {
                                            span: (window.innerWidth >= 800 ? props.ATK[lang] : '') + ' <b>' + stats.ATK.toFixed(2) + '</b> '
                                        }
                                    ],
                                    class: 'addprop'
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png'
                                        },
                                        {
                                            span: (window.innerWidth >= 800 ? props.DEF[lang] : '') + ' <b>' + stats.DEF.toFixed(2) + '</b> '
                                        }
                                    ],
                                    class: 'addprop'
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Misc/_SPD.png'
                                        },
                                        {
                                            span: (window.innerWidth >= 800 ? props.SPD[lang] : '') + ' <b>' + stats.SPD.toFixed(0) + '</b> '
                                        }
                                    ],
                                    class: 'addprop'
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/Misc/IconMonsterTaunted.png'
                                        },
                                        {
                                            span: (window.innerWidth >= 800 ? txt.Avatar_Aggro[lang] : '') + ' <b>' + stats.Aggro.toFixed(0) + '</b> '
                                        }
                                    ],
                                    class: 'addprop'
                                }
                            ],
                            class: 'a_section_content mon_head',
                            style: {
                                'margin-bottom': '20px',
                                'margin-top': '-10px'
                            }
                        }
                    ],
                    class: 'a_section',
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_Mats[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {   
                                            img: imgpre + "images/" + _item[mats[0] - 2].Icon,
                                            a: {
                                                'data-id': mats[0] - 2
                                            }
                                        },
                                        {
                                            img: imgpre + "images/" + _item[mats[0] - 1].Icon,
                                            a: {
                                                'data-id': mats[0] - 1
                                            }
                                        },
                                        {
                                            img: imgpre + "images/" + _item[mats[0]].Icon,
                                            a: {
                                                'data-id': mats[0]
                                            }
                                        },
                                        {
                                            p: _item[mats[0]].Name,
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        },
                                        {
                                            p: (this_avatar.Rarity == 5) ? 'x56 / x71 / x73' : 'x40 / x55 / x54',
                                        }
                                    ],
                                    class: 'avatar_mat',
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + "images/" + _item[mats[1]].Icon,
                                            a: {
                                                'data-id': mats[1]
                                            }
                                        },
                                        {
                                            p: _item[mats[1]].Name,
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        },
                                        {
                                            p: (this_avatar.Rarity == 5) ? 'x65' : 'x50',
                                        }
                                    ],
                                    class: 'avatar_mat',
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + "images/" + _item[mats[2] - 2].Icon,
                                            a: {
                                                'data-id': mats[2] - 2
                                            }
                                        },
                                        {
                                            img: imgpre + "images/" + _item[mats[2] - 1].Icon,
                                            a: {
                                                'data-id': mats[2] - 1
                                            }
                                        },
                                        {
                                            img: imgpre + "images/" + _item[mats[2]].Icon,
                                            a: {
                                                'data-id': mats[2]
                                            }
                                        },
                                        {
                                            p: _item[mats[2]].Name,
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        },
                                        {
                                            p: (this_avatar.Rarity == 5) ? 'x18 / x69 / x139' : 'x12 / x54 / x105',
                                        }
                                    ],
                                    class: 'avatar_mat',
                                },
                                {
                                    div: [
                                        {
                                            img: imgpre + "images/" + _item[mats[3]].Icon,
                                            a: {
                                                'data-id': mats[3]
                                            }
                                        },
                                        {
                                            p: _item[mats[3]].Name,
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        },
                                        {
                                            p: (this_avatar.Rarity == 5) ? 'x12' : 'x12',
                                        }
                                    ],
                                    class: 'avatar_mat',
                                },
                            ],
                            class: 'a_section_content',
                            style: {
                                'overflow-x': 'hidden',
                                display: 'flex',
                                'justify-content': 'space-evenly',
                                'flex-wrap': 'wrap',
                            }
                        },
                    ],
                    class: 'a_section',
                    when: this_avatar.Mat
                },
                {
                    div: [
                        {
                            div: {
                                p: txt.Avatar_CV[lang],
                            },
                            class: 'a_section_head',
                            style: {
                                'text-align': 'center',
                                'padding-top': '6px',
                                color: "#" + elemcolor[this_avatar.Element],
                            }
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            p: 'CN',
                                            style: {
                                                'font-size': '13px',
                                                color: '#eeeeee'
                                            }
                                        },
                                        {
                                            p: cv[0],
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        }
                                    ],
                                    style: {
                                        margin: '10px'
                                    }
                                },
                                {
                                    div: [
                                        {
                                            p: 'EN',
                                            style: {
                                                'font-size': '13px',
                                                color: '#eeeeee'
                                            }
                                        },
                                        {
                                            p: cv[1],
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        }
                                    ],
                                    style: {
                                        margin: '10px'
                                    }
                                },
                                {
                                    div: [
                                        {
                                            p: 'JP',
                                            style: {
                                                'font-size': '13px',
                                                color: '#eeeeee'
                                            }
                                        },
                                        {
                                            p: cv[2],
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        }
                                    ],
                                    style: {
                                        margin: '10px'
                                    }
                                },
                                {
                                    div: [
                                        {
                                            p: 'KR',
                                            style: {
                                                'font-size': '13px',
                                                color: '#eeeeee'
                                            }
                                        },
                                        {
                                            p: cv[3],
                                            style: {
                                                'font-weight': 'bold'
                                            }
                                        }
                                    ],
                                    style: {
                                        margin: '10px'
                                    }
                                }
                            ],
                            class: 'a_section_content mon_head',
                            style: {
                                'padding-bottom': '10px',
                                'text-align': 'center'
                            },
                            when: this_avatar.CV
                        }
                    ],
                    class: 'a_section'
                },
            ])
        }
        if (i == 2) {
            $('.mon_body').render([
                {
                    div: {
                        div: [
                            {
                                p: this_avatar.Name,
                                style: {
                                    'text-align': 'center',
                                    margin: '0px auto 15px',
                                    width: '100%',
                                    color: "#" + elemcolor[this_avatar.Element],
                                    'font-weight': 'bold'
                                }
                            },
                            {
                                p: txt.Chart_Subtitle[lang],
                                style: {
                                    margin: '-5px auto 15px',
                                    'font-size': '14px',
                                    'text-align': 'center',
                                    'color': '#f29e38',
                                    width: '100%',
                                    'font-weight': 'normal'
                                }
                            },
                            {
                                span: txt.StatVerChoose[lang]
                            },
                            {
                                span: {
                                    select: '',
                                    options: this_avatar_vers[0]
                                },
                                class: 'stat_ver_choose'
                            }
                        ],
                        class: 'a_section_head stat_ver_choose_wrap'
                    },
                    class: 'a_section',
                    when: this_avatar.Rarity
                },
                {
                    div: [
                        {
                            p: this_avatar.Name,
                            style: {
                                'text-align': 'center',
                                margin: '15px auto',
                                'font-size': '1.3em',
                                color: "#" + elemcolor[this_avatar.Element],
                                'font-weight': 'bold'
                            }
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            style: {
                                margin: '2px auto',
                                'font-size': '14px',
                                'text-align': 'center',
                                'color': '#f29e38',
                                width: '100%',
                            }
                        },
                        {
                            p: txt.DEV[lang],
                            class: "-dev"
                        }
                    ],
                    class: 'a_section',
                    when: !this_avatar.Rarity
                }
            ])
            $('.stat_ver_choose select').val(this_avatar_cur_ver)
            var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
            this_avatar.Skills.forEach(function (s, i) {
                var S = _avatarskill[s][this_avatar_cur_ver]
                var recommendLV = 1
                if (S.MaxLevel == 15) recommendLV = 10
                if (S.MaxLevel == 9) recommendLV = 6
                if (S.Stance) {
                    var stanceshow = txt.Avatar_StanceBreak[lang] + (S.Stance[0] ? ('| ' + txt.Avatar_StanceBreak_Specific[0][lang] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + S.Stance[0] + '</b></color> ') : '') + (S.Stance[1] ? ('| ' + txt.Avatar_StanceBreak_Specific[1][lang] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + S.Stance[1] + '</b></color> ') : '') + (S.Stance[2] ? ('| ' + txt.Avatar_StanceBreak_Specific[2][lang] + "<color style='color:#" + elemcolor[this_avatar.Element] + "'><b>" + S.Stance[2] + '</b></color> ') : '')
                } else {
                    var stanceshow = ''
                }
                $('.mon_body').render({
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/' + skill_id + '/' + S.Icon + '.png',
                                    class: 'head_left',
                                    when: (S.Icon != undefined) && !no_skillicon.includes(this_avatar._id)
                                },
                                {
                                    p: S.Name,
                                    class: ((S.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : 'hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            span: 'Lv' + recommendLV,
                                            style: {
                                                'margin-right': '8px',
                                                'font-weight': 'bold'
                                            },
                                            class: 'ld-' + s
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
                                            a: {
                                                'data-id': s,
                                                'data-max': S.MaxLevel
                                            }
                                        },
                                        {
                                            span: {
                                                span: '▼',
                                                style: {
                                                    'font-size': '16px',
                                                    'line-height': '24px'
                                                }
                                            },
                                            class: 'down',
                                            a: {
                                                'data-id': s,
                                            }
                                        },
                                    ],
                                    class: 'control',
                                    when: S.MaxLevel > 1
                                },
                                {
                                    p: param(S.Desc, S.Params ? S.Params[recommendLV - 1] : []),
                                    class: 'sd sd-' + s
                                },
                                {
                                    p: stanceshow.replaceAll("：| ", "：").replaceAll(": | ", ": "),
                                    when: S.Stance && (S.Stance[0] + S.Stance[1] + S.Stance[2]),
                                    style: {
                                        'margin-top': '10px'
                                    }
                                },
                                {
                                    p: [
                                        {
                                            span: S.Type ? S.Type : '',
                                            class: 'sbp',
                                            style: {
                                                'font-weight': 'bold',
                                                color: "#" + elemcolor[this_avatar.Element]
                                            },
                                            when: Boolean(S.Type)
                                        },
                                        {
                                            span: S.Tag ? S.Tag : '',
                                            class: 'sbp',
                                            style: {
                                                'font-weight': 'bold',
                                                color: "#" + elemcolor[this_avatar.Element]
                                            },
                                            when: Boolean(S.Tag)
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/Misc/PointBPFull.png'
                                                },
                                                {
                                                    span: (S.BP > 0) ? ('+' + S.BP) : (S.BP ? S.BP.toString() : '')
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.BP,
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/AddProp/IconEnergyLimit.png'
                                                },
                                                {
                                                    span: S.SPNeed ? S.SPNeed.toFixed(0) : ''
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.SPNeed
                                        },
                                        {
                                            span: [
                                                {
                                                    img: imgpre + 'images/AddProp/IconEnergyRecovery.png'
                                                },
                                                {
                                                    span: (S.SPAdd > 0) ? ('+' + S.SPAdd) : (S.SPAdd ? S.SPAdd.toString() : '')
                                                }
                                            ],
                                            class: 'sbp',
                                            when: S.SPAdd
                                        },
                                    ],
                                    style: {
                                        'margin-top': '10px'
                                    },
                                    when: (S.Type != "") && !S.Type.includes("dev")
                                }
                            ],
                            class: 'a_section_content',
                            a: {
                                'data-id': s,
                                'data-lv': recommendLV
                            }
                        }
                    ],
                    class: 'a_section'
                })
            })
        }
        if (i == 3) {
            var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
            $('.mon_body').render([
                {
                    div: {
                        div: [
                            {
                                p: this_avatar.Name,
                                style: {
                                    'text-align': 'center',
                                    margin: '0px auto 15px',
                                    width: '100%',
                                    color: "#" + elemcolor[this_avatar.Element],
                                    'font-weight': 'bold'
                                }
                            },
                            {
                                p: txt.Chart_Subtitle[lang],
                                style: {
                                    margin: '-5px auto 15px',
                                    'font-size': '14px',
                                    'text-align': 'center',
                                    'color': '#f29e38',
                                    width: '100%',
                                    'font-weight': 'normal'
                                }
                            },
                            {
                                span: txt.StatVerChoose[lang]
                            },
                            {
                                span: {
                                    select: '',
                                    options: this_avatar_vers[0]
                                },
                                class: 'stat_ver_choose'
                            }
                        ],
                        class: 'a_section_head stat_ver_choose_wrap'
                    },
                    class: 'a_section',
                    when: this_avatar.Rarity
                },
                {
                    div: [
                        {
                            p: this_avatar.Name,
                            style: {
                                'text-align': 'center',
                                margin: '15px auto',
                                'font-size': '1.3em',
                                color: "#" + elemcolor[this_avatar.Element],
                                'font-weight': 'bold'
                            }
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            style: {
                                margin: '2px auto',
                                'font-size': '14px',
                                'text-align': 'center',
                                'color': '#f29e38',
                                width: '100%',
                            }
                        },
                        {
                            p: txt.DEV[lang],
                            class: "-dev"
                        }
                    ],
                    class: 'a_section',
                    when: !this_avatar.Rarity
                }
            ])
            $('.stat_ver_choose select').val(this_avatar_cur_ver)
            ST = _avatarskilltree[this_avatar._id][this_avatar_cur_ver]
            $('.mon_body').render([
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/Misc/_ADD.png',
                                    class: 'head_left'
                                },
                                {
                                    p: txt.AddProp[lang],
                                    class: 'head_right hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: {
                                div: [
                                    {
                                        img: function (k) {
                                            return imgpre + 'images/AddProp/' + _propiconname[k.data]
                                        },
                                    },
                                    {
                                        span: function (k) {
                                            if (k.data == 'SpeedDelta') return ' +<b>' + ST.Add[k.data] + '</b> ' + _propname[k.data]
                                            return ' +<b>' + (ST.Add[k.data] * 100).toFixed(1) + '%</b> ' + _propname[k.data]
                                        },
                                    }
                                ],
                                data: ST.Add ? Object.keys(ST.Add) : [],
                                class: 'addprop'
                            },
                            class: 'a_section_content mon_head',
                            style: {
                                'margin-bottom': '20px',
                                'margin-top': '-10px'
                            }
                        }
                    ],
                    class: 'a_section',
                    when: ST.Add
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/' + skill_id + '/' + ST.Tree1.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree1.Icon != undefined) && !no_skillicon.includes(this_avatar._id)
                                },
                                {
                                    p: ST.Tree1.Name,
                                    class: ((ST.Tree1.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : 'hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: {
                                p: ST.Tree1.Desc,
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section',
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/' + skill_id + '/' + ST.Tree2.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree2.Icon != undefined) && !no_skillicon.includes(this_avatar._id)
                                },
                                {
                                    p: ST.Tree2.Name,
                                    class: ((ST.Tree2.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : 'hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: {
                                p: ST.Tree2.Desc,
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section',
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    img: imgpre + 'images/skillicons/' + skill_id + '/' + ST.Tree3.Icon + '.png',
                                    class: 'head_left',
                                    when: (ST.Tree3.Icon != undefined) && !no_skillicon.includes(this_avatar._id)
                                },
                                {
                                    p: ST.Tree3.Name,
                                    class: ((ST.Tree3.Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : 'hr_1',
                                    style: {
                                        color: "#" + elemcolor[this_avatar.Element]
                                    }
                                },
                            ],
                            class: 'a_section_head head_withimg'
                        },
                        {
                            div: {
                                p: ST.Tree3.Desc,
                            },
                            class: 'a_section_content'
                        }
                    ],
                    class: 'a_section',
                }
            ])
        }
        if (i == 4) {
            $('.mon_body').render([
                {
                    div: {
                        div: [
                            {
                                p: this_avatar.Name,
                                style: {
                                    'text-align': 'center',
                                    margin: '0px auto 15px',
                                    width: '100%',
                                    color: "#" + elemcolor[this_avatar.Element],
                                    'font-weight': 'bold'
                                }
                            },
                            {
                                p: txt.Chart_Subtitle[lang],
                                style: {
                                    margin: '-5px auto 15px',
                                    'font-size': '14px',
                                    'text-align': 'center',
                                    'color': '#f29e38',
                                    width: '100%',
                                    'font-weight': 'normal'
                                }
                            },
                            {
                                span: txt.StatVerChoose[lang]
                            },
                            {
                                span: {
                                    select: '',
                                    options: this_avatar_vers[0]
                                },
                                class: 'stat_ver_choose'
                            }
                        ],
                        class: 'a_section_head stat_ver_choose_wrap'
                    },
                    class: 'a_section',
                    when: this_avatar.Rarity
                },
                {
                    div: [
                        {
                            p: this_avatar.Name,
                            style: {
                                'text-align': 'center',
                                margin: '15px auto',
                                'font-size': '1.3em',
                                color: "#" + elemcolor[this_avatar.Element],
                                'font-weight': 'bold'
                            }
                        },
                        {
                            p: txt.Chart_Subtitle[lang],
                            style: {
                                margin: '2px auto',
                                'font-size': '14px',
                                'text-align': 'center',
                                'color': '#f29e38',
                                width: '100%',
                            }
                        },
                        {
                            p: txt.DEV[lang],
                            class: "-dev"
                        }
                    ],
                    class: 'a_section',
                    when: !this_avatar.Rarity
                }
            ])
            $('.stat_ver_choose select').val(this_avatar_cur_ver)
            this_avatar.Ranks.forEach(function (s, i) {
                var S = _avatarrank[s]
                var skill_id = (this_avatar._id > 8000) ? ((this_avatar._id % 2 == 1) ? this_avatar._id : this_avatar._id - 1) : this_avatar._id
                $('.mon_body').render({
                    div: [
                        {
                            div: {
                                img: imgpre + 'images/rank/_dependencies/textures/' + this_avatar._id + '/' + this_avatar._id + '_Rank_' + (i + 1) + '.png',
                                style: {
                                    width: '100%'
                                }
                            },
                            class: 'rank_up',
                            when: (this_avatar.Rarity != undefined) && !no_skillicon.includes(this_avatar._id)
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            img: imgpre + 'images/skillicons/' + skill_id + '/' + S[this_avatar_cur_ver].Icon + '.png',
                                            class: 'head_left',
                                            when: (S[this_avatar_cur_ver].Icon != undefined) && !no_skillicon.includes(this_avatar._id)
                                        },
                                        {
                                            p: S[this_avatar_cur_ver].Rank + ' ' + S[this_avatar_cur_ver].Name,
                                            class: ((S[this_avatar_cur_ver].Icon != undefined) && !no_skillicon.includes(this_avatar._id)) ? 'head_right hr_1' : 'hr_1',
                                            style: {
                                                color: "#" + elemcolor[this_avatar.Element]
                                            }
                                        },
                                    ],
                                    class: 'a_section_head head_withimg'
                                },
                                {
                                    div: {
                                        p: S[this_avatar_cur_ver].Desc,
                                    },
                                    class: 'a_section_content'
                                }
                            ],
                            class: 'rank_down',
                            style: {
                                width: ((this_avatar.Rarity != undefined) && !no_skillicon.includes(this_avatar._id)) ? '' : '100%'
                            }
                        }
                    ],
                    class: 'a_section',
                    style: {
                        display: 'flex',
                        'flex-wrap': 'wrap',
                        'justify-content': 'center'
                    }
                })
            })
        }
        if (i == 5) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: txt.Avatar_Story[lang] + `[[_id]]`
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: {
                            p: `[[Story]]`
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section',
                data: _story[this_avatar._id]
            })
        }
        if (i == 6) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: `[[Title]]`
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: {
                            p: `[[Voice]]`
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section_small',
                data: _voice[this_avatar._id]
            })
        }
        if (i == 7) {
            $('.mon_body').render({
                div: [
                    {
                        div: {
                            p: txt.Avatar_Head[6][lang]
                        },
                        class: 'a_section_head',
                        style: {
                            color: "#" + elemcolor[this_avatar.Element]
                        }
                    },
                    {
                        div: {
                            p: `[[.]]`,
                            data: this_avatar.Data
                        },
                        class: 'a_section_content'
                    }
                ],
                class: 'a_section',
            })
        }
    }

    $('body').on('click', '.avatar_mat img', function () {
        window.open('/sr/item/' + $(this).attr('data-id') + '?lang=' + lang)
    })

    $('body').on('click', '.up', function () {
        var sid = $(this).attr('data-id')
        var lv = parseInt($(".ld-" + sid)[0].innerHTML.replace("Lv", ""))
        var max = parseInt($(this).attr('data-max'))
        if (lv == max) return
        lv += 1
        $(".ld-" + sid).html("Lv" + lv)
        var S = _avatarskill[sid][this_avatar_cur_ver]
        $('.sd-' + sid).html(param(S.Desc, S.Params ? S.Params[lv - 1] : []))
    })

    $('body').on('click', '.down', function () {
        var sid = $(this).attr('data-id')
        var lv = parseInt($(".ld-" + sid)[0].innerHTML.replace("Lv", ""))
        if (lv == 1) return
        lv -= 1
        $(".ld-" + sid).html("Lv" + lv)
        var S = _avatarskill[sid][this_avatar_cur_ver]
        $('.sd-' + sid).html(param(S.Desc, S.Params ? S.Params[lv - 1] : []))
    })

    function popWeapon(ai) {
        this_weapon = _weapon[ai]
        this_weapon_vers = getVer(_weaponskill[this_weapon.Skill])
        this_weapon_cur_ver = this_weapon_vers[1]
        var mats = this_weapon.Mat
        if (!mats) {
            mats = [112003, 112003]
        }
        var stats = this_weapon.Stats
        if (!stats) {
            stats = {
                HP: 0,
                ATK: 0,
                DEF: 0
            }
        }
        poplayer({
            header: this_weapon.Name + txt.Affix[lang],
            width: '100%',
            template: [
                {
                    div: [
                        {
                            div: {
                                div: [
                                    {
                                        div: {
                                            img: imgpre + 'images/lightconemaxfigures/' + this_weapon.Pic,
                                        },
                                        class: 'weapon_left'
                                    },
                                    {
                                        div: [
                                            {
                                                div: [
                                                    {
                                                        p: this_weapon.Name,
                                                        style: {
                                                            'font-weight': 'bold',
                                                            'text-align': 'center'
                                                        },
                                                        class: 'weapon_title'
                                                    },
                                                    {
                                                        p: {
                                                            img: imgpre + 'images/Paths/' + this_weapon.Path + '.png',
                                                            style: {
                                                                width: '13%',
                                                                'max-width': '48px',
                                                                margin: '9px auto',
                                                            },
                                                            when: this_weapon.Path != undefined
                                                        },
                                                        style: {
                                                            'text-align': 'center'
                                                        },
                                                    },
                                                    {
                                                        p: this_weapon.Desc,
                                                        class: 'weapon_story'
                                                    }
                                                ]
                                            },
                                            {
                                                div: [
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_HP.png'
                                                            },
                                                            {
                                                                span: ' <b>' + stats.HP.toFixed(1) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_ATK.png'
                                                            },
                                                            {
                                                                span: ' <b>' + stats.ATK.toFixed(2) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                img: imgpre + 'images/Misc/_DEF.png'
                                                            },
                                                            {
                                                                span: ' <b>' + stats.DEF.toFixed(2) + '</b> '
                                                            }
                                                        ],
                                                        class: 'addprop_'
                                                    },
                                                ],
                                                class: 'mon_head'
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
                                    div: [
                                        {
                                            span: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Name,
                                            style: {
                                                'margin': '0'
                                            },
                                            class: 'weapon_skill_name'
                                        },
                                        {
                                            span: {
                                                select: '',
                                                options: this_weapon_vers[0]
                                            },
                                            class: 'stat_ver_choose_w'
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        p: `[[.]]`.replaceAll("<color style='color:#f29e38;'> <b>", "<color style='color:#f29e38;'>").replaceAll("<color style='color:#f29e38;'><b>", "<color style='color:#f29e38;'>").replaceAll("</b> </color>", "</color>").replaceAll("</b></color>", "</color>"),
                                        data: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Desc
                                    },
                                    class: 'a_section_content weapon_skill'
                                },
                                
                            ],
                            class: 'a_section'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: txt.Weapon_Mats[lang]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    img: imgpre + "images/" + _item[mats[0] - 2].Icon,
                                                    a: {
                                                        'data-id': mats[0] - 2
                                                    }
                                                },
                                                {
                                                    img: imgpre + "images/" + _item[mats[0] - 1].Icon,
                                                    a: {
                                                        'data-id': mats[0] - 1
                                                    }
                                                },
                                                {
                                                    img: imgpre + "images/" + _item[mats[0]].Icon,
                                                    a: {
                                                        'data-id': mats[0]
                                                    }
                                                },
                                                {
                                                    p: _item[mats[0]].Name,
                                                    style: {
                                                        'font-weight': 'bold'
                                                    }
                                                },
                                                {
                                                    p: (this_weapon.Rarity == 5) ? 'x20 / x20 / x14' : ((this_weapon.Rarity == 4) ? 'x15 / x15 / x12' : 'x12 / x10 / x8'),
                                                }
                                            ],
                                            class: 'avatar_mat',
                                        },
                                        {
                                            div: [
                                                {
                                                    img: imgpre + "images/" + _item[mats[1] - 2].Icon,
                                                    a: {
                                                        'data-id': mats[1] - 2
                                                    }
                                                },
                                                {
                                                    img: imgpre + "images/" + _item[mats[1] - 1].Icon,
                                                    a: {
                                                        'data-id': mats[1] - 1
                                                    }
                                                },
                                                {
                                                    img: imgpre + "images/" + _item[mats[1]].Icon,
                                                    a: {
                                                        'data-id': mats[1]
                                                    }
                                                },
                                                {
                                                    p: _item[mats[1]].Name,
                                                    style: {
                                                        'font-weight': 'bold'
                                                    }
                                                },
                                                {
                                                    p: (this_weapon.Rarity == 5) ? 'x4 / x12 / x15' : ((this_weapon.Rarity == 4) ? 'x3 / x9 / x12' : 'x2 / x6 / x9'),
                                                }
                                            ],
                                            class: 'avatar_mat',
                                        },
                                    ],
                                    class: 'a_section_content',
                                    style: {
                                        'overflow-x': 'hidden',
                                        display: 'flex',
                                        'justify-content': 'space-evenly',
                                        'flex-wrap': 'wrap',
                                    }
                                },
                            ],
                            class: 'a_section',
                            when: this_weapon.Mat
                        },
                    ],
                    class: 'mon_body'
                },
            ]
        })
    }

    function popRelic(ai) {
        this_relic = _relic[ai]
        poplayer({
            header: this_relic.Name + txt.Affix[lang],
            template: {
                div: [],
                class: 'mon_body'
            }
        })
        this_relic.Items.forEach(function (t, i) {
            $('.mon_body').render({
                template: {
                    div: {
                        div: [
                            {
                                img: imgpre + 'images/relicfigures/' + t.Icon,
                                class: 'icon'
                            },
                            {
                                p: t.Name,
                                class: 'name',
                                style: {
                                    'font-size': '1.2em'
                                }
                            },
                            {
                                p: t.Desc,
                                class: 'desc',
                                style: {
                                    'text-align': 'center'
                                }
                            },
                            {
                                hr: '',
                                style: {
                                    'border-color': '#bbbbbb',
                                    margin: '25px auto 20px'
                                }
                            },
                            {
                                p: t.Story,
                                class: 'desc'
                            }
                        ],
                        class: 'a_section_content'
                    },
                    class: 'a_section',
                }
            })
        })
    }

    function getVer(dic) {
        var di = Object.keys(dic)
        var out = {}
        di.forEach(function (k) {
            if (k == "Pre" || k == "Live") {
                out[(lang == "CH") ? '正式' : 'Live'] = k
            } else {
                out[k] = k
            }
        })
        return [out, di[di.length - 1]]
    }

    function param(text, params) {
        var PP = text.replaceAll("#1[f]", params[0]).replaceAll("#2[f]", params[1]).replaceAll("#3[f]", params[2]).replaceAll("#4[f]", params[3]).replaceAll("#5[f]", params[4]).replaceAll("#6[f]", params[5]).replaceAll("#7[f]", params[6]).replaceAll("#8[f]", params[7]).replaceAll("#9[f]", params[8]).replaceAll("#10[f]", params[9]).replaceAll("#11[f]", params[10]).replaceAll("#12[f]", params[11]).replaceAll("#1[p]", rn(params[0] * 100) + "%").replaceAll("#2[p]", rn(params[1] * 100) + "%").replaceAll("#3[p]", rn(params[2] * 100) + "%").replaceAll("#4[p]", rn(params[3] * 100) + "%").replaceAll("#5[p]", rn(params[4] * 100) + "%").replaceAll("#6[p]", rn(params[5] * 100) + "%").replaceAll("#7[p]", rn(params[6] * 100) + "%").replaceAll("#8[p]", rn(params[7] * 100) + "%").replaceAll("#9[p]", rn(params[8] * 100) + "%").replaceAll("#10[p]", rn(params[9] * 100) + "%").replaceAll("#11[p]", rn(params[10] * 100) + "%").replaceAll("#12[p]", rn(params[11] * 100) + "%")
        return PP
    }

    function rn(n) {
        if (!n.toString().includes('.')) return n.toString()
        var s = n.toString().substring(n.toString().indexOf('.'))
        if (s.includes('999')) return n.toFixed(s.indexOf('999') - 1)
        if (s.includes('000')) return n.toFixed(s.indexOf('000') - 1)
        return n.toString()
    }

    $('body').on('change', '.stat_ver_choose select', function () {
        this_avatar_cur_ver = $(this).val()
        renderAvatar(cur_avatar_page)
    })

    $('body').on('change', '.stat_ver_choose_w select', function () {
        this_weapon_cur_ver = $(this).val()
        $('.weapon_skill_name').html(_weaponskill[this_weapon.Skill][this_weapon_cur_ver].Name)
        $('.weapon_skill').empty.render({
            p: `[[.]]`.replaceAll("<color style='color:#f29e38;'> <b>", "<color style='color:#f29e38;'>").replaceAll("<color style='color:#f29e38;'><b>", "<color style='color:#f29e38;'>").replaceAll("</b> </color>", "</color>").replaceAll("</b></color>", "</color>").replaceAll("<b>", ""),
            data: _weaponskill[this_weapon.Skill][this_weapon_cur_ver].Desc
        })
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