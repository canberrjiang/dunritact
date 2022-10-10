import { useState } from 'react';
import { Box, Container, TextField, Button, Grid } from "@mui/material";
import Banner from "../common/Banner/Banner";
import './ContactUs.scss';
import Footer from '../common/Footer/Footer';

function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const bannerTitle = "Contact Us";
    const bannerDescription = "Fill out the form and our team will get back to you as soon as possible";

    const handleSubmit = async (e) => {
        if (firstName === "" || lastName === "" || email === "" || phone === "" || message === "") {
            return;
        }
        const plainText = `User: ${firstName} ${lastName} Phone: ${phone} Email: ${email} Message: ${message}`;
        const htmlText = `<html><body><div><p>Name: <span>${firstName}</span> <span>${lastName}</span></p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p></div></body></html>`;
        const res = await fetch(process.env.REACT_APP_UI_URL + "api/email", {
            body: JSON.stringify({
                to: email,
                plainbody: plainText,
                htmlbody: htmlText
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Banner title={bannerTitle} description={bannerDescription} />
            <Box component="form">
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField margin="nomral" required fullWidth id="fname" label="First Name" name="fname" autoComplete="fname" autoFocus onChange={handleFirstNameChange} />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField margin="nomral" required fullWidth id="lname" label="Last Name" name="lname" autoComplete="lname" onChange={handleLastNameChange} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField margin="nomral" type="email" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={handleEmailChange} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField margin="nomral" type="number" required fullWidth id="phone" label="Phone" name="phone" autoComplete="phone" onChange={handlePhoneChange} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField margin="nomral" multiline rows={4} required fullWidth id="message" label="Message" name="message" autoComplete="message" onChange={handleMessageChange} />
                    </Grid>
                    <Grid xs={6} item>
                        <Button type="submit" width="500px" variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Container>
    )
}

export default ContactUs