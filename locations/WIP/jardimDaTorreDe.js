import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim da Torre de Belém",
        image: "https://i.ibb.co/Qphy8bf/jardim-Da-Torre-De-min.jpg",
        imageLabel: "Foto da Torre de Belém ao longe",
        latitude: 38.69362642563961,
        longitude: -9.213773680029844,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/FsGr7VBt8EDTkAjE8"
    },
    body: [
        {
            title: "Descrição",
            data: ["Encontra-se junto à Torre de Belém. Foi construído em 1940, por ocasião da Grande Exposição do Mundo Português, e tem apenas 4,5 hectares. Está implantado no local onde funcionou, até meados do séc. XX, a 'Fábrica do Gás de Belém'. O jardim atual foi projetado pelo arquiteto paisagista António Viana Barreto em 1954."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés",
                "Lago"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros",
                "Pet Friendly"
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


const jardimDaTorreDe = locale === 'pt-PT' ? pt : pt

export { jardimDaTorreDe }