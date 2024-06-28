import React from 'react'
import styled from "styled-components";
import {HomeRounded, CloseRounded} from '@mui/icons-material';
import LogoIcon from "../images/Logo.png";

const MenuContainer = styled.div`
    flex-direction: column;
    height: 100vh;
    display: flex;
    flex: 0.5;
    color: ${({theme}) => theme.text_primary};
    background-color: ${({theme}) => theme.bg}
    @media (max-width: 1100px) {
        position: fixed;
        z-index = 1000;
        width: 100%;
        max-width: 250px;
        left: ${({setMenuOpen}) => (setMenuOpen ? "0" : "-100%")};
        transition: 0.3s ease-in-out;
    }
`;
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    width: 100%;
    color: ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    fonr-size: 20px;
    margin: 16px 0px;
`;
const Image = styled.img`
    height: 40px;
`;
const Close = styled.div`
    display: none;
    @media (max-width: 1190px){
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
    color: ${({theme}) => theme.text_secondary};
    width: 100%;
    &:hover{
        background-color: ${({theme}) => theme.bgLight};
    }
`;
const NavText = styled.div`
    padding: 12px 0px;
`;



const Sidebar = () => {
  return <MenuContainer> 
    <Flex>
        <Logo>
            <Image src = {LogoIcon}/>
            BaatCheet</Logo>
        <Close>
            <CloseRounded/>
        </Close>
    </Flex>
    <Elements>
        <HomeRounded/>
        <NavText>Dashboard</NavText>
    </Elements>
  </MenuContainer>
};

export default Sidebar;
