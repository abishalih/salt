import BackgroundBanner from "infrastructure/assets/background-banner.png";
import BannerImage from "infrastructure/assets/banner.png";
import styled from "styled-components";
const Container = styled.div`
    height: 550px;
    position: relative;
    div {
        bottom: 0;
        left: 0;
        position: absolute;
        color: rgb(255, 255, 255);
        padding: 72px 40px;

        h1 {
            font-weight: 500;
            font-size: 36px;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.01em;
        }
    }
    img.backgroundBanner {
        top: 188px;
        position: absolute;
    }
    img {
        left: 0;
        display: block;
        width: 100%;
    }
`;

const Banner = () => {
    return (
        <Container>
            <img src={BannerImage} alt="" />
            <img className="backgroundBanner" src={BackgroundBanner} alt="" />
            <div>
                <h1>Discover Your Wonder</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
        </Container>
    );
};

export default Banner;
