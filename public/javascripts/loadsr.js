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

    var cur_ver = 'All'

    $('container').render({
        div: [{
            section: function (d) {
                _option[lang].forEach(function (me, ind) {
                    $(d.container).render({
                        schedule: me,
                        a: {
                            'data-id': me,
                            'class': ind == 0 ? 'active' : ''
                        }
                    })
                })
            },
            class: 'load-ver'
        }, {
            div: achTable(),
            style: {
                'overflow-x': 'scroll',
            },
            class: 'ach-table'
        }],
        class: 'content'
    })

    function achTable() {

        return {
            table: [
                {
                    tbody: function (d) {
                        _loadingdesc.forEach(function (ld) {
                            if (cur_ver == 'All' || cur_ver == '全部' || ld.Ver.toFixed(1) == cur_ver) {
                                $(d.container).render({
                                    data: ld,
                                    template: {
                                        tr: [
                                            {
                                                td: '<b>' + ld.Name[lang] + '</b><br>' + ld.Desc[lang],
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                        ]
                                    }
                                })
                            }
                        })
                    }
                }
            ],
            style: {
                width: '100%',
            },
            class: 'main-table'
        }

    }

    $('body').on('click', '.load-ver schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_ver = $(this).attr('data-id')
        $('.ach-table').empty().render(achTable())
    });

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