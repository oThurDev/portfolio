import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 150px;
    background-color: #010207;
    padding-bottom: 50px;
`;

export const SkillsIcon = styled.div`
    display: flex;
    flex-direction: column;

    > .icon {
        width: 80px;
        height: 80px;
        transition: .5s;
        gap: 10px;
    }

    > .icon:hover {
        filter: drop-shadow(0 0 20px #3117eb);
    }
`;

export const SkillDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;