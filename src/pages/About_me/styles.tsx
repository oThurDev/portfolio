import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 100px 150px;
    background-color: #3117eb; 
    height: 100vh;
`;

export const ImageMe = styled.img`
    width: 50%;
    height: 500px;
`;

export const ResumeMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    justify-content: space-around;
`;

export const ButtonsAboutMe = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 30px;
`;

export const DownloadCv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 140px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
    align-items: center;

    > a, .iconAboutMe {
        background-color: transparent;
    }

    > a {
        margin-left: 10px;
        text-decoration: none;
    }

    &:hover {
        background-color: #fff;
        box-shadow: 0 0 20px #3117eb;
        
        > a, .iconAboutMe {
            color: #3117eb;
        }
    }
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 250px;
    height: 40px;
    border: 1px solid #3117eb;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
    align-items: center;

    > a, .iconAboutMe {
        background-color: transparent;
    }

    > a {
        margin-left: 10px;
        text-decoration: none;
    }

    &:hover {
        background-color: #3117eb;
        box-shadow: 0 0 20px #3117eb;
    }
`;