import { Card, CardContent, CardMedia, Container, Grid, Typography, Box } from "@mui/material"
import './Services.scss'
import Banner from '../common/Banner/Banner';
import Footer from '../common/Footer/Footer';

const bannerTitle = "Services";
const bannerDescription = "The excellent building services that you could only have imagined. The trustworthy business partner that you cannot miss.";
const services = [
    { index: 0, title: "Custom Homes", body: "Custom Homes: Create a home as individual as you are. When creating a custom home, there is a pride that comes from shaping your living space. An exceptional feature wall or a large, luxury bedroom are some of the options that can help to truly personalise your place. That’s why, at Dunrite, we treat each client with a personal touch, to really understand what they want from a customized house. We want to be part of your house building experience. Nothing makes us happier than seeing content customers in an amazing new home.", image: "assets/images/service-image-1.png", link: "" },
    { index: 1, title: "Knock Down Rebuild", body: "a knock down and build allows you to design a new home in location you love. Doesn’t mean you have to say goodbye to your neighbourhood. Dunrite can help you design and build the home, and discover how good life could be in your dream home.", image: "assets/images/service-image-1.png", link: "" },
    { index: 2, title: "Renovations and Additions", body: "Think about an extra living area for the kids to play in or need a double garage, or renovating your current home. Dunrite will help you create your dream home, whether you’re needing to cater for a growing family, add entertaining area or living space, or looking to achieve a more functional layout. Our team standing by to facilitate your new beginning.", image: "assets/images/service-image-1.png", link: "" },
    { index: 3, title: "Home & Land", body: "If you’re dreaming of building a new home but don’t have a block to build on. We offer house and land packages with carefully selected blocks and matched home designs to best suit your needs.", image: "assets/images/partner-logo.png", link: "" },
]

function Services() {
    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Banner title={bannerTitle} description={bannerDescription} />
            <Box maxWidth="xl">
                {services.map((service) => (
                    <Grid component="div" href="#" sx={{ mt: 20 }}>
                        <Card sx={{ display: "flex", boxShadow: "none" }} >
                            {service.index % 2 === 0 ?
                                <>
                                    <CardMedia component="img" sx={{ width: 640, mr: 2, display: { xs: "none", sm: "block" } }} image={service.image} alt={service.title} />
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h2" className="service__title">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph className="service__body">
                                            {service.body} {service.link && (<a href={service.link} alt="partner"> here. </a>)}
                                        </Typography>
                                    </CardContent></> :
                                <>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h2" className="service__title">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph className="service__body">
                                            {service.body} {service.link && (<a href={service.link} target="_blank" rel="noreferrer" alt="partner"> here. </a>)}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia component="img" sx={{ width: 640, mr: 2, display: { xs: "none", sm: "block" } }} image={service.image} alt={service.title} />
                                </>}
                        </Card>
                    </Grid>
                ))}
            </Box>
            <Footer />
        </Container>
    )
}

export default Services