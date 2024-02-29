$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    var selected_ver = ""
    var cur_group = 0

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Ach_Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_Ach[lang2]);
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

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang2 + '/ach.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        var verlist = _AchievementData[0].Data.Vers

        $('container').render({
            div: [{
                h2: function () {
                    var num = _AchievementData[0].Data.TotalNum
                    return computer_.MiscText.Ach_Total[lang2] + " (" + verlist[verlist.length - 1].ID + ")" + (lang == "CH" ? "：" : ": ") + "<color style='color:#FF0000;'>" + num + '</color>'
                }
            }, {
                h2: function () {
                    var num = _AchievementData[0].Data.TotalNumPre
                    return computer_.MiscText.Ach_Total[lang2] + " (" + verlist[verlist.length - 2].ID + ")" + (lang == "CH" ? "：" : ": ") + "<color style='color:#FF0000;'>" + num + '</color>'
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
                                                th: `[[${lang2}]]`,
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
                                                td: computer_.MiscText.Ach_All_Name[lang2],
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
                                            popAch(computer_.MiscText.Ach_All_Name[lang2], 114514)
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
                                                td: `[[Name]]`,
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
                                            popAch(p.org_data.Name, p.org_data._id)
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
            header: t + computer_.MiscText.Ach_Extra[lang2],
            width: '100%',
            template: [{
                section: function (d) {
                    _AchievementData[0].Data.Vers.forEach(function (me, ind) {
                        $(d.container).render({
                            schedule: me.Name,
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
                                    th: `[[${lang2}]]`
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
                                    template: {
                                        tr: [
                                            {
                                                td: [{
                                                    img: imgpre + 'homdgcat-res/Csxylic/Primo.png',
                                                    class: 'jade'
                                                }, ach.Reward.toString()],
                                                style: {
                                                    'text-align': 'center',
                                                    'padding': '5px'
                                                }
                                            },
                                            {
                                                td: '<b>' + ach.Name + '</b><br>' + ach.Desc
                                            },
                                            {
                                                td: ach.Hidden ? "✔" : "",
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: ach.Total ? (ach.Total == 1 ? '' : ach.Total) : '',
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: ach.Ver,
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