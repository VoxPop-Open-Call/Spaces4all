import { locale } from '../../global'

const pt = {
    header: {
        name: "Parque Gonçalo Ribeiro Telles",
        image: "https://i.ibb.co/hK10fbJ/parque-Gon-alo-Ribeiro.webp",
        imageLabel: "Imagem do gramado no interior do parque",
        latitude: 38.73793087288956,
        longitude: -9.157972221451674,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/SRyUqJxvKErZfsSeA"
    },
    body: [
        {
            title: "Descrição",
            data: ["Inaugurado em 2021, o nome deste Parque foi dado em homenagem a Gonçalo Ribeiro Telles, arquiteto paisagista, falecido em 2020. Uma figura incontornável da arquitetura paisagista portuguesa, e personalidade a quem o município de Sintra muito deve, esteve na génese do projeto de arquitetura do Bairro de Mira Sintra e da criação da Área de Paisagem Protegida Sintra-Cascais, a qual deu origem ao Parque Natural Sintra-Cascais. Ocupa mais de seis hectares e liga a Fundação Calouste Gulbenkian, a sul, ao corredor verde de Monsanto."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Teatro da Comuna",
                "Parque Canino",
                "Praça da Espanha"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [

                "Bancos",
                "Pet Friendly",
                "Ginásio Publico Infantil",
                "Parque Infantil",

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


const parqueGonçaloRibeiro = locale === 'pt-PT' ? pt : pt

export { parqueGonçaloRibeiro }