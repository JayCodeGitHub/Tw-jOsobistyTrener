import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
    width: 50vw;
    height: 7vw;
    padding: 0px;
`
const NavigationList = styled.ul`
    list-style: none;
    display: grid;
    height: 7vw;
    margin-top: 0px;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
    a {
        color: inherit;
    }
    .active {
        color: #ca3751;
    }
`
const NavigationItem = styled.li`
    text-align: center;
    margin: 0px;
    height: 7vw;
    padding-top: 2vw;
    font-size: 1vw;
    &.special {
        padding-top: 1.5vw;
    }
    :hover{
        color: #ca3751;
    }
`



const Navigation = () => (

    <>
    <Wrapper>
        <NavigationList>
            <Link to="/TreningiOnline" activeClassName="active">
                <NavigationItem>
                    Treningi Online
                </NavigationItem>
            </Link>
            <Link to="/TreningiIndywidualne" activeClassName="active">
                <NavigationItem className="special">
                    Treningi indywidualne w Studio / na Świeym Powietrzu
                </NavigationItem>
            </Link>
            <Link to="/TreningiRodzinne" activeClassName="active">
                <NavigationItem>
                Treningi Rodzinne
                </NavigationItem>
            </Link>
            
        </NavigationList>
    </Wrapper>
    </>


)

export default Navigation



