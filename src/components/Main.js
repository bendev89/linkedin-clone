import styled from "styled-components"



const Main = (props) => {
    return (
        <Container>
            <Share>
                <div className="share_top">
                    <img src="https://avatars.githubusercontent.com/u/68249891?v=4" alt="" />
                    <button>Commencer un post</button>
                </div>

                <ul className="share_bottom">
                    <li>
                        <a href="">
                            <img src="/images/share-photo.svg" alt="" />
                            <span>Photo</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/share-video.svg" alt="" />
                            <span>Vidéo</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/share-event.svg" alt="" />
                            <span>Evenement</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/share-article.svg" alt="" />
                            <span>Rédiger un article</span>
                        </a>
                    </li>
                </ul>

            </Share>
            <Article>
                <ArticleInfo>
                    <img src="https://avatars.githubusercontent.com/u/68249891?v=4" alt="" />
                    <div>
                        <h3>John Doe</h3>
                        <h4>Web developer</h4>
                        <span>4 j •  <img src="/images/world-icon.svg" alt="" /></span>
                    </div>
                    <span>
                        <img src="/images/more-icon.svg" alt="" />
                    </span>
                </ArticleInfo>
                <ArticleContent>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus facilis maiores excepturi laborum, debitis numquam ab quas delectus! Esse incidunt optio eveniet ratione officia explicabo.
                    </p>
                    <span>
                        <img src="/images/post-article.jpg" alt="" />
                    </span>
                </ArticleContent>
                <SocialCount>
                    <li>
                        <img src="/images/applause-count.svg" alt="" />
                    </li>
                    <li>
                        <img src="/images/like-count.svg" alt="" />
                    </li>
                    <li>
                        <img src="/images/heart-count.svg" alt="" />
                    </li>
                    <li>
                        <span> 210 •  20 commentaires</span>
                    </li>

                </SocialCount>
                {/* <div className="divider">
                    <hr />
                </div> */}
            </Article>
        </Container>
    )
};
const Container = styled.div`
 grid-area: main;
`;
const Share = styled.div`
background-color:#fff;
/* text-align: center; */
margin-bottom: 8px;
padding: 20px 0 20px 0;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
display: flex;
flex-direction:column;
color:#958b7b;
padding:10px;

    .share_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        button{
            flex-grow : 1;
            text-align:left;
            padding:10px 8px 10px 16px;
            border-radius:35px;
            font-weight:600;
                color:#958b7b;
                background-color:transparent;
                border:none;
                box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
                line-height: 1.7;
                cursor: pointer;
                &:hover{
                background-color:#F9F9F9;
            }
        }
        img{
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            background-clip: content-box;
            margin-right: 8px;
            border-radius:50%;
        }
    }
    .share_bottom{
        display: flex;
        justify-content: space-between;
        list-style-type:none;
        text-decoration:none;
        a{
            display: flex;
            align-items: center;
            text-decoration:none;
            padding:0 8px;
            height: 48px;
            cursor: pointer;
            border-radius:5px;
            &:hover{
                background-color:#F9F9F9;
            }
            span{
                font-weight:600;
                color:#958b7b;
            }
            img{
                margin-right: 4px;
            }
        }
    }
`;
const Article = styled(Share)`
padding: 0;
    .divider{
        padding: 12px 16px 8px;
        color:rgba(0, 0, 0, 0.6);

        

    }

`;
const ArticleInfo =styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: flex-start;
    position:relative;

    div{
        display: flex;
        flex-direction:column;

        h3{
            font-size:14px;
            color:#000;
            font-weight:600;
        }
        h4, span{
            font-size:12px;
            color:rgba(0, 0, 0, 0.6);
            font-weight:600;
        }
    }


    & >img{
        width: 48px;
            height: 48px;
            box-sizing: border-box;
            background-clip: content-box;
            margin-right: 8px;
            border-radius:50%;
            

    }

    & > span {
        position:absolute;
        top: 4px;
        right: 12px;
        width: 34px;
        height: 34px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: rgba(0,0,0,0.08);
        }
        
    }

`;
const ArticleContent = styled.div`

    p{
        padding: 12px 16px 0;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.9);
        font-size: 14px;
    }
    span{
        

        img{
            object-fit: contain;
            width: 100%;
            margin-top: 8px;

        }

    }

`;
const SocialCount = styled.ul`
    list-style-type:none;
    text-decoration:none;
    /* padding: 12px 16px 8px; */
    margin: 12px;
    padding: 8px 0;
    display: flex;
    justify-content: flex-start;
    border-bottom:1px solid rgba(0, 0, 0, 0.6);

    li{
        margin-right: 4px;

        span{
            display: flex;
            align-items: center;
            font-size: 12px;
            color:rgba(0, 0, 0, 0.6);
            font-weight:600;

        }
    }

`;


export default Main
