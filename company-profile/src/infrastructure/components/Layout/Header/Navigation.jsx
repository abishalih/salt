import styled from "styled-components";

const Container = styled.ul`
    padding:0:
    display: none;
    @media only screen and (min-width: 420px) {
        display: flex;
        gap: 1rem;
        list-style: none;
        li {
            a {
                color: black;
                text-decoration: none;
                font-size: 12px;
            }
        }
    }
`;

const Navigation = () => {
    return (
        <Container>
            <li>
                <a href="#background">Who We Are</a>
            </li>
            <li>
                <a href="#values">Our Values</a>
            </li>
            <li>
                <a href="#perks">The Perks</a>
            </li>
        </Container>
    );
};

export default Navigation;
