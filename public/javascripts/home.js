$(function() {

    var cur_select = 1
    var l = didyouknow.length
    var r = -1
    
    $('h3 .title').html(txt.Title[lang])

    $('h3 .lang').html(txt.Home_Lang[lang])

    $('container').render({
        div: [
            {
                section: [
                    {
                        schedule: txt.Home_Sections[0][lang],
                        a: {
                            'data-id': 1,
                            'class': 'active'
                        }
                    },
                    {
                        schedule: txt.Home_Sections[1][lang],
                        a: {
                            'data-id': 2
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

    renderGI()

    function renderGI() {
        $('.below').empty().render({
            template: {
                div : {
                    a: function (k) {
                        return k.data.Href
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
                },
                class: 'dir_wrap'
            }
        })
    }

    function renderSR() {
        $('.below').empty().render({
            template: [
                {
                    p: txt.Coming_Soon[lang],
                    style: {
                        'text-align': 'center',
                        'font-size': '27px',
                        'font-weight': 'bold',
                        'padding': '50px'
                    }
                }
            ]
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
                break;
            case '2':
                renderSR();
                break;
            case '3':
                renderAbout();
                break;
        }
    })

    $('body').on('click', '.didyouknow', function() {
        didyouknow_()
    })

})