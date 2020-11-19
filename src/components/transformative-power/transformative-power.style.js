import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";

export const TransformativeWrapper = styled.section`
    -webkit-box-shadow: 0 3px 6px 0 #00000029;
    -moz-box-shadow: 0 3px 6px 0 #00000029;
    box-shadow: 0 3px 6px 0 #00000029;
    padding: 80px 5vw;
    margin-bottom: 50px;
    background-color: white;
    >div{
    margin-top: 80px;
    }
    h4 svg{
    height: 35px;
    transform: translateY(5px);
    }
    @media only screen and (min-width: 600px){
    h4 svg{
    width: 35px;
    height: initial;
    transform: translateY(10px);
    }
    }
`;

export const TransformativeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 0;
  @media only screen and (min-width: 600px){
  flex-direction: row;
  }
`;

export const TransformativeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransformativeTitle = styled.h5`
  font-size: ${typeScale[26]};
  color: ${darkBlue[400]};
  text-align: center;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[30]};
  }
  @media only screen and (min-width: 600px){
      margin-left: 0;
      text-align: left;
  }
`;

export const TransformativeText = styled.p`
    font-family: 'Ubuntu',sans-serif;
    color: #4F6168;
    line-height: 200%;
    margin-top: 20px;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale[20]};
      line-height: 160%;
    }
    @media only screen and (min-width: 1300px){
    font-size: ${typeScale[24]};
    }
`;

export const TransformativeImage = styled.img`
  height: 120px;
  margin-bottom: 50px;
  @media only screen and (min-width: 600px){
  margin-bottom: 0;
  margin-right: 50px;
  }
`;
