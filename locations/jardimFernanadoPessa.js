import { locale } from '../global'

const pt = {
    header: {
        name: "Jardim Fernando Pessa",
        image: "https://i.ibb.co/P9gdyjK/jardim-Fernando-Pessoa.jpg",
        imageLabel: "Imagem do interior do jardim",
        latitude: 38.743570702042206,
        longitude: -9.138281977065871,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/qPT78RPpksAnt4qi7"
    },
    body: [
        {
            title: "Descrição",
            data: ["Jardim de Lisboa, cujo nome é uma homenagem a Fernando Pessa, jornalista português. Situa-se na Avenida de Roma, na freguesia do Areeiro. Localiza-se junto ao Fórum Lisboa, e era o local onde Fernando Pessa costumava dar passeios e andar de bicicleta. "]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Quiosque",
                "Parque canino",
                "Campo polidesportivo",
                "Fórum Lisboa"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "Wi-Fi",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Ginásio Publico",
                "Parque Infantil",
                "Parque de merendas",
            ]
        },
    ],
    tracks: [
        {
            name: "Para Todos",
            duration: "1h",
            checkpoints: [
                {
                    title: "Início",
                    latitude: 38.7434274,
                    longitude: -9.1381091,
                    description: "Ponto de partida"
                },
                {
                    title: "Conjunto escultório “A Família”",
                    latitude: 38.7434012,
                    longitude: -9.1376826,
                    description: "hiper-realista, composto por três peças em bronze: menina sentada num banquinho com uma borboleta na mão; senhora sentada num banquinho; e dois rapazes, em que o mais velho se encontra de pé ao lado do mais novo, que monta uma bicicleta. Esta obra do escultor Melício foi inaugurada em 2001."
                },
                {
                    title: "Monumento “Carta de Lisboa”",
                    latitude: 38.7432538,
                    longitude: -9.1372528,
                    description: "O mural, que resulta de uma iniciativa da Câmara Municipal de Lisboa e da Galeria Ratton, reúne a colaboração de artistas que desenharam algumas das palavras-chave da nova carta, e que doaram os originais das peças, incluindo Andreas Stöcklein, Eduardo Batarda, Graça Morais, Irene Buarque, Jorge Martins, Júlio Pomar, Lourdes Castro, Maria Beatriz e Pedro Proença, entre outros autores."
                },
                {
                    title: "Fim",
                    latitude: 38.7434002,
                    longitude: -9.138101,
                    description: ""
                }
            ]
            ,
            corners: [
                { "direction": "", "latitude": 38.7434274, "longitude": -9.1381091 }, { "direction": "", "latitude": 38.7434494, "longitude": -9.1377698 }, { "direction": "", "latitude": 38.7433887, "longitude": -9.1374318 }, { "direction": "", "latitude": 38.7432015, "longitude": -9.1371864 }, { "direction": "", "latitude": 38.7431031, "longitude": -9.1368632 }, { "direction": "", "latitude": 38.7431272, "longitude": -9.1365226 }, { "direction": "vire a direita", "latitude": 38.7429525, "longitude": -9.1362543 }, { "direction": "vire a direita", "latitude": 38.742941, "longitude": -9.1362745 }, { "direction": "", "latitude": 38.7430895, "longitude": -9.1365239 }, { "direction": "", "latitude": 38.7430749, "longitude": -9.1368619 }, { "direction": "", "latitude": 38.7431753, "longitude": -9.1372012 }, { "direction": "", "latitude": 38.7433646, "longitude": -9.1374426 }, { "direction": "", "latitude": 38.7434379, "longitude": -9.1377738 }, { "direction": "", "latitude": 38.7434002, "longitude": -9.138101 },
            ],
            optionalCheckpoints: [
                {
                    title: 'Fórum Lisboa',
                    latitude: 38.7435550,
                    longitude: -9.1379562,
                    description: ''
                },
                {
                    title: 'Parque Canino',
                    latitude: 38.7434483,
                    longitude: -9.1375244,
                    description: ''
                },
                {
                    title: 'Campo Polidesportivo',
                    latitude: 38.7430718,
                    longitude: -9.1361216,
                    description: ''
                },
                {
                    title: 'Parque Infantil',
                    latitude: 38.7429232,
                    longitude: -9.1365400,
                    description: ''
                },
                {
                    title: 'Café avenida de Roma',
                    latitude: 38.7430257,
                    longitude: -9.1371676,
                    description: ''
                },
            ]
        }
    ]
}

const en = {
    header: {
        name: "Fernando Pessa Garden",
        image: "https://i.ibb.co/P9gdyjK/jardim-Fernando-Pessoa.jpg",
        imageLabel: "Image of the interior of the garden",
        latitude: 38.743570702042206,
        longitude: -9.138281977065871,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/qPT78RPpksAnt4qi7"
    },
    body: [
        {
            title: "Description",
            data: ["Jardim de Lisboa, whose name is a tribute to Fernando Pessa, a Portuguese journalist. It is located on Avenida de Roma, in the parish of Areeiro. It is located next to Forum Lisboa, and was the place where Fernando Pessa used to give walks and cycling."]
        },
        {
            title: "Points of Interest",
            data: [
                "Kiosk",
                "dog park",
                "Multi-sport field",
                "Lisbon Forum"
            ]
        },
        {
            title: "Public utility places",
            data: [
                "Wifi",
                "Banks",
                "Drinkers",
                "Pet Friendly",
                "Public Gym",
                "Playground",
                "Snack Park"
            ]
        },
    ],
    tracks: [
        {
            name: "For All",
            duration: "1h",
            checkpoints: [
                {
                    title: "Start",
                    latitude: 38.7434274,
                    longitude: -9.1381091,
                    description: "Departure point"
                },
                {
                    title: "'The Family' sculptural set",
                    latitude: 38.7434012,
                    longitude: -9.1376826,
                    description: "hyper-realistic, made up of three bronze pieces: a girl sitting on a stool with a butterfly in her hand; a lady sitting on a stool; and two boys, in which the older one is standing next to the younger one, who is riding a bicycle. This work by the sculptor Melício was inaugurated in 2001."
                },
                {
                    title: "Monument “Carta de Lisboa”",
                    latitude: 38.7432538,
                    longitude: -9.1372528,
                    description: "The mural, which results from an initiative by the Lisbon City Council and Galeria Ratton, brings together the collaboration of artists who designed some of the key words of the new letter, and who donated the originals of the pieces, including Andreas Stöcklein, Eduardo Batarda, Graça Morais, Irene Buarque, Jorge Martins, Júlio Pomar, Lourdes Castro, Maria Beatriz and Pedro Proença, among other authors."
                },
                {
                    title: "End",
                    latitude: 38.7434002,
                    longitude: -9.138101,
                    description: ""
                }
            ]
            ,
            corners: [
                { "direction": "", "latitude": 38.7434274, "longitude": -9.1381091 }, { "direction": "", "latitude": 38.7434494, "longitude": -9.1377698 }, { "direction": " ", "latitude": 38.7433887, "longitude": -9.1374318 }, { "direction": "", "latitude": 38.7432015, "longitude": -9.1371864 }, { "direction": "", "latitude": 38.7431031, "longitude": -9.1368632 }, { "direction": "", "latitude": 38.7431272, "longitude": -9.1365226 }, { "direction": "turn right", "latitude": 38.7429525, "longitude": -9.1362543 }, { "direction": "turn right", "latitude": 38.742941, "longitude": -9.1362745 }, { "direction": "", "latitude": 38.7430895, "longitude": -9.1365239 }, { "direction": "", "latitude": 38.7430749, "longitude": -9.1368619 }, { "direction": "", "latitude": 38.7431753, "longitude": -9.1372012 }, { "direction": "", "latitude": 38.7433646, "longitude": -9.1374426 }, { "direction": "", "latitude": 38.7434379, "longitude": -9.1377738 }, { "direction": "", "latitude": 38.7434002, "longitude": -9.138101 },
            ],
            optionalCheckpoints: [
                {
                    title: 'Lisbon Forum',
                    latitude: 38.7435550,
                    longitude: -9.1379562,
                    description: ''
                },
                {
                    title: 'Canine Park',
                    latitude: 38.7434483,
                    longitude: -9.1375244,
                    description: ''
                },
                {
                    title: 'Sports Field',
                    latitude: 38.7430718,
                    longitude: -9.1361216,
                    description: ''
                },
                {
                    title: 'Kids Park',
                    latitude: 38.7429232,
                    longitude: -9.1365400,
                    description: ''
                },
                {
                    title: 'Café Avenida de Roma',
                    latitude: 38.7430257,
                    longitude: -9.1371676
                    ,
                    description: ''
                },
            ]
        }
    ]
}


const jardimFernanadoPessa = locale === 'pt-PT' ? pt : en

export { jardimFernanadoPessa }