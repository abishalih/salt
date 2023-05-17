import ValueImage from "infrastructure/assets/core-values.png";
import styled from "styled-components";
import Value from "./Value";
const Container = styled.div`
    background: #f8f8f8;

    display: flex;
    flex-direction: column;
    div {
        padding: 40px;
        ul {
            list-style-type: "🔔 ";
        }
        h1 {
            text-align: center;
            font-weight: 500;
            font-size: 36px;
            line-height: 30px;
            color: #029fe4;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.01em;

            color: #777777;
        }
    }
    img {
        align-self: flex-end;
        width: 85%;
    }
`;
const VALUES = [
    {
        title: "Dedication",
        content:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
    },
    {
        title: "Intellectual Honesty",
        content:
            "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse."
    },
    {
        title: "Curiosity",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
    }
];
const CoreValues = () => {
    return (
        <Container id="values">
            <div>
                <h1>Our Core Values</h1>
                <p>
                    Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget
                    egestas. Aliquet odio et lectus etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam.
                    Montes, vitae, nec amet enim.
                </p>
                <ul>
                    {VALUES.map((value, key) => (
                        <Value key={key} {...value} />
                    ))}
                </ul>
            </div>

            <img src={ValueImage} alt="" />
        </Container>
    );
};

export default CoreValues;
