import styled from "styled-components";
import {darkBlue, grey, lightBlue, typeScale} from "../../utils";

export const ButtonWrapper = styled.button`
  background-color: ${props => props.color ? props.color:  lightBlue[100]};
  padding: 18px 39px;
  transition: 300ms ease-in-out;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: ${typeScale[16]};
  border: none;
  &:active, &:focus{
  outline: none;
  }
  &:hover{
    background-color: ${lightBlue[200]};
  }
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[24]};
  }
`;

export const ButtonWrapperSecondary = styled(ButtonWrapper)`
  background-color: ${darkBlue[100]};
  font-size: ${typeScale[20]};
  padding: 17px 68px;
  &:hover{
    background-color: ${darkBlue[500]};
  }
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[26]};
  }
`;

export const ButtonWrapperTertiary = styled(ButtonWrapperSecondary)`
  background-color: white;
  color: ${darkBlue[400]};
  &:hover{
    background-color: ${grey[500]};
  }
`;

export const ButtonWrapperFourth = styled(ButtonWrapperSecondary)`
  background-color: ${darkBlue[400]};
  color: white;
  &:hover{
  background-color: ${darkBlue[100]};
  }
`;
