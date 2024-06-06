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
    width: 60px;
    height: 60px;
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

export const GitHubButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 60px;
    height: 60px;
    border: 1px solid #3117eb;
    border-radius: 50%;
    transition: .5s;
    cursor: pointer;
    align-items: center;
    justify-content: center;

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

export const ToggleBtn = styled.div`
    > input {
        display: none;
    }
`;

export const DisplayBtn = styled.div`
    display: flex;

    > label {
        border: solid;
        width: 120px;
        height: 50px;
        border-radius: 200px;
        cursor: pointer;
    }
`;

export const CircleBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    > .icon {
        width: 40px;
        height: 40px;
        position: absolute;
    }

    > .sun {
        margin-top: 0%;
    }

    > .moon {
        margin-top: -150%;
    }
`;