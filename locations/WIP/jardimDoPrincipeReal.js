import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim Do Principe Real",
        image: "https://i.ibb.co/mF5thmk/jardim-Do-Principe-Real-min.jpg",
        imageLabel: "",
        latitude: 38.71636410853407,
        longitude: -9.147980749379398,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/ukbg5ULvB11AfUxv7",
    },
    body: [
        {
            title: "Descrição",
            data: ["Oficialmente designado Jardim França Borges, é localizado perto do Bairro Alto. Com traçado romântico, foi construído em meados do séc. XIX. Como aspetos a assinalar temos a existência de um Cedro-do-Buçaco (Cupressus lusitanica), com mais de 20 metros de diâmetro, e que é uma das árvores que está classificada como sendo de interesse público neste local, e o reservatório subterrâneo de água da Patriarcal. O mercado semanal de produtos de agricultura biológica realizado aos sábados é um dos muitos eventos que aqui se realizam."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés com esplanada",
                "Quiosques",
                "Tabacaria",
                "Reservatório",
                "Ponto de informação"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs (pagos)",
                "Bancos",
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


const jardimDoPrincipeReal = locale === 'pt-PT' ? pt : pt

export { jardimDoPrincipeReal }