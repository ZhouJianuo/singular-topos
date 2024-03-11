$(function () {

    var imgpre = $('#IMGPRE').val()
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

    var I_TYPE = '1'

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang2 + '/quest.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_Fontaine.png'
                                },
                                class: 'active',
                                a: {
                                    'data-id': '1'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_Chiori.png'
                                },
                                a: {
                                    'data-id': '2'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/ChapterIcon/UI_ChapterIcon_AlchemySim.png'
                                },
                                a: {
                                    'data-id': '10'
                                }
                            },
                        ],
                        class: 'path'
                    },
                    {
                        div: [],
                        class: 'blessing_card_area'
                    }
                ],
                class: 'content'
            }
        })

        renderItems()

    }

    $('body').on('click', '.path schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })

    function renderItems() {
        $('.blessing_card_area').empty()
        _chapter.forEach(function (t) {
            if (I_TYPE == '1' && (t._id / 1000 >= 2)) return
            if (I_TYPE == '2' && ((t._id / 1000 < 2) || (t._id / 1000 >= 10))) return
            if (I_TYPE == '10' && ((t._id / 1000 < 10) || (t._id / 1000 >= 100))) return
            $('.blessing_card_area').render({
                div: [
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Tab + '.png',
                        },
                        when: false,
                        class: 'avatar-head1'
                    },
                    {
                        div: {
                            img: imgpre + 'images/ChapterIcon/' + t.Icon + '.png',
                        },
                        when: true,
                        class: 'avatar-head2'
                    },
                    {
                        p: t.Num,
                        when: t.Num != undefined,
                        style: {
                            'font-size': '0.8em'
                        }
                    },
                    {
                        p: t.Title,
                        when: t.Title != undefined,
                        style: {
                            'font-size': '1em',
                            'font-weight': 'bold'
                        }
                    },
                    {
                        p: t.IT,
                        when: t.IT != undefined,
                        style: {
                            'font-size': '0.8em',
                            'font-weight': 'bold'
                        }
                    }
                ],
                class: 'avatar-card hover-shadow',
                a: {
                    'data-id': t._id
                }
            })
        })
    }

    $('body').on('click', '.avatar-card', function () {
        window.open(`/gi/quest/${$(this).attr('data-id')}`)
    })

})