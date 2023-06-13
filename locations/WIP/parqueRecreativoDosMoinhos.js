import { locale } from '../../global'

const pt = {
    header: {
        name: "Parque dos Moinhos de Santana",
        image: "https://i.ibb.co/0r1jLk7/parque-Recreativo-Dos-Moinhos-min.jpg",
        imageLabel: "Foto do interior do parque",
        latitude: 38.70937186542055,
        longitude: -9.205738247960321,
        openingTime: "09:00",
        closingTime: "18:00",
        googleMaps: "https://goo.gl/maps/Rs25J44ApvuMvPF49"
    },
    body: [
        {
            title: "Descrição",
            data: ["Parque situado em Lisboa, na freguesia de Belém, nas imediações do Parque Florestal de Monsanto. Deve o seu nome à presença de dois moinhos de vento, os Moinhos de Santana, na zona mais elevada do espaço. Possui uma área de cinco hectares. O parque está aberto ao público desde 1997, como grande área de lazer e recreio, enquadrando os moinhos numa ampla zona verde com relvados, muitas árvores e arbustos."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés",
                "Restaurantes",
                "Parque Canino",
                "Mini golfe",
                "Miradouro",
                "Skatepark",
                "Anfiteatro",
                "Fonte Central",
                "Lago",
                "Coreto de merendas"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WC",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Parque Intantil",
                "Parque de Merendas"
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
                    latitude: -9.154292265268559,
                    longitude: 38.730792420941945,
                    description: "Ponto de partida"
                },
                {
                    title: "Fim",
                    latitude: -9.154292265268559,
                    longitude: 38.730792420941945,
                    description: ""
                }
            ]
            ,
            corners: [
                { direction: '', latitude: 38.730792420941945, longitude: -9.154292265268559 },
            ],
            optionalCheckpoints: [
                {
                    title: '',
                    latitude: -9.154292265268559,
                    longitude: 38.730792420941945,
                    description: ''
                },
            ]
        }
    ]
}

const en = {}


const parqueRecreativoDosMoinhos = locale === 'pt-PT' ? pt : pt

export { parqueRecreativoDosMoinhos }