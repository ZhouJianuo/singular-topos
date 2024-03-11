// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 90
        },
        {
            "Name": "Xingqiu",
            "ID": "10045",
            "Count": 86
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 82
        },
        {
            "Name": "Chang the Ninth",
            "ID": "1624",
            "Count": 48
        },
        {
            "Name": "Xu",
            "ID": "162701",
            "Count": 21
        },
        {
            "Name": "Changhu",
            "ID": "2062",
            "Count": 19
        },
        {
            "Name": "Gentry Maocai",
            "ID": "162601",
            "Count": 18
        },
        {
            "Name": "Shizhuang the Strong",
            "ID": "1628",
            "Count": 14
        },
        {
            "Name": "Sturdy Wu",
            "ID": "2073",
            "Count": 10
        },
        {
            "Name": "Jifang",
            "ID": "1625",
            "Count": 8
        },
        {
            "Name": "Agent",
            "ID": "10048",
            "Count": 8
        },
        {
            "Name": "Changshun",
            "ID": "2090",
            "Count": 6
        },
        {
            "Name": "Ivanovich",
            "ID": "2072",
            "Count": 6
        },
        {
            "Name": "Bolai",
            "ID": "2013",
            "Count": 5
        },
        {
            "Name": "Xu",
            "ID": "1627",
            "Count": 4
        }
    ],
    "Num": "Fabulae Textile Chapter: Act I",
    "Title": "Bookworm Swordsman",
    "IT": "Xingqiu",
    "Tab": "",
    "Icon": "UI_ChapterIcon_Xingqiu",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 12000,
            "Name": "Justice, for Books' Sake",
            "Desc": "Paimon wants to know whether the Wanwen Bookhouse has the Liyue volume of the Teyvat Travel Guide in stock.",
            "Track": [
                12001
            ],
            "R": [
                112000
            ],
            "RP": [],
            "Sub": [
                1200001,
                1200003,
                1200004,
                1200005,
                1200006,
                1200009,
                1200011,
                1200010
            ]
        },
        {
            "_id": 12001,
            "Name": "Know Thyself, Know Thy Enemy",
            "Desc": "Your book search sent you to Qingce Village to look for Chang the Ninth. But you arrived to find thugs are trying to force Chang into a bad business deal. Xingqiu won't stand for this, and wants to find out more about the business magnate behind it — Gentry Maocai.",
            "Track": [
                12002
            ],
            "R": [
                112001
            ],
            "RP": [],
            "Sub": [
                1200101,
                1200103,
                1200106,
                1200107,
                1200108
            ]
        },
        {
            "_id": 12002,
            "Name": "Calm Before the Storm",
            "Desc": "It turns out Gentry Maocai needs a great deal of Cor Lapis to satisfy an order from the Fatui. Xingqiu has written a letter to the Feiyun Commerce Guild, hoping that they can help.",
            "Track": [
                12003
            ],
            "R": [
                112002
            ],
            "RP": [],
            "Sub": [
                1200201,
                1200203,
                1200202,
                1200221,
                1200204,
                1200205,
                1200206,
                1200215,
                1200222,
                1200207,
                1200208,
                1200209,
                1200212,
                1200213,
                1200219,
                1200220,
                1200214,
                1200223,
                1200210,
                1200211
            ]
        },
        {
            "_id": 12003,
            "Name": "Justice Is Its Own Reward",
            "Desc": "As per Xingqiu's plan, the Feiyun Commerce Guild bought up all the Cor Lapis in Liyue Harbor. All that remains is to purchase Chang the Ninth's batch and Gentry Maocai will have nowhere left to turn.",
            "Track": [],
            "R": [
                112003
            ],
            "RP": [],
            "Sub": [
                1200303,
                1200304,
                1200305,
                1200310,
                1200307,
                1200311,
                1200308,
                1200309
            ]
        }
    ]
}

var _sq = {
    "1200001": {
        "Desc": "Go to the Wanwen Bookhouse in Liyue Harbor",
        "Step": "You and Paimon are looking to purchase a copy of the Liyue volume of the Teyvat Travel Guide in Liyue Harbor, intending to use it to visit various places of note throughout the region.",
        "Talk": []
    },
    "1200003": {
        "Desc": "Ask Jifang about the travel guide",
        "Talk": [
            [
                {
                    "N": "Jifang",
                    "T": "Feel free to take a look around, there's no obligation to buy."
                },
                {
                    "N": "_1005",
                    "T": "We're looking for the Liyue volume of the Teyvat Travel Guide. Do you have it in stock?"
                },
                {
                    "N": "Jifang",
                    "T": "Sorry dear, we stopped stocking that a very long time ago. It just wasn't selling."
                },
                {
                    "N": "_1005",
                    "T": "Huh!? But the Mondstadt volume was so interesting! Bummer..."
                },
                {
                    "N": "Jifang",
                    "T": "The thing is, the author made it too personal, and the result wasn't really much of a guide."
                },
                {
                    "N": "Jifang",
                    "T": "It barely sold any copies, and the few travelers that did buy it made complaints afterward."
                },
                {
                    "N": "_0",
                    "T": "Too much passion, not enough clarity?"
                },
                {
                    "N": "_0",
                    "T": "Content was a little too wild, huh?"
                },
                {
                    "N": "_1005",
                    "T": "Well, that's a shame. The Mondstadt volume was a good read, even just as an adventurer's diary."
                },
                {
                    "N": "Jifang",
                    "T": "The fact remains that I don't have it in stock. If you must read it, try your luck at Chang the Ninth's place."
                },
                {
                    "N": "_1005",
                    "T": "Who's Chang the Ninth?"
                },
                {
                    "N": "Jifang",
                    "T": "A book collector who lives in Qingce Village. He's a complete grouch — but he will behave himself if the conversation is about books."
                },
                {
                    "N": "Jifang",
                    "T": "He was a regular customer here back when he lived in Liyue Harbor, and I still send him the odd out-of-print book or two every now and then."
                },
                {
                    "N": "Jifang",
                    "T": "The place where he lives is difficult to get to. You need to head to the mountain just behind Qingce Village, then follow the wooden walkway all the way up..."
                },
                {
                    "N": "Xingqiu",
                    "T": "Did somebody say \"out-of-print books\"?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Is there a chance that volume six of \"Legend of the Shattered Halberd\" is also in his collection?"
                },
                {
                    "N": "_0",
                    "T": "Who are you?"
                },
                {
                    "N": "_0",
                    "T": "You shouldn't sneak up on people like that!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Apologies my liege, where are my manners? My name is Xingqiu, a humble literature enthusiast who happened to be passing by."
                },
                {
                    "N": "Xingqiu",
                    "T": "Since you and I are both in search of lost books, what say we travel together to Mt. Qingce and pay a visit to Chang the Ninth?"
                },
                {
                    "N": "_0",
                    "T": "Makes sense. Please lead the way."
                },
                {
                    "N": "Xingqiu",
                    "T": "My pleasure, fellow book lover!"
                },
                {
                    "N": "_0",
                    "T": "I don't know, it sounds like quite a trek..."
                },
                {
                    "N": "Xingqiu",
                    "T": "Just take it as a chance to get some respite from the hustle and bustle of Liyue Harbor. We all need that once in a while."
                }
            ]
        ]
    },
    "1200004": {
        "Desc": "Go to Qingce Village and visit Chang the Ninth",
        "Step": "You and Paimon are looking to purchase a copy of the Liyue volume of the Teyvat Travel Guide in Liyue Harbor, intending to use it to visit various places of note throughout the region. At the Wanwen Bookhouse, you meet a lover of books named Xingqiu...",
        "Talk": []
    },
    "1200005": {
        "Desc": "Talk to Chang the Ninth",
        "Talk": [
            [
                {
                    "N": "Chang the Ninth",
                    "T": "*sigh* The heavens are smiting me... Smiting me to smithereens..."
                },
                {
                    "N": "_0",
                    "T": "Excuse me, are you Chang the Ninth?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Uh-huh. And what do you want? Come on, spit it out!"
                },
                {
                    "N": "_1005",
                    "T": "We've heard you've got tons of old books lying around, and we wanna borrow the Liyue volume of the Teyvat Travel Guide."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Hmph. Don't get me started on the topic of my books..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "After the Chasm was sealed off, the family mining business started going south. Then, the Fatui started working to sabotage me..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "To pay off my debts, I had no choice but to pawn off my beloved book collection. Every last book! Do you have any idea what that means!?"
                },
                {
                    "N": "_0",
                    "T": "You're sad you've got nothing to read now?"
                },
                {
                    "N": "_0",
                    "T": "You're bored now that you've got nothing to read?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Wrong! That was my life's work! I devoted my entire life to curating, collecting, caring for them... And now they're gone! Gone, I tell you!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "*sigh* It's useless ranting and raving at you like this. All I can do is try to save enough Mora to buy them back."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Unless you have other business here, I'm done talking to you. Goodbye! Off you go! Go on, go!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Please tell me that you didn't pawn volume six of Legend of the Shattered Halberd?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Legend of the Shattered Halberd... There's a title I haven't heard in a long time. You have good taste, my boy!"
                },
                {
                    "N": "_1005",
                    "T": "What, but we don't?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "That work was an epoch-defining masterpiece. Granted, it was almost unknown at the time it was published..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "But over time it was the work that came to define the genre of martial arts novels — and sparked a plethora of imitation works."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Barely any copies of the first edition were ever printed."
                },
                {
                    "N": "Xingqiu",
                    "T": "The later edition inexplicably went out of print almost as soon as it was released — a shame given what it allegedly added to the original story."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Yes! That's right, how did I forget? The original-edition sixth volume of that work is so rare, I could never bring myself to pawn it no matter how much I needed the money."
                },
                {
                    "N": "Xingqiu",
                    "T": "You mean— You mean you still have it!?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Yes. It is my one and only remaining treasure—"
                },
                {
                    "N": "Changhu",
                    "T": "Ay! Chang!"
                },
                {
                    "N": "Changhu",
                    "T": "You've got some nerve keeping me and my boss waiting like this. I need an answer! Will you sell the Cor Lapis or not?"
                },
                {
                    "N": "Changhu",
                    "T": "I'm sure you don't need me to remind you that if you mess with Gentry Maocai, you're messing with the Fatui!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "*sigh* You again..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "But you know I can't afford to give a seventy percent discount on the price... I'd never be able to buy my collection back—"
                },
                {
                    "N": "Changhu",
                    "T": "That's your business. The question is, do you want your books or do you want food on your plate? Perhaps you'd like to take your books with you to an early grave?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "*Grr* You...*sigh*"
                },
                {
                    "N": "Xingqiu",
                    "T": "Whoa there, friend. Come on. This gentleman is either willing to make a deal or he's not. You can't force him to sell against his will."
                },
                {
                    "N": "Changhu",
                    "T": "Just who do you think you are? Keep your nose out of other people's business!"
                },
                {
                    "N": "Xingqiu",
                    "T": "My liege, I am but one who comes to the aid of this gentleman in his moment of need. I am Xingqiu, disciple of the Guhua Clan."
                },
                {
                    "N": "Changhu",
                    "T": "A-hahahahahahaha..."
                },
                {
                    "N": "Changhu",
                    "T": "\"Guhua Clan\"! Did you hear this clown? He thinks he's a Guhua master! In this day and age! Hahahahaha..."
                },
                {
                    "N": "Changhu",
                    "T": "There was me thinking that the last granddads of Guhua had keeled over and died by now. Who are you supposed to be then, some sort of Guhua messiah!?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Justice is blind to our backgrounds, my friend. That just makes me someone trying to do the right thing. But you? The weasel who does the tiger's bidding may be less powerful than his master, but he is no less guilty."
                },
                {
                    "N": "Changhu",
                    "T": "Get a load of this guy! Just you wait, you'll be sorry you crossed me!"
                },
                {
                    "N": "Changhu",
                    "T": "And you, Chang... you're selling that Cor Lapis whether you like it or not!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "*sigh* Oh, how the wolves prey upon the fallen tiger! My days are numbered."
                },
                {
                    "N": "Xingqiu",
                    "T": "...So just to come back to what we were talking about earlier, could I get a yea or nay about borrowing that book...?"
                },
                {
                    "N": "_0",
                    "T": "Geez Louise, give the man a minute!"
                },
                {
                    "N": "_0",
                    "T": "Two words: situational awareness..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Oh, what does it matter now? I can't expect anybody to care about me anymore. But since you did stick up for me, please just take this book and leave me in peace."
                },
                {
                    "N": "Xingqiu",
                    "T": "Three long years I have waited for this day! Words cannot express my gratitude... I, Xingqiu, vow to repay this great act of generosity!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Alright, give it a rest! Just bring it back when you're finished. Sorry, but I'm not about to put my hopes in some self-professed Guhua disciple."
                },
                {
                    "N": "_1005",
                    "T": "Hey! Where are you going!? We've still got a job to do over here!"
                }
            ]
        ]
    },
    "1200006": {
        "Desc": "Look for Xingqiu after he left with the book",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "So you like reading, huh? Mr. Five-Second Hero?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Ho-ho, amazing... I NEVER saw that coming..."
                },
                {
                    "N": "_1005",
                    "T": "Hello! Xingqiu! Anybody in there?"
                },
                {
                    "N": "Xingqiu",
                    "T": "No wonder this book is so highly sought after..."
                },
                {
                    "N": "_1005",
                    "T": "UGH!"
                },
                {
                    "N": "_0",
                    "T": "That guy back at Chang the Ninth's was pretty bossy..."
                },
                {
                    "N": "_0",
                    "T": "That bossy guy back at Chang's — sounds like he's working for a \"Gentry Maocai.\""
                },
                {
                    "N": "_1005",
                    "T": "How can they bully poor old Chang the Ninth like this, forcing him to sell his ore for dirt cheap? It's daylight robbery, pure and simple!"
                },
                {
                    "N": "_0",
                    "T": "You and I have got to find a way to help Chang the Ninth!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Don't forget me. I'm in, too."
                },
                {
                    "N": "_0",
                    "T": "So I guess we're scrapping Operation: Liyue Travel Guide?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Why do you give up on your book search so lightly?"
                },
                {
                    "N": "_1005",
                    "T": "Oh, so NOW you can hear what we're saying!"
                },
                {
                    "N": "Xingqiu",
                    "T": "The reason I borrowed this book is that it would be a real pity if Chang the Ninth ended up having to pawn it."
                },
                {
                    "N": "Xingqiu",
                    "T": "And I meant every word I said to Chang the Ninth. I will return his act of kindness. It is the just thing to do."
                },
                {
                    "N": "Xingqiu",
                    "T": "I will be custodian of this book, and I will also help find a way to buy back the rest of his collection."
                },
                {
                    "N": "_0",
                    "T": "You already have a plan, don't you?"
                },
                {
                    "N": "_0",
                    "T": "You don't have a plan at all, do you?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Of course I do. An initial plan, anyway. I still need to work out the details."
                },
                {
                    "N": "Xingqiu",
                    "T": "Give me a second to reflect. It shan't take but a moment..."
                },
                {
                    "N": "Changhu",
                    "T": "You're still here!? What is this, a game to you? You think no one's really gonna get hurt?"
                },
                {
                    "N": "Changhu",
                    "T": "Huh. I gotta hand it to the Goofball Clan... What you lack in numbers and talent, you make up for in guts!"
                },
                {
                    "N": "Changhu",
                    "T": "Oh, I'm sorry — did I say Goofball Clan? I meant Guhua Clan... That's what you goofballs call it, right? Hahahahaha..."
                },
                {
                    "N": "Xingqiu",
                    "T": "There's a saying that goes: \"The insect that shakes the oak tree ludicrously overestimates its ability.\""
                },
                {
                    "N": "Changhu",
                    "T": "Quit quoting proverbs at me, you buffoon!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Please leave this place. I will not tolerate an attempt to coerce an honest trader — especially when the one you seek to threaten is one to whom I owe a debt of gratitude."
                },
                {
                    "N": "Changhu",
                    "T": "It's cute that you wanna stick your neck out for Chang, and all..."
                },
                {
                    "N": "Changhu",
                    "T": "But you picked the wrong time, you little punk! I brought the Fatui to back me up. A whole army of your little Guhua buddies wouldn't be able to help you now!"
                },
                {
                    "N": "Xingqiu",
                    "T": "I may be young, my liege, but the path I have chosen makes me no stranger to conflict. Why should I cower in the face of evil?"
                },
                {
                    "N": "Changhu",
                    "T": "Great speech. But now it's time for you to learn your lesson!"
                }
            ]
        ]
    },
    "1200009": {
        "Desc": "Defeat the attacking Fatui",
        "Talk": []
    },
    "1200011": {
        "Desc": "Defeat the attacking Fatui",
        "Talk": []
    },
    "1200010": {
        "Desc": "Defeat the attacking Fatui",
        "Talk": [
            [
                {
                    "N": "Changhu",
                    "T": "I thought that was just a regular pendant you were wearing, not a Vision!"
                },
                {
                    "N": "Changhu",
                    "T": "You won this round, but you'd better watch your back! This isn't over!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Would it be too much to hope they've learned their lesson?"
                },
                {
                    "N": "_0",
                    "T": "So, you're a Vision bearer!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Yes, though I try to avoid using it. I dislike the unfair advantage it gives me against my opponents."
                },
                {
                    "N": "_0",
                    "T": "More to Guhua than meets the eye, huh!"
                },
                {
                    "N": "Xingqiu",
                    "T": "N—No, no you misunderstand. That fellow has a foul mouth to be sure, but his assessment of the state of the Guhua Clan is, well... not exactly incorrect, I suppose. *sigh*"
                },
                {
                    "N": "Xingqiu",
                    "T": "Though I long to restore Guhua to its former glory, it is no easy task."
                },
                {
                    "N": "_1005",
                    "T": "They've gone for now, but they'll be back looking to cause more trouble before long."
                },
                {
                    "N": "Xingqiu",
                    "T": "I'll see to it that no harm comes to those who show me kindness. There is a just and an unjust way to do business, and I will ensure the matter is resolved satisfactorily."
                },
                {
                    "N": "Xingqiu",
                    "T": "It's not like the Fatui to pick sides in a business dispute. But the confident demeanor of their errand boy suggests there is substance to his words..."
                },
                {
                    "N": "Xingqiu",
                    "T": "There must be a deeper level of collusion at work here."
                },
                {
                    "N": "Xingqiu",
                    "T": "He mentioned Gentry Maocai. I know this name... he has a stately residence in Liyue Harbor. Maybe the two of you could go and investigate."
                },
                {
                    "N": "_1005",
                    "T": "That idea works... But what are you gonna do?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Me? I have other things to look into. Let me see... Let us meet at Yujing Terrace in Liyue Harbor in a bit."
                },
                {
                    "N": "_1005",
                    "T": "You really have stuff to do? Are you sure you're not just using us as your errand runners?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Wow... So that's how that turned out! This whole passage is just... extraordinary!"
                },
                {
                    "N": "_1005",
                    "T": "ARGH! This guy is SO ANNOYING! Paimon just wants to slap him right in his stupid face!"
                },
                {
                    "N": "_0",
                    "T": "First let's help Chang the Ninth."
                },
                {
                    "N": "_0",
                    "T": "Xingqiu's vengeance may not be swift, but it will surely come."
                },
                {
                    "N": "_1005",
                    "T": "Hmph. FINE! But as per tradition, Paimon gets to pick an ugly nickname for him!"
                },
                {
                    "N": "_1005",
                    "T": "From now on he shall be known as... Guhua Geek!"
                }
            ]
        ]
    },
    "1200101": {
        "Desc": "Go to Gentry Maocai's residence and make inquiries",
        "Step": "The store owner, Jifang, informs you that her store no longer stocks the book you are looking for, advising you to try your luck at Chang the Ninth's place in Qingce Village instead. Coincidentally, you come upon an attempt by Gentry Maocai's underlings to coerce Chang the Ninth into selling his Cor Lapis. Xingqiu reckons the situation to be unjust and intends to investigate Gentry Maocai.",
        "Talk": []
    },
    "1200103": {
        "Desc": "Talk to the guards and make inquiries",
        "Talk": [
            [
                {
                    "N": "Sturdy Wu",
                    "T": "Who goes there?"
                },
                {
                    "N": "_0",
                    "T": "A Mondstadt merchant here for a meeting with Gentry Maocai."
                },
                {
                    "N": "Sturdy Wu",
                    "T": "Really? He didn't mention anything about a meeting..."
                },
                {
                    "N": "_0",
                    "T": "#I'm {NICKNAME}, a VIP client of your boss'!"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "How strange, you're not on the guestlist..."
                },
                {
                    "N": "Sturdy Wu",
                    "T": "The Master is dealing with some urgent business today. All prior appointments have been canceled."
                },
                {
                    "N": "_1005",
                    "T": "Urgent business? ...What is it?"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "The Master has been working on a major business deal recently. He left early this morning to meet with a VIP client."
                },
                {
                    "N": "_1005",
                    "T": "So where is he now?"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "I'm sorry, the Master has stressed that we must not disclose that information to just anyone..."
                },
                {
                    "N": "_0",
                    "T": "\"Just anyone\"? Are you saying we are not his VIP clients?"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "N—No! I mean yes, yes you are! Ah... I—I meant no offense, please believe me..."
                },
                {
                    "N": "_0",
                    "T": "Take me to Gentry Maocai or suffer the consequences!"
                },
                {
                    "N": "_0",
                    "T": "Would you like to explain these extra fees you are incurring to your boss, or shall I?"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "I'm sorry, I'm sorry! Master is currently in business negotiations at Xinyue Kiosk!"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "I beg for your mercy! Please, my master will show me no leniency if he finds out..."
                },
                {
                    "N": "_1005",
                    "T": "Well, MY master has much more important things to do than talking to rude guards like you."
                },
                {
                    "N": "_1005",
                    "T": "Luckily for you, your bad attitude will be the last thing on our minds when my master's busy negotiating a big business deal with your boss!"
                },
                {
                    "N": "Sturdy Wu",
                    "T": "Th—Thank you, thank you! May your business forever be blessed by the Lord of Geo!"
                },
                {
                    "N": "_1005",
                    "T": "#Nice work, {NICKNAME}! Paimon never knew you were such a tough negotiator."
                },
                {
                    "N": "_0",
                    "T": "I was just bluffing."
                },
                {
                    "N": "_1005",
                    "T": "Is that so? Now Paimon knows not to let your wily ways get the better of her in future!"
                },
                {
                    "N": "_0",
                    "T": "You did great too."
                },
                {
                    "N": "_1005",
                    "T": "Tee-hee! Paimon loves compliments and all... but treating Paimon to some tasty snacks would show that you really mean it!"
                },
                {
                    "N": "_1005",
                    "T": "Anyway, seems like the VIP client in question must be one of the Fatui."
                },
                {
                    "N": "_0",
                    "T": "I think you're right."
                },
                {
                    "N": "_0",
                    "T": "This could work in our favor."
                },
                {
                    "N": "_1005",
                    "T": "In that case, let's get ourselves over to the Xinyue Kiosk!"
                }
            ]
        ]
    },
    "1200106": {
        "Desc": "Go to Xinyue Kiosk and eavesdrop on Gentry Maocai",
        "Talk": []
    },
    "1200107": {
        "Desc": "Eavesdrop on Gentry Maocai's conversation with the Fatui",
        "Talk": [
            [
                {
                    "N": "Gentry Maocai",
                    "T": "I understand. I do. Please do not worry, you have my word that the order will be completed as promised."
                },
                {
                    "N": "Agent",
                    "T": "Hmm... The subordinate I sent was not quite so optimistic in his appraisal. Is somebody being uncooperative?"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Ah... We just ran into a minor procurement problem is all. We haven't managed to purchase the Cor Lapis yet."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "But it's nothing for you to worry about. If Chang the Ninth won't sell, I can buy from someone else."
                },
                {
                    "N": "Agent",
                    "T": "That would be most ideal. I remind you again that the Fatui care only about the result."
                },
                {
                    "N": "Agent",
                    "T": "We are willing to lend a certain degree of support to this transaction. But if it is not completed in time..."
                },
                {
                    "N": "Agent",
                    "T": "You may suddenly find our good will comes at a price you cannot afford."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "I understand... I am indebted to you for your protection. You know I would not dream of disappointing you, don't you?"
                },
                {
                    "N": "Agent",
                    "T": "We shall see when the time comes."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "*sigh* Darn that old man Chang!"
                }
            ]
        ]
    },
    "1200108": {
        "Desc": "Inform Xingqiu of Gentry Maocai's plan",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Hmph! You said you had other things to look into, as if you're some sort of man of mystery..."
                },
                {
                    "N": "_1005",
                    "T": "When actually all you meant was you wanted somewhere new to park your backside while you read your book!"
                },
                {
                    "N": "_0",
                    "T": "We know what Gentry Maocai's up to now."
                },
                {
                    "N": "Xingqiu",
                    "T": "I see. I guessed as much."
                },
                {
                    "N": "_1005",
                    "T": "Did you really guess, or are you just saying that to sound clever?"
                },
                {
                    "N": "Xingqiu",
                    "T": "The course of action we must take is now clear. To start with, please deliver this letter to the Feiyun Commerce Guild. They will know what to do."
                },
                {
                    "N": "Xingqiu",
                    "T": "My liege, for reasons that I cannot explain, I will be unable to join you."
                },
                {
                    "N": "Xingqiu",
                    "T": "There is no need for you to read the contents of the letter, when the time comes—"
                },
                {
                    "N": "_1005",
                    "T": "Whew, this writing is super hard to read! Paimon can't make heads or tails of it..."
                },
                {
                    "N": "_0",
                    "T": "It's in an ancient script, perhaps?"
                },
                {
                    "N": "_0",
                    "T": "A secret text that needs a cipher perhaps?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Huh..."
                },
                {
                    "N": "Xingqiu",
                    "T": "Hence why I said there's no need for you to read it..."
                },
                {
                    "N": "Xingqiu",
                    "T": "The Feiyun Commerce Guild will have someone who can understand it."
                },
                {
                    "N": "_1005",
                    "T": "But why do you wanna get them involved? They're one of the bigwig commerce guilds in Liyue — why would they wanna help us?"
                },
                {
                    "N": "_0",
                    "T": "What is the Feiyun Commerce Guild?"
                },
                {
                    "N": "_1005",
                    "T": "Since we got to Liyue, Paimon keeps hearing people mention it. Seems they oversee a lot of business that goes on around here."
                },
                {
                    "N": "_1005",
                    "T": "Having such big backing would be great and all... But are you sure they'd wanna help?"
                },
                {
                    "N": "Xingqiu",
                    "T": "No need to worry about that. From what I know, they share my sense of chivalry."
                },
                {
                    "N": "Xingqiu",
                    "T": "Once they have read the carefully reasoned and passionately argued case I put forth in this letter, they will certainly be moved to action."
                },
                {
                    "N": "_0",
                    "T": "How can you be sure?"
                },
                {
                    "N": "_0",
                    "T": "Why get them involved anyway?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Gentry Maocai must be taught a lesson he will never forget. This is something we cannot do on our own."
                },
                {
                    "N": "Xingqiu",
                    "T": "Also, I do not wish for anyone else to know of my involvement in this."
                },
                {
                    "N": "_1005",
                    "T": "Why not? You're only doing this to try and help Chang the Ninth, right?"
                },
                {
                    "N": "Xingqiu",
                    "T": "\"To silently disappear at the matter's conclusion, concealing one's name and contribution,\" this is the chivalrous thing to do. To savor the memory is ample reward."
                },
                {
                    "N": "Xingqiu",
                    "T": "Each droplet of kindness I receive I am duty-bound to repay with a welling spring of gratitude. I seek neither praise nor reward."
                },
                {
                    "N": "_1005",
                    "T": "That sounds very lovely. But be honest — you just want them to do it so you can carry on reading your book, don't you?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Thank you in advance for delivering this letter to the Feiyun Commerce Guild. Someone from the guild should be able to receive you near Liuli Pavilion."
                },
                {
                    "N": "_1005",
                    "T": "Hey! Stop ignoring Paimon!"
                }
            ]
        ]
    },
    "1200201": {
        "Desc": "Deliver the letter to the servant at the Feiyun Commerce Guild",
        "Step": "Your secret investigation reveals that Gentry Maocai's need to satisfy a deal he made with the Fatui is the reason why he is pressing Chang the Ninth. To aid Chang, Xingqiu has penned a letter to the Feiyun Commerce Guild, in hopes that they will lend a hand.",
        "Talk": []
    },
    "1200203": {
        "Desc": "Talk to Xu at the Feiyun Commerce Guild",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Excuse us! We come bearing news of a matter requiring your assistance. Uh, it's all in this letter."
                },
                {
                    "N": "_0",
                    "T": "Why are you suddenly talking like Xingqiu..."
                },
                {
                    "N": "Xu",
                    "T": "A letter? Oh, I see... This again..."
                },
                {
                    "N": "_0",
                    "T": "Again?"
                },
                {
                    "N": "_0",
                    "T": "You know something about this?"
                },
                {
                    "N": "Xu",
                    "T": "Oh, don't mind me, I was just speculating. Let me give this a read."
                },
                {
                    "N": "_1005",
                    "T": "Can he actually read this thing? ...Is it even written in the common tongue?"
                },
                {
                    "N": "Xu",
                    "T": "Hmm... Yes, this script is inimitable by the uninitiated."
                },
                {
                    "N": "Xu",
                    "T": "Honored guests, you must both be weary from your long journey. Please allow the Feiyun Commerce Guild to be your hosts for tonight."
                },
                {
                    "N": "_0",
                    "T": "Wait, what?"
                },
                {
                    "N": "_0",
                    "T": "We're not here to stay."
                },
                {
                    "N": "Xu",
                    "T": "Please rest assured that the matter written about has been duly received. We just need some time to prepare."
                },
                {
                    "N": "Xu",
                    "T": "Please take a seat here in Liuli Pavilion, where you may enjoy some light refreshments while taking in the ocean view. Consider it a small token of our esteem."
                },
                {
                    "N": "_1005",
                    "T": "Yay, tasty snacks! They're giving us the VIP treatment!"
                },
                {
                    "N": "Xu",
                    "T": "Of course. We treat visitors with the utmost respect here at the Feiyun Commerce Guild. When honored guests grace us with their presence, far be it from us to shirk our duty to them."
                },
                {
                    "N": "Xu",
                    "T": "Please, this way."
                }
            ]
        ]
    },
    "1200202": {
        "Desc": "Enter Liuli Pavilion",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Here we are at the Feiyun Commerce Guild. There sure are a lot of swanky places in Liyue Harbor!"
                },
                {
                    "N": "_1005",
                    "T": "Let's go give them the letter."
                }
            ]
        ]
    },
    "1200221": {
        "Desc": "Talk with the servant",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "And Paimon thought we'd get kicked out or turned away at the door!"
                },
                {
                    "N": "_1005",
                    "T": "Paimon didn't think Guhua Geek had so much clout..."
                },
                {
                    "N": "Xu",
                    "T": "Thank you for your patience."
                },
                {
                    "N": "Xu",
                    "T": "With the amount of wealth and power Gentry Maocai has, it will take more than a slap on the wrist to get through to him."
                },
                {
                    "N": "Xu",
                    "T": "For him to correct the error of his ways, he must feel for himself the same suffering he has inflicted on Chang the Ninth."
                },
                {
                    "N": "Xu",
                    "T": "Since Gentry Maocai's business has to do with Cor Lapis, we simply need to buy up all the stock there is in Liyue. That will put him in a rather sticky situation."
                },
                {
                    "N": "Xu",
                    "T": "Deprived of the necessary raw materials, even the best craftsperson in Teyvat would be unable to make their product."
                },
                {
                    "N": "_1005",
                    "T": "Great idea! That'll be sure to mess things up between him and the Fatui."
                },
                {
                    "N": "_1005",
                    "T": "But... Liyue is huge. Is it really possible to buy up every last bit of Cor Lapis in the harbor?"
                },
                {
                    "N": "Xu",
                    "T": "With the timescale we are on, it is indeed a challenge. Hence, as stated in the letter, we must ask for your further cooperation in the matter."
                },
                {
                    "N": "Xu",
                    "T": "First, there are a number of vendors in the city you will need to buy from. I've marked their respective locations on your map."
                },
                {
                    "N": "Xu",
                    "T": "There is also some unsold Cor Lapis at the Chasm. You will need to purchase that too."
                },
                {
                    "N": "Xu",
                    "T": "Finally, there is Chang the Ninth's batch."
                },
                {
                    "N": "_1005",
                    "T": "Alrighty... so three sellers in the city, another one at the Chasm, and then Chang the Ninth. Roger that!"
                },
                {
                    "N": "Xu",
                    "T": "Of course, we are not expecting you to cover the costs."
                },
                {
                    "N": "_1005",
                    "T": "Wow, so many Mora! ...With cash like this, Paimon could rent out Liuli Pavilion and eat there for a whole month!"
                },
                {
                    "N": "_0",
                    "T": "The Feiyun Commerce Guild is certainly generous with its resources."
                },
                {
                    "N": "Xu",
                    "T": "Heh. Well, this is not the first time we've had to do something like this. It's just par for the course now."
                },
                {
                    "N": "Xu",
                    "T": "All you need to do is strike a deal. The Feiyun Commerce Guild will handle the transportation and other trifling matters."
                },
                {
                    "N": "Xu",
                    "T": "Once you have purchased all the Cor Lapis, please proceed to the Feiyun Commerce Guild's warehouse where you can see the rest of the plan unfold."
                }
            ]
        ]
    },
    "1200204": {
        "Desc": "Go to the store and buy Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_0",
                    "T": "I'll take all your Cor Lapis."
                },
                {
                    "N": "Bolai",
                    "T": "All of it? Though my business may not seem so big, I should warn that I can get what you need, both legitimately and... not so legitimately. Best you give me an actual number."
                },
                {
                    "N": "Bolai",
                    "T": "All of it would be far more than you actually want."
                },
                {
                    "N": "_0",
                    "T": "It's for the Feiyun Commerce Guild."
                },
                {
                    "N": "Bolai",
                    "T": "Fei— Feiyun Commerce Guild!? Well, why didn't you say so?"
                },
                {
                    "N": "_0",
                    "T": "Feiyun Commerce Guild only ever does legal business."
                },
                {
                    "N": "Bolai",
                    "T": "What are you saying? Of course my business is all above board. Feiyun Commerce Guild, you say... Hmm."
                },
                {
                    "N": "Bolai",
                    "T": "If it's for the Feiyun Commerce Guild, then sign on the dotted line, and I'll start getting things in order right away!"
                }
            ]
        ]
    },
    "1200205": {
        "Desc": "Go to the store and buy Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_0",
                    "T": "I'll take all your Cor Lapis."
                },
                {
                    "N": "Changshun",
                    "T": "You want ALL my Cor Lapis? Ahh, I've already agreed to several orders."
                },
                {
                    "N": "Changshun",
                    "T": "That said, none are in writing. The buyers are being incredibly indecisive."
                },
                {
                    "N": "_0",
                    "T": "Then let the Feiyun Commerce Guild take it off your hands."
                },
                {
                    "N": "Changshun",
                    "T": "Oh, it's for the Feiyun Commerce Guild? Hmm, seems business trends are about to change in Liyue..."
                },
                {
                    "N": "Changshun",
                    "T": "Oh, ahh... nothing. Just talking to myself. Come, let us sign a contract."
                },
                {
                    "N": "Changshun",
                    "T": "Don't worry about my prior client, he hadn't made any down payments or anything. Quite common in the industry."
                },
                {
                    "N": "Changshun",
                    "T": "Thank you for your patronage, we hope the Feiyun Commerce Guild will continue to do business with us!"
                }
            ]
        ]
    },
    "1200206": {
        "Desc": "Go to the store and buy Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_0",
                    "T": "Are you out of Cor Lapis too?"
                },
                {
                    "N": "Ivanovich",
                    "T": "Oh, I thought you were here to purchase Snezhnayan products."
                },
                {
                    "N": "Ivanovich",
                    "T": "No, that I still have, although I ship it all to factories in Snezhnaya. I don't do retail."
                },
                {
                    "N": "Ivanovich",
                    "T": "Too much hassle, not enough return. Sorry."
                },
                {
                    "N": "_0",
                    "T": "Does \"we'll take it all\" still count as retail?"
                },
                {
                    "N": "_0",
                    "T": "So you're rejecting the Feiyun Commerce Guild's business?"
                },
                {
                    "N": "Ivanovich",
                    "T": "Wha— Ah, no, no, no. Give me a second to think. Um..."
                },
                {
                    "N": "Ivanovich",
                    "T": "A—Alright, I'll do it. Just need you to sign for it."
                },
                {
                    "N": "Ivanovich",
                    "T": "(Clearly no shortage of cashflow in Liyue...)"
                }
            ]
        ]
    },
    "1200215": {
        "Desc": "Complete purchase",
        "Talk": []
    },
    "1200222": {
        "Desc": "",
        "Talk": []
    },
    "1200207": {
        "Desc": "Go to the Chasm and buy Cor Lapis",
        "Talk": []
    },
    "1200208": {
        "Desc": "Talk to Shizhuang the Strong",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Hello there, are you in charge of the Cor Lapis here?"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Aha, finally! I thought you might come — I hear the Feiyun Commerce Guild has been buying up all the Cor Lapis stock in Liyue Harbor."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "As it happens, I do have a batch of Cor Lapis that hasn't been shipped yet. It's all yours if you name the right price."
                },
                {
                    "N": "_0",
                    "T": "I have a bad feeling about this..."
                },
                {
                    "N": "_0",
                    "T": "How much does it cost, exactly?"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "The original buyer's price was already quite high, so... The best I can do is 7,000,000 Mora."
                },
                {
                    "N": "_1005",
                    "T": "Are you serious!? We spent less than 2,000,000 Mora on the rest of Liyue's stock put together!"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "I'm afraid it has to go to the highest bidder. I'm breaching an existing agreement by selling to you, so it has to be worth my while."
                },
                {
                    "N": "_0",
                    "T": "That's over four times what it should be, you crook!"
                },
                {
                    "N": "_0",
                    "T": "It's poor form to just raise the price without good grounds."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Look, you have your problems to deal with and I have mine. You can take it or leave it, so if you're not buying, please leave me alone."
                },
                {
                    "N": "_1005",
                    "T": "Alright, alright! We'll pay, even if it is a ridiculous price."
                },
                {
                    "N": "_1005",
                    "T": "When we get back, we'll just have to tell the guild that we'll sell to this gentleman at four times the normal price in the future."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Wait! Surely there's... no need for that?"
                },
                {
                    "N": "_0",
                    "T": "Maybe you should think twice before affronting the Feiyun Commerce Guild!"
                },
                {
                    "N": "_0",
                    "T": "Take our money and hand over the goods!"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Please, don't do this. It's not even your money, why be so frugal with it?"
                },
                {
                    "N": "_1005",
                    "T": "It might be the Guild's money, but we'll have a tough time explaining to our boss why we spent so much in one go."
                },
                {
                    "N": "_1005",
                    "T": "If he asks, all we can do is mention your name and say you gouged us over the price..."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "I—I understand... I'm sorry, please, I don't want any trouble with the Guild."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "There's just one other thing, though... There's been an issue with the delivery of this batch. Several carts were ambushed by hilichurls."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "I don't know where, exactly. But, if I can't retrieve the goods, I can't sell them to you either."
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "So... maybe you could go and look for the carts? There should be five of them in total. If you can find them all and tell me where they are, I'll sign the contract right away."
                },
                {
                    "N": "_0",
                    "T": "You have a deal!"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Thank you very much. This is a lot to ask, I know."
                },
                {
                    "N": "_0",
                    "T": "Market price?"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Oh, yes of course... I mean, I do hope to carry on doing business in Liyue in the future."
                },
                {
                    "N": "_1005",
                    "T": "#That's that then. Well, no time to lose. Come on, {NICKNAME}."
                }
            ]
        ]
    },
    "1200209": {
        "Desc": "Use Elemental Sight to find the cart loaded with Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Let Paimon see... Yep, that's it!"
                }
            ]
        ]
    },
    "1200212": {
        "Desc": "Use Elemental Sight to find the cart loaded with Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "That's it alright. That's a big old stash of Cor Lapis."
                }
            ]
        ]
    },
    "1200213": {
        "Desc": "Use Elemental Sight to find the cart loaded with Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Another one down!"
                }
            ]
        ]
    },
    "1200219": {
        "Desc": "Use Elemental Sight to find the cart loaded with Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Aw yeah, we found it! Check out all that Cor Lapis!"
                },
                {
                    "N": "_1005",
                    "T": "Make a note of the location. We'll send the Feiyun Commerce Guild to collect it later."
                }
            ]
        ]
    },
    "1200220": {
        "Desc": "Use Elemental Sight to find the cart loaded with Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Here we go! Loads of Cor Lapis here."
                },
                {
                    "N": "_1005",
                    "T": "Quick, make a note of the location."
                }
            ]
        ]
    },
    "1200214": {
        "Desc": "Search for the carts loaded with Cor Lapis",
        "Talk": []
    },
    "1200223": {
        "Desc": "",
        "Talk": []
    },
    "1200210": {
        "Desc": "Tell Shizhuang the Strong where to find Cor Lapis",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Here, we've made a note of the carts' locations. All five of them. Can you sell us the Cor Lapis now?"
                },
                {
                    "N": "Shizhuang the Strong",
                    "T": "Ah wonderful, thank you both. Yes, let's make this official. I also hope you could put in a good word with your boss for me."
                },
                {
                    "N": "_1005",
                    "T": "Done and dusted! Yeah!"
                },
                {
                    "N": "_0",
                    "T": "Nice work back there, Paimon."
                },
                {
                    "N": "_1005",
                    "T": "We make a great team, don't we?"
                },
                {
                    "N": "_0",
                    "T": "How did you know that bluff would work?"
                },
                {
                    "N": "_1005",
                    "T": "Paimon's got a knack for this business malarkey, don't ya think?"
                },
                {
                    "N": "_1005",
                    "T": "Now for the final stop on our Cor Lapis crawl — to Chang the Ninth's place!"
                }
            ]
        ]
    },
    "1200211": {
        "Desc": "Purchase Chang the Ninth's ore",
        "Talk": [
            [
                {
                    "N": "Chang the Ninth",
                    "T": "Just who I was hoping to see! I was just thinking to myself, Gentry Maocai's thugs have been mysteriously absent for a while now..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "You wouldn't know anything about that, would you?"
                },
                {
                    "N": "_1005",
                    "T": "Oh, don't worry... You won't be hearing from them again!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Oh? ...W—What happened?"
                },
                {
                    "N": "_0",
                    "T": "Not only that, but we'd like to purchase your Cor Lapis."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Eh!? ...O—Oh, I see now — you're in this trade too. So, you're trying to beat him to the post, eh? Appearances can be deceiving, that's for sure."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "...But I don't care who you are, a discount of seventy percent is simply impossible. The maximum I can do is forty percent off, and even then I'm only breaking even—"
                },
                {
                    "N": "_1005",
                    "T": "No need. We'll take it at the market rate."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "You mean... you're not trying to force the price down? ...Wh—What's going on!? Have I died and gone to heaven!?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "I can't believe it! I will make a profit on this batch after all!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "...But Gentry Maocai's thugs could still come back after I've sold it..."
                },
                {
                    "N": "_1005",
                    "T": "If Paimon told you they're not gonna bother you again, then you'd better believe they're not gonna bother you again!"
                },
                {
                    "N": "_0",
                    "T": "Rest assured, you are safe selling to us."
                },
                {
                    "N": "_0",
                    "T": "Just trust me."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Hmm... Okay then. My situation can hardly get worse from here in any case."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "But tell me, what on earth do you plan to do with so much Cor Lapis?"
                },
                {
                    "N": "_1005",
                    "T": "Actually, it's for a commission. Can't go into too much detail."
                },
                {
                    "N": "_0",
                    "T": "We'll send someone to collect the goods later."
                },
                {
                    "N": "_0",
                    "T": "See, things are never quite as bad as they seem."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Thank you, thank you a million times over! I really don't know what to say..."
                },
                {
                    "N": "_0",
                    "T": "Don't thank us yet, wait till we've finished at least."
                },
                {
                    "N": "_1005",
                    "T": "Good people always get what's coming to them in the end... And so will the nasty people!"
                },
                {
                    "N": "_1005",
                    "T": "#Anyway, let's get going, {NICKNAME}, because apparently we have a show to watch at the Feiyun Commerce Guild's warehouse!"
                }
            ]
        ]
    },
    "1200303": {
        "Desc": "Go to the Feiyun Commerce Guild warehouse",
        "Step": "As per the plan written in the letter, the Feiyun Commerce Guild has bought up all the Cor Lapis there is to be bought in Liyue Harbor. Now all that remains is for Gentry Maocai to discover this, and for the real show to begin.",
        "Talk": []
    },
    "1200304": {
        "Desc": "Talk to Xingqiu",
        "Talk": [
            [
                {
                    "N": "Xingqiu",
                    "T": "Welcome. The final act in this drama would not be complete without you two here as audience."
                },
                {
                    "N": "_1005",
                    "T": "You'd better believe it! We're the ones who've been doing all the work! What exactly have you been doing all this time?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Ah, well... Naturally, I used the time to immerse myself completely in Legend of the Shattered Halberd. I managed to finish the book off, and I enjoyed every minute of it."
                },
                {
                    "N": "Xingqiu",
                    "T": "Divine Halberd and Ominous Sword, Mir and Weiyang..."
                },
                {
                    "N": "Xingqiu",
                    "T": "The way the story develops across the first five volumes — nothing short of exemplary. But the sixth volume... words fail me."
                },
                {
                    "N": "Xingqiu",
                    "T": "How blessed we are to have such an author grace our world with such works."
                },
                {
                    "N": "_1005",
                    "T": "And this is related to Gentry Maocai... how?"
                },
                {
                    "N": "Xingqiu",
                    "T": "It's not, but when something surpasses expectations to such a degree, one must show one's appreciation."
                },
                {
                    "N": "_0",
                    "T": "You saw how everything would play out."
                },
                {
                    "N": "Xingqiu",
                    "T": "And it is thanks to your help that everything will play out just as I had foreseen."
                },
                {
                    "N": "_0",
                    "T": "Is the ending of the book good?"
                },
                {
                    "N": "Xingqiu",
                    "T": "It was rather good, thanks... I only hope that as our plan reaches its denouement, it too will live up to its expectations."
                },
                {
                    "N": "_1005",
                    "T": "...Why does Paimon have to be the only one who doesn't get what's going on? No fair!"
                },
                {
                    "N": "_1005",
                    "T": "Ahh... So go on then, tell me. What are we doing here? And what's this big dramatic showdown thing that's supposed to happen?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Think about it. Gentry Maocai goes searching for Cor Lapis all over Liyue Harbor, and he doesn't find a single piece."
                },
                {
                    "N": "Xingqiu",
                    "T": "He panics — without the goods, he can't fulfill his contract. And if he can't fulfill his contract, he can't stay in good standing with the Fatui."
                },
                {
                    "N": "Xingqiu",
                    "T": "He hears a rumor that the Feiyun Commerce Guild is the culprit. Panic turns to disbelief."
                },
                {
                    "N": "Xingqiu",
                    "T": "Gentry Maocai is a hugely powerful figure in the business world. Never has anyone dared to target him like this."
                },
                {
                    "N": "Xingqiu",
                    "T": "So regardless of whether it is revenge or a swift resolution that he seeks, he is certain to—"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "So it was you! You were the ones sticking your necks out for Chang the Ninth!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Speak of the devil."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "I went everywhere trying to find someone selling Cor Lapis before I realized the Feiyun Commerce Guild had been on an acquisition spree!"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Cor Lapis is hardly a rare mineral, and yet suddenly the stocks dry up, just like that! Explain yourselves! What is the meaning of this persecution?"
                },
                {
                    "N": "Xingqiu",
                    "T": "We are not persecuting you, but protecting another, one to whom I am indebted. Upon witnessing an injustice, it is a perfectly normal response to rush to the aid of he who has been wronged."
                },
                {
                    "N": "Xingqiu",
                    "T": "Was it not one of your own men who said... this isn't over?"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Hmph. You clearly don't know what's good for you. I won't beat around the bush."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Master, if you please. Seize their Cor Lapis!"
                }
            ]
        ]
    },
    "1200305": {
        "Desc": "Help Gentry Maocai and defeat the attacking Fatui",
        "Talk": []
    },
    "1200310": {
        "Desc": "Fend off the Agent",
        "Talk": []
    },
    "1200307": {
        "Desc": "Fend off the Agent",
        "Talk": []
    },
    "1200311": {
        "Desc": "Fend off the Agent",
        "Talk": []
    },
    "1200308": {
        "Desc": "Fend off the Agent",
        "Talk": [
            [
                {
                    "N": "Agent",
                    "T": "Impressive. You are no commoners... To continue this fight would be to incur greater losses than I can accept."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Their strength is almost spent! Finish them off! The Cor Lapis is almost within our grasp..."
                },
                {
                    "N": "Agent",
                    "T": "Might I remind you that the Fatui's relationship with you extends to business matters only! I did not lend you my men to have them stir up trouble at your beck and call!"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "W—What are you saying? Master, everything I did, I did with only one thing in mind — to complete the order!"
                },
                {
                    "N": "Agent",
                    "T": "Then figure it out by yourself!"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "D—Don't go! Wait! Master! Waaaait..."
                },
                {
                    "N": "Xu",
                    "T": "My lord! What are you doing here? Are you hurt?"
                },
                {
                    "N": "Xingqiu",
                    "T": "#Thanks to this valiant young {F#woman}{M#man}, I am unscathed."
                },
                {
                    "N": "_1005",
                    "T": "\"My lord\"!?"
                },
                {
                    "N": "_0",
                    "T": "\"My lord\"!?"
                },
                {
                    "N": "_0",
                    "T": "...I did NOT see that coming!"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "You... You are the heir of the Feiyun Commerce Guild?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Indeed, my liege. I am Xingqiu, disciple of the Guhua Clan and second son of the Feiyun Commerce Guild manager, and I make no secret of it."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "Drats! I've been played like a fiddle!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Gentry Maocai, coercion and intimidation are hardly the attributes of a respectable businessman. The problems that your business practices have created, I have sought to resolve through mine."
                },
                {
                    "N": "Xingqiu",
                    "T": "I shudder to think what the Fatui will do with you if you fail to provide their Cor Lapis."
                },
                {
                    "N": "Gentry Maocai",
                    "T": "You meddling swine! Well, go on! Tell me, what will you sell it for?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Since you asked Chang the Ninth for a discount of seventy percent, let's fight fire with fire, shall we?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Three times the market rate sounds fair, no?"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "How dare you subject me to such viciousness! This is a malicious and calculated attempt to run me into the ground—"
                },
                {
                    "N": "Xingqiu",
                    "T": "...Deep breaths now. This is a simple decision. Will you buy, or not?"
                },
                {
                    "N": "Gentry Maocai",
                    "T": "I... Hmph, fine, have it your way! I'll find the money somehow. Happy now!?"
                },
                {
                    "N": "Xingqiu",
                    "T": "On behalf of the Feiyun Commerce Guild, I thank you for your business and hope you will continue to do business with us in future."
                },
                {
                    "N": "_1005",
                    "T": "You? Funny-speaking, book-reading, Guhua-geeking, Xingqiu... Are the heir of the Feiyun Commerce Guild!?"
                },
                {
                    "N": "_1005",
                    "T": "So that massive stash of Mora you let us burn through in a day — that was from your private vault!?"
                },
                {
                    "N": "Xingqiu",
                    "T": "'Twas but a paltry sum. I got to make a very sound investment while putting Gentry Maocai in his place. A classic two birds, one stone situation."
                },
                {
                    "N": "_0",
                    "T": "Appearances really can be deceiving."
                },
                {
                    "N": "Xingqiu",
                    "T": "You're too kind. You have valor in your heart, and that is worthy of admiration."
                },
                {
                    "N": "_0",
                    "T": "Don't you rich kids take calligraphy classes from a young age?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Hahahaha, very droll... My family can always tell me from my handwriting, it's certainly one of my distinguishing features."
                },
                {
                    "N": "_1005",
                    "T": "Yikes! Paimon's been calling you Guhua Geek this whole time..."
                },
                {
                    "N": "_1005",
                    "T": "Paimon read in one of these martial artist novels that when rich heirs like you get angry at someone, you have their arms and legs chopped off!"
                },
                {
                    "N": "_1005",
                    "T": "Arghhh, Paimon's toast! And sorry! Very sorry! Please don't hurt Paimon~!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Calm down — since you can fly, you hardly need your legs anyway."
                },
                {
                    "N": "_1005",
                    "T": "#ARGH! Save me {NICKNAME}, save me! This is not a drill. Repeat, this is not a drill!"
                },
                {
                    "N": "_0",
                    "T": "He's so obviously joking."
                },
                {
                    "N": "_0",
                    "T": "What kind of book did you say you read this in!?"
                },
                {
                    "N": "Xingqiu",
                    "T": "Jokes aside, I have the two of you to thank for this successful resolution. Really, you were a huge help."
                },
                {
                    "N": "Xingqiu",
                    "T": "Meanwhile, Legend of the Shattered Halberd was positively riveting. Much obliged if you could return it to Chang the Ninth for me."
                },
                {
                    "N": "_0",
                    "T": "You're making us run yet another errand!?"
                },
                {
                    "N": "Xingqiu",
                    "T": "I did nothing, and hence deserve none of his gratitude. The two of you, meanwhile, though strangers to the circumstances, stepped in and saved the day."
                },
                {
                    "N": "Xingqiu",
                    "T": "To have made such valiant and chivalrous friends is more than enough for me, my liege."
                },
                {
                    "N": "Xu",
                    "T": "My lord, forgive the intrusion... It's about your father..."
                },
                {
                    "N": "Xingqiu",
                    "T": "Please inform my father thusly: I have averted a disaster and earned a sizable sum of money in the process."
                },
                {
                    "N": "Xingqiu",
                    "T": "Might this meritorious act compensate for my prior transgressions and earn me a few more days of freedom, perchance? Legend of the Shattered Halberd speaks of a domain that I should very much like to investigate..."
                },
                {
                    "N": "_1005",
                    "T": "For all your clever long words, the fact is you're just a lazybones who doesn't wanna work!"
                },
                {
                    "N": "Xingqiu",
                    "T": "Hahaha... What if I told you that a reward awaits you at Chang the Ninth's palace, and not just his gratitude?"
                },
                {
                    "N": "_1005",
                    "T": "A reward! Hmm... Well, that sweetens the deal somewhat."
                },
                {
                    "N": "Xu",
                    "T": "*sigh* It seems whatever I say, there's no persuading you to stay..."
                },
                {
                    "N": "_0",
                    "T": "Why didn't you tell us Xingqiu was the Feiyun heir?"
                },
                {
                    "N": "Xu",
                    "T": "Oh, I didn't realize you weren't aware..."
                },
                {
                    "N": "Xingqiu",
                    "T": "Thank you in advance for returning the book for me. I will take my leave now. May we meet again, fellow merchants!"
                }
            ]
        ]
    },
    "1200309": {
        "Desc": "Return the Legend of the Shattered Halberd to its rightful owner",
        "Talk": [
            [
                {
                    "N": "Chang the Ninth",
                    "T": "Finally, you're back! This morning the pawnbroker showed up and gave me back my entire collection!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "I'm positive that you must have been behind this once again. Thank you, thank you from the bottom of my heart!"
                },
                {
                    "N": "_0",
                    "T": "No big deal, happy to help."
                },
                {
                    "N": "_0",
                    "T": "Actually, that wasn't us."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Please don't say that. You have no idea how much this means to me!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "The Chang family was a prestigious household in Liyue back in the day. Unfortunately, after I took over the family's affairs as heir, a series of business setbacks devoured our fortune..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Since then, I've saved for years, hoping to restore the house to its former glory... In the end, everything was riding on this Cor Lapis deal."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Were it not for you, this barren wasteland in the mountains would have become my final resting place."
                },
                {
                    "N": "_1005",
                    "T": "Wow, that's the second heir we've met in this town!"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "I'm sorry, what?"
                },
                {
                    "N": "_1005",
                    "T": "...Uh, nothing! Oh — here's your book back."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Wonderful, Legend of the Shattered Halberd! I was beginning to think that Guhua rascal had swindled me!"
                },
                {
                    "N": "_1005",
                    "T": "Do people really look down on the Guhua Clan so much?"
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Actually, the art is centuries old, and was once held in high esteem. But now it has faded beyond recognition."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "To instigate a revival, you need to inject some fresh blood, but it's hard to attract budding young talent to a dying art... And so it becomes a vicious cycle."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "In any case, Guhua kids these days... Take that young rascal Xingqiu for instance, for all his talk about repaying kindness with kindness and whatnot, what has he done to show for it? You're the ones who've displayed a genuine sense of responsibility."
                },
                {
                    "N": "_0",
                    "T": "He's better than you give him credit for."
                },
                {
                    "N": "_0",
                    "T": "Maybe a Guhua renaissance is just around the corner."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Ah, what does it matter? Anyway, you wanted the Liyue volume of the Teyvat Travel Guide, didn't you? I'll fetch it for you."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "It's yours to keep. In addition, here is but a small token of appreciation for your huge generosity."
                },
                {
                    "N": "_0",
                    "T": "Finally. Our trip was worth it after all."
                },
                {
                    "N": "_0",
                    "T": "I'd almost forgotten about that."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "My ore is sold and my treasured books have returned, I can't believe it..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "What?"
                },
                {
                    "N": "_1005",
                    "T": "What was that? Paimon saw something fall out..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "Huh. Nothing, nothing..."
                },
                {
                    "N": "Chang the Ninth",
                    "T": "(That little rascal... surely isn't...)"
                }
            ]
        ]
    }
}