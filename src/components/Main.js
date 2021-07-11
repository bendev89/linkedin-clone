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


export default Main
