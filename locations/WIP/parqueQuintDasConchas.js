import { locale } from '../../global'

const pt = {
    header: {
        name: "Parque da Quintas das Conchas e dos Lilases",
        image: "https://i.ibb.co/9W501wv/parque-Da-Quinta-Das-Conchas.jpg",
        imageLabel: "Imagem do lago e pier no interior do parque",
        latitude: 38.76950774909423,
        longitude: -9.155274566943199,
        openingTime: "06:45",
        closingTime: "12:00",
        googleMaps: "https://goo.gl/maps/CZGFq6xQV4ZoaGwU7"
    },
    body: [
        {
            title: "Descrição",
            data: ["A Quinta das Conchas remonta ao século XVI. Após ter passado por várias famílias de proprietários acaba por ser adquirida por Francisco Mantero, em 1899. Tendo feito fortuna em São Tomé e Príncipe, Mantero arquitetou a Quinta dos Lilases à imagem da colónia portuguesa à data: o edifício existente foi reconvertido em mansão de estilo colonial enquanto o lago foi guarnecido com duas ilhas arborizadas, que simbolizam as ilhas de São Tomé e Príncipe. Em 1966 os descendentes de Francisco Mantero 'transferem' para a Câmara Municipal de Lisboa a gestão e preservação da Quinta. Dá o seu nome a um bairro e a uma estação de metro. Trata-se da terceira maior mancha verde de Lisboa"]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés",
                "Restaurantes",
                "Parque Canino",
                "Livraria ao ar livre",
                "Quiosque de informações",
                "Anfiteatro",
                "Queda de Água",
                "Mina de Água",
                "Tanque de Água"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WCs",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Ginásio Publico Infantil",
                "Parque Infantil",
                "Parque de merendas",
                "Parque de estacionamento"
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


const parqueQuintDasConchas = locale === 'pt-PT' ? pt : pt

export { parqueQuintDasConchas }