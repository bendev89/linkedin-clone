import styled from "styled-components"



const Right = (props) => {
    return (
        <Container>
           <NewsCard>
               <Title>
                   <h2>Linkedin Actualités</h2>
                   <img src="/images/feed-icon.svg" alt="" />
               </Title>
               <NewsList>
                    <News>
                        <span></span>
                        <div className="content">
                            <h3>Covid 19/ Vaccin Le point sur la situation</h3>
                            <small>À la une • 24 854 lecteurs</small>
                        </div>
                    </News>
                    <News>
                        <span></span>
                        <div className="content">
                            <h3>1,7 milliard d'euros pour la 5G</h3>
                            <small>il y a 3 j • 484 lecteurs</small>
                        </div>
                    </News>
                    <News>
                        <span></span>
                        <div className="content">
                            <h3>Younited lève 170 millions de dollars</h3>
                            <small>il y a 2 j • 884 lecteurs</small>
                        </div>
                    </News>
               </NewsList>
           </NewsCard>
           <Courses>
           <Title>
                   <h2>Meilleurs cours du jour</h2>
                   <img src="/images/feed-icon.svg" alt="" />
               </Title>
           </Courses>
        </Container>
    )
};
const Container = styled.div`
 grid-area: right;
`;
const NewsCard = styled.div`
background-color:#fff;
/* text-align: center; */
margin-bottom: 8px;
padding: 20px 0 20px 0;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

 
`;
const Courses = styled(NewsCard)`
 
`;
const Title = styled.div`
display: flex;
justify-content: space-between;
padding:10px 20px;
 h2{
    font-weight: 600;
    font-size: 16px;
 }

`;
const NewsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction:column;
    margin-top: 8px;
`;
const News = styled.li`
display: flex; 
align-items: baseline;
padding:0 20px;
     span{
        border-radius: 50%;
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 12px 0 0;
        border: 3px solid rgba(0, 0, 0, 0.6);
    } 
    &:hover{
        background-color:rgba(0,0,0,0.08);
    }
   
     

    .content{
        display: flex;
        flex-direction:column;
        justify-content:center;
        font-size:14px;
        font-weight:600;
        h3{
            font-weight: 600;
            line-height:1.4;
        }

        small{
            font-size:12px;
            color:rgba(0, 0, 0, 0.6);
            margin-bottom: 4px;
        }

    }

`;

export default Right
