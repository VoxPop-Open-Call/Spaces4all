import { locale } from "../../global"

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
            checkpoints: [, 38.7168603
                {
                    title: "Início",
                    latitude: ,
                    longitude:,
                    description: "Ponto de partida"
                },
                {
                    title: "Monumento não identificado",
                    latitude: 38.7168603,
                    longitude: -9.1322511,
                    description: "Instalação artística de um pássaro, possivelmente um Corvo."
                },
                {
                    title: "Fim",
                    latitude: ,
                    longitude: ,
                    description: ""
                }
            ]
            ,
            corners: [
                { direction: "", latitude: 38.730792420941945, longitude: -9.154292265268559 },
            ],
            optionalCheckpoints: [
                {
                    title: "Esplanada Café “Quiosque do Jardim da Cerca da Graça”",
                    latitude: 38.7178585,
                    longitude: -9.1321304,
                    description: ""
                },
                {
                    title: "Esplanada Café “Café da Graça”",
                    latitude: 38.7165715,
                    longitude: -9.1315243,
                    description: ""
                },
                {
                    title: "Miradouro Sophia de Mello Breyner Andersen",
                    latitude: 38.7164040,
                    longitude: -9.1314867,
                    description: "Localizado junto à Igreja e antigo Convento da Graça, é um espaço calcetado, que oferece ao transeunte a sombra de alguns pinheiros-mansos e alguns bancos, onde é possível descansar enquanto nos deleitamos com um lindíssimo panorama sobre a cidade de Lisboa e a foz do Rio Tejo."
                },
                {
                    title: "Corredor com bancos e Miradouro",
                    latitude: 38.7178773,
                    longitude: -9.1317952,
                    description: ""
                },
                {
                    title: "Pomar",
                    latitude: 38.7174546,
                    longitude: -9.1325730,
                    description: ""
                },
                {
                    title: "Parque Canino",
                    latitude: 38.7176178,
                    longitude: -9.1326883,
                    description: ""
                },
            ]
        }
    ]
}

const en = {}


const jardimCercaDaGraça = locale === "pt-PT" ? pt : pt

export { jardimCercaDaGraça }