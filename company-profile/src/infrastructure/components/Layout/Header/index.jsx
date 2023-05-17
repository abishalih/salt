import hamburger from "infrastructure/assets/hamburger.png";
import logo from "infrastructure/assets/logo.png";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 14px 21px;
    @media only screen and (min-width: 420px) {
        #hamburger {
            display: none;
        }
    }
`;
const Logo = styled.img`
    height: 32px;
    @media only screen and (min-width: 420px) {
        height: 16px;
    }
`;
const Hamburger = styled.img``;
const Header = () => {
    return (
        <Container>
            <Logo src={logo} alt="logo" />
            <Navigation />
            <Hamburger id="hamburger" src={hamburger} alt="hamburger" />
        </Container>
    );
};

export default Header;
