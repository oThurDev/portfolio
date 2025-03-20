import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    padding-bottom: 50px;
    background-color: #010207;   
    scroll-margin-top: 80px;
    height: 26vw;

    > h1 {
        text-align: center;
    }

    @media (max-width: 425px) {
        padding: 0 10px;
    }
`;

export const BodyContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    > span {
        font-size: 28px;
        margin-bottom: 200px;
    }

    @media (max-width: 320px) {
        padding: 0;
    }
`;

export const FormContact = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

export const InputGroup = styled.div`
    position: relative;
    margin: 30px 0;
    border-bottom: 2px solid #3117eb;

    > label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 16px;
        color:#fff;
        pointer-events: none;
        transition: 0.5s;
    }

    > input, textarea {
        width: 320px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        padding: 0 5px;
        background: transparent;
        border: none;
        outline: none;
        transition: .5s ease-in-out;
    }

    > input:focus~label,
    input:valid~label {
        top: -5px;
    }

    @media (max-width: 320px) {
        > input {
            width: 10px;
        }
    }
`;

export const ButtonSubmit = styled.button`
    display: flex;
    flex-direction: row;
    width: 150px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #3117eb;
    border: 1px solid #fff;
    border-radius: 30px;
    box-shadow: 0 0 10px #3117eb;
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color: #010207;
        border: 1px solid #3117eb;
        box-shadow: 0 0 30px #3117eb;
        color: #3117eb;
    }
`;

export const RightContainer = styled.div`
    width: 50%;

    > span {
        font-size: 28px;
    }

    @media (max-width: 1024px) {
        margin-top: 100px;
    }
`;

export const ImgsContainer = styled.div`
    display:flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        flex-direction: row;
    }
`

export const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > span {
        font-size: 18px;
        display: none;
    }

    > a svg {
        width: 80px;
        height: 60px;
        transition: .5s ease-in-out;
        margin-top: 30px;
    }

    > a svg:hover {
        color: #fff;
        filter: drop-shadow(0 0 30px #3117eb);
        border-radius: 20px;
        transform: translateY(-15px);
    }

    @media (max-width: 1024px) {
        width: 15%;
        justify-content: space-between;

        > span {
            display: none;
        }
    }

    @media (max-width: 425px) {
        width: 425px;
    }

    @media (max-width: 320px) {
        width: 300px;

        > a svg {
            width: 60px;
            height: 40px;
        }
    }
`;