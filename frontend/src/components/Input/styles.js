import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 5px;
    padding-inline: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    > input {
        width: 100%;
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`