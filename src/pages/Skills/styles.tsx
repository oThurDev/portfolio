import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    background-color: #010207;
    padding-bottom: 50px;
`;

export const SkillsIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    > .icon {
        width: 80px;
        height: 80px;
        transition: .5s;
        cursor: pointer;
    }

    > .icon:hover {
        filter: drop-shadow(0 0 20px #3117eb);
        transform: translateY(-15px);
    }

    > &:hover > :not(:hover) {
        opacity: 0.5;
    }
`;

export const SkillDescription = styled.div`
    display: flex;
    flex-direction: column;
`;