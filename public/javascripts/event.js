$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

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

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang2 + '/Event.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        isNew = _ver[_ver.length - 1]
        $('container').render({
            template: {
                div: [
                    {
                        section: '',
                        class: 'rar'
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
    
        _ver.forEach(function (o, j) {
            $('.rar').render({
                schedule: o,
                class: (o == isNew) ? 'active' : '',
                a: {
                    'data-id': o
                }
            },)
        })
    
        renderEvents()
    }

    $('body').on('click', '.rar schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        isNew = $(this).attr('data-id')
        $(this).addClass('active').siblings('schedule').removeClass('active');
        renderEvents()
    })

    function renderEvents() {
        $('.area').empty()
        _event.forEach(function (t, i) {
            if (t.Ver != isNew) return
            $('.area').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc',
                        when: t.Desc && t.Desc.length
                    },
                    {
                        div: {
                            img: function (k) {
                                if (_item[k.data].Icon.includes('AvatarIcon')) return imgpre + 'images/avataricon/' + _item[k.data].Icon.replace('SpriteOutput/AvatarIcon/', '')
                                return imgpre + 'images/itemicon/' + _item[k.data].Icon
                            },
                            data: t.Reward,
                            class: 'hover-shadow-',
                            a: {
                                'data-id': function (k) {
                                    return k.data
                                }
                            }
                        },
                        class: 'event-reward',
                        when: t.Reward && t.Reward.length
                    },
                    {
                        hr: '',
                        style: {
                            'margin-top': '20px'
                        },
                        when: t.Story && t.Story.length
                    },
                    {
                        div: {
                            span: '＋' + txt.Event_Story[lang] + '＋',
                            class: 'plus',
                            a: {
                                'data-id': t._id
                            }
                        },
                        class: 'event-sel',
                        when: t.Story && t.Story.length
                    },
                    {
                        p: t.Story,
                        class: 'event-story es-' + t._id,
                        style: {
                            display: 'none'
                        },
                        when: t.Story && t.Story.length
                    },
                    {
                        hr: '',
                        when: t.Tutorial && t.Tutorial.length
                    },
                    {
                        div: {
                            span: '＋' + txt.Event_Tutorial[lang] + '＋',
                            class: 'info',
                            a: {
                                'data-id': t._id
                            }
                        },
                        class: 'event-sel',
                        when: t.Tutorial && t.Tutorial.length
                    },
                    {
                        div: {
                            div: [
                                {
                                    img: function (k) {
                                        return imgpre + 'images/tutorialpic/' + _tut[k.data].Img
                                    },
                                    class: 'tut_img'
                                },
                                {
                                    p: function (k) {
                                        return _tut[k.data].Desc
                                    },
                                    class: 'tut_p'
                                }
                            ],
                            class: 'tut',
                            data: t.Tutorial
                        },
                        class: 'event-tut fs-' + t._id,
                        style: {
                            display: 'none'
                        }
                    },
                ],
                class: 'a_section'
            })
        })
    }

    $('body').on('click', '.plus', function () {
        var id = $(this).attr('data-id')
        var T = $('.es-' + id)
        if (T.css('display') == 'none') {
            T.show()
            $(this).html($(this).html().replaceAll('＋', "−"))
        } else {
            T.hide()
            $(this).html($(this).html().replaceAll('−', "＋"))
        }
    })

    $('body').on('click', '.info', function () {
        var id = $(this).attr('data-id')
        var T = $('.fs-' + id)
        if (T.css('display') == 'none') {
            T.show()
            $(this).html($(this).html().replaceAll('＋', "−"))
        } else {
            T.hide()
            $(this).html($(this).html().replaceAll('−', "＋"))
        }
    })

    $('body').on('click', '.hover-shadow-', function () {
        popItem($(this).attr('data-id'))
    })

    function popItem(y) {
        this_item = _item[y]
        poplayer({
            header: txt.Affix[lang].substring(3),
            width: '90%',
            template: [
                {
                    img: this_item.Pic.includes('LightConeMaxFigures') ? (imgpre + 'images/lightconemaxfigures/' + this_item.Pic.replace('SpriteOutput/LightConeMaxFigures', '')) : (this_item.Pic.includes('AvatarIcon') ? (imgpre + 'images/avataricon/' + this_item.Pic.replace('SpriteOutput/AvatarIcon/', '')) : (imgpre + 'images/itemfigures/' + this_item.Pic)),
                    class: 'icon',
                    when: (this_item.Pic != undefined) && (this_item.Pic != "") && !(this_item.Pic.includes('SpriteOutput') && !this_item.Pic.includes('LightConeMaxFigures') && !this_item.Pic.includes('AvatarIcon'))
                },
                {
                    p: this_item.Name,
                    class: 'name',
                    style: {
                        'font-size': '1.2em'
                    }
                },
                {
                    p: this_item.Desc,
                    class: 'desc',
                    style: {
                        'text-align': 'center'
                    }
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    }
                },
                {
                    p: this_item.Story,
                    class: 'desc'
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    },
                    when: this_item.Src
                },
                {
                    div: {
                        p: function (k) {
                            return '- ' + k.data
                        },
                        class: 'desc',
                        data: this_item.Src,
                        when: this_item.Src
                    },
                }
            ],
        })
    }

})