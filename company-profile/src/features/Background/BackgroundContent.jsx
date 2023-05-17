import styled from "styled-components";

const Container = styled.div`
    width: 85vw;
`;
const BackgroundContent = ({ subtitle, title, content }) => {
    return (
        <Container>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
        </Container>
    );
};

export default BackgroundContent;
