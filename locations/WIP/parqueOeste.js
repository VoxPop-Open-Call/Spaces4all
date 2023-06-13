import { locale } from '../../global'

const pt = {
    header: {
        name: "Parque Oeste",
        image: "https://i.ibb.co/GCdN9Jy/parque-Oeste.jpg",
        imageLabel: "Imagem do interior do parque",
        latitude: 38.778316372043236,
        longitude: -9.15142671396042,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/4Fq8G4Zg9XeGpPrA9"
    },
    body: [
        {
            title: "Descrição",
            data: ["Construído em 2006, no âmbito do Plano de Urbanização da Alta de Lisboa, este parque de arquitetura moderna é o resultado de uma intervenção de requalificação profunda num espaço que estava subaproveitado. Com uma localização privilegiada, numa zona de vale, desempenha uma função ecológica fundamental, através de uma bacia de retenção que permite o aproveitamento das águas pluviais para a alimentação dos cursos de água, rega dos amplos relvados e manutenção sustentável de toda a vegetação existente no parque, um exemplo claro de utilização racional da água. Tem um extenso tapete verde atravessado por um grande curso de água e dispõe de equipamentos de fitness e circuito de manutenção para o exercício ao ar livre. Um espaço tranquilo, silencioso, para relaxar, dar longas caminhadas matinais ou de fim de tarde e conviver em família."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Miradouro",
                "Monumentos",
                "Parque canino"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "Bancos",
                "Pet Friendly",
                "Ginasio Publico"
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


const parqueOeste = locale === 'pt-PT' ? pt : pt

export { parqueOeste }