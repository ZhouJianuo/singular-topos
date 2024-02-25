$(function () {

    var imgpre = $('#IMGPRE').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang2)
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
    script_computer.src = '/data/' + lang2 + '/Rec.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {
        cur_group = _n

        $('container').render({
            template: {
                div: [
                    {
                        section: {
                            schedule: `[[Name]]`,
                            data: _recgroup,
                            a: {
                                class: function (k) {
                                    if (k.data._id == cur_group) return 'active'
                                    return ''
                                },
                                'data-id': `[[_id]]`
                            }
                        },
                        class: 'choose',
                    },
                    {
                        div: [],
                        class: 'miracle_card_area'
                    }
                ],
                class: 'content'
            }
        })

        renderREC()
    }

    function renderREC() {
        _rec.forEach(function (t, i) {
            if (t.Group != cur_group) return
            $('.miracle_card_area').render({
                div: [
                    {
                        img: imgpre + 'images/itemfigures/210001.png',
                        class: 'icon'
                    },
                    {
                        p: t.Name,
                        class: 'name'
                    },
                    {
                        p: `[[.]]`,
                        class: 'desc',
                        data: t.Unlock,
                        style: {
                            'font-size': '0.9em'
                        }
                    },
                    {
                        hr: '',
                        style: {
                            margin: '15px 0'
                        }
                    },
                    {
                        p: `[[.]]`,
                        class: 'desc',
                        data: t.Desc
                    },
                ],
                class: 'curio'
            })
        })
    }

    $('body').on('click', '.choose schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        cur_group = parseInt($(this).attr('data-id'))
        $('.miracle_card_area').empty()
        renderREC()
    })

})