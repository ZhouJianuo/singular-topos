$(function () {

    var _lang = 0
    var DATE = new Date()
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('lang=')) && !(c.includes('session'))) {
            _lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
        }
    });

    var lang_ = $('#LANG').val()
    if (lang_ == 'RU') {
        lang_ = 'EN'
    }
    if (lang_) {
        var lang = lang_
        document.cookie = 'lang=' + lang_ + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    } else {
        var lang = (_lang === 'CH') ? 'CH' : 'EN';
    }

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    var isNew = _ver[_ver.length - 1]

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
                        p: t.Name[lang],
                        class: 'event-name'
                    },
                    {
                        div: {
                            img: imgpre + 'images/tabicon/' + t.Icon
                        },
                        class: 'event-img',
                        style: {
                            width: '100%'
                        }
                    },
                    {
                        p: t.Desc[lang],
                        class: 'event-desc',
                        when: t.Desc[lang].length
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
                        when: t.Reward.length
                    },
                    {
                        hr: '',
                        style: {
                            'margin-top': '20px'
                        }
                    },
                    {
                        div: [
                            {
                                span: 'ⓘ',
                                class: 'info',
                                a: {
                                    'data-id': t._id
                                },
                                when: t.Tutorial
                            },
                            {
                                span: '＋',
                                class: 'plus',
                                a: {
                                    'data-id': t._id
                                }
                            }
                        ],
                        class: 'event-sel'
                    },
                    {
                        p: t.Story[lang],
                        class: 'event-story es-' + t._id,
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
            $(this).html('−')
        } else {
            T.hide()
            $(this).html('＋')
        }
    })

    $('body').on('click', '.info', function () {
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
                    p: this_item.Name[lang],
                    class: 'name',
                    style: {
                        'font-size': '1.2em'
                    }
                },
                {
                    p: this_item.Desc[lang],
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
                    p: this_item.Story[lang],
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
                            return '- ' + k.data[lang]
                        },
                        class: 'desc',
                        data: this_item.Src,
                        when: this_item.Src
                    },
                }
            ],
        })
        $('popbody').css('max-height', (window.innerHeight * 0.9 - 65).toFixed(0) + 'px')
    }

})