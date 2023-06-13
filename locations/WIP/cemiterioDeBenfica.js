import { locale } from '../../global'

const pt = {
    header: {
        name: "Cemitério de Benfica",
        image: "https://i.ibb.co/8DfMqXT/cemiterio-De-Benfica.jpg",
        imageLabel: "Imagem da capela principal do cemitério",
        latitude: 38.757228919609055,
        longitude: -9.20189870759606,
        openingTime: "09:00",
        closingTime: "17:00",
        googleMaps: "https://goo.gl/maps/WNuQ7oYZKnCD3s6KA"
    },
    body: [
        {
            title: "Descrição",
            data: ["Construído em 1869, por iniciativa do Município de Lisboa, o Cemitério de Benfica, acolheu as ossadas provenientes dos cemitérios das paróquias de Benfica e de Carnide. É um dos principais cemitérios públicos que servem a cidade de Lisboa, sendo circunscrito a várias freguesias. Além das numerosas sepulturas temporárias dispõe também de sepulturas perpétuas, jazigos particulares e municipais, além de ossários."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Capelas",
                "Sepulturas",
                "Secretária do Cemitério"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros"
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


const cemiterioDeBenfica = locale === 'pt-PT' ? pt : pt

export { cemiterioDeBenfica }