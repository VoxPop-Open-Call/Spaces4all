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
                [""]
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                [""]
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
                    latitude: ,
                    longitude: ,
                    description: ""
                },
                {
                    title: "Fim",
                    latitude:,
                    longitude: ,
                    description: ""
                }
            ]
            ,
            corners: [
                { direction: '', latitude: , longitude:  },
            ],
            optionalCheckpoints: [
                {
                    title: '',
                    latitude: ,
                    longitude: ,
                    description: ''
                },
            ]
        }
    ]
}

const en = {
    //tranlated data with the same format    
}


const locationName = locale === 'pt-PT' ? pt : en

export { locationName }
