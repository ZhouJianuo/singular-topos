$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Load_Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_[lang2]);
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

    var l1 = 0
    var l2 = 0

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang2 + '/quest/chapter_' + avid + '.js'
    document.head.append(script_computer)
    script_computer.onload = function () {
        l1 = 1
    }

    let script_computer_2 = document.createElement('script')
    script_computer_2.src = '/gi/' + lang2 + '/mainquestitems.js'
    document.head.append(script_computer_2)
    script_computer_2.onload = function () {
        l2 = 1
    }

    var ou = setInterval(function () {
        if (l1 && l2) {
            begin()
            clearInterval(ou)
        }
    }, 200)

    var mf = 0

    function begin() {

        $('.content').remove()
        $('container').render({
            div: {
                div: [
                    {
                        div: [
                            {
                                img: imgpre + 'images/Misc/Back.png',
                                style: {
                                    width: '40px',
                                    height: '40px'
                                },
                                class: 'switch_1'
                            },
                            {
                                img: imgpre + 'images/Misc/Switch.png',
                                style: {
                                    width: '40px',
                                    height: '40px'
                                },
                                class: 'switch_2'
                            },
                        ],
                        class: 'switch'
                    },
                    {
                        div: {
                            div: [
                                {
                                    div: {
                                        img: imgpre + 'images/ChapterIcon/' + _mq.Tab + '.png',
                                    },
                                    when: _mq.Tab != "",
                                    class: 'weapon_left'
                                },
                                {
                                    div: {
                                        img: imgpre + 'images/ChapterIcon/' + _mq.Icon + '.png',
                                    },
                                    when: (_mq.Tab == "") && (_mq.Icon != ""),
                                    class: 'weapon_left'
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    p: _mq.Num,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1.2em'
                                                    },
                                                    when: _mq.Num != "",
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: _mq.Title,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1.5em'
                                                    },
                                                    when: _mq.Title != "",
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: _mq.IT,
                                                    style: {
                                                        'font-weight': 'bold',
                                                        'text-align': 'center',
                                                        'font-size': '1em'
                                                    },
                                                    when: _mq.IT != "",
                                                    class: 'weapon_title'
                                                },
                                                {
                                                    p: function (k) {
                                                        var len = _mq.LineCount.length
                                                        _mq.LineCount.forEach(function (t, i) {
                                                            if (len > 25 && t.Count < 5 && !(isFinite(t.ID) && parseInt(t.ID) >= 1000 && parseInt(t.ID) <= 2000)) return
                                                            $(k.container).render({
                                                                span: function (k) {
                                                                    return '<color style=\'color:#df903b\'>' + t.Name.replaceAll('_0', `<img class='sps' src='${imgpre}images/Misc/Traveler${mf.toString()}.png'>`).replaceAll('_1005', `<img class='sps' src='${imgpre}images/Misc/Paimon.png'>`) + '</color> ' + t.Count
                                                                },
                                                                class: 'tag_span'
                                                            })
                                                        })
                                                    },
                                                    class: 'mon_head_',
                                                    style: {
                                                        'margin-top': '10px',
                                                        'margin-bottom': '10px'
                                                    }
                                                }
                                            ]
                                        },
                                    ],
                                    class: 'weapon_right'
                                }
                            ],
                            class: 'a_section_content mon_head'
                        },
                        class: 'a_section',
                        style: {
                            padding: '10px'
                        }
                    },
                ],
                class: 'mon_body content_flag'
            },
            class: 'content'
        })

        if (_mq.Intro.length) {
            $('.content_flag').render({
                div: {
                    div: _mq.Intro,
                    class: 'a_section_content',
                    style: {
                        'text-align': 'center'
                    }
                },
                class: 'a_section'
            })
        }

        _mq.MainQuests.forEach(function (t) {
            $('.content_flag').render({
                div: [
                    {
                        p: t.Name,
                        class: 'event-name'
                    },
                    {
                        p: t.Desc,
                        class: 'event-desc'
                    },
                    {
                        div: function (k) {
                            for (const [d, n] of Object.entries(_reward[k.data])) {
                                if (_material[d].Type == 1) {
                                    var img = imgpre + 'homdgcat-res/Weapon/' + _material[d].Icon + '.png'
                                } else {
                                    var img = imgpre + 'homdgcat-res/Mat/' + _material[d].Icon + '.png'
                                }
                                $(k.container).render({
                                    div: [
                                        {
                                            img: img,
                                            style: {
                                                'width': '100%'
                                            }
                                        },
                                        {
                                            p: n.toString(),
                                            style: {
                                                'font-weight': 'bold',
                                                'font-size': '0.8em',
                                                'text-align': 'center'
                                            }
                                        }
                                    ],
                                    class: 'hover-shadow-',
                                    a: {
                                        'data-id': d,
                                        'data-type': ''
                                    }
                                })
                            }
                        },
                        data: t.R,
                        class: 'event-reward',
                        when: t.R && t.R.length
                    },
                    {
                        div: {
                            img: imgpre + 'images/GCG_UI/JUMP.png',
                            style: {
                                'width': '20px',
                                'height': '20px'
                            }
                        },
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'margin-bottom': '10px'
                        }
                    }
                ],
                class: 'a_section hover-shadow click-pop',
                a: {
                    'data-json': JSON.stringify(t.Sub)
                }
            })
        })

    }

    $('body').on('click', '.switch_2', function () {
        mf = 1 - mf
        begin()
    })

    $('body').on('click', '.switch_1', function () {
        window.open('/gi/quest', '_self')
    })

    $('body').on('click', '.hover-shadow-', function (e) {
        e.stopPropagation()
        if (_material[$(this).attr('data-id')].Type == '1') {
            window.open(`../char/${$(this).attr('data-id')}`)
            return
        }
        popItem($(this).attr('data-id'))
    })

    function popItem(y) {
        this_item = _material[y]
        if (this_item.Link) {
            window.open(`../item/${this_item._id}`)
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
            class: 'item',
        })
    }

    $('body').on('click', '.click-pop', function (e) {
        popTalks($(this).attr('data-json'))
    })

    function popTalks(dat) {
        if (!dat) return
        try { subs = JSON.parse(dat) } catch (e) {return}
        if (!subs.length) return
        poplayer({
            header: VER_GI + computer_.MiscText.Affix[lang2],
            template: {
                div: function (l) {
                    subs.forEach(function (m) {
                        $(l.container).render({
                            div: [
                                {
                                    div: {
                                        p: _sq[m].Desc
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: [
                                                {
                                                    img: imgpre + 'images/Misc/Star.png',
                                                    class: 'sps_3'
                                                },
                                                _sq[m].Step
                                            ],
                                            when: _sq[m].Step != undefined
                                        },
                                        {
                                            p: [
                                                {
                                                    img: imgpre + 'images/Misc/Star.png',
                                                    class: 'sps_3'
                                                },
                                                _sq[m].Tips
                                            ],
                                            when: _sq[m].Tips != undefined
                                        },
                                        {
                                            div: function (k) {
                                                if (_sq[m].Talk && _sq[m].Talk.length) {
                                                    _sq[m].Talk.forEach(function (i) {
                                                        $(k.container).render({
                                                            hr: ''
                                                        })
                                                        i.forEach(function (j) {
                                                            $(k.container).render({
                                                                p: '<b>' + j.N.replaceAll('_0', `<img class='sps_4' src='${imgpre}images/Misc/Traveler${mf.toString()}.png'>`).replaceAll('_1005', `<img class='sps_4' src='${imgpre}images/Misc/Paimon.png'>`) + '</b><br>' + process(j.T).replaceAll('{NICKNAME}', `<img class='sps_4' src='${imgpre}images/Misc/Traveler${mf.toString()}.png'>`).replaceAll("#", "")
                                                            })
                                                        })
                                                    })
                                                }
                                            },
                                            when: _sq[m].Talk && _sq[m].Talk.length
                                        }
                                    ],
                                    class: 'a_section_content talk_section'
                                }
                            ],
                            class: 'a_section',
                            style: {
                                padding: '0'
                            }
                        })
                    })
                },
                style: {
                    margin: '0',
                    display: 'flex',
                    'justify-content': 'center',
                    'flex-wrap': 'wrap',
                    'margin-bottom': '60px'
                }
            },
            class: 'talk'
        })
    }

    function process(s) {
        if (!s.length) return s
        if (s.substring(0, 1) != "#") return s
        var check = mf ? '{M#' : '{F#'
        var dell = mf ? '{F#' : '{M#'
        if (!s.includes(check)) return s
        var t = s
        while (t.includes(check)) {
            var start = t.indexOf(check)
            var end = start + t.substring(start).indexOf('}')
            t = t.substring(0, start) + t.substring(start + 3, end) + t.substring(end + 1)
        }
        while (t.includes(dell)) {
            var start = t.indexOf(dell)
            var end = start + t.substring(start).indexOf('}')
            t = t.substring(0, start) + t.substring(end + 1)
        }
        return t.substring(1)
    }

})