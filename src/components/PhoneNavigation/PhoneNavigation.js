import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const PhoneNavigationWrapper = styled.div`
a {
    color: inherit;
    text-decoration: none;
}
`
const PhoneNav = styled.ul`
    width: 100vw;
    text-align: center;
    list-style: none;
    padding: 0px;
    color: black;
    .active {
        color: #b4407d;
        
    }
`
const PhoneNavigationItem = styled.li`
    font-size: 6vw;
    padding-top: 5vw;
    height: 16vw;
    font-weight: 800;
`





const PhoneNavigation = () => (
    <PhoneNavigationWrapper>
        <PhoneNav>
            <Link to="/Onas" activeClassName="active">
                <PhoneNavigationItem>
                    Onas
                </PhoneNavigationItem>
            </Link>
            <Link to="/TreningiOnline" activeClassName="active">
                <PhoneNavigationItem>
                    Treningi Online
                </PhoneNavigationItem>
            </Link>
            <Link to="/TreningiIndywidualne" activeClassName="active">
                <PhoneNavigationItem>
                Treningi indywidualne w Studio / na Świeym Powietrzu
                </PhoneNavigationItem>
            </Link>
            <Link to="/TreningiRodzinne" activeClassName="active">
                <PhoneNavigationItem>
                Treningi Rodzinne
                </PhoneNavigationItem>
            </Link>
            <Link to="/ZajenciaGrupowe" activeClassName="active">
                <PhoneNavigationItem>
                    Zajęcia Grupowe Online dla Dzieci
                </PhoneNavigationItem>
            </Link>
            <Link to="/Dieta" activeClassName="active">
                <PhoneNavigationItem>
                    Dieta Doradztwo Żywieniowe
                </PhoneNavigationItem>
            </Link>
            <Link to="/Kadra" activeClassName="active">
                <PhoneNavigationItem>
                    Kadra Trenerska
                </PhoneNavigationItem>
            </Link>
            <Link to="/Kontakt" activeClassName="active">
                <PhoneNavigationItem>
                    Kontakt/Dane do przelewu
                </PhoneNavigationItem>
            </Link>
        </PhoneNav>
    </PhoneNavigationWrapper>
)

export default PhoneNavigation
