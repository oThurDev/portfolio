import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #05081b;
    filter: drop-shadow(0 0 5px #3117eb);
    padding: 0 150px;
`;

export const Logo = styled.div``;

export const Nav = styled.div`
    display: flex;
    
    > ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 20px;

        > li {
            > a { 
                text-decoration: none;
                transition: .5s;
            }

            > a:hover {
                color: #3117eb;
                filter: drop-shadow(0 0 20px #3117eb);
            }
        }
    }
`;