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

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang])
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang)
    })

    var cur_star = 1
    var cur_path = _blessingtypes[_blessingtypes.length - 1]._id
    var ml = 1

    $('container').render({
        template: {
            div: [
                {
                    section: {
                        schedule: `[[Name/${lang}]]`,
                        data: _blessingtypes,
                        event: {
                            click: function (d) {
                                if ($(d.sender).hasClass('active')) {
                                    return;
                                }
                                $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                cur_path = d.org_data._id
                                blessingRender();
                            }
                        }
                    },
                    class: 'path'
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    section: [
                        {
                            schedule: '★',
                            a: {
                                'data-id': 1
                            },
                            class: 'active'
                        },
                        {
                            schedule: '★★',
                            a: {
                                'data-id': 2
                            }
                        },
                        {
                            schedule: '★★★',
                            a: {
                                'data-id': 3
                            }
                        }
                    ],
                    class: 'star'
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    div: [],
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    $('.path schedule:last-child').addClass('active')
    blessingRender()

    $('body').on('click', '.star schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_star = parseInt($(this).attr('data-id'))
        blessingRender();
    })

    function blessingRender () {
        $('.blessing_card_area').empty()
        _blessing.forEach(function (t) {
            if (t.Path == cur_path && t.Rarity == cur_star) {
                $('.blessing_card_area').render({
                    template: {
                        div: [
                            {
                                img: imgpre + (t.Icon.includes('Path') ? 'images/Misc/a.png' : ('images/RogueBuff' + t.Icon)),
                                class: 'icon'
                            },
                            {
                                p: t.Name[lang],
                                class: 'name'
                            },
                            {
                                p: conc(t.Desc),
                                class: 'desc normal'
                            },
                            {
                                p: conc(t.SimpleDesc),
                                class: 'desc simple'
                            },
                            {
                                div: 'ⓘ',
                                class: 'info',
                                when: t.Effects.length
                            },
                            {
                                div: '+',
                                class: 'ml'
                            },
                            {
                                p: effc(t.Effects),
                                class: 'desc extra',
                                style: {
                                    display: 'none'
                                },
                                when: t.Effects.length
                            }
                        ],
                        class: 'curio',
                        a: {
                            'data-id': '1'
                        }
                    }
                })
            }
        })
    }

    function conc(l) {
        out = ''
        l.forEach(function (t) {
            out += t[lang] + "<div style='height:10px;'></div>"
        })
        return out
    }

    function effc(l) {
        out = ''
        l.forEach(function (t) {
            out += '<b>' + _blessingextra[t].Name[lang] + '</b><br>' + _blessingextra[t].Desc[lang] + "<div style='height:10px;'></div>"
        })
        return out
    }

    $('body').on('click', '.ml', function () {
        ml = 1 - ml
        if (ml) {
            $('.simple').hide()
            $('.normal').show()
        } else {
            $('.simple').show()
            $('.normal').hide()
        }
    })

    $('body').on('click', '.info', function () {
        var iss = $(this).parent().attr('data-id')
        if (iss == '1') {
            $(this).parent().attr('data-id', '2')
            $(this).siblings('.extra').show()
        } else {
            $(this).parent().attr('data-id', '1')
            $(this).siblings('.extra').hide()
        }
    })

    $('body').on('click', '.infou', function () {
        var tp = $(this).parent()
        var iss = tp.parent().attr('data-id')
        if (iss == '1') {
            tp.parent().attr('data-id', '2')
            tp.siblings('.extra').show()
        } else {
            tp.parent().attr('data-id', '1')
            tp.siblings('.extra').hide()
        }
    })

    $('body').on('mouseenter', '.infou', function () {
        var tp = $(this).parent()
        var iss = tp.parent().attr('data-id')
        if (iss == '1') {
            tp.siblings('.extra').show()
        }
    })

    $('body').on('mouseleave', '.infou', function () {
        var tp = $(this).parent()
        var iss = tp.parent().attr('data-id')
        if (iss == '1') {
            tp.siblings('.extra').hide()
        }
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

})