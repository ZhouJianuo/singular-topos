$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang)
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
        popLinks(lang3)
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
    script_computer.src = '/data/' + lang3 + '/LineCount.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        
        $('container').render({
            div: '',
            class: 'content'
        })

        _data.forEach(function (t, i) {
            $('.content').render({
                div: [
                    {
                        p: t.Ver,
                        class: 'event-name'
                    },
                    {
                        div: {
                            span: '≥ 51',
                            class: 'plus'
                        },
                        class: 'event-sel ww',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'w w-' + (i + 1)
                    },
                    {
                        div: {
                            span: '21 ~ 50',
                            class: 'plus'
                        },
                        class: 'event-sel xx',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'x x-' + (i + 1)
                    },
                    {
                        div: {
                            span: '11 ~ 20',
                            class: 'plus'
                        },
                        class: 'event-sel yy',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'y y-' + (i + 1)
                    },
                    {
                        div: {
                            span: '1 ~ 10',
                            class: 'plus'
                        },
                        class: 'event-sel zz',
                        a: {
                            'data-id': i + 1,
                            'data-hd': "no"
                        }
                    },
                    {
                        div: '',
                        class: 'z z-' + (i + 1)
                    }
                ],
                class: 'a_section'
                
            })
            for (const [d, n] of Object.entries(t.Talk)) {
                var ts = {
                    span: d + ' <b><color style="color:#f29e38">' + n + '</color></b>',
                    class: 'f'
                }
                if (n > 50) {
                    $('.w-' + (i + 1)).render(ts)
                } else if (n <= 50 && n > 20) {
                    $('.x-' + (i + 1)).render(ts)
                } else if (n <= 20 && n > 10) {
                    $('.y-' + (i + 1)).render(ts)
                } else {
                    $('.z-' + (i + 1)).render(ts)
                }
            }
        })

        $('.w').hide()
        $('.x').hide()
        $('.y').hide()
        $('.z').hide()

    }

    $('body').on('click', '.ww', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.w-' + id).hide()
            $(this).find('span').css('border-color', '#dddddd')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.w-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.yy', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.y-' + id).hide()
            $(this).find('span').css('border-color', '#dddddd')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.y-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.xx', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.x-' + id).hide()
            $(this).find('span').css('border-color', '#dddddd')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.x-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

    $('body').on('click', '.zz', function (d) {
        var g = $(this).attr('data-hd')
        var id = $(this).attr('data-id')
        if (g == 'yes') {
            $(this).attr('data-hd', 'no')
            $('.z-' + id).hide()
            $(this).find('span').css('border-color', '#dddddd')
        } else {
            $(this).attr('data-hd', 'yes')
            $('.z-' + id).show()
            $(this).find('span').css('border-color', '#f29e38')
        }
    })

})