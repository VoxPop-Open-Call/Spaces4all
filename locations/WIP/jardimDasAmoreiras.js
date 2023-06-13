import { locale } from '../../global'

const pt = {
    header: {
        name: "Amoreiras Garden",
        image: "https://i.ibb.co/MgB6nVf/jardim-Das-Amoeiras.jpg",
        imageLabel: "Foto Do interior do jardim",
        latitude: 38.72162500755987,
        longitude: -9.155798523398087,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/92T3Hdpgt5JB2VUa7",
    },
    body: [
        {
            title: "Descrição",
            data: ["O Jardim das Amoreiras, formalmente intitulado Jardim Marcelino Mesquita, é um jardim situado na Praça das Amoreiras. O jardim é delimitado em parte pelo Aqueduto das Águas Livres e encontra-se sobre a Mãe d'Água, local de abastecimento histórico de água à cidade de Lisboa e atual Museu da Água."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Fontanário",
                "Cafés",
                "Reservatório"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Parque infantil"
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


const jardimDasAmoreiras = locale === 'pt-PT' ? pt : pt

export { jardimDasAmoreiras }