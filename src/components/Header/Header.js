import React from "react"
import Navigation from "../Navigation/Navigation"
import styled from "styled-components"
import LeftNavigation from "../Navigation/LeftNavigation"
import logo from "../../assets/images/logo.jpg"
import { Link } from "gatsby"
import wb from "../../assets/images/Wb1.jpg"
import SocialMedia from "../SocialMedia/SocialMedia"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

const HeaderWrapper = styled.div`
  @media(max-width: 999px) {
    display: none;
  } 
  @media(min-width: 1000px) {
    display: flex;
    position: fixed;
    height: 7vw;
    width: 90vw;
    margin-left: 10vw;
    background-color: #382a65;
    h1 {
        margin-top: 0.7vw;
        margin-bottom: 0px;
    }
    h3 {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    a {
        color: inherit;
    }
}
`
const HamburgerMenuWrapper = styled.div`
   @media(min-width: 1000px) {
       display: none;
   }
   @media(max-width: 999px) {
       width: 100vw;
       height: 20vw;
   } 
`
const NavigationWrapper = styled.div`
    width: 70vw;
    display: flex;
    color: white;
    background-color: #382a65;
`
const LogoWrapper = styled.div`
display: flex;
    width:30vw;
    color: white;
    h1 {
        font-style: italic;
        font-size: 1.7vw;
    }
    h3 {
        font-size: 1vw;
    }
`
const Logo = styled.img`
    margin-right: 1vw;
    width: 5vw;
    height: 5vw;
    border-radius: 50px;
`
const LeftNavigationWrapper = styled.div`
    @media(max-width: 999px) {
        display: none;
    }
    @media(min-width: 1000px) {
        height: 42.5vw;
        width: 10vw;
        position: fixed;
        margin-top: 7vw;
        color: white;
    }
`
const SocialMediaWrapper = styled.div`
    width: 20vw;
    height: 7vw;
`
const RightPhotoWrapper = styled.div`
    @media(max-width: 999px) {
        display: none;
    }
    @media(min-width: 1000px) {
        height: 42.5vw;
        width: 20vw;
        margin-top: 7vw;
        margin-left: 80vw;
        position: fixed;
    }
`
const RightPhoto = styled.img`
    @media(max-width: 999px) {
        display: none;
    }
    @media(min-width: 1000px) {
        height: 40vw;
    }
`



const Header = () => (
<>
    <HamburgerMenuWrapper>
        <HamburgerMenu/>
    </HamburgerMenuWrapper>
    <HeaderWrapper>
        <NavigationWrapper>
            <Link to="/">
                <LogoWrapper>
                    <Logo src={logo}/>
                    <div>
                        <h1>Twój Osobisty Trener.pl</h1>
                        <h3>Powerd By Cloch Champion Academy</h3>
                    </div>
                </LogoWrapper>
            </Link>
            <Navigation/>
        </NavigationWrapper>
        <SocialMediaWrapper>
            <SocialMedia/>
        </SocialMediaWrapper>
    </HeaderWrapper>
    <LeftNavigationWrapper>
        <LeftNavigation/>
    </LeftNavigationWrapper>
    <RightPhotoWrapper>
        <RightPhoto src={wb}/>
    </RightPhotoWrapper>
</>
)

export default Header
