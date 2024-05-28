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
`;

export const Images = styled.img`
    transition: .5s;

    &:hover {
        filter: drop-shadow(0 0 30px #3117eb);
        transform: scale(1.1);
    }
`;

export const ButtonsHome = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    gap: 20px;
`;

export const LinkedinButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 140px;
    height: 40px;
    border: 1px solid #3117eb;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
    align-items: center;

    > a, .iconHome {
        background-color: transparent;
    }

    > a {
        text-decoration: none;
        margin-left: 10px;
    }

    &:hover {
        background-color: #3117eb;
        box-shadow: 0 0 20px #3117eb;
    }
`;

export const GitHubButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 140px;
    height: 40px;
    border: 1px solid #3117eb;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    > a, .iconHome {
        background-color: transparent;
    }

    > a {
        text-decoration: none;
        margin-left: 10px;
    }

    &:hover {
        background-color: #3117eb;
        box-shadow: 0 0 20px #3117eb;
    }
`;