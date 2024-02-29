$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    if (lang == 'CH') document.title = '玉衡杯数据库'

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 0.5em;'><br><b>" + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Lang[lang])
    $('h3 .lang').hide()
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

    var rarity_color = {
        1: "#919299",
        2: "#3c7c77",
        3: "#4174bd",
        4: "#7c54bc",
        5: "#d1a96a"
    }

    let script_computer = document.createElement('script')
    script_computer.src = '/data/' + lang2 + '/Item.js'
    document.head.append(script_computer)
    script_computer.onload = begin
    
    function begin() {
        isNew = _ver[_ver.length - 1]
        I_TYPE = '3'

        if (avid) {
            if (_index[avid] != undefined) {
                I_TYPE = _type[avid]
                isNew = _item[I_TYPE][_index[avid]].Ver
                popItem(_index[avid] + 1)
            }
        }

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/900001.png',
                                },
                                class: (I_TYPE == '1') ? 'active' : '',
                                a: {
                                    'data-id': '1'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/avatarhead/IconHead_202002.png',
                                },
                                class: (I_TYPE == '2') ? 'active' : '',
                                a: {
                                    'data-id': '2'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/213.png',
                                },
                                class: (I_TYPE == '3') ? 'active' : '',
                                a: {
                                    'data-id': '3'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/140005.png',
                                },
                                class: (I_TYPE == '4') ? 'active' : '',
                                a: {
                                    'data-id': '4'
                                }
                            },
                            /*{
                                schedule: {
                                    img: imgpre + 'images/itemicon/114514.png',
                                },
                                class: (I_TYPE == '5') ? 'active' : '',
                                a: {
                                    'data-id': '5'
                                }
                            },*/
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/300011.png',
                                },
                                class: (I_TYPE == '6') ? 'active' : '',
                                a: {
                                    'data-id': '6'
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'images/itemicon/401003.png',
                                },
                                class: (I_TYPE == '7') ? 'active' : '',
                                a: {
                                    'data-id': '7'
                                }
                            }
                        ],
                        class: 'a_w_r'
                    },
                    {
                        hr: ''
                    },
                    {
                        section: '',
                        class: 'rar'
                    },
                    {
                        hr: ''
                    },
                    {
                        div: [],
                        class: 'area'
                    }
                ],
                class: 'content'
            }
        })

        _ver.forEach(function (o, j) {
            $('.rar').render({
                schedule: o,
                class: (o == isNew) ? 'active' : '',
                a: {
                    'data-id': o
                }
            },)
        })

        renderItems()
    }

    $('body').on('click', '.a_w_r schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings('schedule').removeClass('active');
        I_TYPE = $(this).attr('data-id')
        renderItems()
    })
    $('body').on('click', '.rar schedule', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        isNew = $(this).attr('data-id')
        $(this).addClass('active').siblings('schedule').removeClass('active');
        renderItems()
    })

    function renderItems() {

        $('.area').empty()

        _item[I_TYPE].forEach(function (t, i) {
            if (isNew != t.Ver) return
            $('.area').render({
                div: [
                    {
                        div: {
                            img: imgpre + 'images/itemicon/' + (t.Icon.includes('SpriteOutput') ? 'IconAvatarDetail.png' : t.Icon),
                            class: 'item-icon',
                            when: (t.Icon != undefined) && (t.Icon != '')
                        },
                        class: 'item-up',
                    },
                    {
                        div: {
                            p: t.Name.length ? t.Name : '???',
                            class: 'item-name'
                        },
                        class: 'item-down'
                    }
                ],
                class: 'item-card hover-shadow',
                style: {
                    'background-image': `linear-gradient(180deg, ${rarity_color[t.Rarity]}, #fff)`
                },
                a: {
                    'data-id': i + 1
                }
            })
        })

    }

    $('body').on('click', '.item-card', function () {
        popItem(parseInt($(this).attr('data-id')))
    })

    function popItem(y) {
        this_item = _item[I_TYPE][y - 1]
        poplayer({
            header: txt.Affix[lang].substring(3),
            width: '90%',
            template: [
                {
                    img: this_item.Pic.includes('LightConeMaxFigures') ? (imgpre + 'images/lightconemaxfigures/' + this_item.Pic.replace('SpriteOutput/LightConeMaxFigures', '')) : (this_item.Pic.includes('AvatarIcon') ? (imgpre + 'images/avataricon/' + this_item.Pic.replace('SpriteOutput/AvatarIcon/', '')) : (imgpre + 'images/itemfigures/' + this_item.Pic)),
                    class: 'icon',
                    when: (this_item.Pic != undefined) && (this_item.Pic != "") && !(this_item.Pic.includes('SpriteOutput') && !this_item.Pic.includes('LightConeMaxFigures') && !this_item.Pic.includes('AvatarIcon'))
                },
                {
                    p: this_item.Name,
                    class: 'name',
                    style: {
                        'font-size': '1.2em'
                    }
                },
                {
                    p: this_item.Desc,
                    class: 'desc',
                    style: {
                        'text-align': 'center'
                    }
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    }
                },
                {
                    p: this_item.Story,
                    class: 'desc'
                },
                {
                    hr: '',
                    style: {
                        'border-color': '#bbbbbb',
                        margin: '20px auto 15px'
                    },
                    when: this_item.Src
                },
                {
                    div: {
                        p: function (k) {
                            return '- ' + k.data
                        },
                        class: 'desc',
                        data: this_item.Src,
                        when: this_item.Src
                    },
                },
            ],
        })
    }

    $('body').on('click', '._menu_', function () {
        popLinks(lang)
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

})