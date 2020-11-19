import styled from "styled-components";
import {grey, lightBlue, typeScale} from "../../utils";

export const AdvantagesWrapper = styled.section`
  padding: 100px 5vw;
  background-color: #ACACAC29;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
  margin-top: 150px;
  }
`;

export const AdvantageHeader = styled.h3`
  font-size: ${typeScale[20]};
  color: ${grey[400]};
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
  @media only screen and (min-width: 600px){
  font-size: ${typeScale[26]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[32]};
  }
`;

export const AdvantageContainer = styled.div`
  position: relative;
  align-self: flex-start;
  height: 100%;
  width: 100%;
  padding: 30px 0;
  transition: 300ms ease-in;
  &:hover{
  background-color: white;
      h3{
        color: ${lightBlue[400]};
      }
      &::after{
        content: '';
        width: 100%;
        height: 20px;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        background-color: ${lightBlue[400]};
      }
  }
  @media only screen and (min-width: 600px){
      padding: 30px;
  }
`;
