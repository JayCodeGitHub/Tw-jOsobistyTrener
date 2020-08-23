import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'
import styles from "../styles/styles.module.scss"

const Wrapper = styled.div`
    @media(min-width: 1000px) {
        width: 70vw;
        margin-left: 10vw;
        padding-top: 7vw;
        min-height: 100vw; 
   }
   @media(max-width: 999px) {
        width: 100vw;
        margin: 0px;
        min-height: 300vw;
        background-color: #382a65; 
        h1 { 
            margin-top: 0px;
        }
   }
    
`

const ZajenciaGrupowePage = ({data}) => {
return (
    <>
    <Wrapper>
    <h1 className={styles.Maintitle}>{data.datoCmsZajenciagrupowe.title}</h1>
        <div>
        {data.datoCmsZajenciagrupowe.content.map(item => {
            const itemKey = Object.keys(item)[1];
            switch(itemKey) {
                case 'title':
                    return <h1 className={styles.title}>{item.title}</h1>
                case 'tytuldwa':
                    return <h1 className={styles.tytuldwa}>{item.tytuldwa}</h1>;
                case 'paragraph':
                    return <h2 className={styles.paragraph}>{item.paragraph}</h2>
                case 'film':
                    return <div><iframe title="film z obozu" className={styles.film} src={item.film} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
                case 'img':
                    return <img src={item.img.url}alt="zdięcie z obozu" className={styles.img}/>
                default: 
                return null;
            }
        })}
        </div>
    </Wrapper>
    </>

)
}

export const query = graphql`
  query {
    datoCmsZajenciagrupowe {
        title
        content {
          ... on DatoCmsTitle {
            title
                }
          ... on DatoCmsTytultwo {
            tytuldwa
                }
          ... on DatoCmsParagraph {
            paragraph
                }
          ... on DatoCmsImg {
            img {
              url
            }
          }
          ... on DatoCmsFilm {
            film
          }
        }
      }
  }
`

export default ZajenciaGrupowePage
