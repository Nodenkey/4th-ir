import styled from "styled-components";
import Background from "../../assets/images/background_web.png";
import {darkBlue, grey, lightBlue, primaryFont, secondaryFont, typeScale} from "../../utils";
import {ButtonWrapper} from "../button/button.style";
import {Flex} from "../toolbelt/toolbelt.style";


export const ContactWrapper = styled.div`
  position: relative;
  background-image: url(${Background});
  padding: 150px 5vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media only screen and (min-width: 600px){
      &::after{
      content: '';
      height: 45%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: ${darkBlue[400]};
    }
  }
`;

export const ContactHeader = styled.h1`
  font-family: ${secondaryFont};
  font-size: ${typeScale[40]};
  text-align: center;
  font-weight: normal;
  line-height: 130%;
  color: white;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[50]};
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: auto;
  background-color: white;
  margin: 50px auto;
  padding: 50px 10px;
  max-width: 1200px;
  @media only screen and (min-width: 600px){
    padding: 50px;
  }
`;

export const Form = styled.form`
  textarea{
    font-family: ${primaryFont};
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  color: ${darkBlue[400]};
  margin-top: 20px;
`;

export const FormInput = styled.input`
  background-color: #F4F5F7;
  height: 50px;
  outline: none;
  border: none;
  padding: 20px;
  font-size: 1rem;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  background-color: #F4F5F7;
  outline: none;
  border: none;
  padding: 20px;
  font-size: 1rem;
  margin-top: 10px;
`;

export const FormAside = styled.aside`
  width: 100%;
  height: 100%;
  h4{
      margin: 50px 0 10px;
      text-align: left;
      font-weight: 500;
      text-transform: uppercase;
  }
`;

export const Paragraph = styled.p`
  color: ${grey[400]};
  line-height: 200%;
`;

export const FormButton = styled(ButtonWrapper)`
  width: 100%;
  margin-top: 50px;
`;

export const ErrorParagraph = styled.small`
  color: red;
  text-align: left;
  margin: 10px 0 0;
  min-height: 1rem;
  font-weight: 500;
  display: block;
`;

export const NamesContainer = styled(Flex)`
  flex-direction: column;
  @media only screen and (min-width: 600px){
      flex-direction: row;
      label{
      width: 45%;
      margin-top: 0;
      }
      label:first-of-type{
      margin-right: 10%;
      }
  }
`;

export const SocialImages = styled(Flex)`
  margin-top: 30px;
  svg{
   &:hover{
  .a{
    fill: ${lightBlue[100]};
  }
  }
  .a{
  transition: 300ms ease-in-out;
  fill:#7B7B7B;
  }
  width: 40px;
  }
  }
`;
