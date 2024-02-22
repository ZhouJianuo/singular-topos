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
    var cur_group = _n

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
                    section: {
                        schedule: `[[Name/${lang}]]`,
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
                        p: t.Name[lang],
                        class: 'name'
                    },
                    {
                        p: `[[${lang}]]`,
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
                        p: `[[${lang}]]`,
                        class: 'desc',
                        data: t.Desc
                    },
                ],
                class: 'curio'
            })
        })
    }

    renderREC()

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