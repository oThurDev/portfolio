import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;

    > a {
        text-decoration: none;
    }

    @media (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr) !important; 
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr) !important;
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
    transition: all ease-in-out 0.5s;

    > div .icon {
        font-size: 25px;
        margin-right: 10px;
        margin-top: 10px;
    }

    > &:last-child {
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px #3117eb;
    }

    @media (max-width: 425px) {
        width: 200px;
        height: 150px;
    }
`;