import FooterBG from "infrastructure/assets/Footer.png";
import logo from "infrastructure/assets/logo-inverse.png";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .wrapper {
        position: absolute;
        padding: 40px;
        top: 0;
        .container {
            background: #ffffff;
            padding: 20px;
            width: 300px;
            height: 245.02px;
            p {
                color: #25a0d8;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.02em;
                width: 80%;
            }
        }
        ul {
            padding: 0;
            list-style: none;
            li {
                a {
                    text-decoration: none;
                    font-size: 16px;
                    line-height: 48px;
                    color: #ffffff;
                }
            }
        }
    }
    height: 654px;
`;
const Logo = styled.img`
    height: 32px;
    margin-bottom: 1rem;
`;
const Background = styled.img`
    top: 0;
    position: absolute;
    height: 100%;
`;
const Footer = () => {
    return (
        <Container>
            <Background src={FooterBG} alt="logo" />
            <div className="wrapper">
                <Logo src={logo} alt="logo" />
                <div className="container">
                    <select name="" id="">
                        <option value="">TECHNOLOGY DEPARTMENT</option>
                    </select>
                    <p>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
                </div>
                <ul>
                    <li>
                        <a href="#background">Who We Are</a>
                    </li>
                    <li>
                        <a href="#values">Our Values</a>
                    </li>
                    <li>
                        <a href="#perks">The Perks</a>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Footer;
