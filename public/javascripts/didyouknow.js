var didyouknow = [
    {
        "CH": "参量质变仪的冷却时间是597600秒（6天22小时）。",
        "EN": "Parametric Transformer's CD is 597600s (6d22h)."
    },
    {
        "CH": "菲谢尔元素爆发的无敌帧时长0.05秒，是全游戏最短。",
        "EN": "Fischl has a Burst Invincible Frame of 0.05s, the shortest in the game."
    },
    {
        "CH": "纳西妲的灭净三业是全角色唯一一个能给敌人施加非整数元素量附着的技能。",
        "EN": "Nahida's Tri-Karma Purification is the only character skill in the game capable of applying a non-integer GU of element to an opponent."
    },
    {
        "CH": "全游戏最高的敌方抗性（不算外界buff）是9950%，第二高是370%。猜猜是什么敌人和什么属性的抗性。",
        "EN": "The highest enemy RES (without external buffs) in the game is 9950%, and the second highest is 370%. Guess which enemy and which element it is."
    },
    {
        "CH": "风魔龙、丘丘王、无相之草的血量相同。",
        "EN": "Stormterror, Lawachurls and the Dendro Hypostasis have the same amount of HP."
    },
    {
        "CH": "血量最高的普通敌人是建造特化型机关，血量和圣骸兽相同。",
        "EN": "Construction Specialist Mek is the tankiest Normal Enemy, having the same amount of HP as Consecrated Beasts."
    },
    {
        "CH": "风元素角色的染色判定其实是对所有人进行一次攻击，包括我方角色。例如，迪卢克站在万叶的元素爆发领域内，可以自动触发命之座2。",
        "EN": "Anemo characters' Elemental Absorption skills decide which element to absorb by performing an attack on everything on field, including allies. For example, simply standing in Kazuha's Burst will automatically trigger Diluc's C2."
    },
    {
        "CH": "角色和敌人触发剧变反应的基础伤害是不一样的。例如，90级角色的超载基础伤害是2893.7，而90级敌人的超载基础伤害是2405.6。",
        "EN": "Characters' and enemies' reaction DMG use different scalings. For example, Lv90 characters' Overload base DMG is 2893.7, while Lv90 enemies' Overload base DMG is 2405.6."
    },
    {
        "CH": "身为凡人的愚人众·霜役人，血量比圣骸兽还要高。",
        "EN": "Fatui Frost Operatives, despite being ordinary humans, have more HP than Consecrated Beasts."
    },
    {
        "CH": "敌人获得过的最巨额的抗性提升是百人一揆活动的长时间不换队惩罚：敌人的全部抗性提升10000%。",
        "EN": "The highest RES boost enemies ever obtained was in the Hyakunin Ikki event: If you didn't switch teams for too long, enemies' all-type RES would increase by 10000%."
    },
    {
        "CH": "敌人造成的最高单次伤害是阿佩普的绿洲守望者的「末日的余波」：对600防御力的角色可以打出超过50000点的单次伤害。",
        "EN": "The highest single instance of DMG dealt by enemies is Guardian of Apep's Oasis's \"Aftershocks of the Apocalypse\". It can deal over 50,000 DMG to a 600 DEF character."
    },
    {
        "CH": "敌人是没有元素精通的，除了地方传奇·利亚姆——他有650元素精通，超载的伤害高达12153。",
        "EN": "Enemies do not have Elemental Mastery, except Local Legend: Liam. He has 650 Elemental Mastery, boosting his Overload DMG to as high as 12,153."
    },
    {
        "CH": "冰元素附着会使你的移动和攻击速度降低15%。但「凝结之冰」附着不会。",
        "EN": "Being affected by Cryo decreases your Attack SPD and Movement SPD by 15%, but being affected by Condensed Ice does not."
    },
    {
        "CH": "祭礼系列武器的技能在1.9秒内最多判定3次：不管角色的元素战技在1.9秒内命中了多少次，最多也只会进行3次重置CD的尝试。",
        "EN": "The skills of the Sacrificial Series weapons perform at most 3 checks within 1.9s. No matter how many hits your Elemental Skill made within 1.9s, it will only attempt to refresh your CD at most 3 times."
    },
    {
        "CH": "血量最低的*怪物*是飞萤，就算在渊月螺旋12-3也只有45956血。",
        "EN": "The *monster* with the least HP are the Cicins, having only 45,956 HP in Abyss 12-3."
    },
    {
        "CH": "一般的怪物在4人联机的世界里，生命值会变为原本的2.5倍，但也有例外。大部分周本的生命值在4人联机世界只会变为原本的1.75倍。",
        "EN": "Almost every monster's HP becomes 2.5 times its original HP in 4P multiplayer mode, but there are a few exceptions. Most Weekly Bosses' HP only increases to 1.75x."
    },
    {
        "CH": "海染砗磲套装效果最多记录30000点治疗量，对普通抗性的敌人理应打出30000*0.9*0.9=24300点伤害。但实际永远只会打出24299点伤害，猜猜为什么？",
        "EN": "Ocean-Hued Clam's 4-piece skill can record up to 30,000 total heal, and so dealing 30,000*0.9*0.9=24,300 DMG to an ordinary RES enemy. However, the actual DMG in game is always 24,299, do you know why?"
    },
    {
        "CH": "祸津御建鸣神命薙刀形态的三重祸眼，命中的数量越多伤害越低。命中一个，伤害倍率是133.3%；命中两个，是33.3%*2；命中三个，是13.3%*3。",
        "EN": "Boss Raiden Shogun's Triple Electroculi deals less DMG the more times they hit. Hitting once will deal 133.3% DMG; hitting twice will deal 33.3%*2 and hitting thrice will deal 13.3%*3."
    },
    {
        "CH": "冰炸药桶爆炸可以瞬间破完冰深渊法师的护盾。虽然爆炸是冰元素伤害，没有发生元素反应，但爆炸的伤害是钝击，可以通过削韧破除冻盾和岩盾。",
        "EN": "Cryo explosive barrels' explosion can actually destroy Cryo Abyss Mages' Ice shields. Although it deals Cryo DMG so no reaction occurs, the explosion is a Blunt Hit and thus can break Ice and Geo shields with Poise DMG."
    },
    {
        "CH": "",
        "EN": ""
    },
]