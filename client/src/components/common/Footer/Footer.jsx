import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Divider, Container } from "@mui/material";
import Logo from '../../../assets/images/logo.png';
import './Footer.scss';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
            {' - Created by MK Intelli Agent'}
        </Typography>
    );
}

function Footer(props) {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        if (location.pathname === "/") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [location, isHome])

    return (
        <Container maxWidth={false} sx={{ bgcolor: props.isHome ? "#fff" : "#F8F6F5", display: props.isHome ? "none" : "block" }}>
            <Box sx={{ maxWidth: 1400, p: 6, margin: "auto", display: { xs: "none", md: "flex" } }} component="footer">
                <Grid container spacing={5} my={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={3}>
                        <img width={150} height={100} src={Logo} alt="logo" />
                    </Grid>
                    <Grid xs={9} spacing={2} container>
                        <Grid container xs={3}>
                            <Grid item>
                                <Divider></Divider>
                                <Typography variant="subtitle1" my={2}>View on maps</Typography>
                                <Typography variant="subtitle1" my={2}>Phillip</Typography>
                                <Typography variant="body2">48 Corina Street, Phillip, ACT 2606</Typography>

                            </Grid>
                            <Grid item>
                                <Divider></Divider>
                                <Typography variant="subtitle1" my={2}>Email</Typography>
                                <Typography variant="body2">dunrite@dunriteact.com.au</Typography>
                            </Grid>
                            <Grid item>
                                <Divider></Divider>
                                <Typography variant="subtitle1" my={2}>Phone</Typography>
                                <Typography variant="body2">0456 789 767</Typography>
                            </Grid>
                        </Grid>
                        <Grid item my={2}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.342633505013!2d149.08203271578168!3d-35.34714220471906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17b4bcfdd9a85d%3A0x1e30482f4984c3fd!2s48%20Corinna%20St%2C%20Phillip%20ACT%202606!5e0!3m2!1sen!2sau!4v1657426231866!5m2!1sen!2sau" width="600" height="450" frameBorder={0} title="office" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid>
                    </Grid>
                </Grid >
            </Box >
            <Box sx={{ margin: "auto", display: { xs: "flex", md: "none" } }} component="footer">
                <Grid container >
                    <Grid spacing={2} container >
                        <Grid item width="100%">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13018.506934634015!2d149.0650935346656!3d-35.340089534402054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17b46607c66649%3A0x500ea6ea7695b50!2sLyons%20ACT%202606!5e0!3m2!1sen!2sau!4v1648360818442!5m2!1sen!2sau" title="office" width="100%" height="500px" allowfullscreen="" frameBorder={0} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid>
                        <Grid container spacing={5} pl={2} mb={3} sx={{ display: "flex" }} flexDirection="column">
                            <Grid item>
                                <Typography variant="subtitle1" my={2}>Location</Typography>
                                <Typography variant="subtitle1" my={2}>Lyons</Typography>
                                <Typography variant="body2">Lyons ACT 2606</Typography>

                            </Grid>
                            <Grid item>
                                <Divider></Divider>
                                <Typography variant="subtitle1" my={2}>Email</Typography>
                                <Typography variant="body2">dunrite@dunriteact.com.au</Typography>
                            </Grid>
                            <Grid item>
                                <Divider></Divider>
                                <Typography variant="subtitle1" my={2}>Phone</Typography>
                                <Typography variant="body2">0456 789 767</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Box >
            <Copyright />
        </Container >
    )
}

export default Footer