import styled from "styled-components";
import {darkBlue, grey, typeScale} from "../../utils";


export const AIFeaturesWrapper = styled.section`
  margin: 50px 0;
  width: 100vw;
`;

export const AIFeatureContainer = styled.div`
  min-height: 100px;
  position: relative;
  z-index: 2;
  background-color: white;
  padding: 10px 30px;
  margin:0 auto 50px;
  max-width: max-content;
  -webkit-box-shadow: 0 5px 10px 0 #00000017;
  -moz-box-shadow: 0 5px 10px 0 #00000017;
  box-shadow: 0 5px 10px 0 #00000017;
`;

export const FeatureTitle = styled.p`
  font-size: ${typeScale[28]};
  background-color: white;
  color: ${darkBlue[300]};
  font-weight: 500;
  margin: 10px;
  @media only screen and (min-width: 1300px){
  font-size: ${typeScale[32]};
  }
`;

export const FeatureText = styled.p`
  font-size: ${typeScale[16]};
  margin: 10px;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[20]};
  }
  line-height: 180%;
  color: ${grey[400]};
  @media only screen and (min-width: 1300px){
  font-size: ${typeScale[28]};
  }
`;

export const FeatureContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5vw;
`;
