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

    $.session.set('AvatarInfoConfig', JSON.stringify(__AvatarInfoConfig))

    var this_ver_chs = "最新"
    var this_ver_en = "Newest"
    var pop_ver = ""
    var ou1;
    var ou2;

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.TITLE[lang]
    var isp = 0
    var is_calc = 1
    var current_name = ""
    var current_type = ""
    var cur_weapon_affix_id = 0
    var cur_story_ver = 0
    var toggle_story = 0
    var cur_wpn = {}
    var cur_skill = {}
    var click_cd = 0
    var cur_relic = {}
    var talk_need_init = 0
    var cur_avatar = {}
    var cur_tnext = []
    var talk_state = 0
    colors = {
        "Fire": "#FF9999",
        "Water": "#80C0FF",
        "Elec": "#FFACFF",
        "Ice": "#99FFFF",
        "Grass": "#99FF88",
        "Wind": "#80FFD7",
        "Rock": "#FFE699",
        "Grey": ""
    }
    var opt = [
        {
            "CH": {
                "无": 0
            },
            "EN": {
                "None": 0
            }
        },
        {
            "CH": {
                "故事1": 0,
            },
            "EN": {
                "Story 1": 1,
            }
        },
        {
            "CH": {
                "故事1": 0,
                "故事2": 1,
            },
            "EN": {
                "Story 1": 0,
                "Story 2": 1,
            }
        }
    ]

    var weapon_asc = {
        0: ["OtherRealm", 0],
        114004: ["Mondstadt", 1],
        114008: ["Mondstadt", 2],
        114012: ["Mondstadt", 3],
        114016: ["Liyue", 1],
        114020: ["Liyue", 2],
        114024: ["Liyue", 3],
        114028: ["Inazuma", 1],
        114032: ["Inazuma", 2],
        114036: ["Inazuma", 3],
        114040: ["Sumeru", 1],
        114044: ["Sumeru", 2],
        114048: ["Sumeru", 3],
        114052: ["Fontaine", 1],
        114056: ["Fontaine", 2],
        114060: ["Fontaine", 3],
    }

    var weapon_rarity = 5

    var cur_avatar_id = 0

    var avatar_stat_ver = 0
    var weapon_stat_ver = 0

    var char_id_list = {}

    var acs_cache = null
    var acs_notget = 1

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').text(computer_.MiscText.Avatar_Title[lang]);
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_Char[lang]);

    begin()

    function begin() {

        this_ver_chs = __AvatarInfoConfig[0].Note
        this_ver_en = __AvatarInfoConfig[0].Note
        pop_ver = lang == 'CH' ? " " + this_ver_chs : " " + this_ver_en

        $('container').render({
            template: {
                div: [
                    {
                        section: {
                            schedule: computer_.MiscText.Avatar_Relic[lang]
                        },
                        class: 'generation',
                        click: function (p) {
                            popRelic()
                        }
                    },
                    {
                        section: [
                            {
                                schedule: computer_.MiscText.Avatar_Weapon[0][lang],
                                a: {
                                    'data-id': 5
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Weapon[1][lang],
                                a: {
                                    'data-id': 1
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Weapon[2][lang],
                                a: {
                                    'data-id': 2
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Weapon[3][lang],
                                a: {
                                    'data-id': 3
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Weapon[4][lang],
                                a: {
                                    'data-id': 4
                                }
                            }
                        ],
                        class: 'weapon'
                    },
                    {
                        hr: '',
                        style: {
                            margin: '20px 0px',
                        }
                    },
                    {
                        section: [
                            {
                                schedule: computer_.MiscText.Avatar_Sort[0][lang],
                                a: {
                                    'data-id': 5,
                                    'class': 'active'
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[4][lang],
                                a: {
                                    'data-id': 4
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[1][lang],
                                a: {
                                    'data-id': 1
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[2][lang],
                                a: {
                                    'data-id': 2
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[3][lang],
                                a: {
                                    'data-id': 3
                                }
                            },
                        ],
                        class: 'sort'
                    },
                ],
                class: 'content'
            },
        })

        renderContent(0)

        $('.stat_ver_choose_w').empty().render(SVW(cur_weapon_affix_id))
        $('select').val(weapon_stat_ver)

        load_weapon_story()

    }

    function renderContent(r) {

        if (r == 0) {
            _AvatarInfoConfig = JSON.parse($.session.get('AvatarInfoConfig'))
        } else if (r == 1) {
            _AvatarInfoConfig.sort(function (a, b) {
                return b.ShowStats.HP - a.ShowStats.HP
            })
        } else if (r == 2) {
            _AvatarInfoConfig.sort(function (a, b) {
                return b.ShowStats.ATK - a.ShowStats.ATK
            })
        } else if (r == 3) {
            _AvatarInfoConfig.sort(function (a, b) {
                return b.ShowStats.DEF - a.ShowStats.DEF
            })
        } else if (r == 4) {
            _AvatarInfoConfig.sort(function (a, b) {
                return b.ShowStats.Norm - a.ShowStats.Norm
            })
        }

        for (var o = 0; o < _AvatarInfoConfig.length; o++) {
            char_id_list[_AvatarInfoConfig[o]._name] = o
        }

        $('.avatar-table').remove()

        $('.content').render({
            div: {
                table: [
                    {
                        thead: [
                            {
                                tr: function (d) {
                                    $(d.container).render({
                                        data: computer_.MiscText.Avatar_Table_Header,
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
                                data: _AvatarInfoConfig,
                                template: {
                                    tr: [
                                        {
                                            td: function (p) {
                                                if (!p.data.Version) {
                                                    return "-"
                                                }
                                                return p.data.Version == "9.0" ? "1.0" : p.data.Version
                                            },
                                            style: {
                                                'text-align': 'center',
                                                'padding': '10px'
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (p) {
                                                    avname = p.data.Icon
                                                    return imgpre + 'homdgcat-res/Avatar/' + avname + '.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            },
                                            style: {
                                                'text-align': 'center',
                                            }
                                        },
                                        {
                                            td: {
                                                span: function (p) {
                                                    return p.data.Name[lang]
                                                },
                                                style: {
                                                    color: function (p) {
                                                        elem = computer_.ElemNameConfig[p.data.Element]
                                                        return computer_.TextColorConfig[elem.Color]
                                                    },
                                                    'font-weight': 'bold'
                                                }
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: `[[Title/${lang}]]`,
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: `[[Grade]]`,
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (p) {
                                                    avname = p.data.Element
                                                    return imgpre + 'homdgcat-res/Csxylic/' + avname + '.png'
                                                },
                                                style: {
                                                    height: '40px',
                                                    display: 'block',
                                                    margin: 'auto',
                                                },
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (p) {
                                                    avname = computer_.AvatarWeaponConfig[p.data.Weapon].EN
                                                    switch (avname) {
                                                        case 'Sword': 
                                                            var imgp = imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Sword_Purewill_Awaken.png';
                                                            break;
                                                        case 'Claymore': 
                                                            var imgp = imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Claymore_Wolfmound.png';
                                                            break;
                                                        case 'Catalyst': 
                                                            var imgp = imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Catalyst_Ludiharpastum_Awaken.png';
                                                            break;
                                                        case 'Polearm': 
                                                            var imgp = imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Pole_Morax_Awaken.png';
                                                            break;
                                                        case 'Bow': 
                                                            var imgp = imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Bow_Widsith_Awaken.png';
                                                            break;
                                                        default: 
                                                            var imgp = imgpre + 'homdgcat-res/monster/keq.png';
                                                            break;
                                                    }
                                                    return imgp
                                                },
                                                style: {
                                                    height: '60px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                return p.data.ShowStats.HP
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                return p.data.ShowStats.ATK
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                return p.data.ShowStats.DEF
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                return p.data.ShowStats.Norm
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                promote_value = p.data.ShowStats.Custom
                                                if (!p.data.CustomPromote) {
                                                    return "-"
                                                }
                                                promote_config = computer_.AvatarCustomPromoteConfig[p.data.CustomPromote]
                                                if (promote_config.ShowType === "p") {
                                                    promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                                                } else {
                                                    promote_value = promote_value.toFixed(1).toString()
                                                }
                                                return promote_value + " " + promote_config.Text[lang]
                                            },
                                            style: {
                                                'padding': '15px'
                                            }
                                        },
                                        {
                                            td: {
                                                div: [
                                                    {
                                                        img: function (p) {
                                                            return imgpre + 'homdgcat-res/monster/' + p.data.Pics[0] + '.png'
                                                        },
                                                        style: {
                                                            height: '45px'
                                                        }
                                                    },
                                                    {
                                                        img: function (p) {
                                                            return imgpre + 'homdgcat-res/monster/' + p.data.Pics[1] + '.png'
                                                        },
                                                        style: {
                                                            height: '45px'
                                                        }
                                                    },
                                                    {
                                                        img: function (p) {
                                                            return imgpre + 'homdgcat-res/monster/' + p.data.Pics[2] + '.png'
                                                        },
                                                        style: {
                                                            height: '45px'
                                                        }
                                                    }
                                                ],
                                                style: {
                                                    'width': '100%',
                                                    'display': 'flex',
                                                    'justify-content': 'space-evenly'
                                                }
                                            }
                                        },
                                        {
                                            td: function (p) {
                                                return computer_.AvatarTalentConfig[p.data.TalentMat][lang]
                                            },
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                    ],
                                    click: function (p) {
                                        cur_avatar_id = p.org_data._id
                                        console.log(cur_avatar_id)
                                        avatar_stat_ver = 0
                                        is_calc = 1
                                        talk_state = 0
                                        poplayer({
                                            header: p.org_data.Name[lang] + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang],
                                            width: '100%',
                                            data: p.org_data,
                                            template: [
                                                {
                                                    section: function (g) {
                                                        current_name = g.data._name
                                                        avatar_codename = g.data._name
                                                        $(g.container).render({
                                                            data: computer_.MiscText.Avatar_Info_Select,
                                                            template: {
                                                                span: `[[${lang}]]`,
                                                                a: { 'data-s': `[[${'EN'}]]` },
                                                                click: function (d) {
                                                                    if ($(d.sender).hasClass('active')) {
                                                                        return
                                                                    }
                                                                    if (ou1 != undefined) clearInterval(ou1)
                                                                    if (ou2 != undefined) clearInterval(ou2)
                                                                    var text = $(d.sender).attr('data-s');
                                                                    if (text == "Basic Info") {
                                                                        is_calc = 1
                                                                    } else {
                                                                        is_calc = 0
                                                                    }
                                                                    $(d.sender).addClass('active').siblings('span').removeClass('active');
                                                                    renderInfoPre(avatar_codename, text)
                                                                }
                                                            }
                                                        })
                                                        $(g.container).find('span').eq(0).addClass('active');
                                                    },
                                                    class: 'a_select'
                                                },
                                                {
                                                    section: '',
                                                    class: 'a_data',
                                                    style: {
                                                        'justify-content': 'space-evenly',
                                                        'display': 'flex',
                                                        'flex-wrap': 'wrap'
                                                    }
                                                },
                                                {
                                                    section: '',
                                                    class: 'a_talk',
                                                    style: {
                                                        'justify-content': 'space-evenly',
                                                        'display': 'flex',
                                                        'flex-wrap': 'wrap',
                                                        'display': 'none',
                                                        'margin-bottom': '800px'
                                                    }
                                                }
                                            ]
                                        });
                                        avatar_id = p.org_data._id
                                        renderInfoPre(p.org_data._name, "Basic Info")
                                        talk_need_init = 1
                                        acs_cache = _AvatarCostumeStory[0].Data
                                    },
                                    style: {
                                        'cursor': 'pointer',
                                        'background-color': function (d) {
                                            if (d.data._id == 42) return '#FFD2FF'
                                            return ''
                                        }
                                    },
                                    a: {
                                        'data-id': function (d) {
                                            return d.data._id
                                        }
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
                'overflow-x': 'scroll',
                'transform': 'rotateX(180deg)',
            },
            class: 'avatar-table'
        })
        if ($('#AVID').val()) {
            var come_id = $('#AVID').val()
            $("tr[data-id='" + come_id + "']").click()
        }
    }

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    function renderInfoPre(avatar, type) {
        renderInfo(avatar, type)
    }

    function renderInfo(avatar, type) {
        current_type = type
        $('.a_data').empty().render(renderTemplate(avatar, type))
        if (type == "Teapot Talks") {
            $('.a_talk').show()
        } else {
            $('.a_talk').hide()
        }
        $('.a_data').show();
        $('select').val(avatar_stat_ver)
        $('.skill_lv_input').on('change', function () {
            var now_lv = $(this).val()
            $('div').has(this).next().next().find('.lv').hide()
            $('div').has(this).next().next().find('.lv' + now_lv).show()
        });
        $('.skill_lv_up').on('click', function () {
            $('.skill_lv_input').val(function (index, value) {
                var now_lv = parseInt(value)
                if (now_lv == $('.skill_lv_input').attr('max')) return now_lv
                return now_lv + 1
            })
            $('div').has('.skill_lv_input').next().next().find('.lv').hide()
            $('div').has('.skill_lv_input').next().next().find('.lv' + $('.skill_lv_input').val()).show()
        });
        $('.skill_lv_down').on('click', function () {
            $('.skill_lv_input').val(function (index, value) {
                var now_lv = parseInt(value)
                if (now_lv == 1) return now_lv
                return now_lv - 1
            })
            $('div').has('.skill_lv_input').next().next().find('.lv').hide()
            $('div').has('.skill_lv_input').next().next().find('.lv' + $('.skill_lv_input').val()).show()
        });
    }

    function renderTemplate(avatar, type) {

        var this_avatar = _AvatarInfoConfig[char_id_list[avatar]]
        cur_avatar = this_avatar

        var nation = computer_.AvatarNationConfig[this_avatar.Nation]
        var color1 = colors[nation.Color]

        var color0 = colors[this_avatar.Element]
        var avatar_color = "<color style='color:" + color0 + "';><b>"

        if (avatar_stat_ver == 0) {
            var skillconfig = _AvatarSkillConfig[avatar] ? _AvatarSkillConfig[avatar] : {
                BattleSkills: [],
                PassiveSkills: [],
                Constellations: []
            }
        } else {
            var skillconfig = _AvatarSkillPConfig[avatar].Ver[avatar_stat_ver] ? _AvatarSkillPConfig[avatar].Ver[avatar_stat_ver] : {
                BattleSkills: [],
                PassiveSkills: [],
                Constellations: []
            }
        }

        var fetters = _AvatarFetterConfig[this_avatar.Fetter] ? _AvatarFetterConfig[this_avatar.Fetter] : {
            StoryList: [],
            VoiceList: []
        }

        var damagedata = _AvatarAttackConfig[avatar] ? _AvatarAttackConfig[avatar] : {
            AttackList: []
        }

        var otherdata = _AvatarDataConfig[avatar] ? _AvatarDataConfig[avatar] : {
            BallList: [],
            EndureList: [],
            WindZoneList: [],
            OtherDataList: []
        }

        if (type == "Basic Info") {
            dr = {
                "Basic Info": {
                    data: this_avatar,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: function (k) {
                                            return k.data.Name[lang] + (lang == "CH" ? " · " : " - ") + k.data.Title[lang].replace("<br>", " / ")
                                        }
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: [
                                        {
                                            img: function (k) {
                                                return imgpre + 'homdgcat-res/Avatar/' + k.data.Icon + '.png'
                                            },
                                            class: 'avatar_costume_img',
                                            when: function (k) {
                                                return k.data.Icon
                                            },
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Desc[lang]
                                            }
                                        }
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Mat[lang]
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    a: function (k) {
                                                        return '/gi/monster?id=' + k.data.CommonMat + '&level=93'
                                                    },
                                                    t: [
                                                        {
                                                            img: function (k) {
                                                                var mat = k.data.Pics[0]
                                                                if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                                return imgpre + "homdgcat-res/monster/" + mat + ".png"
                                                            },
                                                        },
                                                    ],
                                                    attr: { target: '_blank' }
                                                },
                                                {
                                                    p: computer_.MiscText.Avatar_Mons[lang]
                                                }
                                            ],
                                            class: 'avatar_mat'
                                        },
                                        {
                                            div: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.SpecialityMat]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    },
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.SpecialityMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text[lang]
                                                    }
                                                }
                                            ],
                                            class: 'avatar_mat avatar_mat_1',
                                            a: {
                                                'data-id': function (k) {
                                                    return k.data.SpecialityMat
                                                }
                                            }
                                        },
                                        {
                                            div: [
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    }
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text[lang]
                                                    }
                                                }
                                            ],
                                            class: 'avatar_mat avatar_mat_1',
                                            a: {
                                                'data-id': function (k) {
                                                    return k.data.TalentMatt
                                                }
                                            }
                                        },
                                        {
                                            div: [
                                                {
                                                    a: function (k) {
                                                        return '/gi/monster?id=' + k.data.BossMat + '&level=93'
                                                    },
                                                    t: [
                                                        {
                                                            img: function (k) {
                                                                return imgpre + "homdgcat-res/monster/" + k.data.Pics[1] + ".png"
                                                            },
                                                            style: {
                                                                'margin-right': '10px'
                                                            }
                                                        },
                                                    ],
                                                    when: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return false
                                                        if (!mat.Icon) return false
                                                        return true
                                                    },
                                                    attr: { target: '_blank' }
                                                },
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    },
                                                    class: 'img_2'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text[lang]
                                                    }
                                                }
                                            ],
                                            class: 'avatar_mat avatar_mat_2',
                                            a: {
                                                'data-id': function (k) {
                                                    return k.data.AscMat
                                                }
                                            }
                                        },
                                        {
                                            div: [
                                                {
                                                    a: function (k) {
                                                        if (k.data.WeeklyMat == 90201) return '/gi/monster?id=' + k.data.WeeklyMat + '&level=94'
                                                        return '/gi/monster?id=' + k.data.WeeklyMat + '&level=90'
                                                    },
                                                    t: [
                                                        {
                                                            img: function (k) {
                                                                return imgpre + "homdgcat-res/monster/" + k.data.Pics[2] + ".png"
                                                            },
                                                            style: {
                                                                'margin-right': '10px'
                                                            }
                                                        }
                                                    ],
                                                    when: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return false
                                                        if (!mat.Icon) return false
                                                        return true
                                                    },
                                                    attr: { target: '_blank' }
                                                },
                                                {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[k.data.WeekMat]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    },
                                                    class: 'img_2'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.WeekMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text[lang]
                                                    }
                                                }
                                            ],
                                            class: 'avatar_mat avatar_mat_2',
                                            a: {
                                                'data-id': function (k) {
                                                    return k.data.WeekMat
                                                }
                                            }
                                        }
                                    ],
                                    class: 'a_section_content',
                                    style: {
                                        display: 'flex',
                                        'justify-content': 'space-evenly',
                                        'flex-wrap': 'wrap',
                                    }
                                },
                            ],
                            class: 'a_section'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_BasicInfo_Info[lang]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_1[lang] + avatar_color + k.data.Constellation[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_2[lang] + avatar_color + k.data.Birthday + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3_0[lang] + "<color style='color:" + color1 + "';><b>" + nation.Text[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3[lang] + avatar_color + k.data.Belong[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_1[lang] + avatar_color + _AvatarPromoteConfig[k.data._name].CV.CH[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_2[lang] + avatar_color + _AvatarPromoteConfig[k.data._name].CV.EN[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_3[lang] + avatar_color + _AvatarPromoteConfig[k.data._name].CV.JP[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_4[lang] + avatar_color + _AvatarPromoteConfig[k.data._name].CV.KR[lang] + "</b></color>"
                                            }
                                        },
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_smallsmall'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Stats[lang]
                                    },
                                    class: 'a_section_head',
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    input: 'level',
                                                    a: {
                                                        type: 'number',
                                                        placeholder: '1~90',
                                                        value: '90',
                                                        min: '1',
                                                        max: '90'
                                                    }
                                                },
                                                {
                                                    button: computer_.MiscText.Avatar_IsPromote[0][lang],
                                                    class: 'promote',
                                                    click: function () {
                                                        isp = 1 - isp
                                                        $('.promote').html(computer_.MiscText.Avatar_IsPromote[isp][lang])
                                                        cur_level = $('input[name=level]').val()
                                                        if (cur_level > 0 && cur_level <= 90) {
                                                            $('.avatar_stat').html(calcstats(cur_level, this_avatar))
                                                        }
                                                    }
                                                }
                                            ],
                                            style: {
                                                'display': 'flex',
                                                'justify-content': 'space-between',
                                            }
                                        },
                                        {
                                            div: calcstats(90, this_avatar),
                                            class: 'avatar_stat'
                                        }
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_smallsmall'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_BasicInfo_Battle[lang]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_1[lang] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Name[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_2[lang] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Endure + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_3[lang] + avatar_color + (computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane1 / computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane2).toFixed(5).toString().replace('.00000', '').replace('000', '') + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_4[lang] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Recover + "</b></color>"
                                            }
                                        }
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_smallsmall'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Costume[lang]
                                    },
                                    class: 'a_section_head',
                                    style: {
                                        color: color0
                                    }
                                },
                                {
                                    div: [
                                        {
                                            img: function (k) {
                                                return imgpre + 'homdgcat-res/Avatar/' + k.data.Icon + '.png'
                                            },
                                            class: 'avatar_costume_img',
                                            when: function (k) {
                                                return k.data.Icon
                                            },
                                        },
                                        {
                                            div: [
                                                {
                                                    span: function (k) {
                                                        return k.data.Name[lang]
                                                    },
                                                    style: {
                                                        'font-weight': 'bold'
                                                    }
                                                },
                                                {
                                                    button: computer_.MiscText.Avatar_Costume_Story[lang],
                                                    when: function (k) {
                                                        return k.data.ID
                                                    },
                                                    style: {
                                                        height: '30px',
                                                        width: '100px',
                                                        'font-weight': 'bold',
                                                        'margin': 'auto 10px'
                                                    },
                                                    class: 'asc_button',
                                                    a: {
                                                        'data-id': function (k) {
                                                            return k.data.ID
                                                        },
                                                        'data-ic': function (k) {
                                                            return k.data.Icon
                                                        },
                                                        'data-ib': function (k) {
                                                            return k.data.Name[lang]
                                                        }
                                                    }
                                                },
                                            ],
                                            style: {
                                                margin: '5px 0px',
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Desc[lang]
                                            }
                                        }
                                    ],
                                    class: 'a_section_content',
                                    data: _AvatarCostumeConfig[this_avatar._id].Costumes,
                                    style: {
                                        'font-size': '16px'
                                    }
                                },
                            ],
                            class: 'a_section'
                        },
                    ]
                },
            }
        } else {
            dr = {
                "Battle Skills": {
                    data: skillconfig.BattleSkills,
                    template: [
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            span: function (k) {
                                                return k.data.Name[lang]
                                            },
                                            style: {
                                                'margin-left': '0px',
                                                'margin-right': '5px',
                                            }
                                        },
                                        {
                                            span: renderSVC(avatar),
                                            class: 'stat_ver_choose'
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: "",
                                    style: {
                                        'height': '1px',
                                        'width': '100%'
                                    }
                                },
                                {
                                    div: {
                                        p: function (k) {
                                            return k.data.Desc[lang]
                                        }
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'battle_desc',
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            input: 'lv',
                                            a: {
                                                type: 'number',
                                                value: 10,
                                                min: 1,
                                                max: function (s) {
                                                    return s.data.ParamDesc[0].ParamLevelList.length
                                                }
                                            },
                                            class: 'skill_lv_input'
                                        },
                                        {
                                            button: '▼',
                                            class: 'skill_lv_down'
                                        },
                                        {
                                            button: '▲',
                                            class: 'skill_lv_up'
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: "",
                                    style: {
                                        'height': '1px',
                                        'width': '100%'
                                    }
                                },
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    span: function (s) {
                                                        return s.data.Desc[lang]
                                                    },
                                                    style: {
                                                        width: 'max-content'
                                                    }
                                                },
                                                /*{
                                                    span: function (s) {
                                                        var init_lv = s.data.ParamLevelList.length == 15 ? 9 : 0
                                                        return s.data.ParamLevelList[init_lv][lang]
                                                    },
                                                    style: {
                                                        'text-align': 'right',
                                                        'float': 'right'
                                                    },
                                                },*/
                                                {
                                                    span: function (s) {
                                                        var active_lv = 10
                                                        var total_lv = s.data.ParamLevelList.length
                                                        for (var i = 0; i < 15; i++) {
                                                            $(s.container).render({
                                                                span: function (s) {
                                                                    var this_level_desc = s.data.ParamLevelList[i]
                                                                    return this_level_desc ? (this_level_desc[lang] ? this_level_desc[lang] : this_level_desc) : s.data.ParamLevelList[total_lv - 1][lang]
                                                                },
                                                                class: 'lv lv' + (i + 1).toString()
                                                            });
                                                        }
                                                        $(s.container).children().hide()
                                                        $(s.container).children('.lv' + active_lv).show()
                                                    },
                                                    style: {
                                                        'text-align': 'right',
                                                        width: 'max-content'
                                                    },
                                                }
                                            ],
                                            datapath: 'ParamDesc',
                                            class: 'param'
                                        },
                                        {
                                            div: [
                                                {
                                                    span: computer_.MiscText.Avatar_ExtraParamName_Charge[lang],
                                                    style: {
                                                        'color': '#FFD780',
                                                    }
                                                },
                                                {
                                                    span: function (s) {
                                                        return s.data.Num
                                                    },
                                                    style: {
                                                        'text-align': 'right',
                                                        'color': '#FFD780',
                                                        'height': '30px'
                                                    }
                                                },
                                            ],
                                            class: 'param'
                                        },
                                        {
                                            div: [
                                                {
                                                    span: computer_.MiscText.Avatar_ExtraParamName_Lock[lang],
                                                    style: {
                                                        'color': '#FFD780',
                                                    }
                                                },
                                                {
                                                    span: function (s) {
                                                        return s.data.Lock.toFixed(1)
                                                    },
                                                    style: {
                                                        'text-align': 'right',
                                                        'color': '#FFD780',
                                                        'height': '30px'
                                                    },
                                                    class: 'paramstat'
                                                },
                                            ],
                                            class: 'param'
                                        }
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'battle_stat',
                        }
                    ]
                },
                "Passive Skills": {
                    data: skillconfig.PassiveSkills,
                    template: [
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            span: function (k) {
                                                return k.data.Name[lang]
                                            },
                                            style: {
                                                'margin-left': '0px',
                                                'margin-right': '5px',
                                            }
                                        },
                                        {
                                            span: renderSVC(avatar),
                                            class: 'stat_ver_choose'
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        p: function (k) {
                                            return k.data.Desc[lang]
                                        }
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        }
                    ]
                },
                "Constellations": {
                    data: skillconfig.Constellations,
                    template: [
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            span: function (k) {
                                                return k.data.Level.toString() + " " + k.data.Name[lang]
                                            },
                                            style: {
                                                'margin-left': '0px',
                                                'margin-right': '5px',
                                            }
                                        },
                                        {
                                            span: renderSVC(avatar),
                                            class: 'stat_ver_choose'
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        p: function (k) {
                                            return k.data.Desc[lang]
                                        }
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        }
                    ]
                },
                "Damage Data": {
                    div: [
                        {
                            table: [
                                {
                                    thead: [
                                        {
                                            tr: function (d) {
                                                $(d.container).render({
                                                    data: computer_.MiscText.Avatar_Attack_Header,
                                                    template: {
                                                        th: `[[${lang}]]`
                                                    }
                                                })
                                            }
                                        }
                                    ]
                                },
                                {
                                    tbody: function (d) {
                                        $(d.container).render({
                                            data: damagedata.AttackList,
                                            template: {
                                                tr: [
                                                    {
                                                        td: `[[Skill/${lang}]]`
                                                    },
                                                    {
                                                        td: function (p) {
                                                            return computer_.AvatarShapeConfig[p.data.Shape.Type].Name[lang]
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            var out = ""
                                                            size = p.data.Shape.Size
                                                            desc = computer_.AvatarShapeConfig[p.data.Shape.Type].Params
                                                            for (var i = 0; i < size.length; i++) {
                                                                out += desc[i][lang] + " " + size[i].toString()
                                                                if (i + 1 < size.length) { out += "<br>" }
                                                            }
                                                            return out
                                                        }
                                                    },
                                                    {
                                                        td: `[[AtkTag/${lang}]]`
                                                    },
                                                    {
                                                        td: function (p) {
                                                            elem = computer_.ElemNameConfig[p.data.Element]
                                                            if (!elem) {
                                                                return ""
                                                            }
                                                            return "<color style='color:" + computer_.TextColorConfig[elem.Color] + ";'><b>" + elem.Text[lang] + "</b></color>"
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: `[[GU]]`,
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: `[[AttTag/${lang}]]`
                                                    },
                                                    {
                                                        td: `[[AttGrp/${lang}]]`
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.Blunt) {
                                                                return "✔"
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: `[[Poise]]`,
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            var a = computer_.AvatarForceConfig[p.data.ForceType][lang]
                                                            if (a == "None" || a == "无") { a = "" }
                                                            return a
                                                        }
                                                    },
                                                    {
                                                        td: function (p) {
                                                            a = "(" + p.data.Force[0] + ", " + p.data.Force[1] + ")"
                                                            if (a == "(0, 0)") { a = "" }
                                                            return a
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.Arkhe) {
                                                                return p.data.Arkhe.toString()
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.HTime) {
                                                                return p.data.HTime.toString()
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.HScale) {
                                                                return p.data.HScale.toString()
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.BeHalt) {
                                                                return "✔"
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: function (p) {
                                                            if (p.data.CanInfuse) {
                                                                return "✔"
                                                            }
                                                            return ""
                                                        },
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: `[[StrikeType]]`,
                                                        class: 'attack_center'
                                                    },
                                                    {
                                                        td: `[[AttackType]]`,
                                                        class: 'attack_center'
                                                    },
                                                ]
                                            }
                                        })
                                    }
                                }
                            ],
                        },
                    ],
                    class: 'attack_div',
                },
                "In-Depth Data": {
                    data: otherdata,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Ball[lang]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        table: {
                                            tr: [
                                                {
                                                    td: `[[When/${lang}]]`,
                                                    width: '60%'
                                                },
                                                {
                                                    td: function (k) {
                                                        drop = k.data.DropArray
                                                        if (!drop) {
                                                            return k.data.CD.toString() + "s"
                                                        }
                                                        out = ""
                                                        for (var i = 0; i < drop.length; i++) {
                                                            out += drop[i].Num.toString() + " (" + (drop[i].Chance * 100).toString() + "%)"
                                                            if (i + 1 < drop.length) { out += " / " }
                                                        }
                                                        return out.replace(' (100%)', '')
                                                    },
                                                    width: '40%',
                                                    style: {
                                                        'text-align': 'right',
                                                        'padding-left': '10px'
                                                    }
                                                }
                                            ],
                                            datapath: 'BallList',
                                            width: '100%',
                                            height: '30px',
                                            class: 'other_table'
                                        },
                                        width: '100%'
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_small'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Endure[lang]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        table: {
                                            tr: [
                                                {
                                                    td: `[[Skill/${lang}]]`,
                                                    width: '75%'
                                                },
                                                {
                                                    td: function (d) {
                                                        return ((1 - d.data.Endure) * 100).toFixed(0) + '%'
                                                    },
                                                    width: '25%',
                                                    style: {
                                                        'text-align': 'right'
                                                    }
                                                },
                                            ],
                                            datapath: 'EndureList',
                                            style: {
                                                width: '100%',
                                                height: '30px',
                                                'padding-left': '10px'
                                            },
                                            class: 'other_table'
                                        },
                                        width: '100%'
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_small'
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_WindZone[lang]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        table: [
                                            {
                                                thead: {
                                                    tr: function (d) {
                                                        $(d.container).render({
                                                            data: computer_.MiscText.Avatar_WindZone_Header,
                                                            template: {
                                                                th: `[[${lang}]]`,
                                                                style: {
                                                                    'padding': "7px"
                                                                }
                                                            }
                                                        })
                                                    },
                                                    width: '100%'
                                                }
                                            },
                                            {
                                                tbody: function (d) {
                                                    $(d.container).render({
                                                        data: d.data,
                                                        template: {
                                                            tr: [
                                                                {
                                                                    td: `[[Skill/${lang}]]`
                                                                },
                                                                {
                                                                    td: `[[Target/${lang}]]`
                                                                },
                                                                {
                                                                    td: `[[Inner]] ~ [[Radius]]`
                                                                },
                                                                {
                                                                    td: `[[Strength]]`
                                                                },
                                                                {
                                                                    td: `[[Attenuation]]`
                                                                },
                                                                {
                                                                    td: function (p) {
                                                                        if (!p.data.Duration) {
                                                                            return ""
                                                                        }
                                                                        return p.data.Duration
                                                                    }
                                                                },
                                                                {
                                                                    td: function (p) {
                                                                        if (p.data.Reverse) {
                                                                            return "✔"
                                                                        }
                                                                        return ""
                                                                    }
                                                                },
                                                            ],
                                                            width: '100%',
                                                            class: 'windzone_table'
                                                        }
                                                    })
                                                },
                                                datapath: 'WindZoneList'
                                            }
                                        ],
                                        width: '100%'
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        },
                    ]
                },
                "HomDGCat's Notes": {
                    data: otherdata,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Other[lang]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: {
                                        ul: {
                                            li: function (k) {
                                                return "<br>" + k.data[lang]
                                            },
                                            datapath: 'OtherDataList'
                                        },
                                    },
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        }
                    ]
                },
                "Stories": {
                    data: fetters.StoryList,
                    template: [
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return k.data.Title[lang]
                                            },
                                            style: {
                                                color: color0
                                            }
                                        }
                                    ],
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return k.data[lang]
                                            },
                                            datapath: 'Tips',
                                            style: {
                                                'font-size': '15px',
                                                'color': '#ffcc44',
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Content[lang]
                                            }
                                        },
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section'
                        }
                    ]
                },
                "Voicelines": {
                    data: fetters.VoiceList,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: function (k) {
                                            return k.data.Title[lang]
                                        },
                                        style: {
                                            color: color0
                                        }
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return k.data[lang]
                                            },
                                            datapath: 'Tips',
                                            style: {
                                                'font-size': '15px',
                                                'color': '#ffcc44',
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Content[lang]
                                            }
                                        },
                                    ],
                                    class: 'a_section_content'
                                },
                            ],
                            class: 'a_section_small'
                        }
                    ]
                },
                "Teapot Talks": {
                    template: [
                        {
                            hr: '',
                            style: {
                                'width': '100%',
                                'height': '1px',
                                'background-color': '#27363E',
                                'margin-top': '10px',
                                'margin-bottom': '10px'
                            }
                        },
                        {
                            button: computer_.MiscText.TalkTip[lang],
                            class: 'reset_talk_',
                            when: !talk_state
                        },
                        {
                            button: computer_.MiscText.ResetTalk[lang],
                            class: 'reset_talk',
                            when: talk_state
                        }
                    ]
                }
            }
        }

        if ((type == "Teapot Talks") && (talk_need_init == 1)) {
            init_talk(_AvatarTeapotTalkList[this_avatar._id], this_avatar)
            talk_need_init = 0
        }

        return dr[type]

    }

    $('body').on('click', '.reset_talk', function () {
        talk_state = 0
        $(this).html(computer_.MiscText.TalkTip[lang])
        $(this).removeClass('reset_talk').addClass('reset_talk_')
        $('.a_talk').empty()
        init_talk(_AvatarTeapotTalkList[cur_avatar._id], cur_avatar)
    })

    $('body').on('click', '.talk_2', function () {
        talk_state = 1
        $('.reset_talk_').html(computer_.MiscText.ResetTalk[lang])
        $('.reset_talk_').removeClass('reset_talk_').addClass('reset_talk')
        $('.talk_2').fadeOut(500)
        $(this).removeClass('talk_2').fadeIn(1000, function () {
            if ($(this).hasClass('talk_21')) $(this).addClass('talk_1')
            if ($(this).hasClass('talk_20')) $(this).addClass('talk_0')
            if ($(this).attr('data-tnext')) {
                cur_tnext = JSON.parse($(this).attr('data-tnext'))
            } else {
                cur_tnext = []
            }
            write_talk(JSON.parse($(this).attr('data-next')), cur_avatar)
        })
    })

    function init_talk(talkids, this_avatar) {
        if (!_AvatarTeapotTalk[this_avatar._id]) return
        var cur_avatar_talks = _AvatarTeapotTalk[this_avatar._id].Talks
        talkids.forEach(function (talk_id) {
            var show_text = ''
            if (cur_avatar_talks[talk_id].Type) {
                show_text = "<color style='color:" + computer_.TextColorConfig[this_avatar.Element] + ";'>" + this_avatar.Name[lang] + ((lang == "CH") ? '：' : ': ') + '</color>'
            } else {
                show_text = '> '
            }
            $('.a_talk').render({
                template: {
                    div: show_text + cur_avatar_talks[talk_id].Text[lang],
                    class: 'talk talk_2 talk_' + cur_avatar_talks[talk_id].Type + ' talk_2' + cur_avatar_talks[talk_id].Type,
                    a: {
                        'data-next': JSON.stringify(cur_avatar_talks[talk_id].Next),
                        'data-tnext': JSON.stringify(cur_avatar_talks[talk_id].TNext),
                        'data-id': talk_id
                    }
                }
            })
        })
    }

    function write_talk(talkids, this_avatar) {
        if (!talk_state) return
        var cur_avatar_talks = _AvatarTeapotTalk[this_avatar._id].Talks
        var record_next = []
        var nothas_traveller = 1
        talkids.forEach(function (talk_id) {
            if (!cur_tnext.length) {
                cur_tnext = cur_avatar_talks[talk_id].TNext ? cur_avatar_talks[talk_id].TNext : []
            }
            var show_text = ''
            if (cur_avatar_talks[talk_id].Type) {
                show_text = "<color style='color:" + computer_.TextColorConfig[this_avatar.Element] + ";'>" + this_avatar.Name[lang] + ((lang == "CH") ? '：' : ': ') + '</color>'
            } else {
                show_text = '> '
            }
            nothas_traveller *= cur_avatar_talks[talk_id].Type
            $('.a_talk').render({
                template: {
                    div: show_text + cur_avatar_talks[talk_id].Text[lang],
                    class: 'talk act talk_' + cur_avatar_talks[talk_id].Type,
                    a: {
                        'data-next': JSON.stringify(cur_avatar_talks[talk_id].Next),
                        'data-tnext': JSON.stringify(cur_avatar_talks[talk_id].TNext),
                        'data-id': talk_id
                    },
                    style: {
                        display: 'none'
                    }
                }
            })
            if (cur_avatar_talks[talk_id].Type) record_next = record_next.concat(cur_avatar_talks[talk_id].Next)
        })
        if (nothas_traveller) {
            $('.act').fadeIn(1000, function () {
                $('.act').removeClass('act')
                if (record_next.length) {
                    write_talk(record_next, this_avatar)
                } else if (cur_tnext.length) {
                    var temp = cur_tnext
                    cur_tnext = []
                    write_talk(temp, this_avatar)
                } else {
                    $('.a_talk').render({
                        template: {
                            hr: '',
                            style: {
                                'width': '100%',
                                'height': '1px',
                                'background-color': '#27363E',
                                'margin-top': '15px',
                                'margin-bottom': '15px'
                            }
                        },
                    })
                }
            })
        } else {
            $('.act').fadeIn(1000, function () {
                $('.act').removeClass('act')
            })
        }
    }

    $('body').on('click', '.talk_0', function () {
        $(this).siblings('.talk_0').css('opacity', '0.5')
        $('.talk_0').removeClass('talk_0').addClass('talk_0_')
        $(this).fadeIn(1000, function () {
            var record_next = JSON.parse($(this).attr('data-next'))
            if (record_next.length) {
                write_talk(record_next, cur_avatar)
            } else if (cur_tnext.length) {
                var temp = cur_tnext
                cur_tnext = []
                write_talk(temp, cur_avatar)
            } else {
                $('.a_talk').render({
                    template: {
                        hr: '',
                        style: {
                            'width': '100%',
                            'height': '1px',
                            'background-color': '#27363E',
                            'margin-top': '15px',
                            'margin-bottom': '15px'
                        }
                    },
                })
            }
        })
    })

    function renderSVC(i) {
        var degenerate = {
            'CH': { [this_ver_chs]: 0 },
            'EN': { [this_ver_en]: 0 }
        }
        if (!_AvatarSkillPConfig[i].Ver) return {
            select: '',
            options: degenerate[lang]
        }
        var skillvers = Object.keys(_AvatarSkillPConfig[i].Ver).concat([0])
        if (!skillvers.length) return {
            select: '',
            options: degenerate[lang]
        }
        V = {
            'CH': [this_ver_chs, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
            'EN': [this_ver_en, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
        }
        var options = {}
        skillvers.forEach(function (k) {
            options[V[lang][parseInt(k)]] = parseInt(k)
        })
        return {
            select: '',
            options: options
        }
    }

    function renderSVW(wpn) {
        var i = wpn.EquipAffixID ? wpn.EquipAffixID : 111301
        return SVW(i)
    }

    function SVW(i) {
        var degenerate = {
            'CH': { [this_ver_chs]: 0 },
            'EN': { [this_ver_en]: 0 }
        }
        if (!_WeaponAffixPConfig[i]) return {
            select: '',
            options: degenerate[lang]
        }
        var skillvers = Object.keys(_WeaponAffixPConfig[i]).concat([0])
        if (!skillvers.length) return {
            select: '',
            options: degenerate[lang]
        }
        V = {
            'CH': [this_ver_chs, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
            'EN': [this_ver_en, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
        }
        var options = {}
        skillvers.forEach(function (k) {
            options[V[lang][parseInt(k)]] = parseInt(k)
        })
        return {
            select: '',
            options: options
        }
    }

    function popRelic() {
        poplayer({
            header: computer_.MiscText.Avatar_Relic[lang] + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '100%',
            template: [{
                table: [
                    {
                        thead: [{
                            tr: function (d) {
                                $(d.container).render({
                                    data: computer_.MiscText.Avatar_Relic_Header,
                                    template: {
                                        th: `[[${lang}]]`
                                    }
                                })
                            }
                        }],
                        class: 'relic-head'
                    },
                    {
                        tbody: function (d) {
                            $(d.container).render({
                                data: _RelicConfig,
                                template: {
                                    tr: [
                                        {
                                            td: `[[Name/${lang}]]`,
                                            style: {
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_4.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_2.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_5.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_1.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        },
                                        {
                                            td: {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_3.png'
                                                },
                                                style: {
                                                    height: '100px',
                                                    display: 'block',
                                                    margin: 'auto'
                                                }
                                            }
                                        },
                                    ],
                                    style: {
                                        cursor: 'pointer',
                                    },
                                    click: function (p) {
                                        cur_relic = p.org_data
                                        poplayer({
                                            header: cur_relic.Name[lang] + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang],
                                            width: '100%',
                                            data: cur_relic,
                                            template: [
                                                {
                                                    section: function (g) {
                                                        computer_.MiscText.Avatar_Relic_Pop_Header.forEach(function (txt, ind) {
                                                            $(g.container).render({
                                                                data: txt,
                                                                template: {
                                                                    span: `[[${lang}]]`,
                                                                    a: { 'data-id': ind },
                                                                    click: function (d) {
                                                                        if ($(d.sender).hasClass('active')) {
                                                                            return
                                                                        }
                                                                        var text = $(d.sender).attr('data-id');
                                                                        $(d.sender).addClass('active').siblings('span').removeClass('active');
                                                                        renderRelicPage(parseInt(text))
                                                                    }
                                                                }
                                                            })
                                                        })
                                                        $(g.container).find('span').eq(0).addClass('active');
                                                    },
                                                    class: 'r_select'
                                                },
                                                {
                                                    section: '',
                                                    class: 'r_data',
                                                    style: {
                                                        'justify-content': 'space-evenly',
                                                        'display': 'flex',
                                                        'flex-wrap': 'wrap'
                                                    }
                                                }
                                            ]
                                        });
                                        renderRelicPage(0)
                                    }
                                }
                            })
                        },
                    }
                ],
                class: 'relic-table',
            }]
        });
    }

    function renderRelicPage(k) {
        if (k) {
            renderRelicPage_(k)
        } else {
            $('.r_data').empty().render({
                template: [
                    {
                        div: [
                            {
                                div: {
                                    p: cur_relic.Name[lang]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: [
                                    {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_4.png',
                                        class: 'relic_image'
                                    },
                                    {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_2.png',
                                        class: 'relic_image'
                                    },
                                    {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_5.png',
                                        class: 'relic_image'
                                    },
                                    {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_1.png',
                                        class: 'relic_image'
                                    },
                                    {
                                        img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + '_3.png',
                                        class: 'relic_image'
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small_2'
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: (cur_relic.Skills[0] ? cur_relic.Skills[0].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[0] ? cur_relic.Skills[0].Skill[lang] : ''
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small_1',
                        when: cur_relic.Skills.length >= 1
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: (cur_relic.Skills[1] ? cur_relic.Skills[1].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[1] ? cur_relic.Skills[1].Skill[lang] : ''
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        when: cur_relic.Skills.length >= 2
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: (cur_relic.Skills[2] ? cur_relic.Skills[2].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[2] ? cur_relic.Skills[2].Skill[lang] : ''
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        when: cur_relic.Skills.length >= 3
                    },
                    {
                        div: [
                            {
                                div: {
                                    p: computer_.MiscText.Avatar_Weapon_Extra[lang]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    ul: {
                                        li: function (k) {
                                            return "<br>" + k.data[lang]
                                        },
                                        data: cur_relic.Extra
                                    },
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                    },
                ]
            })
        }
    }

    function ll(list_, i) {
        if (!list_.length) { return '' }
        if (i < list_.length) { return list_[i] }
        return list_[list_.length - 1]
    }

    function renderRelicPage_(k) {
        cur_story_ver = 0
        var l = ["_0", "_4", "_2", "_5", "_1", "_3"][k]
        $('.r_data').empty().render({
            template: [
                {
                    div: [
                        {
                            div: {
                                p: ll(cur_relic.Parts, k - 1)[lang]
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: {
                                img: imgpre + 'homdgcat-res/Relic/' + cur_relic.Icon + l + '.png',
                                style: {
                                    width: '100px',
                                }
                            },
                            class: 'a_section_content'
                        },
                    ],
                    class: 'a_section_small_1'
                },
                {
                    div: [
                        {
                            div: {
                                p: computer_.MiscText.Avatar_Weapon_Desc[lang]
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: {
                                p: ll(relic_story_cache[cur_relic.ID], k - 1).Desc[lang]
                            },
                            class: 'a_section_content'
                        },
                    ],
                    class: 'a_section_small_2',
                },
                {
                    div: [
                        {
                            div: {
                                p: computer_.MiscText.Avatar_Weapon_Story[lang]
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: [
                                {
                                    select: '',
                                    options: opt[ll(relic_story_cache[cur_relic.ID], k - 1).StoryCount][lang],
                                    class: 'cur_story_ver_select'
                                },
                            ],
                            class: 'a_section_content story_this'
                        },
                    ],
                    class: 'a_section',
                },
            ]
        })
        ll(relic_story_cache[cur_relic.ID], k - 1).Story.forEach(function (this_, ind_) {
            $('.story_this').render({
                template: {
                    span: "<br>" + this_[lang],
                    class: 'weapon_story weapon_story' + ind_,
                    style: {
                        display: 'none'
                    }
                },
            })
        })
        $('.weapon_story' + cur_story_ver).show()
    }

    function popWeapon(o) {
        poplayer({
            header: computer_.MiscText.Avatar_Weapon[o][lang] + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '100%',
            template: [{
                section: [
                    {
                        schedule: '5★',
                        a: {
                            'data-id': 5
                        },
                        class: 'active'
                    },
                    {
                        schedule: '4★',
                        a: {
                            'data-id': 4
                        }
                    },
                    {
                        schedule: '3★',
                        a: {
                            'data-id': 3
                        }
                    }
                ],
                class: 'weapon-rarity'
            }, {
                section: weaponResult(o, 5),
                class: 'weapon-result'
            }]
        });
    }

    function weaponResult(o, w) {
        return {
            table: [
                {
                    thead: [{
                        tr: function (d) {
                            $(d.container).render({
                                data: computer_.MiscText.Avatar_Weapon_Header,
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
                        _WeaponConfig.forEach(function (wpn) {
                            if (wpn.Type == o + 1 && wpn.Rank == w) {
                                $(d.container).render({
                                    data: wpn,
                                    template: {
                                        tr: [
                                            {
                                                td: function (k) {
                                                    rlname = k.data.Icons[0]
                                                    $(k.container).render({
                                                        template: {
                                                            img: imgpre + 'homdgcat-res/Weapon/' + rlname + '.png',
                                                            class: 'weaponpic'
                                                        }
                                                    })
                                                },
                                                style: {
                                                    padding: '0px'
                                                }
                                            },
                                            {
                                                td: function (k) {
                                                    rlname = k.data.Icons[1]
                                                    $(k.container).render({
                                                        template: {
                                                            img: imgpre + 'homdgcat-res/Weapon/' + rlname + '.png',
                                                            class: 'weaponpic'
                                                        }
                                                    })
                                                },
                                                style: {
                                                    padding: '0px'
                                                }
                                            },
                                            {
                                                td: `[[Name/${lang}]]`,
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: function (k) {
                                                    return k.data.Stat.toFixed(3)
                                                },
                                                style: {
                                                    'text-align': 'center'
                                                }
                                            },
                                            {
                                                td: function (p) {
                                                    promote_value = p.data.CustomStat
                                                    if (!p.data.Custom) {
                                                        return "-"
                                                    }
                                                    promote_config = computer_.AvatarCustomPromoteConfig[p.data.Custom]
                                                    if (promote_config.ShowType === "p") {
                                                        promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                                                    } else {
                                                        promote_value = promote_value.toFixed(1).toString()
                                                    }
                                                    return promote_value + " " + promote_config.Text[lang]
                                                },
                                                style: {
                                                    'padding': '0px 15px'
                                                }
                                            },
                                            {
                                                td: {
                                                    div: [
                                                        {
                                                            img: function (p) {
                                                                return imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + p.data.AscMatID + '.png'
                                                            },
                                                            style: {
                                                                height: '40px',
                                                                display: 'block',
                                                                margin: 'auto'
                                                            }
                                                        },
                                                        {
                                                            p: function (p) {
                                                                return computer_.AvatarNationConfig[weapon_asc[p.data.AscMatID][0]].Text[lang] + "<br>" + computer_.WeaponTalentConfig[weapon_asc[p.data.AscMatID][1]][lang]
                                                            },
                                                            style: {
                                                                'text-align': 'center',
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                td: {
                                                    div: [
                                                        {
                                                            img: function (p) {
                                                                return imgpre + 'homdgcat-res/monster/' + p.data.MonIcons[0] + '.png'
                                                            },
                                                            style: {
                                                                height: '60px'
                                                            }
                                                        },
                                                        {
                                                            img: function (p) {
                                                                return imgpre + 'homdgcat-res/monster/' + p.data.MonIcons[1] + '.png'
                                                            },
                                                            style: {
                                                                height: '60px'
                                                            }
                                                        },
                                                    ],
                                                    style: {
                                                        'width': '100%',
                                                        'display': 'flex',
                                                        'justify-content': 'space-evenly'
                                                    }
                                                }
                                            },
                                        ],
                                        style: {
                                            'cursor': 'pointer'
                                        },
                                        click: function () {
                                            if (click_cd) return
                                            click_cd = 1
                                            setTimeout(function () { click_cd = 0 }, 1500)
                                            renderWeaponInfo(wpn)
                                        }
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

    function renderWeaponInfo(wpn) {
        toggle_story = 0
        weapon_stat_ver = 0
        cur_story_ver = 0
        cur_weapon_affix_id = wpn.EquipAffixID
        cur_wpn = wpn
        var skill = _WeaponAffixConfig[wpn.EquipAffixID]
        cur_skill = skill
        poplayer({
            header: wpn.Name[lang] + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '100%',
            template: {
                section: skillTemplate(wpn, skill),
                style: {
                    'justify-content': 'space-evenly',
                    'display': 'flex',
                    'flex-wrap': 'wrap'
                },
                class: 'weapon_section'
            }
        });
        $('.stat_ver_choose_w select').val(weapon_stat_ver)
        load_weapon_story()
    }

    function skillTemplate(wpn, skill) {
        var upper = [
            {
                div: [
                    {
                        div: {
                            p: wpn.Name[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: [
                            {
                                img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons[0] + '.png',
                                style: {
                                    height: '100px',
                                    margin: 'auto'
                                }
                            },
                            {
                                img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons[1] + '.png',
                                style: {
                                    height: '100px',
                                    margin: 'auto'
                                }
                            }
                        ],
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section_small_1'
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Desc[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: [
                            {
                                p: wpn.Desc[lang]
                            },
                            {
                                button: computer_.MiscText.Avatar_Weapon_ToggleStory[toggle_story][lang],
                                a: {
                                    class: 'toggle_story_button'
                                },
                                when: wpn.StoryCount != 0
                            }
                        ],
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section_small_2'
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Story[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: '',
                        class: 'a_section_content story_this'
                    },
                ],
                class: 'a_section story',
                style: {
                    display: 'none'
                }
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Stats[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: [
                            {
                                p: function (k) {
                                    var st = wpn.Stat.toFixed(5)
                                    return computer_.MiscText.Avatar_Weapon_Stat_ATK[lang] + "<b>" + st + "</b>"
                                }
                            },
                            {
                                p: function (k) {
                                    promote_value = wpn.CustomStat
                                    if (!wpn.Custom) {
                                        return computer_.MiscText.Avatar_Weapon_Stat_Custom[lang] + "-"
                                    }
                                    promote_config = computer_.AvatarCustomPromoteConfig[wpn.Custom]
                                    if (promote_config.ShowType === "p") {
                                        promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                                    } else {
                                        promote_value = promote_value.toFixed(1).toString()
                                    }
                                    return computer_.MiscText.Avatar_Weapon_Stat_Custom[lang] + "<b>+" + promote_value + " " + promote_config.Text[lang] + "</b>"
                                }
                            }
                        ],
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section_small'
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_AscMat[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: [
                            {
                                p: computer_.AvatarNationConfig[weapon_asc[wpn.AscMatID][0]].Text[lang] + " / " + computer_.WeaponTalentConfig[weapon_asc[wpn.AscMatID][1]][lang],
                                style: {
                                    'padding-bottom': '10px'
                                }
                            },
                            {
                                img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + wpn.AscMatID + '.png',
                                style: {
                                    height: '60px',
                                    padding: '0px 10px'
                                }
                            },
                            {
                                a: function (k) {
                                    if (!wpn.MonIDs) return ''
                                    if (wpn.MonIDs.length <= 0) return ''
                                    return '/gi/monster?id=' + wpn.MonIDs[0] + '&level=93'
                                },
                                t: [
                                    {
                                        img: function (k) {
                                            if (!wpn.MonIcons) return imgpre + "homdgcat-res/monster/keq.png"
                                            if (wpn.MonIcons.length <= 0) return imgpre + "homdgcat-res/monster/keq.png"
                                            return imgpre + "homdgcat-res/monster/" + wpn.MonIcons[0] + ".png"
                                        },
                                        style: {
                                            width: '60px'
                                        }
                                    },
                                ],
                                attr: { target: '_blank' },
                                style: {
                                    padding: '0px 10px'
                                }
                            },
                            {
                                a: function (k) {
                                    if (!wpn.MonIDs) return ''
                                    if (wpn.MonIDs.length <= 1) return ''
                                    return '/gi/monster?id=' + wpn.MonIDs[1] + '&level=93'
                                },
                                t: [
                                    {
                                        img: function (k) {
                                            if (!wpn.MonIcons) return imgpre + "homdgcat-res/monster/keq.png"
                                            if (wpn.MonIcons.length <= 1) return imgpre + "homdgcat-res/monster/keq.png"
                                            return imgpre + "homdgcat-res/monster/" + wpn.MonIcons[1] + ".png"
                                        },
                                        style: {
                                            width: '60px'
                                        }
                                    },
                                ],
                                attr: { target: '_blank' },
                                style: {
                                    padding: '0px 10px'
                                }
                            },
                        ],
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section_small'
            },
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Extra[lang]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return "<br>" + k.data[lang]
                                },
                                data: wpn.Extra
                            },
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section',
                when: wpn.Extra.length
            },
        ]
        var ret = []
        if (weapon_stat_ver == 0) {
            var info = skill.Affix
        } else {
            var info = _WeaponAffixPConfig[wpn.EquipAffixID][weapon_stat_ver].Affix
        }
        info.forEach(function (t, i) {
            ret.push({
                div: [
                    {
                        div: [
                            {
                                span: wpn.EquipAffixName[lang] + " " + (i + 1),
                                style: {
                                    'margin-left': '0px',
                                    'margin-right': '5px',
                                }
                            },
                            {
                                span: renderSVW(wpn),
                                class: 'stat_ver_choose_w'
                            }
                        ],
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            p: t[lang]
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section'
            },)
        })
        return upper.concat(ret)
    }

    function calcstats(level, this_avatar) {

        if (!is_calc) {
            return ""
        }

        color0 = colors[this_avatar.Element]
        avatar_color = "<color style='color:" + color0 + "';><b>"

        var i = 0
        if (level < 20) {
            i = 0
        } else if (level == 20) {
            i = isp ? 0 : 1
        } else if (level > 20 && level < 40) {
            i = 1
        } else if (level == 40) {
            i = isp ? 1 : 2
        } else if (level > 40 && level < 50) {
            i = 2
        } else if (level == 50) {
            i = isp ? 2 : 3
        } else if (level > 50 && level < 60) {
            i = 3
        } else if (level == 60) {
            i = isp ? 3 : 4
        } else if (level > 60 && level < 70) {
            i = 4
        } else if (level == 70) {
            i = isp ? 4 : 5
        } else if (level > 70 && level < 80) {
            i = 5
        } else if (level == 80) {
            i = isp ? 5 : 6
        } else if (level > 80 && level <= 90) {
            i = 6
        }

        curve_id = this_avatar.Curve

        custominfo = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]

        var pmstat = _AvatarPromoteConfig[this_avatar._name].Promote

        hpcalc = computer_.AvatarCurveConfig[level][curve_id] * this_avatar.BaseStats.HP + pmstat[i].HP
        atkcalc = computer_.AvatarCurveConfig[level][curve_id] * this_avatar.BaseStats.ATK + pmstat[i].ATK
        defcalc = computer_.AvatarCurveConfig[level][curve_id] * this_avatar.BaseStats.DEF + pmstat[i].DEF
        customcalc = pmstat[i].Custom
        hpshow = avatar_color + hpcalc.toFixed(2) + "</b></color>"
        atkshow = avatar_color + atkcalc.toFixed(2) + "</b></color>"
        defshow = avatar_color + defcalc.toFixed(2) + "</b></color>"
        customshow = avatar_color + "+" + ((custominfo.ShowType == "p") ? ((customcalc * 100).toFixed(1) + "%") : customcalc.toFixed(1)) + "</b></color>"

        s = computer_.MiscText.Avatar_Stat_HP[lang] + hpshow + "<br>"
            + computer_.MiscText.Avatar_Stat_ATK[lang] + atkshow + "<br>"
            + computer_.MiscText.Avatar_Stat_DEF[lang] + defshow + "<br>"
            + custominfo.Text[lang] + ((lang == "CH") ? "：" : ": ") + customshow

        return s

    }

    $('body').on('change', 'input[name=level]', function () {
        var this_avatar = _AvatarInfoConfig[char_id_list[current_name]]
        cur_level = $('input[name=level]').val()
        if (cur_level > 0 && cur_level < 90) {
            $('.avatar_stat').html(calcstats(cur_level, this_avatar))
        }
    });

    $('body').on('click', '.weapon schedule', function () {
        o = $(this).attr('data-id') % 5
        popWeapon(o)
    });

    $('body').on('click', '.sort schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        var r = $(this).attr('data-id') % 5
        renderContent(r)
    });

    $('body').on('click', '.weapon-rarity schedule', function () {
        if ($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        var weapon_rarity = $(this).attr('data-id')
        $('.weapon-result').empty().render(weaponResult(o, weapon_rarity))
    })

    $('body').on('click', '.Norm', function (p) {
        console.log(1)
        poplayer({
            header: computer_.MiscText.Avatar_Norm_Title[lang] + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '70%',
            class: 'norm',
            template: [{
                p: computer_.MiscText.Avatar_Norm_Info[lang],
                style: {
                    'line-height': 2,
                }
            }]
        });
    })

    $('body').on('change', '.stat_ver_choose select', function () {
        avatar_stat_ver = $(this).val()
        $('select').val(avatar_stat_ver)
        renderInfo(current_name, current_type)
    })

    $('body').on('change', '.stat_ver_choose_w select', function () {
        weapon_stat_ver = $(this).val()
        $('select').val(weapon_stat_ver)
        $('.weapon_section').empty().render(skillTemplate(cur_wpn, cur_skill))
        $('select').val(weapon_stat_ver)
    })

    $('body').on('click', '.toggle_story_button', function () {
        toggle_story = 1 - toggle_story
        if (toggle_story) {
            $('.story').show()

        } else {
            $('.story').hide()
        }
        $('.toggle_story_button').html(computer_.MiscText.Avatar_Weapon_ToggleStory[toggle_story][lang])
    })

    function load_weapon_story() {
        if (!cur_wpn.StoryCount) return
        $('.story_this').render({
            template: {
                select: '',
                options: opt[cur_wpn.StoryCount][lang],
                class: 'cur_story_ver_select'
            }
        })
        weapon_story_cache[cur_wpn.Story].forEach(function (this_, ind_) {
            $('.story_this').render({
                template: {
                    span: "<br>" + this_[lang],
                    class: 'weapon_story weapon_story' + ind_,
                    style: {
                        display: 'none'
                    }
                },
            })
        })
        $('.weapon_story' + cur_story_ver).show()
    }

    $('body').on('change', '.cur_story_ver_select', function () {
        cur_story_ver = parseInt($(this).val())
        $('.weapon_story').hide()
        $('.weapon_story' + cur_story_ver).show()
    })

    $('body').on('click', '.avatar_mat_1', function () {
        popMat($(this).attr('data-id').toString())
    })

    $('body').on('click', '.avatar_mat_2 .img_2, .avatar_mat_2 p', function () {
        popMat($(this).parent().attr('data-id').toString())
    })

    $('body').on('click', '.asc_button', function () {
        popASC_pre($(this).attr('data-id').toString(), $(this).attr('data-ic').toString(), $(this).attr('data-ib').toString())
    })

    function popMat(matid) {
        var mat = _MaterialConfig[matid]
        if (!mat) return
        poplayer({
            header: mat.Text[lang].substring(0, mat.Text[lang].indexOf('<br>')) + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '100%',
            class: 'mat-pop',
            template: {
                div: [
                    {
                        img: imgpre + 'homdgcat-res/Mat/' + mat.Icon + ".png",
                        class: 'mat-img'
                    },
                    {
                        p: mat.Text[lang],
                        class: 'mat-name'
                    },
                    {
                        p: mat.Desc[lang],
                        class: 'mat-desc'
                    }
                ],
            }
        })
    }

    function popASC_pre(ascid, ascic, ascib) {
        var mat = acs_cache[ascid]
        if (!mat) return
        poplayer({
            header: ascib + computer_.MiscText.Avatar_Table_Title_Extra[lang],
            width: '100%',
            class: 'mat-pop',
            template: {
                div: [
                    {
                        img: imgpre + 'homdgcat-res/Avatar/' + ascic + ".png",
                        class: 'mat-img'
                    },
                    {
                        p: ascib,
                        class: 'mat-name_'
                    },
                    {
                        p: mat[lang],
                        class: 'mat-desc_'
                    }
                ],
            }
        })
    }

});