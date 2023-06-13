import { locale } from '../../global'

const pt = {
    header: {
        name: "Parque da Bela Vista",
        image: "https://i.ibb.co/Y0Yd8kj/parque-Da-Bela-Vista-min.jpg",
        imageLabel: "Interior do parque",
        latitude: 38.750588431214815,
        longitude: -9.124179400677129,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/sFKdLJjkY2PL1g9WA"
    },
    body: [
        {
            title: "Descrição",
            data: ["Um parque de grande extensão, é uma antiga quinta cujo aspeto rural foi preservado. Na sua extensa área encontram-se vários exemplos de fauna e flora tipicamente portuguesas, destacando-se uma grande variedade de aves. Conjuga zonas arbóreas com vastas áreas abertas, em tempos campos de cultivo de cereais. Integra um recinto polidesportivo, um parque de merendas, um miradouro e uma escola de tráfego. É atualmente usado para o festival Rock in Rio, quando este se realiza em Lisboa. O Parque do Vale da Montanha tem 11 hectares de caminhos pedonais. O nome “Montanha” vem de uma antiga quinta que aqui existia e que até há pouco tempo partilhou o terreno com hortas e com construções de habitação ilegal nas últimas décadas do século XX, foi reabilitado, em 2015, no âmbito do desenvolvimento do Corredor Verde Oriental de Lisboa, constituindo uma linha de continuidade em relação ao Parque da Bela Vista, sendo não apenas um espaço verde, mas também de ligação a outros espaços verdes envolventes. Tem uma área de recreio com equipamento temático e um aparelho lúdico de grande dimensão, um quiosque do ramo alimentar e duas praças. Existem vários caminhos pedonais ligados à rede de percursos e corredores do Parque da Bela Vista. "]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Geomonumento",
                "Parque Canino",
                "Miradouro",
                "Snack bar e Cafés",
                "Casa das pedras - Zona de a colhimento temporário"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
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


const parqueDaBelaVIsta = locale === 'pt-PT' ? pt : pt

export { parqueDaBelaVIsta }