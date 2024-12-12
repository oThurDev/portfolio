import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 150px 25px 150px;
    background-color: blue;
    scroll-margin-top: 150px;
    box-shadow: 0 10px 150px blue;

    > h1 {
        text-align: center;
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