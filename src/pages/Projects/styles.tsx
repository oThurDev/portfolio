import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010207;
    padding: 100px 150px 50px 150px;
    scroll-margin-top: 80px;

    > h1 {
        margin-top: 50px;
    }

    > a {
        text-decoration: none;
    }
`;

export const ProjectsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    margin-left: 50px;
`;

export const ButtonProjects = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: blue;
    margin-top: 40px;
    cursor: pointer;
    transition: all ease-in-out .5s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px blue;
    }
`;