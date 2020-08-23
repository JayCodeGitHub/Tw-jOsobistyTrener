import React from "react"
import styled from "styled-components"

const StyledFotter = styled.div`
    @media(max-width: 999px) {
        height: 24vw;
    }
    @media(min-width: 1000px) {
        height: 4vw;
    }
    width: 100vw;
    border-top: solid white 3px;
    position: absolute;
    background-color: #382a65; 
    color: white;
    text-align: center;
    span {
        color: #ca3751;
    }
`


const Fotter = () => (

    <>
    <StyledFotter>
        <h1>Created By Jay<span>Code</span></h1>
    </StyledFotter>
    </>


)

export default Fotter
