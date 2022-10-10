import { Box, Container, Typography, Divider } from "@mui/material"
import "./Banner.scss"

const Banner = (props) => {
    return (
        <Box
            sx={{
                pt: 8,
                pb: 6,
            }}

            className="banner"
            maxWidth="xl"
        >
            <Container className="banner__section" sx={{ display: { xs: "none", md: "block" } }}>
                <Typography variant="h1" component="h1" align="left" color="text.primary" paragraph >
                    {props.title}
                </Typography>

                <Typography variant="h4" align="center" color="text.primary" paragraph>
                    {props.description}
                </Typography>
            </Container>
            <Container sx={{ display: { xs: "block", md: "none" } }}>
                <Typography variant="h1" component="h1" align="left" color="text.primary" paragraph >
                    {props.title}
                </Typography>

                <Typography variant="h4" align="center" color="text.primary" paragraph>
                    {props.description}
                </Typography>
            </Container>
        </Box>
    )
}

export default Banner