import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 150px 100px 150px;
    background-color: #010207;
    scroll-margin-top: 80px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CompaniesDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    background-color: #3117eb;
    padding: 20px;
    border-radius: 30px;
    width: 800px;
`;

export const Companies = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #3117eb;
    margin-top: 30px;

    > a {
        padding: 10px;
        border-bottom: 1px solid #3117eb;
        width: 100px;
        transition: .5s;
        cursor: pointer;
    }

    > a:last-child {
        border: none;
        border-radius: 0 0 30px 0;
    }

    > a:first-child {
        border-radius: 0 30px 0 0;
    }

    > a:hover {
        background-color: #3117eb;
    }
`;

export const CompanyDetail = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;

    > span {
        margin-top: 30px;
    }
`;

export const TitleCompany = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;