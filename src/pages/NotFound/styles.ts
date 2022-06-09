import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    margin: 10px;
    background-color: ${props => props.theme.colors.background.modal};
    border-radius: 3px;
    user-select: none;
    
    h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }

    p {
        color: ${props => props.theme.colors.text.description};
        line-height: 25px;

        span {
            color: ${props => props.theme.colors.text.description};
            font-weight: bold;
            
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        &:not(:first-child) {
            margin-top: 10px;
        }
    }
`;