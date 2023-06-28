import { locale } from '../global'

const pt = {
    header: {
        name: "",
        image: "",
        imageLabel: "",
        latitude: ,
        longitude: ,
        openingTime: "",
        closingTime: "",
        googleMaps: ""
    },
    body: [
        {
            title: "Descrição",
            data: [""]
        },
        {
            title: "Pontos de Interesse",
            data: [

            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [

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


const parqueEduardoVII = locale === 'pt-PT' ? pt : en

export { parqueEduardoVII }