import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto 20px;

    div.separator {
        width: 100%;
        height: 2px;
        margin: 30px 0;
        background-color: ${props => props.theme.colors.background.modal};

        @media (max-width: 900px) {
            margin: 20px 0;
        }
    }
`;

export const Header = styled.div`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
        margin-left: 20px;

        h1 {
            user-select: none;
            font-size: 40px;
            max-width: 300px;
            margin-bottom: 20px;
        }

        button {
            margin: 0;
        }
    }

    img {
        user-select: none;
        width: 100%;
        max-width: 500px;
        border-radius: 5px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 900px) {
        display: block;

        .content {
            h1 {
                max-width: 100%;
                margin: 0 auto;
                text-align: center;
            }

            button {
                margin: 20px auto;
            }
        }

        img {
            display: block;
            margin: 40px auto;
            width: calc(100% - 20px);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }
    }
`;

export const About = styled.div`
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    
    .content {
        user-select: none;

        h1 {
            font-size: 40px;
            margin-bottom: 20px;
        }

        p {
            font-size: 20px;
            color: ${props => props.theme.colors.text.description};
            width: 100%;
            max-width: 400px;
        }
    }

    svg {
        margin: 0 50px;
        width: 150px;
        height: 150px;
        transform: rotate(20deg);
    }

    @media (max-width: 700px) {
        svg {
            display: none;
        }

        .content {
            margin: 0 auto;
            text-align: center;
        }
    }
`;