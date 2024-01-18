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

    $('container').render({
        template: {
            div: [
                {
                    section: {
                        schedule: `[[.]]`,
                        data: [lang == 'EN' ? 'All' : '全部'].concat(_verlist),
                        event: {
                            click: function (d) {
                                if ($(d.sender).hasClass('active')) {
                                    return;
                                }
                                $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                miracleRender(d.org_data);
                            }
                        }
                    },
                    class: 'ver'
                },
                {
                    hr: '',
                    style: {
                        'margin-bottom': '0px'
                    }
                },
                {
                    div: [],
                    class: 'miracle_card_area'
                }
            ],
            class: 'content'
        }
    })

    $('.ver schedule:nth-child(1)').addClass('active')
    miracleRender('All')

    function miracleRender(k) {
        console.log(k)
        var flag = (k == 'All') || (k == '全部')
        $('.miracle_card_area').empty()
        _curio.forEach(function (t) {
            if (flag || k == t.Ver) {
                $('.miracle_card_area').render({
                    template: {
                        div: [
                            {
                                img: imgpre + 'images/Misc/a.png',
                                class: 'icon'
                            },
                            {
                                p: t.Name[lang],
                                class: 'name'
                            },
                            {
                                p: t.Desc[lang],
                                class: 'desc'
                            },
                            {
                                p: t.Story[lang],
                                class: 'story'
                            }
                        ],
                        class: 'curio'
                    }
                })
            }
        })
    }

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