import Carousel from "infrastructure/components/Carousel";
import styled from "styled-components";
const Container = styled.div`
    padding: 40px;
    p {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        color: #303030;
    }
`;
const Speciality = () => {
    return (
        <Container id="perks">
            <h1>OUR SPECIALITY</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in
                venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </p>
            <Carousel images={[0, 1, 2]} />
        </Container>
    );
};

export default Speciality;
