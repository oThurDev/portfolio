import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 85%;
    background-color: #05081b;
    filter: drop-shadow(0 0 5px #3117eb);
    padding: 0 150px;
    z-index: 999;

    @media (max-width: 1440px) {
        width: 80%;
    }

    @media (max-width: 1024px) {
        width: 91%;
        padding: 0 50px;
    }
`;

export const Logo = styled.img`
    height: 40px;

    &:hover {
        filter: drop-shadow(0 0 30px #3117eb);
    }
`;

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
                transition: .5s all ease-in-out;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #3117eb;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.3s ease-out;
                }

                &:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
            }

            > a:hover {
                color: #3117eb;
                filter: drop-shadow(0 0 20px #3117eb);
            }
        }
    }
`;