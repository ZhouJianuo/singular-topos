// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "Tighnari",
            "ID": "1050",
            "Count": 277
        },
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 113
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 53
        },
        {
            "Name": "Abattouy",
            "ID": "12639",
            "Count": 44
        },
        {
            "Name": "Karkata",
            "ID": "12603",
            "Count": 38
        },
        {
            "Name": "Mahir",
            "ID": "12599",
            "Count": 30
        },
        {
            "Name": "Karkata",
            "ID": "12686",
            "Count": 24
        },
        {
            "Name": "???",
            "ID": "",
            "Count": 15
        },
        {
            "Name": "Yara",
            "ID": "12597",
            "Count": 10
        },
        {
            "Name": "Collei",
            "ID": "1051",
            "Count": 10
        },
        {
            "Name": "Jasar",
            "ID": "12612",
            "Count": 10
        },
        {
            "Name": "Katheryne",
            "ID": "4019",
            "Count": 9
        },
        {
            "Name": "Kadin",
            "ID": "12602",
            "Count": 7
        },
        {
            "Name": "Akarsh",
            "ID": "12600",
            "Count": 5
        },
        {
            "Name": "Abdo",
            "ID": "12601",
            "Count": 4
        },
        {
            "Name": "Asha",
            "ID": "12598",
            "Count": 3
        },
        {
            "Name": "Observe",
            "ID": "12665",
            "Count": 1
        }
    ],
    "Num": "Vulpes Zerda Chapter: Act I",
    "Title": "The Unanswerable Problems",
    "IT": "Tighnari",
    "Tab": "UI_LegendQuestImg_Tighnari",
    "Icon": "UI_ChapterIcon_Tighnari",
    "Intro": "A contaminated area that seems to differ from the Withering Zone is spreading through Avidya Forest, disturbing the thoughts of many who pass through the area.<br>You take great pains to be fully prepared before you delve into this area, but your hard-come-by guide turns out to be a mechanical crab who cannot communicate with you.<br>Yet, is any one life greater than another? Perhaps its cold outer shield may yet hide thoughts that shall coalesce into a beating heart.",
    "MainQuests": [
        {
            "_id": 13000,
            "Name": "The Start of Contamination",
            "Desc": "You haven't gone to see Katheryne in a while. Why don't you go have a look?",
            "Track": [
                13001
            ],
            "R": [
                113000
            ],
            "RP": [],
            "Sub": [
                1300001,
                1300002,
                1300004,
                1300005,
                1300006,
                1300007,
                1300008,
                1300009,
                1300010,
                1300011,
                1300003,
                1300017,
                1300012,
                1300013,
                1300014,
                1300015,
                1300016
            ]
        },
        {
            "_id": 13001,
            "Name": "Into the Hinterland",
            "Desc": "With the mechanical crab as your guide, it is time to head to the contaminated region.",
            "Track": [
                13002
            ],
            "R": [
                113001
            ],
            "RP": [],
            "Sub": [
                1300101,
                1300102,
                1300103,
                1300104,
                1300106,
                1300107,
                1300108,
                1300109,
                1300105,
                1300112,
                1300110,
                1300111,
                1300114,
                1300116,
                1300115,
                1300117,
                1300118,
                1300113
            ]
        },
        {
            "_id": 13002,
            "Name": "Heart of the Machine",
            "Desc": "The mechanical crab has stopped at a certain point. The source of the contamination seems to be within.",
            "Track": [
                13003
            ],
            "R": [
                113002
            ],
            "RP": [],
            "Sub": [
                1300201,
                1300202,
                1300203,
                1300204,
                1300212,
                1300216,
                1300205,
                1300206,
                1300207,
                1300208,
                1300209,
                1300210,
                1300215,
                1300211,
                1300213,
                1300214
            ]
        },
        {
            "_id": 13003,
            "Name": "Garden Memories",
            "Desc": "Now that you've left the lab, you should inform Katheryne that the contamination issue has been resolved.",
            "Track": [],
            "R": [
                113003
            ],
            "RP": [],
            "Sub": [
                1300301,
                1300302,
                1300303
            ]
        }
    ]
}

var _sq = {
    "1300001": {
        "Desc": "Talk to Katheryne in Sumeru",
        "Talk": [
            [
                {
                    "N": "Katheryne",
                    "T": "Traveler, you've come at a good time."
                },
                {
                    "N": "_1005",
                    "T": "Wait, this sounds like... another commission?"
                },
                {
                    "N": "Katheryne",
                    "T": "Hehe, it is as you say. The commission this time around is of high importance. It pertains to the safety of the Avidya Forest's inhabitants."
                },
                {
                    "N": "_1005",
                    "T": "Huh? What happened?"
                },
                {
                    "N": "Katheryne",
                    "T": "Not long ago, we received word that a section of the Avidya Forest seems to have become \"contaminated.\""
                },
                {
                    "N": "_1005",
                    "T": "Contaminated? You mean... a new Withering Zone?"
                },
                {
                    "N": "Katheryne",
                    "T": "I don't know about the specifics, but I hear that strange things are happening to people who cross through that region."
                },
                {
                    "N": "Katheryne",
                    "T": "The Avidya Forest's inhabitants won't leave their home so easily. If we allow this contaminated region to expand, the consequences could be unimaginable."
                },
                {
                    "N": "Katheryne",
                    "T": "That's why I want to ask you to investigate the situation. Even if all you can do is stop the contamination from spreading, that will still save many people."
                },
                {
                    "N": "_1005",
                    "T": "This is forest business... Hmm, maybe Tighnari will know something. Let's go find him!"
                }
            ]
        ]
    },
    "1300002": {
        "Desc": "Ask Tighnari about the situation",
        "Step": "You hear about the contaminated region of sorts from Katheryne. Time to ask Tighnari about the matter.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "This is where you've been, Tighnari! Hm? That's—"
                },
                {
                    "N": "Tighnari",
                    "T": "Shh... Keep your voice down."
                },
                {
                    "N": "Yara",
                    "T": "Tighnari... Everything's spinning..."
                },
                {
                    "N": "Yara",
                    "T": "Am I going to die? *sniff* Tell Mom that I should've listened to her..."
                },
                {
                    "N": "Yara",
                    "T": "And tell Suna that I'm sorry for breaking her toy. I didn't tell her because I was scared that she wouldn't play with me anymore..."
                },
                {
                    "N": "Yara",
                    "T": "Tighnari, I heard that people turn into birds after they die. Is that true? I feel like I'm getting lighter..."
                },
                {
                    "N": "_1005",
                    "T": "What happened...? Tighnari, is he..."
                },
                {
                    "N": "Tighnari",
                    "T": "Okay, okay, enough nonsense."
                },
                {
                    "N": "Tighnari",
                    "T": "You just have a small fever. Take your medication and rest. You'll be bouncing off the walls in no time."
                },
                {
                    "N": "Yara",
                    "T": "Really? Then... Can you keep the thing about the toy a secret for now?"
                },
                {
                    "N": "Tighnari",
                    "T": "No can do. You're a big kid now. Once you've recovered, go and apologize. Keeping secrets to yourself won't solve anything."
                },
                {
                    "N": "Yara",
                    "T": "Aw..."
                },
                {
                    "N": "Tighnari",
                    "T": "Hey, let me ask you something... I recall that you're usually pretty healthy. How did you get this sick all of a sudden?"
                },
                {
                    "N": "Yara",
                    "T": "I don't know, either... Mom's been telling me not to play in the forest. I just wanted to look inside..."
                },
                {
                    "N": "Yara",
                    "T": "It's different from before... I got lost and went around in a huge circle."
                },
                {
                    "N": "Yara",
                    "T": "After I got out, I started feeling dizzy..."
                },
                {
                    "N": "_1005",
                    "T": "Could it be..."
                },
                {
                    "N": "_0",
                    "T": "The contaminated region?"
                },
                {
                    "N": "Tighnari",
                    "T": "..."
                },
                {
                    "N": "Tighnari",
                    "T": "So that's how this whole mess happened. Anyway, go rest. No running around until I say so, got it?"
                },
                {
                    "N": "Tighnari",
                    "T": "#{NICKNAME}, Paimon, let's step out for now."
                },
                {
                    "N": "???",
                    "T": "You leave the room with Tighnari..."
                },
                {
                    "N": "Asha",
                    "T": "Mr. Forest Watcher, how is my son?"
                },
                {
                    "N": "Tighnari",
                    "T": "I gave him some antipyretics. Let him rest here for a while."
                },
                {
                    "N": "Tighnari",
                    "T": "I told him that he would feel better after some medicine and rest, but I only said that to comfort him."
                },
                {
                    "N": "Tighnari",
                    "T": "His symptoms resemble a fever, but something else is causing them. They seem more akin to a disruption in his psyche. Antipyretics won't be of much use."
                },
                {
                    "N": "Asha",
                    "T": "What do we do? Mr. Forest Watcher, you have to help him!"
                },
                {
                    "N": "Tighnari",
                    "T": "If memory serves, a plant called Vasanti Grass can help soothe the mind."
                },
                {
                    "N": "Tighnari",
                    "T": "A small number grow in arid deserts. They usually look like shriveled weeds, but can be revitalized with a splash of water."
                },
                {
                    "N": "Tighnari",
                    "T": "They're expensive and unable to grow in the Avidya Forest's climate, so I don't have any on hand."
                },
                {
                    "N": "Tighnari",
                    "T": "I'll ask the caravans. Go find Collei, have her prepare medicinal tools, and a set of traveling gear for me."
                },
                {
                    "N": "Asha",
                    "T": "Alright! Thank you!"
                },
                {
                    "N": "Tighnari",
                    "T": "Contaminated region, huh... Is that why you two are also here?"
                },
                {
                    "N": "_1005",
                    "T": "Yep. Is it a new Withering Zone?"
                },
                {
                    "N": "Tighnari",
                    "T": "Doesn't seem like one. Whether you look at scale, internal conditions, or resultant effects, they're completely different."
                },
                {
                    "N": "Tighnari",
                    "T": "The only thing they have in common is that they aren't welcome. This nuisance made itself home in the Avidya Forest, so I can't turn a blind eye."
                },
                {
                    "N": "_1005",
                    "T": "We feel the same way!"
                },
                {
                    "N": "Tighnari",
                    "T": "Alright, let's contact the caravans first and purchase some Vasanti Grass. We can also ask about the contaminated region."
                },
                {
                    "N": "Tighnari",
                    "T": "There's no time to waste. We have to move quickly. Let's go."
                }
            ]
        ]
    },
    "1300004": {
        "Desc": "Buy Vasanti Grass from a traveling merchant",
        "Step": "Tighnari would like to heal Yara, who has been to a contaminated region, but is missing a key herb known as Vasanti Grass. Go to a traveling merchant to see if you can get some.",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Excuse me, I'd like to purchase some Vasanti Grass. Do you have any?"
                },
                {
                    "N": "Mahir",
                    "T": "I'm sorry, Mr. Forest Watcher, but we've been closed for the past few days."
                },
                {
                    "N": "Tighnari",
                    "T": "Closed? Now that's odd. It's my first time hearing you say something like that."
                },
                {
                    "N": "Mahir",
                    "T": "*sigh* It's a long story... Some of our goods were stolen recently."
                },
                {
                    "N": "Mahir",
                    "T": "They were mechanical parts that we got from the Akademiya. Although they're old models, they still fetch a good price on the market."
                },
                {
                    "N": "Mahir",
                    "T": "Our caravans had to pool together Mora to afford those parts. Now that they've been lost, we'll likely come up short this trip."
                },
                {
                    "N": "Mahir",
                    "T": "All the merchants talked it over, and we decided to raise the prices of our remaining inventory. Until this plan takes effect, none of us can privately sell anything."
                },
                {
                    "N": "Tighnari",
                    "T": "I don't get it. If these goods are so important, then why not think of a way to get them back?"
                },
                {
                    "N": "Tighnari",
                    "T": "Raising prices won't solve anything. At best, you're shoving the consequences of the robbery onto your customers."
                },
                {
                    "N": "Mahir",
                    "T": "Mr. Forest Watcher, it's not that we don't want to, it's just the thief disappeared into the deepest parts of the forest."
                },
                {
                    "N": "Mahir",
                    "T": "We asked around, and apparently the forest has been very unusual as of late. Anyone who goes in experiences mental anomalies."
                },
                {
                    "N": "Mahir",
                    "T": "We can't keep waiting out here for the thief to come out. All we could do is come up with another solution."
                },
                {
                    "N": "Tighnari",
                    "T": "So the bandit hid in the contaminated region after stealing those mechanical parts?"
                },
                {
                    "N": "Tighnari",
                    "T": "How many people were there in total? Were they not affected by the contaminated region?"
                },
                {
                    "N": "Mahir",
                    "T": "That crook CAME from the contaminated region! As for how many... Err... There weren't any \"people.\""
                },
                {
                    "N": "_1005",
                    "T": "No people?"
                },
                {
                    "N": "Mahir",
                    "T": "*sigh* Even if I tell you, you might not believe me. *sigh* Fine, the thief that stole our parts was a huge, mechanical crab!"
                },
                {
                    "N": "_1005",
                    "T": "What the heck!? The Avidya Forest has creatures like that?"
                },
                {
                    "N": "_0",
                    "T": "Is it that \"crab\"?"
                },
                {
                    "N": "_0",
                    "T": "Didn't see any in the Avidya Forest Field Guide..."
                },
                {
                    "N": "Mahir",
                    "T": "To be honest, I'd rather not think about it... It moved too skillfully to be new at this."
                },
                {
                    "N": "Mahir",
                    "T": "It came out of nowhere. Before we could react, it swiped our goods and ran away."
                },
                {
                    "N": "Mahir",
                    "T": "We were all shocked. By the time we came to our senses, the thief was already long gone."
                },
                {
                    "N": "Tighnari",
                    "T": "I see. If we help you retrieve your stolen goods, then business will return to normal?"
                },
                {
                    "N": "Mahir",
                    "T": "Oh, but of course."
                },
                {
                    "N": "Mahir",
                    "T": "Not only that, but you'll become one of our caravan's VIPs. On all future purchases of any—"
                },
                {
                    "N": "Tighnari",
                    "T": "Enough. Tell me something that's actually useful. Any leads on that mechanical crab?"
                },
                {
                    "N": "Mahir",
                    "T": "Maybe one? After our goods were stolen, we specifically got someone to assess the situation."
                },
                {
                    "N": "Mahir",
                    "T": "If you're interested, you can go and talk to them."
                },
                {
                    "N": "Tighnari",
                    "T": "Alright, we'll go and have a word."
                }
            ]
        ]
    },
    "1300005": {
        "Desc": "Gather information nearby",
        "Talk": [
            [
                {
                    "N": "Akarsh",
                    "T": "After the goods were stolen, I made multiple inquiries with nearby caravans and residents."
                },
                {
                    "N": "Akarsh",
                    "T": "Turns out that many others have also been robbed by that crooked crab."
                },
                {
                    "N": "Akarsh",
                    "T": "However, the crab only seems to be interested in machinery. It doesn't even bat an eye at other valuables."
                },
                {
                    "N": "Akarsh",
                    "T": "A caravan carrying a large amount of Mora had an uneventful trip, but another caravan had a child whose metal toy was taken."
                },
                {
                    "N": "Akarsh",
                    "T": "Whatever the case, that thing is a scourge! We'll eventually think of a way to get rid of it!"
                }
            ]
        ]
    },
    "1300006": {
        "Desc": "Gather information nearby",
        "Talk": [
            [
                {
                    "N": "Abdo",
                    "T": "That mechanical crab is fast, strong, and a pain to deal with."
                },
                {
                    "N": "Abdo",
                    "T": "Ten of us might not even be able to take that thing head-on."
                },
                {
                    "N": "Abdo",
                    "T": "Didn't the Akademiya ban research on mechanical life forms years ago? Where did that thing come from?"
                },
                {
                    "N": "Abdo",
                    "T": "Our salaries even got slashed because of it... *sigh* Who would've thought that the robber wasn't a human, but a mechanical crab? This is rough..."
                }
            ]
        ]
    },
    "1300007": {
        "Desc": "Gather information nearby",
        "Talk": [
            [
                {
                    "N": "Kadin",
                    "T": "I heard from the caravaners that there have been a lot of robberies lately, but we haven't been affected."
                },
                {
                    "N": "Kadin",
                    "T": "We don't normally see the mechanical crab, and it doesn't disturb our daily lives."
                },
                {
                    "N": "Kadin",
                    "T": "It only shows up when the caravans are here, and it runs back to the contaminated region after it's done making a mess."
                },
                {
                    "N": "Tighnari",
                    "T": "You haven't tried capturing it?"
                },
                {
                    "N": "Kadin",
                    "T": "We have, but it's too agile and fast."
                },
                {
                    "N": "Kadin",
                    "T": "However, we did unexpectedly learn something the last time we tried to capture it."
                },
                {
                    "N": "Kadin",
                    "T": "It apparently lives in the deepest part of the forest, so instead of immediately moving its spoils, it first hides them nearby."
                },
                {
                    "N": "Kadin",
                    "T": "Once its stash grows large enough, it moves everything in one go. You'll have to move fast if you want those goods back."
                }
            ]
        ]
    },
    "1300008": {
        "Desc": "",
        "Talk": []
    },
    "1300009": {
        "Desc": "Discuss what to do with the traveling merchant",
        "Step": "The traveling merchant seems to have encountered some trouble. Does this strange mechanical crab have something to do with the contaminated region?",
        "Talk": [
            [
                {
                    "N": "Mahir",
                    "T": "How are things? Did you make any progress?"
                },
                {
                    "N": "Tighnari",
                    "T": "We learned of its behaviors, but much still remains unclear."
                },
                {
                    "N": "Tighnari",
                    "T": "Assuming normal operational status, mechanical constructs generally act according to their given commands."
                },
                {
                    "N": "Tighnari",
                    "T": "If I were its owner, I'd command it to steal more valuable things... or the Mora you made. That would be the most efficient method."
                },
                {
                    "N": "Tighnari",
                    "T": "But it only goes after mechanical components. This doesn't make any sense."
                },
                {
                    "N": "_1005",
                    "T": "Right! It's really weird!"
                },
                {
                    "N": "Mahir",
                    "T": "So you all found a way to retrieve our goods?"
                },
                {
                    "N": "Tighnari",
                    "T": "Do you have any more mechanical parts with you?"
                },
                {
                    "N": "Mahir",
                    "T": "Yes, I still have a small bag of samples. They weren't taken since I keep them on me at all times."
                },
                {
                    "N": "Mahir",
                    "T": "Oh, are you planning to—"
                },
                {
                    "N": "Tighnari",
                    "T": "Under constant external conditions, organisms rarely initiate changes in their habits."
                },
                {
                    "N": "Tighnari",
                    "T": "Here's what we know so far: It has a mechanical composition; it lives in the contaminated region; and it comes out to steal mechanical components."
                },
                {
                    "N": "Tighnari",
                    "T": "If we have said components, we can lure it out, capture it, and then make observations for further conclusions."
                },
                {
                    "N": "Tighnari",
                    "T": "Well... Chatting like this won't get us anywhere. We're only wasting time."
                },
                {
                    "N": "Mahir",
                    "T": "You're right. We don't have any other options right now... This bag of samples is all yours, Mr. Forest Watcher. If you can get our goods back, the caravans will reward you generously."
                },
                {
                    "N": "Tighnari",
                    "T": "We don't need anything in return, but I'll be keeping this bag. I may have other uses for it later."
                },
                {
                    "N": "Tighnari",
                    "T": "We'll also need to borrow a Sumpter Beast. Our act has to be convincing if we want the crab to fall for it."
                },
                {
                    "N": "Mahir",
                    "T": "Oh yeah, no problem at all! If it means getting our things back, you can even borrow me to do whatever you need!"
                },
                {
                    "N": "Tighnari",
                    "T": "I'll have to decline that offer. Anyway, we'll use the mechanical components and Sumpter Beast to pose as a transiting caravan and lure out the crab."
                },
                {
                    "N": "Tighnari",
                    "T": "Once it appears, capture it. I leave the timing to you."
                },
                {
                    "N": "_1005",
                    "T": "Don't worry! We're professionals!"
                }
            ]
        ]
    },
    "1300010": {
        "Desc": "Go to the location where the robbery took place",
        "Step": "You and Tighnari decide to disguise yourselves as passing merchants to try to lure the Mechanical Crab out. Here goes nothing...",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Looking at the trade routes and the contaminated region's current perimeter, the goods were likely stolen somewhere around here."
                },
                {
                    "N": "_1005",
                    "T": "Then let's get to it! We'll definitely capture that criminal crab!"
                },
                {
                    "N": "Tighnari",
                    "T": "Okay. We'll start from here and have the Sumpter Beast, with the components on-board, lead the way."
                },
                {
                    "N": "Tighnari",
                    "T": "This Sumpter Beast isn't familiar with us yet, so be calm and take your time with it."
                }
            ]
        ]
    },
    "1300011": {
        "Desc": "Follow the Sumpter Beast",
        "Talk": []
    },
    "1300003": {
        "Desc": "Feed the Sumpter Beast",
        "Talk": []
    },
    "1300017": {
        "Desc": "Continue following the Sumpter Beast",
        "Talk": [
            [
                {
                    "N": "Yara",
                    "T": "*sob* My head's still spinning..."
                }
            ]
        ]
    },
    "1300012": {
        "Desc": "Observe your surroundings for anything unusual",
        "Step": "You and Tighnari decide to disguise yourselves as passing merchants to try to lure the Mechanical Crab out. Here goes nothing...",
        "Talk": [
            [
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "_1005",
                    "T": "Did you hear something—"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "Waaah! Is that the mechanical crab the caravan was talking about? It's charging straight at us!"
                },
                {
                    "N": "Tighnari",
                    "T": "It looks strong. Be careful!"
                }
            ]
        ]
    },
    "1300013": {
        "Desc": "Defeat the mechanical crab",
        "Step": "The mechanical crab has emerged! Subdue it now!",
        "Talk": []
    },
    "1300014": {
        "Desc": "Try to communicate with the Mechanical Crab",
        "Step": "The Mechanical Crab doesn't seem to be that aggressive. Perhaps you could try communicating with it",
        "Talk": [
            [
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "_1005",
                    "T": "Hmph, just try to escape this time, you naughty, caravan-robbing crab!"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "_1005",
                    "T": "Hey, playing dumb won't save you! Spill it! Why are you stealing so many mechanical parts?"
                },
                {
                    "N": "_0",
                    "T": "It doesn't seem to understand us..."
                },
                {
                    "N": "Tighnari",
                    "T": "Hmm, it doesn't seem capable of comprehending complex questions. Keep an eye on it. I'll search around the area for the caravans' goods."
                },
                {
                    "N": "???",
                    "T": "After some searching, Tighnari finds the goods that the mechanical crab stole..."
                },
                {
                    "N": "Tighnari",
                    "T": "I don't know why you're stealing mechanical parts, but they don't belong to you."
                },
                {
                    "N": "Tighnari",
                    "T": "Stolen items must be returned to their rightful owners. Any objections?"
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "_0",
                    "T": "It looks sad..."
                },
                {
                    "N": "Tighnari",
                    "T": "You came from the depths of the contaminated region, right? How about you help us with something?"
                },
                {
                    "N": "Tighnari",
                    "T": "If you take us there, I'll give you some mechanical parts as a reward."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "It reacted!"
                },
                {
                    "N": "_0",
                    "T": "Does it understand us?"
                },
                {
                    "N": "Tighnari",
                    "T": "We can't be certain yet. Its excitement may be a simple, programmed response upon seeing mechanical components."
                },
                {
                    "N": "_1005",
                    "T": "Okay, so you want the crab to lead us into the contaminated region?"
                },
                {
                    "N": "Tighnari",
                    "T": "That's right. The contaminated region has a large and currently expanding perimeter, so it would be difficult to conduct a thorough search."
                },
                {
                    "N": "Tighnari",
                    "T": "If we charge straight in, we'll get lost like headless pigeons. Also, our new friend here seems to be full of secrets."
                },
                {
                    "N": "Tighnari",
                    "T": "I've been studying this contaminated region recently, and I have a hypothesis of my own. So to be absolutely safe, it would be best to have a \"guide\" lead the way."
                },
                {
                    "N": "_1005",
                    "T": "Paimon gets it now! Does this scuttler understand what you're saying?"
                },
                {
                    "N": "Tighnari",
                    "T": "It doesn't have to, as long as it isn't hostile towards us."
                },
                {
                    "N": "Tighnari",
                    "T": "I gave it some components that it will definitely take back to the contaminated region. So long as it doesn't attack us, we can simply follow along."
                },
                {
                    "N": "Karkata",
                    "T": "Kalu!"
                },
                {
                    "N": "_1005",
                    "T": "It seems to be really happy..."
                },
                {
                    "N": "Tighnari",
                    "T": "Listen to me. Wait for us here. No running off."
                },
                {
                    "N": "Tighnari",
                    "T": "We'll be back soon. If you're still here when we return, I'll give you another mechanical part as a reward. Understood?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_0",
                    "T": "Does that count as understanding us?"
                },
                {
                    "N": "Tighnari",
                    "T": "I'm not sure, but our priorities are to retrieve the mechanical components, and to purchase Vasanti Grass to make medicine with."
                },
                {
                    "N": "Tighnari",
                    "T": "We should return, but before we do, we need to set up a few \"traps.\" Can't have that crab escaping."
                }
            ]
        ]
    },
    "1300015": {
        "Desc": "Give the mechanical components back to the merchant",
        "Step": "Although the mechanical crab doesn't seem to know much of anything in general, it accepts Tighnari's simple trade. But before you let it lead you to the contaminated region, there are some things you need to settle first...",
        "Talk": [
            [
                {
                    "N": "Mahir",
                    "T": "Oh, oh!"
                },
                {
                    "N": "Mahir",
                    "T": "These are the mechanical parts that were stolen! You really got them back for us!"
                },
                {
                    "N": "Mahir",
                    "T": "Thank you all so very much! I don't know how I can repay you... Wait, didn't you want to purchase Vasanti Grass?"
                },
                {
                    "N": "Mahir",
                    "T": "Don't worry about the price — they're on the house! How many do you need?"
                },
                {
                    "N": "Tighnari",
                    "T": "Two is enough."
                },
                {
                    "N": "Mahir",
                    "T": "No, that won't do. Here, I'll throw in some Mora—"
                },
                {
                    "N": "Tighnari",
                    "T": "No need. I've already received a reward from you."
                },
                {
                    "N": "Mahir",
                    "T": "Reward...? You mean that bag of mechanical parts? Ah, they aren't worth much compared to this merchandise."
                },
                {
                    "N": "Tighnari",
                    "T": "But those parts are very useful to me, just like the Vasanti Grass."
                },
                {
                    "N": "Tighnari",
                    "T": "I retrieved the things you needed, and you gave me what I needed in return. We're even."
                },
                {
                    "N": "Tighnari",
                    "T": "Oh, and before we go, just a reminder, the forest has an intricate and biodiverse ecosystem. Even if there were no mechanical crabs, other dangers are still present. Take caution on this route."
                },
                {
                    "N": "Mahir",
                    "T": "Noted! Thank you all ever so much!"
                },
                {
                    "N": "Tighnari",
                    "T": "Let's return to the village. The earlier we can give the child medicine, the sooner he'll start feeling better."
                }
            ]
        ]
    },
    "1300016": {
        "Desc": "Go back to Avidya Forest to heal Yara",
        "Talk": [
            [
                {
                    "N": "Collei",
                    "T": "#Oh, hi there, {NICKNAME} and Paimon."
                },
                {
                    "N": "Collei",
                    "T": "Master, I prepared the pharmaceutical equipment. Do you need me to help grind the medicine?"
                },
                {
                    "N": "Tighnari",
                    "T": "No need. A precise dosage is required this time, so I'll do it myself."
                },
                {
                    "N": "Collei",
                    "T": "Oh, okay..."
                },
                {
                    "N": "Tighnari",
                    "T": "But once I'm done, you can deliver the medication to the child."
                },
                {
                    "N": "Tighnari",
                    "T": "He gets a little nervous when I'm around for too long. I don't think he finds me very approachable."
                },
                {
                    "N": "Tighnari",
                    "T": "#I'll go prepare the medication. {NICKNAME}, give me a hand."
                },
                {
                    "N": "???",
                    "T": "After you and Tighnari prepare the medicine, Collei gives it to Yara."
                },
                {
                    "N": "_1005",
                    "T": "How is he? Doing any better?"
                },
                {
                    "N": "Collei",
                    "T": "I feel like he's doing a lot better, and his temperature is returning to normal."
                },
                {
                    "N": "_1005",
                    "T": "That's wonderful!"
                },
                {
                    "N": "Collei",
                    "T": "Oh yeah, he asked me to tell you that Suna came by earlier, and he told her everything about the toy."
                },
                {
                    "N": "Collei",
                    "T": "Suna didn't get mad, so he wanted to thank you. Can I ask what happened?"
                },
                {
                    "N": "Tighnari",
                    "T": "It's nothing. Did you prepare the traveling gear that I asked you to?"
                },
                {
                    "N": "Collei",
                    "T": "Of course I did! Are you going somewhere far away?"
                },
                {
                    "N": "Tighnari",
                    "T": "Yes, we're going to the contaminated region. Judging by its size, we will likely have to stay overnight."
                },
                {
                    "N": "Tighnari",
                    "T": "I'm leaving everything to you while I'm gone."
                },
                {
                    "N": "Collei",
                    "T": "Huh? But I... I can't even begin to compare to you..."
                },
                {
                    "N": "Tighnari",
                    "T": "Many things are learned by doing, and once they've been done, you'll realize that they weren't as difficult as you once thought they were."
                },
                {
                    "N": "Tighnari",
                    "T": "Deal with problems as you yourself see fit. You don't have to emulate me."
                },
                {
                    "N": "_1005",
                    "T": "That's right! You'll do great, Collei!"
                },
                {
                    "N": "Collei",
                    "T": "Alright, then I'll do my best!"
                },
                {
                    "N": "Collei",
                    "T": "#Master, {NICKNAME}, Paimon, take care of yourselves."
                },
                {
                    "N": "_0",
                    "T": "Don't worry."
                },
                {
                    "N": "Tighnari",
                    "T": "I'm sure we'll be fine. I think you'll understand why once we arrive at the contaminated region."
                },
                {
                    "N": "_0",
                    "T": "Everything will be fine with Tighnari around."
                },
                {
                    "N": "Tighnari",
                    "T": "You put too much confidence in me. Anyway, like you said, things will likely be uneventful."
                },
                {
                    "N": "Tighnari",
                    "T": "Let's return and find that crab."
                }
            ]
        ]
    },
    "1300101": {
        "Desc": "Look for the mechanical crab",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "We're here! This should be... Huh? Where's the crab?"
                },
                {
                    "N": "_1005",
                    "T": "Did it secretly scuttle away?"
                },
                {
                    "N": "Tighnari",
                    "T": "The traps weren't triggered, so it should still be here... Odd..."
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_0",
                    "T": "It's here!"
                },
                {
                    "N": "Tighnari",
                    "T": "You honored our agreement and waited here until we returned."
                },
                {
                    "N": "Tighnari",
                    "T": "As such, I'll hold up my end and give you another mechanical part. Keep it safe. I'm not giving you another one if you lose it."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "Glad you're satisfied. If you want more mechanical parts, take us deeper into the contaminated region."
                },
                {
                    "N": "Tighnari",
                    "T": "I want to see what happened there — what caused the Avidya Forest to become like this."
                }
            ]
        ]
    },
    "1300102": {
        "Desc": "Set off for the contaminated region",
        "Talk": []
    },
    "1300103": {
        "Desc": "Head toward the depths of the contaminated region",
        "Step": "Tighnari theorizes that the contaminated region was formed on account of a Ley Line effluence. Continue searching for clues nearby.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "You know, we haven't seen any animals this entire time!"
                },
                {
                    "N": "_1005",
                    "T": "The birds used to chirp really loudly, and there were a lot of foxes..."
                },
                {
                    "N": "Tighnari",
                    "T": "The contaminated region currently appears to have a critical efflux of Ley Line energy, which is probably the root cause of the patients' cognitive disturbances."
                },
                {
                    "N": "Tighnari",
                    "T": "Some animals have keen awareness. They sensed something abnormal in this area and fled."
                },
                {
                    "N": "_1005",
                    "T": "Leaky Ley Lines sure can cause a lot of damage, huh?"
                },
                {
                    "N": "Tighnari",
                    "T": "Like how plants have preferred growth conditions, we also gradually habituate to our surrounding environment."
                },
                {
                    "N": "Tighnari",
                    "T": "Climate, temperature, humidity, intensity of Ley Line energies. When people live under fixed conditions, they reach a sort of \"homeostasis\" with their environment."
                },
                {
                    "N": "Tighnari",
                    "T": "This equilibrium is broken when the surrounding environment abruptly changes, causing people's bodies to react in abnormal ways."
                },
                {
                    "N": "Tighnari",
                    "T": "If normal fluctuations in temperature occur, then our bodies automatically adjust. However, the average person cannot adapt to changes in Ley Line energy, and so they fall ill."
                },
                {
                    "N": "_0",
                    "T": "Ah, I see."
                },
                {
                    "N": "_1005",
                    "T": "Then why are we okay?"
                },
                {
                    "N": "Tighnari",
                    "T": "#I'm not sure why you are, but {NICKNAME} and I are fine because our elemental capabilities allow us to adapt to this kind of change."
                },
                {
                    "N": "Tighnari",
                    "T": "Of course, it's not a good idea to spend too much time in areas with concentrated Ley Line energy. The only one who can freely traverse this place is probably the mechanical crab."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Tighnari",
                    "T": "That's about it for the investigation. Help me find an open space. I want to test something."
                }
            ]
        ]
    },
    "1300104": {
        "Desc": "Install a Purification Device",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Environment... No wind... Target parameters... Normal..."
                },
                {
                    "N": "Tighnari",
                    "T": "Setup complete. Excellent — looks like it's working."
                },
                {
                    "N": "_1005",
                    "T": "What's this?"
                },
                {
                    "N": "Tighnari",
                    "T": "A Purification Device I made. It can absorb excess Ley Line energy and temporarily stabilize an area."
                },
                {
                    "N": "_1005",
                    "T": "What a neat thing! Let's set up more and cover the entire region!"
                },
                {
                    "N": "Tighnari",
                    "T": "I wouldn't mind if that would actually work. Unfortunately, once this \"contamination\" is present, it isn't something that a few Purification Devices can fix."
                },
                {
                    "N": "Tighnari",
                    "T": "The Purification Devices have their limits. At best, they can only prevent the contaminated region from expanding temporarily."
                },
                {
                    "N": "Tighnari",
                    "T": "If we want to permanently eradicate the contamination from the Ley Line effluence, we'll need to tackle the source."
                },
                {
                    "N": "_0",
                    "T": "At the heart of the contaminated region?"
                },
                {
                    "N": "Tighnari",
                    "T": "That's right."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "Huh? The mechanical crab is acting a little strange."
                },
                {
                    "N": "Tighnari",
                    "T": "Something's approaching..."
                },
                {
                    "N": "Tighnari",
                    "T": "So that's it. Now that the Ley Line energy has stabilized, the monsters that had left are starting to return."
                },
                {
                    "N": "Tighnari",
                    "T": "Get rid of them quickly! Don't let them get close to the Purification Device!"
                }
            ]
        ]
    },
    "1300106": {
        "Desc": "Defeat the attracted monsters",
        "Step": "The Purification Device will not solve the root problem altogether, but it will prevent the contaminated region from expanding further.",
        "Talk": []
    },
    "1300107": {
        "Desc": "Catch up with the Mechanical Crab",
        "Talk": []
    },
    "1300108": {
        "Desc": "Defeat the nearby mechanical monsters",
        "Step": "After you defeat the gathered monsters, the mechanical crab suddenly starts to run wild.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Whew... That's all of them."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "Hey, where are you— Wait for us!"
                },
                {
                    "N": "_1005",
                    "T": "#Let's hurry and keep up, {NICKNAME}!"
                }
            ]
        ]
    },
    "1300109": {
        "Desc": "Talk to the trapped person",
        "Step": "As it turns out, the mechanical crab had heard someone's cries for help and wanted to help. It seems to be quite different from the \"ferocious\" machine creatures as the people see them...",
        "Talk": [
            [
                {
                    "N": "Jasar",
                    "T": "Aaah... Spare me, please spare me!"
                },
                {
                    "N": "_1005",
                    "T": "Hey, are you okay?"
                },
                {
                    "N": "Tighnari",
                    "T": "These injuries are superficial. Don't move. I'll patch you up."
                },
                {
                    "N": "Jasar",
                    "T": "Who are you all? What happened to those mechanical monsters?"
                },
                {
                    "N": "_1005",
                    "T": "Don't worry, we took care of them!"
                },
                {
                    "N": "Jasar",
                    "T": "Good. Haha... That's good..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Jasar",
                    "T": "Aaah, it's a monster! Hurry, attack it!"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "_1005",
                    "T": "How do we explain this? Crabby here isn't a bad guy."
                },
                {
                    "N": "_1005",
                    "T": "It heard you shouting for help and brought us here to rescue you."
                },
                {
                    "N": "Jasar",
                    "T": "It's faking it — it has to be! Maybe it's gonna partner up with the other mechanical monsters and kill me!"
                },
                {
                    "N": "Jasar",
                    "T": "Do you know what's inside the forest? It's all... It's all crawling with mechanical freaks!"
                },
                {
                    "N": "Jasar",
                    "T": "I just came here to pick herbs, but I accidentally went into the contaminated region and almost died."
                },
                {
                    "N": "Tighnari",
                    "T": "..."
                },
                {
                    "N": "Jasar",
                    "T": "I gotta get out of here. Yes... Yes, I have to escape..."
                },
                {
                    "N": "Jasar",
                    "T": "Be careful. These mechanical life forms are up to no good. It'd be best if you stayed far, far away from them!"
                },
                {
                    "N": "Jasar",
                    "T": "No wonder the Akademiya wanted to completely ban the existence of mechanical life forms. Those things should be annihilated..."
                },
                {
                    "N": "_1005",
                    "T": "Are you okay?"
                },
                {
                    "N": "Tighnari",
                    "T": "His inarticulate speech and bodily tremors indicate psyche disruption. He's been inside the contaminated region for too long."
                },
                {
                    "N": "Tighnari",
                    "T": "We've purified the Ley Line energy over there. Follow this path out and you'll soon see the village."
                },
                {
                    "N": "Tighnari",
                    "T": "When he gets to the village, someone will bring him to Collei for help. I already prepared medication that will return him to normal."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_0",
                    "T": "It looks like it's..."
                },
                {
                    "N": "_0",
                    "T": "Expecting something?"
                },
                {
                    "N": "Tighnari",
                    "T": "Hmm... So you think you did a \"good job\" and want a part as your reward?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "It's so hard to understand..."
                },
                {
                    "N": "Tighnari",
                    "T": "Alright, regardless of what you're thinking, you did some real good this time."
                },
                {
                    "N": "Tighnari",
                    "T": "That's why I'll give you another mechanical part. Need any help with it?"
                },
                {
                    "N": "Karkata",
                    "T": "Kelukulo."
                },
                {
                    "N": "Tighnari",
                    "T": "Guess not. Well, make sure to hang on to it. What was going through your owner's mind when he made you, I wonder? You're like a giant mechanical crab on the outside and a fluffy little hamster on the inside."
                },
                {
                    "N": "Tighnari",
                    "T": "And also, how do you feel about that person saying that you're as evil as the other mechanical life forms?"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "_1005",
                    "T": "Okay, it definitely doesn't understand you."
                },
                {
                    "N": "Tighnari",
                    "T": "It seems like it possesses limited understanding only towards matters related to mechanical components."
                },
                {
                    "N": "Tighnari",
                    "T": "\"Help others to get parts.\" That's probably its thought process. As for why it — rather, its owner — is collecting so many components, I'm not sure."
                },
                {
                    "N": "Tighnari",
                    "T": "It's getting late. Let's set up camp for the night. We'll explore further tomorrow after a night's rest."
                }
            ]
        ]
    },
    "1300105": {
        "Desc": "Look for a spot to set up a tent",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "So this is the contaminated region that everyone's been talking about... It definitely looks different from normal!"
                },
                {
                    "N": "_1005",
                    "T": "It's like... really creepy and suffocating..."
                },
                {
                    "N": "Tighnari",
                    "T": "Do you feel unwell at all?"
                },
                {
                    "N": "_0",
                    "T": "Doing fine so far."
                },
                {
                    "N": "Tighnari",
                    "T": "Good. It's as I predicted: Elemental power confers a degree of resistance against the contaminated region's influence."
                },
                {
                    "N": "_1005",
                    "T": "How do you know that?"
                },
                {
                    "N": "Tighnari",
                    "T": "I haven't entered the contaminated region for a proper investigation, but I've conducted quite a few controlled experiments."
                },
                {
                    "N": "Tighnari",
                    "T": "My observations during our time here have all but confirmed my hypothesis. Look at these flowers. How are they different from normal?"
                },
                {
                    "N": "_0",
                    "T": "They're more colorful?"
                },
                {
                    "N": "_0",
                    "T": "They're brighter?"
                },
                {
                    "N": "Tighnari",
                    "T": "This flower species is formally known as the \"Sumeru Rose,\" but it is also known as the \"Ley Line Lodestar.\""
                },
                {
                    "N": "Tighnari",
                    "T": "They're sensitive to Ley Lines and emit varying amounts of light in response. Excessive brightness indicates a dangerous level of Ley Line activity in the surrounding area."
                },
                {
                    "N": "Tighnari",
                    "T": "From the looks of things, the Ley Lines around here are already out of control."
                },
                {
                    "N": "_1005",
                    "T": "You're saying that the contamination here is coming from Ley Lines?"
                },
                {
                    "N": "Tighnari",
                    "T": "I can't confirm that right now, but I think that is the case."
                },
                {
                    "N": "Tighnari",
                    "T": "Let's take another look around and see if we can discover more clues."
                }
            ]
        ]
    },
    "1300112": {
        "Desc": "Prepare to make camp",
        "Step": "You have found a suitable spot to pitch a tent. Time to make camp here.",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Let's set up camp here."
                },
                {
                    "N": "_1005",
                    "T": "Alright! Paimon also thinks it's a good spot!"
                },
                {
                    "N": "Tighnari",
                    "T": "Oh? Any particular reason?"
                },
                {
                    "N": "_1005",
                    "T": "This place is perfect to put up a big tent!"
                },
                {
                    "N": "_1005",
                    "T": "We can also set up a cooking pot and cook tons of delicious food!"
                },
                {
                    "N": "_0",
                    "T": "A very Paimon reason."
                },
                {
                    "N": "Tighnari",
                    "T": "You're not wrong, but the primary reason for choosing this place is because its higher elevation keeps us away from the water vapor below."
                },
                {
                    "N": "Tighnari",
                    "T": "Rainforests are very wet. You should always be careful when spending the night in damp places."
                },
                {
                    "N": "Tighnari",
                    "T": "For the next tasks at hand, let's divide and conquer. I'll set up the tent, you'll be in charge of making the fire, and Paimon will forage for edibles nearby."
                },
                {
                    "N": "_1005",
                    "T": "Leave it to Paimon! Paimon's a pro!"
                },
                {
                    "N": "Tighnari",
                    "T": "I'm not expecting that much. Just do what you can."
                },
                {
                    "N": "???",
                    "T": "Thanks to Tighnari's guidance, you safely start a fire..."
                },
                {
                    "N": "Tighnari",
                    "T": "That's right. You can use rushes to start a fire in the wilderness."
                },
                {
                    "N": "Tighnari",
                    "T": "Their piths are relatively dry and can be readily set aflame. The downside is that they produce a lot of smoke."
                },
                {
                    "N": "_1005",
                    "T": "#*sob* {NICKNAME}, Tighnari... Paimon couldn't find any food."
                },
                {
                    "N": "_1005",
                    "T": "Paimon didn't know that rainforests had so many interesting plants until we came here! There were all sorts of weird-looking mushrooms, but Paimon didn't know which ones were edible."
                },
                {
                    "N": "_1005",
                    "T": "Paimon also saw wild berries on the ground, and Paimon was gonna fly over and pick them up, but the dead leaves on top suddenly started moving! It freaked Paimon out!"
                },
                {
                    "N": "Tighnari",
                    "T": "Those were probably Deadleaf Butterflies. They camouflage as dead leaves to evade predators."
                },
                {
                    "N": "Tighnari",
                    "T": "My guess is that they mistook you for a bird when you flew over, so they fled. Little did they know that you were more scared than they were."
                },
                {
                    "N": "Tighnari",
                    "T": "Never mind. The tent's up, so you two go rest. I'll forage for food."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "Oh? You found some already."
                },
                {
                    "N": "_0",
                    "T": "You have my gratitude."
                },
                {
                    "N": "_0",
                    "T": "It's more useful than Paimon."
                },
                {
                    "N": "_1005",
                    "T": "Hey!"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "Paimon understands it this time! It wants mechanical parts again!"
                },
                {
                    "N": "Tighnari",
                    "T": "Sorry, no part this time."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Tighnari",
                    "T": "That task wasn't important enough. If every little thing resulted in a reward, then it might start to take advantage of the system."
                },
                {
                    "N": "Tighnari",
                    "T": "I'll note little things like this and give a cumulative reward at a later time."
                },
                {
                    "N": "_0",
                    "T": "Are you running low on parts...?"
                },
                {
                    "N": "Tighnari",
                    "T": "Ahem, that is one reason."
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "_1005",
                    "T": "It looks really sad..."
                },
                {
                    "N": "Tighnari",
                    "T": "...After some further thought, it might come up with some weird misunderstanding if I don't give it something. Alright, here's another for you."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "I'm off to prepare dinner. We'll take shifts on lookout duty tonight. You two can sleep first. I'll wake you up later."
                },
                {
                    "N": "_1005",
                    "T": "We need lookouts?"
                },
                {
                    "N": "Tighnari",
                    "T": "Yes."
                },
                {
                    "N": "Tighnari",
                    "T": "Even though most animals fled because of the Ley Lines, we can't completely let down our guard."
                },
                {
                    "N": "Tighnari",
                    "T": "It's settled, then. I'll set up some pest-repelling devices so poisonous insects don't come crawling into the tent."
                },
                {
                    "N": "Tighnari",
                    "T": "Have a good night. Not too good, though."
                }
            ]
        ]
    },
    "1300110": {
        "Desc": "Go into the tent to rest",
        "Step": "You and Tighnari agree to trade guard shifts. It is your turn to rest first...",
        "Talk": []
    },
    "1300111": {
        "Desc": "Talk to Tighnari",
        "Step": "You wake up after a short nap. Time to go see Tighnari.",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Hm? You're awake earlier than I expected. Did you sleep well?"
                },
                {
                    "N": "_0",
                    "T": "Very well."
                },
                {
                    "N": "Tighnari",
                    "T": "That's good. I was worried that you two wouldn't be able to sleep, so I used two of my homemade incenses."
                },
                {
                    "N": "Tighnari",
                    "T": "Don't worry, they're made from all-natural ingredients. They have a light fragrance and aren't harmful to the body."
                },
                {
                    "N": "_0",
                    "T": "I'm still a little sleepy."
                },
                {
                    "N": "Tighnari",
                    "T": "You have to maintain constant vigilance in dangerous places like this. Yawning all the time like that is no good."
                },
                {
                    "N": "Tighnari",
                    "T": "If you can't stay awake, it's okay. Go sleep some more. I'm not tired yet."
                },
                {
                    "N": "_0",
                    "T": "I can manage."
                },
                {
                    "N": "Tighnari",
                    "T": "Really? You don't need to push yourself. I'm used to staying up all night because many plant and animal species can only be observed during nighttime."
                },
                {
                    "N": "Tighnari",
                    "T": "Speaking of which, have you seen the crab?"
                },
                {
                    "N": "Tighnari",
                    "T": "It was scampering around over there just now, but I don't know where it went."
                },
                {
                    "N": "_0",
                    "T": "Are you wary of it?"
                },
                {
                    "N": "Tighnari",
                    "T": "So you can tell. My suspicion is less towards the crab, and more directed to its unrevealed owner."
                },
                {
                    "N": "Tighnari",
                    "T": "A Ley Line effluence of this magnitude occurred without any warning. Someone probably disrupted the natural flow of the Ley Lines."
                },
                {
                    "N": "Tighnari",
                    "T": "Until we fully understand the situation, take extra caution. The Akademiya has banned mechanical life form research for years, so the origin of these creatures is very suspect."
                },
                {
                    "N": "_0",
                    "T": "Banned research?"
                },
                {
                    "N": "_0",
                    "T": "The Akademiya previously conducted research on mechanical life forms?"
                },
                {
                    "N": "Tighnari",
                    "T": "Topics related to mechanical life forms were popular in the Spantamad for a time. Some of my juniors had also thrown themselves into such research."
                },
                {
                    "N": "Tighnari",
                    "T": "They proposed an intriguing idea: Use our knowledge to create a \"new and practical\" life form that could help humanity \"conquer nature.\""
                },
                {
                    "N": "Tighnari",
                    "T": "However, no matter which modules or parts are installed, a machine is innately a construct that receives and executes commands. They can never possess self-awareness like us or other living organisms."
                },
                {
                    "N": "Tighnari",
                    "T": "In their pursuit to discover the differences between mechanical and biological life forms, zealous researchers performed unregulated vivisections and other absurdly cruel experiments on animals. Research on mechanical life forms was thus banned."
                },
                {
                    "N": "Tighnari",
                    "T": "The irony is that the researchers became even more impetuous afterward. Who knows, maybe the subject will be unbanned in a few years."
                },
                {
                    "N": "_0",
                    "T": "Do you not like this area of research?"
                },
                {
                    "N": "Tighnari",
                    "T": "Hmm... That's a difficult question to answer."
                },
                {
                    "N": "Tighnari",
                    "T": "I'm interested in the topic of mechanical life, but I don't like the researchers' attitudes."
                },
                {
                    "N": "_0",
                    "T": "Anything in particular, or...?"
                },
                {
                    "N": "_0",
                    "T": "Because the \"conquest of nature\" is bad?"
                },
                {
                    "N": "Tighnari",
                    "T": "It's just my personal opinion."
                },
                {
                    "N": "Tighnari",
                    "T": "My ancestors and the Valuka Shuna of the desert coexisted together and supported one another. The bloodline of my people was born from this symbiotic relationship."
                },
                {
                    "N": "Tighnari",
                    "T": "So to me, all life is important. To understand life, you must first respect it."
                },
                {
                    "N": "Tighnari",
                    "T": "Life is not an expendable commodity, and knowledge should not be wielded like a scepter. These are the points of contention I have with some researchers, and why I left the Akademiya."
                },
                {
                    "N": "Tighnari",
                    "T": "Once you start placing yourself above other life forms, I mean... What kind of results do you expect to get from researching pure life with impure intentions?"
                },
                {
                    "N": "_0",
                    "T": "I understand what you mean."
                },
                {
                    "N": "Tighnari",
                    "T": "Really? Well, I'm glad to hear it."
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "Coffee? Did you prepare this for us?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_0",
                    "T": "It looks like it wants a reward again..."
                },
                {
                    "N": "Tighnari",
                    "T": "Alright, seeing that you're working so hard to help out, I'll give you another part."
                },
                {
                    "N": "Tighnari",
                    "T": "You're not planning on using it? Many of your own parts are critically degraded, and you're running low on power."
                },
                {
                    "N": "Karkata",
                    "T": "Kelukulo."
                },
                {
                    "N": "Tighnari",
                    "T": "#Alright, suit yourself. Oh and thanks for the coffee, but I'm about to go to sleep. Leave it with {NICKNAME}."
                },
                {
                    "N": "Tighnari",
                    "T": "The night watch is yours. Stay safe."
                },
                {
                    "N": "_1005",
                    "T": "#S—Sorry, {NICKNAME}, Paimon slept through the entire night..."
                },
                {
                    "N": "_0",
                    "T": "It's okay."
                },
                {
                    "N": "_1005",
                    "T": "Really? You're not mad?"
                },
                {
                    "N": "_0",
                    "T": "Your punishment is solo watch duty."
                },
                {
                    "N": "_1005",
                    "T": "Hehe. Don't worry, Paimon will be sure to stay awake next time!"
                },
                {
                    "N": "Tighnari",
                    "T": "#Good morning, {NICKNAME} and Paimon. Quick question, do you feel off at all?"
                },
                {
                    "N": "_0",
                    "T": "I'm a little dizzy."
                },
                {
                    "N": "Tighnari",
                    "T": "Me too. The farther in we go, the closer we get to the source of the Ley Line effluence. We'll be heading out earlier today. I'll take down the tent."
                },
                {
                    "N": "_1005",
                    "T": "Is there something we can do?"
                },
                {
                    "N": "Tighnari",
                    "T": "Extinguish our fire so we don't set the entire forest aflame."
                },
                {
                    "N": "Tighnari",
                    "T": "Also, retrieve the pest-repelling devices from last night. We don't want to affect the ecosystem here."
                },
                {
                    "N": "_1005",
                    "T": "Got it! Paimon will take care of the fire!"
                },
                {
                    "N": "_0",
                    "T": "I'll retrieve the pest-repelling devices."
                },
                {
                    "N": "Tighnari",
                    "T": "Alright. Let's meet back here later."
                }
            ]
        ]
    },
    "1300114": {
        "Desc": "Retrieve the pest-repelling devices",
        "Step": "Now you understand how Tighnari feels. Make sure to retrieve all the camping equipment before you set out.",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Hm? You're still awake?"
                }
            ]
        ]
    },
    "1300116": {
        "Desc": "Prepare to set off",
        "Step": "Your preparations are complete. It's time to go to the heart of the contaminated region.",
        "Talk": [
            [
                {
                    "N": "???",
                    "T": "Last night's pest-repelling devices are recovered..."
                },
                {
                    "N": "Tighnari",
                    "T": "Alright, it's about time to head out. As we go further in, we may encounter more berserk machines."
                },
                {
                    "N": "Tighnari",
                    "T": "The effects of the Ley Lines will also increase. If you're struggling, it would be wise to avoid conflict."
                },
                {
                    "N": "Tighnari",
                    "T": "Try to conserve as much energy as possible until we reach the source of the contamination."
                }
            ]
        ]
    },
    "1300115": {
        "Desc": "",
        "Talk": []
    },
    "1300117": {
        "Desc": "Go to the depths of the contaminated region",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Guess it'll have to wait until we return."
                },
                {
                    "N": "_0",
                    "T": "What's going on?"
                },
                {
                    "N": "Tighnari",
                    "T": "I also just remembered that I forgot to apply essential oil to my tail. You probably noticed that it isn't as glossy as usual."
                },
                {
                    "N": "_0",
                    "T": "...Nope, I don't see it."
                },
                {
                    "N": "Tighnari",
                    "T": "Hmm... Perhaps one night doesn't make too much of a difference."
                },
                {
                    "N": "Tighnari",
                    "T": "I'll make a new blend when we get back. It should make up for last night. I should have some leftover herbs from last month..."
                }
            ]
        ]
    },
    "1300118": {
        "Desc": "Defeat the monsters in your path",
        "Talk": []
    },
    "1300113": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Paimon's getting sleepy... Ah! Is this because of the Ley Lines?"
                },
                {
                    "N": "_1005",
                    "T": "It's been a while since we camped outside like this!"
                },
                {
                    "N": "_1005",
                    "T": "#Hehe... This feels like when we just started adventuring together! Nighty night! {NICKNAME}!"
                },
                {
                    "N": "???",
                    "T": "Paimon gradually falls asleep while reminiscing..."
                }
            ]
        ]
    },
    "1300201": {
        "Desc": "Check the unusual area",
        "Step": "The mechanical crab has stopped at a certain point. The source of the contamination seems to be within...",
        "Talk": [
            [
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "It stopped here!"
                },
                {
                    "N": "Tighnari",
                    "T": "Upon closer inspection, the plants here are really different."
                },
                {
                    "N": "Tighnari",
                    "T": "Ley Line energies are also stronger here. This may be the place we've been looking for."
                },
                {
                    "N": "Tighnari",
                    "T": "Ready yourselves. We're going in."
                }
            ]
        ]
    },
    "1300202": {
        "Desc": "Enter the contamination's source",
        "Talk": []
    },
    "1300203": {
        "Desc": "Defeat the mechanical monsters that lurk here",
        "Talk": []
    },
    "1300204": {
        "Desc": "Examine the strange device",
        "Step": "So it seems that the Ley Line effluence was man-made all along. You have to turn the Ley Line Extractor off.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "What is this?"
                },
                {
                    "N": "_0",
                    "T": "I've never seen a machine like this before..."
                },
                {
                    "N": "_0",
                    "T": "I don't feel too well..."
                },
                {
                    "N": "Tighnari",
                    "T": "Ley Line energy is spilling out from here."
                },
                {
                    "N": "Tighnari",
                    "T": "This device... It's extracting energy from the Ley Lines without end."
                },
                {
                    "N": "Tighnari",
                    "T": "Who in the world would do this without considering the consequences? The Ley Lines won't be able to repair themselves if their flow is perpetually disrupted like this."
                },
                {
                    "N": "_1005",
                    "T": "That's terrible... We have to stop it!"
                },
                {
                    "N": "_1005",
                    "T": "Let Paimon see... Ugh, Paimon doesn't see controls anywhere!"
                },
                {
                    "N": "_0",
                    "T": "I'm starting to get dizzy..."
                },
                {
                    "N": "Tighnari",
                    "T": "Standing here is equivalent to being directly showered in Ley Line energy, which may cause irreversible damage to your body."
                },
                {
                    "N": "Tighnari",
                    "T": "#{NICKNAME}, take Paimon and get out of here. I'll see if I can find a way to turn this thing off."
                },
                {
                    "N": "_1005",
                    "T": "But... You're also vulnerable to the Ley Lines, right?"
                },
                {
                    "N": "_1005",
                    "T": "We're staying. We can't leave you here by yourself!"
                },
                {
                    "N": "Tighnari",
                    "T": "Then let's look for it together. If there is no control unit here, then there must be a \"trapdoor\" somewhere—"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Karkata",
                    "T": "Kalu! Kalu!"
                },
                {
                    "N": "_1005",
                    "T": "You know where it is? Hey, wait for us!"
                }
            ]
        ]
    },
    "1300212": {
        "Desc": "",
        "Talk": []
    },
    "1300216": {
        "Desc": "Follow the mechanical crab and continue your search",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": ""
                },
                {
                    "N": "_1005",
                    "T": ""
                },
                {
                    "N": "_0",
                    "T": ""
                },
                {
                    "N": "Tighnari",
                    "T": ""
                },
                {
                    "N": "_1005",
                    "T": ""
                },
                {
                    "N": "_0",
                    "T": ""
                }
            ]
        ]
    },
    "1300205": {
        "Desc": "Check on the person who has collapsed",
        "Step": "You see a silent person in the lab. What in the world happened here?",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Look! Someone's here!"
                },
                {
                    "N": "_1005",
                    "T": "Are you the one that's taking the Ley Lines' energy? Turn off that machine now!"
                },
                {
                    "N": "_1005",
                    "T": "Why aren't you saying anything? Too ashamed?"
                },
                {
                    "N": "Tighnari",
                    "T": "...His body is cold."
                },
                {
                    "N": "Tighnari",
                    "T": "It's emaciated, and his eyes are sunken, likely from chronic malnourishment and stress. He collapsed and never got back up. What exactly happened here?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "...Almost forgot about you. Here, this is the last one."
                },
                {
                    "N": "Karkata",
                    "T": "Kalu! Kalu!"
                },
                {
                    "N": "_1005",
                    "T": "What is it doing?"
                },
                {
                    "N": "Tighnari",
                    "T": "I'm not sure. Judging by this room's layout, this place was a laboratory. We should find a repository of research documents if we keep going."
                },
                {
                    "N": "Tighnari",
                    "T": "The file room will definitely give us some clues, so let's go take a look. Maybe we can piece together what happened here."
                }
            ]
        ]
    },
    "1300206": {
        "Desc": "Collect documents nearby (0/3)",
        "Talk": []
    },
    "1300207": {
        "Desc": "Collect documents nearby (1/3)",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Did you two find anything?"
                },
                {
                    "N": "Tighnari",
                    "T": "There are a lot of lab notes, but it would take way too long to read through them all. I found a tape recording used for an experiment, and based on its serial number, it's from two years ago."
                },
                {
                    "N": "_1005",
                    "T": "Tape recording?"
                },
                {
                    "N": "Tighnari",
                    "T": "Yes. The Spantamad created a device that visually records experiments and consolidates the final production into a tape."
                },
                {
                    "N": "Tighnari",
                    "T": "However, these devices are expensive to make and aren't entirely stable. That's why they are only used in some laboratories and do not see wider usage."
                },
                {
                    "N": "_1005",
                    "T": "C'mon, let's watch it!"
                },
                {
                    "N": "Tighnari",
                    "T": "Hold on, let me figure out how to play the tape. Okay, this should do it."
                },
                {
                    "N": "???",
                    "T": "After inserting the tape, the projector gradually begins to display a recording of the past..."
                },
                {
                    "N": "Abattouy",
                    "T": "Karkata? Karkata? Seriously, I look away for one second and you're gone?"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "There you are! Look here — this is our new home!"
                },
                {
                    "N": "Abattouy",
                    "T": "I, Abattouy, will unleash my talents here and amaze those ancient fossils at the Akademiya!"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "Oh? You're also quite happy! Karkata, do you know what we're about to do?"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "Hahaha... Yes, I thought not."
                },
                {
                    "N": "Abattouy",
                    "T": "Listen up, Karkata. I'm going to make a mechanical life form that can be mass-produced. The technology will be unlike anything else that exists."
                },
                {
                    "N": "Abattouy",
                    "T": "I'll use mechanical organs, and electric currents will course through them like blood. A steel-cast heart that will beat forever, and a brain of myriad components that can think like mine."
                },
                {
                    "N": "Abattouy",
                    "T": "Inspiration from the ruins, and the research that the Akademiya had banned... I hope everything can start anew from this place."
                },
                {
                    "N": "Abattouy",
                    "T": "When you can understand our language and live among us, you will no longer be a boring machine, but a truly living being!"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "It's fine. You will understand. One day, you will understand me..."
                },
                {
                    "N": "???",
                    "T": "The recording ends here."
                },
                {
                    "N": "_1005",
                    "T": "Karkata is the mechanical crab, right?"
                },
                {
                    "N": "_1005",
                    "T": "And that researcher named Abattouy said he wanted to prove something to the Akademiya?"
                },
                {
                    "N": "_0",
                    "T": "Banned research..."
                },
                {
                    "N": "Tighnari",
                    "T": "I remember now. I had a junior researcher named Abattouy. He was expelled from the Akademiya for researching mechanical life forms."
                },
                {
                    "N": "_1005",
                    "T": "\"Junior researcher\"?"
                },
                {
                    "N": "_0",
                    "T": "\"Junior researcher\"?"
                },
                {
                    "N": "Tighnari",
                    "T": "Yeah, what's wrong?"
                },
                {
                    "N": "_1005",
                    "T": "Nothing, Paimon was just wondering... Doesn't Abattouy look older than you?"
                },
                {
                    "N": "Tighnari",
                    "T": "He is, but academic progression isn't tied to age. I finished my studies a while ago, so subsequent students generally considered me as their senior."
                },
                {
                    "N": "_1005",
                    "T": "Ohhh!"
                },
                {
                    "N": "Tighnari",
                    "T": "Of course, age can be an issue. For a while, people always dragged me into pictures. I felt like some kind of animal on display..."
                },
                {
                    "N": "Tighnari",
                    "T": "Ahem, that isn't important. Let's go and see if we can find other tape recordings."
                }
            ]
        ]
    },
    "1300208": {
        "Desc": "Collect documents nearby (2/3)",
        "Step": "It seems that the collapsed person was Karkata's creator, Abattouy. However, what was Karkata gathering all these mechanical components for?",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Look, look! Paimon found another tape!"
                },
                {
                    "N": "_1005",
                    "T": "A date is written on it! Let Paimon see... It's from half a year ago!"
                },
                {
                    "N": "Tighnari",
                    "T": "That's quite the time gap. I wonder what happened in between..."
                },
                {
                    "N": "???",
                    "T": "After inserting the tape, the projector gradually begins to display a recording of the past..."
                },
                {
                    "N": "Abattouy",
                    "T": "It's rare that you malfunction because of an operational error."
                },
                {
                    "N": "Abattouy",
                    "T": "Seems that making coffee is still somewhat difficult for you. Or is there an issue with my set parameters?"
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Abattouy",
                    "T": "Alright, there you go."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "Water entered the chela and caused it to short-circuit, so it couldn't receive signals from the ganglion..."
                },
                {
                    "N": "Abattouy",
                    "T": "Look at me, talking to you like this. You can't understand me anyway, can you? It's fine. I swapped in some new parts, so you should be alright now."
                },
                {
                    "N": "Abattouy",
                    "T": "Try moving around. Everything in working order?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "Be more careful next time! We're tight on money right now, so we don't have a lot of parts or power to spare."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "I'm glad. Karkata, did you know? Yesterday, I dreamed that you could talk."
                },
                {
                    "N": "Abattouy",
                    "T": "Aren't the bunch at the Akademiya always saying things like \"mechanical intelligence is just an extension of statistics\"? They were blown away when they saw us talking with each other."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "Too bad it was just a dream. Forget holding a conversation with me — you're so simple that you probably wouldn't even notice if I died."
                },
                {
                    "N": "Abattouy",
                    "T": "Never mind, I should probably be worrying about next month's power..."
                },
                {
                    "N": "???",
                    "T": "The recording ends here."
                },
                {
                    "N": "Tighnari",
                    "T": "After Abattouy left the Akademiya, everyone lost contact with him."
                },
                {
                    "N": "Tighnari",
                    "T": "I thought he was so despondent that he gave up on researching mechanical life forms. Instead, he had holed up here and continued his experiments."
                },
                {
                    "N": "_1005",
                    "T": "Paimon doesn't feel like he's a bad person. He even changed out Karkata's broken parts. Why would he mess with Ley Lines?"
                },
                {
                    "N": "_0",
                    "T": "He mentioned something about \"power.\""
                },
                {
                    "N": "Tighnari",
                    "T": "Let's keep looking around."
                }
            ]
        ]
    },
    "1300209": {
        "Desc": "Stop the Ley Line Extractor",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Following the serial numbers, the next recording should be here."
                },
                {
                    "N": "Tighnari",
                    "T": "The writing is sloppy. Perhaps his state of mind had changed."
                },
                {
                    "N": "Tighnari",
                    "T": "There's also an undated tape in the wrong spot. It doesn't seem like Abattouy put it there."
                },
                {
                    "N": "_1005",
                    "T": "Maybe Karkata helped him with sorting?"
                },
                {
                    "N": "Tighnari",
                    "T": "It's hard to say. These are the last two tape recordings. Let's watch them."
                },
                {
                    "N": "???",
                    "T": "After inserting the tape, the projector gradually begins to display a recording of the past..."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Karkata",
                    "T": "Kuli..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "Sorry, Karkata. I was just thinking about something. Today might become a special day."
                },
                {
                    "N": "Abattouy",
                    "T": "In my recent experiments, I successfully gave you a living being's \"instincts.\""
                },
                {
                    "N": "Abattouy",
                    "T": "When you're low on power or if one of your parts is damaged, you will prioritize your \"survival\" command and proactively recharge or replace your parts."
                },
                {
                    "N": "Abattouy",
                    "T": "That is a very dangerous thing. And today, I did something even more dangerous."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "I've officially activated the third generation Ley Line Extractor. The Ley Lines will serve as our power source from now on."
                },
                {
                    "N": "Abattouy",
                    "T": "Conducting research on mechanical life forms requires a large amount of power. Even if I scrimped and saved, the Mora I have wouldn't last for long."
                },
                {
                    "N": "Abattouy",
                    "T": "I'm also getting tired, Karkata. I don't know what's driving me to continue with this research anymore."
                },
                {
                    "N": "Abattouy",
                    "T": "They say that even if it simulates the operation of a living creature's organs, a machine is still an ice-cold tool. I want to prove them wrong. I want to turn you into a living, breathing, and talking being..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "I'm not talking about anything cheerful, Karkata."
                },
                {
                    "N": "Abattouy",
                    "T": "Modules for language, emotion, and movement... I've been working my absolute hardest to augment and refine your functionalities, but I've never seen an effective response."
                },
                {
                    "N": "Abattouy",
                    "T": "You are my finest success, but even you can't understand me. All you can do is execute limited responses based on preset commands or keywords."
                },
                {
                    "N": "Abattouy",
                    "T": "Karkata, I wish you could speak to me, even just once..."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "*sigh* Yes. You cannot understand me, so you cannot answer me, either."
                },
                {
                    "N": "Abattouy",
                    "T": "It is what it is. In a few days, I'll sell the failed Ley Line Extractor for some Mora and continue my experiments. Life goes on, and I have to as well — I don't have any other choice."
                },
                {
                    "N": "???",
                    "T": "The recording ends here. Tighnari quietly inserts the next tape."
                },
                {
                    "N": "Abattouy",
                    "T": "This is new."
                },
                {
                    "N": "Abattouy",
                    "T": "If I place another two control modules here to simulate the brain's thalamus..."
                },
                {
                    "N": "Abattouy",
                    "T": "Agh... Of course my heart decides to act up now. Why did I cut medication from our expenses...? Karkata? Come help me— *cough*"
                },
                {
                    "N": "Abattouy",
                    "T": "Strange... I feel weak..."
                },
                {
                    "N": "Abattouy",
                    "T": "Oh no, I have to shut down the extractor..."
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Abattouy",
                    "T": "Shut them off... *cough* *cough* If we let them recharge indefinitely... they'll... go out of control..."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "Right... I never input a command to shut down the extractor, so you don't understand what I'm saying..."
                },
                {
                    "N": "Abattouy",
                    "T": "In the end, it's just like the Akademiya said: Mechanical life forms only bring danger. My research... Was there any point to it at all?"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Abattouy",
                    "T": "I'm sorry, Karkata... In the end, I still wasn't able to turn you... into a true mechanical life form..."
                },
                {
                    "N": "???",
                    "T": "The last recording ends here."
                },
                {
                    "N": "Tighnari",
                    "T": "I see, so the Ley Line effluence was an accident."
                },
                {
                    "N": "Tighnari",
                    "T": "After Abattouy's unexpected death, the mechanical monsters were driven by their \"instincts\" and continuously drew out power from the Ley Line Extractor. This eventually resulted in severe damage to the Ley Lines."
                },
                {
                    "N": "_0",
                    "T": "Then, Karkata..."
                },
                {
                    "N": "_1005",
                    "T": "Paimon understands, then why didn't Karkata go haywire like the other machines?"
                },
                {
                    "N": "Tighnari",
                    "T": "Because Karkata is different from the other machines."
                },
                {
                    "N": "Tighnari",
                    "T": "To Abattouy, for a machine to truly be considered a mechanical life form, it must possess features similar to any other living organism... It should be structured similarly, it must be able to cry and laugh, and it must have the capacity for independent thought..."
                },
                {
                    "N": "Tighnari",
                    "T": "Perhaps only by building such a machine could he have the Akademiya acknowledge his protracted research."
                },
                {
                    "N": "Tighnari",
                    "T": "But if he had slowed down and saw Karkata as a friend instead of as an experimental product, he would have noticed."
                },
                {
                    "N": "Tighnari",
                    "T": "Karkata can't speak, and yet it cares about Abattouy far more than it does about itself."
                },
                {
                    "N": "_1005",
                    "T": "What does that mean?"
                },
                {
                    "N": "Tighnari",
                    "T": "You'll see in a bit. But before that, we have a more urgent task at hand."
                },
                {
                    "N": "Tighnari",
                    "T": "First, let's find the control unit for the Ley Line Extractor and shut it down."
                }
            ]
        ]
    },
    "1300210": {
        "Desc": "Talk to Tighnari",
        "Step": "You turned off the Ley Line device. It's time to go back and check on Karkata.",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "...This should be the control unit."
                },
                {
                    "N": "Tighnari",
                    "T": "Once we turn it off, the Ley Line Extractor should also shut down."
                },
                {
                    "N": "Tighnari",
                    "T": "Without an external force damaging the Ley Lines, they should start to slowly repair themselves."
                },
                {
                    "N": "Tighnari",
                    "T": "Oh, but I bet you two are more worried about Karkata. Let's head back."
                }
            ]
        ]
    },
    "1300215": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "Observe",
                    "T": "(Before you lies a non-operational Karkata and a lifeless Abattouy.)"
                }
            ]
        ]
    },
    "1300211": {
        "Desc": "Return to the lab",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "So... Karkata has been collecting parts because it thinks doing so will \"fix\" its owner?"
                },
                {
                    "N": "Tighnari",
                    "T": "Karkata is unable to understand the concept of \"death.\""
                },
                {
                    "N": "Tighnari",
                    "T": "However, it probably remembers when Abattouy replaced its parts when it malfunctioned, and how that restored it to an operational state."
                },
                {
                    "N": "Tighnari",
                    "T": "It's true that Karkata isn't able to think or understand many topics, but it is like a small child that imitates what adults do."
                },
                {
                    "N": "_1005",
                    "T": "So that's why it kept stealing mechanical parts... But, it can't repair its owner, no matter how hard it tries."
                },
                {
                    "N": "Tighnari",
                    "T": "Yes, but the important thing is that it formed the thought of \"wanting to repair Abattouy.\""
                },
                {
                    "N": "Tighnari",
                    "T": "Who knows how this thought came to be... but it has even suppressed the \"instincts\" that Abattouy had installed."
                },
                {
                    "N": "Tighnari",
                    "T": "If it really is as we've predicted, this research truly will make waves in the Akademiya. It might've been possible to achieve this with ancient technology, but no one has been able to do the same with modern tools."
                },
                {
                    "N": "_1005",
                    "T": "Karkata? Karkata?"
                },
                {
                    "N": "_1005",
                    "T": "Can you hear Paimon? Tighnari says you're awesome!"
                },
                {
                    "N": "_0",
                    "T": "It's not responding..."
                },
                {
                    "N": "Tighnari",
                    "T": "It reached its limit. It hasn't recharged this entire time, nor has it replaced its severely damaged parts."
                },
                {
                    "N": "Tighnari",
                    "T": "It's truly a miracle that it managed to hang on for so long."
                },
                {
                    "N": "Tighnari",
                    "T": "I'm going to go confirm that the Ley Line Extractor has shut down. Come with me."
                },
                {
                    "N": "Tighnari",
                    "T": "Let them... be alone for a while."
                }
            ]
        ]
    },
    "1300213": {
        "Desc": "Check on the Ley Line Extractor",
        "Step": "Karkata could not \"repair\" its master, and it has also reached its limit...",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "The Ley Line Extractor has ceased operations."
                },
                {
                    "N": "Tighnari",
                    "T": "Traces of Ley Line energy are still in the atmosphere, but the effluence's source has been stopped. The Purification Devices will handle the rest."
                },
                {
                    "N": "Tighnari",
                    "T": "Moving on, those affected by the Ley Lines need immediate care. We'll put up an announcement on the bulletin board about the dangers of entering the contaminated region, and for symptomatic individuals to find Collei."
                },
                {
                    "N": "_0",
                    "T": "Karkata..."
                },
                {
                    "N": "_0",
                    "T": "Abattouy's research..."
                },
                {
                    "N": "Tighnari",
                    "T": "According to the Akademiya's policies, we need to bring everything back."
                },
                {
                    "N": "Tighnari",
                    "T": "Research materials related to mechanical life forms will be destroyed, and Karkata will be disassembled and sealed away."
                },
                {
                    "N": "_1005",
                    "T": "What the heck!"
                },
                {
                    "N": "Tighnari",
                    "T": "You two should return first. I'll take care of things here."
                },
                {
                    "N": "Tighnari",
                    "T": "Although we've stopped the source of the effluence, the Ley Line energy in the air exceeds normal values. Your bodies won't be able to hold up if you continue to stay here."
                },
                {
                    "N": "_1005",
                    "T": "B—But..."
                },
                {
                    "N": "Tighnari",
                    "T": "#Listen, {NICKNAME} hasn't rested very well, right?"
                },
                {
                    "N": "Tighnari",
                    "T": "Also, it'll take some time to pack up all the research documents. You're not familiar with this research after all, so you won't be of much use here."
                },
                {
                    "N": "Tighnari",
                    "T": "Tell the Adventurers' Guild that the incident has been resolved, and then get some sleep. We can discuss matters tomorrow."
                },
                {
                    "N": "???",
                    "T": "Tighnari marks out Pardis Dhyai on the map. He usually goes there when doing research."
                },
                {
                    "N": "Tighnari",
                    "T": "Oh, and... Don't talk about Abattouy. The fewer that know about mechanical life form research, the better."
                },
                {
                    "N": "_1005",
                    "T": "Alright... Then, let's go back to Katheryne..."
                }
            ]
        ]
    },
    "1300214": {
        "Desc": "Leave the secret lab",
        "Talk": [
            [
                {
                    "N": "Tighnari",
                    "T": "Why are you still here?"
                },
                {
                    "N": "Tighnari",
                    "T": "I'll take care of this. Go and report to the Adventurers' Guild, and then get some rest."
                }
            ]
        ]
    },
    "1300301": {
        "Desc": "Talk to Katheryne in Sumeru",
        "Step": "You have an appointment with Tighnari tomorrow morning. Best to go tell Katheryne about the contaminated area first.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "...Anyway, so the contaminated region turned out to be a Ley Line effluence deep in the forest. Things are already getting back to normal."
                },
                {
                    "N": "Katheryne",
                    "T": "I see. Thank you for your hard work."
                },
                {
                    "N": "Katheryne",
                    "T": "Once the excess Ley Line energy dissipates from the air, we should be able to make an announcement for residents to resume their normal activities."
                },
                {
                    "N": "Katheryne",
                    "T": "This is the stipulated reward. Please accept it."
                },
                {
                    "N": "???",
                    "T": "After leaving the Adventurers' Guild, Paimon takes you to a quiet place..."
                },
                {
                    "N": "_1005",
                    "T": "Is Karkata... going to be sent back to the Akademiya?"
                },
                {
                    "N": "_1005",
                    "T": "It's already damaged, but Paimon feels sad thinking about it getting disassembled."
                },
                {
                    "N": "_0",
                    "T": "Me too."
                },
                {
                    "N": "_1005",
                    "T": "Oh! Then how about we find Tighnari tomorrow and ask him to not do that?"
                },
                {
                    "N": "_1005",
                    "T": "Paimon really wants to go right now, but Tighnari said that we would \"discuss matters tomorrow.\" We'll probably make him mad if we go now, huh?"
                },
                {
                    "N": "_0",
                    "T": "Probably."
                },
                {
                    "N": "_1005",
                    "T": "Alright then! We'll find Tighnari tomorrow and tell him not to disassemble Karkata!"
                }
            ]
        ]
    },
    "1300302": {
        "Desc": "Wait till 8:00 – 12:00 the next day",
        "Step": "You've completed the commission concerning the contamination area, but can't help thinking about Karkata. Go to Pardis Dhyai tomorrow morning and have a look.",
        "Tips": "Adjust time to 08:00 – 12:00 the next day",
        "Talk": []
    },
    "1300303": {
        "Desc": "Meet Tighnari at Pardis Dhyai",
        "Step": "Tighnari should be in Pardis Dhyai. Head over and look for him.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Tighnari—"
                },
                {
                    "N": "Tighnari",
                    "T": "Shh, keep your voice down."
                },
                {
                    "N": "Tighnari",
                    "T": "The Lilac Daphne, a daphne of the genus Thymelaeaceae, has a strong anticonvulsant effect. It can also be made into an anesthetic powder..."
                },
                {
                    "N": "Tighnari",
                    "T": "Extrapolating from these two data sets, it would be particularly potent against piscine species... Hey, make sure you're getting all this down."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "_1005",
                    "T": "Karkata!?"
                },
                {
                    "N": "Karkata",
                    "T": "Kalu! Kalu!"
                },
                {
                    "N": "Tighnari",
                    "T": "I thought I told you all to keep your voices low. Plants aren't afraid of noise, but your shouting is making my ears ring."
                },
                {
                    "N": "_1005",
                    "T": "Y—You didn't disassemble Karkata?"
                },
                {
                    "N": "Tighnari",
                    "T": "Why would I do that?"
                },
                {
                    "N": "_1005",
                    "T": "But Paimon thought you said, \"According to the Akademiya's policies\"..."
                },
                {
                    "N": "Tighnari",
                    "T": "So that's why you two barged in like barbarians at this hour. Fine, I suppose I wasn't clear enough about this yesterday."
                },
                {
                    "N": "Tighnari",
                    "T": "What I meant was, according to the Akademiya's policies, all products of research must be destroyed. That's why we can't let the Akademiya discover that place."
                },
                {
                    "N": "_0",
                    "T": "So the real reason you stayed back was to..."
                },
                {
                    "N": "Tighnari",
                    "T": "Anyway, the first thing I did was repair Karkata. During my time at the Akademiya, I took an elective course at the Spantamad. Who knew it would prove useful one day."
                },
                {
                    "N": "Tighnari",
                    "T": "We then buried Abattouy together. After organizing the research materials, I kept some as a souvenir, most of it was burned to hide the evidence."
                },
                {
                    "N": "Tighnari",
                    "T": "I'm not with the Akademiya, so what do their policies have to do with me? On the other hand, I am the Forest Watcher of the Avidya Forest. I have a duty to protect all life in the forest."
                },
                {
                    "N": "Tighnari",
                    "T": "All life brought forth in this world has meaning, and Karkata is no exception. If it exists, then it shouldn't be carelessly abandoned or destroyed."
                },
                {
                    "N": "_1005",
                    "T": "Hehe, that's great!"
                },
                {
                    "N": "Karkata",
                    "T": "Kulilu?"
                },
                {
                    "N": "_1005",
                    "T": "Wait, you just said \"life form.\" You recognize Karkata as a true living being now?"
                },
                {
                    "N": "Tighnari",
                    "T": "The possibility exists is all. It's hard to explain Karkata's efforts to \"repair\" Abattouy."
                },
                {
                    "N": "Tighnari",
                    "T": "Abattouy only left behind a small portion of his research. Who knows how many commands he installed."
                },
                {
                    "N": "Tighnari",
                    "T": "Maybe a conflict between all those commands resulted in this sort of behavior."
                },
                {
                    "N": "Tighnari",
                    "T": "From a more rigorous perspective, it is impossible to conclude that Karkata is a real life form, but the possibility exists — I am willing to believe in that."
                },
                {
                    "N": "Karkata",
                    "T": "Kolu!"
                },
                {
                    "N": "Tighnari",
                    "T": "By the way, I'm not interested in continuing research on this subject. I'm just letting it hang out here because this place is relatively secluded."
                },
                {
                    "N": "Tighnari",
                    "T": "But as things stand now, it wouldn't be a bad idea to make it my research assistant. At the very least, it can record my experiments."
                },
                {
                    "N": "Tighnari",
                    "T": "What do you think?"
                },
                {
                    "N": "Karkata",
                    "T": "Kalu! Kalu!"
                }
            ]
        ]
    }
}