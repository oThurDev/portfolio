import React from 'react';
import * as S from './styles';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <S.ContactContainer id='contact'>
        <h1>Contato</h1>
        <S.BodyContact>
            <S.LeftContainer>
                <span>Mande um E-mail</span>
                <S.FormContact>
                    <form name="contact" method="POST" >
                    <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="form-name" value="contact" />
                        <S.InputGroup>
                            <input type="text" name='contact-name' required />
                            <label>Nome Completo</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type="text" name="contact-email" required />
                            <label>Email ou Contato</label>
                        </S.InputGroup>
                        <S.InputGroup>
                            <input type='text' name="contact-msg" required />
                            <label>Escreva sua Mensagem</label>
                        </S.InputGroup>
                    </form>
                </S.FormContact>
            </S.LeftContainer>
            <S.RightContainer>
                <span>Redes Sociais</span>
                <S.ImgsContainer>
                    <S.SocialSection>
                        <a href='#' target='_blank'>
                            <FaWhatsapp  />
                        </a>
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="https://www.instagram.com/o_thuurr/" target='_blank'>
                            <FaInstagram  />
                        </a>     
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="https://www.linkedin.com/in/othurdev/" target='_blank'>
                            <FaLinkedinIn  />
                        </a>      
                    </S.SocialSection>
                    <S.SocialSection>
                        <a href="https://github.com/oThurDev" target='_blank'>
                            <FiGithub />
                        </a>
                    </S.SocialSection>
                </S.ImgsContainer>
            </S.RightContainer>
        </S.BodyContact>
    </S.ContactContainer>
  );
}

export default Contact;