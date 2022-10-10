import { Container, Box, Typography } from "@mui/material"
import Logo from '../../../assets/images/logo.png'
import './HeroUnit.scss'

function HeroUnit() {
    return (
        <Box
            className="heroUnit"
        >
            <Container maxWidth="md" sx={{ mb: 6 }}>
                <img src={Logo} title="logo" className="logo" alt="dunrite" />
            </Container>
            <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="#fff" paragraph>
                    Dunrite Building Services Pty Ltd is a Building construction company located in Canberra, focusing on residential construction, renovation, extensions, and knock down rebuild across the ACT and surrounding region.
                </Typography>
            </Container>
        </Box>
    )
}

export default HeroUnit