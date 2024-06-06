import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    padding-bottom: 50px;
    background-color: #010207;    
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
`;

export const RightContainer = styled.div`
    > span {
        font-size: 28px;
    }
`;

export const ImgsContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 30px;

    > a svg {
        width: 80px;
        height: 50px;
        transition: .5s ease-in-out;
    }

    > a svg:hover {
        color: #fff;
        filter: drop-shadow(0 0 30px #3117eb);
        border-radius: 20px;
        transform: translateY(-15px);
    }
`;