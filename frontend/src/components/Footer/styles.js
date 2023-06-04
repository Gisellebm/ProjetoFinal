import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;
    height: 77px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    display: flex;
    align-items: center;
    padding-inline: 38px;
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};

    > footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 43px;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
            font-size: 14px;
            line-height: 160%;
            font-weight: 400;
            
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    > img {
        width: 30px;
        height: 30px;
    
    }

    > h1 {
        width: max-content;
        font-size: 24px;
        line-height: 28px;
        
    }

`