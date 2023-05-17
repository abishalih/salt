import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div``;
const Wrapper = styled.div`
    overflow: hidden;
    width: 100%;
`;
const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
