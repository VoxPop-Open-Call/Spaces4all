import { locale } from '../../global'

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


const jardimFernanadoPessa = locale === 'pt-PT' ? pt : pt

export { jardimFernanadoPessa }