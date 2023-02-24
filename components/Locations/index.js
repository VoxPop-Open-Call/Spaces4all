import { data } from "./data";
import { Container } from "./styledLocations";
import { Card } from "../Card";



export default function Locations() {
    return (
        <Container >
            {data.map((location) => (
                <Card
                    name={location.header.name}
                    image={location.header.image}
                    lat={location.header.lat}
                    lon={location.header.lon}
                    openingTime={location.header.openingTime}
                    closingTime={location.header.closingTime}
                    key={location.id}
                    trackCount={Object.keys(location.tracks).length}

                />
            ))}
        </Container>)
}