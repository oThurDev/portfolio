import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    padding: 120px 150px 25px 150px;
    background-color: #010207;

    > h1 {
        text-align: center;
    }

    @media (max-width: 420px) {
        display: none;
    }
`;

export const SkillsCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: yellow !important;
    margin-top: 30px;
    margin-bottom: 30px;

    .icon {
        font-size: 80px;
        color: black;
        margin-top: -25px;
        z-index: 2;
    }
`;

export const ImgsCard = styled.img`
    width: 400px;
    height: 300px;
    object-fit: cover;
    transform: scale(1.1);
    z-index: 1;
    margin-top: -10px;
    border-radius: 10px 10px 0 0;
`;

export const ProgrammerSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: blue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 50px blue;

    > h3 {
        padding-left: 20px;
    }

    > ul {
        padding-left: 60px;
        margin-bottom: 20px;
    }
`;

export const DesignSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: blue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 50px blue;

    > h3 {
        padding-left: 20px;
    }

    > ul {
        padding-left: 60px;
        margin-bottom: 20px;
    }
`;

export const SoftSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: blue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 50px blue;

    > h3 {
        padding-left: 20px;
    }

    > ul {
        padding-left: 60px;
        margin-bottom: 20px;
    }
`;

export const SkillsIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin:40px 0 20px 0;

    > .icon {
        width: 80px;
        height: 80px;
        transition: .5s;
        cursor: pointer;
    }

    > .icon:hover {
        filter: drop-shadow(0 0 10px #000);
        transform: translateY(-15px);
    }
`;