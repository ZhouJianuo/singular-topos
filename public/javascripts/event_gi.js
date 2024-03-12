$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Load_Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
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

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/event.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        isNew = 1
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
    
        _eventvers.forEach(function (o, j) {
            $('.rar').render({
                schedule: o.Ver,
                class: (j + 1 == isNew) ? 'active' : '',
                a: {
                    'data-id': j + 1
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
        _eventvers[isNew - 1].Events.forEach(function (t, i) {
            $('.area').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc',
                        when: t.Desc.length
                    },
                    {
                        div: {
                            img: function (k) {
                                if (_items[k.data].Type == 1) return imgpre + 'homdgcat-res/Weapon/' + _items[k.data].Icon + '.png'
                                return imgpre + 'homdgcat-res/Mat/' + _items[k.data].Icon + '.png'
                            },
                            data: t.Reward,
                            class: 'hover-shadow-',
                            a: {
                                'data-id': function (k) {
                                    return k.data
                                },
                                'data-type': function (k) {
                                    return _items[k.data].Type
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
                        div: {
                            span: '＋' + computer_.MiscText.Event_Story[lang2] + '＋',
                            class: 'plus',
                            a: {
                                'data-id': t._id
                            }
                        },
                        class: 'event-sel'
                    },
                    {
                        p: t.Intro,
                        class: 'event-story es-' + t._id,
                        style: {
                            display: 'none'
                        }
                    },
                    {
                        hr: '',
                        when: t.Tutorial && t.Tutorial.length
                    },
                    {
                        div: {
                            span: '＋' + computer_.MiscText.Event_Tutorial[lang2] + '＋',
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
                                        return imgpre + 'images/Tutorial/' + k.data.Img + '.png'
                                    },
                                    class: 'tut_img'
                                },
                                {
                                    p: function (k) {
                                        return k.data.Desc
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
        if ($(this).attr('data-type').toString() == '1') {
            window.open(`char/${$(this).attr('data-id')}`)
            return
        }
        popItem($(this).attr('data-id'))
    })

    function popItem(y) {
        this_item = _items[y]
        if (this_item.Link) {
            window.open(`item/${this_item._id}`)
            return
        }
        poplayer({
            header: VER_GI + computer_.MiscText.Affix[lang2],
            width: '90%',
            template: [
                {
                    img: imgpre + (this_item.Pic ? ('homdgcat-res/Avatar/' + this_item.Pic + '.png') : ('homdgcat-res/Mat/' + this_item.Icon + '.png')),
                    class: 'icon',
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
                            return k.data
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