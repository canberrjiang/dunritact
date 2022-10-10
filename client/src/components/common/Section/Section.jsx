import { Box, Typography } from "@mui/material"
import './Section.scss';

function Section() {
    return (
        <Box className="section">
            <Typography variant="h2" py={10}> Home & Land</Typography>
            <Typography variant="h5" maxWidth={800} sx={{ margin: "auto" }}> If you’re dreaming of building a new home but don’t have a block to build on. We offer house and land packages with carefully selected blocks and matched home designs to best suit your needs. Please contact our partner agent below.</Typography>
            <a href="https://easyhomefamily.com.au/" rel="noreferrer" target="_blank"><img src="assets/images/partner-logo.png" alt="parter"></img></a>
        </Box >
    )
}

export default Section;