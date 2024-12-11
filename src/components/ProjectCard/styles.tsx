import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;

    > a {
        text-decoration: none;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 300px;
    background-position: center;
    background-size: cover;
    justify-content: end;
    padding: 15px;
    border-radius: 20px;
    border: 1px solid #fff;
    margin-top: 40px;

    > div .icon {
        font-size: 25px;
        margin-right: 10px;
        margin-top: 10px;
    }

    > &:last-child {
        margin-right: 0;
    }
`;