$(function () {

    var _lang = 0
    var DATE = new Date()
    document.cookie.split(";").forEach(function (c) { 
        if ((c.includes('lang=')) && !(c.includes('session'))) {
            _lang = c.substring(c.indexOf('lang=') + 5, c.indexOf('lang=') + 7)
        } else {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + DATE.toUTCString() + ";path=/"); 
        }
    });

    var lang_ = $('#LANG').val()
    if (lang_) {
        var lang = lang_
        document.cookie = 'lang=' + lang_ + ';expires=' + new Date(DATE.getTime() + 8640000000).toUTCString() + ';path=/'
    } else {
        var lang = (_lang === 'EN') ? 'EN' : 'CH';
    }

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').text(computer_.MiscText.Load_Title[lang]);
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_Shield[lang]);

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    var cache = null
    var typ = 1

    $('container').render({})
    initial_load = setTimeout(function () { $('.lt').show() }, 3000)
    cache = _MonsterShield[0].Data
    begin()

    function begin() {

        clearTimeout(initial_load)
        $('.lt').hide()

        $('container').render({
            div: [
                {
                    section: function (d) {
                        computer_.MiscText.MS_Type.forEach(function (me, ind) {
                            $(d.container).render({
                                schedule: me[lang],
                                a: {
                                    'data-id': ind + 1,
                                    'class': function () {
                                        return ind == 0 ? 'active' : ''
                                    }
                                }
                            })
                        })
                    },
                    class: 'type'
                },
                {
                    h4: computer_.MiscText.MS_Desc[typ - 1][lang],
                    class: 'desc',
                    style: {
                        'margin-bottom': '10px'
                    }
                },
                {
                    div: MSTable(typ),
                    style: {
                        width: '100%',
                        'overflow-x': 'scroll',
                        'transform': 'rotateX(180deg)',
                    },
                    class: 'ach-table'
                }
            ],
            class: 'content'
        })

    }

    function MSTable(i) {

        var dt = cache[["Shield", "Armor", "Gadget"][i - 1]]

        return {
            table: [
                {
                    thead: {
                        tr: function (d) {
                            $(d.container).render({
                                data: computer_.MiscText.MS_Header,
                                template: {
                                    th: `[[${lang}]]`,
                                    a: {
                                        class: function (d) {
                                            if (d.data.EN.includes("HP")) return 'hp'
                                            return ''
                                        }
                                    }
                                }
                            })
                        }
                    },
                },
                {
                    tbody: function (d) {
                        $(d.container).render({
                            data: dt,
                            template: {
                                tr: [
                                    {
                                        td: {
                                            a: function (d) {
                                                return '/computer?monster=' + d.data.ID + '&interval=12-3'
                                            },
                                            attr: {
                                                target: '_blank'
                                            },
                                            t: {
                                                img: function (p) {
                                                    return imgpre + 'homdgcat-res/monster/' + p.data.Icon + '.png'
                                                },
                                                style: {
                                                    height: '66px',
                                                    width: '66px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        }
                                    },
                                    {
                                        td: `[[Name/${lang}]]`,
                                        td: function (p) {
                                            if (!p.data.Elem) return p.data.Name[lang]
                                            var col = computer_.ElemNameConfig[p.data.Elem]
                                            return "<color style='color:" + computer_.TextColorConfig[col.Color] + ";'>" + p.data.Name[lang] + "</color>"
                                        },
                                        style: {
                                            'text-align': 'center',
                                            'font-weight': 'bold'
                                        }
                                    },
                                    {
                                        td: `[[Skill/${lang}]]`
                                    },
                                    {
                                        td: function (p) {
                                            if (!p.data.Elem) return ''
                                            var col = computer_.ElemNameConfig[p.data.Elem]
                                            return "<b><color style='color:" + computer_.TextColorConfig[col.Color] + ";'>" + p.data.Value + (lang == "EN" ? "<br>" : " ") + col.Text[lang] + "</color></b>"
                                        },
                                        style: {
                                            'text-align': 'center',
                                            'font-size': '16px'
                                        }
                                    },
                                    {
                                        td: function (p) {
                                            return p.data.HP ? p.data.HP + "x" : '-'
                                        },
                                        style: {
                                            'text-align': 'center',
                                            'font-size': '16px'
                                        }
                                    },
                                    {
                                        td: `[[Note/${lang}]]`,
                                    },
                                ]
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

    $('body').on('click', '.type schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        typ = $(this).attr('data-id')
        $('.ach-table').empty().render(MSTable(typ))
        $('.desc').html(computer_.MiscText.MS_Desc[typ - 1][lang])
    });

    $('body').on('click', '.hp', function () {
        poplayer({
            header: computer_.MiscText.MS_HP_Title[lang],
            width: '90%',
            template: [{
                p: computer_.MiscText.MS_HP_Desc[lang],
                style: {
                    'line-height': 2,
                }
            }]
        });
    });

})