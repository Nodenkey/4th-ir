import styled from "styled-components";
import {darkBlue, lightBlue, typeScale} from "../../utils";


export const ApproachVirtualWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  >h4{
  padding: 0 10vw;
  }
`;

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 80px;
  width: 100vw;
  position: relative;
  >div:first-of-type{
  background-color: ${darkBlue[400]};
  }
  >div:last-of-type{
  background-color: ${lightBlue[400]};
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
  
 @media only screen and (max-width: 600px){
  >div:nth-of-type(3){
  background-color: ${lightBlue[400]};
  color: white !important;
  }
  >div:last-of-type{
  color: ${darkBlue[400]};
  background-color: ${lightBlue[300]};
  }
 }
`;

export const GridContainer = styled.div`
  width: 100%;
  padding: 50px 5vw; 
  background-color: ${lightBlue[300]};
  color: white;
`;

export const GridTitle = styled.p`
  font-weight: 600;
  font-size: ${typeScale[24]};
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[28]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[32]};
  }
`;

export const GridParagraph = styled.p`
  font-size: ${typeScale[20]};
  line-height: 140%;
    @media only screen and (min-width: 600px){
    font-size: ${typeScale[20]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[28]};
  }
`;

export const Cube = styled.img`
  position: absolute;
  width: 100px;
  z-index: 2;
  top: calc(50% - 55px);
  left: calc(50% - 50px);
  @media only screen and (max-width: 600px){
    display: none;
  }
`;
