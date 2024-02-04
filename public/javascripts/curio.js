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

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .links').html(txt.Page[lang]);
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])

    $('body').on('click', '.links', function () {
        popLinks(lang)
    })

    var ml = 0

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
                                img: imgpre + 'images/Miracle/' + t.Icon,
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
                                hr: '',
                                style: {
                                    'border-color': '#bbbbbb'
                                },
                                class: 'simple'
                            },
                            {
                                p: t.Story[lang],
                                class: 'story simple',
                                style: {
                                    display: ml ? 'none' : ''
                                }
                            },
                            {
                                div: '+',
                                class: 'ml'
                            },
                        ],
                        class: 'curio'
                    }
                })
            }
        })
    }
    
    $('body').on('click', '.ml', function () {
        ml = 1 - ml
        if (ml) {
            $('.simple').hide()
        } else {
            $('.simple').show()
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