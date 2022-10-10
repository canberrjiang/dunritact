import { Card, makeStyles } from "@mui/material"


function CarouselSlide() {
    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        }
    }));
}

export default CarouselSlide