import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 150px;
    background-color: #010207;
    padding-bottom: 100px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CompaniesDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

export const Companies = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #3117eb;

    > a {
        padding: 10px;
        border-bottom: 1px solid #3117eb;
        width: 100px;
        transition: .5s;
        cursor: pointer;
    }

    > a:last-child {
        border: none;
    }

    > a:hover {
        background-color: #3117eb;
    }
`;

export const TitleCompany = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
`;