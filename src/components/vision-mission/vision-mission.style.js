import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";


export const VisionMissionWrapper = styled.section`
  padding: 50px 0;
  >div{
  position: relative;
  }
`;

export const MissionCardSection = styled.section`
  display: grid;
  padding: 0 5vw;
  position: relative;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  *{
  animation: none !important;
  color: ${darkBlue[400]} !important;
  } 
  >div{
  padding: 30px 2vw;
  } 
  h4{
  margin: 20px 0;
  }
  >div{
    z-index: 2;
    background-color: white;
  }
  @media only screen and (min-width: 992px){
    grid-template-columns: 1fr 1fr 1fr;
  }

`;

export const MissionText = styled.p`
  font-size: ${typeScale[16]};
  color: ${darkBlue[600]};
  line-height: 180%;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[24]};
  }
`;

export const Band = styled.div`
  display: none;
  height: 120px;
  width: 100%;
  background-color: ${darkBlue[400]};
  position: absolute;
  top: calc(50% - 60px);
  left: 0;
  z-index: 1;
  @media only screen and (min-width: 992px){
  display: inline-block;
  }
`;
