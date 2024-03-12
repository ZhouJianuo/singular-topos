// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "Huixing",
            "ID": "2434",
            "Count": 32
        },
        {
            "Name": "Yinxing",
            "ID": "2439",
            "Count": 30
        },
        {
            "Name": "Xu Liushi",
            "ID": "2438",
            "Count": 27
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 19
        },
        {
            "Name": "Beidou",
            "ID": "506",
            "Count": 1
        }
    ],
    "Num": "Escapade : Beidou - Acte 1",
    "Title": "Quand le Crux brille de mille feux",
    "IT": "Beidou",
    "Tab": "",
    "Icon": "UI_ChapterIcon_Beidou",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 19050,
            "Name": "Une invitée spéciale",
            "Desc": "La Flotte du Crux est revenue sans encombre de son dernier voyage et organise une célébration, sauf qu'aujourd'hui, vous êtes l'invitée d'honneur...",
            "Track": [
                19051,
                19052,
                19053,
                19054
            ],
            "R": [],
            "RP": [],
            "Sub": [
                1905001,
                1905002,
                1905003,
                1905004
            ]
        },
        {
            "_id": 19051,
            "Name": "La vie en mer",
            "Desc": "Sur invitation de Beidou, vous participez à la formation du Bouclier du Crux. Cela vous donne une expérience de la vie en mer, loin de la terre ferme...",
            "Track": [
                19052
            ],
            "R": [],
            "RP": [],
            "Sub": [
                1905101,
                1905102,
                1905103,
                1905104,
                1905111,
                1905105,
                1905106,
                1905113,
                1905114,
                1905115,
                1905107,
                1905108,
                1905112,
                1905109,
                1905110
            ]
        },
        {
            "_id": 19052,
            "Name": "Sous la surface",
            "Desc": "Sur invitation de Beidou, vous participez à la formation de la Lance du Crux. Cela vous donne un aperçu de la face cachée d'une flotte...",
            "Track": [],
            "R": [],
            "RP": [],
            "Sub": [
                1905201,
                1905214,
                1905215,
                1905202,
                1905203,
                1905216,
                1905204,
                1905205,
                1905218,
                1905206,
                1905219,
                1905213,
                1905220,
                1905207,
                1905208,
                1905209,
                1905212,
                1905210,
                1905211,
                1905217
            ]
        },
        {
            "_id": 19053,
            "Name": "Chroniques de la chasse aux trésors dans les Plaines Guili",
            "Desc": "Suivant votre suggestion, Beidou et vous vous rendez dans les Plaines Guili à la recherche d'un trésor. Qu'est-ce qui vous attend là-bas ?",
            "Track": [],
            "R": [],
            "RP": [],
            "Sub": [
                1905301,
                1905302,
                1905303,
                1905304,
                1905305,
                1905310,
                1905306,
                1905307,
                1905308,
                1905309
            ]
        },
        {
            "_id": 19054,
            "Name": "Chroniques de la chasse aux trésors dans le Village de Qingce",
            "Desc": "Suivant votre suggestion, Beidou et vous vous rendez dans le Village de Qingce à la recherche d'un trésor. Qu'est-ce qui vous attend là-bas ?",
            "Track": [],
            "R": [],
            "RP": [],
            "Sub": [
                1905401,
                1905402,
                1905404,
                1905408,
                1905410,
                1905405,
                1905406,
                1905407,
                1905409
            ]
        }
    ]
}

var _sq = {
    "1905001": {
        "Desc": "Rendez-vous à l'Alcor.",
        "Talk": []
    },
    "1905002": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905003": {
        "Desc": "Essayez l'entraînement de marin.",
        "Step": "Beidou vous invite à découvrir le nouvel entraînement des membres d'équipage de la Flotte du Crux...",
        "Talk": []
    },
    "1905004": {
        "Desc": "Allez dans un endroit calme pour discuter des détails avec Beidou.",
        "Talk": []
    },
    "1905101": {
        "Desc": "Demandez conseil à Yinxing.",
        "Step": "Beidou vous invite à découvrir la formation de survie du Bouclier du Crux. Renseignez-vous sur les maladies qu'on rencontre en haute mer auprès de Yinxing, le médecin de bord.",
        "Talk": [
            [
                {
                    "N": "Yinxing",
                    "T": "#Bonjour {M#voyageur}{F#voyageuse}. Je suis Yinxing, le médecin de bord du Crux."
                },
                {
                    "N": "Yinxing",
                    "T": "Chaque fois qu'un marin a un problème de santé, il vient me voir. Je m'occupe de tout, du mal de mer aux rhumes, en passant par les amputations et tout le reste."
                },
                {
                    "N": "_0",
                    "T": "J'aimerais en savoir plus sur les blessures et maladies en mer."
                },
                {
                    "N": "Yinxing",
                    "T": "#Oh, je suppose que tu viens de la part de la capitaine, n'est-ce pas{NON_BREAK_SPACE}? Bon alors, commençons."
                },
                {
                    "N": "Yinxing",
                    "T": "#Tout d'abord, laisse-moi te poser une question. Selon toi, quel est le plus grand danger auquel tous les nouveaux membres d'équipage sont confrontés{NON_BREAK_SPACE}?"
                },
                {
                    "N": "_0",
                    "T": "Le mal de mer ?"
                },
                {
                    "N": "_0",
                    "T": "Le rhume ?"
                },
                {
                    "N": "_0",
                    "T": "L'amputation ?"
                },
                {
                    "N": "Yinxing",
                    "T": "C'est certainement un problème qu'on peut rencontrer en mer, mais ce n'est pas le plus grand danger. La chose la plus dangereuse pour un nouveau venu est de sous-estimer les dangers de la vie en mer."
                },
                {
                    "N": "Yinxing",
                    "T": "J'ai vu passer beaucoup de nouveaux membres d'équipage qui se croyaient suffisamment jeunes et en bonne santé pour pouvoir négliger la sécurité. Ils pensaient que puisqu'ils n'avaient aucun problème sur la terre ferme, ils s'en sortiraient en mer."
                },
                {
                    "N": "Yinxing",
                    "T": "Ce sont eux qui finissent toujours à l'infirmerie. Tout le monde doit savoir qu'être marin, surtout sur un long voyage, est un travail brutal dans un environnement impitoyable."
                },
                {
                    "N": "Yinxing",
                    "T": "On est confrontés à la malnutrition quand on est à court de provisions, et à toutes sortes de blessures et de maladies apportées par le climat océanique..."
                },
                {
                    "N": "Yinxing",
                    "T": "... sans parler des problèmes psychologiques qui peuvent survenir en raison de l'isolement et du manque de divertissement."
                },
                {
                    "N": "Yinxing",
                    "T": "Pour aggraver les choses, le manque de médicaments et d'options de traitement fait que le moindre problème de santé mineur peut devenir grave, voire mortel..."
                },
                {
                    "N": "_0",
                    "T": "D'où les amputations...?"
                },
                {
                    "N": "Yinxing",
                    "T": "Haha, tu croyais que je plaisantais ? Ce n'est pas surprenant. La plupart des nouveaux venus pensent la même chose."
                },
                {
                    "N": "Yinxing",
                    "T": "Mais j'espère que tu comprends maintenant qu'avec un peu de précaution, beaucoup de ces choses peuvent être évitées..."
                },
                {
                    "N": "Yinxing",
                    "T": "Bon, je pense que tu as déjà de quoi réfléchir."
                },
                {
                    "N": "Yinxing",
                    "T": "Est-ce qu'il y a autre chose que tu voudrais savoir ?"
                },
                {
                    "N": "_0",
                    "T": "Que pense Beidou de tout ça ?"
                },
                {
                    "N": "Yinxing",
                    "T": "Capitaine Beidou ? ... De toutes les personnes que j'ai rencontrées, c'est probablement celle qui accorde le plus d'importance à la vie et à la sécurité des gens."
                },
                {
                    "N": "Yinxing",
                    "T": "Bien que je ne sois qu'un médecin, Beidou m'a donné pleine autorité de débarquer tout nouvel arrivant que je ne considère pas comme apte au service jusqu'à ce qu'il soit prêt à revenir avec la bonne attitude."
                },
                {
                    "N": "Yinxing",
                    "T": "Chaque fois que nous faisons le plein avant un voyage, les médicaments sont la priorité absolue. Je suis même autorisée à choisir les fournisseurs quel que soit le prix. On a un budget confortable pour les frais médicaux."
                },
                {
                    "N": "Yinxing",
                    "T": "Tu sais comment notre comptable Vif-Argent appelle ça ?"
                },
                {
                    "N": "Yinxing",
                    "T": "« Un risque financier considérable », haha."
                },
                {
                    "N": "Yinxing",
                    "T": "Mais Beidou connaît l'importance d'avoir un équipage en bonne santé. C'est pourquoi elle m'a conféré cette autorité."
                },
                {
                    "N": "Yinxing",
                    "T": "Elle m'accorde toute sa confiance et pense que je peux résoudre ces problèmes... Bien sûr, je lui ai montré qu'elle avait raison."
                },
                {
                    "N": "Yinxing",
                    "T": "Donc pour répondre à ta question, voilà ce qu'elle en pense."
                },
                {
                    "N": "_0",
                    "T": "Que deviennent les marins qui se font amputer ?"
                },
                {
                    "N": "Yinxing",
                    "T": "#Hmm ? Tu te soucies d'eux ? Pas étonnant que la capitaine Beidou pense que tu es {M#différent}{F#différente}. Tu as plus qu'une grande force physique."
                },
                {
                    "N": "Yinxing",
                    "T": "Si tu arrives à convaincre Vif-Argent de te laisser jeter un œil au livre des comptes, tu verras qu'il y a un budget fixe qui s'appelle « paiements de convalescence et assistance en cas d'incapacité pour les membres d'équipage blessés »."
                },
                {
                    "N": "Yinxing",
                    "T": "Peu importe l'état des finances de la flotte, ceux qui ont combattu à nos côtés recevront leur compensation chaque année."
                },
                {
                    "N": "Yinxing",
                    "T": "Certains de ceux qui sont retournés sur la terre ferme ont créé de petites entreprises, tandis que d'autres ont choisi de voyager à travers le monde."
                },
                {
                    "N": "Yinxing",
                    "T": "L'argent est destiné à leur permettre de vivre leur vie le plus librement possible. Je suis sûre qu'être sur terre rend leur vie beaucoup plus facile aussi..."
                },
                {
                    "N": "Yinxing",
                    "T": "#Pourtant, on ne peut pas prétendre que cela résolve tout. On appelle ça des blessures à vie pour une bonne raison, tu sais{NON_BREAK_SPACE}?"
                },
                {
                    "N": "Yinxing",
                    "T": "Mais au moins, il est bon de savoir que tant que la capitaine Beidou sera en charge du Crux, personne ne sera oublié."
                },
                {
                    "N": "_0",
                    "T": "Merci. J'ai beaucoup appris."
                },
                {
                    "N": "Yinxing",
                    "T": "C'était un plaisir. Bon, arrêtons-nous là, alors. Prends bien soin de ta santé."
                }
            ]
        ]
    },
    "1905102": {
        "Desc": "Demandez conseil à Huixing.",
        "Step": "Beidou vous invite à découvrir la formation de survie du Bouclier du Crux. Renseignez-vous sur la cartographie marine auprès de Huixing, la navigatrice.",
        "Talk": [
            [
                {
                    "N": "Huixing",
                    "T": "#Désolée pour tout à l'heure, {M#voyageur}{F#voyageuse}..."
                },
                {
                    "N": "Huixing",
                    "T": "On était tellement excités à l'idée que tu rejoignes la flotte qu'on ne s'est pas rendu compte qu'on en faisait un peu trop... Heureusement que la capitaine était là."
                },
                {
                    "N": "_0",
                    "T": "Ce n'est rien. J'espérais en apprendre plus sur la cartographie."
                },
                {
                    "N": "Huixing",
                    "T": "Oh ! Eh bien, dans ce cas, tu t'adresses à la bonne personne ! Je peux affirmer sans me vanter que tu as devant toi la navigatrice la plus talentueuse de tout le Port de Liyue."
                },
                {
                    "N": "Huixing",
                    "T": "Je vais commencer par te présenter les rudiments de la lecture de carte marine. Si tu as des questions, n'hésite pas à m'interrompre."
                },
                {
                    "N": "Huixing",
                    "T": "Commençons par ce qu'il faut regarder en premier quand on a un ensemble de cartes compliqué."
                },
                {
                    "N": "Huixing",
                    "T": "Tout d'abord, il faut toujours examiner les rivages, les îles ou les récifs indiqués, les profondeurs d'eau, les conditions hydrologiques et les autres dangers."
                },
                {
                    "N": "Huixing",
                    "T": "#Avec ces informations à l'esprit, tu peux répondre à la question de base «{NON_BREAK_SPACE}Puis-je trouver une route sûre dans cette zone{NON_BREAK_SPACE}?{NON_BREAK_SPACE}»."
                },
                {
                    "N": "Huixing",
                    "T": "Visuellement, les cartes marines sont un peu uniques. Contrairement aux cartes terrestres, la plupart des cartes n'ont pas d'échelle fixe, ce qui signifie qu'il peut être difficile de déterminer avec précision la distance exacte entre deux points."
                },
                {
                    "N": "Huixing",
                    "T": "Les cartes marines les plus avancées sont livrées avec une carte supplémentaire, sur laquelle sont marquées différentes lignes de couleur pour indiquer les distances."
                },
                {
                    "N": "Huixing",
                    "T": "#Il faut mentionner que sous mon impulsion, le Crux s'est justement mis à utiliser ce type de cartes avancées{NON_BREAK_SPACE}!"
                },
                {
                    "N": "Huixing",
                    "T": "Certains cartographes marquent d'autres points d'intérêt sur leurs cartes, généralement avec leurs propres symboles spéciaux. S'ils ne laissent aucune note d'accompagnement, ils peuvent être très difficiles à interpréter."
                },
                {
                    "N": "_0",
                    "T": "Tu parles de cartes laissées par le précédent navigateur ?"
                },
                {
                    "N": "Huixing",
                    "T": "Haha, pas seulement. On a des vieilles cartes usées qui viennent d'un peu partout."
                },
                {
                    "N": "Huixing",
                    "T": "Pour être honnête, ça peut être difficile, même pour moi. Certaines de ces cartes sont vraiment anciennes et ont des symboles que je n'ai jamais vus auparavant..."
                },
                {
                    "N": "Huixing",
                    "T": "Mais si on ne les déchiffre pas, on passera certainement à côté de nombreux secrets de la mer."
                },
                {
                    "N": "Huixing",
                    "T": "Heureusement que la capitaine est là. Elle a réussi à trouver des livres anciens sur l'étude des symboles que j'ai pu utiliser pour approfondir l'étude des cartes."
                },
                {
                    "N": "Huixing",
                    "T": "Je ne pense pas que quelqu'un d'autre que notre capitaine pourrait réussir à obtenir ce genre d'objet. Les vieilles cartes et les livres anciens sur l'étude des symboles ne sont pas vraiment ce qu'on trouve sur les marchés..."
                },
                {
                    "N": "Huixing",
                    "T": "Oups, je m'égare ! Héhé. Voilà tout pour ce qui est des bases de la lecture des cartes marines."
                },
                {
                    "N": "Huixing",
                    "T": "#Y a-t-il autre chose que tu voudrais savoir, {M#voyageur}{F#voyageuse}{NON_BREAK_SPACE}?"
                },
                {
                    "N": "_0",
                    "T": "Tu as déjà dessiné des cartes marines ?"
                },
                {
                    "N": "Huixing",
                    "T": "Dessiner des cartes marines ? C'est le niveau de difficulté au-dessus. Pour être honnête, mes compétences dans ce domaine sont assez limitées."
                },
                {
                    "N": "Huixing",
                    "T": "Les cartes que nous utilisons ne sont que des versions révisées de celles laissées par le navigateur précédent."
                },
                {
                    "N": "Huixing",
                    "T": "Donc mon expérience de la cartographie s'est principalement limitée à la mise à jour de nos cartes pour refléter les changements dans la mer."
                },
                {
                    "N": "Huixing",
                    "T": "Je pense que tu peux demander à la capitaine Beidou si tu veux en savoir plus sur la cartographie."
                },
                {
                    "N": "Huixing",
                    "T": "Une fois, la flotte a navigué dans une zone inexplorée par erreur. Il ne nous a pas fallu longtemps pour faire demi-tour et revenir par peur des dangers potentiels."
                },
                {
                    "N": "Huixing",
                    "T": "Mais la capitaine Beidou a quand même réussi à dresser une carte simple de la zone dans laquelle on avait navigué au cas où on explorerait cette zone à nouveau."
                },
                {
                    "N": "Huixing",
                    "T": "Incroyable, n'est-ce pas ? J'ai été étonnée de voir que la capitaine pouvait même faire de la cartographie."
                },
                {
                    "N": "_0",
                    "T": "Alors pourquoi a-t-elle besoin d'une navigatrice ?"
                },
                {
                    "N": "Huixing",
                    "T": "Parce que j'ai un talent pour ça, et qu'elle ne veut pas qu'il soit gâché. Héhé. C'est comme ça qu'elle traite tout l'équipage."
                },
                {
                    "N": "Huixing",
                    "T": "Avant, je me posais la même question que toi. Après tout, la navigation est très souvent effectuée par le capitaine du bateau lui-même. Je ne comprenais pas sa décision, alors je suis allée lui demander pourquoi."
                },
                {
                    "N": "Huixing",
                    "T": "Elle a juste ri et m'a dit de faire preuve de sagesse, en disant que même le Souverain de la Roche ne se bat jamais seul."
                },
                {
                    "N": "Huixing",
                    "T": "Elle veut que tout le monde à bord maîtrise son rôle, afin que le Crux ne dépende pas que d'elle."
                },
                {
                    "N": "Huixing",
                    "T": "Ainsi, si un jour, elle ne fait plus partie de la flotte, on pourra continuer à naviguer sans elle."
                },
                {
                    "N": "Huixing",
                    "T": "La capitaine Beidou peut sembler distante et même parfois négligente, mais la vérité c'est qu'elle est très attentionnée envers tout le monde à bord."
                },
                {
                    "N": "_0",
                    "T": "Je n'ai plus d'autres questions, merci à toi."
                },
                {
                    "N": "Huixing",
                    "T": "#Tout le plaisir est pour moi. Les amis de la capitaine Beidou sont mes amis{NON_BREAK_SPACE}!"
                }
            ]
        ]
    },
    "1905103": {
        "Desc": "Demandez conseil à Xu Liushi.",
        "Step": "Beidou vous invite à découvrir la formation de survie du Bouclier du Crux. Renseignez-vous sur la météorologie auprès de Xu Liushi, la vigie.",
        "Talk": [
            [
                {
                    "N": "Xu Liushi",
                    "T": "#Bonjour {M#voyageur}{F#voyageuse}. Je suppose que tu viens pour en apprendre plus sur la météorologie marine{NON_BREAK_SPACE}?"
                },
                {
                    "N": "_0",
                    "T": "Hein ? Comment tu le sais ?"
                },
                {
                    "N": "Xu Liushi",
                    "T": "Haha, dans mon travail, il faut être observateur."
                },
                {
                    "N": "Xu Liushi",
                    "T": "#J'ai vu la capitaine t'emmener à la formation des nouveaux, puis tu es {M#allé}{F#allée} voir Yinxing et Huixing."
                },
                {
                    "N": "Xu Liushi",
                    "T": "J'en ai donc déduit qu'elle souhaitait probablement que tu découvres la vie d'un membre d'équipage."
                },
                {
                    "N": "_0",
                    "T": "Tu es doué."
                },
                {
                    "N": "_0",
                    "T": "Beidou sait vraiment choisir ses matelots."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Héhé ! Bon, commençons. Tout d'abord, je vais te présenter les bases de la météorologie."
                },
                {
                    "N": "Xu Liushi",
                    "T": "La météorologie marine signifie essentiellement garder un œil sur la météo ainsi que sur d'autres phénomènes océaniques, donc des choses comme le brouillard marin, les marées de tempête, les trombes marines..."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Tous ces phénomènes sont des menaces potentielles à la sécurité de la navigation. Heureusement, quel que soit ce qui nous attend, il y a toujours des signes avant-coureurs."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Prenons les trombes marines par exemple. Elles sont causées par des vents tournants à grande vitesse à la surface de l'océan. Elles peuvent engloutir de gros navires et causer d'importants dégâts."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Mais quand tu sais que les trombes marines ne peuvent se former que dans un environnement à haute température, à forte humidité et avec de gros nuages, alors tu peux t'y préparer."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Tu seras encore plus sur tes gardes si tu sais également que la présence de vents contraires soufflant à des vitesses très différentes est un précurseur direct à la formation de trombes marines."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Et plus important encore, si tu repères un petit tourbillon blanc émergeant des nuages noirs, tu dois avertir immédiatement l'équipage de changer de cap."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Voilà les signes annonciateurs d'une trombe marine. Je suis fier de dire que je n'en ai jamais laissé passer une seule pendant toutes mes années de surveillance."
                },
                {
                    "N": "_0",
                    "T": "Tu dois avoir une bonne vue."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Eh bien, j'arrive à déchiffrer la mer, mais je ne suis pas aussi bon que la capitaine pour ce qui est de déchiffrer les gens."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Tu connais le petit village de pêcheurs à côté de l'Auberge Wangshu ? J'ai entendu dire que quand la capitaine était enfant, elle y travaillait à la pêche avec les adultes."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Plus tard, elle est allée gagner sa vie du mieux qu'elle le pouvait dans le port. Quand tu te dis qu'une si jeune enfant est arrivée à s'en sortir dans un tel environnement, tu comprends que la capitaine n'est pas n'importe qui."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Si elle n'avait pas été là, je n'aurais jamais rêvé d'un tel travail. Elle m'a donné confiance et m'a dit que je pouvais le faire."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Tu ne le sais peut-être pas, mais je suis surtout connu en dehors de la Flotte du Crux pour une triste histoire d'alcool aux Trois Bolées du Port..."
                },
                {
                    "N": "Xu Liushi",
                    "T": "#Qui aurait pensé que le jeune marin tombé ivre dans la mer et devenu la risée de ses anciens coéquipiers deviendrait un jour le guetteur du Crux{NON_BREAK_SPACE}? C'est pourtant l'incroyable vérité, haha."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Cela prouve qu'avoir les compétences ne suffit pas. Il faut aussi tomber sur la bonne personne, comme la capitaine."
                },
                {
                    "N": "_0",
                    "T": "Tu as l'air d'avoir beaucoup d'expérience."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Je dois avouer que j'ai appris presque tout ce que je sais de la capitaine."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Pour toute la météorologie dont je viens de te parler... c'est elle la vraie experte."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Tu connais le petit village de pêcheurs à côté de l'Auberge Wangshu ? J'ai entendu dire que quand la capitaine était enfant, elle y travaillait à la pêche avec les adultes."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Plus tard, elle est allée gagner sa vie du mieux qu'elle le pouvait dans le port. Quand tu te dis qu'elle a grandi dans un tel environnement, pas étonnant qu'elle sache tout sur la mer..."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Quand je suis arrivé à bord, je vivais chaque jour dans le doute, me demandant si mon ancienne carrière de marin n'avait pas été qu'un gâchis."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Mais au fur et à mesure que j'apprenais de nouvelles choses et que je gagnais en expérience, j'ai finalement réalisé ce qui rendait le Crux si génial."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Toutes les flottes n'ont pas la « Reine des mers » comme capitaine. Je me sens chanceux d'être ici."
                },
                {
                    "N": "_0",
                    "T": "Merci pour ton temps. Je pense en avoir appris assez."
                },
                {
                    "N": "Xu Liushi",
                    "T": "Reviens me voir si tu veux en savoir plus."
                }
            ]
        ]
    },
    "1905104": {
        "Desc": "Faites votre rapport à Beidou.",
        "Talk": []
    },
    "1905111": {
        "Desc": "",
        "Talk": []
    },
    "1905105": {
        "Desc": "Allez au cours de photographie.",
        "Step": "Beidou vous invite à découvrir la formation de divertissement du Bouclier du Crux.",
        "Talk": []
    },
    "1905106": {
        "Desc": "Rendez-vous dans le village de pêcheurs à côté de l'Auberge Wangshu.",
        "Step": "Profitant de l'occasion de prendre des photos, Beidou et vous vous dirigez vers le petit village de pêcheurs où elle a vécu.",
        "Talk": []
    },
    "1905113": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905114": {
        "Desc": "Promenez-vous avec Beidou dans le village de pêcheurs.",
        "Talk": []
    },
    "1905115": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905107": {
        "Desc": "Marchez avec Beidou vers le village de pêcheurs.",
        "Talk": []
    },
    "1905108": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905112": {
        "Desc": "",
        "Talk": []
    },
    "1905109": {
        "Desc": "Prenez Beidou en photo.",
        "Step": "Cet endroit est depuis longtemps devenu désert, mais la maison d'enfance de Beidou est toujours un bel endroit pour prendre des photos. Prenez-en une d'elle...",
        "Talk": []
    },
    "1905110": {
        "Desc": "Discutez avec Beidou.",
        "Step": "Vous utilisez votre Daguerréotype pour prendre une photo de Beidou alors qu'elle explore cet endroit familier. Est-ce qu'elle appréciera ?",
        "Talk": []
    },
    "1905201": {
        "Desc": "Dirigez-vous vers la petite chaloupe que Beidou a préparée.",
        "Step": "Beidou vous invite à découvrir la formation à la conduite des navires dispensée par la Lance du Crux...",
        "Talk": []
    },
    "1905214": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905215": {
        "Desc": "Rendez-vous au bateau d'escarmouche.",
        "Talk": []
    },
    "1905202": {
        "Desc": "Terminez le défi de navigation.",
        "Talk": []
    },
    "1905203": {
        "Desc": "",
        "Talk": []
    },
    "1905216": {
        "Desc": "",
        "Talk": []
    },
    "1905204": {
        "Desc": "Discutez avec Beidou.",
        "Step": "Vous avez terminé le défi de navigation que Beidou avait préparé pour vous. Allez discuter avec elle...",
        "Talk": []
    },
    "1905205": {
        "Desc": "Retrouvez Beidou au Port de Liyue.",
        "Step": "Maintenant que vous avez terminé le défi de navigation, Beidou aimerait que vous jetiez un œil au véritable labeur de la Flotte du Crux...",
        "Talk": []
    },
    "1905218": {
        "Desc": "Suivez Beidou pour rencontrer son partenaire d'affaires.",
        "Talk": []
    },
    "1905206": {
        "Desc": "Parlez à Nei.",
        "Talk": []
    },
    "1905219": {
        "Desc": "Suivez Beidou jusqu'à la Poissonnerie amatrice de Wai.",
        "Step": "Vous parlez à l'employé de la Poissonnerie professionnelle de Nei, mais il ne semble pas être un partenaire commercial approprié. En fait, il vous dit qu'en tant qu'amatrices, vous devriez plutôt aller à la Poissonnerie amatrice de Wai...",
        "Talk": []
    },
    "1905213": {
        "Desc": "Parlez à Wai.",
        "Step": "Beidou vous emmène à la Poissonnerie amatrice de Wai. Trouvera-t-elle ce dont elle a besoin ici ?",
        "Talk": []
    },
    "1905220": {
        "Desc": "Suivez Beidou pour rencontrer le propriétaire de l'entrepôt.",
        "Step": "L'employé de la Poissonnerie amatrice de Wai affirme posséder ce dont vous avez besoin, mais il précise que l'affaire ne peut être conclue que par le propriétaire de l'entrepôt...",
        "Talk": []
    },
    "1905207": {
        "Desc": "Parlez à M. Iron Abacus.",
        "Talk": []
    },
    "1905208": {
        "Desc": "Rendez-vous dans la Forêt de pierre de Guyun.",
        "Step": "Beidou vous a expliqué l'affaire de tout à l'heure. Prochain arrêt : la Forêt de pierre de Guyun, semble-t-il... Mais une opération aussi secrète, ça ne va pas être quelque chose de mal... N'est-ce pas ?",
        "Talk": []
    },
    "1905209": {
        "Desc": "Attendez que la nuit tombe (00 h 00 - 05 h 00).",
        "Talk": [
            [
                {
                    "N": "Beidou",
                    "T": "#Tu peux commencer dès que tu es {M#prêt}{F#prête}. Ne me fais pas attendre trop longtemps. Je veux voir de quoi tu es capable."
                }
            ]
        ]
    },
    "1905212": {
        "Desc": "Parlez à M. Iron Abacus.",
        "Step": "Le responsable de l'entrepôt est arrivé à la Forêt de pierre de Guyun. Il est temps de conclure cette affaire...",
        "Talk": []
    },
    "1905210": {
        "Desc": "Promenez-vous sur la plage avec Beidou.",
        "Step": "Il s'avère que l'affaire secrète ne concernait qu'une cargaison parfaitement normale... Vous étiez complètement dans le noir...",
        "Talk": []
    },
    "1905211": {
        "Desc": "Discutez avec Beidou.",
        "Step": "Beidou vous explique toute la situation, mais vous avez encore quelques questions...",
        "Talk": []
    },
    "1905217": {
        "Desc": "",
        "Talk": []
    },
    "1905301": {
        "Desc": "Rendez-vous aux Plaines Guili.",
        "Step": "La carte au trésor que Beidou a obtenue est difficile à lire, mais vous donnez quand même votre avis. Maintenant, direction les Plaines Guili pour aider Beidou à trouver le trésor...",
        "Talk": []
    },
    "1905302": {
        "Desc": "Arrêtez les Pilleurs de trésors qui sont en train de creuser.",
        "Step": "Il y a des Pilleurs de trésors près de l'emplacement indiqué sur la carte. Pas question de les laisse s'en tirer comme ça{NON_BREAK_SPACE}!",
        "Talk": []
    },
    "1905303": {
        "Desc": "Inspectez les endroits suspects à proximité.",
        "Step": "Ce que les Pilleurs de trésors déterraient n'a rien à voir avec ce que cherche Beidou. Il est temps de fouiller un peu dans le coin...",
        "Talk": []
    },
    "1905304": {
        "Desc": "Inspectez les endroits suspects à proximité.",
        "Talk": []
    },
    "1905305": {
        "Desc": "Parlez à Beidou.",
        "Step": "Vous avez fouillé tous les endroits suspects de la zone en vain. Est-ce que quelque chose ne va pas avec cette carte ?",
        "Talk": []
    },
    "1905310": {
        "Desc": "Rendez-vous aux « ruines perdues ».",
        "Step": "Le Pilleur de trésors qui a tourné une nouvelle page vous donne de nouveaux indices. Cela conduira-t-il à ce que recherche Beidou ?",
        "Talk": []
    },
    "1905306": {
        "Desc": "Suivez les indices du poème pour trouver le trésor.",
        "Step": "Vous avez analysé les indices dans le poème... « Mon regard éméché se fixe sur les ruines perdues » peut signifier contempler une ruine de loin... Tandis que les termes importants de « Adossé à un arbre aux feuilles rougeoyantes et à l'ombre tordue » sont « arbre aux feuilles rougeoyantes » et « ombre »... « Au crépuscule, le soleil tombe dans la mer » pourrait d'un autre côté faire référence au temps...",
        "Talk": []
    },
    "1905307": {
        "Desc": "Discutez avec Beidou.",
        "Step": "Vos efforts sont bien récompensés : vous avez trouvé un chèque de la Banque du Nord sous un arbre. Est-ce ce que cherchait Beidou ?",
        "Talk": []
    },
    "1905308": {
        "Desc": "Rendez-vous à la maison en bois au bord de la mer.",
        "Step": "Beidou vous explique l'origine de ce chèque. Il est temps de l'envoyer où il appartient...",
        "Talk": []
    },
    "1905309": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905401": {
        "Desc": "Rendez-vous au Village de Qingce.",
        "Step": "La carte au trésor que Beidou a obtenue est difficile à lire, mais vous donnez quand même votre avis. Maintenant, direction le Village de Qingce pour aider Beidou à trouver le trésor...",
        "Talk": []
    },
    "1905402": {
        "Desc": "Allez voir Ren pour une petite conversation.",
        "Step": "Apprenant que Beidou est venue au village, oncle Xing lui demande d'aider à la médiation d'un différend. Il semble que tout le monde ici la respecte beaucoup. Allez voir ce qui se passe...",
        "Talk": []
    },
    "1905404": {
        "Desc": "Allez voir Changping et Defu.",
        "Step": "Ren vous informe que Changping et Defu se disputent actuellement au sujet d'un trésor. Il est temps d'aller voir ce qui se passe...",
        "Talk": []
    },
    "1905408": {
        "Desc": "Retournez au Village de Qingce.",
        "Talk": []
    },
    "1905410": {
        "Desc": "Attendez que la nuit tombe (21 h 00 - 24 h 00).",
        "Talk": []
    },
    "1905405": {
        "Desc": "Participez au banquet du village.",
        "Talk": []
    },
    "1905406": {
        "Desc": "Rendez-vous au moulin à eau où se trouve le coffre.",
        "Step": "Après trois tournées de boissons, Beidou vous demande de l'accompagner prendre l'air. Vous allez peut-être découvrir ce qu'il y a dans ce coffre...",
        "Talk": []
    },
    "1905407": {
        "Desc": "Discutez avec Beidou.",
        "Talk": []
    },
    "1905409": {
        "Desc": "",
        "Talk": []
    }
}