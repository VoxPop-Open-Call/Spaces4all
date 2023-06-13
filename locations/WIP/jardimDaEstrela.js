import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim da Estrela",
        image: "https://i.ibb.co/Phzm6Nt/jardim-Da-Estrela.jpg",
        imageLabel: "Foto da entrada do jardim",
        latitude: 38.713657734828296,
        longitude: -9.159751724724138,
        openingTime: "07:00",
        closingTime: "12:00",
        googleMaps: "https://goo.gl/maps/4AUmpgWDemRbRR1B8"
    },
    body: [
        {
            title: "Descrição",
            data: ["O Jardim da Estrela, mais tarde renomeado Jardim Guerra Junqueiro, é um jardim público situado na freguesia da Estrela, em Lisboa, estando uma das suas entradas em frente da Basílica da Estrela. Foi construído ao estilo dos jardins ingleses, de inspiração romântica. Possui 4,6 hectares e encontra-se aberto ao público todos os dias, das sete horas da manhã até à meia-noite. Os patos e carpas do lago deliciam-se com a comida que algumas pessoas levam, dispondo o jardim também de um café e de belíssimos canteiros. "]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés com esplanada",
                "Biblioteca-quiosque",
                "Coreto",
                "Multiplos lagos"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Ginásio Publico",
                "Parque Infantil",
                "Parque de merendas"
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


const jardimDaEstrela = locale === 'pt-PT' ? pt : pt

export { jardimDaEstrela }