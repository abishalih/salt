import leftArrow from "infrastructure/assets/left-arrow.png";
import rightArrow from "infrastructure/assets/right-arrow.png";
import { useState } from "react";
import styled from "styled-components";
import BackgroundContent from "./BackgroundContent";

const Container = styled.div`
    padding-top: 48px;
    .wrapper {
        padding: 0 40px;
    }
    h1 {
        color: #029fe4;
        display: block;
        font-weight: 500;
        font-size: 36px;
        margin: 0;
        margin-bottom: 12px;
        padding: 0;
    }
    h2 {
        display: block;
        font-weight: 400;
        font-size: 18px;
        margin: 0;
        margin-bottom: 8px;
        padding: 0;
    }
    p {
        color: #777777;
        font-weight: 400;
        font-size: 14px;
        height: 196px;
    }
`;

const Pagination = styled.div`
    padding: 48px 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    div.pages {
        align-items: flex-end;
        display: flex;
        font-weight: 500;
        gap: 0.25rem;
        font-size: 24px;
        div.currentPage {
            color: #303030;
        }
        span {
            color: #c0c0c0;
        }
        div.lastPage {
            color: #c0c0c0;
            font-size: 16px;
        }
    }
    div.pages-button {
        button {
            border: 0;
            border-radius: 0px;
            height: 52px;
            width: 52px;
        }
        button.leftButton {
            background: #f1f1f1;
        }
        button.rightButton {
            background: #1ba0e1;
        }
    }
`;

const CONTENTS = [
    {
        content:
            "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        subtitle: "Technology Company",
        title: "Who we are"
    },
    {
        content:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        subtitle: "Professional Brand Management",
        title: "What we do"
    },
    {
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
        subtitle: "Strategize, Design, Collaborate",
        title: "How we do"
    }
];
const Background = () => {
    const [contentIdx, setContentIdx] = useState(0);
    const maxLength = CONTENTS.length;
    const prevContent = () => contentIdx > 0 && setContentIdx(contentIdx - 1);
    const nextContent = () => contentIdx < maxLength - 1 && setContentIdx(contentIdx + 1);
    return (
        <Container>
            <div className="wrapper">
                {CONTENTS.map((contentProps, key) => (
                    <BackgroundContent key={key} {...contentProps} />
                ))}
            </div>

            <Pagination>
                <div className="pages">
                    <div className="currentPage">0{contentIdx + 1}</div>
                    <span>/</span>
                    <div className="lastPage">0{maxLength}</div>
                </div>
                <div className="pages-button">
                    <button className="leftButton" onClick={prevContent}>
                        <img src={leftArrow} alt="" />
                    </button>
                    <button className="rightButton" onClick={nextContent}>
                        <img src={rightArrow} alt="" />
                    </button>
                </div>
            </Pagination>
        </Container>
    );
};

export default Background;
