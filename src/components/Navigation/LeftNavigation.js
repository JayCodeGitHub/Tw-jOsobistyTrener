import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
    height: 42.5vw;
    width: 10vw;
`
const NavigationWrapper = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    a {
        color: inherit;
    }
    .active {
        color: #ca3751;
    }
`
const NavigationItem = styled.li`
    height: 5vw;
    width: 8vw;
    margin-left: 1vw;
    margin-right: 1vw;
    text-align: center;
    padding-top: 2vw;
    font-size: 1vw;
    :hover {
        color: #ca3751;
    }
`

const LeftNavigation = () => (

    <Wrapper>
        <NavigationWrapper>
            <Link to="/Onas" activeClassName="active">
                <NavigationItem>
                    Onas
                </NavigationItem>
            </Link>
            <Link to="/ZajenciaGrupowe" activeClassName="active">
                <NavigationItem>
                    Zajęcia Grupowe Online dla Dzieci
                </NavigationItem>
            </Link>
            <Link to="/Dieta" activeClassName="active">
                <NavigationItem>
                    Dieta Doradztwo Żywieniowe
                </NavigationItem>
            </Link>
            <Link to="/Kadra" activeClassName="active">
                <NavigationItem>
                    Kadra Trenerska
                </NavigationItem>
            </Link>
            <Link to="/Kontakt" activeClassName="active">
                <NavigationItem>
                    Kontakt/Dane do przelewu
                </NavigationItem>
            </Link>
        </NavigationWrapper>
    </Wrapper>


)

export default LeftNavigation
