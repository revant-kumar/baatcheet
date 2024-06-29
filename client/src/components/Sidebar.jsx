import React from 'react';
import styled from "styled-components";
import { HomeRounded, CloseRounded, SearchRounded, UploadRounded, LightModeRounded, LogoutRounded, FavoriteRounded, DarkModeRounded, CloudUploadRounded } from '@mui/icons-material';
import LogoIcon from "../images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
    flex-direction: column;
    height: 100vh;
    display: flex;
    flex: 0.5;
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.bg};
    
    @media (max-width: 1100px) {
        position: fixed;
        z-index: 1000;
        width: 100%;
        max-width: 250px;
        left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")}; /* Adjust positioning for sidebar */
        transition: left 0.3s ease-in-out;
    }
`;

const Flex = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px ;
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 20px;
    margin: 16px 0;
`;

const Image = styled.img`
    height: 40px;
`;

const Close = styled.div`
    curson: pointer;
    display: none;
    @media (max-width: 1100px) {
        display: block;
    }
`;

const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary};
    &:hover {
        background-color: ${({ theme }) => theme.bgLight + 50};
    }
`;

const NavText = styled.div`
    padding: 12px 0;
`;

const HR = styled.div`
    width: 100%;
    height: 1px; 
    background-color: ${({ theme }) => theme.text_secondary + 50};
    margin: 10px 0;
`;

const menuItems = [
    {
        link: "/",
        name: "Dashboard",
        icon: <HomeRounded />
    },
    {
        link: "/search",
        name: "Search",
        icon: <SearchRounded />
    },
    {
        link: "/favourites",
        name: "Favourites",
        icon: <FavoriteRounded />
    },
];

const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
    const button = [
        {
            func: () => console.log("Upload"),
            name: "Upload",
            icon: <CloudUploadRounded />
        },
        {
            func: () => setDarkMode(!darkMode),
            name: darkMode ? "Light Mode" : "Dark Mode",
            icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />
        },
        {
            func: () => console.log("Log Out"),
            name: "Log Out",
            icon: <LogoutRounded />
        }
    ];

    return (
        <MenuContainer menuOpen={menuOpen}>
            <Flex>
                <Logo>
                    <Image src={LogoIcon} alt="Logo" />
                    BaatCheet
                </Logo>
                <Close onClick={() => setMenuOpen(false)}>
                    <CloseRounded />
                </Close>
            </Flex>
            {menuItems.map((item, index) => (
                <Link key={index} to={item.link} style={{ textDecoration: 'none' }}>
                    <Elements>
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                </Link>
            ))}
            <HR />
            {button.map((item, index) => (
                <Elements key={index} onClick={item.func}>
                    {item.icon}
                    <NavText>{item.name}</NavText>
                </Elements>
            ))}
        </MenuContainer>
    );
};

export default Sidebar;
