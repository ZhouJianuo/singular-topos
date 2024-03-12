// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "Amber",
            "ID": "1002",
            "Count": 83
        },
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 27
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 25
        },
        {
            "Name": "Otto",
            "ID": "1483",
            "Count": 13
        },
        {
            "Name": "Rapace",
            "ID": "1485",
            "Count": 6
        }
    ],
    "Num": "Lepus - Acte 1",
    "Title": "Vents, courage & ailes",
    "IT": "Amber",
    "Tab": "UI_LegendQuestImg_Ambor",
    "Icon": "UI_ChapterIcon_Ambor",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 481,
            "Name": "Planer avec le vent",
            "Desc": "Amber souhaite s'entretenir de l'utilisation des planeurs avec vous...",
            "Track": [
                480
            ],
            "R": [
                100481
            ],
            "RP": [],
            "Sub": [
                48101,
                48102,
                48103,
                48104,
                48105,
                48106
            ]
        },
        {
            "_id": 480,
            "Name": "Permis de planer",
            "Desc": "Amber a préparé un examen spécialement à votre attention. Mais avant de vous y atteler, elle vous demande de lire le « Guide de planage ».",
            "Track": [
                427
            ],
            "R": [
                100480
            ],
            "RP": [],
            "Sub": [
                48005,
                48001,
                48002,
                48003,
                48004
            ]
        },
        {
            "_id": 427,
            "Name": "Planeur de Mondstadt",
            "Desc": "Le livre recherché s'est au bout du compte avéré être non pas un guide, mais un conte pour enfant... Vous avez passé votre premier examen à l'extérieur de Mondstadt. Le second vous attend avec Amber dans les murs de la cité.",
            "Track": [
                484
            ],
            "R": [
                100427
            ],
            "RP": [],
            "Sub": [
                42709,
                42701,
                42702,
                42703,
                42704,
                42705,
                42706,
                42707,
                42708
            ]
        },
        {
            "_id": 484,
            "Name": "On l'appelle le « Rapace ».",
            "Desc": "Otto, un chevalier de l'Ordre, vous a par erreur confondue lors de votre examen avec un voleur recherché nommé « le Rapace ». Après que le malentendu ait été résolu, vous offrez votre aide pour retrouver le suspect, et vous vous lancez à sa poursuite.",
            "Track": [
                485
            ],
            "R": [
                100484
            ],
            "RP": [],
            "Sub": [
                48401,
                48402,
                48403,
                48404,
                48405,
                48406,
                48407,
                48408,
                48433,
                48409,
                48410,
                48411,
                48412,
                48413,
                48414,
                48424,
                48425,
                48426,
                48427,
                48428,
                48429,
                48430,
                48431,
                48432,
                48415,
                48416,
                48417,
                48418,
                48419,
                48420,
                48421,
                48422,
                48423
            ]
        },
        {
            "_id": 485,
            "Name": "Comme une Éclaireuse",
            "Desc": "Votre chasse vous a amenée au Repaire du Rapace, dans lequel vous pénétrez, bien décidée à l'amener devant la justice.",
            "Track": [],
            "R": [
                100485
            ],
            "RP": [],
            "Sub": [
                48501,
                48511,
                48509,
                48512,
                48510,
                48502,
                48503,
                48504,
                48505,
                48506,
                48507,
                48508
            ]
        },
        {
            "_id": 482,
            "Name": "Entraînement au planage à Ventlevé",
            "Desc": "Mini-jeu de bombardement en vol",
            "Track": [
                427
            ],
            "R": [],
            "RP": [],
            "Sub": [
                48201,
                48202,
                48203,
                48209,
                48207,
                48204,
                48208,
                48205
            ]
        }
    ]
}

var _sq = {
    "48101": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "#Salut, {NICKNAME} ! Je t'ai {M#cherché}{F#cherchée} partout ! Que penses-tu du planeur de vent que je t'ai offert ?"
                },
                {
                    "N": "_0",
                    "T": "Il est plutôt solide."
                },
                {
                    "N": "_0",
                    "T": "#Je n'arrête pas d'être {M#emporté}{F#emportée} par le vent."
                },
                {
                    "N": "Amber",
                    "T": "Tu as l'air de bien t'amuser avec le planeur de vent !"
                },
                {
                    "N": "Amber",
                    "T": "Il te manque plus qu'à obtenir ce permis de planer."
                },
                {
                    "N": "_1005",
                    "T": "Un permis de planer ?"
                },
                {
                    "N": "Amber",
                    "T": "Comme son nom l'indique, il te permet de pouvoir planer légalement dans Mondstadt."
                },
                {
                    "N": "_1005",
                    "T": "#Oui, mais {NICKNAME} plane depuis longtemps déjà ! Et on n'en a jamais entendu parler de ton permis..."
                },
                {
                    "N": "Amber",
                    "T": "#Bien sûr que tout le monde a remarqué que {NICKNAME} planait n'importe comment !"
                },
                {
                    "N": "_1005",
                    "T": "Héhé."
                },
                {
                    "N": "_1005",
                    "T": "#Donc, tu {M#le}{F#la} cherchais pour lui donner ce permis ?"
                },
                {
                    "N": "Amber",
                    "T": "Dans tes rêves ! Le planage est strictement règlementé par l'Ordre de Favonius."
                },
                {
                    "N": "Amber",
                    "T": "On doit passer un examen avant de recevoir le permis."
                },
                {
                    "N": "Amber",
                    "T": "C'est pourquoi je suis là aujourd'hui ! C'est moi l'examinatrice de l'épreuve !"
                },
                {
                    "N": "Amber",
                    "T": "Je t'ai donné ce planeur, alors c'est à moi de faire en sorte que tu te plies aux règles. Enfin, je suis sûre que c'est ce que Jean dirait."
                },
                {
                    "N": "_1005",
                    "T": "Mais si Amber est ton examinatrice..."
                },
                {
                    "N": "_0",
                    "T": "Ne sois pas trop dure avec moi ?"
                },
                {
                    "N": "Amber",
                    "T": "Ce n'est certainement pas toi qui vas me dire comment faire."
                },
                {
                    "N": "_0",
                    "T": "OK, ça me va."
                },
                {
                    "N": "Amber",
                    "T": "#Je suis sûre que ça sera une promenade de santé pour {NICKNAME}."
                },
                {
                    "N": "Amber",
                    "T": "L'examen sera vraiment rapide, ça sera juste une formalité. Tout le monde t'a vu planer lors de ton affrontement contre Stormterror."
                },
                {
                    "N": "Amber",
                    "T": "Mais il faut respecter la loi."
                },
                {
                    "N": "Amber",
                    "T": "Tiens, prends cet exemplaire du « Guide de planage ». Tu n'as pas besoin de le connaître par cœur, mais il faudra te familiariser avec l'intégralité du contenu."
                },
                {
                    "N": "Amber",
                    "T": "Par exemple : une personne par planeur, respecter la limite de poids autorisée, interdiction de planer à l'aide d'un Anémoblob, etc."
                },
                {
                    "N": "Amber",
                    "T": "Il faut que tu le lises au moins une fois en entier. Moi aussi, j'ai dû lire plein de gros livres quand Lisa m'enseignait la magie..."
                },
                {
                    "N": "_1005",
                    "T": "C'est vrai qu'il est gros ! On ferait mieux de commencer la lecture bientôt."
                },
                {
                    "N": "Amber",
                    "T": "Venez me trouver à Ventlevé quand vous aurez fini."
                }
            ]
        ]
    },
    "48102": {
        "Desc": "Read Amber's Gliding Guide (Hidden)",
        "Step": "",
        "Talk": []
    },
    "48103": {
        "Desc": "Leave Area (Hidden)",
        "Talk": []
    },
    "48104": {
        "Desc": "Parlez à Paimon.",
        "Talk": []
    },
    "48105": {
        "Desc": "Play - Fable",
        "Talk": []
    },
    "48106": {
        "Desc": "Les doutes de Paimon",
        "Talk": []
    },
    "48005": {
        "Desc": "Rendez-vous au lieu de l'examen.",
        "Talk": []
    },
    "48001": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Hé ! Par ici !"
                },
                {
                    "N": "Amber",
                    "T": "Planer jusqu'à Ventlevé est un jeu d'enfant. Allez !"
                }
            ]
        ]
    },
    "48002": {
        "Desc": "Suivez le chemin en volant et terminez dans le temps imparti.",
        "Talk": []
    },
    "48003": {
        "Desc": "Repassez l'examen selon les instructions d'Amber.",
        "Talk": []
    },
    "48004": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "#Génial ! T'as réussi ! Je savais que tu y arriverais, vu comment tu t'en es {M#sorti}{F#sortie} en pleine tempête."
                },
                {
                    "N": "Amber",
                    "T": "La prochaine épreuve de l'examen se déroule à Mondstadt. Ne me fais pas attendre trop longtemps !"
                }
            ]
        ]
    },
    "42709": {
        "Desc": "Rendez-vous à la porte de la cathédrale de Mondstadt.",
        "Talk": []
    },
    "42701": {
        "Desc": "Parlez à Amber.",
        "Talk": []
    },
    "42702": {
        "Desc": "Suivez le chemin en volant et terminez dans le temps imparti.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Hé ! Par ici !"
                },
                {
                    "N": "Amber",
                    "T": "J'ai tout préparé. On peut commencer l'épreuve."
                },
                {
                    "N": "Amber",
                    "T": "Comme d'habitude, passe tous les marqueurs sans t'arrêter jusqu'à la ligne d'arrivée."
                },
                {
                    "N": "_0",
                    "T": "#Je suis {M#prêt}{F#prête}."
                }
            ]
        ]
    },
    "42703": {
        "Desc": "Repassez l'examen selon les instructions d'Amber.",
        "Talk": []
    },
    "42704": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Je crois que tu t'en sors bien ! Passons à la dernière étape."
                },
                {
                    "N": "_1005",
                    "T": "Tu as déjà plané dans cette direction auparavant..."
                },
                {
                    "N": "Amber",
                    "T": "Tu pourras obtenir ton permis de planer après avoir réussi cette dernière épreuve."
                },
                {
                    "N": "Amber",
                    "T": "#Concentre-toi sur le permis. {M#Prêt}{F#Prête}..."
                },
                {
                    "N": "_0",
                    "T": "C'est parti !"
                }
            ]
        ]
    },
    "42705": {
        "Desc": "Planez vers la destination en respectant le temps imparti et les marqueurs.",
        "Talk": []
    },
    "42706": {
        "Desc": "Suivez le chemin en volant et terminez dans le temps imparti.",
        "Talk": []
    },
    "42707": {
        "Desc": "Atteignez l'entrée de la Guilde des aventuriers.",
        "Talk": []
    },
    "42708": {
        "Desc": "Parler aux gardes de Mondstadt",
        "Talk": [
            [
                {
                    "N": "Otto",
                    "T": "Bonjour, je suis Otto de l'Ordre de Favonius."
                },
                {
                    "N": "_1005",
                    "T": "Waouh ! Que se passe-t-il ?"
                },
                {
                    "N": "Otto",
                    "T": "Montrez-moi votre permis de planer."
                },
                {
                    "N": "_0",
                    "T": "Euh..."
                },
                {
                    "N": "_0",
                    "T": "Le Baron Lapinou l'a mangé..."
                },
                {
                    "N": "Otto",
                    "T": "Il est interdit de planer sans permis ! Je vous arrête pour violation de l'article 12 de la section 7 du code pénal de Mondstadt."
                },
                {
                    "N": "Otto",
                    "T": "Vous avez le droit de garder le silence. Tout ce que vous dites au vent pourra se retourner contre vous."
                },
                {
                    "N": "Amber",
                    "T": "Attendez ! Je suis instructrice de planage, nous étions en plein examen."
                },
                {
                    "N": "Otto",
                    "T": "Ah, vraiment ?"
                },
                {
                    "N": "Otto",
                    "T": "Vous avez vraiment choisi le pire moment pour votre examen."
                },
                {
                    "N": "Amber",
                    "T": "Pourquoi ?"
                },
                {
                    "N": "Otto",
                    "T": "#Nous avons reçu un rapport de la part d'une religieuse de la cathédrale qui dit avoir aperçu le Rapace dans les environs. J'ai pensé que votre élève était {M#son}{F#sa} complice."
                },
                {
                    "N": "_1005",
                    "T": "Le Rapace ? Qui c'est celui-là ?"
                },
                {
                    "N": "Otto",
                    "T": "Un criminel connu à travers Mondstadt. Il a été surnommé de la sorte, car il commet toujours ses vols en planant."
                },
                {
                    "N": "Amber",
                    "T": "Ça veut dire qu'il plane très vite ?"
                },
                {
                    "N": "Otto",
                    "T": "Nous n'avons jamais réussi à l'attraper... La dernière fois, notre plan était de l'attirer dans la cathédrale qui regorge d'artéfacts précieux et de l'y piéger."
                },
                {
                    "N": "Otto",
                    "T": "... Mais il a réussi à s'enfuir avec."
                },
                {
                    "N": "Otto",
                    "T": "Les bonnes sœurs avaient eu l'ingénieuse idée de placer des marqueurs magiques sur les artéfacts."
                },
                {
                    "N": "Otto",
                    "T": "Ce voleur était tellement rapide que nous n'avons rien pu faire pour l'arrêter, même en sachant dans quelle direction il allait."
                },
                {
                    "N": "Amber",
                    "T": "Si vous voulez de l'aide pour capturer ce criminel volant, je suis la personne idéale ! Où s'est-il enfui ?"
                },
                {
                    "N": "Otto",
                    "T": "Il a été aperçu pour la dernière fois à Deauclaire, mais ça remonte à un certain temps..."
                },
                {
                    "N": "Amber",
                    "T": "#Laissez-nous faire ! Il n'a aucune chance contre {NICKNAME} et moi !"
                },
                {
                    "N": "_0",
                    "T": "J'en suis."
                },
                {
                    "N": "_0",
                    "T": "Ça veut dire que j'ai réussi mon examen ?"
                },
                {
                    "N": "Amber",
                    "T": "T'inquiète ! On reprendra où on en était après avoir attrapé ce type."
                },
                {
                    "N": "Amber",
                    "T": "Je vais en toucher deux mots à Jean."
                }
            ]
        ]
    },
    "48401": {
        "Desc": "Poursuivez le Rapace.",
        "Talk": []
    },
    "48402": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Ventlevé se trouve droit devant. On devrait y trouver des indices sur le Rapace."
                },
                {
                    "N": "Amber",
                    "T": "Une religieuse de la cathédrale a laissé des traces Anémo sur un des artéfacts qu'il a volés."
                },
                {
                    "N": "_1005",
                    "T": "Cherche le moindre indice avec ta <color=#00E1FFFF>vue élémentaire</color>."
                }
            ]
        ]
    },
    "48403": {
        "Desc": "Trouvez des indices et poursuivez le Rapace.",
        "Talk": []
    },
    "48404": {
        "Desc": "",
        "Talk": []
    },
    "48405": {
        "Desc": "Trouvez des indices et poursuivez le Rapace.",
        "Talk": []
    },
    "48406": {
        "Desc": "",
        "Talk": []
    },
    "48407": {
        "Desc": "Trouvez des indices et poursuivez le Rapace.",
        "Talk": []
    },
    "48408": {
        "Desc": "",
        "Talk": []
    },
    "48433": {
        "Desc": "",
        "Talk": []
    },
    "48409": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Hum, voilà un bout de tissu avec des traces d'Anémo."
                },
                {
                    "N": "Amber",
                    "T": "D'après la méthode de tissage, ça vient probablement d'un planeur."
                },
                {
                    "N": "_1005",
                    "T": "Les Éclaireurs sont aussi experts en textile ? Trop fort !"
                },
                {
                    "N": "Amber",
                    "T": "Ça voudrait dire que le planeur du Rapace s'est cassé, si le tissu provient bien du sien."
                }
            ]
        ]
    },
    "48410": {
        "Desc": "",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Hum, comment peut-on différencier les traces du Rapace de celles des Anémoblobs ?"
                },
                {
                    "N": "Amber",
                    "T": "Les Anémoblobs ne touchent jamais le sol lors de leurs déplacements. Ils ne laissent donc pas de trace, sauf quand quelqu'un les écrase pour prendre appui."
                },
                {
                    "N": "_1005",
                    "T": "Il y a vraiment des gens qui font ça ?!"
                },
                {
                    "N": "Amber",
                    "T": "En tout cas, gardons ces traces en mémoire ! Elles sont bien définies."
                }
            ]
        ]
    },
    "48411": {
        "Desc": "Trouvez des indices et poursuivez le Drôle d'oiseau.",
        "Talk": []
    },
    "48412": {
        "Desc": "The correct dialogue choice after completing the first analysis (Visible)",
        "Talk": []
    },
    "48413": {
        "Desc": "",
        "Talk": []
    },
    "48414": {
        "Desc": "",
        "Talk": []
    },
    "48424": {
        "Desc": "The wrong dialogue choice after completing the first analysis (Hidden)",
        "Talk": []
    },
    "48425": {
        "Desc": "Rollback savepoint",
        "Talk": []
    },
    "48426": {
        "Desc": "Talk to Villager A",
        "Talk": []
    },
    "48427": {
        "Desc": "Talk to Villager B",
        "Talk": []
    },
    "48428": {
        "Desc": "Talk to Villager C",
        "Talk": []
    },
    "48429": {
        "Desc": "Completed talking to NPCs in Springvale (Hidden)",
        "Talk": []
    },
    "48430": {
        "Desc": "Completed talking to NPCs in Springvale (Visible)",
        "Talk": []
    },
    "48431": {
        "Desc": "Avancez vers la source du bruit.",
        "Talk": []
    },
    "48432": {
        "Desc": "Parlez à Farah.",
        "Talk": []
    },
    "48415": {
        "Desc": "Cherchez le Rapace.",
        "Talk": []
    },
    "48416": {
        "Desc": "Éliminez les ennemis cachés.",
        "Talk": []
    },
    "48417": {
        "Desc": "",
        "Talk": []
    },
    "48418": {
        "Desc": "Trouvez les traces laissées par le Rapace.",
        "Talk": []
    },
    "48419": {
        "Desc": "Trouvez les traces laissées par le Rapace.",
        "Talk": []
    },
    "48420": {
        "Desc": "Trouvez les traces laissées par le Rapace.",
        "Talk": []
    },
    "48421": {
        "Desc": "Trouvez les traces laissées par le Rapace.",
        "Talk": []
    },
    "48422": {
        "Desc": "Trouvez les traces laissées par le Rapace.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "Oh, regardez où nous sommes..."
                },
                {
                    "N": "_0",
                    "T": "Il n'y a plus aucune trace élémentaire."
                },
                {
                    "N": "Amber",
                    "T": "Le pouvoir élémentaire de l'artéfact a dû s'épuiser."
                },
                {
                    "N": "Amber",
                    "T": "Le Rapace s'est rendu compte que les traces élémentaires n'avaient pas encore disparu, alors il a ordonné à ses acolytes de nous ralentir."
                },
                {
                    "N": "Amber",
                    "T": "Il avait besoin de temps pour que les traces s'estompent."
                },
                {
                    "N": "Amber",
                    "T": "Hors de question de le laisser s'échapper ! Poursuivons-le !"
                }
            ]
        ]
    },
    "48423": {
        "Desc": "Où va le Rapace ?",
        "Talk": []
    },
    "48501": {
        "Desc": "Entrez dans le repaire du Rapace.",
        "Talk": []
    },
    "48511": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Il n'y a qu'un seul chemin par ici. Le Rapace ne devrait pas être bien loin devant."
                }
            ]
        ]
    },
    "48509": {
        "Desc": "Éliminez tous les monstres.",
        "Talk": []
    },
    "48512": {
        "Desc": "",
        "Talk": []
    },
    "48510": {
        "Desc": "Entrer dans le Donjon d'Amber",
        "Talk": []
    },
    "48502": {
        "Desc": "Poursuivez le Rapace.",
        "Talk": []
    },
    "48503": {
        "Desc": "Poursuivez le Rapace.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "On dirait que le chemin s'arrête ici... Le Rapace devrait être dans les environs."
                },
                {
                    "N": "_1005",
                    "T": "Amber ! Par ici !"
                },
                {
                    "N": "Rapace",
                    "T": "Puisque vous insistez... Oh ? Qui est cette fillette ?"
                },
                {
                    "N": "Amber",
                    "T": "Halte-là, Rapace ! Vous ne nous échapperez pas !"
                },
                {
                    "N": "Rapace",
                    "T": "Hahaha ! Je n'ai même pas besoin de m'enfuir ! Vous n'arriverez jamais à m'atteindre !"
                },
                {
                    "N": "Amber",
                    "T": "Il n'a pas tort. Nous sommes très haut... et le ravin est immense."
                },
                {
                    "N": "Rapace",
                    "T": "Tu devrais peut-être dire à tes supérieurs hiérarchiques de venir m'attraper, fillette ! Si le Grand Maître rapplique, j'envisagerai peut-être de me rendre..."
                },
                {
                    "N": "Amber",
                    "T": "Hé ! Je ne vous permets pas de me sous-estimer ! Vous parlez à une Éclaireuse de l'Ordre de Favonius, on verra bien qui rira le dernier quand je vous aurai arrêté !"
                },
                {
                    "N": "_0",
                    "T": "Respire, Amber."
                },
                {
                    "N": "_0",
                    "T": "Observe ton environnement, comme tu m'as appris."
                },
                {
                    "N": "Amber",
                    "T": "... Tu as raison."
                },
                {
                    "N": "Amber",
                    "T": "Ahhh ! Il est juste en face de nous ! Si seulement on pouvait traverser..."
                },
                {
                    "N": "_1005",
                    "T": "Justement... Comment il a fait, lui ?"
                },
                {
                    "N": "_0",
                    "T": "Peut-être qu'il y a un mécanisme à activer ?"
                },
                {
                    "N": "Amber",
                    "T": "Je n'en vois pas, et ma vue est très bonne."
                },
                {
                    "N": "Amber",
                    "T": "Puis, je ne vois pas où est-ce qu'il pourrait y en avoir au bord d'une falaise."
                },
                {
                    "N": "_0",
                    "T": "Il a utilisé de la magie élémentaire alors ?"
                },
                {
                    "N": "_1005",
                    "T": "#{NICKNAME}, tu vois quelque chose avec ta vue élémentaire ? Non ? Je le savais..."
                },
                {
                    "N": "_0",
                    "T": "Il a utilisé un grappin ? ou des pics ?"
                },
                {
                    "N": "_1005",
                    "T": "On ne peut même pas traverser en planant, c'est peine perdue pour le reste."
                },
                {
                    "N": "Amber",
                    "T": "Il n'y a pas le moindre point d'ancrage."
                },
                {
                    "N": "Rapace",
                    "T": "Adieu, ma petite !"
                },
                {
                    "N": "_1005",
                    "T": "Oh non ! Il va nous filer entre les doigts !"
                },
                {
                    "N": "Amber",
                    "T": "Nous ne pouvons plus reculer, il faut planer jusqu'à lui."
                },
                {
                    "N": "_1005",
                    "T": "Mais..."
                },
                {
                    "N": "Amber",
                    "T": "Pas de panique ! J'ai été sacrée championne de planage ! Si le Rapace l'a fait, il n'y a pas de raison que je ne puisse pas !"
                },
                {
                    "N": "Rapace",
                    "T": "Tu as encore moins de chance de survivre que si tu avais sauté dans le vide sans rien du haut de la statue de l'Archon Anémo à Mondstadt !"
                },
                {
                    "N": "_0",
                    "T": "Je suis avec toi, Amber."
                },
                {
                    "N": "_0",
                    "T": "Il faut avoir beaucoup de cran pour le faire, mais ce n'est pas impossible."
                },
                {
                    "N": "_1005",
                    "T": "#C'est vrai, {NICKNAME}. Si on élimine tous les moyens impossibles, il ne reste que le planage."
                },
                {
                    "N": "Amber",
                    "T": "#{NICKNAME}, te rappelles-tu du bouquin que je t'ai prêté à la place du guide ?"
                },
                {
                    "N": "Amber",
                    "T": "« Les premiers oiseaux étaient incapables de voler. Cette capacité leur a été offerte pour avoir eu le courage de traverser un ravin en sautant. »"
                },
                {
                    "N": "Amber",
                    "T": "Regardez-moi faire."
                },
                {
                    "N": "_0",
                    "T": "Courage ! Tu peux y arriver !"
                },
                {
                    "N": "Amber",
                    "T": "Oui ! Je vais montrer à ce voleur de quel bois je me chauffe !"
                },
                {
                    "N": "Rapace",
                    "T": "Arrête tes bêtises ! Tu n'y arriveras jamais, alors rentre sagement chez toi."
                },
                {
                    "N": "Amber",
                    "T": "Le Rapace pense que je vais échouer, mais..."
                },
                {
                    "N": "Amber",
                    "T": "Le vent me murmure que je vais réussir !"
                }
            ]
        ]
    },
    "48504": {
        "Desc": "Survolez le gouffre.",
        "Talk": []
    },
    "48505": {
        "Desc": "Poursuivez et attrapez le Rapace.",
        "Talk": []
    },
    "48506": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "C'est bon ! Je l'ai !"
                },
                {
                    "N": "Amber",
                    "T": "J'ai remarqué qu'il y avait un champ de vent en dessous après avoir sauté. C'est le seul ici, d'ailleurs."
                },
                {
                    "N": "Amber",
                    "T": "Heureusement que nous n'avons pas été dans la direction que le Rapace nous a indiquée. Nous ne serions plus là pour en parler."
                },
                {
                    "N": "Amber",
                    "T": "En gros, la seule chose qu'il pouvait faire pour nous échapper était de nous passer sur le corps."
                },
                {
                    "N": "_1005",
                    "T": "Aha ! Il espérait qu'on abandonne la poursuite en faisant le malin."
                },
                {
                    "N": "_1005",
                    "T": "Mais il en faut plus pour nous avoir !"
                },
                {
                    "N": "Amber",
                    "T": "#C'est grâce à {NICKNAME} ! Comme disait un homme très sage : « Lorsque vous avez éliminé l'impossible, ce qui reste, si improbable soit-il, est nécessairement la vérité. »"
                },
                {
                    "N": "Amber",
                    "T": "Au bout du compte, planer c'est 70 % de technique, 30 % d'instinct, mais surtout 90 % de courage !"
                },
                {
                    "N": "_1005",
                    "T": "Plutôt 99 % avec ce que tu viens de nous faire là."
                },
                {
                    "N": "Amber",
                    "T": "Ça m'a rappelé mon premier examen de planage. J'étais super nerveuse, mais j'ai quand même réussi haut la main."
                },
                {
                    "N": "Amber",
                    "T": "Cette poussée d'adrénaline m'avait manqué."
                },
                {
                    "N": "_1005",
                    "T": "Euh, mais tu nous as dit que t'avais réussi le test les doigts dans le nez ?"
                },
                {
                    "N": "Amber",
                    "T": "Ah, ça. Hum, disons que le planage à Mondstadt est vraiment trop réglementé."
                },
                {
                    "N": "Amber",
                    "T": "Mon permis a souvent été révoqué peu après son obtention... J'ai dû repasser l'examen une bonne quinzaine de fois."
                },
                {
                    "N": "Amber",
                    "T": "En tout cas, je ne rate jamais mon coup ! Je pense que mon petit guide m'est quand même utile."
                },
                {
                    "N": "_1005",
                    "T": "#... {NICKNAME}, allons demander un exemplaire du vrai « Guide de planage » à Jean plus tard."
                },
                {
                    "N": "_0",
                    "T": "Bonne idée."
                },
                {
                    "N": "_0",
                    "T": "J'ai de la peine pour Jean..."
                },
                {
                    "N": "Amber",
                    "T": "Je dois ramener le Rapace à Mondstadt, alors je vous laisse."
                },
                {
                    "N": "Amber",
                    "T": "Retrouve-moi à la cathédrale quand vous serez de retour pour que je te remette ton permis."
                }
            ]
        ]
    },
    "48507": {
        "Desc": "Allez à la cathédrale récupérer votre permis de planer.",
        "Talk": []
    },
    "48508": {
        "Desc": "Parlez à Amber.",
        "Talk": [
            [
                {
                    "N": "Amber",
                    "T": "Félicitations ! Voilà ton permis ! Tu peux planer légalement maintenant, youpi !"
                },
                {
                    "N": "Amber",
                    "T": "#Pas que ça m'étonne. Tu es naturellement {M#doué}{F#douée} !"
                },
                {
                    "N": "_0",
                    "T": "C'était facile !"
                },
                {
                    "N": "_0",
                    "T": "Ça m'a demandé beaucoup d'efforts..."
                },
                {
                    "N": "Amber",
                    "T": "Oh, et permets-moi de t'inscrire au prochain Championnat de planage qui aura lieu à Mondstadt !"
                },
                {
                    "N": "Amber",
                    "T": "Je plane si vite que personne ne peut me rattraper... C'est nul ! Je n'ai aucune compétition !"
                },
                {
                    "N": "_0",
                    "T": "D'accord, mais c'est moi qui vais gagner cette année !"
                },
                {
                    "N": "_0",
                    "T": "Tu n'auras aucune chance contre moi, Amber."
                },
                {
                    "N": "Amber",
                    "T": "Est-ce un défi ? Hihihi, tu ne sais pas encore ce qu'on te réserve..."
                },
                {
                    "N": "Amber",
                    "T": "En attendant ta raclée pendant le championnat, amuse-toi bien à planer dans le respect des règles."
                },
                {
                    "N": "Amber",
                    "T": "Obéis à la loi et ne va pas te faire révoquer ton permis !"
                },
                {
                    "N": "_1005",
                    "T": "C'est quand même culotté de sa part de te dire ça..."
                }
            ]
        ]
    },
    "48201": {
        "Desc": "Rendez-vous sur le lieu d'entraînement",
        "Talk": []
    },
    "48202": {
        "Desc": "Parlez à Amber.",
        "Talk": []
    },
    "48203": {
        "Desc": "Gliding Training at Windrise - Teleportation Ring",
        "Talk": []
    },
    "48209": {
        "Desc": "Éliminez tous les ennemis présents dans la zone.",
        "Talk": []
    },
    "48207": {
        "Desc": "Failure rollback. Being teleported out.",
        "Talk": []
    },
    "48204": {
        "Desc": "Échec. Parler à Amber",
        "Talk": []
    },
    "48208": {
        "Desc": "Quête terminée, téléportez-vous.",
        "Talk": []
    },
    "48205": {
        "Desc": "Dialogue de fin d'entraînement",
        "Talk": []
    }
}