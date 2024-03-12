// Auto Generated

var _mq = {
    "LineCount": [
        {
            "Name": "_1005",
            "ID": "1005",
            "Count": 57
        },
        {
            "Name": "Kaveh",
            "ID": "1064",
            "Count": 56
        },
        {
            "Name": "Alhacén",
            "ID": "1053",
            "Count": 36
        },
        {
            "Name": "Sachin",
            "ID": "13151",
            "Count": 25
        },
        {
            "Name": "Nahida",
            "ID": "1056",
            "Count": 23
        },
        {
            "Name": "Karina",
            "ID": "13153",
            "Count": 20
        },
        {
            "Name": "Yiwani",
            "ID": "13155",
            "Count": 19
        },
        {
            "Name": "Cyno",
            "ID": "1058",
            "Count": 18
        },
        {
            "Name": "Aarav",
            "ID": "13091",
            "Count": 13
        },
        {
            "Name": "_0",
            "ID": 0,
            "Count": 12
        },
        {
            "Name": "Tignari",
            "ID": "1050",
            "Count": 12
        },
        {
            "Name": "Faruzán",
            "ID": "1067",
            "Count": 10
        },
        {
            "Name": "???",
            "ID": "1065",
            "Count": 8
        },
        {
            "Name": "Nilou",
            "ID": "1054",
            "Count": 6
        },
        {
            "Name": "Dehya",
            "ID": "1052",
            "Count": 6
        },
        {
            "Name": "Sidra",
            "ID": "13228",
            "Count": 6
        },
        {
            "Name": "Marwa",
            "ID": "13226",
            "Count": 5
        },
        {
            "Name": "Fawara",
            "ID": "13227",
            "Count": 4
        },
        {
            "Name": "Collei",
            "ID": "1051",
            "Count": 4
        },
        {
            "Name": "Mazaar",
            "ID": "13209",
            "Count": 3
        },
        {
            "Name": "Laila",
            "ID": "1063",
            "Count": 3
        },
        {
            "Name": "Candace",
            "ID": "1059",
            "Count": 2
        },
        {
            "Name": "???",
            "ID": "",
            "Count": 2
        },
        {
            "Name": "Qamar",
            "ID": "13229",
            "Count": 2
        },
        {
            "Name": "Levi",
            "ID": "13208",
            "Count": 1
        },
        {
            "Name": "Alae",
            "ID": "13199",
            "Count": 1
        },
        {
            "Name": "Aissa",
            "ID": "13200",
            "Count": 1
        },
        {
            "Name": "Bahir",
            "ID": "13201",
            "Count": 1
        }
    ],
    "Num": "La gran ceremonia de erudición (III)",
    "Title": "Reuniones y partidas",
    "IT": "",
    "Tab": "",
    "Icon": "UI_ChapterIcon_AkaFes",
    "Intro": "",
    "MainQuests": [
        {
            "_id": 40103,
            "Name": "Lucha por la corona",
            "Desc": "El tiempo pasa y no saben si Aarav habrá sido capaz de completar su investigación sobre el caso de secuestro y descubrir la verdad...",
            "Track": [
                40104
            ],
            "R": [
                140103
            ],
            "RP": [],
            "Sub": [
                4010301,
                4010302,
                4010303,
                4010304,
                4010305,
                4010307,
                4010308,
                4010309,
                4010310,
                4010313,
                4010306
            ]
        },
        {
            "_id": 40104,
            "Name": "Erudición constante y sonante",
            "Desc": "Tras romper la corona de la sabiduría, parece que el asunto se acerca a su conclusión. Ve a la sede de la competición y participa en la ceremonia de entrega del premio a Kaveh.",
            "Track": [],
            "R": [
                140104
            ],
            "RP": [],
            "Sub": [
                4010407,
                4010401,
                4010402,
                4010404,
                4010403,
                4010410,
                4010408,
                4010409,
                4010405,
                4010406
            ]
        }
    ]
}

var _sq = {
    "4010301": {
        "Desc": "Espera hasta el día siguiente (07{NON_BREAK_SPACE}h)",
        "Talk": []
    },
    "4010302": {
        "Desc": "Pregúntale a Aarav sobre la situación actual",
        "Talk": [
            [
                {
                    "N": "Aarav",
                    "T": "#Ah, aquí están. Lo siento, justo pensaba enviar a alguien a buscarl{F#a}{M#o}s ahora mismo. Acabo de terminar de interrogar a los sospechosos."
                },
                {
                    "N": "_1005",
                    "T": "¿Y has descubierto algo?"
                },
                {
                    "N": "Aarav",
                    "T": "Bueno, digamos que he descubierto una gran cantidad de detalles insólitos."
                },
                {
                    "N": "Aarav",
                    "T": "Fue realmente fácil capturar a los mercenarios. Simplemente disfrazamos a alguien de Sachin y ellos picaron el anzuelo."
                },
                {
                    "N": "Aarav",
                    "T": "Pero hasta ahí llega la parte fácil. Durante el interrogatorio, hemos descubierto que fue el propio hijo de Sachin quien los contrató."
                },
                {
                    "N": "_1005",
                    "T": "¿El hijo contrató mercenarios para que secuestraran a su padre? ¿Por qué haría algo así?"
                },
                {
                    "N": "Aarav",
                    "T": "A saber... En cualquier caso, solo hemos atrapado a un puñado. La mayoría de ellos sigue todavía merodeando por las afueras de la ciudad."
                },
                {
                    "N": "Aarav",
                    "T": "Estamos coordinando a nuestras fuerzas para capturarlos. ¿Les gustaría acompañarnos?"
                },
                {
                    "N": "_1005",
                    "T": "#¿Por qué no? Nosotr{F#a}{M#o}s también queremos llegar al fondo del asunto."
                }
            ]
        ]
    },
    "4010303": {
        "Desc": "Dirígete al campamento de los secuestradores",
        "Step": "Aarav ha capturado a algunos mercenarios infiltrados en la ciudad y obtenido información de valor. Pero lo más increíble es que la persona que está tras el secuestro de Sachin es su propio hijo. Ante tales noticias, deciden ir al campamento a las afueras de la ciudad para descubrir más detalles al respecto.",
        "Talk": []
    },
    "4010304": {
        "Desc": "Investiga lo ocurrido durante el caso de secuestro",
        "Step": "Al llegar al campamento descubren que alguien le ha dado una buena paliza a los mercenarios. ¿Qué habrá pasado?",
        "Talk": [
            [
                {
                    "N": "Levi",
                    "T": "Jefe, ha llegado alguien más."
                },
                {
                    "N": "Mazaar",
                    "T": "Mira, nosotros solo cumplíamos con nuestro trabajo. Me parece que se equivocan de culpable. ¿Quieren al verdadero culpable? Pues aquí lo tienen. Este fue el tipo que nos contrató para secuestrar a Sachin."
                },
                {
                    "N": "Yiwani",
                    "T": "..."
                },
                {
                    "N": "_1005",
                    "T": "¿Qué ha pasado aquí? ¿Quién les ha dado semejante paliza?"
                },
                {
                    "N": "Mazaar",
                    "T": "¿Eh? ¿Es que no son sus amigos?"
                },
                {
                    "N": "_1005",
                    "T": "¿Amigos? ¿De quién?"
                },
                {
                    "N": "Mazaar",
                    "T": "Pues del niñato ese tan molesto. No dijo ni una palabra, solo empezó a lanzar puñetazos a diestro y siniestro. Y luego vino el tipo ese vestido de verde y empezó a interrogarnos."
                },
                {
                    "N": "Aarav",
                    "T": "Ya he averiguado todo lo que necesitaba saber. La persona responsable del secuestro de Sachin es Yiwani, su propio hijo."
                },
                {
                    "N": "Aarav",
                    "T": "Si tienen alguna pregunta que hacerle, adelante, ahora es el momento. Cuando acaben, los arrestaré a todos y los llevaré a la Academia a la espera de un interrogatorio formal."
                },
                {
                    "N": "_1005",
                    "T": "¿Por qué los contrataste para secuestrar a tu padre?"
                },
                {
                    "N": "Yiwani",
                    "T": "Ja, es obvio, ¿no creen? Hace veinte años se largó a vivir una vida libre y despreocupada, sin pararse ni por un instante a pensar en mi bienestar."
                },
                {
                    "N": "Yiwani",
                    "T": "Y por si fuera poco, le dio toda su fortuna a la Academia junto con un contrato en el que decía que algún día deberían donárselo todo a un genio al que admire."
                },
                {
                    "N": "Yiwani",
                    "T": "Esa era mi herencia. ¿Por qué tenía que dársela a otros? Así que pensé que si él no me la daba, tendría que tomarla yo mismo."
                },
                {
                    "N": "_0",
                    "T": "¿De verdad pensabas...?"
                },
                {
                    "N": "Yiwani",
                    "T": "¡Claro que sí! ¿No dijo él mismo que pensaba observar el campeonato desde las sombras?"
                },
                {
                    "N": "Yiwani",
                    "T": "Así que contraté a unos cuantos mercenarios para que lo raptaran. Pensaba obligarle a cambiar el contrato y, si la Academia no devolvía el dinero, obligarle a decir públicamente que yo era el genio al que tanto admiraba."
                },
                {
                    "N": "_0",
                    "T": "¿Entonces, lo han encontrado?"
                },
                {
                    "N": "Yiwani",
                    "T": "Pues no. Ese viejo sabe esconderse bien. Seguro que está metido en algún hoyo observándolo todo y echándose unas risas."
                },
                {
                    "N": "Yiwani",
                    "T": "Hace ya veinte años supe que estaba loco de remate. ¿Quién sabe lo que un loco como él es capaz de hacer?"
                },
                {
                    "N": "_0",
                    "T": "¿Qué sabes de la corona de la sabiduría?"
                },
                {
                    "N": "Yiwani",
                    "T": "¿Qué corona? ¿La que donó a la Academia?"
                },
                {
                    "N": "Yiwani",
                    "T": "Sé que vale su peso en Moras. Vendió buena parte de sus propiedades para hacerse con ella en su momento."
                },
                {
                    "N": "Yiwani",
                    "T": "Y nada más que catastróficas desdichas tuvieron lugar después de que se hiciera con ella. A veces incluso se oía una aguda voz procedente del almacén."
                },
                {
                    "N": "Yiwani",
                    "T": "Antes de donarla a la Academia, llegó a encerrarse en ese almacén durante días para buscar lo que fuera que hacía aquel sonido estridente."
                },
                {
                    "N": "Yiwani",
                    "T": "Ya había perdido todos los tornillos por aquella época, así que nada de lo que haga me sorprendería lo más mínimo."
                },
                {
                    "N": "_1005",
                    "T": "¿Qué quieres decir con que había perdido los tornillos?"
                },
                {
                    "N": "Yiwani",
                    "T": "Bueno, yo todavía era pequeño, así que solo tengo algunos vagos recuerdos al respecto, pero tengo la sensación de que se largó al desierto a investigar no sé qué y no volvió en años."
                },
                {
                    "N": "Yiwani",
                    "T": "Y cuando al final regresó, era una persona completamente distinta. No decía más que tonterías y se pasaba los días y las noches escribiendo artículos."
                },
                {
                    "N": "Yiwani",
                    "T": "Le pregunté si podía leer lo que estaba escribiendo y me echó a patadas de la habitación. Después de aquello, desapareció otra vez, aunque esta vez se llevó lo que había escrito con él. Cuando regresó de nuevo, ya había firmado ese dichoso contrato con la Academia."
                },
                {
                    "N": "Yiwani",
                    "T": "Siempre me he preguntado si, en aquel entonces, aquel hombre llamado Sachin seguía siendo mi padre o si no era más que un demonio del desierto oculto bajo su piel."
                },
                {
                    "N": "_1005",
                    "T": "¡Paimon ya ha tenido suficiente! ¡Tus historias son demasiado inquietantes!"
                },
                {
                    "N": "Yiwani",
                    "T": "No me importa si no me creen, les he dicho todo cuanto sé. Pero sí que quiero que me hagan un favor. Si se cruzan con Sachin, díganle algo de mi parte."
                },
                {
                    "N": "Yiwani",
                    "T": "Díganle que no importa cuánto investigue, para mí siempre será la peor de las escorias."
                },
                {
                    "N": "Aarav",
                    "T": "¿Has acabado ya? Pues andando."
                },
                {
                    "N": "Aarav",
                    "T": "Bueno, por fin hemos apresado al responsable. Gracias por toda la información que nos han facilitado."
                },
                {
                    "N": "Aarav",
                    "T": "¿Tienen alguna pregunta más?"
                },
                {
                    "N": "_0",
                    "T": "¿Qué pasa con la corona de la sabiduría?"
                },
                {
                    "N": "_1005",
                    "T": "¡Eso, eso! Alhacén también la mencionaba en sus notas..."
                },
                {
                    "N": "Aarav",
                    "T": "¿El escriba Alhacén también ha tomado parte en el asunto?"
                },
                {
                    "N": "Aarav",
                    "T": "Humm, ¿qué tal si hacemos esto? Si de verdad piensan que pasa algo raro con esa corona, les recomiendo que se pongan en contacto con los organizadores para que detengan temporalmente la competición y nos permitan investigar a fondo el asunto."
                },
                {
                    "N": "_1005",
                    "T": "¡Buena idea! Bien, vamos, tenemos que contarle lo que está pasando a Karina cuanto antes."
                }
            ]
        ]
    },
    "4010305": {
        "Desc": "Ve a la sede principal y busca al personal del evento",
        "Step": "Después de escuchar la información de Yiwani y combinarla con las notas de Alhacén, les parece sospechoso que utilicen la corona de la sabiduría como recompensa. Contacta cuanto antes con el personal del evento para contárselo.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "¡Karina!"
                },
                {
                    "N": "Karina",
                    "T": "*Suspira*, por fin han vuelto..."
                },
                {
                    "N": "Karina",
                    "T": "#¿Dónde han estado? ¡L{F#a}{M#o}s he buscado por todas partes! La tercera ronda ya ha comenzado."
                },
                {
                    "N": "_1005",
                    "T": "#Hemos estado ocupad{F#a}{M#o}s capturando a unos malos que querían secuestrar a Sachin."
                },
                {
                    "N": "_1005",
                    "T": "¡Espera, eso no importa ahora! Esa corona es muy rara, ¡tenemos que investigarla!"
                },
                {
                    "N": "Karina",
                    "T": "¿Que la corona de la sabiduría es rara? No lo creo."
                },
                {
                    "N": "Karina",
                    "T": "Hemos estado utilizando la corona de la sabiduría en todo tipo de torneos y competiciones durante veinte años y nunca ha habido ningún problema. ¿De dónde se han sacado esa idea?"
                },
                {
                    "N": "_0",
                    "T": "De información nueva que ha salido a la luz."
                },
                {
                    "N": "Karina",
                    "T": "Humm, parece un asunto bastante serio. Déjenme pensar..."
                },
                {
                    "N": "Karina",
                    "T": "Bien, verán, el caso es que antes de que comenzara la tercera prueba, llevamos la corona a la Arboleda Moutiyima."
                },
                {
                    "N": "Karina",
                    "T": "La tercera prueba consiste precisamente en adentrarse en la Arboleda Moutiyima, encontrar la diadema y colocarla en su pedestal. El primer participante en lograrlo obtiene 4 puntos."
                },
                {
                    "N": "Karina",
                    "T": "Teniendo en cuenta la escasa diferencia de puntuaciones, el que gane esta prueba será probablemente el ganador de la competición."
                },
                {
                    "N": "Karina",
                    "T": "Así que no creo que les vaya a resultar fácil hacerse con ella antes que los demás participantes."
                },
                {
                    "N": "_0",
                    "T": "Tenemos que intentarlo."
                },
                {
                    "N": "Karina",
                    "T": "Bien, entonces dejen que les marque la ubicación de la corona. No pierdan más tiempo y, por favor, tengan mucho cuidado."
                },
                {
                    "N": "_1005",
                    "T": "¡Bien, en marcha!"
                }
            ]
        ]
    },
    "4010307": {
        "Desc": "Recupera la corona de la sabiduría",
        "Step": "Karina te comenta que la corona de la sabiduría debía ser un objeto por el que la gente compitiera durante la tercera ronda de la competición. Puesto que entraña no pocos peligros, deberías hacerte con ella antes de que lo haga alguien más...",
        "Talk": []
    },
    "4010308": {
        "Desc": "Vuelve a la línea de meta y observa la situación",
        "Step": "Llegas a la ubicación donde estaba la corona de la sabiduría, pero otro participante ya se la ha llevado. Ahora solo te queda dirigirte a la línea de meta y aguardar.",
        "Talk": []
    },
    "4010309": {
        "Desc": "",
        "Talk": []
    },
    "4010310": {
        "Desc": "Habla con Kaveh",
        "Step": "Después de una serie de catastróficas desdichas, resulta que fue Kaveh quien se llevó la corona. Aunque hay algo raro en toda esta situación...",
        "Talk": [
            [
                {
                    "N": "Sachin",
                    "T": "Por fin, después de tanto tiempo... alguien va a recibir mi herencia... y con ella, mi investigación."
                },
                {
                    "N": "Sachin",
                    "T": "Ven, Kaveh. Ven aquí, hijo..."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Cómo sabes mi nombre? ¿Y quién eres tú?"
                },
                {
                    "N": "Sachin",
                    "T": "Soy Sachin. Bueno, para ser preciso, soy tan solo un fragmento de la mente de Sachin."
                },
                {
                    "N": "Sachin",
                    "T": "El destino es algo muy curioso... Al verte, no puedo evitar acordarme de cierta persona. Aunque tú pareces más persistente, como si poseyeras un conocimiento más íntegro de las adversidades de este mundo. Tú eres la persona digna de recibir mi herencia."
                },
                {
                    "N": "Sachin",
                    "T": "Hijos míos, esta es la primera vez que nos vemos, pero las palabras que he de pronunciar a continuación son de suma importancia. Así que, por favor, escúchenlas con atención y sean testigos de ellas."
                },
                {
                    "N": "Sachin",
                    "T": "Todos han tenido un desempeño sobresaliente en el Campeonato Interescolar. La Academia sin duda cuenta con una gran cantidad de curiosos talentos entre sus miembros, y ustedes son únicos entre ellos."
                },
                {
                    "N": "Sachin",
                    "T": "Pero si he de elegir a un único participante, ese has de ser tú, Kaveh. No solo has ganado limpiamente, sino también porque tú y yo somos muy parecidos."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Perdona? ¿Tú y yo?"
                },
                {
                    "N": "Sachin",
                    "T": "Así es. Ambos cargamos con la pesada desgracia de ser idealistas por naturaleza. Gran parte de nuestra miseria radica precisamente en esa cualidad."
                },
                {
                    "N": "Sachin",
                    "T": "Hace 28 años me adentré en el desierto y allí residí durante ocho largos años. ¿Qué crees que presencié durante aquel tiempo? Guerras, genocidios, pobreza sin límites..."
                },
                {
                    "N": "Sachin",
                    "T": "Disputas por las fuentes de agua potable, asaltos continuos a las caravanas de comerciantes, explotación de los más indefensos, día tras día, sin descanso. Más allá del Muro de Samiel se extendía un mundo completamente opuesto al que yo conocía."
                },
                {
                    "N": "Sachin",
                    "T": "Todo aquello de cuanto fui testigo me atormentó. Solo podía pensar en encontrar la forma de salvarlos a todos."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Y bien? ¿Encontraste la forma?"
                },
                {
                    "N": "Sachin",
                    "T": "Soy un erudito de la Escuela de Etiología, y como tal, intenté encontrar una solución etiológica."
                },
                {
                    "N": "Sachin",
                    "T": "Estudié la historia y la antropología, y llevé a cabo incontables experimentos sobre la naturaleza humana. Incluso me adentré hasta lo más profundo del desierto para ponerme en contacto con aquellos eruditos que decían formar parte de la Escuela Postergada."
                },
                {
                    "N": "Sachin",
                    "T": "Pero al final comprendí que aquella respuesta que buscaba simplemente no existía."
                },
                {
                    "N": "Sachin",
                    "T": "No se puede culpar de aquellas atrocidades únicamente a una de las partes implicadas. Los pecados cometidos radican en lo más intrínseco de la naturaleza humana. Nuestro ser nos llama a ser seres conflictivos, a enfrentarnos entre nosotros y a clamar la destrucción. Por dura que pueda resultar, se trata de una verdad inexorable."
                },
                {
                    "N": "Sachin",
                    "T": "El objetivo de mi investigación era obtener valiosas lecciones del pasado, pero la historia carece de contenido sustancial con el que orientarnos. ¡Las cosas solo pueden ir a peor!"
                },
                {
                    "N": "Sachin",
                    "T": "Después de afrontar tan terrible realidad, un profundo sentimiento de vacío se apoderó de mi ser. Era incapaz de seguir adelante sabiendo lo que sabía... Así que decidí poner fin a mi propia vida."
                },
                {
                    "N": "Sachin",
                    "T": "Pero antes de que lo hiciera, el destino quiso que esta corona llegara a mis manos. Este objeto es capaz de conservar la consciencia de su portador, así que grabé en ella mis vivencias y luego le pedí a la Academia que administrara todos mis bienes."
                },
                {
                    "N": "Alhacén",
                    "T": "Tal y como pensaba, el contrato que firmaste con la Academia era un testamento."
                },
                {
                    "N": "Alhacén",
                    "T": "Pero si ya te habías dado por vencido, ¿por qué te molestaste en hacer todo esto?"
                },
                {
                    "N": "Sachin",
                    "T": "Como ya he comentado, llevé a cabo incontables experimentos sobre la naturaleza humana. Supongo que este se puede considerar el último de ellos."
                },
                {
                    "N": "Sachin",
                    "T": "La Academia está atestada de talentos, y cada generación trae nuevas mentes brillantes. Tenía la esperanza de que alguna de ellas llegara algún día a desentrañar el misterio que supone la naturaleza humana y contribuyera a hacer de este mundo un lugar mejor."
                },
                {
                    "N": "Alhacén",
                    "T": "Es decir, que no solo esperabas encontrar un sucesor que fuera un genio, sino que también fuera capaz de comprender el sufrimiento del pueblo. Solo así podría comprender verdaderamente la esencia de la naturaleza humana, de la sociedad y del mundo en general."
                },
                {
                    "N": "Kaveh",
                    "T": "..."
                },
                {
                    "N": "Alhacén",
                    "T": "¿Te has parado a pensar alguna vez que la riqueza podría hacer que cualquiera le diera la espalda al sufrimiento de este mundo? Incluso el más puro de los idealistas se vería abrumado al heredar toda tu fortuna."
                },
                {
                    "N": "Sachin",
                    "T": "Parece que eres un chico muy inteligente... Pero no eres la clase de persona capaz de comprender mi forma de pensar. Para mí, esto no es más que otra parte de mi experimento, parte de mi investigación sobre la naturaleza humana."
                },
                {
                    "N": "Sachin",
                    "T": "Incluso si mi heredero sufre a consecuencia de mis actos, incluso si se vuelve insensible y se da a una vida de lujo y ostentación, mi investigación habrá progresado."
                },
                {
                    "N": "Sachin",
                    "T": "Me apena la naturaleza de este mundo, lamento la insoportable carga de su historia y me arrepiento de no haber sido capaz de completar mi investigación."
                },
                {
                    "N": "Sachin",
                    "T": "Y ahí, Kaveh, mi querido niño, es donde entras tú."
                },
                {
                    "N": "Kaveh",
                    "T": "¿E-estás seguro de que quieres que yo me quede con todo cuanto posees y que haga lo que quiera con la herencia?"
                },
                {
                    "N": "Sachin",
                    "T": "Confío en tu juicio, hijo. Ahora, ponte la corona y completa el viaje que yo dejé a medias."
                }
            ]
        ]
    },
    "4010313": {
        "Desc": "",
        "Talk": []
    },
    "4010306": {
        "Desc": "Pregúntale a Kaveh por su salud",
        "Step": "Después de escuchar las palabras de Sachin, Kaveh destruyó la corona con gran dolor y donó todo el patrimonio de Sachin. Parece que Kaveh no lo está pasando muy bien...",
        "Talk": [
            [
                {
                    "N": "Kaveh",
                    "T": "Parece que aquí acaba todo."
                },
                {
                    "N": "_1005",
                    "T": "Kaveh..."
                },
                {
                    "N": "Tignari",
                    "T": "¿Estás bien? ¿Cómo te encuentras?"
                },
                {
                    "N": "Kaveh",
                    "T": "E-estoy bien... Uff..."
                },
                {
                    "N": "Kaveh",
                    "T": "Gracias, Tignari. No te preocupes por mí."
                },
                {
                    "N": "Tignari",
                    "T": "No te esfuerces tanto."
                },
                {
                    "N": "Nilou",
                    "T": "Kaveh..."
                },
                {
                    "N": "Alhacén",
                    "T": "Puede que haya roto la corona, pero Kaveh fue el primero en completar la misión."
                },
                {
                    "N": "Alhacén",
                    "T": "Según las normas de la competición, Kaveh es el ganador de la tercera ronda. Y si sumamos las puntuaciones, también lo convierte en el ganador del Campeonato Interescolar."
                },
                {
                    "N": "Alhacén",
                    "T": "Al ser tanto el ganador del Campeonato Interescolar como el sucesor elegido por el propio Sachin, Kaveh tendrá derecho a reclamar la herencia de Sachin."
                },
                {
                    "N": "Alhacén",
                    "T": "Por ello, me gustaría confirmarlo una vez más. ¿Estás seguro de que quieres donar toda la herencia de Sachin?"
                },
                {
                    "N": "Kaveh",
                    "T": "Ya lo he dicho. Si crees que el mundo es un mal lugar, solo puedes usar lo que te da para intentar hacerlo un lugar mejor."
                },
                {
                    "N": "Kaveh",
                    "T": "Luchar tercamente contra el mundo no servirá de nada. Yo... no soy como él."
                },
                {
                    "N": "Alhacén",
                    "T": "Bien, como escriba de la Academia, me encargaré de registrarlo en los archivos."
                },
                {
                    "N": "Alhacén",
                    "T": "Los sabios se pondrán en contacto contigo para determinar los detalles sobre la administración de los bienes donados."
                },
                {
                    "N": "Kaveh",
                    "T": "... Me parece bien."
                },
                {
                    "N": "Kaveh",
                    "T": "No sé si los resultados de su investigación eran correctos, y tampoco sería capaz de continuar desde donde él lo dejó."
                },
                {
                    "N": "Kaveh",
                    "T": "Lo que sí sé es que si pongo fin a esto ahora, nadie resultará herido."
                },
                {
                    "N": "Kaveh",
                    "T": "Este no será el último. Seguro que en el futuro se celebran más torneos y muchos más eruditos seguirán nuestro ejemplo."
                },
                {
                    "N": "Kaveh",
                    "T": "Las palabras de Sachin solo causan dolor. Así que... es el momento de poner fin a esto. Nadie más tendrá que escucharlas a partir de ahora."
                },
                {
                    "N": "Kaveh",
                    "T": "Todos somos eruditos. Sé que rechazar así el punto de vista de otro erudito es un comportamiento despótico y soberbio... Pero no me importa. Asumiré la responsabilidad."
                },
                {
                    "N": "Kaveh",
                    "T": "Es lo mínimo que puedo hacer. Bueno, y lo único, ya de paso..."
                },
                {
                    "N": "Alhacén",
                    "T": "..."
                },
                {
                    "N": "Alhacén",
                    "T": "Bien dicho, Kaveh. Has descrito a la perfección el camino de la ecuanimidad que tantos admiran y que tan pocos se atreven a recorrer."
                },
                {
                    "N": "Alhacén",
                    "T": "Y lo digo aunque todo esto me parezca absolutamente ridículo. Siempre has estado al tanto de tus carencias, pero tu orgullo te impide aceptarlas."
                },
                {
                    "N": "Alhacén",
                    "T": "Y, sin embargo, tu perspectiva es más que apta para aparecer en un discurso de la victoria. Kaveh, como miembro del comité organizador, es un honor felicitarte por haberte hecho con la victoria."
                },
                {
                    "N": "Kaveh",
                    "T": "Ja, no te equivoques, Alhacén, no necesito tus cumplidos."
                },
                {
                    "N": "Kaveh",
                    "T": "Además, este no es el momento ni el lugar para comenzar un debate, así que ahórrate tus comentarios para otra ocasión y céntrate en la competición."
                },
                {
                    "N": "Nilou",
                    "T": "¡Felicidades, Kaveh! Supongo que deberías prepararte para la ceremonia de entrega de premios..."
                }
            ]
        ]
    },
    "4010407": {
        "Desc": "Regresa a la sede del evento",
        "Talk": [
            [
                {
                    "N": "Karina",
                    "T": "Muchas gracias a cada participante por su brillante actuación. ¡El Campeonato Interescolar ha terminado!"
                },
                {
                    "N": "Karina",
                    "T": "Por último, invitamos al ganador del certamen, Kaveh, a subir a la tarima para recoger su premio."
                },
                {
                    "N": "Karina",
                    "T": "Normalmente, llegados a este momento, coronaríamos al campeón y le daríamos su premio."
                },
                {
                    "N": "Karina",
                    "T": "Pero hace poco nos llegó la noticia de que Kaveh ha heredado la fortuna de Sachin, y la ha donado toda a causas benéficas."
                },
                {
                    "N": "Marwa",
                    "T": "¿Ha donado... toda la fortuna de Sachin?"
                },
                {
                    "N": "Alae",
                    "T": "¿Cómo ha podido renunciar a toda esa cantidad de Moras?"
                },
                {
                    "N": "Karina",
                    "T": "Gracias a la magnanimidad de Kaveh, muchas familias pobres ahora tendrán la oportunidad de cambiar su suerte."
                },
                {
                    "N": "Karina",
                    "T": "Por supuesto, la ceremonia será más corta ahora que no hay corona ni premio que entregar. ¿Quieres decir algunas palabras, Kaveh? Seguro que todos están tan intrigados como yo por saber tus motivos para donar semejante suma de dinero."
                },
                {
                    "N": "Kaveh",
                    "T": "Yo... yo tampoco tengo muy claro qué debería decir en esta situación. Estoy muy contento de resultar ganador, aunque la suerte ha sido un factor importante."
                },
                {
                    "N": "Kaveh",
                    "T": "En cuanto a por qué he donado ese dinero... No comparto la forma de ver las cosas de Sachin, y tampoco quiero su dinero. Hay muchas cosas en la vida que cada cual debe experimentar por sí mismo, y juzgarlas no es responsabilidad suya ni mía."
                },
                {
                    "N": "Kaveh",
                    "T": "Pero este no es lugar para hablar de temas tan graves y complicados. Aparte de eso... no tengo nada más que decir. Muchas gracias."
                },
                {
                    "N": "Karina",
                    "T": "Oh, espera un momento, Kaveh."
                },
                {
                    "N": "Karina",
                    "T": "A pesar de todo lo que falta, sigue quedando un premio que entregar en esta ceremonia. Por favor, acepta esta carta de edición limitada de Invocación de los Sabios."
                },
                {
                    "N": "Karina",
                    "T": "Aparte de eso, ya se ha apuntado en tu expediente el título de campeón del Torneo Interescolar. Eso quiere de decir que, si en el futuro propones algún proyecto a la Academia, los sabios le darán atención preferencial."
                },
                {
                    "N": "Kaveh",
                    "T": "Muchas gracias, acepto gustoso esta carta. En cuanto a lo de solicitar un proyecto... Olvídalo."
                },
                {
                    "N": "Karina",
                    "T": "Bien. Entonces, damos por concluida la ceremonia. ¡Una vez más, despidamos a nuestro campeón, Kaveh, con un gran aplauso!"
                },
                {
                    "N": "Aissa",
                    "T": "Sigo sin entenderlo. Con esos Moras yo podría vivir una vida de lujo."
                },
                {
                    "N": "Bahir",
                    "T": "Eso quiere decir que no eres lo suficientemente rarita como para comprender a un genio como él. Andando, ¡sigamos disfrutando de la Feria de la Academia!"
                },
                {
                    "N": "Kaveh",
                    "T": "*Suspira*. Por fin ha terminado. Creo que se me da bastante bien hablar en público, pero esta vez estoy agotado..."
                },
                {
                    "N": "_1005",
                    "T": "¿No será que estabas demasiado cansado de la competición? En cualquier caso, no pareces muy contento. Eres el ganador, ¿no es motivo para estar orgulloso?"
                },
                {
                    "N": "Kaveh",
                    "T": "Tienes razón. Oh, por cierto... Recuerdo que Cyno dijo que quería esta carta. ¡Y resulta que está en mi posesión!"
                },
                {
                    "N": "_1005",
                    "T": "¿Vas a regalársela? Si es una carta muy valiosa, ¡seguro que puedes sacar mucho dinero por ella!"
                },
                {
                    "N": "Kaveh",
                    "T": "¿Por qué haría algo así? Además, yo no la voy a usar para nada, mejor que se la quede él. Si no es inconveniente, dénsela, por favor."
                },
                {
                    "N": "_1005",
                    "T": "Ni hablar. ¡Algo tan importante has de hacerlo tú en persona! Vamos, ¡busquemos juntos a Cyno!"
                },
                {
                    "N": "Kaveh",
                    "T": "Pero yo quería descansar un rato... ¡Ay, ay! ¡No me tires del pelo!"
                }
            ]
        ]
    },
    "4010401": {
        "Desc": "Busca a Cyno",
        "Step": "Tras perder la corona y el premio en metálico, y rechazar los privilegios ofrecidos, el único premio que le queda al final a Kaveh es una carta de edición limitada de Invocación de los Sabios. Quizás Cyno esté interesado en ella...",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "¿Qué estás mirando, Cyno?"
                },
                {
                    "N": "Cyno",
                    "T": "Sigo pensando en el asunto de Sachin. ¿Necesitan algo?"
                },
                {
                    "N": "Kaveh",
                    "T": "Toma, esta es la carta de edición limitada de Invocación de los Sabios que me dieron. Supongo que tú le darás un mejor uso que yo."
                },
                {
                    "N": "Cyno",
                    "T": "... Pero se trata de una carta de edición limitada. ¿Seguro que quieres dármela?"
                },
                {
                    "N": "Kaveh",
                    "T": "¿Por qué no? A mí no me sirve de nada."
                },
                {
                    "N": "Cyno",
                    "T": "..."
                },
                {
                    "N": "Cyno",
                    "T": "Pero es una carta de edición limitada... Kaveh, si tienes algún problema, no tienes más que decírmelo. No hace falta que recurras a estas tácticas para que te ayude."
                },
                {
                    "N": "Kaveh",
                    "T": "¡No tengo ninguna segunda intención! Puedo encargarme de mis problemas yo solo, y además, no tienen nada que ver con esta carta."
                },
                {
                    "N": "Cyno",
                    "T": "Está bien, entonces no te la rechazaré."
                },
                {
                    "N": "Cyno",
                    "T": "Pero no puedo quedarme con ella así como así, más teniendo en cuenta que ni siquiera eres consciente de lo que vale."
                },
                {
                    "N": "Cyno",
                    "T": "... Hagamos esto. Te la compraré por el precio actual de venta de la carta de lujo limitada de la edición anterior. ¿Qué te parece?"
                },
                {
                    "N": "Kaveh",
                    "T": "Anda ya, ¿cuánto puede valer una simple carta?"
                },
                {
                    "N": "Cyno",
                    "T": "Como mínimo, un millón de Moras."
                },
                {
                    "N": "Kaveh",
                    "T": "¡¿Cuánto?!"
                },
                {
                    "N": "_1005",
                    "T": "¡¿Un millón de Moras?!"
                },
                {
                    "N": "Cyno",
                    "T": "Si te parece poco, puedo pagar un poco más."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Un millón de Moras por una carta como esta? ¡Pero la última vez que jugaste vi que tenías muchas cartas brillantes como esta!..."
                },
                {
                    "N": "Cyno",
                    "T": "No todas las cartas valen tanto como esta. También hay cartas muy bonitas pero que son bastante comunes."
                },
                {
                    "N": "Kaveh",
                    "T": "Guau, el sueldo de Gran Juez debe ser bastante bueno, si te puedes permitir gastar esa cantidad de Moras en esto..."
                },
                {
                    "N": "Kaveh",
                    "T": "Pero de todos modos, no puedo aceptarlo. No me siento cómodo aceptando el dinero de un amigo."
                },
                {
                    "N": "Cyno",
                    "T": "No seas tan cumplido. Tengo bastantes ahorros, de sobra para esta carta."
                },
                {
                    "N": "Kaveh",
                    "T": "Pero... no serías capaz de fundirte tus ahorros solo por una afición, ¿cierto? Es necesario tenerlas bajo control, y sobre todo, nunca pidas dinero prestado en un arranque impulsivo... La vida de un deudor es miserable."
                },
                {
                    "N": "Cyno",
                    "T": "... Eso parece salido de experiencia propia. Tienes que haber pasado lo tuyo."
                },
                {
                    "N": "Kaveh",
                    "T": "Ay... Ni lo menciones."
                },
                {
                    "N": "Cyno",
                    "T": "Siendo así, parece que eres tú quien debería aplicarse el cuento."
                },
                {
                    "N": "Cyno",
                    "T": "En cualquier caso, ¡yo, Cyno, acepto esta preciada carta! Ven luego conmigo a que te dé los Moras. ¡Gracias a ti, he logrado el objetivo por el que me apunté a la competición!"
                },
                {
                    "N": "Kaveh",
                    "T": "Está bien, si insistes. *Suspira*, me servirá para pagar la cuota de este mes, y hasta puede que me sobre algo. ¿Qué tal si les invito luego a comer? También podemos llamar a Tignari y a Collei."
                },
                {
                    "N": "_1005",
                    "T": "¡Jeje, bien está lo que bien acaba!"
                },
                {
                    "N": "_1005",
                    "T": "#Por cierto, ¿cómo estarán los demás participantes? Ya que somos l{F#as}{M#os} comentaristas invitad{F#as}{M#os}, ¡deberíamos ir a averiguarlo!"
                }
            ]
        ]
    },
    "4010402": {
        "Desc": "Habla con los representantes de las Escuelas (0/3)",
        "Step": "La competición ha terminado. Habla con los representantes de las Escuelas, a ver qué te cuentan.",
        "Talk": [
            [
                {
                    "N": "Faruzán",
                    "T": "Si de elegir ropa se trata, haz caso a mis consejos. En mi época, la ropa que llevaba siempre se convertía en tendencia en la Academia."
                },
                {
                    "N": "Dehya",
                    "T": "¿De verdad? Entonces, si no le importa, humm... doña Faruzán, ¿podría ayudarnos a escoger algunos conjuntos que estén de moda actualmente?"
                },
                {
                    "N": "_1005",
                    "T": "¡Faruzán, Nilou!... ¡Y también están Dehya y Candace! ¿Qué están haciendo?"
                },
                {
                    "N": "Dehya",
                    "T": "Oh, nos encontramos mientras íbamos de compras."
                },
                {
                    "N": "Dehya",
                    "T": "Doña Faruzán es muy amable, enseguida decidió ayudarnos en cuanto supo que estábamos comprando ropa."
                },
                {
                    "N": "Faruzán",
                    "T": "Humm... Pero no he visto ningún modelo familiar hasta ahora. No importa, podemos comprar la tela y confeccionarlos nosotras mismas."
                },
                {
                    "N": "Faruzán",
                    "T": "Usaremos una tela lisa de base, y luego la bordaremos con flores rojas y rosas. Ah, y algunas hojas verdes..."
                },
                {
                    "N": "Dehya",
                    "T": "Espere... ¿Está segura de que ese es el estilo que se lleva ahora? Suena a la clase de ropa que alguien mayor llevaría para estar por casa hace años..."
                },
                {
                    "N": "Faruzán",
                    "T": "Descuida, los clásicos nunca pasan de moda."
                },
                {
                    "N": "Dehya",
                    "T": "Jaja, no se moleste, gracias. Sería un poco raro llevar ropa así."
                },
                {
                    "N": "Nilou",
                    "T": "Esperen, esperen. Lo que ha dicho doña Faruzán es cierto, se trata de un estilo clásico que estuvo antes de moda. Pero hoy en día existen otras opciones."
                },
                {
                    "N": "Nilou",
                    "T": "Si no les importa, ¿qué tal si les elijo yo algunas prendas? Es raro que coincidamos todas, y Candace se suele dejar caer muy poco por la ciudad. ¡Además, conozco algunas tiendas que tienen muy buenos precios!"
                },
                {
                    "N": "Candace",
                    "T": "Muy bien. Lo dejamos en tus manos."
                },
                {
                    "N": "Faruzán",
                    "T": "Yo también iré. Conocer los gustos de la juventud también es responsabilidad de una veterana."
                },
                {
                    "N": "Marwa",
                    "T": "¿Doña Faruzán?... ¡Ven rápido, es ella!"
                },
                {
                    "N": "Faruzán",
                    "T": "¿Eh? ¿Quién eres tú?"
                },
                {
                    "N": "Fawara",
                    "T": "Somos alumnas nuevas en la Academia y presenciamos su gran talento durante la competición, así que nos gustaría saber si usted da alguna clase."
                },
                {
                    "N": "Faruzán",
                    "T": "¡Oh, claro que sí! Serían más que bienvenidas."
                },
                {
                    "N": "Marwa",
                    "T": "¡Genial! Estamos muy impacientes... Entonces, ¿cuál es su especialidad? ¿Mecanismos de precisión?"
                },
                {
                    "N": "Faruzán",
                    "T": "... Soy de la Escuela de Semiótica."
                },
                {
                    "N": "Marwa",
                    "T": "¿De verdad? Pero vimos que estaba muy familiarizada con los mecanismos... Ay, es verdad, ahora recuerdo que usted era la representante de la Escuela de Semiótica..."
                },
                {
                    "N": "Marwa",
                    "T": "¡Pero las clases de la Escuela de Semiótica son muy aburridas! Lo siento mucho, doña Faruzán. ¡Seré la primera en apuntarme si da alguna clase de otro tipo!"
                },
                {
                    "N": "Faruzán",
                    "T": "¡Hum! Ya lo suponía... ¿Y tú? ¿Qué haces aún aquí?"
                },
                {
                    "N": "Fawara",
                    "T": "Creo que usted es increíble, doña Faruzán, así que me gustaría estudiar con usted un tiempo."
                },
                {
                    "N": "Fawara",
                    "T": "Puedo apuntarme a sus clases como asignaturas optativas, aunque no sea muy conveniente cambiar de Facultad para asistir... ¡Espero sus clases con ilusión, profesora!"
                },
                {
                    "N": "Faruzán",
                    "T": "¡Oh! ¡Buena chica! Descuida, procuraré enseñarte bien. ¡Aprenderás hasta el límite de tus capacidades!"
                },
                {
                    "N": "Fawara",
                    "T": "Muchas gracias, doña Faruzán. Dejaré que siga con sus compras. Iré a verla cuando comience el curso."
                },
                {
                    "N": "Dehya",
                    "T": "No estoy segura de lo que ha pasado, pero parece que es algo bueno. Felicidades."
                },
                {
                    "N": "Candace",
                    "T": "#{NICKNAME}, Paimon, ¿vienen con nosotras a comprar algo de ropa?"
                },
                {
                    "N": "_1005",
                    "T": "Lo sentimos, ya acordamos con Kaveh ir a comer juntos. ¡Y antes de eso tenemos que ir a entrevistar a los demás participantes!"
                },
                {
                    "N": "_1005",
                    "T": "¡Y hablando de eso! ¿Han visto a Don Sombrero y a Laila?"
                },
                {
                    "N": "Nilou",
                    "T": "No sabemos donde está Don Sombrero... Y en cuanto a Laila, justo nos la encontramos hace un momento."
                },
                {
                    "N": "Nilou",
                    "T": "Iba con algunos alumnos de la Escuela de Iluminacionismo, pero no nos paramos a hablar. ¿Quieren ir con ella?"
                },
                {
                    "N": "_1005",
                    "T": "¿Alumnos de la Escuela de Iluminacionismo?... ¿Serán los que votaron a Laila como representante?"
                },
                {
                    "N": "_1005",
                    "T": "A saber cómo la tratarán por no haber salido ganadora. Será mejor que vayamos a ver."
                }
            ]
        ]
    },
    "4010404": {
        "Desc": "Habla con los representantes de las Escuelas (1/3)",
        "Talk": [
            [
                {
                    "N": "Tignari",
                    "T": "¿Estás seguro de que tienes suficiente dinero? No te lo gastes todo de golpe."
                },
                {
                    "N": "Kaveh",
                    "T": "No te preocupes, he echado cuentas y estoy seguro de que tengo suficiente presupuesto. Con la de veces que me has invitado tú a comer, es lo mínimo que podría hacer."
                },
                {
                    "N": "Kaveh",
                    "T": "#¡{NICKNAME}, Paimon! ¡Estamos aquí!"
                },
                {
                    "N": "_1005",
                    "T": "¡Guau, qué buena pinta tiene todo esto! ¡Jeje, a ponerse las botas!"
                },
                {
                    "N": "Tignari",
                    "T": "Oí que fueron a ver a los demás participantes, ¿cómo están?"
                },
                {
                    "N": "_1005",
                    "T": "Faruzán logró captar una nueva estudiante, y Laila ha cumplido las expectativas de sus compañeros. Pero no hemos visto a Don Sombrero. A saber a dónde habrá ido."
                },
                {
                    "N": "Kaveh",
                    "T": "Yo tampoco he visto a Alhacén. Para una vez que estoy de buen ánimo y quiero invitarlo a comer algo bueno, resulta que desaparece sin dejar rastro."
                },
                {
                    "N": "Kaveh",
                    "T": "Este tipo... ¿Dónde demonios se habrá metido? Y también está esa nota que dejó..."
                },
                {
                    "N": "Kaveh",
                    "T": "Es igual, que vaya donde quiera. ¡Comamos!"
                },
                {
                    "N": "???",
                    "T": "Pasan un rato ameno mientras disfrutan de la comida..."
                },
                {
                    "N": "Tignari",
                    "T": "Me diste un buen susto cuando arrojaste la corona al suelo. Aunque no es sorprendente pensándolo a posteriori, creí en aquel momento que al menos dudarías un poco."
                },
                {
                    "N": "Kaveh",
                    "T": "La conciencia de Sachin me estuvo hablando mentalmente desde el momento en que tomé la corona. También pude sentir sus emociones. Esa sensación terrible y desesperada... no paraba de darme vueltas en la cabeza."
                },
                {
                    "N": "Kaveh",
                    "T": "No dejaba de invadirme la mente con sus ideas, como si quisiera controlarme mentalmente... Me produjo un dolor de cabeza terrible que solo iba a peor."
                },
                {
                    "N": "Kaveh",
                    "T": "Como dije entonces, no es que careciesen de valor. Pero si una investigación así conduce a un final tan desafortunado, quizá es mejor que no exista."
                },
                {
                    "N": "Cyno",
                    "T": "Si esa investigación ilegal suya tomase un rumbo malvado y causara sufrimiento a mucha gente, la matra tendría que intervenir y prohibirla."
                },
                {
                    "N": "Tignari",
                    "T": "Creo que hiciste lo correcto. Otros más cínicos habrían fingido continuar la investigación y abandonarla en cuanto hubiesen recibido su fortuna. Pero tú nunca habrías hecho eso."
                },
                {
                    "N": "Tignari",
                    "T": "No entraré a valorar sus teorías y experimentos, pero opino que tenía las cosas muy claras a la hora de elegir... y te eligió a ti. Eso es prueba suficiente."
                },
                {
                    "N": "Kaveh",
                    "T": "Quizás. Creo que si aceptas el legado de alguien, estás obligado a honrar su voluntad."
                },
                {
                    "N": "Collei",
                    "T": "Eso está muy bien. Quiere decir que eres una persona íntegra."
                },
                {
                    "N": "Kaveh",
                    "T": "Gracias de verdad, Collei. ¡Parece que tú me entiendes!"
                },
                {
                    "N": "Kaveh",
                    "T": "Menos mal que Alhacén no está aquí ahora mismo. Si no, seguro que no habría dicho nada bueno de mí."
                },
                {
                    "N": "Collei",
                    "T": "Aunque no esté, parece que no puedes evitar mentarlo."
                },
                {
                    "N": "Tignari",
                    "T": "Sip. No sería una comida con Kaveh si no hablara de Alhacén en algún momento. Al final te acostumbras."
                },
                {
                    "N": "Cyno",
                    "T": "Pues a mí me parece que Alhacén lleva aquí todo el tiempo."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Que está aquí? ¿Dónde? ¿Por qué no me has dicho nada?"
                },
                {
                    "N": "Cyno",
                    "T": "Lleva todo el tiempo presente aquí... en nuestros corazones."
                },
                {
                    "N": "Tignari",
                    "T": "..."
                },
                {
                    "N": "Collei",
                    "T": "..."
                },
                {
                    "N": "Kaveh",
                    "T": "¡Qué repelús! Se me ha puesto el vello de punta."
                },
                {
                    "N": "_1005",
                    "T": "Menos mal que Cyno no lo ha soltado antes de la comida, o se nos habría quitado el apetito..."
                },
                {
                    "N": "Kaveh",
                    "T": "Dejemos de hablar de él. Tignari, ¿conseguiste el objetivo que te propusiste al participar en la competición?"
                },
                {
                    "N": "Tignari",
                    "T": "Lo logré ya en la primera ronda. El boca a boca ha funcionado muy bien entre la gente, y las solicitudes para participar en esta ponencia ya han batido el récord."
                },
                {
                    "N": "Tignari",
                    "T": "¿Tienes tiempo libre el mes que viene? Podrías venir como ponente."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Y de qué iba a hablar? No entiendo de nada relacionado con la Escuela de Biología."
                },
                {
                    "N": "Tignari",
                    "T": "Pues habla de lo que tenga que ver con tu área de especialidad. Por ejemplo, de las características arquitectónicas de las construcciones selváticas, o avisar de que no se debe talar sin control para construir casas..."
                },
                {
                    "N": "Kaveh",
                    "T": "Entonces no hay problema. Haré un hueco en la agenda para ir el mes que viene."
                },
                {
                    "N": "Kaveh",
                    "T": "¿Alguien se ha quedado con hambre? ¿Pido algo más?"
                },
                {
                    "N": "Collei",
                    "T": "Yo estoy llena, gracias."
                },
                {
                    "N": "_1005",
                    "T": "¡Paimon también está superllena! ¡Ojalá pudiese darse un atracón así todos los días!"
                },
                {
                    "N": "Kaveh",
                    "T": "Deberíamos hacer esto más a menudo. Por muy ocupados que estemos, también es muy importante reunirse con los amigos. Y la comida de aquí está muy buena. Tenemos que repetir."
                },
                {
                    "N": "Cyno",
                    "T": "Buena idea. También deberíamos buscar otros restaurantes buenos como alternativa."
                },
                {
                    "N": "_1005",
                    "T": "¿Hay otros sitios donde hacen tan bien de comer? ¡Entonces no se olviden de avisarnos! ¡La buena comida es lo que más nos gusta!"
                }
            ]
        ]
    },
    "4010403": {
        "Desc": "Habla con los representantes de las Escuelas (2/3)",
        "Talk": [
            [
                {
                    "N": "Laila",
                    "T": "Lo siento mucho. Si lo hubiese hecho mejor en la tercera ronda..."
                },
                {
                    "N": "Sidra",
                    "T": "No digas eso."
                },
                {
                    "N": "Sidra",
                    "T": "Si nos pusiésemos a criticarte con lo bien que lo has hecho, ¿dónde tendríamos que escondernos de vergüenza nosotros, que ni siquiera tuvimos valor de apuntarnos?"
                },
                {
                    "N": "Qamar",
                    "T": "Aunque no hayamos visto toda la competición, fuiste la única participante en conseguir puntos en las dos primeras rondas, ¿cierto?"
                },
                {
                    "N": "Qamar",
                    "T": "Y oí también que fuiste la primera en encontrar la corona durante la tercera ronda. Te faltó muy poco para ser la ganadora."
                },
                {
                    "N": "Laila",
                    "T": "Solo fue suerte..."
                },
                {
                    "N": "Sidra",
                    "T": "¡Tonterías! ¡Tus contrincantes eran muy fuertes! ¡Estaba Tignari, de la Escuela de Biología, y hasta el Gran Juez Cyno!"
                },
                {
                    "N": "Sidra",
                    "T": "¡No podrías haberles arrebatado puntos solo con suerte! Ese apodo que te dieron es completamente cierto. ¡Eres un verdadero genio!"
                },
                {
                    "N": "Laila",
                    "T": "Gracias, pero no soy ningún genio. Por ejemplo, me encontré junto a la máquina después de haberme echado una siesta durante la segunda ronda."
                },
                {
                    "N": "Sidra",
                    "T": "No seas tan modesta. ¡Ya lo hablamos y hemos decidido celebrar una fiesta en tu honor!"
                },
                {
                    "N": "Sidra",
                    "T": "¡Vamos, arriba ese ánimo! ¡Tú eres la homenajeada!"
                },
                {
                    "N": "_1005",
                    "T": "Parece que a Laila tampoco le va mal. ¡Es estupendo!"
                },
                {
                    "N": "_1005",
                    "T": "Pero no hemos visto a Don Sombrero desde que terminó la competición... Ya casi es la hora de la comida. Vayamos a donde están Kaveh y Cyno."
                }
            ]
        ]
    },
    "4010410": {
        "Desc": "",
        "Talk": []
    },
    "4010408": {
        "Desc": "Vete de la taberna",
        "Step": "Parece que Kaveh se fue a la Academia para pasar un rato a solas después de que terminase la reunión en la taberna...",
        "Talk": []
    },
    "4010409": {
        "Desc": "",
        "Talk": []
    },
    "4010405": {
        "Desc": "Busca pistas en la Aldea Aaru",
        "Step": "De repente, caes en la cuenta de que el lugar que Sachin no tuvo tiempo de revelar podría ser la Aldea Aaru. Es posible que hubiese llevado allí su investigación en secreto. Ve a la aldea a indagar.",
        "Talk": [
            [
                {
                    "N": "_1005",
                    "T": "*Suspira*... ¡Parece que con esto termina el Campeonato Interescolar!"
                },
                {
                    "N": "_1005",
                    "T": "#Y de paso resolvimos el asunto de la corona de Sachin. ¿Hay algo más que te preocupe, {NICKNAME}?"
                },
                {
                    "N": "_0",
                    "T": "La investigación de Sachin..."
                },
                {
                    "N": "_1005",
                    "T": "Es verdad. Kaveh rompió la corona antes de que Sachin terminase de decir dónde había dejado toda la documentación relacionada con su investigación."
                },
                {
                    "N": "_1005",
                    "T": "Sería peligroso que algún otro encontrase esa documentación. Alde... Alde... ¿Qué sitio será?..."
                },
                {
                    "N": "_0",
                    "T": "¿La Aldea Aaru?"
                },
                {
                    "N": "_1005",
                    "T": "¡La Aldea Aaru! ¿No dijo Sachin que había hecho investigaciones de todo tipo en el desierto? ¡Visto así, tiene sentido que haya guardado toda la documentación relacionada en la Aldea Aaru!"
                },
                {
                    "N": "_1005",
                    "T": "¡Vayamos a probar suerte!"
                }
            ]
        ]
    },
    "4010406": {
        "Desc": "Habla con Alhacén",
        "Step": "Tras llegar a la Aldea Aaru, se encuentran con Alhacén, quien está revisando sus documentos...",
        "Talk": [
            [
                {
                    "N": "Alhacén",
                    "T": "No me esperaba encontrarme con ustedes aquí."
                },
                {
                    "N": "_1005",
                    "T": "¡Alhacén! ¿Qué haces tú también aquí?"
                },
                {
                    "N": "_1005",
                    "T": "Y eso que estás leyendo no será..."
                },
                {
                    "N": "Alhacén",
                    "T": "Los documentos de investigación de Sachin."
                },
                {
                    "N": "Alhacén",
                    "T": "Me encontré con su expediente mientras organizaba los archivos, y me picó la curiosidad sobre lo que estaba investigando."
                },
                {
                    "N": "Alhacén",
                    "T": "De lo contrario, nunca habría aceptado la invitación de comentarista. Tuve una corazonada después de presenciar los fragmentos de su conciencia, y parece que di en el clavo."
                },
                {
                    "N": "_1005",
                    "T": "¿Y-ya los has leído?"
                },
                {
                    "N": "_1005",
                    "T": "¿Estás bien? ¿No te sientes indispuesto?"
                },
                {
                    "N": "Alhacén",
                    "T": "Creo que se equivocan en algo. Si Sachin eligió a ese gran arquitecto para continuar su investigación fue porque era el único capaz de empatizar con la catástrofe y la naturaleza humana descritas en estos documentos."
                },
                {
                    "N": "Alhacén",
                    "T": "Solo alguien capaz de hacerse eco de estos sentimientos podría sufrir, y comenzar a sentir que la historia es irrelevante, que el presente no tiene sentido y que el futuro es sombrío."
                },
                {
                    "N": "Alhacén",
                    "T": "La empatía es un arma de doble filo. Está claro que Sachin y yo somos completamente distintos."
                },
                {
                    "N": "Alhacén",
                    "T": "Quienes tienen una empatía desbordante pueden hacer muchos amigos, y disfrutar de las ventajas que implica tener un amplio círculo social. Pero esto también le dificulta lograr sus objetivos."
                },
                {
                    "N": "_1005",
                    "T": "¿Por qué?"
                },
                {
                    "N": "Alhacén",
                    "T": "En cualquier asunto realmente importante habrá otra gente implicada. Y es casi imposible vivir sin herir a nadie."
                },
                {
                    "N": "Alhacén",
                    "T": "Para lograr tus objetivos, has de mentalizarte de que tendrás enemigos. Pero no todo el mundo es capaz de aceptar esto."
                },
                {
                    "N": "Alhacén",
                    "T": "Es como la objetividad, gravedad y pesimismo presentes en estos documentos... pero al fin y al cabo, no son más que los experimentos y conclusiones que obtuvo Sachin desde su propio punto de vista."
                },
                {
                    "N": "_1005",
                    "T": "Y ahora que los has leído, ¿qué te perecen?"
                },
                {
                    "N": "Alhacén",
                    "T": "Es innegable que Sachin tenía mucho talento como erudito."
                },
                {
                    "N": "Alhacén",
                    "T": "Culpó a la naturaleza humana del lado oscuro que hay en el mundo, realizó numerosos experimentos, y las conclusiones a las que llegó son básicamente fiables... es decir, que podrían catalogarse como “correctas”."
                },
                {
                    "N": "_1005",
                    "T": "Entonces, ¿de verdad es como dijo? ¿Que todo el mundo es malo y que todo será cada vez peor?"
                },
                {
                    "N": "Alhacén",
                    "T": "Esa pregunta no soy yo quien debe responderla. Dentro de poco vendrá otra persona, pueden preguntarle a ella cuando llegue."
                },
                {
                    "N": "Alhacén",
                    "T": "Solo les diré que el mundo no necesariamente se basa solamente en lo que es “correcto”. La corrección pura a veces no tiene ningún sentido."
                },
                {
                    "N": "_0",
                    "T": "¿Qué eran esas notas que dejaste con los documentos?"
                },
                {
                    "N": "_0",
                    "T": "¿Por qué las escribiste con una escritura antigua?"
                },
                {
                    "N": "Alhacén",
                    "T": "“Aunque los ideales elevados no puedan necesariamente resistir al nihilismo, es posible que las pequeñas decisiones sí”."
                },
                {
                    "N": "Alhacén",
                    "T": "“Los idealistas, por elección propia, buscan la felicidad para todos los demás, pero se la niegan a ellos mismos. Por tanto, nunca alcanzarán la frontera de la verdad a menos que se despojen del velo de ignorancia que nubla su vista”."
                },
                {
                    "N": "Alhacén",
                    "T": "Hay ciertas filosofías que nunca he podido aceptar. Incluso el propio Sachin no podía comprender la noción del sacrificio por el bien común."
                },
                {
                    "N": "Alhacén",
                    "T": "Desafortunadamente, cualquier punto de vista podrá encontrar sus seguidores, y la forma en la que vemos el mundo es lo que define nuestro destino."
                },
                {
                    "N": "Alhacén",
                    "T": "Bien, ya encontré lo que quería. Dejaré los documentos a su cuidado. Hasta otra."
                },
                {
                    "N": "_1005",
                    "T": "Espera, ¿solo viniste para leer esto? ¡Te perdiste una buena comida con amigos!"
                },
                {
                    "N": "Alhacén",
                    "T": "¿De verdad?... Ciertamente, esta era una buena ocasión para eso."
                },
                {
                    "N": "_1005",
                    "T": "Además, para una vez que Kaveh invitaba..."
                },
                {
                    "N": "Alhacén",
                    "T": "Entonces, estoy seguro de que me ha guardado las sobras. Hasta luego."
                },
                {
                    "N": "_1005",
                    "T": "Hala, y se fue... Pero parece que es cierto que esos documentos no lo han afectado para nada."
                },
                {
                    "N": "_1005",
                    "T": "Dijo que alguien vendría a ocuparse de este asunto. ¿Quién será?"
                },
                {
                    "N": "???",
                    "T": "Esperan un rato junto a los documentos..."
                },
                {
                    "N": "Nahida",
                    "T": "#¡{NICKNAME}, Paimon! Están aquí."
                },
                {
                    "N": "_1005",
                    "T": "¡Nahida! Oh, y... Don Sombrero también."
                },
                {
                    "N": "_1005",
                    "T": "Espera, ¿entonces fuiste tú quien le pidió participar en el Campeonato Interescolar?"
                },
                {
                    "N": "Nahida",
                    "T": "Así es, fui yo. ¿Les sorprende?"
                },
                {
                    "N": "_0",
                    "T": "Un poco..."
                },
                {
                    "N": "_0",
                    "T": "No mucho..."
                },
                {
                    "N": "_1005",
                    "T": "¿Sabías desde el principio que había un problema con la corona? Si es así, ¿por qué no la cambiaste desde un primer momento?"
                },
                {
                    "N": "Nahida",
                    "T": "Porque las investigaciones de Sachin no eran ningún despropósito. Se pasó toda su vida investigando sobre este asunto, y estos documentos son la prueba de ello."
                },
                {
                    "N": "Nahida",
                    "T": "Ellos son la cristalización genuina de su sabiduría. Aunque me preocupaba que estos documentos crearan problemas, tampoco podría borrar de un plumazo todos los esfuerzos de Sachin en busca de la verdad."
                },
                {
                    "N": "Nahida",
                    "T": "Así que le pedí a Don Sombrero que vigilase la competición."
                },
                {
                    "N": "???",
                    "T": "Pueden dejar de llamarme Don Sombrero ya."
                },
                {
                    "N": "Nahida",
                    "T": "¿Por qué? ¿No te gusta?"
                },
                {
                    "N": "???",
                    "T": "*Suspira*..."
                },
                {
                    "N": "Nahida",
                    "T": "Volviendo al tema. Si la persona elegida por Sachin no fuese capaz de continuar su investigación, o esta acarrease más sufrimiento a la gente, nuestro amigo del sombrero habría intervenido en el momento oportuno."
                },
                {
                    "N": "???",
                    "T": "Y todo para que su elegido rechazase de plano la investigación de toda su vida. Es de chiste."
                },
                {
                    "N": "Nahida",
                    "T": "También quería que aprovechases esta oportunidad para aprender a relacionarte mejor con la gente... Parece que no sirvió de nada."
                },
                {
                    "N": "???",
                    "T": "No te molestes. Todavía no he pagado la deuda que tengo contigo, lo último que quiero es hacerla más grande."
                },
                {
                    "N": "_1005",
                    "T": "Nahida, acabas de decir que la investigación de Sachin no era un despropósito, ¿eso quiere decir que la apruebas?"
                },
                {
                    "N": "Nahida",
                    "T": "Humm... Digámoslo así: para mí, la verdad es igual que un micóquero."
                },
                {
                    "N": "Nahida",
                    "T": "Si alguien solo viese los champiñones que llevan en el lomo, diría que los micóqueros son champiñones."
                },
                {
                    "N": "Nahida",
                    "T": "Si alguien solo viese su cuerpo, diría que un micóquero no es más que un jabalí."
                },
                {
                    "N": "Nahida",
                    "T": "Y si alguien ignorara su aspecto para fijarse en su utilidad, podría decir que los micóqueros son carne cruda."
                },
                {
                    "N": "Nahida",
                    "T": "Puede que todas estas conclusiones posean algún aspecto de la verdad, pero ninguna describe acertadamente lo que es un micóquero."
                },
                {
                    "N": "_1005",
                    "T": "Paimon cree que lo entiende, y a la vez no lo entiende..."
                },
                {
                    "N": "Nahida",
                    "T": "El mundo es igual. Nadie, incluida yo, es capaz de comprenderlo en su integridad. Todos estamos buscando la verdad."
                },
                {
                    "N": "Nahida",
                    "T": "Dentro de nuestro limitado conocimiento, habrá gente que creerá ciegamente en la belleza del mundo, mientras que otros pensarán que solo hay maldad en él."
                },
                {
                    "N": "Nahida",
                    "T": "En realidad, lo importante no es qué aspecto tenga el mundo ahora, sino en qué clase de mundo quiere que se convierta la gente. Por supuesto, yo tampoco puedo criticar a la gente y obligarles a actuar según mi opinión."
                },
                {
                    "N": "Nahida",
                    "T": "Al fin y al cabo, mi labor como Diosa de la Sabiduría solo consiste en guiar al conocimiento, sea el que sea, para que encuentre su propósito."
                },
                {
                    "N": "???",
                    "T": "Buen discurso, ¿pero qué piensas hacer con todos estos documentos?"
                },
                {
                    "N": "Nahida",
                    "T": "El sucesor electo, Kaveh, no quiere que se difundan, así que supongo que guardaré esta investigación sin dueño."
                },
                {
                    "N": "Nahida",
                    "T": "Sin embargo, que la investigación de Sachin se convierta en un conocimiento inactivo pasará también a formar parte de la verdad. Si en el futuro alguien quiere volver a andar por el mismo camino que anduvo Sachin, no se lo impediré."
                },
                {
                    "N": "Nahida",
                    "T": "También me intriga mucho comprobar si las nuevas generaciones en la Escuela de Etiología podrán comprender sus teorías y encontrar la forma de sobrepasar la desesperación."
                },
                {
                    "N": "???",
                    "T": "Hum, ¿y quién podría dar el perfil en la Escuela de Etiología?... Espera, no esperarás que me quede en esa Escuela, ¿no?"
                },
                {
                    "N": "???",
                    "T": "Ja, no recuerdo haberme convertido en erudito. ¿No te parezco suficientemente útil como prisionero?"
                },
                {
                    "N": "_1005",
                    "T": "Ya empezamos otra vez..."
                },
                {
                    "N": "Nahida",
                    "T": "¿Ah, sí? Entonces, has de saber que en Sumeru hasta los prisioneros tienen derecho a una educación."
                },
                {
                    "N": "Nahida",
                    "T": "Espero que, después de estudiar en la Escuela de Etiología, sepas resolver apropiadamente tu propio karma y pagar las viejas cuentas que tienes pendientes."
                },
                {
                    "N": "Nahida",
                    "T": "Yo revisaré personalmente la tesis que presentes al final de tus estudios. Espero que te apliques bien, Don Sombrero."
                },
                {
                    "N": "???",
                    "T": "Agh..."
                }
            ]
        ]
    }
}