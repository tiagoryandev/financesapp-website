import styled from "styled-components";
import { MdCalculate } from "react-icons/md";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    h1 {
        margin-left: 5px;
        font-size: 30px;
        user-select: none;
    }
`;

export const LogoIcon = styled(MdCalculate)`
    fill: ${props => props.theme.colors.icon};
    width: 40px;
    height: 40px;
`;