import React from "react"
import Header from "../components/Header/Header"
import Helmet from "react-helmet"
import GlobalStyle from '../styles/globalStyle'
import Fotter from "../components/Fotter/Fotter"


const MainLayout = ( {children} ) => (

    <>
        <Helmet title="Twój Osobisty Trener.pl" defer={false} />
        <GlobalStyle/>
        <Header/>
        {children}
        <Fotter/>
    </>


)

export default MainLayout
