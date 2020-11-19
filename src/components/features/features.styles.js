import styled from "styled-components";
import {darkBlue} from "../../utils";
import {AdvantageHeader} from "../advantages/advantages.style";
import {Flex, TwentyEightText} from "../toolbelt/toolbelt.style";


export const FeaturesWrapper = styled.section`
  padding: 0 0 100px;
  color: ${darkBlue[400]};
`;

export const FeatureMain = styled.div`
  background-color: #E9F9FF;
  margin: 50px auto 0;
  -webkit-box-shadow: 0 5px 10px #B0CFDB6C;
  -moz-box-shadow: 0 5px 10px #B0CFDB6C;
  box-shadow: 0 5px 10px #B0CFDB6C;
  padding: 50px 20px;
  width: 90vw;
  *{
    text-align: left !important;
  }
  @media only screen and (min-width: 992px){
    padding: 50px 100px;
    width: 50vw;
  }
`;

export const FeatureHeader = styled(AdvantageHeader)`
  color: ${darkBlue[400]};
  margin-bottom: 15px;
`;

export const IndividualFeature = styled(Flex)`
  flex-direction: column;
  @media only screen and (min-width: 992px){
  transform: translateX(-140px);
  flex-direction: row;
  }
`;

export const FeatureCube = styled.img`
  margin-right: 50px;
  height: 130px !important;
  @media only screen and (max-width: 992px){
  height: 80px !important;
  margin: 30px 0;
  }
`;

export const FeatureContainer = styled.div`
    margin-bottom: 40px;
    position: relative;
    *{
    z-index: 2;
    }
   @media only screen and (min-width: 992px){
    width: calc(100% + 140px);
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 55%;
  left: 0;
  background-color: #018A9F;
  position: absolute;
  transform: translateX(-90%);
  z-index: 0;
  @media only screen and (max-width: 992px){
    transform: translate(-20%, 70px);
    width: 70%;
  }
`;

export const FeatureText = styled(TwentyEightText)`
  width: 100%;
`;
