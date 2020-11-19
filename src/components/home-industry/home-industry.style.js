import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";


export const HomeIndustryWrapper = styled.section`
  padding: 0 5vw 100px;
  @media only screen and (min-width: 600px){
    padding: 72px 5vw 200px;
  }
`;

export const IndustryRow = styled.div`
  display: grid;
  margin-top: 60px;
  grid-template-columns: 1fr;
  grid-gap: 30px 40px;
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const IndustryContainer = styled.div`
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${darkBlue[400]};
  height: 360px;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  >div{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  }
  >*{
    z-index: 2;
  }
  svg{
  width: 40px;
  margin-right: 15px;
  @media only screen and (min-width: 1300px){
    width: 60px;
  }
  }
  &::before{
      content: '';
      transition: 500ms ease-in-out;
      height: 100%;
      width: 100%;
      background-color: ${darkBlue[400]};
      opacity: .6;
      position: absolute;
      z-index: 1;
    }
  &:hover{
    &::before{
      opacity: .9;
    }
  }
`;

export const IndustryName = styled.h2`
  font-size: ${typeScale[40]};
  font-weight: 500;
  @media only screen and (min-width: 1300px){
  font-size: ${typeScale[50]};
  }
`;

export const SubIndustryText = styled.p`
  margin-top: 40px;
  font-size: ${typeScale[20]};
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[28]};
  }
`;
