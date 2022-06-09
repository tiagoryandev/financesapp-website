import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: 100%;
    min-height: 50px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.background.default};
    transition: transform 0.1s linear;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &.income {
        border-left: 5px solid ${props => props.theme.colors.background.green.default};
    }

    &.expense {
        border-left: 5px solid ${props => props.theme.colors.background.red.default};
    }

    .content {
        h1, p {
            user-select: none;
        }

        h1 {
            font-size: 16px;
            margin-bottom: 5px;
        }

        p {
            font-size: 14px;
            color: ${props => props.theme.colors.text.description};
        }
    }

    .data-item {
        p, span {
            white-space: nowrap;
            user-select: none;
            display: block;
            text-align: right;
        }
        
        p {
            cursor: pointer;
            margin-bottom: 5px;

            &.income {
                color: ${props => props.theme.colors.background.green.default};
            }

            &.expense {
                color: ${props => props.theme.colors.background.red.default};
            }
        }

        span {
            font-size: 14px;
            color: ${props => props.theme.colors.text.description};
        }
    }

    &:hover {
        transform: scale(1.01);
    }

    &:not(:first-child) {
        margin-top: 10px;
    }
`;