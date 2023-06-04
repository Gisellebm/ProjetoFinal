import styled from "styled-components";
import { devices } from "../../config/devices";


export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    height: 104px;
    width: 100%;
    padding-inline: 38px;
    margin: 0 auto;



    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 43px;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;

        & .search {
            width: 344px;
            padding: 12px 14px;
        }
    
        & .cart {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            max-width: 216px;
            
    
            > svg {
                width: 32px;
                height: 32px;
            }
        }  
        
        @media ${devices.laptop}{
            & .cart {
                display: none;
            }
        }

        @media ${devices.tablet} {
            & .search {
                display: none;
            }
        }
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 30px;
        height: 30px;
    }

    > h1 {
        width: max-content;
        font-size: 24px;
        line-height: 28px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 32px;
        height: 32px;
    }

`
