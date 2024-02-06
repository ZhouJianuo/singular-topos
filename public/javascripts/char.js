$(function () {

    var _lang = 0
    var DATE = new Date()
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('lang=')) && !(c.includes('session'))) {
            _lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
        }
    });

    var lang_ = $('#LANG').val()
    if (lang_) {
        var lang = lang_
        document.cookie = 'lang=' + lang_ + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    } else {
        var lang = (_lang === 'CH') ? 'CH' : 'EN';
    }

    var imgpre = $('#IMGPRE').val()
    var avid = $('#avid').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang)
    })

    var a_w_r = 1
    var this_avatar = 0
    var this_weapon = 0
    var this_relic = 0

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
                        /*{
                            schedule: {
                                img: imgpre + 'images/Misc/IconAvatarRelic.png',
                            },
                            class: '_r'
                        }*/
                    ],
                    class: 'a_w_r'
                },
                {
                    div: [],
                    class: 'area'
                }
            ],
            class: 'content'
        }
    })

    listAvatar()

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        if ($(this).hasClass('_a')) {
            a_w_r = 1
            listAvatar()
        } else if ($(this).hasClass('_w')) {
            a_w_r = 2
            listWeapon()
        } else {
            a_w_r = 3
            listRelic()
        }
    })

    function listAvatar() {
        $('.area').empty()
        _avatar.forEach(function (t, i) {
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Ver.replace('9.0', '???'),
                            style: {
                                'font-weight': 'bold'
                            }
                        },
                        {
                            img: imgpre + `images/${t.Icon}.png`,
                            class: 'avatar-head'
                        },
                        {
                            p: t.Name[lang],
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
                                        margin: '0px',
                                    },
                                },
                                {
                                    img: imgpre + 'images/Paths/' + t.Path + '.png',
                                    style: {
                                        width: '22%',
                                        'max-width': '35px',
                                        margin: '0px',
                                    }
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
                                        (t.Stats[6].HP[0] + 80 * t.Stats[6].HP[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon'
                                        },
                                        (t.Stats[6].ATK[0] + 80 * t.Stats[6].ATK[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon'
                                        },
                                        (t.Stats[6].DEF[0] + 80 * t.Stats[6].DEF[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_SPD.png',
                                            class: 'avatar-staticon'
                                        },
                                        t.Stats[6].SPD.toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                }
                            ]
                        },
                    ],
                    class: 'avatar-card hover-shadow',
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
            $('.area').render({
                template: {
                    div: [
                        {
                            p: t.Name[lang],
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
                            img: imgpre + `images/WeaponIcon/${t.Pic}`,
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
                                    }
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
                                        (t.Stats[6].HP[0] + 80 * t.Stats[6].HP[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_ATK.png',
                                            class: 'avatar-staticon'
                                        },
                                        (t.Stats[6].ATK[0] + 80 * t.Stats[6].ATK[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                                {
                                    span: [
                                        {
                                            img: imgpre + 'images/Misc/_DEF.png',
                                            class: 'avatar-staticon'
                                        },
                                        (t.Stats[6].DEF[0] + 80 * t.Stats[6].DEF[1]).toFixed(0)
                                    ],
                                    class: 'avatar-stat'
                                },
                            ],
                            'margin-bottom': '12px'
                        },
                    ],
                    class: 'avatar-card hover-shadow',
                    click: function (p) {
                        popAvatar(i)
                    }
                }
            })
        })
    }

    function listRelic() {
        $('.area').empty().render({
            
        })
    }

    function popAvatar(ai) {
        this_avatar = _avatar[i]
    }

    $('body').on('click', '.subtitle', function () {
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