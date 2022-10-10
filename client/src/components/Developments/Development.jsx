import { Card, CardMedia, CardContent, Container, Grid, Typography } from "@mui/material"
import Banner from '../common/Banner/Banner';
import Footer from '../common/Footer/Footer';
import './Development.scss'

function Developments() {
    const bannerTitle = "Developments";
    const bannerDescription = "The excellent building services that you could only have imagined. The trustworthy business partner that you cannot miss.";
    const developments = [
        { id: 0, title: "Throsby, ACT", body: "This carefully designed suburb creates a private sanctuary feel, creating a peaceful suburban vibe.", image: "assets/images/throsby.jpg" },
        { id: 1, title: "Taylor, ACT", body: "Taylor offers a variety of choice, with a wide range of blocks, excellent community amenities and a natural setting.", image: "assets/images/taylor.png" },
        { id: 2, title: "Coombs, ACT", body: "Coombs nestled alongside the scenic Molonglo River Reserve, yet just 15km from the Canberra CBD, Coombs is a thriving community in the heart of the Molonglo Valley.", image: "assets/images/coombs.jpg" },
        { id: 3, title: "Whitlam, ACT", body: "Whitlam is where your future stories will live. A place full of opportunities, in an ideal location and surrounded on three sides by some of Canberra's renowned nature reserves.", image: "assets/images/whitlam.png" },
        { id: 4, title: "Ginninderry, ACT", body: "Ginninderry across the ACT/NSW border into a part of the Yass Valley. Ginninderry first suburb - Strathnairn - has set new benchmark for sustainable living. The next suburb – Macnamara – takes advantage of incredible views.Ginninderry will eventually have around 11,500 homes.", image: "assets/images/ginninderry.jpg" },
        { id: 5, title: "Googong, NSW ", body: "Googong is a new township located on the NSW/ACT border,  will eventually have 6,200 homes.", image: "assets/images/googong.jpg" },
    ]
    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <Banner title={bannerTitle} description={bannerDescription} />
            <Grid container spacing={5} mb={5}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", rowGap: "20px" }}>
                    {developments.map((development) => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" height="200" image={development.image} alt={development.title} objectFit="contain" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {development.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {development.body}
                                </Typography>
                            </CardContent>

                        </Card>
                    ))}
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Footer />
        </Container>
    )
}

export default Developments