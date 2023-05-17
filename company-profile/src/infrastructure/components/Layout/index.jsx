import styled from "styled-components";
import Header from "./Header";

const Container = styled.div``;
const Wrapper = styled.div`
    background-color: gray;
`;
const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Layout;
