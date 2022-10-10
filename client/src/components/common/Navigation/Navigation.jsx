import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import './Navigation.scss';
import { ReactComponent as ReactMenuSvg } from '../../../assets/images/svg/menu.svg';
import { ReactComponent as CloseSvg } from '../../../assets/images/svg/close.svg';
import {
    Link
} from "react-router-dom";




const menuItems = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Services",
        link: "services"
    },
    {
        title: "Projects",
        link: "projects"
    },
    {
        title: "Developments",
        link: "developments"
    },
    {
        title: "Project Gallery",
        link: "project-gallery"
    },
    {
        title: "Contact Us",
        link: "contact"
    }
];
function Navigation() {
    const [checked, setChecked] = React.useState(false);
    const handleCloseMenu = () => {
        setChecked(false);
    }

    const handleMenuSwitch = () => {
        if (checked === true) {
            setChecked(false)
        }
        else {
            setChecked(true);
        }
    }


    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            setY(window.scrollY);
        }
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
    }, [handleNavigation, y]);





    return (
        <AppBar className="header" position="relative" sx={{
            color: "#000", boxShadow: "none", backgroundColor: "transparent"
        }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
                    {/* Logo */}
                    <Typography variant="h4" noWrap component="div" sx={{ mr: 2 }}>
                        <a href="/">Dunrite Building Service</a>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <Container maxWidth={false} className="menuBulge__wrapper">
                            <Box component="div" className="menuBulge__control" >
                                <ReactMenuSvg className="bulgeIcon" />
                                <input type="checkbox" id="active" checked={checked} />
                                <label htmlFor="active" className="menu-btn" onClick={handleMenuSwitch}><span></span></label>
                                <label htmlFor="active" className="close"></label>
                                <div className="wrapper">
                                    <nav>
                                        <ul>
                                            {menuItems.map((item) => (
                                                <li><Link to={item.link} onClick={handleCloseMenu}>{item.title}</Link></li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </Box>
                        </Container>
                    </Box>
                </Toolbar>
                <Toolbar sx={{ display: { xs: "flex", md: "none" } }}>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" araia-haspopup="true" color="inherit" onClick={handleMenuSwitch}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <a href="/">Dunrite Building Service</a>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <Container maxWidth={false} className="menuBulge__wrapper">
                            <Box component="div" className="menuBulge__control" >

                                <input type="checkbox" id="active" checked={checked} />
                                <label htmlFor="active" ><span></span></label>
                                <div className="wrapper">
                                    <div className="mobile-close-nav">
                                        <CloseSvg onClick={handleCloseMenu} margin="auto" />
                                    </div>
                                    <nav>
                                        <ul>
                                            {menuItems.map((item) => (
                                                <li><Link to={item.link} onClick={handleCloseMenu}>{item.title}</Link></li>
                                            ))}
                                        </ul>
                                    </nav>

                                </div>
                            </Box>
                        </Container>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navigation;