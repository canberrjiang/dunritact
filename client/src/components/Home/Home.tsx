import { Container } from "@mui/material"
import HeroUnit from "./HeroUnit/HeroUnit"

function Home() {
    return (
        <Container maxWidth={false}>
            {/* Hero Unit */}
            <HeroUnit />
            {/* End Hero Unit */}
        </Container>
    )
}

export default Home