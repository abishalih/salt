import logo from "infrastructure/assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 14px 21px;
`;
const Logo = styled.img`
    height: 32px;
`;
const Hamburger = styled.div``;
const Header = () => {
    return (
        <Container>
            <Logo src={logo} alt="logo" />
            <Hamburger>H</Hamburger>
        </Container>
    );
};

export default Header;
