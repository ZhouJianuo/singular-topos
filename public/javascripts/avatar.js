$(function () {

    var ICON_NOT_SHOW = [95]

    var this_ver_ = ""
    var pop_ver = ""
    var ou1;
    var ou2;
    var showtop = 0

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
    var easymode = 0
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
                "Story 1": 0,
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

    var acs_notget = 1

    var rip = 0
    var lws = 0
    var rrp = 0

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Avatar_Title[lang] + "<color style='font-size: 28px;'><br><b>" + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
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

    cl_show = 0 
    if ($("#UPDATE").val()) cl_show = 1

    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/avatar_1.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        $.session.set('AvatarInfoConfig', JSON.stringify(__AvatarInfoConfig))

        a_2 = 0
        a_3 = 0
        a_4 = 0

        let script_2 = document.createElement('script')
        script_2.src = '/gi/' + lang3 + '/avatar_2.js'
        document.head.append(script_2)
        script_2.onload = function () {
            a_2 = 1
            let script_3 = document.createElement('script')
            script_3.src = '/gi/' + lang3 + '/avatar_3.js'
            document.head.append(script_3)
            script_3.onload = function () {
                a_3 = 1
                let script_4 = document.createElement('script')
                script_4.src = '/gi/' + lang3 + '/avatar_4.js'
                document.head.append(script_4)
                script_4.onload = function () {
                    a_4 = 1
                }
            }
        }

        this_ver_ = __AvatarInfoConfig[0].Note
        pop_ver = " " + this_ver_

        var cl_select = {}
        _changelog[0].Data.forEach(function (t, i) {
            cl_select[t.Ver] = i
        })

        $('container').render({
            template: {
                div: [
                    {
                        section: [
                            {
                                schedule: computer_.MiscText.Changelog[lang2],
                                click: function (p) {
                                    cl_show = 1 - cl_show
                                    if (cl_show) {
                                        $('.cl_all').show()
                                    } else {
                                        $('.cl_all').hide()
                                    }
                                },
                                style: {
                                    width: 'max-content',
                                    padding: '10px 20px',
                                    'font-weight': 'bold',
                                    border: '2px solid #df903b'
                                }
                            },
                        ],
                        class: 'cl'
                    },
                    {
                        div: [
                            {
                                div: {
                                    select: '',
                                    options: cl_select,
                                    style: {
                                        border: '2px solid black',
                                        'border-radius': '5px'
                                    }
                                },
                                class: 'changelog'
                            },
                            {
                                div: [],
                                class: 'cl_data',
                            }
                        ],
                        class: 'cl_all',
                        style: {
                            display: cl_show ? '' : 'none'
                        }
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
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Relic/UI_RelicIcon_10009_4.png'
                                },
                                click: function (p) {
                                    popRelic()
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Sword_Blunt.png'
                                },
                                click: function (p) {
                                    popWeapon(0)
                                    o = 0
                                },
                                a: {
                                    'data-id': 5
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Claymore_Oyaji.png'
                                },
                                click: function (p) {
                                    popWeapon(1)
                                    o = 1
                                },
                                a: {
                                    'data-id': 1
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Catalyst_Apprentice.png'
                                },
                                click: function (p) {
                                    popWeapon(2)
                                    o = 2
                                },
                                a: {
                                    'data-id': 2
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Pole_Rod.png'
                                },
                                click: function (p) {
                                    popWeapon(3)
                                    o = 3
                                },
                                a: {
                                    'data-id': 3
                                }
                            },
                            {
                                schedule: {
                                    img: imgpre + 'homdgcat-res/Weapon/UI_EquipIcon_Bow_Hunters.png'
                                },
                                click: function (p) {
                                    popWeapon(4)
                                    o = 4
                                },
                                a: {
                                    'data-id': 4
                                }
                            }
                        ],
                        class: 'generation'
                    },
                    {
                        hr: '',
                        style: {
                            margin: '20px 0px',
                        }
                    },
                    {
                        p: '+',
                        class: 'showtop',
                    },
                    {
                        section: [
                            {
                                schedule: computer_.MiscText.Avatar_Sort[0][lang2],
                                a: {
                                    'data-id': 5,
                                    'class': 'active'
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[4][lang2],
                                a: {
                                    'data-id': 4
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[1][lang2],
                                a: {
                                    'data-id': 1
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[2][lang2],
                                a: {
                                    'data-id': 2
                                }
                            },
                            {
                                schedule: computer_.MiscText.Avatar_Sort[3][lang2],
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

        renderCL($('.changelog select').val() || 0)

        $('.sort').hide()

        renderContent(0)

        $('.stat_ver_choose_w').empty().render(SVW(cur_weapon_affix_id))
        $('select').val(weapon_stat_ver)

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

        $('.avatar-area').remove()

        if (r == 4) {
            $('.content').render({
                div: computer_.MiscText.Avatar_Norm_Title[lang],
                class: 'Norm'
            })
        } else {
            $('.Norm').remove()
        }

        $('.content').render({
            div: {
                div: [
                    {
                        p: function (u) {
                            if (u.data.Version == 9.0) return '1.0'
                            return u.data.Version.toString()
                        },
                        style: {
                            'font-weight': 'bold'
                        }
                    },
                    {
                        img: imgpre + `homdgcat-res/Avatar/[[Icon]].png`,
                        class: 'avatar-head'
                    },
                    {
                        p: `[[Name]]`,
                        style: {
                            color: function (p) {
                                elem = computer_.ElemNameConfig[p.data.Element]
                                return colors[elem.Color]
                            },
                            'font-weight': 'bold'
                        },
                        class: 'avatar-name'
                    },
                    {
                        p: `[[Title]]`,
                        class: 'avatar-title',
                        when: r == 0
                    },
                    {
                        p: [
                            {
                                span: [
                                    {
                                        img: imgpre + 'homdgcat-res/AvatarSkill/_HP.png',
                                        class: 'avatar-staticon'
                                    },
                                    `[[ShowStats/HP]]`
                                ],
                                class: 'avatar-stat'
                            },
                            {
                                span: [
                                    {
                                        img: imgpre + 'homdgcat-res/AvatarSkill/_ATK.png',
                                        class: 'avatar-staticon'
                                    },
                                    `[[ShowStats/ATK]]`
                                ],
                                class: 'avatar-stat'
                            },
                            {
                                span: [
                                    {
                                        img: imgpre + 'homdgcat-res/AvatarSkill/_DEF.png',
                                        class: 'avatar-staticon'
                                    },
                                    `[[ShowStats/DEF]]`
                                ],
                                class: 'avatar-stat'
                            }
                        ],
                        when: r != 0
                    },
                    {
                        div: [
                            {
                                img: function (p) {
                                    avname = p.data.Element
                                    return imgpre + 'homdgcat-res/Csxylic/' + avname + '.png'
                                },
                                style: {
                                    width: '30%',
                                    'max-width': '48px',
                                    margin: '0px',
                                },
                            },
                            {
                                img: function (p) {
                                    avname = computer_.AvatarWeaponConfig[p.data.Weapon].EN
                                    switch (avname) {
                                        case 'Sword': 
                                            var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_01.png';
                                            break;
                                        case 'Claymore': 
                                            var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_04.png';
                                            break;
                                        case 'Catalyst': 
                                            var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_Catalyst_MD.png';
                                            break;
                                        case 'Polearm': 
                                            var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_03.png';
                                            break;
                                        case 'Bow': 
                                            var imgp = imgpre + 'homdgcat-res/AvatarSkill/Skill_A_02.png';
                                            break;
                                        default: 
                                            var imgp = imgpre + 'homdgcat-res/monster/keq.png';
                                            break;
                                    }
                                    return imgp
                                },
                                style: {
                                    width: '30%',
                                    'max-width': '48px',
                                    margin: '0px',
                                }
                            },
                        ],
                        when: r == 0,
                        style: {
                            display: 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap',
                            'margin-top': '10px',
                            'margin-bottom': '10px'
                        }
                    }
                ],
                class: 'avatar-card hover-shadow',
                data: _AvatarInfoConfig,
                click: function (p) {
                    cur_avatar_id = p.org_data._id
                    console.log(cur_avatar_id)
                    avatar_stat_ver = 0
                    is_calc = 1
                    talk_state = 0
                    poplayer({
                        header: '<span id="h_">' + p.org_data.Name + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang2] + '</span>',
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
                                            span: `[[${lang2}]]`,
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
                },
                a: {
                    'data-id': function (d) {
                        return d.data._id
                    },
                }
            },
            class: 'avatar-area'
        })

        if ($('#AVID').val()) {
            if ($('#AVID').val() == 'update' || $('#AVID').val() == 'change') {
                cl_show = 1
                $('.cl_all').show()
            }
            var come_id = $('#AVID').val().replaceAll('_', '').replaceAll(' ', '').replaceAll("-", "").replaceAll("'", "").replaceAll("·", "").toUpperCase()
            try {
                if ($("div[data-id='" + come_id + "']").length) {
                    $("div[data-id='" + come_id + "']").click()
                } else if (index_avatar[come_id]) {
                    $("div[data-id='" + index_avatar[come_id] + "']").click()
                }
            } catch (err) {}
            if (index_weapon[come_id] != undefined) {
                renderWeaponInfo(_WeaponConfig[index_weapon[come_id]])
            }
            if (index_relic[come_id] != undefined) {
                doRelic(_RelicConfig[index_relic[come_id]])
            }
            $('#AVID').val('')
        }
        
    }

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    function renderInfoPre(avatar, type) {

        clearInterval(rip)
        $('.lt').hide()

        if ((type == "Battle Skills") || (type == "Passive Skills") || (type == "Constellations") || (type == "In-Depth Data") || (type == "HomDGCat's Notes")) {
            if (a_2) {
                renderInfo(avatar, type)
            } else {
                $('.lt').show()
                rip = setInterval(function () {
                    if (a_2) {
                        $('.lt').hide()
                        renderInfo(avatar, type)
                        clearInterval(rip)
                    }
                }, 200)
            }
        } else if ((type == "Stories") || (type == "Voicelines")) {
            if (a_3) {
                renderInfo(avatar, type)
            } else {
                $('.lt').show()
                rip = setInterval(function () {
                    if (a_3) {
                        $('.lt').hide()
                        renderInfo(avatar, type)
                        clearInterval(rip)
                    }
                }, 200)
            }
        } else if ((type == "Teapot Talks") || (type == "Damage Data")) {
            if (a_4) {
                renderInfo(avatar, type)
            } else {
                $('.lt').show()
                rip = setInterval(function () {
                    if (a_4) {
                        $('.lt').hide()
                        renderInfo(avatar, type)
                        clearInterval(rip)
                    }
                }, 200)
            }
        } else {
            renderInfo(avatar, type)
        }
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

        var show_icon = true
        if (ICON_NOT_SHOW.includes(this_avatar._id)) {
            show_icon = false
        }

        var nation = computer_.AvatarNationConfig[this_avatar.Nation]
        var color1 = colors[nation.Color]

        var color0 = colors[this_avatar.Element]
        var avatar_color = "<color style='color:" + color0 + "';><b>"

        if (a_2) {
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
                if (Number.isInteger(skillconfig)) {
                    skillconfig = _AvatarSkillPConfig[avatar].Ver[skillconfig]
                } else if (skillconfig == "cur") {
                    skillconfig = _AvatarSkillConfig[avatar] ? _AvatarSkillConfig[avatar] : {
                        BattleSkills: [],
                        PassiveSkills: [],
                        Constellations: []
                    }
                }
            }
            var otherdata = _AvatarDataConfig[avatar] ? _AvatarDataConfig[avatar] : {
                BallList: [],
                EndureList: [],
                WindZoneList: [],
                OtherDataList: []
            }
        }

        if (a_3) {
            var fetters = _AvatarFetterConfig[this_avatar.Fetter] ? _AvatarFetterConfig[this_avatar.Fetter] : {
                StoryList: [],
                VoiceList: []
            }
        }

        if (a_4) {
            var damagedata = _AvatarAttackConfig[avatar] ? _AvatarAttackConfig[avatar] : {
                AttackList: []
            }
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
                                            return k.data.Name + (lang == "CH" ? " · " : " - ") + k.data.Title.replace("<br>", " / ")
                                        },
                                        style: {
                                            'text-align': 'center',
                                            'position': 'relative',
                                            'top': '9px',
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
                                            p: function (k) {
                                                return (k.data.Grade == 5) ? '★ ★ ★ ★ ★' : '★ ★ ★ ★'
                                            },
                                            style: {
                                                width: '100%',
                                                'text-align': 'center',
                                                'font-size': '20px'
                                            }
                                        },
                                        {
                                            img: function (k) {
                                                return imgpre + 'homdgcat-res/Gacha/' + k.data.Icon.replace("AvatarIcon", "Gacha_AvatarImg") + '.png'
                                            },
                                            class: 'gacha',
                                            when: function (k) {
                                                return k.data.Icon && !k.data.Icon.includes("Player")
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Desc
                                            },
                                            style: {
                                                'margin': '10px 0',
                                                'text-align': 'center'
                                            }
                                        },
                                        {
                                            div: [
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_HP.png'
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats.HP
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_ATK.png'
                                                        },
                                                        {
                                                            span: function (k) {
                                                                return k.data.ShowStats.ATK
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                                {
                                                    div: [
                                                        {
                                                            img: imgpre + 'homdgcat-res/Abyss/_DEF.png'
                                                        },
                                                        {
                                                            span: function (k) {
                                                                var custominfo_ = computer_.AvatarCustomPromoteConfig[this_avatar.CustomPromote]
                                                                var customcalc_ = _AvatarPromoteConfig[this_avatar._name].Promote[6].Custom
                                                                var customshow_ = avatar_color + "+" + ((custominfo_.ShowType == "p") ? ((customcalc_ * 100).toFixed(1) + "%") : customcalc_.toFixed(1)) + "</b></color>"
                                                                return k.data.ShowStats.DEF + '&nbsp;&nbsp;&nbsp;' + custominfo_.Text[lang3] + ' ' + customshow_
                                                            }
                                                        }
                                                    ],
                                                    class: 'addprop'
                                                },
                                            ],
                                            class: 'mon_head',
                                        }
                                    ],
                                    class: 'a_section_content',
                                    style: {
                                        'overflow': 'hidden'
                                    }
                                },
                            ],
                            class: 'a_section'
                        },
                        {
                            div: [
                                {
                                    div: [
                                        {
                                            div: [
                                                {
                                                    a: function (k) {
                                                        return '/gi/monster/' + k.data.CommonMat + '?level=93'
                                                    },
                                                    t: [
                                                        {
                                                            img: function (k) {
                                                                var mat = k.data.Pics[0]
                                                                if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                                return imgpre + "homdgcat-res/monster/" + mat + ".png"
                                                            },
                                                            style: {
                                                                'margin-right': '10px'
                                                            }
                                                        },
                                                    ],
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    a: function (k) {
                                                        return '/gi/item/' + k.data.CommonMatt + '?lang=' + lang3
                                                    },
                                                    t: {
                                                        img: function (k) {
                                                            var mat = _MaterialConfig[k.data.CommonMatt]
                                                            if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                        },
                                                        class: 'img_2'
                                                    },
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.CommonMatt]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text + '<br>x36 / x96 / x129'
                                                    }
                                                }
                                            ],
                                            class: 'avatar_mat'
                                        },
                                        {
                                            div: [
                                                {
                                                    a: function (k) {
                                                        return '/gi/item/' + k.data.SpecialityMat + '?lang=' + lang3
                                                    },
                                                    t: {
                                                        img: function (k) {
                                                            var mat = _MaterialConfig[k.data.SpecialityMat]
                                                            if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                        },
                                                    },
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.SpecialityMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text + '<br>x168'
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
                                                    a: function (k) {
                                                        return '/gi/item/' + k.data.TalentMatt + '?lang=' + lang3
                                                    },
                                                    t: {
                                                        img: function (k) {
                                                            var mat = _MaterialConfig[k.data.TalentMatt]
                                                            if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                        }
                                                    },
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.TalentMatt]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text.split("<br>")[0] + '<br>x9 / x63 / x114'
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
                                                        return '/gi/monster/' + k.data.BossMat + '?level=93'
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
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    a: function (k) {
                                                        return '/gi/item/' + k.data.AscMat + '?lang=' + lang3
                                                    },
                                                    t: {
                                                        img: function (k) {
                                                            var mat = _MaterialConfig[k.data.AscMat]
                                                            if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                        },
                                                        class: 'img_2'
                                                    },
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.AscMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text + '<br>x46'
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
                                                        if (k.data.WeeklyMat == 90201) return '/gi/monster/' + k.data.WeeklyMat + '?level=94'
                                                        return '/gi/monster/' + k.data.WeeklyMat + '?level=90'
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
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    a: function (k) {
                                                        return '/gi/item/' + k.data.WeekMat + '?lang=' + lang3
                                                    },
                                                    t: 
                                                    {
                                                        img: function (k) {
                                                            var mat = _MaterialConfig[k.data.WeekMat]
                                                            if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                        },
                                                        class: 'img_2'
                                                    },
                                                    attr: { target: '_blank' },
                                                    class: 'mat_a'
                                                },
                                                {
                                                    p: function (k) {
                                                        var mat = _MaterialConfig[k.data.WeekMat]
                                                        if (!mat) return ""
                                                        if (!mat.Text) return ""
                                                        return mat.Text + '<br>x18'
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
                                        'margin-top': '30px'
                                    }
                                },
                            ],
                            class: 'a_section',
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Stats[lang2]
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
                                                    button: computer_.MiscText.Avatar_IsPromote[0][lang2],
                                                    class: 'promote',
                                                    click: function () {
                                                        isp = 1 - isp
                                                        $('.promote').html(computer_.MiscText.Avatar_IsPromote[isp][lang2])
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
                                        p: computer_.MiscText.Avatar_BasicInfo_Info[lang2]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_1[lang2] + avatar_color + k.data.Constellation + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_2[lang2] + avatar_color + k.data.Birthday + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3_0[lang2] + "<color style='color:" + color1 + "';><b>" + nation.Text[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_1_3[lang2] + avatar_color + k.data.Belong + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_1[lang2] + avatar_color + k.data._CV._CH + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_2[lang2] + avatar_color + k.data._CV._EN + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_3[lang2] + avatar_color + k.data._CV._JP + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_2_4[lang2] + avatar_color + k.data._CV._KR + "</b></color>"
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
                                        p: computer_.MiscText.Avatar_BasicInfo_Battle[lang2]
                                    },
                                    class: 'a_section_head'
                                },
                                {
                                    div: [
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_1[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Name[lang] + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_2[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Endure + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_3[lang2] + avatar_color + (computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane1 / computer_.AvatarPoiseConfig[k.data.Poise].Poise.Wane2).toFixed(5).toString().replace('.00000', '').replace('000', '') + "</b></color>"
                                            }
                                        },
                                        {
                                            p: function (k) {
                                                return computer_.MiscText.Avatar_BasicInfo_Poise_4[lang2] + avatar_color + computer_.AvatarPoiseConfig[k.data.Poise].Poise.Recover + "</b></color>"
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
                                        p: _AvatarCostumeConfig[this_avatar._id] ? (_AvatarCostumeConfig[this_avatar._id].Namecard ? _AvatarCostumeConfig[this_avatar._id].Namecard.Name : '') : ''
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
                                                return imgpre + 'homdgcat-res/Avatar/' + k.data.Pic + '.png'
                                            },
                                            class: 'namecard',
                                        },
                                        {
                                            p: function (k) {
                                                return k.data.Desc
                                            },
                                            style: {
                                                'margin': '10px 0'
                                            }
                                        }
                                    ],
                                    class: 'a_section_content',
                                    data: _AvatarCostumeConfig[this_avatar._id] ? _AvatarCostumeConfig[this_avatar._id].Namecard : [],
                                    style: {
                                        'font-size': '16px'
                                    }
                                },
                            ],
                            class: 'a_section',
                            when: _AvatarCostumeConfig[this_avatar._id] ? _AvatarCostumeConfig[this_avatar._id].Namecard : false
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Costume[lang2]
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
                                                        return k.data.Name
                                                    },
                                                    style: {
                                                        'font-weight': 'bold'
                                                    }
                                                },
                                                {
                                                    button: computer_.MiscText.Avatar_Costume_Story[lang2],
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
                                                            return k.data.Name
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
                                                return k.data.Desc
                                            }
                                        }
                                    ],
                                    class: 'a_section_content',
                                    data: _AvatarCostumeConfig[this_avatar._id] ? _AvatarCostumeConfig[this_avatar._id].Costumes : [],
                                    style: {
                                        'font-size': '16px'
                                    }
                                },
                            ],
                            class: 'a_section',
                            when: _AvatarCostumeConfig[this_avatar._id] ? (_AvatarCostumeConfig[this_avatar._id].Costumes && _AvatarCostumeConfig[this_avatar._id].Costumes.length) : false
                        },
                    ]
                },
            }
        } else if (type == "Battle Skills") {
            dr = {
                "Battle Skills": [
                    {
                        div: {
                            div: [
                                {
                                    p: this_avatar.Name,
                                    style: {
                                        'text-align': 'center',
                                        margin: '0px auto 15px',
                                        width: '100%',
                                        color: color0,
                                        'font-weight': 'bold'
                                    }
                                },
                                {
                                    p: computer_.MiscText.Chart_Subtitle[lang],
                                    style: {
                                        margin: '-5px auto 15px',
                                        'font-size': '14px',
                                        'text-align': 'center',
                                        'color': '#f29e38',
                                        width: '100%',
                                        'font-weight': 'normal'
                                    }
                                },
                                {
                                    span: computer_.MiscText.StatVerChoose[lang]
                                },
                                {
                                    span: renderSVC(avatar),
                                    class: 'stat_ver_choose'
                                }
                            ],
                            class: 'a_section_head stat_ver_choose_wrap'
                        },
                        class: 'a_section'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                                },
                                                class: 'head_left',
                                                when: show_icon
                                            },
                                            {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                                },
                                                class: 'head_left',
                                                when: "Icon2"
                                            },
                                            {
                                                img: function (k) {
                                                    return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                                },
                                                class: 'head_left',
                                                when: "Icon3"
                                            },
                                            {
                                                p: function (k) {
                                                    return k.data.Name
                                                },
                                                a: {
                                                    class: function (k) {
                                                        if (!show_icon) return ''
                                                        if (k.data.Icon3) return 'head_right hr_3'
                                                        if (k.data.Icon2) return 'head_right hr_2'
                                                        return 'head_right hr_1'
                                                    }
                                                }
                                            },
                                        ],
                                        class: 'a_section_head head_withimg'
                                    },
                                    {
                                        div: [
                                            {
                                                p: function (k) {
                                                    return k.data.Desc
                                                }
                                            }
                                        ],
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
                                                            return s.data.Desc
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
                                                                        return this_level_desc ? (this_level_desc ? this_level_desc : this_level_desc) : s.data.ParamLevelList[total_lv - 1]
                                                                    },
                                                                    class: 'lv lv' + (i + 1).toString()
                                                                });
                                                            }
                                                            $(s.container).children().hide()
                                                            $(s.container).children('.lv' + active_lv).show()
                                                        },
                                                        style: {
                                                            'text-align': 'right',
                                                            width: 'max-content',
                                                            'margin-left': '5px'
                                                        },
                                                    }
                                                ],
                                                datapath: 'ParamDesc',
                                                class: 'param'
                                            },
                                            {
                                                div: [
                                                    {
                                                        span: computer_.MiscText.Avatar_ExtraParamName_Charge[lang2],
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
                                                            'height': '30px',
                                                            'margin-left': '5px'
                                                        }
                                                    },
                                                ],
                                                class: 'param'
                                            },
                                            {
                                                div: [
                                                    {
                                                        span: computer_.MiscText.Avatar_ExtraParamName_Lock[lang2],
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
                                                            'height': '30px',
                                                            'margin-left': '5px'
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
                        ],
                        data: skillconfig.BattleSkills,
                        style: {
                            margin: '0',
                            display: 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'space-evenly',
                            width: '100%'
                        }
                    },
                ],
            }
        } else if (type == "Passive Skills") {
            dr = {
                "Passive Skills": [
                    {
                        div: {
                            div: [
                                {
                                    p: this_avatar.Name,
                                    style: {
                                        'text-align': 'center',
                                        margin: '0px auto 15px',
                                        width: '100%',
                                        color: color0,
                                        'font-weight': 'bold'
                                    }
                                },
                                {
                                    p: computer_.MiscText.Chart_Subtitle[lang],
                                    style: {
                                        margin: '-5px auto 15px',
                                        'font-size': '14px',
                                        'text-align': 'center',
                                        'color': '#f29e38',
                                        width: '100%',
                                        'font-weight': 'normal'
                                    }
                                },
                                {
                                    span: computer_.MiscText.StatVerChoose[lang]
                                },
                                {
                                    span: renderSVC(avatar),
                                    class: 'stat_ver_choose'
                                }
                            ],
                            class: 'a_section_head stat_ver_choose_wrap'
                        },
                        class: 'a_section'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                        },
                                        class: 'head_left',
                                        when: show_icon
                                    },
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon2"
                                    },
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon3"
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Name
                                        },
                                        a: {
                                            class: function (k) {
                                                if (!show_icon) return ''
                                                if (k.data.Icon3) return 'head_right hr_3'
                                                if (k.data.Icon2) return 'head_right hr_2'
                                                return 'head_right hr_1'
                                            }
                                        }
                                    },
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: {
                                    p: function (k) {
                                        return k.data.Desc
                                    }
                                },
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        data: skillconfig.PassiveSkills,
                    },
                ],
            }
        } else if (type == "Constellations") {
            dr = {
                "Constellations": [
                    {
                        div: {
                            div: [
                                {
                                    p: this_avatar.Name,
                                    style: {
                                        'text-align': 'center',
                                        margin: '0px auto 15px',
                                        width: '100%',
                                        color: color0,
                                        'font-weight': 'bold'
                                    }
                                },
                                {
                                    p: computer_.MiscText.Chart_Subtitle[lang],
                                    style: {
                                        margin: '-5px auto 15px',
                                        'font-size': '14px',
                                        'text-align': 'center',
                                        'color': '#f29e38',
                                        width: '100%',
                                        'font-weight': 'normal'
                                    }
                                },
                                {
                                    span: computer_.MiscText.StatVerChoose[lang]
                                },
                                {
                                    span: renderSVC(avatar),
                                    class: 'stat_ver_choose'
                                }
                            ],
                            class: 'a_section_head stat_ver_choose_wrap'
                        },
                        class: 'a_section'
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon + '.png'
                                        },
                                        class: 'head_left',
                                        when: show_icon
                                    },
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon2 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon2"
                                    },
                                    {
                                        img: function (k) {
                                            return imgpre + 'homdgcat-res/AvatarSkill/' + k.data.Icon3 + '.png'
                                        },
                                        class: 'head_left',
                                        when: "Icon3"
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Name
                                        },
                                        a: {
                                            class: function (k) {
                                                if (!show_icon) return ''
                                                if (k.data.Icon3) return 'head_right hr_3'
                                                if (k.data.Icon2) return 'head_right hr_2'
                                                return 'head_right hr_1'
                                            }
                                        }
                                    },
                                ],
                                class: 'a_section_head head_withimg'
                            },
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data.Desc
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        data: skillconfig.Constellations,
                    },
                ],
            }
        } else if (type == "Damage Data") {
            dr = {
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
                                                        th: `[[${lang2}]]`
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
                                                        td: `[[Skill]]`
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
                                                        td: `[[AtkTag]]`
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
                                                        td: `[[AttTag]]`
                                                    },
                                                    {
                                                        td: `[[AttGrp]]`
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
            }
        } else if (type == "In-Depth Data") {
            dr = {
                "In-Depth Data": {
                    data: otherdata,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Ball[lang2]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head ml_b'
                                },
                                {
                                    div: {
                                        table: {
                                            tr: [
                                                {
                                                    td: `[[When]]`,
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
                            class: 'a_section_small',
                            style: {
                                position: 'relative'
                            }
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Endure[lang2]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head ml_e'
                                },
                                {
                                    div: {
                                        table: {
                                            tr: [
                                                {
                                                    td: `[[Skill]]`,
                                                    width: '75%'
                                                },
                                                {
                                                    td: function (d) {
                                                        return d.data.Endure.toString()
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
                            class: 'a_section_small',
                            style: {
                                position: 'relative'
                            }
                        },
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_WindZone[lang2]
                                    },
                                    style: {
                                        color: color0
                                    },
                                    class: 'a_section_head ml_w'
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
                                                                th: `[[${lang2}]]`,
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
                                                                    td: `[[Skill]]`
                                                                },
                                                                {
                                                                    td: `[[Target]]`
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
                            class: 'a_section',
                            style: {
                                position: 'relative'
                            }
                        },
                    ]
                },
            }
        } else if (type == "HomDGCat's Notes") {
            dr = {
                "HomDGCat's Notes": {
                    data: otherdata,
                    template: [
                        {
                            div: [
                                {
                                    div: {
                                        p: computer_.MiscText.Avatar_Data_Other[lang2]
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
                                                return "<br>" + k.data
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
            }
        } else if (type == "Stories") {
            dr = {
                "Stories": [
                    {
                        div: [
                            {
                                div: [
                                    {
                                        p: function (k) {
                                            return k.data.Title
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
                                            return k.data
                                        },
                                        datapath: 'Tips',
                                        style: {
                                            'font-size': '15px',
                                            'color': '#ffcc44',
                                        }
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Content
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section',
                        data: fetters.StoryList,
                    }
                ],
            }
        } else if (type == "Voicelines") {
            dr = {
                "Voicelines": [
                    {
                        div: [
                            {
                                div: {
                                    p: function (k) {
                                        return k.data.Title
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
                                            return k.data
                                        },
                                        datapath: 'Tips',
                                        style: {
                                            'font-size': '15px',
                                            'color': '#ffcc44',
                                        }
                                    },
                                    {
                                        p: function (k) {
                                            return k.data.Content
                                        }
                                    },
                                ],
                                class: 'a_section_content'
                            },
                        ],
                        class: 'a_section_small',
                        data: fetters.VoiceList,
                    }
                ],
            }
        } else {
            dr = {
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
                            button: computer_.MiscText.TalkTip[lang2],
                            class: 'reset_talk_',
                            when: !talk_state
                        },
                        {
                            button: computer_.MiscText.ResetTalk[lang2],
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
        $(this).html(computer_.MiscText.TalkTip[lang2])
        $(this).removeClass('reset_talk').addClass('reset_talk_')
        $('.a_talk').empty()
        init_talk(_AvatarTeapotTalkList[cur_avatar._id], cur_avatar)
    })

    $('body').on('click', '.talk_2', function () {
        talk_state = 1
        $('.reset_talk_').html(computer_.MiscText.ResetTalk[lang2])
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
                show_text = "<color style='color:" + computer_.TextColorConfig[this_avatar.Element] + ";'>" + this_avatar.Name + ((lang == "CH") ? '：' : ': ') + '</color>'
            } else {
                show_text = ''
            }
            $('.a_talk').render({
                template: {
                    div: show_text + cur_avatar_talks[talk_id].Text,
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
                show_text = "<color style='color:" + computer_.TextColorConfig[this_avatar.Element] + ";'>" + this_avatar.Name + ((lang == "CH") ? '：' : ': ') + '</color>'
            } else {
                show_text = ''
            }
            nothas_traveller *= cur_avatar_talks[talk_id].Type
            $('.a_talk').render({
                template: {
                    div: show_text + cur_avatar_talks[talk_id].Text,
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
        var degenerate = { [this_ver_]: 0 }
        if (!_AvatarSkillPConfig[i].Ver) return {
            select: '',
            options: degenerate
        }
        var skillvers = Object.keys(_AvatarSkillPConfig[i].Ver).concat([0])
        if (!skillvers.length) return {
            select: '',
            options: degenerate
        }
        V = [this_ver_, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6']
        var options = {}
        skillvers.forEach(function (k) {
            options[V[parseInt(k)]] = parseInt(k)
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
        var degenerate = { [this_ver_]: 0 }
        if (!_WeaponAffixPConfig[i]) return {
            select: '',
            options: degenerate
        }
        var skillvers = Object.keys(_WeaponAffixPConfig[i].Ver).concat([0])
        if (!skillvers.length) return {
            select: '',
            options: degenerate
        }
        V = [this_ver_, 'v1', 'v2', 'v3', 'v4', 'v5', 'v6']
        var options = {}
        skillvers.forEach(function (k) {
            options[V[parseInt(k)]] = parseInt(k)
        })
        return {
            select: '',
            options: options
        }
    }

    function renderCL(v) {
        $('.cl_data').empty()
        _changelog[0].Data[v].Logs.forEach(function (t) {
            $('.cl_data').render({
                div: [
                    {
                        div: {
                            p: t.Name,
                            style: {
                                color: t.Color ? colors[t.Color] : ''
                            }
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return k.data
                                },
                                data: t.Notes,
                                style: {
                                    'margin-top': '10px'
                                }
                            },
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section'
            })
        })
    }

    $('body').on('change', '.changelog select', function () {
        renderCL($('.changelog select').val())
    })

    function popRelic() {
        poplayer({
            header: computer_.MiscText.Avatar_Relic[lang2] + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '100%',
            template: [{
                div: {
                    div: [
                        {
                            img: function (k) {
                                return imgpre + 'homdgcat-res/Relic/' + k.data.Icon + '_4.png'
                            },
                            class: 'relic-left'
                        },
                        {
                            div: {
                                p: function (k) {
                                    return k.data.Name
                                }
                            },
                            class: 'relic-right'
                        }
                    ],
                    class: 'relic-card hover-shadow',
                    data: _RelicConfig,
                    click: function (p) {
                        doRelic(p.org_data)
                    }
                },
                class: 'relic-area'
            }]
        });
    }

    function doRelic(cr) {
        cur_relic = cr
        poplayer({
            header: cr.Name + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '100%',
            data: cr,
            template: [
                {
                    section: function (g) {
                        computer_.MiscText.Avatar_Relic_Pop_Header.forEach(function (txt, ind) {
                            $(g.container).render({
                                data: txt,
                                template: {
                                    span: `[[${lang2}]]`,
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

    function renderRelicPage(k) {
        if (k) {
            renderRelicPage__(k)
        } else {
            $('.r_data').empty().render({
                template: [
                    {
                        div: [
                            {
                                div: {
                                    p: cur_relic.Name
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
                                    p: (cur_relic.Skills[0] ? cur_relic.Skills[0].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang2]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[0] ? cur_relic.Skills[0].Skill : ''
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
                                    p: (cur_relic.Skills[1] ? cur_relic.Skills[1].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang2]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[1] ? cur_relic.Skills[1].Skill : ''
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
                                    p: (cur_relic.Skills[2] ? cur_relic.Skills[2].Num : '') + computer_.MiscText.Avatar_Relic_Num[lang2]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    p: cur_relic.Skills[2] ? cur_relic.Skills[2].Skill : ''
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
                                    p: computer_.MiscText.Avatar_Weapon_Extra[lang2]
                                },
                                class: 'a_section_head'
                            },
                            {
                                div: {
                                    ul: {
                                        li: function (k) {
                                            return "<br>" + k.data
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

    function renderRelicPage__(k) {
        clearInterval(rrp)
        $('.lt').hide()
        if (a_3) {
            renderRelicPage_(k)
        } else {
            $('.lt').show()
            rrp = setInterval(function () {
                if (a_3) {
                    $('.lt').hide()
                    clearInterval(rrp)
                    renderRelicPage_(k)
                }
            }, 200)
        }
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
                                p: ll(cur_relic.Parts, k - 1)
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
                                p: computer_.MiscText.Avatar_Weapon_Desc[lang2]
                            },
                            class: 'a_section_head'
                        },
                        {
                            div: {
                                p: ll(relic_story_cache[cur_relic.ID], k - 1).Desc
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
                                p: computer_.MiscText.Avatar_Weapon_Story[lang2]
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
                    span: "<br>" + this_,
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
            header: computer_.MiscText.Avatar_Weapon[o][lang2] + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
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
            div: function (d) {
                _WeaponConfig.forEach(function (wpn) {
                    if (wpn.Type == o + 1 && wpn.Rank == w) {
                        $(d.container).render({
                            div: [
                                {
                                    img: function (k) {
                                        rlname = k.data.Icons[0]
                                        return imgpre + `homdgcat-res/Weapon/${rlname}.png`
                                    },
                                    style: {
                                        width: '50%',
                                        'min-width': '80px'
                                    }
                                },
                                {
                                    img: function (k) {
                                        rlname = k.data.Icons[1]
                                        return imgpre + `homdgcat-res/Weapon/${rlname}.png`
                                    },
                                    style: {
                                        width: '50%',
                                        'min-width': '80px'
                                    }
                                },
                                {
                                    p: `[[Name]]`,
                                    style: {
                                        'font-weight': 'bold'
                                    },
                                    class: 'avatar-name2'
                                },
                                {
                                    p: [
                                        {
                                            img: imgpre + 'homdgcat-res/AvatarSkill/_ATK.png',
                                            class: 'weapon-atk'
                                        },
                                        function (k) {
                                            return k.data.Stat.toFixed(0)
                                        }
                                    ],
                                    class: 'avatar-title2'
                                },
                                {
                                    p: function (p) {
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
                                        return "+" + promote_value + " " + promote_config.Text[lang]
                                    },
                                    class: 'avatar-title2'
                                },
                            ],
                            data: wpn,
                            class: 'avatar-card2 hover-shadow',
                            click: function () {
                                if (click_cd) return
                                click_cd = 1
                                setTimeout(function () { click_cd = 0 }, 1500)
                                renderWeaponInfo(wpn)
                            }
                        })
                    }
                })
            },
            class: 'avatar-area'
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
            header: '<span id="h_">' + wpn.Name + pop_ver + computer_.MiscText.Avatar_Table_Title_Extra[lang2] + '</span>',
            width: '100%',
            class: 'weapon_pop',
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
        show_num_0 = ''
        show_num_1 = ''
        show_num_2 = ''
        if (wpn.Rank == 3) {
            show_num_0 = 'x2 / x6 / x6 / x3'
            show_num_1 = 'x10 / x12 / x18'
            show_num_2 = 'x6 / x10 / x12'
        } else if (wpn.Rank == 4) {
            show_num_0 = 'x3 / x9 / x9 / x4'
            show_num_1 = 'x15 / x18 / x27            '
            show_num_2 = 'x10 / x15 / x18'
        } else {
            show_num_0 = 'x5 / x14 / x14 / x6'
            show_num_1 = 'x23 / x27 / x41'
            show_num_2 = 'x15 / x23 / x27'
        }
        var upper = [
            {
                div: [
                    {
                        div: {
                            p: wpn.Name
                        },
                        class: 'a_section_head',
                        style: {
                            'text-align': 'center'
                        }
                    },
                    {
                        div: [
                            {
                                div: [
                                    {
                                        img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons[0] + '.png',
                                        style: {
                                            width: '50%',
                                            margin: 'auto',
                                            'max-width': '160px'
                                        }
                                    },
                                    {
                                        img: imgpre + 'homdgcat-res/Weapon/' + wpn.Icons[1] + '.png',
                                        style: {
                                            width: '50%',
                                            margin: 'auto',
                                            'max-width': '160px'
                                        }
                                    },
                                ],
                                style: {
                                    'margin': 0,
                                    display: 'flex',
                                    'flex-wrap': 'wrap',
                                    'justify-content': 'center',
                                }
                            },
                            {
                                p: wpn.Desc,
                                style: {
                                    'text-align': 'center'
                                }
                            },
                        ],
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section_small_1',
                style: {
                    'background-color': 'white',
                    border: '2px solid #27363E',
                    color: 'black',
                }
            },
            {
                div: [
                    {
                        div: [
                            {
                                p: function (k) {
                                    var st = wpn.Stat.toFixed(0)
                                    var ret0 = "<b>" + st + "</b>"
                                    promote_value = wpn.CustomStat
                                    var ret1 = ""
                                    if (!wpn.Custom) {
                                        ret1 = "-"
                                    } else {
                                        promote_config = computer_.AvatarCustomPromoteConfig[wpn.Custom]
                                        if (promote_config.ShowType === "p") {
                                            promote_value = (promote_value * 100).toFixed(1).toString() + "%"
                                        } else {
                                            promote_value = promote_value.toFixed(1).toString()
                                        }
                                        ret1 = "<b>+" + promote_value + " " + promote_config.Text[lang3] + "</b>"
                                    }
                                    return ret0 + " / " + ret1
                                },
                                style: {
                                    'font-size': '1.2em',
                                    'text-align': 'center'
                                }
                            },
                            {
                                hr: '',
                                style: {
                                    'height': '1px',
                                    'margin-top': '15px'
                                }
                            },
                            {
                                p: computer_.AvatarNationConfig[weapon_asc[wpn.AscMatID][0]].Text[lang] + " / " + computer_.WeaponTalentConfig[weapon_asc[wpn.AscMatID][1]][lang],
                                style: {
                                    'padding-top': '15px',
                                    'text-align': 'center'
                                }
                            },
                            {
                                div: [
                                    {
                                        div: [
                                            {
                                                a: function (k) {
                                                    return '/gi/item/' + wpn.AscMatID + '?lang=' + lang3
                                                },
                                                t: {
                                                    img: imgpre + 'homdgcat-res/Mat/UI_ItemIcon_' + wpn.AscMatID + '.png',
                                                    style: {
                                                        width: '60px'
                                                    }
                                                },
                                                attr: { target: '_blank' },
                                                class: 'mat_a',
                                                style: {
                                                    padding: '0px 10px'
                                                }
                                            },
                                            {
                                                p: function (k) {
                                                    var mat = _MaterialConfig[wpn.AscMatID]
                                                    if (!mat) return ""
                                                    if (!mat.Text) return ""
                                                    return mat.Text + '<br>' + show_num_0
                                                }
                                            }
                                        ],
                                        class: 'avatar_mat'
                                    },
                                    {
                                        div: [
                                            {
                                                a: function (k) {
                                                    if (!wpn.MonIDs) return ''
                                                    if (wpn.MonIDs.length <= 0) return ''
                                                    return '/gi/monster/' + wpn.MonIDs[0] + '?level=93'
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
                                                class: 'mat_a',
                                                style: {
                                                    padding: '0px 10px'
                                                }
                                            },
                                            {
                                                a: function (k) {
                                                    return '/gi/item/' + wpn.MatIDs[0] + '?lang=' + lang3
                                                },
                                                t: {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[wpn.MatIDs[0]]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    },
                                                    class: 'img_2',
                                                    style: {
                                                        width: '60px'
                                                    }
                                                },
                                                attr: { target: '_blank' },
                                                class: 'mat_a'
                                            },
                                            {
                                                p: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[0]]
                                                    if (!mat) return ""
                                                    if (!mat.Text) return ""
                                                    return mat.Text + '<br>' + show_num_1
                                                }
                                            }
                                        ],
                                        class: 'avatar_mat'
                                    },
                                    {
                                        div: [
                                            {
                                                a: function (k) {
                                                    if (!wpn.MonIDs) return ''
                                                    if (wpn.MonIDs.length <= 0) return ''
                                                    return '/gi/monster/' + wpn.MonIDs[1] + '?level=93'
                                                },
                                                t: [
                                                    {
                                                        img: function (k) {
                                                            if (!wpn.MonIcons) return imgpre + "homdgcat-res/monster/keq.png"
                                                            if (wpn.MonIcons.length <= 0) return imgpre + "homdgcat-res/monster/keq.png"
                                                            return imgpre + "homdgcat-res/monster/" + wpn.MonIcons[1] + ".png"
                                                        },
                                                        style: {
                                                            width: '60px'
                                                        }
                                                    },
                                                ],
                                                attr: { target: '_blank' },
                                                class: 'mat_a',
                                                style: {
                                                    padding: '0px 10px'
                                                }
                                            },
                                            {
                                                a: function (k) {
                                                    return '/gi/item/' + wpn.MatIDs[1] + '?lang=' + lang3
                                                },
                                                t: {
                                                    img: function (k) {
                                                        var mat = _MaterialConfig[wpn.MatIDs[1]]
                                                        if (!mat) return imgpre + "homdgcat-res/monster/keq.png"
                                                        if (!mat.Icon) return imgpre + "homdgcat-res/monster/keq.png"
                                                        return imgpre + "homdgcat-res/Mat/" + mat.Icon + ".png"
                                                    },
                                                    class: 'img_2',
                                                    style: {
                                                        width: '60px'
                                                    }
                                                },
                                                attr: { target: '_blank' },
                                                class: 'mat_a'
                                            },
                                            {
                                                p: function (k) {
                                                    var mat = _MaterialConfig[wpn.MatIDs[1]]
                                                    if (!mat) return ""
                                                    if (!mat.Text) return ""
                                                    return mat.Text + '<br>' + show_num_2
                                                }
                                            }
                                        ],
                                        class: 'avatar_mat'
                                    },
                                ],
                                style: {
                                    display: 'flex',
                                    'flex-wrap': 'wrap',
                                    'justify-content': 'space-evenly',
                                }
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
                            p: computer_.MiscText.Avatar_Weapon_Extra[lang2]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            ul: {
                                li: function (k) {
                                    return "<br>" + k.data
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
        var lower = [
            {
                div: [
                    {
                        div: {
                            p: computer_.MiscText.Avatar_Weapon_Story[lang2]
                        },
                        class: 'a_section_head'
                    },
                    {
                        div: '',
                        class: 'a_section_content story_this'
                    },
                ],
                class: 'a_section story',
            },
        ]
        var ret = []
        if (weapon_stat_ver == 0) {
            var info = skill.Affix
        } else {
            var info = _WeaponAffixPConfig[wpn.EquipAffixID].Ver[weapon_stat_ver]
            if (Number.isInteger(info)) {
                info = _WeaponAffixPConfig[wpn.EquipAffixID].Ver[info].Affix
            } else if (info == "cur") {
                info = skill.Affix
            } else {
                info = info.Affix
            }
        }
        var info2 = []
        info.forEach(function (t) {
            if (t) info2.push(t)
        })
        info2.forEach(function (t, i) {
            ret.push({
                div: [
                    {
                        div: [
                            {
                                span: (info2.length == 1) ? (wpn.EquipAffixName) : (wpn.EquipAffixName + " " + (i + 1)),
                                style: {
                                    'margin-left': '0px',
                                    'margin-right': '15px',
                                }
                            },
                            {
                                span: renderSVW(wpn),
                                class: 'stat_ver_choose_w',
                                style: {
                                    'margin-left': '0px',
                                    'margin-right': '0',
                                    'margin-top': '3px'
                                }
                            }
                        ],
                        class: 'a_section_head'
                    },
                    {
                        div: {
                            p: t
                        },
                        class: 'a_section_content'
                    },
                ],
                class: 'a_section'
            },)
        })
        return upper.concat(ret, lower)
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

        s = computer_.MiscText.Avatar_Stat_HP[lang3] + hpshow + "<br>"
            + computer_.MiscText.Avatar_Stat_ATK[lang3] + atkshow + "<br>"
            + computer_.MiscText.Avatar_Stat_DEF[lang3] + defshow + "<br>"
            + custominfo.Text[lang3] + ((lang == "CH") ? "：" : ": ") + customshow

        return s

    }

    $('body').on('change', 'input[name=level]', function () {
        var this_avatar = _AvatarInfoConfig[char_id_list[current_name]]
        cur_level = $('input[name=level]').val()
        if (cur_level > 0 && cur_level < 90) {
            $('.avatar_stat').html(calcstats(cur_level, this_avatar))
        }
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
            header: computer_.MiscText.Avatar_Norm_Title[lang] + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '95%',
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
        $('#h_').html(_AvatarInfoConfig[char_id_list[current_name]].Name + " " + $('.stat_ver_choose select option:selected').html() + computer_.MiscText.Avatar_Table_Title_Extra[lang2])
    })

    $('body').on('change', '.stat_ver_choose_w select', function () {
        weapon_stat_ver = $(this).val()
        $('select').val(weapon_stat_ver)
        $('.weapon_section').empty().render(skillTemplate(cur_wpn, cur_skill))
        $('select').val(weapon_stat_ver)
        $('#h_').html(cur_wpn.Name + " " + $('.stat_ver_choose_w select option:selected').html() + computer_.MiscText.Avatar_Table_Title_Extra[lang2])
        load_weapon_story()
    })

    function load_weapon_story() {
        clearInterval(lws)
        $('.lt').hide()
        if (a_3) {
            load_weapon_story_()
        } else {
            lws = setInterval(function () {
                if (a_3) {
                    load_weapon_story_()
                    clearInterval(lws)
                }
            }, 200)
        }
    }

    function load_weapon_story_() {
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
                    span: "<br>" + this_,
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

    $('body').on('click', '.asc_button', function () {
        popASC_pre($(this).attr('data-id').toString(), $(this).attr('data-ic').toString(), $(this).attr('data-ib').toString())
    })

    function popASC_pre(ascid, ascic, ascib) {
        var mat = acs_cache[ascid]
        if (!mat) return
        poplayer({
            header: ascib + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '100%',
            class: 'mat-pop',
            template: {
                div: [
                    {
                        img: function (k) {
                            return imgpre + 'homdgcat-res/Gacha/' + ascic.replace("AvatarIcon", "Costume") + '.png'
                        },
                        class: 'gacha',
                    },
                    {
                        p: ascib,
                        class: 'mat-name_'
                    },
                    {
                        p: mat,
                        class: 'mat-desc_'
                    }
                ],
            }
        })
    }

    $('body').on('click', '.ml_b', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_Ball[lang2].replace("<color style='color:#dddddd;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Ball_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.ml_e', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_Endure[lang2].replace("<color style='color:#dddddd;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Endure_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.ml_w', function () {
        poplayer({
            header: computer_.MiscText.Avatar_Data_WindZone[lang2].replace("<color style='color:#dddddd;'>ⓘ</color> ", "") + computer_.MiscText.Avatar_Table_Title_Extra[lang2],
            width: '90%',
            template: {
                div: computer_.MiscText.Windzone_TUT[lang2].replace("\n", "<br>"),
                style: {
                    'margin-top': '20px',
                    'line-height': '2'
                },
                class: 'TUT_Text'
            },
            class: 'TUT'
        })
    })

    $('body').on('click', '.showtop', function () {
        showtop = 1 - showtop
        if (showtop) {
            $('.sort').show()
        } else {
            $('.sort').hide()
        }
    })

    $('body').on('click', '.title', function () {
        easymode = 1 - easymode
        if (!easymode) {
            $('.tlsub').show()
            $('.links').show()
        } else {
            $('.tlsub').hide()
            $('.links').hide()
        }
    })

});