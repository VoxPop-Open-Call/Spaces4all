import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim da Cerca da Graça",
        image: "https://i.ibb.co/HnSxBSv/jardim-Cerca-Da-Gra-a.jpg",
        imageLabel: "Imagem do interior do parque",
        latitude: 38.71813016980762,
        longitude: -9.131987190460311,
        openingTime: "09:00",
        closingTime: "21:00",
        googleMaps: "https://goo.gl/maps/ifrXZ2yK9CYjVvRTA",
    },
    body: [
        {
            title: "Descrição",
            data: ["Com uma área de 1,7 hectares, é o maior espaço verde de acesso público da zona histórica. É um espaço verde que se situa no interior da cerca do antigo convento da Graça, edifício atualmente ocupado pela Guarda Nacional Republicana. O jardim resulta da requalificação de uma parte da cerca e respetiva abertura ao público, tendo também uma função de atravessamento, com novas ligações entre os bairros da Graça e da Mouraria, já que dispõe de três entradas principais: uma junto ao Convento da Graça, outra na Calçada do Monte, a meio da encosta, e por fim uma na Mouraria, na zona das Olarias (um pouco acima do novo Centro de Inovação da Mouraria / Quarteirão dos Lagares). O jardim possui três miradouros, um relvado central, um parque de merendas e um pomar. Está ainda dotado com um quiosque com esplanada e um parque infantil."]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Cafés com esplanada",
                "Multiplos miradouros",
                "Pomar",
                "Parque canino"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "Bancos",
                "Pet Friendly",
                "Parque Infantil"
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


const jardimCercaDaGraça = locale === 'pt-PT' ? pt : pt

export { jardimCercaDaGraça }