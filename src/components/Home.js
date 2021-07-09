import styled from "styled-components"

import React from 'react'
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a href=""> Développeur Frontend 🚨 Nos entreprises recherchent ton profil sur talent.io ! Salaires : 45k€+ </a></h5>
            </Section>
            <Layout>
                <Left />
                <Main />
                <Right />
            </Layout>
        </Container>
    )
};

const Container = styled.div`

`;
const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    text-align: center;
`;
const Layout = styled.div`
    display: grid;
    grid-template-areas: "left main right";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    gap: 25px;
  
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home
