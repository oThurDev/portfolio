import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 150px;
    background-color: #010207;
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    > span {
        font-size: 25px;
        width: 500px;
    }

    > h1 {
        font-size: 40px;
    }
`;

export const ButtonsHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

export const ButtonsSocials = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const DownloadCv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: #3117eb;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #3117eb;
    border-radius: 20px;
    transition: .5s;
    cursor: pointer;
    align-items: center;

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
`;

export const ButtonContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #3117eb;
    border-radius: 20px;
    transition: .5s;
    cursor: pointer;
    align-items: center;

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