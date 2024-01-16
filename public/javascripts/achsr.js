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

    var cur_group = 0
    var cur_ver = ''

    var rand_index_1 = Math.floor(Math.random() * _achievementseries.length)
    var rand_index_2 = Math.floor(Math.random() * _achievementseries.length)

    $('container').render({
        div: [{
            h2: txt.AchNum[lang].replace("#", _achievementdata[2].toFixed(1)) + "<color style='color:#ff0000;'>" + _achievementdata[3] + "</color>"
        }, {
            h2: txt.AchNum[lang].replace("#", _achievementdata[0].toFixed(1)) + "<color style='color:#ff0000;'>" + _achievementdata[1] + "</color>"
        }, {
            div: [
                {
                    div: [
                        {
                            img: imgpre + 'images/Achievement/' + _achievementseries[rand_index_1].Icon,
                            style: {
                                height: '160px'
                            }
                        },
                        {
                            p: txt.NewAch[lang],
                            class: 's_name'
                        },
                        {
                            p: (_achievementdata[1] - _achievementdata[3]).toString(),
                            class: 's_num'
                        }
                    ],
                    class: 'series hover-shadow',
                    a: {
                        'data-id': 114513
                    },
                },
                {
                    div: [
                        {
                            img: imgpre + 'images/Achievement/' + _achievementseries[rand_index_2].Icon,
                            style: {
                                height: '160px'
                            }
                        },
                        {
                            p: txt.AllAch[lang],
                            class: 's_name'
                        },
                        {
                            p: (_achievementdata[1]).toString(),
                            class: 's_num'
                        }
                    ],
                    class: 'series hover-shadow',
                    a: {
                        'data-id': 114514
                    },
                },
                {
                    div: [
                        {
                            img: imgpre + `images/Achievement/[[Icon]]`,
                            style: {
                                height: '160px'
                            }
                        },
                        {
                            p: `[[Name/${lang}]]`,
                            class: 's_name'
                        },
                        {
                            p: `[[Count]]`,
                            class: 's_num'
                        }
                    ],
                    class: 'series hover-shadow',
                    a: {
                        'data-id': `[[_id]]`
                    },
                    data: _achievementseries,
                }
            ],
            class: 'ach-table'
        }],
        class: 'content'
    })

    if ($('#ID').val()) {
        $("div[data-id='" + $('#ID').val() + "']").click()
    }

    $('body').on('click', '.series', function () {
        var l = parseInt($(this).attr('data-id')) % 114514
        cur_group = l
        var cur_name = l ? (l == 114513 ? txt.NewAch[lang] : _achievementseries[l - 1].Name[lang]) : txt.AllAch[lang]
        poplayer({
            header: cur_name + txt.Affix[lang],
            width: '100%',
            template: [{
                div: {
                    select: '',
                    options: _option[lang],
                    class: 'ach_ver_select'
                },
                class: 'ach-ver'
            }, {
                div: achTable(l),
                class: 'ach-result'
            }]
        });
        $('.ach_ver_select').val(cur_ver ? cur_ver : (lang == 'EN' ? 'All' : '全部'))
    })

    function achTable(l) {
        return {
            table: [
                {
                    tbody: function (d) {
                        _achievement.forEach(function (ach) {
                            if (!l || ((l == 114513) && (ach.Ver == _achievementdata[0])) || ach.Series == l) {
                                if ((!cur_ver) || (ach.Ver.toFixed(1) == cur_ver)) {
                                    $(d.container).render({
                                        template: {
                                            tr: [
                                                {
                                                    td: [{
                                                        img: imgpre + 'images/Achievement/900001.png',
                                                        class: 'jade'
                                                    }, ach.Reward.toString()],
                                                    style: {
                                                        'text-align': 'center'
                                                    }
                                                },
                                                {
                                                    td: '<b>' + ach.Name[lang] + '</b><br>' + ach.Desc[lang]
                                                },
                                                {
                                                    td: ach.Ver.toFixed(1),
                                                    style: {
                                                        'text-align': 'center'
                                                    }
                                                },
                                            ]
                                        }
                                    })
                                }
                            }
                        })
                    },
                }
            ],
            class: 'weapon-table'
        }
    }

    $('body').on('change', '.ach_ver_select', function () {
        cur_ver = $(this).val()
        if (cur_ver == 'All' || cur_ver == '全部') cur_ver = ''
        $('.ach-result').empty().render({
            template: achTable(cur_group)
        })
    })

    $('body').on('click', '.subtitle', function () {
        IS_SW += 1
        if (IS_SW % 3 == 1) {
            $('body').css('font-family', "'FW', sans-serif")
        } else if (IS_SW % 3 == 2) {
            $('body').css('font-family', "'SW', sans-serif")
        } else {
            if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
            else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }
        }
    })

})