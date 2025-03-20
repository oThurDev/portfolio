import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 150px;
    background-color: #010207;

    @media (max-width: 1024px) {
        padding: 0;
        justify-content: center;
    }
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 700px;

    > span {
        font-size: 25px;
        width: 500px;
    }

    > h1 {
        font-size: 40px;
    }

    @media (max-width: 425px) {
        width: 400px;

        > span {
            width: 300px;
        }
    }

    @media (max-width: 375px) {
        > span {
            font-size: 20px;
        } 

        > h1 {
            font-size: 25px;
        }
    }

    @media (max-width: 320px) {
        > h1 {
            font-size: 22px;
        }
    }
`;

export const RightHome = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PerfilImg = styled.img`
    height: 600px;
    width: 600px;
    filter: drop-shadow(0 0 15px #3117eb);
    /* animation: ImageAnimation 2s ease-in-out infinite;

    @keyframes ImageAnimation {
        0% {
            margin-top: 40px;
        }
        50% {
            margin-top: -40px;
            scale: 1.05;
        }
        100% {
            margin-top: 40px;
        }
    } */

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const ButtonsSocials = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 400px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #3117eb;
    border-radius: 20px;
    transition: .5s;
    cursor: pointer;
    align-items: center;
    margin-bottom: 20px;

    > a {
        text-decoration: none;
    }

    &:hover {
        background-color: #010207;
        box-shadow: 0 0 20px #010207;
        border: 1px solid #3117eb;
        box-shadow: 0 0 30px #3117eb;
        
        > a {
            color: #3117eb;
        }
    }

    @media (max-width: 375px) {
        width: 350px;
    }

    @media (max-width: 320px) {
        width: 300px;
    }
`;

export const ButtonSocial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #3117eb;
    border-radius: 50%;
    transition: .5s;
    cursor: pointer;
    align-items: center;

    > a, .iconHome {
        background-color: transparent;
    }

    > a .iconHome {
        font-size: 20px;
    }

    &:hover {
        background-color: #3117eb;
        box-shadow: 0 0 20px #3117eb;
    }
`;