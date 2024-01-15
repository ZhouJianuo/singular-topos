$(function() {

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

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') {$('body').css('font-family', "'Segoe UI', sans-serif")}
    else {$('body').css('font-family', "'Microsoft YaHei', sans-serif")}

    var cur_select = 1
    var l = didyouknow.length
    var r = -1
    var GAME = $('#GAME').val() ? $('#GAME').val() : 'GI'
    
    $('h3 .title').html(txt.Title[lang])

    $('h3 .lang').html(txt.Home_Lang[GAME][lang])
    $('h3 .lang').css('margin-top', '20px')

    $('container').render({
        div: [
            {
                section: [
                    {
                        schedule: txt.Home_Sections[0][lang],
                        a: {
                            'data-id': 1,
                            'class': GAME == 'GI' ? 'active' : ''
                        }
                    },
                    {
                        schedule: txt.Home_Sections[1][lang],
                        a: {
                            'data-id': 2,
                            'class': GAME == 'SR' ? 'active' : ''
                        }
                    },
                    {
                        schedule: txt.Home_Sections[2][lang],
                        a: {
                            'data-id': 3
                        }
                    },
                ],
                class: 'home_select'
            },
            {
                div: [],
                class: 'below'
            }
        ],
        class: 'content'
    })

    if (GAME == 'GI') renderGI()
    if (GAME == 'SR') renderSR()

    function renderGI() {
        $('.below').empty().render({
            template: {
                div : {
                    a: function (k) {
                        return k.data.Href[lang] + '?lang=' + lang
                    },
                    t: [
                        {
                            div: {
                                span: `[[Title/${lang}]]`,
                            },
                            class: 'dir_head'
                        },
                        {
                            div: {
                                span: `[[Link/${lang}]]`,
                            },
                            class: 'dir_link',
                            when: function (k) {
                                return k.data.Link != ''
                            }
                        },
                        {
                            div: {
                                li: {
                                    span: `[[${lang}]]`
                                },
                                datapath: 'Features'
                            },
                            class: 'dir_body'
                        }
                    ],
                    class: 'dir',
                    data: GI,
                    attr: {
                        target: '_blank'
                    }
                },
                class: 'dir_wrap'
            }
        })
    }

    function renderSR() {
        $('.below').empty().render({
            template: {
                div : {
                    a: function (k) {
                        if (k.data.Disable) return 'javascript:void(0)'
                        return k.data.Href[lang] + '?lang=' + lang
                    },
                    t: [
                        {
                            div: {
                                span: `[[Title/${lang}]]`,
                            },
                            class: 'dir_head'
                        },
                        {
                            div: {
                                span: `[[Link]]`,
                            },
                            class: 'dir_link',
                            when: function (k) {
                                return k.data.Link
                            }
                        },
                        {
                            div: {
                                span: txt.Coming_Soon[lang],
                            },
                            class: 'dir_link',
                            when: function (k) {
                                return k.data.Disable
                            }
                        },
                        {
                            div: {
                                li: {
                                    span: `[[${lang}]]`
                                },
                                datapath: 'Features'
                            },
                            class: 'dir_body',
                            when: function (k) {
                                return !k.data.Disable
                            }
                        }
                    ],
                    class: 'dir',
                    data: SR,
                    attr: {
                        target: function (k) {
                            if (k.data.Disable) return ''
                            return '_blank'
                        },
                        style: function (k) {
                            if (k.data.Disable) return 'cursor:default;'
                            return ''
                        }
                    }
                },
                class: 'dir_wrap'
            }
        })
    }

    function renderAbout() {
        $('.below').empty().render({
            template: [
                {
                    p: txt.About[lang],
                    class: 'about'
                },
                {
                    p: txt.About_2[lang],
                    class: 'about_2'
                },
                {
                    div: [
                        {
                            p: txt.DidYouKnow[lang],
                            class: 'didyouknow_header'
                        },
                        {
                            p: '',
                            class: 'didyouknow_text'
                        }
                    ],
                    class: 'didyouknow'
                }
            ]
        })
        didyouknow_()
    }

    function didyouknow_() {
        do {
            var s = Math.floor(Math.random() * l)
        } while (s == r)
        r = s
        $('.didyouknow_text').html(didyouknow[r][lang])
    }

    $('body').on('click', '.home_select schedule', function () {
        if($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_select = $(this).attr('data-id')
        switch (cur_select) {
            default:
                renderGI();
                GAME = 'GI'
                break;
            case '2':
                renderSR();
                GAME = 'SR'
                break;
            case '3':
                renderAbout();
                break;
        }
        $('h3 .lang').html(txt.Home_Lang[GAME][lang])
    })

    $('body').on('click', '.didyouknow', function() {
        didyouknow_()
    })

    $('body').on('click', '.subtitle', function () {
        IS_SW += 1
        if (IS_SW % 3 == 1) {
            $('body').css('font-family', "'FW', sans-serif")
        } else if (IS_SW % 3 == 2) {
            $('body').css('font-family', "'SW', sans-serif")
        } else {
            if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
            else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }
        }
    })

})