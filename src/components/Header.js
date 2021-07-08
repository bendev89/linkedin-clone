import styled from "styled-components"


const Header = (props) => {
    return (
        <div>
            <Container>
                <div className="header__left">
                    <Logo>
                        <a href="/">
                            <img src="/images/home-logo.svg" alt="" />
                        </a>
                    </Logo>
                    <Search>
                        
                        <SearchIcon>
                            <img src="/images/search-icon.svg" alt="" />
                        </SearchIcon>
                        <input type="text" placeholder="Recherche" />
                        
                    </Search>
                </div>
                <Nav>
                    <NavList>
                        <NavItem className="active">
                        <a>
                            <img src="/images/nav-home.svg" alt="" />
                            <span>Accueil</span>
                        </a>
                        </NavItem>
                        <NavItem>
                        <a>
                            <img src="/images/nav-network.svg" alt="" />
                            <span>Réseau</span>
                        </a>
                        </NavItem>
                        <NavItem>
                        <a>
                            <img src="/images/nav-jobs.svg" alt="" />
                            <span>Emploi</span>
                        </a>
                        </NavItem>
                        <NavItem>
                        <a>
                            <img src="/images/nav-messaging.svg" alt="" />
                            <span>Messagerie</span>
                        </a>
                        </NavItem>
                        <NavItem>
                        <a>
                            <img src="/images/nav-notifications.svg" alt="" />
                            <span>Notifications</span>
                        </a>
                        </NavItem>
                        <Profile>
                            <a href="">
                                <img src="/images/user.svg" alt="" />
                                <span>Vous</span>
                                <img src="/images/down-icon.svg" alt="" />
                            </a>
                            <SignOut><a>Déconnexion</a></SignOut>
                        </Profile>
                        <Product>
                            <a href="">
                            <img src="/images/nav-work.svg" alt="" />
                            
                            <span>Produits <img src="/images/down-icon.svg" alt="" />
                                 
                            </span>
                            </a>
                        </Product>
                    </NavList>
                </Nav>
            </Container>
        </div>
    )
};

const Container = styled.header`
    display: flex;
    justify-content: space-evenly; 
    border-bottom: .1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color:white;
    .header__left{
    display: flex;
}

`;

const Content = styled.div`
`
;
const Logo = styled.div`
    height: 40px;
    margin-right: 10px;
`
;
const Search = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    height:34px;
    color: gray;
    background-color: #eef3f8;
    max-width: 280px;
    input{
        background-color:transparent;
        border:none;
        outline:none;
    }

    
`
;
const SearchIcon = styled.div`
    padding: 8px 8px 8px 16px;
    width: 40px;
    pointer-events:none;
`
;
const Nav = styled.nav`


    @media(max-width : 768px){
        display: flex;
        justify-content:center;
        position:fixed;
        bottom: 0;
        left:0;
        background-color:white;
        width:100%;
    }
`
const NavList = styled.ul`
    display: flex;
    flex-wrap : nowrap;
    list-style-type:none;
    .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }

    
`;
const NavItem = styled.li`
display: flex;
align-items: center;
    a{
        display: flex;
    flex-direction:column;
    align-items:center;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height:1.5;
    justify-content: center;
    min-width:80px;
    min-height:52px;
    position:relative;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
    
    }
    &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
    

`;
const SignOut = styled.div`
position: absolute;
top: 45px;
background:white;
border-radius:0 0 5px 5px;
width: 100px;
font-size: 16px;
transition-duration:167ms;
text-align:center;
display:none;
`;
const Profile = styled(NavItem)`
    a > svg{
        width: 24px;
    }
    a > img{
        width: 24px;
        height: 24px;
        border-radius:50%;
    }
    span{
        display: flex;
        align-items: center;
    }
    &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Product = styled(Profile)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;


export default Header
