import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim Amália Rodrigues",
        image: "https://i.ibb.co/1M8RD94/jardim-Amalia-Rodrigues.jpg",
        imageLabel: "Imagem do espelho d'agua central",
        latitude: 38.730792420941945,
        longitude: -9.154292265268559,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/Wyc1pLJbnSgMz5cSA"
    },
    body: [
        {
            title: "Descrição",
            data: ["Inaugurado em 1996 com a designação de Alto do Parque, foi renomeado em 2000 para homenagear a fadista Amália Rodrigues. Está localizado a norte do Parque Eduardo VII, numa área central e das mais altas da cidade, possuindo magníficas vistas. Possui um grande anfiteatro virado para o vale da Avenida da Liberdade. Este jardim faz parte do Corredor Verde, que une o Parque Eduardo VII a Monsanto."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Miradouro",
                "Snack bar e restaurante",
                "Lago"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "bancos",
                "Pet friendly",
                "Ginásio Publico"
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


const jardimAmaliaRodrigues = locale === 'pt-PT' ? pt : pt

export { jardimAmaliaRodrigues }