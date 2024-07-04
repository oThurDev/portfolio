import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 100px 150px;
    background-color: #010207;
    scroll-margin-top: 80px;
`;

export const ResumeMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    > .resume, h3 {
        margin-top: 20px;
    }
`;