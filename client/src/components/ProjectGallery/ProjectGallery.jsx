import { Container } from "@mui/material"
import Banner from '../common/Banner/Banner';
import Footer from '../common/Footer/Footer';
import './ProjectGallery.scss'

function ProjectGallery() {
    const bannerTitle = "Project Gallery";
    const bannerDescription = "The excellent building services that you could only have imagined. The trustworthy business partner that you cannot miss.";

    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <Banner title={bannerTitle} description={bannerDescription} />
            Project Gallery
            <Footer />
        </Container>
    )
}

export default ProjectGallery