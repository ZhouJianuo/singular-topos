var txt = {
    "Title": {
        "CH": "玉衡杯数据库",
        "EN": "HomDGCat Database"
    },
    "Affix": {
        "CH": " | <color style='color:#0066FF;'>homdgcat.wiki / bilibili@妮可少女</color>",
        "EN": " | <color style='color:#0066FF;'>homdgcat.wiki / X@homdgcat_</color>"
    },
    "Subtitle": {
        "CH": "<p>数据提供：<b>妮可少女 <a href='https://space.bilibili.com/3537104994831140' target='_blank'>(bilibili)</a> <a href='https://www.reddit.com/user/homdgcat/' target='_blank'>(Reddit)</a> <a href='https://www.twitter.com/homdgcat_' target='_blank'>(Twitter)</a></b></p>",
        "EN": "<p>Data by <b>HomDGCat: <a href='https://space.bilibili.com/3537104994831140' target='_blank'>(bilibili)</a> <a href='https://www.reddit.com/user/homdgcat/' target='_blank'>(Reddit)</a> <a href='https://www.twitter.com/homdgcat_' target='_blank'>(Twitter)</a></b></p>"
    },
    "ChooseTitle": {
        "CH": "（星穹铁道）",
        "EN": "(Star Rail)"
    },
    "Page": {
        "CH": "<p><b>【切换页面】</b></p>",
        "EN": "<p><b>[ Pages ]</b></p>",
    },
    "Home_Lang": {
        "CH": "<a href='/en'>Switch to English</a>",
        "EN": "<a href='/'>切换至中文</a>"
    },
    "Lang": {
        "CH": "<a href='?lang=EN'>Switch to English</a>",
        "EN": "<a href='?lang=CH'>切换至中文</a>"
    },
    "Home_Sections": [
        {
            "CH": "原神",
            "EN": "Genshin"
        },
        {
            "CH": "星穹铁道",
            "EN": "Star Rail"
        },
        {
            "CH": "简介",
            "EN": "About"
        },
    ],
    "About": {
        "CH": "玉衡杯数据库部分依托玉衡杯网站建立，数据由<b>妮可少女</b>提供",
        "EN": "HomDGCat Database (formerly Yuheng Cup Database) is built partly upon the site of Yuheng Cup, a Keqing-centered speedrunning contest held by Chinese Keqing players. The database is maintained by <b>HomDGCat</b>."
    },
    "About_2": {
        "CH": "若发现数据有误或有建议<br>↓<br><a href='https://space.bilibili.com/3537104994831140' target='_blank'>(bilibili)</a> <a href='https://www.reddit.com/user/homdgcat/' target='_blank'>(Reddit)</a> <a href='https://www.twitter.com/homdgcat_' target='_blank'>(Twitter)</a>",
        "EN": "If you spot errors or have suggestions<br>↓<br><a href='https://space.bilibili.com/3537104994831140' target='_blank'>(bilibili)</a> <a href='https://www.reddit.com/user/homdgcat/' target='_blank'>(Reddit)</a> <a href='https://www.twitter.com/homdgcat_' target='_blank'>(Twitter)</a>"
    },
    "DidYouKnow": {
        "CH": "小知识",
        "EN": "Did You Know?"
    },
    "Coming_Soon": {
        "CH": "敬请期待",
        "EN": "Coming Soon"
    },
    "Mon_Head": [
        {
            "CH": "数据",
            "EN": "Stats"
        },
        {
            "CH": "技能",
            "EN": "Skills"
        },
        {
            "CH": "伤害计算",
            "EN": "DMG Calculate"
        }
    ],
    "SkillPhase": [
        {
            "CH": "废弃",
            "EN": "Unused"
        },
        {
            "CH": "阶段一",
            "EN": "Phase 1"
        },
        {
            "CH": "阶段二",
            "EN": "Phase 2"
        },
        {
            "CH": "阶段三",
            "EN": "Phase 3"
        },
    ],
    "MonsterDMG": [
        {
            "CH": "敌方等级",
            "EN": "Enemy Level"
        },
        {
            "CH": "角色防御力",
            "EN": "Character DEF"
        },
        {
            "CH": "成长曲线",
            "EN": "Growth Curve"
        },
        {
            "CH": "精英组别",
            "EN": "Elite Group"
        },
    ],
    "MonsterDMG_CTRL": [
        {
            "CH": "计算",
            "EN": "Calculate"
        },
        {
            "CH": "重置",
            "EN": "Reset"
        },
    ],
    "MonsterDEF": [
        {
            "CH": "星穹铁道 · 防御力伤害乘区",
            "EN": "Star Rail - DEF Damage Multiplier"
        },
        {
            "CH": "原神 · 防御力伤害乘区",
            "EN": "Genshin - DEF Damage Multiplier"
        },
    ],
    "MonsterLowerStats": [
        {
            "CH": "数值",
            "EN": "Stats"
        },
        {
            "CH": "伤害抗性",
            "EN": "Damage RES"
        },
        {
            "CH": "状态抗性",
            "EN": "Debuff RES"
        }
    ],
    "Immune": {
        "CH": "<b>∞</b>",
        "EN": "<b>∞</b>"
    },
    "BaseStatInput": [
        {
            "CH": "等级",
            "EN": "Level"
        },
        {
            "CH": "成长曲线",
            "EN": "Curve"
        },
        {
            "CH": "精英组别",
            "EN": "Elite Group"
        },
    ]
}

var elemcolor = {
    "None": "ffffff",
    "Phys": "ffffff",
    "Elec": "ffacff",
    "Fire": "ff8877",
    "Ice": "8addff",
    "Wind": "97ffb7",
    "Quantum": "6e8de7",
    "Imaginary": "ffe779",
}

var elemlist = [
    "Phys",
    "Fire",
    "Elec",
    "Ice",
    "Wind",
    "Quantum",
    "Imaginary"
]


var debufflist = [
    {
        "ID": "CTRL",
        "Name": {
            "CH": "控制",
            "EN": "Control"
        },
        "Icon": ''
    },
    {
        "ID": "Frozen",
        "Name": {
            "CH": "冻结",
            "EN": "Frozen"
        },
        "Icon": ''
    },
    {
        "ID": "Entangle",
        "Name": {
            "CH": "纠缠",
            "EN": "Entanglement"
        },
        "Icon": ''
    },
    {
        "ID": "Confine",
        "Name": {
            "CH": "禁锢",
            "EN": "Imprisonment"
        },
        "Icon": ''
    },
    {
        "ID": "Burn",
        "Name": {
            "CH": "灼烧",
            "EN": "Burn"
        },
        "Icon": ''
    },
    {
        "ID": "Shock",
        "Name": {
            "CH": "触电",
            "EN": "Shock"
        },
        "Icon": ''
    },
    {
        "ID": "Wind",
        "Name": {
            "CH": "风化",
            "EN": "Wind Shear"
        },
        "Icon": ''
    }
]

var props = {
    "HP": {
        "CH": "生命值",
        "EN": "HP"
    },
    "ATK": {
        "CH": "攻击力",
        "EN": "ATK"
    },
    "DEF": {
        "CH": "防御力",
        "EN": "DEF"
    },
    "Stance": {
        "CH": "韧性",
        "EN": "Toughness"
    },
    "SPD": {
        "CH": "速度",
        "EN": "SPD"
    },
    "StatusRES": {
        "CH": "效果抵抗",
        "EN": "Effect RES"
    },
    "StatusProb": {
        "CH": "效果命中",
        "EN": "Effect Hit Rate"
    },
}

var links = [
    {
        "Name": {
            "CH": "怪物",
            "EN": "Monsters"
        },
        "Link" : "/mons"
    },
    /*{
        "Name": {
            "CH": "混沌回忆",
            "EN": "Memory of Chaos"
        },
        "Link" : "/chaos"
    },
    {
        "Name": {
            "CH": "虚构叙事",
            "EN": "Pure Fiction"
        },
        "Link" : "/fiction"
    }*/
]

function popLinks(l) {
    poplayer({
        header: '',
        class: 'yuhengcup',
        width: '85%',
        template: [
            {
                h3: txt.Title[l],
                style: {
                    color: '#27363E',
                    'margin-top': '15px',
                    'margin-bottom': '45px',
                    'font-size': '40px',
                }
            },
            {
                p: txt.ChooseTitle[l],
                style: {
                    color: '#27363E',
                    'margin-top': '-28px',
                    'margin-bottom': '22px',
                    'font-size': '23px',
                    'text-align': 'center'
                },
            },
            {
                section: function (g) {
                    $(g.container).render({
                        data: links,
                        template: {
                            schedule: {
                                a: `[[Link]]` + '?lang=' + l,
                                t: {
                                    span: `[[Name/${l}]]`,
                                    style: {
                                        'font-size': '19px',
                                        'margin': 'auto'
                                    }
                                },
                                style: {
                                    display: 'block'
                                }
                            },
                            style: {
                                'text-align': 'center',
                                padding: '10px 0px',
                                border: '1px solid #333',
                                'border-radius': '5px',
                                cursor: 'pointer',
                                margin: '5px',
                            }
                        }
                    })
                },
                style: {
                    display: 'flex',
                    'flex-wrap': 'wrap',
                    'justify-content': 'space-evenly',
                    width: '100%',
                    margin: '0px auto 60px'
                }
            }
        ]
    })
}