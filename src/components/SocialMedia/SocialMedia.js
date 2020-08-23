import React from "react"
import styled from "styled-components"
import { RiInstagramLine } from 'react-icons/ri';
import { RiYoutubeLine } from 'react-icons/ri';
import { RiFacebookCircleLine } from 'react-icons/ri';

const Wrapper = styled.div`
    width: 20vw;
    height: 7vw;
`
const SocialMediaWrapper =styled.ul`
    @media(min-width: 1000px) {
        width: 20vw;
        margin: 0px;
        padding: 0px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;
        li {
            text-align: center;
            font-size: 3vw;
            padding-top: 1vw;
        }
    }
    @media(max-width: 999px) {
        width: 100vw;
        display: grid;
        margin: 0px;
        padding: 0px;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;
        li {
            width: 33.3vw;
            text-align: center;
            font-size: 10vw;
            padding-top: 1vw;
        }
    }
    .instagram{
       color: #7d3cae;
       :hover {
        color: #C13584;
       }
    }
    .youtube{
        color: #c00f1f;
        :hover {
           color: #ff0000;
        }
    }
    .facebook{
        color: #0000ff;
        :hover {
            color: #3510bd;
        }
    }
`

const SocialMedia = () => (

    <>
    <Wrapper>
        <SocialMediaWrapper>
            <a href="https://www.instagram.com/karateteamoborniki/" alt="Ikonai link do Instagrama" target="blank"><li><RiInstagramLine className="instagram"/></li></a>
            <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/featured" alt="Ikona i link do Youtuba" target="blank"><li><RiYoutubeLine className="youtube"/></li></a>
            <a href="https://www.facebook.com/BlochChampionAcademy" alt="Ikona i link do Facebooka" target="blank"><li><RiFacebookCircleLine className="facebook"/></li></a>
        </SocialMediaWrapper>
    </Wrapper>
    </>


)

export default SocialMedia 
