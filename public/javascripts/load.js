$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    var cur_group = 0
    var cur_ver = ""

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').text(computer_.MiscText.Load_Title[lang]);
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_Load[lang]);

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    begin()

    function begin() {

        $('container').render({
            div: [{
                section: function (d) {
                    _AchievementData[0].Data.Vers.forEach(function (me, ind) {
                        $(d.container).render({
                            schedule: me.Name[lang],
                            a: {
                                'data-id': me.ID,
                                'class': function () {
                                    if (ind == 0) selected_ver = me.ID
                                    return ind == 0 ? 'active' : ''
                                }
                            }
                        })
                    })
                },
                class: 'load-ver'
            }, {
                section: function (d) {
                    _LoadTipGroup[0].Data.forEach(function (me, ind) {
                        $(d.container).render({
                            schedule: me.Name[lang],
                            a: {
                                'data-id': ind == 0 ? 114514 : ind,
                                'class': function () {
                                    if (ind == 0) selected_ver = me.ID
                                    return ind == 0 ? 'active' : ''
                                }
                            }
                        })
                    })
                },
                class: 'load-group'
            }, {
                div: achTable(cur_ver, cur_group),
                style: {
                    'overflow-x': 'scroll',
                    'transform': 'rotateX(180deg)',
                },
                class: 'ach-table'
            }],
            class: 'content'
        })

    }

    function c(arr1, arr2) {
        if (arr1.length && arr2.length) return arr1.some(item => arr2.includes(item))
        return true
    }

    $('body').on('click', '.load-ver schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_ver = $(this).attr('data-id')
        $('.ach-table').empty().render(achTable(cur_ver, cur_group))
    });

    $('body').on('click', '.load-group schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_group = parseInt($(this).attr('data-id')) % 114514
        $('.ach-table').empty().render(achTable(cur_ver, cur_group))
    });

    function achTable(v, g) {

        return {
            table: [
                {
                    tbody: function (d) {
                        _LoadTip[0].Data.forEach(function (ld) {
                            if (c(ld.Stage, _LoadTipGroup[0].Data[g].Stages) && (v == "" || v == ld.Ver)) {
                                $(d.container).render({
                                    data: ld,
                                    template: {
                                        tr: [
                                            {
                                                td: function (d) {
                                                    return '<b>' + d.data.Name[lang] + '</b><br>' + d.data.Desc[lang]
                                                },
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
                'transform': 'rotateX(180deg)',
            },
            class: 'main-table'
        }

    }

})