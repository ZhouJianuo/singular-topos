// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "Dainsleif",
            "ID": "1022",
            "Count": 183
        },
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 141
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 94
        },
        {
            "Name": "Yuehui",
            "ID": "12423",
            "Count": 19
        },
        {
            "Name": "Abyss Herald",
            "ID": "10916",
            "Count": 9
        },
        {
            "Name": "Katheryne",
            "ID": "2078",
            "Count": 8
        },
        {
            "Name": "Halfdan",
            "ID": "12424",
            "Count": 8
        },
        {
            "Name": "???",
            "ID": "",
            "Count": 8
        },
        {
            "Name": "Black Serpent Knight of Old",
            "ID": "12429",
            "Count": 5
        },
        {
            "Name": "Investigate",
            "ID": "12427",
            "Count": 2
        },
        {
            "Name": "Abyss Lector",
            "ID": "12425",
            "Count": 2
        }
    ],
    "Num": "Chapter II: Act IV",
    "Title": "Requiem of the Echoing Depths",
    "IT": "Traveler",
    "Tab": "",
    "Icon": "UI_ChapterIcon_Traveler",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 8004,
            "Name": "In the Depths, an Unexpected Reunion",
            "Desc": "Katheryne seems to have a new commission for you. Go check it out.",
            "Track": [
                8005
            ],
            "R": [
                108004
            ],
            "RP": [],
            "Sub": [
                800401,
                800402,
                800407,
                800406,
                800403,
                800405,
                800404
            ]
        },
        {
            "_id": 8005,
            "Name": "The Grave of the Guarded",
            "Desc": "You have an unexpected reunion with Dainsleif within The Chasm. After getting wind of the situation, you believe that this place must be intimately linked to the Abyss Order, and thus begin investigating...",
            "Track": [
                8006
            ],
            "R": [
                108005
            ],
            "RP": [],
            "Sub": [
                800501,
                800502,
                800503,
                800504,
                800520,
                800505,
                800506,
                800508,
                800509,
                800510,
                800511,
                800512,
                800513,
                800514,
                800516,
                800518,
                800515,
                800517,
                800519
            ]
        },
        {
            "_id": 8006,
            "Name": "Memories of Inteyvat",
            "Desc": "The Black Serpent Knights present here do not, in truth, mean you ill. They are simply driven by their remaining instincts to defend those hilichurls. After you discover some of the secrets of this strange city, the Black Serpent Knight Halfdan seems to have something to show you...",
            "Track": [
                8007
            ],
            "R": [
                108006
            ],
            "RP": [],
            "Sub": [
                800601,
                800602,
                800603,
                800612,
                800604,
                800605,
                800609,
                800610,
                800613,
                800611,
                800606,
                800614,
                800607,
                800608
            ]
        },
        {
            "_id": 8007,
            "Name": "The Black Serpent Knights' Glory",
            "Desc": "Dainsleif figures out the Abyss Order's plan from the twin's memories left within the Inteyvat flower. Now to see if you can stop them or not...",
            "Track": [],
            "R": [
                108007
            ],
            "RP": [],
            "Sub": [
                800701,
                800711,
                800702,
                800703,
                800713,
                800704,
                800705,
                800706,
                800707,
                800708,
                800712,
                800709,
                800710
            ]
        }
    ]
}

var _sq = {
    "800401": {
        "Desc": "Talk to Katheryne",
        "Talk": [
            [
                {
                    "N": "Katheryne",
                    "T": "Ah, Traveler. Right on cue, hehe."
                },
                {
                    "N": "_1005",
                    "T": "Hey Katheryne! Got any new commissions for us today? Also... how come you look so happy to see us? What have you done!?"
                },
                {
                    "N": "Katheryne",
                    "T": "I went to the shrine to draw a fortune slip earlier. The shrine maiden told me that \"it is the season for an unexpected reunion.\""
                },
                {
                    "N": "_1005",
                    "T": "Katheryne? Drawing fortune slips at the shrine? ...Is it just Paimon, or is that the most unusual thing ever!?"
                },
                {
                    "N": "_1005",
                    "T": "Wait, no, that's not the unusual part — we're in Liyue! You went to Inazuma and back in a single day!?"
                },
                {
                    "N": "Katheryne",
                    "T": "Hehe, even I have a private life, you know."
                },
                {
                    "N": "_1005",
                    "T": "Okay, so when you say \"unexpected reunion,\" you mean running into us, right?"
                },
                {
                    "N": "Katheryne",
                    "T": "Who can say? But the anticipation of knowing that an unexpected reunion is due is making me happy to see everyone I cross paths with today."
                },
                {
                    "N": "_1005",
                    "T": "Fair enough, even though we see each other pretty much every day... Whatever makes you happy."
                },
                {
                    "N": "_0",
                    "T": "An unexpected reunion..."
                },
                {
                    "N": "_0",
                    "T": "Perhaps..."
                },
                {
                    "N": "_1005",
                    "T": "#Wait, are you saying... Ohh, Paimon gets it, {NICKNAME}. Well, let's just hope the shrine maiden was right..."
                },
                {
                    "N": "_1005",
                    "T": "#Fingers crossed we find {F#him}{M#her}."
                },
                {
                    "N": "Katheryne",
                    "T": "I'm sorry... Did I say something I shouldn't have? You both seem a little down."
                },
                {
                    "N": "_1005",
                    "T": "Oh, it's nothing. Anyway, back to business. Do you have a new commission you want to give to us?"
                },
                {
                    "N": "Katheryne",
                    "T": "Yes, as a matter of fact, I do. This one is from a miner. It seems to be related to investigating The Chasm."
                },
                {
                    "N": "_1005",
                    "T": "Really? Does this mean The Chasm's not sealed off anymore?"
                },
                {
                    "N": "Katheryne",
                    "T": "I will leave the requester to fill you in on all the relevant details. His name is Yuehui, and he should be at The Chasm right now."
                },
                {
                    "N": "_1005",
                    "T": "Alright then, thanks Katheryne! We'll head there right away."
                },
                {
                    "N": "Katheryne",
                    "T": "Very well. Ad astra... abyssosque. Hmm, this time you are truly bound for the abyss. Good luck to you both."
                }
            ]
        ]
    },
    "800402": {
        "Desc": "Look for the miner who posted the commission at The Chasm",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Hi there! You must be \"Yuehui,\" right? We've been sent by the Adventurers' Guild."
                },
                {
                    "N": "Yuehui",
                    "T": "Ah, great, good to meet you. Yes, I was the one who posted that commission."
                },
                {
                    "N": "Yuehui",
                    "T": "Wait a second... You look kind of familiar. Are you a famous adventurer, or something?"
                },
                {
                    "N": "_0",
                    "T": "It's complicated."
                },
                {
                    "N": "_0",
                    "T": "Never mind that. Let's focus on the task at hand."
                },
                {
                    "N": "Yuehui",
                    "T": "Oh, uh, alright then. I'll start by introducing myself. I'm Yuehui, a miner, and I received a Mining Permit for The Chasm just recently. I have a handful of other guys in my crew."
                },
                {
                    "N": "_1005",
                    "T": "Seriously? They actually give permits out for The Chasm?"
                },
                {
                    "N": "Yuehui",
                    "T": "Yes, the folks over at Yujing Terrace finally came to their senses and are now allowing a limited amount of ore mining near the surface. We were among the first to gain approval."
                },
                {
                    "N": "Yuehui",
                    "T": "But some things have happened recently that put all the miners on edge."
                },
                {
                    "N": "_1005",
                    "T": "Really? What happened? We haven't heard anything."
                },
                {
                    "N": "Yuehui",
                    "T": "So... it's hard to say exactly how big of an issue it is. Could be something, could be nothing. The main thing is that it's just very... strange."
                },
                {
                    "N": "Yuehui",
                    "T": "While one of the miners was on a break, he suddenly noticed a few hilichurls walking his way. They seemed like they were in a daze or something."
                },
                {
                    "N": "Yuehui",
                    "T": "They walked right by him without giving him a single glance. They just made a beeline for the depths of The Chasm."
                },
                {
                    "N": "Yuehui",
                    "T": "After that, the miner started observing his surroundings more closely, and noticed the same thing happening time and time again."
                },
                {
                    "N": "_1005",
                    "T": "Hmm... are the hilichurls just curious? Maybe they just wanna take a peek inside..."
                },
                {
                    "N": "Yuehui",
                    "T": "Not likely. The strange part is that in all the time this miner has been watching the hilichurls..."
                },
                {
                    "N": "Yuehui",
                    "T": "...he's never seen any of them come back out."
                },
                {
                    "N": "Yuehui",
                    "T": "It seems to be a one-way trip. Once the hilichurls go in, they never emerge again."
                },
                {
                    "N": "Yuehui",
                    "T": "And it seems to be happening more and more frequently as of late."
                },
                {
                    "N": "Yuehui",
                    "T": "\"What are these hilichurls up to?\" \"What happens to them after they go inside?\" \"Is there a disaster brewing?\""
                },
                {
                    "N": "Yuehui",
                    "T": "These are the kinds of thoughts going through the guys' heads now. Everyone's driving themselves crazy worrying about it."
                },
                {
                    "N": "_1005",
                    "T": "Uhhh! Paimon's not surprised... Paimon feels spooked just hearing about it."
                },
                {
                    "N": "_0",
                    "T": "I don't dare imagine what's going on inside The Chasm..."
                },
                {
                    "N": "_0",
                    "T": "\"Strange\" is definitely the right word..."
                },
                {
                    "N": "Yuehui",
                    "T": "Exactly. The deepest fear is the fear of the unknown, you know? So we have to get to the bottom of it before everyone can put their minds at rest."
                },
                {
                    "N": "_1005",
                    "T": "Do we... do we really wanna take this commission? Um, thanks Mr. Miner, Sir, we need to consider it first—"
                },
                {
                    "N": "_0",
                    "T": "We'll take it."
                },
                {
                    "N": "_1005",
                    "T": "Hey! You could at least pretend to consider Paimon's opinion first!"
                },
                {
                    "N": "_0",
                    "T": "When strange things like this happen..."
                },
                {
                    "N": "_0",
                    "T": "I'm inclined to think the Abyss Order is involved."
                },
                {
                    "N": "_1005",
                    "T": "Oh, so that's where you're coming from. Hmm, well okay then, maybe we will find some clues about your twin."
                },
                {
                    "N": "_1005",
                    "T": "You'll really regret it if you don't go, huh?"
                },
                {
                    "N": "Yuehui",
                    "T": "So, what's your verdict? Will you take the commission? No pressure, but I gotta say... I'm not loving the prospect of my Mining Permit going to waste."
                },
                {
                    "N": "_1005",
                    "T": "Yup, we'll take it. We're kinda curious ourselves now, too."
                },
                {
                    "N": "Yuehui",
                    "T": "Great. You're doing me an enormous service here. Now, let me give you the rough location that the hilichurls keep heading to..."
                }
            ]
        ]
    },
    "800407": {
        "Desc": "Enter The Chasm: Underground Mines",
        "Step": "Small-scale mining operations have been approved at The Chasm. At Katheryne's introduction, a miner commissions you to investigate certain anomalies within The Chasm... But you'll need to find a way into The Chasm first.",
        "Talk": []
    },
    "800406": {
        "Desc": "",
        "Talk": []
    },
    "800403": {
        "Desc": "Go to the designated location to investigate",
        "Step": "Small-scale mining operations have been approved at The Chasm. At Katheryne's introduction, a miner commissions you to investigate certain anomalies within The Chasm.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "What the... It's a city?"
                },
                {
                    "N": "_1005",
                    "T": "A whole city that's... floating in the air... upside down!?"
                },
                {
                    "N": "_0",
                    "T": "I'm at a loss for words."
                },
                {
                    "N": "_0",
                    "T": "This is not what I was expecting..."
                },
                {
                    "N": "_1005",
                    "T": "#Just look at this place, {NICKNAME}... Doesn't it remind you of something?"
                },
                {
                    "N": "_1005",
                    "T": "Wait, what was it again..."
                },
                {
                    "N": "_0",
                    "T": "\"The Defiled Statue.\""
                },
                {
                    "N": "_1005",
                    "T": "Yes, that's it! It's just like that. Just as strange, just as upside-down, and just as spooky."
                },
                {
                    "N": "_1005",
                    "T": "In which case... Maybe whatever's going on in The Chasm really is connected to the Abyss Order."
                },
                {
                    "N": "_1005",
                    "T": "Oh, we gotta get to the bottom of this..."
                },
                {
                    "N": "_1005",
                    "T": "...Oh..."
                },
                {
                    "N": "Dainsleif",
                    "T": "..."
                },
                {
                    "N": "_0",
                    "T": "Dainsleif!?"
                },
                {
                    "N": "_0",
                    "T": "I was not expecting that."
                },
                {
                    "N": "Dainsleif",
                    "T": "The feeling is mutual. I certainly hadn't expected to meet you here, either."
                },
                {
                    "N": "_1005",
                    "T": "Long time no see, Dain... Wait, but how did you suddenly end up here in The Chasm?"
                },
                {
                    "N": "Dainsleif",
                    "T": "The Chasm? So, we're in the depths of The Chasm, are we. Interesting... This is one place where I have never set foot before."
                },
                {
                    "N": "_0",
                    "T": "I have a lot of questions for you."
                },
                {
                    "N": "Dainsleif",
                    "T": "I understand how you must feel. Last time, we met suddenly and parted hastily."
                },
                {
                    "N": "Dainsleif",
                    "T": "Now our paths cross again... Fate, it seems, owes you an explanation."
                },
                {
                    "N": "_0",
                    "T": "First, tell me what you're doing here."
                },
                {
                    "N": "_0",
                    "T": "What was going on with that portal just now?"
                },
                {
                    "N": "Dainsleif",
                    "T": "That much should be self-explanatory. I came upon the trail of another Abyss Herald recently, and began pursuing it."
                },
                {
                    "N": "Dainsleif",
                    "T": "Unfortunately, I got as far as cornering him before he resorted to the same trick that they all do..."
                },
                {
                    "N": "Dainsleif",
                    "T": "I was hot on his heels when I followed him through the portal, but as usual, it was to no avail. It took me to the wrong place."
                },
                {
                    "N": "_0",
                    "T": "So you had the same issue with the portal last time?"
                },
                {
                    "N": "_0",
                    "T": "#So you didn't actually catch up with my {F#brother}{M#sister} last time?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Correct. Based on my recent experiences, I can only conclude that the Abyss's portals are not simply pathways from point A to point B, but gateways to an entire network."
                },
                {
                    "N": "Dainsleif",
                    "T": "Where they emerge on the other side is their choice. It can be anywhere within the network."
                },
                {
                    "N": "_1005",
                    "T": "Sounds kinda similar to how Teleport Waypoints work..."
                },
                {
                    "N": "Dainsleif",
                    "T": "In short, though I was right behind your twin last time when I entered that portal, the next moment that I realized where I was..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...I was all alone, back in the ruins known as Stormterror's Lair."
                },
                {
                    "N": "_1005",
                    "T": "Oh yeah, about that — whatever happened to the eye of the first Field Tiller?"
                },
                {
                    "N": "Dainsleif",
                    "T": "It's in a safe place. You can be sure that I will learn the truth of the \"Loom of Fate\" operation sooner than it could ever fall into the Abyss Order's hands."
                },
                {
                    "N": "_0",
                    "T": "Why don't you tell me who you really are?"
                },
                {
                    "N": "_0",
                    "T": "Who is the \"Twilight Sword\"?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Hah. So that title stuck in your memory."
                },
                {
                    "N": "Dainsleif",
                    "T": "I by no means went out of my way to conceal it from you. It once stood for the glory of Khaenri'ah, but now..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...It is but a cruel joke. My curse to bear."
                },
                {
                    "N": "Dainsleif",
                    "T": "Twilight Sword was my title as captain of the Royal Guards when I witnessed the destruction of my entire homeland firsthand. I believe my reluctance to raise it in conversation is quite justified."
                },
                {
                    "N": "_1005",
                    "T": "#Sounds like your {F#brother}{M#sister} was right..."
                },
                {
                    "N": "_0",
                    "T": "#What is the history between you and my {F#brother}{M#sister}?"
                },
                {
                    "N": "_0",
                    "T": "What happened between you?"
                },
                {
                    "N": "Dainsleif",
                    "T": "We were travel partners."
                },
                {
                    "N": "Dainsleif",
                    "T": "We both partook in a painful journey of searching for our fate, but regrettably... we did not make it to the journey's end together."
                },
                {
                    "N": "_0",
                    "T": "The journey's end..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Before you continue questioning me, I ought to warn you..."
                },
                {
                    "N": "Dainsleif",
                    "T": "If my suspicions regarding the portal network are correct, then the fact that there is a portal leading here tells us that the Abyss Order has their eyes on this location."
                },
                {
                    "N": "_1005",
                    "T": "You mean the Abyss Order is plotting something here? Actually, Paimon and the Traveler suspected that, too."
                },
                {
                    "N": "Dainsleif",
                    "T": "I mean that it's highly likely that even as we speak, the Abyss Order is watching our every move."
                },
                {
                    "N": "_1005",
                    "T": "Uhh, don't say that! You're giving Paimon goosebumps!"
                },
                {
                    "N": "_0",
                    "T": "Let's go and investigate."
                },
                {
                    "N": "_0",
                    "T": "I'll trust you. For now."
                },
                {
                    "N": "Dainsleif",
                    "T": "Huh, a wise choice. There appears to be light from a fire coming from near that rocky wall. Let's take a look."
                }
            ]
        ]
    },
    "800405": {
        "Desc": "Go to the designated location to investigate",
        "Step": "Small-scale mining operations have been approved at The Chasm. At Katheryne's introduction, a miner commissions you to investigate certain anomalies within The Chasm... During your investigation, you encountered stones that bar the entrance to the caves. Time to find some way to clear them out.",
        "Tips": "Complete <color style='color:#00E1FFFF'>\"Chasm Spelunkers\"</color> and speak to <color style='color:#00E1FFFF'>Jinwu</color> at the <color style='color:#00E1FFFF'>campsite in The Chasm's Underground Mines</color> to accept and then complete <color style='color:#00E1FFFF'>\"The Heavenly Stone's Debris\"</color> to initiate this quest.",
        "Talk": [
            [
                {
                    "N": "Yuehui",
                    "T": "It took a huge amount of work to get this Mining Permit... I hope it was worth it. The rest is up to you."
                }
            ]
        ]
    },
    "800404": {
        "Desc": "Go to the designated location to investigate",
        "Step": "Small-scale mining operations have been approved at The Chasm. At Katheryne's introduction, a miner commissions you to investigate certain anomalies within The Chasm.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Is this where that miner guy wanted us to investigate?"
                },
                {
                    "N": "_1005",
                    "T": "#Just look at this place, {NICKNAME}... Doesn't it remind you of something?"
                },
                {
                    "N": "_1005",
                    "T": "Wait, what was it again..."
                },
                {
                    "N": "_0",
                    "T": "\"The Defiled Statue.\""
                },
                {
                    "N": "_1005",
                    "T": "Yes, that's it! It's just like that. Just as strange, just as upside-down, and just as spooky."
                },
                {
                    "N": "_1005",
                    "T": "In which case... Maybe whatever's going on in The Chasm really is connected to the Abyss Order."
                },
                {
                    "N": "_1005",
                    "T": "Oh, we gotta get to the bottom of this..."
                },
                {
                    "N": "_1005",
                    "T": "...Oh..."
                },
                {
                    "N": "Dainsleif",
                    "T": "..."
                },
                {
                    "N": "_0",
                    "T": "Dainsleif!?"
                },
                {
                    "N": "_0",
                    "T": "I was not expecting that."
                },
                {
                    "N": "Dainsleif",
                    "T": "The feeling is mutual. I certainly hadn't expected to meet you here, either."
                },
                {
                    "N": "_1005",
                    "T": "Long time no see, Dain... Wait, but how did you suddenly end up here in The Chasm?"
                },
                {
                    "N": "Dainsleif",
                    "T": "The Chasm? So, we're in the depths of The Chasm, are we. Interesting... This is one place where I have never set foot before."
                },
                {
                    "N": "_0",
                    "T": "I have a lot of questions for you."
                },
                {
                    "N": "Dainsleif",
                    "T": "I understand how you must feel. Last time, we met suddenly and parted hastily."
                },
                {
                    "N": "Dainsleif",
                    "T": "Now our paths cross again... Fate, it seems, owes you an explanation."
                },
                {
                    "N": "_0",
                    "T": "First, tell me what you're doing here."
                },
                {
                    "N": "_0",
                    "T": "What was going on with that portal just now?"
                },
                {
                    "N": "Dainsleif",
                    "T": "That much should be self-explanatory. I came upon the trail of another Abyss Herald recently, and began pursuing it."
                },
                {
                    "N": "Dainsleif",
                    "T": "Unfortunately, I got as far as cornering him before he resorted to the same trick that they all do..."
                },
                {
                    "N": "Dainsleif",
                    "T": "I was hot on his heels when I followed him through the portal, but as usual, it was to no avail. It took me to the wrong place."
                },
                {
                    "N": "_0",
                    "T": "So you had the same issue with the portal last time?"
                },
                {
                    "N": "_0",
                    "T": "#So you didn't actually catch up with my {F#brother}{M#sister} last time?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Correct. Based on my recent experiences, I can only conclude that the Abyss's portals are not simply pathways from point A to point B, but gateways to an entire network."
                },
                {
                    "N": "Dainsleif",
                    "T": "Where they emerge on the other side is their choice. It can be anywhere within the network."
                },
                {
                    "N": "_1005",
                    "T": "Sounds kinda similar to how Teleport Waypoints work..."
                },
                {
                    "N": "Dainsleif",
                    "T": "In short, though I was right behind your twin last time when I entered that portal, the next moment that I realized where I was..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...I was all alone, back in the ruins known as Stormterror's Lair."
                },
                {
                    "N": "_1005",
                    "T": "Oh yeah, about that — whatever happened to the eye of the first Field Tiller?"
                },
                {
                    "N": "Dainsleif",
                    "T": "It's in a safe place. You can be sure that I will learn the truth of the \"Loom of Fate\" operation sooner than it could ever fall into the Abyss Order's hands."
                },
                {
                    "N": "_0",
                    "T": "Why don't you tell me who you really are?"
                },
                {
                    "N": "_0",
                    "T": "Who is the \"Twilight Sword\"?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Hah. So that title stuck in your memory."
                },
                {
                    "N": "Dainsleif",
                    "T": "I by no means went out of my way to conceal it from you. It once stood for the glory of Khaenri'ah, but now..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...It is but a cruel joke. My curse to bear."
                },
                {
                    "N": "Dainsleif",
                    "T": "Twilight Sword was my title as captain of the Royal Guards when I witnessed the destruction of my entire homeland firsthand. I believe my reluctance to raise it in conversation is quite justified."
                },
                {
                    "N": "_1005",
                    "T": "#Sounds like your {F#brother}{M#sister} was right..."
                },
                {
                    "N": "_0",
                    "T": "#What is the history between you and my {F#brother}{M#sister}?"
                },
                {
                    "N": "_0",
                    "T": "What happened between you?"
                },
                {
                    "N": "Dainsleif",
                    "T": "We were travel partners."
                },
                {
                    "N": "Dainsleif",
                    "T": "We both partook in a painful journey of searching for our fate, but regrettably... we did not make it to the journey's end together."
                },
                {
                    "N": "_0",
                    "T": "The journey's end..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Before you continue questioning me, I ought to warn you..."
                },
                {
                    "N": "Dainsleif",
                    "T": "If my suspicions regarding the portal network are correct, then the fact that there is a portal leading here tells us that the Abyss Order has their eyes on this location."
                },
                {
                    "N": "_1005",
                    "T": "You mean the Abyss Order is plotting something here? Actually, Paimon and the Traveler suspected that, too."
                },
                {
                    "N": "Dainsleif",
                    "T": "I mean that it's highly likely that even as we speak, the Abyss Order is watching our every move."
                },
                {
                    "N": "_1005",
                    "T": "Uhh, don't say that! You're giving Paimon goosebumps!"
                },
                {
                    "N": "_0",
                    "T": "Let's go and investigate."
                },
                {
                    "N": "_0",
                    "T": "I'll trust you. For now."
                },
                {
                    "N": "Dainsleif",
                    "T": "Huh, a wise choice. There appears to be light from a fire coming from near that rocky wall. Let's take a look."
                }
            ]
        ]
    },
    "800501": {
        "Desc": "Investigate the ruins ahead and find a path",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "There are signs of hilichurl activity here. Could these be the hilichurls the requester was talking about?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Requester? ...In fact, hold on. You still haven't told me what you're doing here. I doubt that most travelers would have any reason to venture down this way."
                },
                {
                    "N": "_1005",
                    "T": "We took a commission from the Adventurers' Guild to investigate The Chasm. Apparently, a whole load of hilichurls have been gathering here, and the requester wants to know why."
                },
                {
                    "N": "_1005",
                    "T": "And now, it looks like we've finally found our first clue..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Do you want the answer?"
                },
                {
                    "N": "_1005",
                    "T": "Huh? You mean, you know something about this?"
                },
                {
                    "N": "Dainsleif",
                    "T": "As it happens, I do."
                },
                {
                    "N": "_0",
                    "T": "Huh? Did I miss something?"
                },
                {
                    "N": "_0",
                    "T": "Does this have anything to do with the upside-down city?"
                },
                {
                    "N": "Dainsleif",
                    "T": "It's understandable that you did not perceive anything unusual. What makes this place so strange is that..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...the environment here weakens the effect of the curse."
                },
                {
                    "N": "_1005",
                    "T": "The curse? Oh! Paimon remembers, last time you guys were saying that Khaenri'ah's people were cursed to immortality or something..."
                },
                {
                    "N": "Dainsleif",
                    "T": "For centuries, I have suffered daily from the curse that was laid upon me. But here... I suddenly feel a small amount of relief from this suffering."
                },
                {
                    "N": "Dainsleif",
                    "T": "And right here, right now, I can feel my body sending a strong message to me... It is telling me, \"stay.\""
                },
                {
                    "N": "_1005",
                    "T": "So this place weakens the curse? That's pretty incredible, but how?"
                },
                {
                    "N": "Dainsleif",
                    "T": "That I shall need to investigate. But to the best of my knowledge, the Abyss Order does not have the technology to achieve this."
                },
                {
                    "N": "_0",
                    "T": "So you're saying..."
                },
                {
                    "N": "_0",
                    "T": "The hilichurls that come here are also from..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Indeed. Do you know why hilichurls wear masks?"
                },
                {
                    "N": "_0",
                    "T": "I think so?"
                },
                {
                    "N": "_0",
                    "T": "I'm not sure..."
                },
                {
                    "N": "Dainsleif",
                    "T": "It's to hide their appearance, lest they catch sight of their reflection in a body of water..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Compared to how they remember themselves, it is a terrible sight to behold, one that causes them great despair."
                },
                {
                    "N": "_0",
                    "T": "So these hilichurls really are from..."
                },
                {
                    "N": "Dainsleif",
                    "T": "The curse of \"immortality\" denies death to those afflicted with it... and yet, it does not truly mean that they will never die."
                },
                {
                    "N": "_1005",
                    "T": "So you mean, there's a way to undo it?"
                },
                {
                    "N": "Dainsleif",
                    "T": "No. I mean that the body and soul will continue to be eroded until they are virtually nonexistent, even if \"death\" is not the form that this erosion takes."
                },
                {
                    "N": "Dainsleif",
                    "T": "When the hilichurls realize that the end is nigh for them, it seems their instinct is to seek out a calm and dark corner of the world in which to finally say goodbye to the centuries of suffering they have endured."
                },
                {
                    "N": "Dainsleif",
                    "T": "And of all the places they could lay down to rest, one that can ease the effects of their curse would surely be their first choice."
                },
                {
                    "N": "_1005",
                    "T": "Wow... That's so..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Conversation's over, brace yourselves!"
                },
                {
                    "N": "_1005",
                    "T": "Wh—What is it!?"
                },
                {
                    "N": "Dainsleif",
                    "T": "We're under attack."
                }
            ]
        ]
    },
    "800502": {
        "Desc": "Defeat the Black Serpent Knights",
        "Talk": []
    },
    "800503": {
        "Desc": "Talk to Dainsleif",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "What were those? And why did they attack us all of a sudden?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Black Serpent Knights. They once belonged to the Royal Guard of Khaenri'ah."
                },
                {
                    "N": "_1005",
                    "T": "Wait a second! Royal Guard? So... they used to be your troops!?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Yes, they were. But now, the curse engulfs them, and they fight with none of the honor they once had..."
                },
                {
                    "N": "_1005",
                    "T": "Because they've become pawns of the Abyss now?"
                },
                {
                    "N": "Dainsleif",
                    "T": "...Let's continue on."
                },
                {
                    "N": "_1005",
                    "T": "Wait, Dain..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Hmm?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Seems we missed one..."
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Wait, stand down. There's something different about this one..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...It's disappeared."
                },
                {
                    "N": "_1005",
                    "T": "What the heck? What was going on with that one? Was it trying to say something?"
                },
                {
                    "N": "Dainsleif",
                    "T": "(How is this possible... How could he have retained self-awareness for 500 years without... it?)"
                },
                {
                    "N": "Dainsleif",
                    "T": "(But more importantly, why did he seem so familiar...)"
                },
                {
                    "N": "_0",
                    "T": "Maybe he recognized you."
                },
                {
                    "N": "Dainsleif",
                    "T": "That would be a miraculous outcome indeed for a cataclysm that brought total doom and destruction... Or perhaps it was just a coincidence."
                },
                {
                    "N": "Dainsleif",
                    "T": "We should press onward, to the city."
                }
            ]
        ]
    },
    "800504": {
        "Desc": "Go to the entrance to the ruins",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Looks like there's a strange energy surrounding the city. We can't go any further."
                },
                {
                    "N": "_1005",
                    "T": "Guess there should be a mechanism or something around here, right? Traveler, looks like it's time to get into ruin-exploring mode!"
                },
                {
                    "N": "_0",
                    "T": "Puzzle time, huh."
                },
                {
                    "N": "_0",
                    "T": "I'll take a look around and see what I can find."
                },
                {
                    "N": "Dainsleif",
                    "T": "Don't waste your time."
                },
                {
                    "N": "_1005",
                    "T": "Huh...!?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Khaenri'ah's technology, Abyssal power... Two things I couldn't be more familiar with. They're just cheap tricks to me."
                },
                {
                    "N": "_1005",
                    "T": "Okay! So the Abyss Order really is trying to hide something here, right?"
                },
                {
                    "N": "_1005",
                    "T": "Hmm... Dain seems like he really understands what's going on here. No wonder the Abyss Order doesn't want him around."
                },
                {
                    "N": "_0",
                    "T": "Was this upside-down city built by Khaenri'ah?"
                },
                {
                    "N": "_0",
                    "T": "Was this upside-down city built by the Abyss Order?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Not necessarily. The closer we draw, the more I am inclined to conclude that these ruins belong to a more ancient civilization still."
                },
                {
                    "N": "Dainsleif",
                    "T": "The Abyss Order simply got to them before anyone else."
                },
                {
                    "N": "_1005",
                    "T": "Even older than Khaenri'ah? Whoa, Paimon can't even imagine back that far..."
                },
                {
                    "N": "Dainsleif",
                    "T": "That said, the architecture here does somewhat resemble that of Khaenri'ah... At least, it would if it were the other way up."
                },
                {
                    "N": "Dainsleif",
                    "T": "Let's head toward the light over there. Mind your footing on the way ahead. It's a long way down."
                }
            ]
        ]
    },
    "800520": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "So there's no Abyss Order secrets to be found here... Just a bunch of hilichurls nearing the end of their existence."
                },
                {
                    "N": "_1005",
                    "T": "We probably shouldn't disturb them."
                }
            ]
        ]
    },
    "800505": {
        "Desc": "Go to the lit room in the ruins",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Aah, Black Serpent Knights!"
                },
                {
                    "N": "_1005",
                    "T": "Is this where they're based? Or wait, are they guarding something here?"
                },
                {
                    "N": "Dainsleif",
                    "T": "We are likely drawing near to whatever the Abyss Order is trying to hide. Let's take them out first."
                }
            ]
        ]
    },
    "800506": {
        "Desc": "Defeat the Black Serpent Knights",
        "Talk": []
    },
    "800508": {
        "Desc": "Continue investigating the ruins",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Oh no, more Black Serpent Knights!"
                },
                {
                    "N": "Black Serpent Knight of Old",
                    "T": "!!!"
                },
                {
                    "N": "_1005",
                    "T": "Huh, they're not coming after us. Are they just trying to scare us off?"
                },
                {
                    "N": "_1005",
                    "T": "These knights seem like they're hiding something behind them..."
                },
                {
                    "N": "Black Serpent Knight of Old",
                    "T": "!!!"
                },
                {
                    "N": "Dainsleif",
                    "T": "Hold on, I think they..."
                },
                {
                    "N": "Black Serpent Knight of Old",
                    "T": "!!!"
                },
                {
                    "N": "_1005",
                    "T": "Aah, they're coming! Quick, get them!"
                }
            ]
        ]
    },
    "800509": {
        "Desc": "Defeat the Black Serpent Knights",
        "Talk": []
    },
    "800510": {
        "Desc": "Examine what the Black Serpent Knights were protecting",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Huh!? What's this?"
                },
                {
                    "N": "Dainsleif",
                    "T": "...So the Black Serpent Knights have nothing to do with the Abyss Order's secret. Huh, I should have guessed."
                },
                {
                    "N": "_1005",
                    "T": "So what exactly is going on with these hilichurls?"
                },
                {
                    "N": "Dainsleif",
                    "T": "As I said, for these hilichurls, the end is nigh."
                },
                {
                    "N": "_0",
                    "T": "The hilichurls are preparing to meet their end..."
                },
                {
                    "N": "_0",
                    "T": "\"End\"..."
                },
                {
                    "N": "Dainsleif",
                    "T": "They have grown old and fearful of the light, even become one with the darkness. And yet the curse continues to corrode them."
                },
                {
                    "N": "_1005",
                    "T": "But why would the Black Serpent Knights wanna stay here and guard them?"
                },
                {
                    "N": "Black Serpent Knight of Old",
                    "T": "!!!"
                },
                {
                    "N": "_1005",
                    "T": "Aah! More of them are closing in!"
                },
                {
                    "N": "Black Serpent Knight of Old",
                    "T": "!!!"
                },
                {
                    "N": "_0",
                    "T": "Let's try to avoid fighting them."
                },
                {
                    "N": "_0",
                    "T": "Fighting them is meaningless."
                },
                {
                    "N": "Halfdan",
                    "T": "!"
                },
                {
                    "N": "_1005",
                    "T": "...It's him! The guy that came out of nowhere and disappeared again!"
                },
                {
                    "N": "_1005",
                    "T": "And now they're retreating... Did he just order them to do that?"
                },
                {
                    "N": "Dainsleif",
                    "T": "...Halfdan?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "Whoa, whoa, what? You recognize him?"
                },
                {
                    "N": "Dainsleif",
                    "T": "...Could it be... If it's as I suspect, then this is a truly tragic state of affairs."
                },
                {
                    "N": "_1005",
                    "T": "Dain?"
                },
                {
                    "N": "Dainsleif",
                    "T": "You want to know why they were gathered here guarding the hilichurls, don't you?"
                },
                {
                    "N": "Dainsleif",
                    "T": "It's because as far as the Black Serpent Knights are concerned, they are simply doing their duty."
                },
                {
                    "N": "Dainsleif",
                    "T": "The one who ordered them to retreat just now... I suddenly recognized him. I knew him as a young man, an elite in the Royal Guard of old... His name is \"Halfdan.\""
                },
                {
                    "N": "_1005",
                    "T": "So he's from 500 years ago, too..."
                },
                {
                    "N": "Dainsleif",
                    "T": "To this day, I still remember the final orders I, the Twilight Sword, gave to Halfdan on the day of disaster in Khaenri'ah, before I made haste back to the palace..."
                },
                {
                    "N": "Dainsleif",
                    "T": "\"Inform all Black Serpent Knights to protect the people of Khaenri'ah at all costs.\""
                },
                {
                    "N": "Dainsleif",
                    "T": "Because we, of course, were royal guards. But this would mean nothing in the events that followed... Royals, gentry, common folk, these identities made no difference."
                },
                {
                    "N": "Dainsleif",
                    "T": "Against the might of the gods, the only identity that mattered was being from Khaenri'ah."
                },
                {
                    "N": "_0",
                    "T": "..."
                },
                {
                    "N": "Dainsleif",
                    "T": "These Black Serpent Knights have lost their intellect. But perhaps, in whatever remains of their minds, they are still protecting the people of Khaenri'ah."
                },
                {
                    "N": "Dainsleif",
                    "T": "If you see these ruins as Khaenri'ah in the throes of disaster, and these hilichurls as the people crying for help..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...then suddenly, I can make sense of what I'm hearing. Their growls are less of a threat and more of a warning."
                },
                {
                    "N": "_1005",
                    "T": "Then... what are they saying?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Though it is barely discernible, I can just about make it out. They keep repeating a word from the old language of Khaenri'ah... \"Run.\""
                },
                {
                    "N": "_0",
                    "T": "So they're not talking to us..."
                },
                {
                    "N": "_0",
                    "T": "So they're telling the hilichurls behind them to escape..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Even I have to admit, the fact their will is strong enough to survive 500 years of erosion... It is nothing short of a miracle born from hopelessness."
                },
                {
                    "N": "_1005",
                    "T": "Oh... So Paimon had them all wrong..."
                },
                {
                    "N": "Dainsleif",
                    "T": "It doesn't matter. Even I took them for enemies for a moment."
                },
                {
                    "N": "Dainsleif",
                    "T": "Let's keep heading toward the light at the top. I believe the Black Serpent Knights will no longer try to stop us."
                }
            ]
        ]
    },
    "800511": {
        "Desc": "Go to the chamber at the center of the ruins' summit",
        "Talk": []
    },
    "800512": {
        "Desc": "Go to the chamber at the center of the ruins' summit",
        "Talk": []
    },
    "800513": {
        "Desc": "Go to the chamber at the center of the ruins' summit",
        "Talk": []
    },
    "800514": {
        "Desc": "Go to the chamber at the center of the ruins' summit",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Hey look, there's no door sealing this room off. Looks like we can finally head to the room in the center."
                },
                {
                    "N": "_1005",
                    "T": "C'mon, let's go!"
                }
            ]
        ]
    },
    "800516": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Look, up there! A water pool!"
                },
                {
                    "N": "_1005",
                    "T": "Even the water pool is upside-down. Wow! This is a pretty amazing place."
                },
                {
                    "N": "_1005",
                    "T": "Dain, do you have any idea at all how it works?"
                },
                {
                    "N": "Dainsleif",
                    "T": "The pool must be part of the entire city structure, a relic of this ancient civilization."
                },
                {
                    "N": "Dainsleif",
                    "T": "And more importantly... it is the very thing that is weakening the curse."
                },
                {
                    "N": "Dainsleif",
                    "T": "Here, my whole body feels more at peace than it has in a long time. The effect is stronger here than it was before, and I think it's because that water pool has something akin to a cleansing effect."
                },
                {
                    "N": "_1005",
                    "T": "Cleansing? So that means... the water in that pool can wash away the curse for good?"
                },
                {
                    "N": "Dainsleif",
                    "T": "No. That would be impossible."
                },
                {
                    "N": "_1005",
                    "T": "How are you so sure?"
                },
                {
                    "N": "Dainsleif",
                    "T": "I have lived with this curse for 500 years, and I have been fully conscious the entire time... Suffice to say, no one understands the curse like I do."
                },
                {
                    "N": "Dainsleif",
                    "T": "It is a way of branding us at the level of the fate of the world itself. When a god applies a curse, it takes effect at a higher level of reality than the person themselves."
                },
                {
                    "N": "Dainsleif",
                    "T": "Even now, I can feel the curse slowly permeating my entire being, becoming part of me, slowly but surely replacing me."
                },
                {
                    "N": "Dainsleif",
                    "T": "Perhaps it may be possible to suppress the corrosive effect of the curse for a time, but cleansing it entirely..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Consider it tantamount to burning away an integral part of your body. It is not a process that one could ever hope to survive."
                },
                {
                    "N": "_1005",
                    "T": "Huh!? Cleansing the curse costs you your life? Whoa... An irreversible curse, Paimon can't even imagine..."
                },
                {
                    "N": "Dainsleif",
                    "T": "In any case, I can feel that the water's cleansing effect is not nearly potent enough. At most, it might suppress the curse but a little."
                },
                {
                    "N": "_1005",
                    "T": "Hmm? So what's that contraption there? It looks kinda out of place..."
                },
                {
                    "N": "_0",
                    "T": "An Abyss Order device?"
                },
                {
                    "N": "_0",
                    "T": "Perhaps it's the Abyss Order's secret."
                },
                {
                    "N": "Dainsleif",
                    "T": "Frankly, I have never seen a device of this design before either. It is not unreasonable to suspect that it could belong to the Abyss Order. But what could they be planning to do here..."
                },
                {
                    "N": "Investigate",
                    "T": "(*clunk* *clunk*...)"
                },
                {
                    "N": "_1005",
                    "T": "Yikes! That gave Paimon a fright... So all the doors are open now?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "Wah, Halfdan's back again..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Halfdan. Do you have something to say to me?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "He ran off... but he didn't disappear like last time!"
                },
                {
                    "N": "Dainsleif",
                    "T": "He's indicating that we should follow him. Are you coming?"
                },
                {
                    "N": "_0",
                    "T": "This could be a useful lead."
                },
                {
                    "N": "_0",
                    "T": "He doesn't seem to hold any malice toward us."
                },
                {
                    "N": "_1005",
                    "T": "True... So, uh... We going, then?"
                }
            ]
        ]
    },
    "800518": {
        "Desc": "",
        "Talk": []
    },
    "800515": {
        "Desc": "Go to the chamber at the center of the ruins' summit",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Look, up there! A water pool!"
                },
                {
                    "N": "_1005",
                    "T": "Even the water pool is upside-down. Wow! This is a pretty amazing place."
                },
                {
                    "N": "_1005",
                    "T": "Dain, do you have any idea at all how it works?"
                },
                {
                    "N": "Dainsleif",
                    "T": "The pool must be part of the entire city structure, a relic of this ancient civilization."
                },
                {
                    "N": "Dainsleif",
                    "T": "And more importantly... it is the very thing that is weakening the curse."
                },
                {
                    "N": "Dainsleif",
                    "T": "Here, my whole body feels more at peace than it has in a long time. The effect is stronger here than it was before, and I think it's because that water pool has something akin to a cleansing effect."
                },
                {
                    "N": "_1005",
                    "T": "Cleansing? So that means... the water in that pool can wash away the curse for good?"
                },
                {
                    "N": "Dainsleif",
                    "T": "No. That would be impossible."
                },
                {
                    "N": "_1005",
                    "T": "How are you so sure?"
                },
                {
                    "N": "Dainsleif",
                    "T": "I have lived with this curse for 500 years, and I have been fully conscious the entire time... Suffice to say, no one understands the curse like I do."
                },
                {
                    "N": "Dainsleif",
                    "T": "It is a way of branding us at the level of the fate of the world itself. When a god applies a curse, it takes effect at a higher level of reality than the person themselves."
                },
                {
                    "N": "Dainsleif",
                    "T": "Even now, I can feel the curse slowly permeating my entire being, becoming part of me, slowly but surely replacing me."
                },
                {
                    "N": "Dainsleif",
                    "T": "Perhaps it may be possible to suppress the corrosive effect of the curse for a time, but cleansing it entirely..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Consider it tantamount to burning away an integral part of your body. It is not a process that one could ever hope to survive."
                },
                {
                    "N": "_1005",
                    "T": "Huh!? Cleansing the curse costs you your life? Whoa... An irreversible curse, Paimon can't even imagine..."
                },
                {
                    "N": "Dainsleif",
                    "T": "In any case, I can feel that the water's cleansing effect is not nearly potent enough. At most, it might suppress the curse but a little."
                },
                {
                    "N": "_1005",
                    "T": "Hmm? So what's that contraption there? It looks kinda out of place..."
                },
                {
                    "N": "_0",
                    "T": "An Abyss Order device?"
                },
                {
                    "N": "_0",
                    "T": "Perhaps it's the Abyss Order's secret."
                },
                {
                    "N": "Dainsleif",
                    "T": "Frankly, I have never seen a device of this design before either. It is not unreasonable to suspect that it could belong to the Abyss Order. But what could they be planning to do here..."
                },
                {
                    "N": "Investigate",
                    "T": "(*clunk* *clunk*...)"
                },
                {
                    "N": "_1005",
                    "T": "Yikes! That gave Paimon a fright... So all the doors are open now?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "Wah, Halfdan's back again..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Halfdan. Do you have something to say to me?"
                },
                {
                    "N": "Halfdan",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "He ran off... but he didn't disappear like last time!"
                },
                {
                    "N": "Dainsleif",
                    "T": "He's indicating that we should follow him. Are you coming?"
                },
                {
                    "N": "_0",
                    "T": "This could be a useful lead."
                },
                {
                    "N": "_0",
                    "T": "He doesn't seem to hold any malice toward us."
                },
                {
                    "N": "_1005",
                    "T": "True... So, uh... We going, then?"
                }
            ]
        ]
    },
    "800517": {
        "Desc": "",
        "Talk": []
    },
    "800519": {
        "Desc": "",
        "Talk": []
    },
    "800601": {
        "Desc": "Go along the path that Halfdan has indicated",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Looks like Halfdan disappeared at the far end of this path..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Perhaps whatever lies ahead is what he wants us to see. Let's keep going."
                }
            ]
        ]
    },
    "800602": {
        "Desc": "Follow the path and continue exploring",
        "Talk": []
    },
    "800603": {
        "Desc": "Follow the path and continue exploring",
        "Talk": []
    },
    "800612": {
        "Desc": "",
        "Talk": []
    },
    "800604": {
        "Desc": "Head to the hilichurl camp",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "It's a humble hilichurl camp..."
                },
                {
                    "N": "_1005",
                    "T": "Oh, these hilichurls look like they're in pretty bad shape, too. Some of them look like they've already... taken their final breath..."
                },
                {
                    "N": "_1005",
                    "T": "Is this what Halfdan wanted to show us?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Whether it is or not, everything here is worth investigating in detail. Inspect the area. Leave no stone unturned."
                }
            ]
        ]
    },
    "800605": {
        "Desc": "Look for clues in the hilichurl camp",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "How did that flower get this far underground?"
                },
                {
                    "N": "_1005",
                    "T": "Did someone bring it in memory of the deceased hilichurls?"
                },
                {
                    "N": "_0",
                    "T": "I know this flower..."
                },
                {
                    "N": "_0",
                    "T": "I've seen this kind of flower before..."
                },
                {
                    "N": "_1005",
                    "T": "Hey, now that you mention it, Paimon thinks it looks kinda familiar, too..."
                },
                {
                    "N": "Dainsleif",
                    "T": "It is the national flower of Khaenri'ah: the \"Inteyvat.\" It once bloomed all over the nation."
                },
                {
                    "N": "Dainsleif",
                    "T": "It would only last two weeks before wilting. But if you were to pluck one and take it out of Khaenri'ah, the petals would stop growing and turn hard."
                },
                {
                    "N": "Dainsleif",
                    "T": "Only when it finally returned to its home soil would the petals grow soft once more, and finally turn to dust..."
                },
                {
                    "N": "Dainsleif",
                    "T": "So the Inteyvat is a symbol for a wanderer far from home, signifying the tenderness of the homeland."
                },
                {
                    "N": "_0",
                    "T": "#{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_Twins2Male|INFO_FEMALE_PRONOUN_Twins2Female]}"
                },
                {
                    "N": "_1005",
                    "T": "*gasp* So for this flower to get here, it must have been brought from..."
                },
                {
                    "N": "Abyss Herald",
                    "T": "Your Highness... so the proposal finally has your blessing?"
                },
                {
                    "N": "???",
                    "T": "In focusing single-mindedly on confronting the Heavenly Principles, we neglected our original mission: the revival of the homeland."
                },
                {
                    "N": "???",
                    "T": "I should not have been so indecisive."
                },
                {
                    "N": "Abyss Herald",
                    "T": "The device is almost ready. We await your command."
                },
                {
                    "N": "???",
                    "T": "What are the chances of succeeding?"
                },
                {
                    "N": "Abyss Herald",
                    "T": "Theoretically speaking... approximately—"
                },
                {
                    "N": "???",
                    "T": "Forget it. Even a one-percent chance is enough..."
                },
                {
                    "N": "???",
                    "T": "For too long have we dwelt in the Abyss."
                },
                {
                    "N": "???",
                    "T": "Surely, they would rather return to the natural cycle of life and death as soon as possible than continue to exist as they are, without a shred of dignity."
                },
                {
                    "N": "???",
                    "T": "They cannot be made to continue paying the price... for those so-called sins."
                },
                {
                    "N": "Abyss Herald",
                    "T": "The Order is most fortunate to be graced with your decision."
                },
                {
                    "N": "_0",
                    "T": "#{F#Aether}{M#Lumine}..."
                },
                {
                    "N": "Dainsleif",
                    "T": "You saw something, didn't you? Can you tell me what it was?"
                },
                {
                    "N": "_1005",
                    "T": "Yeah, you zoned out for quite a while there."
                },
                {
                    "N": "???",
                    "T": "You relate the scene you just saw to Dainsleif..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Huh. Well, people do say that twins have a special connection..."
                },
                {
                    "N": "Dainsleif",
                    "T": "It sounds as if they are attempting to make use of certain equipment to cleanse the curse. It could well be the device we saw earlier."
                },
                {
                    "N": "Dainsleif",
                    "T": "#And... you say {F#he}{M#she} mentioned the \"revival of the homeland,\" correct?"
                },
                {
                    "N": "_0",
                    "T": "Yes."
                },
                {
                    "N": "_0",
                    "T": "#{F#He}{M#She} said it was {F#his}{M#her} mission."
                },
                {
                    "N": "Dainsleif",
                    "T": "No surprise there. Stubborn as ever."
                },
                {
                    "N": "Dainsleif",
                    "T": "It appears as if the Abyss Order plans to use this location to cleanse the hilichurls of their curse and restore them to the way they once were... Then, they will serve as the foundation for reviving the nation of Khaenri'ah."
                },
                {
                    "N": "Dainsleif",
                    "T": "After all, there can be no nation without a people."
                },
                {
                    "N": "_0",
                    "T": "What do you think?"
                },
                {
                    "N": "_0",
                    "T": "Do they have a chance?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Hmph, it is the height of foolishness. They have no chance of success. Not even a one-percent chance."
                },
                {
                    "N": "Dainsleif",
                    "T": "I told you already that no one knows this curse better than I, having lived with it for 500 years... There is no redemption. There is no undoing the curse."
                },
                {
                    "N": "Dainsleif",
                    "T": "Trying to remove it by force will achieve nothing but to inflict further suffering."
                },
                {
                    "N": "Dainsleif",
                    "T": "So make sure you are clear in your mind. You have to tell yourself: They are no longer human."
                },
                {
                    "N": "Dainsleif",
                    "T": "If you cling to false hope and allow yourself to become too emotionally invested, the only way is down... You will end up just like them, mired in hypocrisy."
                },
                {
                    "N": "Dainsleif",
                    "T": "Save your strength for something worth saving."
                },
                {
                    "N": "_0",
                    "T": "Why should I believe you?"
                },
                {
                    "N": "Dainsleif",
                    "T": "Oh?"
                },
                {
                    "N": "Dainsleif",
                    "T": "#Haha... But of course. I am merely someone you hired for a task, while {F#he}{M#she} is your {F#brother}{M#sister}."
                },
                {
                    "N": "Dainsleif",
                    "T": "#It is only natural for you to side with {F#him}{M#her}."
                },
                {
                    "N": "Dainsleif",
                    "T": "But whatever decision you make cannot deter me from mine. My chosen path is to stop the Abyss. If we have reached an impasse, then perhaps this is where we should say—"
                },
                {
                    "N": "_0",
                    "T": "I choose to believe you."
                },
                {
                    "N": "_0",
                    "T": "But that doesn't mean I completely trust you."
                },
                {
                    "N": "_0",
                    "T": "#It just means that I don't approve of my {F#brother's}{M#sister's} methods."
                },
                {
                    "N": "Dainsleif",
                    "T": "I see."
                },
                {
                    "N": "_0",
                    "T": "A 1% chance of redemption..."
                },
                {
                    "N": "_0",
                    "T": "...versus a 99% chance of suffering and death."
                },
                {
                    "N": "_0",
                    "T": "Nobody has the right..."
                },
                {
                    "N": "_0",
                    "T": "...to make that choice on another living being's behalf."
                },
                {
                    "N": "_0",
                    "T": "Especially not when these hilichurls..."
                },
                {
                    "N": "_0",
                    "T": "...have already chosen the end that they desire."
                },
                {
                    "N": "Dainsleif",
                    "T": "It seems that the three questions I put to you on our first meeting were worthwhile. You have developed your own individual views on this world."
                },
                {
                    "N": "Dainsleif",
                    "T": "Very well. Since you have volunteered your true thoughts on this matter, I shall not hide mine from you."
                },
                {
                    "N": "Dainsleif",
                    "T": "Right now, I have a more immediate agenda than stopping the Abyss..."
                },
                {
                    "N": "Dainsleif",
                    "T": "That is to say, the Abyss's actions here directly dishonor the final wishes of Halfdan and my other compatriots. I cannot allow this to proceed."
                },
                {
                    "N": "_0",
                    "T": "I can understand that."
                },
                {
                    "N": "_0",
                    "T": "Then let's stick together for this one."
                },
                {
                    "N": "Dainsleif",
                    "T": "The Abyss may appear at any moment. Be on your guard at all times as we proceed."
                }
            ]
        ]
    },
    "800609": {
        "Desc": "Look for clues in the hilichurl camp",
        "Talk": []
    },
    "800610": {
        "Desc": "Look for clues in the hilichurl camp",
        "Talk": []
    },
    "800613": {
        "Desc": "",
        "Talk": []
    },
    "800611": {
        "Desc": "Look for clues in the hilichurl camp",
        "Talk": []
    },
    "800606": {
        "Desc": "Leave the hilichurl camp",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "We can see the upside-down city from here, too."
                },
                {
                    "N": "Dainsleif",
                    "T": "Wait... Watch out!"
                },
                {
                    "N": "_1005",
                    "T": "Aaaah!"
                },
                {
                    "N": "_1005",
                    "T": "Wh—What's going on!? Is that light coming from the room in the center? Ow, it's too bright!"
                },
                {
                    "N": "Dainsleif",
                    "T": "The mutation is continuing... Has the Abyss made its move already?"
                },
                {
                    "N": "Abyss Herald",
                    "T": "Dainsleif... I see your incessant meddling continues, and that you have once again joined forces with Our Highness's kin..."
                },
                {
                    "N": "Abyss Herald",
                    "T": "Regrettably, I was not in time to control your exit from the network... and it sent you here, of all places. This was a catastrophic error."
                },
                {
                    "N": "Dainsleif",
                    "T": "Hmph! I am surprised that you dare to face me. You ran like a coward last time."
                },
                {
                    "N": "Abyss Herald",
                    "T": "Our Highness's will must be done. All interferences must be removed... whatever the price to pay."
                },
                {
                    "N": "Abyss Herald",
                    "T": "This time... the curse that torments our people must be undone, once and for all."
                },
                {
                    "N": "Dainsleif",
                    "T": "You are the only ones who torment them."
                },
                {
                    "N": "Dainsleif",
                    "T": "There is nothing else left of those hilichurls. Nothing besides the curse itself."
                },
                {
                    "N": "Abyss Herald",
                    "T": "Say what you wish. I am going nowhere, Dainsleif."
                },
                {
                    "N": "Dainsleif",
                    "T": "Then you will give your life just to delay the inevitable? How absurd. But since you wish to persist, then so be it!"
                }
            ]
        ]
    },
    "800614": {
        "Desc": "",
        "Talk": []
    },
    "800607": {
        "Desc": "Defeat the Abyss Herald",
        "Talk": []
    },
    "800608": {
        "Desc": "Talk to Dainsleif",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Whew! You've been hunting this Abyss Herald for aaages — now you finally got him!"
                },
                {
                    "N": "Dainsleif",
                    "T": "There's no time to celebrate. The Abyss Order's device is activating, but there's still time to destroy it."
                },
                {
                    "N": "_1005",
                    "T": "Alright! Let's go!"
                }
            ]
        ]
    },
    "800701": {
        "Desc": "Check the situation at the chamber at the center of the ruins' summit",
        "Talk": [
            [
                {
                    "N": "Dainsleif",
                    "T": "I thought he would've been turned to ashes in an instant... Halfdan's soul is extraordinarily resilient."
                },
                {
                    "N": "Abyss Lector",
                    "T": "Meddling fool! Encumber us no more..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Don't you have a greater encumbrance to worry about? Come on, this is your grand opportunity to get rid of me."
                },
                {
                    "N": "Abyss Lector",
                    "T": "...Dainsleif!!!"
                },
                {
                    "N": "Dainsleif",
                    "T": "Take him out, and deactivate the device!"
                }
            ]
        ]
    },
    "800711": {
        "Desc": "Talk to Dainsleif",
        "Talk": [
            []
        ]
    },
    "800702": {
        "Desc": "Defeat the Abyss Lector",
        "Talk": []
    },
    "800703": {
        "Desc": "Talk to Dainsleif",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "What do we do now? The Abyss Lector's gone, but the device won't stop..."
                },
                {
                    "N": "_1005",
                    "T": "And Halfdan..."
                },
                {
                    "N": "_0",
                    "T": "Let me take his place."
                },
                {
                    "N": "_0",
                    "T": "The cleansing won't have any effect on me."
                },
                {
                    "N": "Dainsleif",
                    "T": "No! As long as the device is active, the cursed are rendered powerless. Only you can take on the Abyss."
                },
                {
                    "N": "Dainsleif",
                    "T": "If you value his sacrifice, then do not waste any more time here."
                },
                {
                    "N": "Dainsleif",
                    "T": "See all these rays of light and portals? They must have installed several of these energy devices in various locations. Find them! Quickly!"
                },
                {
                    "N": "_1005",
                    "T": "So we have to... go through these Abyss portals? ...Hey, wait for Paimon!"
                }
            ]
        ]
    },
    "800713": {
        "Desc": "",
        "Talk": [
            []
        ]
    },
    "800704": {
        "Desc": "Destroy all the charging devices",
        "Talk": []
    },
    "800705": {
        "Desc": "Destroy all the charging devices",
        "Talk": []
    },
    "800706": {
        "Desc": "Destroy all the charging devices",
        "Talk": []
    },
    "800707": {
        "Desc": "Destroy all the charging devices",
        "Talk": []
    },
    "800708": {
        "Desc": "",
        "Talk": []
    },
    "800712": {
        "Desc": "",
        "Talk": [
            []
        ]
    },
    "800709": {
        "Desc": "Reach Halfdan",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "So that's it, right? The device is fully shut down now?"
                },
                {
                    "N": "Dainsleif",
                    "T": "The burning sensation has indeed stopped..."
                },
                {
                    "N": "_1005",
                    "T": "So we managed to stop the Abyss Order's plan?"
                },
                {
                    "N": "_0",
                    "T": "But... Halfdan..."
                },
                {
                    "N": "_0",
                    "T": "He seems to have breathed his last."
                },
                {
                    "N": "Dainsleif",
                    "T": "..."
                },
                {
                    "N": "Dainsleif",
                    "T": "Let me check."
                },
                {
                    "N": "_1005",
                    "T": "Dain must be really upset..."
                },
                {
                    "N": "_1005",
                    "T": "Of all the ways to be reunited with one of his former comrades after so long... This is rough..."
                },
                {
                    "N": "Dainsleif",
                    "T": "..."
                },
                {
                    "N": "Dainsleif",
                    "T": "...Let's go."
                }
            ]
        ]
    },
    "800710": {
        "Desc": "Talk to Dainsleif",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "That was Halfdan's soul..."
                },
                {
                    "N": "Dainsleif",
                    "T": "More than one kind of strange power exists here. Souls are no strange sight under the circumstances."
                },
                {
                    "N": "Dainsleif",
                    "T": "Still, if you intend to venture deeper in and continue your investigation, you ought to be careful."
                },
                {
                    "N": "Dainsleif",
                    "T": "*cough*..."
                },
                {
                    "N": "_1005",
                    "T": "You bet, we'll be super careful. Oh, but... Dain, does this mean you're not coming with us?"
                },
                {
                    "N": "Dainsleif",
                    "T": "That device took a severe toll on me. It will take me some time to recover."
                },
                {
                    "N": "_1005",
                    "T": "Oh, right... Well, actually, Paimon already knew that. You've clearly been pushing through the pain this whole time!"
                },
                {
                    "N": "_1005",
                    "T": "You've earned a good rest, Dain... Ooh, you should take a vacation!"
                },
                {
                    "N": "Dainsleif",
                    "T": "\"Vacation\"? Huh, the very notion. This word has no business being in my vocabulary."
                },
                {
                    "N": "Dainsleif",
                    "T": "There are more important things that demand my attention. The \"Loom of Fate\" operation is still underway."
                },
                {
                    "N": "Dainsleif",
                    "T": "And I suspect that these amplification devices are connected to that plan."
                },
                {
                    "N": "_0",
                    "T": "I will be on the lookout."
                },
                {
                    "N": "_0",
                    "T": "We will talk more next time. After you've recovered."
                },
                {
                    "N": "Dainsleif",
                    "T": "Thank you for understanding."
                },
                {
                    "N": "Dainsleif",
                    "T": "I only hope that next time we meet, you know whose side you're on."
                },
                {
                    "N": "_1005",
                    "T": "Sheesh! He sure knows how to hold a grudge, saving that snide remark right till the end..."
                },
                {
                    "N": "_1005",
                    "T": "#Well, shame that we didn't get to see your {F#brother}{M#sister} again, but at least we learned some useful info, huh?"
                },
                {
                    "N": "_1005",
                    "T": "As long as you keep pressing on with your journey, you guys will definitely meet again, and everything will be back to normal, right?"
                },
                {
                    "N": "_1005",
                    "T": "Oh, Paimon almost forgot — the real reason we came here was to investigate what was going on with the hilichurls, wasn't it?"
                },
                {
                    "N": "_1005",
                    "T": "We've probably seen enough to report back to the miner now. But, uh... how are we going to explain it to him? This is all way too complicated for regular people to understand!"
                },
                {
                    "N": "_1005",
                    "T": "Meh, we'll figure it out — just don't forget about the commission when we're done here."
                }
            ]
        ]
    }
}