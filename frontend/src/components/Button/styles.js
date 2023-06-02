import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    border-radius: 5px;
    border: none;
    padding: 12px 24px;

    
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`