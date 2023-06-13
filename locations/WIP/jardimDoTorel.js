import { locale } from '../../global'

const pt = {
    header: {
        name: "Jardim do Torel",
        image: "https://i.ibb.co/dbQydFn/jardim-Do-Torrel-min.jpg",
        imageLabel: "Imagem do interior do parque",
        latitude: 38.71935138186481,
        longitude: -9.140788413936887,
        openingTime: "06:00",
        closingTime: "20:00",
        googleMaps: "https://goo.gl/maps/s8eBrKkzej9SmyGfA"
    },
    body: [
        {
            title: "Descrição",
            data: ["Está situado junto ao Campo dos Mártires da Pátria, na encosta virada para a Avenida da Liberdade, no denominado sítio do Torel, espaço ocupado por um conjunto de palacetes construído ao gosto revivalista do século XIX. Tem três entradas, a principal pela Rua de Júlio de Andrade, perto do Elevador do Lavra, outra mais abaixo, na Rua do Telhal e por fim junto à escola primária da freguesia de são José. O nome tem a sua origem numa família, provavelmente de origem holandesa, que habitou o local. O jardim é, mercê da localização no topo da colina de Santana, um miradouro com vistas para a Baixa, o Rio Tejo e a Sétima Colina. Desde 2014 o jardim transforma-se em praia urbana durante o Verão.  "]
        },
        {
            title: "Pontos de Interesse",
            data: [
                "Quiosque Café",
                "Miradouro",
                "Fontes"
            ]
        },
        {
            title: "Locais de utilidade pública",
            data: [
                "Bebedouros",
                "Bancos",
                "Pet Friendly",
                "Ginásio Publico",
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


const jardimDoTorel = locale === 'pt-PT' ? pt : pt

export { jardimDoTorel }