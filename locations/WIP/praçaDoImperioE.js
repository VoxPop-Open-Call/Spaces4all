import { locale } from '../../global'

const pt = {
    header: {
        name: "Praça do Império Garden",
        image: "https://i.ibb.co/w7XsL4w/pra-a-Do-Imperio.jpg",
        imageLabel: "Imagem aérea do parque",
        latitude: 38.69675711313405,
        longitude: -9.206193038184237,
        openingTime: "00:00",
        closingTime: "00:00",
        googleMaps: "https://goo.gl/maps/66iqykHSVBV9voVv6"
    },
    body: [
        {
            title: "Descrição",
            data: ["O Jardim da Praça do Império é um jardim situado em Belém, Lisboa. Possui uma área de 3,3 hectares. Encontra-se entre a Avenida da Índia e a Rua de Belém, perto do Mosteiro dos Jerónimos. Foi construído em 1940 por ocasião da Grande Exposição do Mundo Português, e foi requalificado e inaugurado novamente em 2023. Anteriormente, a zona era uma praia, conhecida como 'praia do Restelo'. Associado a esta praça, encontra-se o Jardim Vasco da Gama, um bonito espaço verde. O espaço conta com cerca de 5 hectares, delimitado a Norte por um notável conjunto arquitetónico dos séculos XVI e XVII, com amplas arcadas que albergam restaurantes com agradáveis esplanadas, perfeitas para períodos de lazer. Plantado no século XVIII, é constituído por um grande relvado central, albergando no centro um Monumento de homenagem a Vasco da Gama, que dá nome ao espaço. Tem também um pequeno parque infantil e alguns equipamentos para desporto."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Fonte",
                "Monumentos",
                "Pavilhão Sala Thai",
                "Esculuturas"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "WC",
                "Bancos",
                "Bebedouros",
                "Pet Friendly",
                "Parque Intantil"
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


const praçaDoImperioE = locale === 'pt-PT' ? pt : pt

export { praçaDoImperioE }