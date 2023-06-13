import { locale } from '../../global'

const pt = {
    header: {
        name: "Campo dos Mártires da Pátria",
        image: "https://i.ibb.co/1Myjf7F/campo-Martires-Da-Patria.jpg",
        imageLabel: "Imagem de uma estatua dentro do campo",
        latitude: 38.72049721764171,
        longitude: -9.140005199131483,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/gPcgGgyBVVqXoFy96",
    },
    body: [
        {
            title: "Descrição",
            data: ["Conhecido também por Campo de Santana, é um espaço carregado de história, situado na zona central de Lisboa, que serviu de matadouro no século XVI e que conheceu vários usos ao longo dos últimos dois séculos, como sejam uma praça de touros, de 1831 a 1889, a realização da Feira da Ladra, de 1835 a 1882 e, ainda um mercado de hortaliças, em meados do século XIX. Em 1879, passou a designar-se Campo dos Mártires da Pátria, em memória do enforcamento no local, no dia 18 de Outubro de 1817, dos onze companheiros de Gomes Freire de Andrade suspeitos de conspiração contra o general Beresford, presidente da Junta Governativa."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Restaurantes",
                "Campo polidesportivo",
                "Parque Canino",
                "Lagos"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros",
                "Pet friendly",
                "Ginásio publico",
                "Parque Infantil",
                "Semáforos"
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

            ]
        }
    ]
}

const en = {}


const jardimCampoMartiresDa = locale === 'pt-PT' ? pt : pt

export { jardimCampoMartiresDa }