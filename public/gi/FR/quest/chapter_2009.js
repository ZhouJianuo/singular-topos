// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 85
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 47
        },
        {
            "Name": "Klee",
            "ID": "10090",
            "Count": 40
        },
        {
            "Name": "José aux six doigts",
            "ID": "152301",
            "Count": 29
        },
        {
            "Name": "Jean",
            "ID": "1006",
            "Count": 21
        },
        {
            "Name": "Jack",
            "ID": "141401",
            "Count": 15
        },
        {
            "Name": "Mage de l'Abîme",
            "ID": "10093",
            "Count": 10
        },
        {
            "Name": "Patton",
            "ID": "1467",
            "Count": 8
        },
        {
            "Name": "Charles",
            "ID": "1465",
            "Count": 6
        },
        {
            "Name": "Bruce",
            "ID": "160301",
            "Count": 6
        },
        {
            "Name": "Mage de l'Abîme",
            "ID": "10091",
            "Count": 6
        },
        {
            "Name": "Cellule d'isolement",
            "ID": "10092",
            "Count": 5
        }
    ],
    "Num": "Trifolium - Acte 1",
    "Title": "Le vrai trésor",
    "IT": "Klee",
    "Tab": "UI_LegendQuestImg_Klee",
    "Icon": "UI_ChapterIcon_Klee",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 10200,
            "Name": "Qui est le meilleur combattant de Mondstadt ?",
            "Desc": "Les clients du Cadeau de l'Ange discutent de ce qui se raconte dans les ruelles de Mondstadt...",
            "Track": [
                10201
            ],
            "R": [
                110200
            ],
            "RP": [],
            "Sub": [
                1020001,
                1020002,
                1020015,
                1020003,
                1020004,
                1020011,
                1020012,
                1020013,
                1020014,
                1020016,
                1020005,
                1020006,
                1020007,
                1020008,
                1020009,
                1020010
            ]
        },
        {
            "_id": 10201,
            "Name": "Le mystère du trésor de la fille en rouge",
            "Desc": "Qui est le meilleur combattant de Mondstadt ? Vous avez entendu toutes sortes d'opinions, mais vous n'avez toujours pas de réponse définitive. Vous rencontrez l'une des concurrente au titre, Klee, au quartier général de l'Ordre. Cette dernière a perdu un trésor qui lui est cher, et aurait bien besoin d'un peu d'aide.",
            "Track": [
                10202
            ],
            "R": [
                110201
            ],
            "RP": [],
            "Sub": [
                1020101,
                1020112,
                1020102,
                1020103,
                1020114,
                1020104,
                1020105,
                1020115,
                1020106,
                1020107,
                1020116,
                1020108,
                1020113,
                1020109,
                1020110,
                1020111
            ]
        },
        {
            "_id": 10202,
            "Name": "Un trésor pas comme les autres",
            "Desc": "Le « trésor » explosif de Klee s'est avéré être une solution remarquablement efficace au problème posé par le Mage de l'Abîme. Cependant, la jeune fille s'est enfuie après l'explosion. Vous décidez de retourner au QG de l'Ordre faire votre rapport à Jean...",
            "Track": [],
            "R": [
                110202
            ],
            "RP": [],
            "Sub": [
                1020201,
                1020202,
                1020203,
                1020204
            ]
        }
    ]
}

var _sq = {
    "1020001": {
        "Desc": "Attendez que la nuit tombe.",
        "Talk": [
            [
                {
                    "N": "Jean",
                    "T": "Nous devons enquêter et trouver pourquoi l'Ordre de l'Abîme a été si actif ces derniers temps..."
                },
                {
                    "N": "Jean",
                    "T": "#Fais attention à toi, {NICKNAME}."
                }
            ]
        ]
    },
    "1020002": {
        "Desc": "Dialoguez entre Paimon et Patton.",
        "Talk": [
            [
                {
                    "N": "Patton",
                    "T": "*soupir* J'ai envie de participer au débat, moi aussi..."
                },
                {
                    "N": "_1005",
                    "T": "Quoi ? Qu'est-ce qu'il se passe ? Je veux savoir !"
                },
                {
                    "N": "Patton",
                    "T": "Les clients de la taverne sont en train de débattre de qui est le combattant le plus puissant de Mondstadt."
                },
                {
                    "N": "_1005",
                    "T": "Le plus puissant ?"
                },
                {
                    "N": "_1005",
                    "T": "Quelqu'un qui pourrait mettre K.O. plusieurs Brutocollinus en un coup ?"
                },
                {
                    "N": "_0",
                    "T": "Ce n'est pas aussi simple de déterminer la force de quelqu'un..."
                },
                {
                    "N": "_1005",
                    "T": "J'imagine même pas ce que c'est d'être le plus fort d'entre tous..."
                },
                {
                    "N": "_0",
                    "T": "Fastoche, je peux le faire aussi."
                },
                {
                    "N": "_1005",
                    "T": "OK, je te nomine alors."
                },
                {
                    "N": "_1005",
                    "T": "Dites-nous, Patton. Est-ce qu'on atteint un consensus parmi les clients ?"
                },
                {
                    "N": "Patton",
                    "T": "Un consensus ? À Mondstadt ? C'est tout aussi probable que des toasts du pêcheur qui tomberaient du ciel."
                },
                {
                    "N": "Patton",
                    "T": "Tout le monde a sa propre opinion sur la question, mais ne dispose pas de toutes les informations pour trancher. Voilà pourquoi les débats peuvent devenir assez enflammés..."
                },
                {
                    "N": "Patton",
                    "T": "D'un point de vue général, l'opinion est divisée entre deux candidats qui sont..."
                },
                {
                    "N": "Patton",
                    "T": "... le Chevalier au Pissenlit et le Héros de la Nuit."
                },
                {
                    "N": "_0",
                    "T": "Tu votes pour qui, Paimon ?"
                },
                {
                    "N": "_0",
                    "T": "Personne n'a pensé à moi ?"
                },
                {
                    "N": "_1005",
                    "T": "Je suis avec toi !"
                },
                {
                    "N": "_1005",
                    "T": "Mais j'aimerais quand même connaître l'avis des clients de la <color=#00E1FFFF>taverne</color>. On obtiendra peut-être des informations croustillantes, qui sait ?"
                },
                {
                    "N": "Patton",
                    "T": "Que c'est beau de vivre dans l'insouciance."
                },
                {
                    "N": "Patton",
                    "T": "Ne vous occupez pas de moi... Je vais continuer mon boulot..."
                }
            ]
        ]
    },
    "1020015": {
        "Desc": "Renseignez-vous auprès de Patton sur les récents sujets de conversation.",
        "Talk": [
            [
                {
                    "N": "José aux six doigts",
                    "T": "#Bonjour {M#cher ami}{F#chère amie} !"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Comment va ? Vous voulez écouter le nouveau poème de José aux six doigts ?"
                }
            ]
        ]
    },
    "1020003": {
        "Desc": "Entrer dans la taverne",
        "Step": "« Qui est le meilleur combattant de Mondstadt ? » Ce débat enflamme les esprits à la taverne du Cadeau de l'Ange, et Patton a son mot à dire sur le sujet.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Patton avait raison."
                },
                {
                    "N": "_0",
                    "T": "Chacun a son opinion sur la question."
                },
                {
                    "N": "_0",
                    "T": "Il y a même des avis surprenants..."
                },
                {
                    "N": "_1005",
                    "T": "Mais chacun reste tellement sur sa position qu'il est impossible de convaincre quiconque de changer d'avis..."
                },
                {
                    "N": "_1005",
                    "T": "À ce rythme-là, on ne saura jamais qui est le combattant le plus fort de Mondstadt."
                },
                {
                    "N": "_1005",
                    "T": "Ah, je sais !"
                },
                {
                    "N": "_1005",
                    "T": "<color=#00E1FFFF>Jean</color> devrait en savoir quelque chose, non ?"
                },
                {
                    "N": "_1005",
                    "T": "Peut-être qu'elle a un classement officiel des chevaliers de l'Ordre de Favonius ?!"
                },
                {
                    "N": "_0",
                    "T": "Tu crois ?"
                },
                {
                    "N": "_1005",
                    "T": "#Allons la voir ! On ne saura jamais si on reste {M#plantés}{F#plantées} là !"
                },
                {
                    "N": "_0",
                    "T": "Tu penses que je suis dans ce classement ?"
                },
                {
                    "N": "_1005",
                    "T": "Ça dépend s'ils ont pris en compte tout ce que tu as fait pour eux."
                },
                {
                    "N": "_1005",
                    "T": "Ne t'inquiète pas, je crois en toi !"
                }
            ]
        ]
    },
    "1020004": {
        "Desc": "Renseignez-vous auprès des buveurs sur qui est le meilleur combattant.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Bien le bonjour, Jean ! Nous cherchons à savoir qui est le combattant le plus puissant de Mondstadt."
                },
                {
                    "N": "_1005",
                    "T": "Est-ce que vous auriez... euh, un classement des chevaliers les plus balèzes ?"
                },
                {
                    "N": "Jean",
                    "T": "Le combattant le plus puissant de Mondstadt ?"
                },
                {
                    "N": "Jean",
                    "T": "Hélas, j'ai bien peur de ne pas pouvoir vous aider. Je n'ai aucun document de ce genre..."
                },
                {
                    "N": "_1005",
                    "T": "Ah... dommage."
                },
                {
                    "N": "_1005",
                    "T": "#J'espérais que {NICKNAME} ferait au moins partie des cinq premiers de la liste !"
                },
                {
                    "N": "Jean",
                    "T": "Haha ! Si ce classement existait, je n'en doute pas une seule seconde."
                },
                {
                    "N": "Jean",
                    "T": "D'ailleurs..."
                },
                {
                    "N": "Jean",
                    "T": "Récemment, un Mage de l'Abîme a été aperçu près de Mondstadt."
                },
                {
                    "N": "Jean",
                    "T": "Si jamais vous vous trouvez aux environs de Mondstadt, j'aimerais que vous m'aidiez à aller tirer ça au clair."
                },
                {
                    "N": "Jean",
                    "T": "Je n'ai aucun doute sur ta capacité à sécuriser la zone, au vu de tes talents."
                },
                {
                    "N": "_1005",
                    "T": "#OK ! Si {NICKNAME} règle le compte de ce mage, {M#il}{F#elle} grimpera dans le classement plus vite qu'{M#il}{F#elle} ne grimpe les falaises !"
                },
                {
                    "N": "_0",
                    "T": "Ce classement n'existe pas..."
                },
                {
                    "N": "_0",
                    "T": "Tu penses que je peux arriver en première place ?"
                },
                {
                    "N": "_1005",
                    "T": "Dans tous les cas, mettre une raclée à l'Ordre de l'Abîme est la meilleure chose à faire !"
                },
                {
                    "N": "Jean",
                    "T": "Haha. Ton enthousiasme est contagieux."
                },
                {
                    "N": "Jean",
                    "T": "Je vous souhaite bon courage !"
                }
            ]
        ]
    },
    "1020011": {
        "Desc": "Renseignez-vous auprès des buveurs sur qui est le meilleur combattant.",
        "Talk": [
            [
                {
                    "N": "Jack",
                    "T": "Salut ! Je m'entraîne à être un aventurier... à boire comme un aventurier, plus précisément. Tu te joins à moi ?"
                }
            ]
        ]
    },
    "1020012": {
        "Desc": "Renseignez-vous auprès des buveurs sur qui est le meilleur combattant.",
        "Talk": [
            [
                {
                    "N": "Jack",
                    "T": "Tu as l'air d'avoir un peu trop bu..."
                },
                {
                    "N": "Jack",
                    "T": "Ah bon ? Attends, je compte... 8 bières... 5 verres de vin et 7 verres de cidre."
                },
                {
                    "N": "Jack",
                    "T": "Je suis encore loin d'arriver à la cheville des autres aventuriers ! Ils pourraient boire l'équivalent de la moitié du Lac de cidre !"
                },
                {
                    "N": "Jack",
                    "T": "Ce n'est qu'une exagération ? Ah bon ? Bah, en même temps, je me demandais où est-ce qu'ils trouvaient les moras pour acheter tout cet alcool..."
                }
            ]
        ]
    },
    "1020013": {
        "Desc": "Renseignez-vous auprès des buveurs sur qui est le meilleur combattant.",
        "Talk": [
            [
                {
                    "N": "Jack",
                    "T": "Tu aimes boire ?"
                },
                {
                    "N": "Jack",
                    "T": "Moi ? Pas trop, non..."
                },
                {
                    "N": "Jack",
                    "T": "Mais un aventurier sans le sou comme moi n'a pas vraiment d'autres choix..."
                },
                {
                    "N": "Jack",
                    "T": "Peu importe ce qu'on boit, tant qu'on peut se saouler."
                }
            ]
        ]
    },
    "1020014": {
        "Desc": "Parlez aux buveurs pour vous renseigner sur l'histoire de « la plus puissante ».",
        "Talk": [
            [
                {
                    "N": "Jack",
                    "T": "Au revoir."
                },
                {
                    "N": "Jack",
                    "T": "Au revoir ! Je te souhaite de joyeuses aventures."
                }
            ]
        ]
    },
    "1020016": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "_0",
                    "T": "... Et vous êtes ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "C'est moi, José aux six doigts !"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je suis un barde très apprécié à Mondstadt ! Enfin, j'étais..."
                },
                {
                    "N": "_0",
                    "T": "Votre nouveau poème ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Vous voulez écouter ma nouvelle chanson ? Elle s'intitule « Ode à la brise matinale »."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je vous laisse patienter, le temps que j'accorde ma lyre..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Hmph..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Désolé, ça fait longtemps que je n'ai pas chanté en public. Mes cordes sont un peu rouillées... Faisons ça une prochaine fois."
                },
                {
                    "N": "_0",
                    "T": "Il y a beaucoup de bardes à Mondstadt ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Des tonnes ! Ce n'est pas un paradis pastoral pour rien."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Récemment, un nouveau barde a débarqué en ville. J'ai essayé de me renseigner sur lui, mais niet ! Nada !"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Depuis qu'il joue à Mondstadt, la fréquentation de mes spectacles a baissé."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je voulais le défier..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Mais il chante si bien que je n'ai pas la force de le faire..."
                }
            ]
        ]
    },
    "1020005": {
        "Desc": "Faites le point avec Paimon.",
        "Talk": [
            [
                {
                    "N": "Charles",
                    "T": "Qu'est-ce que je vous sers aujourd'hui ?"
                }
            ]
        ]
    },
    "1020006": {
        "Desc": "Rendez-vous au QG de l'Ordre de Favonius.",
        "Talk": [
            [
                {
                    "N": "Klee",
                    "T": "#Ça va, je n'ai rien. Pardon de vous avoir {M#bousculés}{F#bousculées} !"
                },
                {
                    "N": "_0",
                    "T": "Tu as fait tomber quelque chose."
                },
                {
                    "N": "_1005",
                    "T": "On dirait qu'il y a quelque chose d'écrit..."
                },
                {
                    "N": "_1005",
                    "T": "« Explosions dans la ville, tu vas t'en mordre les mimines » ; « Les explosions peuvent blesser, et Jean ne fait pas de quartier » ; « Si Mondstadt bombardée, Klee enfermée »...?"
                },
                {
                    "N": "Klee",
                    "T": "Hein ?!"
                },
                {
                    "N": "Klee",
                    "T": "C'est Kaeya qui a rédigé ces lignes pour moi... Hum, ce sont des, euh... règles de survie."
                },
                {
                    "N": "_1005",
                    "T": "Des règles de survie ?"
                },
                {
                    "N": "Klee",
                    "T": "J—Je dois les respecter à tout prix !"
                },
                {
                    "N": "Klee",
                    "T": "Sinon il m'arrivera quelque chose de vraiment, vraiment terrible..."
                },
                {
                    "N": "_0",
                    "T": "Kaeya ?"
                },
                {
                    "N": "_0",
                    "T": "Quelque chose de vraiment terrible ?"
                },
                {
                    "N": "Klee",
                    "T": "Oui !"
                },
                {
                    "N": "Klee",
                    "T": "Ah... J'ai oublié de me présenter."
                },
                {
                    "N": "Klee",
                    "T": "Je m'appelle Klee."
                },
                {
                    "N": "_0",
                    "T": "#{M#Enchanté}{F#Enchantée} de faire ta connaissance."
                },
                {
                    "N": "_0",
                    "T": "#Je suis {NICKNAME}."
                },
                {
                    "N": "_1005",
                    "T": "Moi, c'est Paimon."
                },
                {
                    "N": "Klee",
                    "T": "Oh, je te reconnais ! Tu es le chevalier honoraire qui aide Mondstadt !"
                },
                {
                    "N": "_1005",
                    "T": "Waouh !"
                },
                {
                    "N": "_1005",
                    "T": "Enfin quelqu'un qui reconnaît ta valeur ! J'en suis toute émue."
                },
                {
                    "N": "Klee",
                    "T": "C'est Amber qui... Non ! Je ne dois pas en parler..."
                },
                {
                    "N": "Klee",
                    "T": "J—Je suis très pressée, il y a urgence."
                },
                {
                    "N": "_0",
                    "T": "Qu'est-ce qu'il se passe ?"
                },
                {
                    "N": "Klee",
                    "T": "Le trésor que j'ai enterré dans le <color=#00E1FFFF>Bois des Murmures</color> a disparu."
                },
                {
                    "N": "_1005",
                    "T": "Un trésor ?"
                },
                {
                    "N": "_0",
                    "T": "Je crois qu'elle a besoin d'aide..."
                },
                {
                    "N": "_1005",
                    "T": "Je crois aussi !"
                },
                {
                    "N": "_0",
                    "T": "Une jeune fille habillée en rouge..."
                },
                {
                    "N": "_1005",
                    "T": "Et qui possède un trésor..."
                },
                {
                    "N": "_1005",
                    "T": "(C'est elle que José aux six doigts considère le combattant le plus fort de Mondstadt ? Les gens sont vraiment bizarres...)"
                },
                {
                    "N": "_1005",
                    "T": "Un trésor perdu ? Mais c'est un gros problème ! Nous te proposons notre aide, qu'en dis-tu ?"
                },
                {
                    "N": "Klee",
                    "T": "C'est super gentil ! Merci beaucoup !"
                },
                {
                    "N": "Klee",
                    "T": "Hum... Ah ! Le trésor se trouve ici."
                },
                {
                    "N": "Klee",
                    "T": "J'ai même planté un petit panneau en bois là où je l'ai enterré !"
                },
                {
                    "N": "_1005",
                    "T": "(C'est pour ça qu'il a été volé...)"
                },
                {
                    "N": "Klee",
                    "T": "Allons-y, chevalier honoraire !"
                }
            ]
        ]
    },
    "1020007": {
        "Desc": "Renseignez-vous auprès de Jean sur qui est le meilleur combattant.",
        "Talk": [
            [
                {
                    "N": "Jack",
                    "T": "Qui est le combattant le plus puissant de Mondstadt ?"
                },
                {
                    "N": "Jack",
                    "T": "Tu veux connaître mon avis ?"
                },
                {
                    "N": "Jack",
                    "T": "Pour moi, c'est le plus grand aventurier de tous les temps : Stanley, de la Guilde des aventuriers."
                },
                {
                    "N": "Jack",
                    "T": "Cyrus est aussi très fort, mais il n'y a que Stanley qui ait réussi à venir à bout de l'abominable monstre de la Mare Jivari !"
                },
                {
                    "N": "_1005",
                    "T": "« L'abominable monstre de la Mare Jivari »... Plutôt terrifiant, comme nom."
                },
                {
                    "N": "_1005",
                    "T": "Est-ce que tu aurais peur si ce monstre devait apparaître devant toi tout de suite ?"
                },
                {
                    "N": "_0",
                    "T": "Je le battrais à plate couture."
                },
                {
                    "N": "_1005",
                    "T": "Ah ! Je le savais !"
                },
                {
                    "N": "_0",
                    "T": "Moi, je prendrais mes jambes à mon cou."
                },
                {
                    "N": "_1005",
                    "T": "C'est logique. La sécurité avant tout."
                }
            ]
        ]
    },
    "1020008": {
        "Desc": "Quittez le bureau du QG de l'Ordre de Favonius.",
        "Talk": [
            [
                {
                    "N": "Bruce",
                    "T": "Qui est le combattant le plus puissant de Mondstadt ?"
                },
                {
                    "N": "Bruce",
                    "T": "*hic* ... Le plus fort ?"
                },
                {
                    "N": "Bruce",
                    "T": "Je parie que c'est Jean... *hic* ..."
                },
                {
                    "N": "Bruce",
                    "T": "Elle est si... puissante... lui suffit d'un coup d'épée pour... dégommer un Gardien des ruines..."
                },
                {
                    "N": "Bruce",
                    "T": "Puis elle ne ferait... qu'une bouchée des Brutocollinus de la Vallée Dadaupa... *hic* ..."
                },
                {
                    "N": "Bruce",
                    "T": "Sans elle... nous pourrions dire adieu à nos vies paisibles..."
                },
                {
                    "N": "_1005",
                    "T": "C'est vrai que sa présence est rassurante."
                },
                {
                    "N": "_1005",
                    "T": "En attendant, ce type est saoul comme une barrique !"
                }
            ]
        ]
    },
    "1020009": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "Charles",
                    "T": "Qui est le combattant le plus puissant de Mondstadt ?"
                },
                {
                    "N": "Charles",
                    "T": "Franchement, ça ne m'intéresse pas ce genre de choses..."
                },
                {
                    "N": "_1005",
                    "T": "Dommage... Je pensais qu'un barman aurait quelque chose à nous dire là-dessus. Ils sont censés être au courant de tout, non ?"
                },
                {
                    "N": "_0",
                    "T": "Tout comme ils sont censés avoir un fournisseur exclusif en alcool ?"
                },
                {
                    "N": "_1005",
                    "T": "Exactement !"
                },
                {
                    "N": "Charles",
                    "T": "Je ne suis pas un informateur."
                },
                {
                    "N": "Charles",
                    "T": "Par contre, si tu veux vraiment mon avis, je mise sur le Héros de la Nuit."
                },
                {
                    "N": "Charles",
                    "T": "La clientèle parle souvent de lui. Il aurait même sauvé des innocents des griffes de l'Ordre de l'Abîme."
                },
                {
                    "N": "_1005",
                    "T": "Bah voilà quand vous le voulez !"
                },
                {
                    "N": "_1005",
                    "T": "En parlant d'eux, ils sont encore en train de mettre la pagaille partout ces derniers temps."
                }
            ]
        ]
    },
    "1020010": {
        "Desc": "Renseignez-vous sur la petite fille.",
        "Talk": [
            [
                {
                    "N": "José aux six doigts",
                    "T": "Qui est le combattant le plus puissant de Mondstadt ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Hum, je réfléchis..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je pense que c'est cette jeune fille habillée en rouge."
                },
                {
                    "N": "_0",
                    "T": "Une jeune fille habillée en rouge ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Oui ! Je me suis rendu aux Montagnes du guet pour y trouver un peu d'inspiration..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Et devinez quoi ?"
                },
                {
                    "N": "_1005",
                    "T": "Quoi ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "J'ai assisté à une démonstration de force comme jamais je n'en avais vu de toute ma vie !"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Elle a changé le relief d'une partie de la montagne en un instant !"
                },
                {
                    "N": "_1005",
                    "T": "Ouah !!"
                },
                {
                    "N": "José aux six doigts",
                    "T": "J'étais caché dans un buisson, alors je n'ai pas pu voir grand-chose à part cette fille et le chaos qu'elle a laissé derrière elle."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Mais tout le monde me dit que j'ai halluciné."
                },
                {
                    "N": "_1005",
                    "T": "J'imagine que c'est difficile de croire qu'une jeune fille ait une force aussi destructrice..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "À mon avis, elle possède un trésor dont personne n'est au courant."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je dirais même le trésor le plus redoutable de tout Mondstadt !"
                },
                {
                    "N": "_1005",
                    "T": "Un trésor ?"
                },
                {
                    "N": "_1005",
                    "T": "#Tu as entendu, {NICKNAME} ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Enfin, ce n'est qu'une supposition de ma part. Non, j'appellerais ça davantage une forte intuition de barde !"
                },
                {
                    "N": "_0",
                    "T": "#Je n'en suis pas si {M#sûr}{F#sûre}..."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je vous assure que je ne mens pas !"
                },
                {
                    "N": "_0",
                    "T": "Je vais vous croire pour l'instant."
                },
                {
                    "N": "José aux six doigts",
                    "T": "#Merci, mon {M#ami}{F#amie} ! Enfin quelqu'un qui me croit, je..."
                },
                {
                    "N": "_1005",
                    "T": "Comment s'appelle cette jeune fille ?"
                },
                {
                    "N": "José aux six doigts",
                    "T": "Euh, je ne sais pas. Je ne l'avais jamais vue à Mondstadt."
                },
                {
                    "N": "José aux six doigts",
                    "T": "Je vous promets que je ne mens pas !"
                },
                {
                    "N": "_1005",
                    "T": "Votre histoire reste quand même un peu louche..."
                },
                {
                    "N": "_1005",
                    "T": "Mais merci quand même !"
                }
            ]
        ]
    },
    "1020101": {
        "Desc": "Rendez-vous au Bois des Murmures et trouvez l'emplacement du trésor.",
        "Talk": [
            [
                {
                    "N": "Klee",
                    "T": "Nous y sommes ! C'est là !"
                },
                {
                    "N": "Klee",
                    "T": "Regardez, j'avais enfoui un gros trésor ici..."
                },
                {
                    "N": "_1005",
                    "T": "Il a été déterré..."
                },
                {
                    "N": "_0",
                    "T": "Attendez, qui va là ?"
                },
                {
                    "N": "_1005",
                    "T": "Un Mage de l'Abîme ?! Hé, c'est peut-être celui dont Jean nous a parlé..."
                },
                {
                    "N": "_1005",
                    "T": "Qu'est-ce qu'il a dans les mains !"
                },
                {
                    "N": "Klee",
                    "T": "Mon trésor !"
                },
                {
                    "N": "_1005",
                    "T": "Hein ?!"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Tss ! La fillette est venue avec des renforts. Changement de plan..."
                },
                {
                    "N": "_1005",
                    "T": "Hé ! Tu ne t'en tireras pas comme ça !"
                },
                {
                    "N": "_0",
                    "T": "Il faut lui courir après !"
                }
            ]
        ]
    },
    "1020112": {
        "Desc": "Parlez à Klee.",
        "Talk": []
    },
    "1020102": {
        "Desc": "Poursuivez le Mage de l'Abîme (la mission échoue si vous laissez plus de 50 mètres).",
        "Talk": []
    },
    "1020103": {
        "Desc": "Poursuite I",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "C'est l'entrée d'un donjon ! Le Mage de l'Abîme a dû s'y réfugier."
                },
                {
                    "N": "_0",
                    "T": "Il n'a aucun moyen de s'échapper."
                },
                {
                    "N": "_0",
                    "T": "Poursuivons-le."
                },
                {
                    "N": "Klee",
                    "T": "*halète* ..."
                },
                {
                    "N": "_1005",
                    "T": "Klee, tu as besoin d'une pause ?"
                },
                {
                    "N": "_1005",
                    "T": "Pourquoi ne pas nous attendre ici pendant qu'on récupère ton trésor pour toi ?"
                },
                {
                    "N": "Klee",
                    "T": "... Non, je viens avec vous !"
                },
                {
                    "N": "Klee",
                    "T": "C'est mon trésor que monsieur Boule-de-poils a volé. C'est à moi de le récupérer !"
                },
                {
                    "N": "_0",
                    "T": "C'est courageux de ta part !"
                },
                {
                    "N": "_0",
                    "T": "Mais ces donjons sont dangereux..."
                },
                {
                    "N": "Klee",
                    "T": "Héhé ! Ne vous en faites pas, je suis une grande fille !"
                },
                {
                    "N": "Klee",
                    "T": "Allons-y, chevalier honoraire !"
                }
            ]
        ]
    },
    "1020114": {
        "Desc": "Dialogue de combat I",
        "Talk": []
    },
    "1020104": {
        "Desc": "Combat I",
        "Talk": [
            [
                {
                    "N": "Mage de l'Abîme",
                    "T": "Hmph. Vous avez réussi à me suivre. Je dois admettre que je suis impressionné."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Mais votre chemin s'arrête ici !"
                },
                {
                    "N": "_1005",
                    "T": "Et qu'est-ce que vous allez faire ?"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Hahahahaha !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Oh, la propension des humains à trop parler nous a fourni tout ce dont nous avions besoin..."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Nous savons que votre petite amie en rouge possède le trésor le plus puissant de tout Mondstadt."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Ce trésor est maintenant à moi. Et vous ne pouvez rien y faire !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Maintenant, votre précieux trésor sera votre perte !"
                },
                {
                    "N": "Klee",
                    "T": "Non, non, attendez ! Ne... Ne le touchez pas !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Haha ! Vu comme tu as peur, tu sais déjà ce qui t'attend !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Maintenant, qu'avons-nous là ? Un symbole Pyro ? Héhéhéhé..."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Bang—"
                },
                {
                    "N": "Klee",
                    "T": "NON !"
                },
                {
                    "N": "Klee",
                    "T": "Je n'ai pas respecté les règles de survie ! « Les explosions peuvent blesser, et Jean ne fait pas de quartier »..."
                },
                {
                    "N": "Klee",
                    "T": "Ça y est... Je suis fichue, bouhouhou..."
                },
                {
                    "N": "_1005",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "Attends, le trésor de Klee est une bombe ?!"
                },
                {
                    "N": "_0",
                    "T": "Trop fort..."
                },
                {
                    "N": "_0",
                    "T": "Le Mage de l'Abîme a eu ce qu'il méritait !"
                },
                {
                    "N": "_1005",
                    "T": "Pas étonnant qu'elle ait été nommée parmi les combattants les plus puissants de Mondstadt..."
                },
                {
                    "N": "_1005",
                    "T": "Je ne voudrais jamais avoir le malheur de l'énerver."
                },
                {
                    "N": "_1005",
                    "T": "Mais pourquoi elle s'est enfuie ?"
                },
                {
                    "N": "_0",
                    "T": "Elle a parlé de ses règles de survie."
                },
                {
                    "N": "_0",
                    "T": "Elle a parlé de Jean..."
                },
                {
                    "N": "_1005",
                    "T": "Tu as raison !"
                },
                {
                    "N": "_1005",
                    "T": "Retournons au <color=#00E1FFFF>QG de l'Ordre de Favonius</color> pour faire notre rapport à Jean."
                }
            ]
        ]
    },
    "1020105": {
        "Desc": "Poursuite II",
        "Talk": []
    },
    "1020115": {
        "Desc": "Combat II",
        "Talk": []
    },
    "1020106": {
        "Desc": "Combat II",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Fini de jouer. Rendez-nous ce trésor !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Grr..."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Vous pensez que je vais vous le donner aussi facilement, après tout ce que j'ai dû faire pour l'obtenir ?"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Hmm..."
                }
            ]
        ]
    },
    "1020107": {
        "Desc": "Poursuite III",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Stop !"
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Si cette fillette avait été seule..."
                },
                {
                    "N": "Mage de l'Abîme",
                    "T": "Hmm..."
                }
            ]
        ]
    },
    "1020116": {
        "Desc": "",
        "Talk": []
    },
    "1020108": {
        "Desc": "Trouvez la trace du Mage de l'Abîme.",
        "Talk": []
    },
    "1020113": {
        "Desc": "Parlez à Klee",
        "Talk": []
    },
    "1020109": {
        "Desc": "Entrez dans les lieux.",
        "Talk": []
    },
    "1020110": {
        "Desc": "Explorez les lieux et trouvez le Mage de l'Abîme.",
        "Talk": []
    },
    "1020111": {
        "Desc": "Parlementez avec le Mage de l'Abîme.",
        "Talk": []
    },
    "1020201": {
        "Desc": "Retournez faire votre rapport à Jean.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Klee ? Tu es là aussi ?"
                },
                {
                    "N": "Klee",
                    "T": "Je... Je me rends."
                },
                {
                    "N": "_1005",
                    "T": "Hein ?!"
                },
                {
                    "N": "Klee",
                    "T": "*sanglote* Je... M—Ma bombe... Je-J'ai blessé quelqu'un..."
                },
                {
                    "N": "Klee",
                    "T": "*sniff* Je n'ai pas respecté une de mes règles de survie... Je ne verrai plus jamais la lumière du soleil..."
                },
                {
                    "N": "Jean",
                    "T": "Klee, j'ai besoin que tu me répondes. Tu as dit que quelqu'un avait été blessé. Où est cette personne ?"
                },
                {
                    "N": "_0",
                    "T": "Attendez ! Il y a un malentendu."
                },
                {
                    "N": "Jean",
                    "T": "Hmm ?"
                },
                {
                    "N": "_0",
                    "T": "Klee a mis un Mage de l'Abîme hors d'état de nuire."
                },
                {
                    "N": "Klee",
                    "T": "Mais... Mais monsieur Boule-de-poils n'était qu'un voleur... Il ne méritait pas d'exploser..."
                },
                {
                    "N": "_1005",
                    "T": "Hé... Je t'ai déjà dit que les Mages de l'Abîme étaient des méchants !"
                },
                {
                    "N": "_1005",
                    "T": "Ce sont même les pires méchants que tu puisses imaginer. Ils ne détestent pas seulement les gentils, ils détestent tout le monde... Leur ennemi c'est... l'humanité toute entière."
                },
                {
                    "N": "Klee",
                    "T": "Monsieur Boule-de-poils... était méchant exprès ? ... Monsieur Boule-de-poils est l'ennemi de l'humanité !?"
                },
                {
                    "N": "Klee",
                    "T": "Qu... Quoi ?! Je ne comprends pas !"
                },
                {
                    "N": "Jean",
                    "T": "C'était une erreur de ma part."
                },
                {
                    "N": "Jean",
                    "T": "Je ne t'ai rien dit à ce propos car tu es encore trop jeune."
                },
                {
                    "N": "Jean",
                    "T": "En fait, les Mages de l'Abîme constituent une menace de plus en plus importante envers Mondstadt. Ils ont été très actifs dans la région ces derniers temps."
                },
                {
                    "N": "_0",
                    "T": "À cause du trésor le plus puissant de Mondstadt ?"
                },
                {
                    "N": "_1005",
                    "T": "Aha, c'est ça ! Je comprends à présent !"
                },
                {
                    "N": "_1005",
                    "T": "Ils traquaient la pauvre Klee parce qu'ils avaient entendu des rumeurs sur son trésor !"
                },
                {
                    "N": "_1005",
                    "T": "Tout comme ma première réaction a été d'essayer de mettre la main sur... euh, non... de mettre les choses au clair à propos de ce trésor."
                },
                {
                    "N": "Klee",
                    "T": "Alors... ça veut dire..."
                },
                {
                    "N": "Jean",
                    "T": "Au vu de ta contribution dans cette affaire, je t'autorise à participer avec nous au prochain Ludi Harpastum."
                },
                {
                    "N": "Klee",
                    "T": "Ludi Harpastum ! Waouh !"
                },
                {
                    "N": "_0",
                    "T": "Tu as de la chance !"
                },
                {
                    "N": "_0",
                    "T": "#Je suis {M#content}{F#contente} pour toi."
                },
                {
                    "N": "Klee",
                    "T": "Chevalier honoraire, il faut que vous veniez aussi !"
                },
                {
                    "N": "_1005",
                    "T": "Tout est bien qui finit bien !"
                },
                {
                    "N": "Jean",
                    "T": "À part que..."
                },
                {
                    "N": "Jean",
                    "T": "Klee, où est-ce que tu avais enterré le trésor en premier lieu ?"
                },
                {
                    "N": "Klee",
                    "T": "Je... Euh..."
                },
                {
                    "N": "Jean",
                    "T": "Ne me dis pas que tu voulais faire exploser les poissons du Lac Tombétoile ?!"
                },
                {
                    "N": "Klee",
                    "T": "N—Non !"
                },
                {
                    "N": "_1005",
                    "T": "(Elle nous regarde comme si elle voulait qu'on joue le jeu...)"
                },
                {
                    "N": "_0",
                    "T": "(Jean n'est pas dupe...)"
                },
                {
                    "N": "Jean",
                    "T": "Klee ?"
                },
                {
                    "N": "Klee",
                    "T": "Je crois que je peux regagner ma <color=#00E1FFFF>cellule</color> comme une grande... *sniff* ..."
                },
                {
                    "N": "_1005",
                    "T": "Klee doit certainement se sentir seule en isolation..."
                }
            ]
        ]
    },
    "1020202": {
        "Desc": "Parlez à Jean.",
        "Talk": []
    },
    "1020203": {
        "Desc": "Quittez le bureau de Jeann.",
        "Talk": []
    },
    "1020204": {
        "Desc": "Trouvez la porte de la cellule du QG de l'Ordre de Favonius.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Devine qui c'est ?"
                },
                {
                    "N": "Cellule d'isolement",
                    "T": "C'est la voix de Paimon que j'entends !"
                },
                {
                    "N": "_0",
                    "T": "On te sort de là ?"
                },
                {
                    "N": "_0",
                    "T": "On te ramène de la nourriture ?"
                },
                {
                    "N": "Cellule d'isolement",
                    "T": "Oh, oui, d'accord... Non, attendez ! Euh, non, ce n'est pas possible. Je dois être une gentille fille et réfléchir à ce que j'ai fait ! Ne me tentez pas !"
                },
                {
                    "N": "Cellule d'isolement",
                    "T": "Enfin, puisque je suis coincée ici, je vais en profiter pour fabriquer un nouveau trésor... version Ludi Harpastum !"
                },
                {
                    "N": "_1005",
                    "T": "Un « trésor » tu dis ?"
                },
                {
                    "N": "Cellule d'isolement",
                    "T": "Héhé... Je lui ai donné la forme d'un harpastum et tout ! C'est tellement mignon..."
                },
                {
                    "N": "_0",
                    "T": "Une bombe en forme de harpastum ?"
                },
                {
                    "N": "_0",
                    "T": "Donc... Une autre bombe ?"
                },
                {
                    "N": "Cellule d'isolement",
                    "T": "Tout le monde sera surpris pendant le Ludi Harpastum !"
                },
                {
                    "N": "_1005",
                    "T": "*soupir* Ça serait la fin des haricots si Jean nous entendait..."
                },
                {
                    "N": "_1005",
                    "T": "La période d'isolation de Klee pourrait être rallongée de beaucoup."
                }
            ]
        ]
    }
}