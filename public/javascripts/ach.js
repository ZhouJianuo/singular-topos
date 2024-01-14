$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    var selected_ver = ""
    var cur_group = 0

    var txt = {
        "CH": "总成就数",
        "EN": "Total Count"
    }

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').text(computer_.MiscText.Ach_Title[lang]);
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_Ach[lang]);

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    begin()

    function begin() {

        var verlist = _AchievementData[0].Data.Vers

        $('container').render({
            div: [{
                h2: function () {
                    var num = _AchievementData[0].Data.TotalNum
                    return txt[lang] + " (" + verlist[verlist.length - 1].ID + ")" + (lang == "CH" ? "：" : ": ") + "<color style='color:#FF0000;'>" + num + '</color>'
                }
            }, {
                h2: function () {
                    var num = _AchievementData[0].Data.TotalNumPre
                    return txt[lang] + " (" + verlist[verlist.length - 2].ID + ")" + (lang == "CH" ? "：" : ": ") + "<color style='color:#FF0000;'>" + num + '</color>'
                }
            }, {
                div: {
                    table: [
                        {
                            thead: [
                                {
                                    tr: function (d) {
                                        $(d.container).render({
                                            data: computer_.MiscText.Ach_Table_Header,
                                            template: {
                                                th: `[[${lang}]]`,
                                                a: {
                                                    class: function (d) {
                                                        return d.data.EN
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            ]
                        },
                        {
                            tbody: function (d) {
                                $(d.container).render({
                                    template: {
                                        tr: [
                                            {
                                                td: computer_.MiscText.Ach_All_Name[lang],
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: _AchievementData[0].Data.TotalNum.toString(),
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: _AchievementData[0].Data.TotalPrimo.toString(),
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                        ],
                                        style: {
                                            'cursor': 'pointer',
                                        },
                                        click: function (p) {
                                            popAch(computer_.MiscText.Ach_All_Name[lang], 114514)
                                        },
                                        a: {
                                            'data-id': 't_all'
                                        }
                                    }
                                })
                                $(d.container).render({
                                    data: _AchievementGroup,
                                    template: {
                                        tr: [
                                            {
                                                td: `[[Name/${lang}]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: `[[Num]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: `[[Reward]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                        ],
                                        style: {
                                            'cursor': 'pointer',
                                        },
                                        click: function (p) {
                                            popAch(p.org_data.Name[lang], p.org_data._id)
                                        },
                                        a: {
                                            'data-id': 't_[[_id]]'
                                        }
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
                },
                style: {
                    width: '100%',
                    'overflow-x': 'scroll',
                    'transform': 'rotateX(180deg)',
                },
                class: 'ach-table'
            }],
            class: 'content'
        })

        if ($('#ID').val()) {
            $("tr[data-id='t_" + $('#ID').val() + "']").click()
        }

    }

    function popAch(t, l) {
        cur_group = l
        poplayer({
            header: t + computer_.MiscText.Ach_Extra[lang],
            width: '100%',
            template: [{
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
                class: 'ach-ver'
            }, {
                section: achTable(l),
                class: 'ach-result'
            }]
        });
    }

    function achTable(l) {
        return {
            table: [
                {
                    thead: [{
                        tr: function (d) {
                            $(d.container).render({
                                data: computer_.MiscText.Ach_Inner_Header,
                                template: {
                                    th: `[[${lang}]]`
                                }
                            })
                        }
                    }],
                    class: 'weapon-head'
                },
                {
                    tbody: function (d) {
                        _Achievement.forEach(function (ach) {
                            if (((selected_ver == "") || (ach.Ver == selected_ver)) && (l == 114514 || (ach.Group == l))) {
                                $(d.container).render({
                                    data: ach,
                                    template: {
                                        tr: [
                                            {
                                                td: function (d) {
                                                    return '<b>' + d.data.Name[lang] + '</b><br>' + d.data.Desc[lang]
                                                },
                                            },
                                            {
                                                td: `[[Reward]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: function (k) {
                                                    return k.data.Hidden ? "✔" : ""
                                                },
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: function (k) {
                                                    return k.data.Total ? (k.data.Total == 1 ? '' : k.data.Total) : ''
                                                },
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: `[[Ver]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                        ]
                                    }
                                })
                            }
                        })
                    },
                }
            ],
            class: 'weapon-table'
        }
    }

    $('body').on('click', '.ach-ver schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        selected_ver = $(this).attr('data-id')
        $('.ach-result').empty().render(achTable(cur_group))
    });

})