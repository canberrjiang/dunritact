import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Banner from "../common/Banner/Banner";
import Footer from '../common/Footer/Footer';


const bannerTitle = "Projects";
const bannerDescription = "The excellent building services that you could only have imagined. The trustworthy business partner that you cannot miss.";

function Projects() {
    const items = [
        {
            index: 0,
            name: "Snapper",
            landSize: "468 m2",
            houseSize: "321.25 m2",
            description: "The house is designed double storey with 3 bedrooms and 3 bathrooms. It also includes a large swimming pool and outdoor living area.",
            url: "assets/images/project-image-1.png",
        },
        {
            index: 1,
            name: "Taylor Hill",
            landSize: "630 m2",
            houseSize: "326.56 m2",
            description: "The house is designed double storey with 5 bedrooms, 3 bathrooms, and 2 living rooms. It offering great view of Taylor landscape. It is ideal for large families and high quality of life families.",
            url: "assets/images/project-image-2.png",
        },
        {
            index: 2,
            name: "Laffan",
            landSize: "450 m2",
            houseSize: "227.68 m2",
            description: "Designed to suit every stage of life. A very stylish single storey house completes with 4 bedrooms, 2 bathrooms, double garage and 2 living rooms. This is an ideal for first home buyers, growing families and eager investors.",
            url: "assets/images/project-image-3.png",
        },
        {
            index: 3,
            name: "Robin",
            landSize: "450 m2",
            houseSize: "227.68 m2",
            description: "Simple and open, this single storey house will make your heart sing from the moment you open the door. Designed with 4 bedrooms, 3 bathroom, 2 living rooms, it offering all the instruments required for every lifestyle.",
            url: "assets/images/project-image-4.png",
        },
    ]
    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Banner title={bannerTitle} description={bannerDescription} />
            <Grid container xs={12} spacing={5} >
                {items.map((item) => (
                    <Grid item xs={12}>

                        <Card sx={{ display: "flex", boxShadow: "none", alignItems: "center", justifyContent: "center" }} >
                            <CardMedia component="img" sx={{ width: 640, mr: 2, display: { xs: "none", sm: "block" } }} image={item.url} alt={item.name} />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h5" className="service__title" mb={5}>
                                    {item.name}
                                </Typography>
                                <Typography variant="paragraph" paragraph className="service__body">
                                    Land Size: {item.landSize}
                                </Typography>
                                <Typography variant="paragraph" paragraph className="service__body">
                                    House Size: {item.houseSize}
                                </Typography>
                                <Typography variant="paragraph" paragraph className="service__body">
                                    Description: {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
                }
            </Grid >
            <Footer />
        </Container >
    )
}

export default Projects