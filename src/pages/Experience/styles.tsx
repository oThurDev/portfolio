import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 150px 100px 150px;
    background-color: #010207;
    scroll-margin-top: 80px;

    @media (max-width: 1024px) {
        padding: 0 50px 100px 50px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    @media (max-width: 425px) {
        max-width: 425px;

        > h1 {
            text-align: center;
        }
    }
`;

export const CompaniesDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    background-color: #3117eb;
    padding: 20px;
    border-radius: 30px;
    width: 800px;

    @media (max-width: 425px) {
        width: 300px;
        margin-left: 0;
    }

    @media (max-width: 375px) {
        width: 320px;
    }
    
    @media (max-width: 320px) {
        width: 280px;
    }
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

    @media (max-width: 425px) {
        flex-direction: row;
        display: none;
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

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 320px) {
        > h2 {
            font-size: 24px;
        }
    }
`;