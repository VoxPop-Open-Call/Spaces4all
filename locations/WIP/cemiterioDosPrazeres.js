import { locale } from '../../global'

const pt = {
    header: {
        name: "Cemitério dos Prazeres",
        image: "https://i.ibb.co/Yd76Lcg/cemiterio-De-Prazeres.jpg",
        imageLabel: "Imagem de sepulturas",
        latitude: 38.714040390731455,
        longitude: -9.169825094852929,
        openingTime: "09:00",
        closingTime: "17:00",
        googleMaps: "https://goo.gl/maps/rkhr3fzvbp7TRRaQ7"
    },
    body: [
        {
            title: "Descrição",
            data: ["O Cemitério dos Prazeres fica situado na parte ocidental de Lisboa.  Após a cidade de Lisboa ter sido atingida por um surto de cólera mórbus, em 1833, foi urgente a criação de grandes cemitérios, tendo sido criado assim o Cemitério dos Prazeres, juntamente com o Cemitério do Alto de São João.  Constituído quase exclusivamente por jazigos particulares, é possível admirar monumentos de autores anónimos, lado a lado com peças de arquitetos de renome do século XIX até aos nossos dias, bem como o trabalho de alguns dos nossos maiores escultores que desta forma se perpetuaram através da sua magnífica obra. Reza a História que naquele local existiu uma fonte considerada santa e milagrosa por aparecer junto dela uma imagem da Virgem Maria. E logo ali se construiu uma ermida dedicada a Nossa Senhora dos Prazeres. "]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Secretaria do Cemitério dos Prazeres",
                "Sala de Espera do Cemitério dos Prazeres",
                "Capela do Cemitério dos Prazeres",
                "Monumento Anti-Ditadura"

            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "bebedouros"
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


const cemiterioDosPrazeres = locale === 'pt-PT' ? pt : pt

export { cemiterioDosPrazeres }