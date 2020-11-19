import styled, {css} from "styled-components";
import {darkBlue, grey, lightBlue, secondaryFont, typeScale} from "../../utils";
import {AIFeatureContainer} from "../vision-disruptive/vision-disruptive.style";


export const MainLandingHeader = styled.h1`
  font-family: ${secondaryFont};
  font-size: ${typeScale[40]};
  text-align: center;
  font-weight: normal;
  line-height: 130%;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[66]};
  }
`;

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${props => props.center && css`
    justify-content: center;
`}  
  ${props => props.vertical && css`
    flex-direction: column;
` }  
  ${props => props.inline && css`
    display: inline-flex;
  `}
`;

export const PageHeader = styled.h4`
  font-size: ${typeScale[28]};
  margin-bottom: 30px;
  font-weight: 600;
  color: ${darkBlue[400]};
  text-align: center;
  line-height: 170%;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[40]};
  }
`;

export const PageSubHeader = styled(PageHeader)`
  font-weight: normal;
  margin-bottom: 60px;
  font-size: ${typeScale[20]};
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[40]};
  }
`;

export const PageSubHeaderAlt = styled.h4`
  line-height: 170%;
  color: ${grey[400]};
  font-weight: normal;
  text-align: center;
  font-size: ${typeScale[20]};
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[28]};
  }
`;

export const GenericLanding = styled.section`
  position: relative;
  width: 100%;
  min-height: 60vh;
  padding: 100px 12vw 40px;
  background-color: ${darkBlue[400]};
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >*{
    position: relative;
    z-index: 2;
  }
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${darkBlue[400]};
    opacity: .2;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (min-width: 600px){
    min-height: 70vh;
  }
`;

export const GenericLandingTitle = styled.h2`
  line-height: 140%;
  text-align: center;
  font-weight: 500;
  font-size: ${typeScale[30]};
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[40]};
  }
  @media only screen and (min-width: 1200px){
    font-size: 2.8125rem;
  }
`;

export const GenericLandingSubtitle = styled.h4`
  margin-top: 44px;
  font-size: ${typeScale[16]};
  line-height: 160%;
  font-weight: normal;
  text-align: center;
  @media only screen and (min-width: 600px){
  font-size: ${typeScale[22]};
  }
  @media only screen and (min-width: 1300px){
  font-size: ${typeScale[30]};
  }
`;

export const IndustryLandingHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px){
  svg{
  width: 40px;
  }
  }
`;

export const IndustryLandingTitle = styled.h1`
  font-size: ${typeScale[40]};
  font-weight: 500;
  text-transform: capitalize;
  margin-left: 30px;
  @media only screen and (min-width: 600px){
    font-size: 3.375rem;
  }
`;

export const IndustryLandingWrapper = styled.section`
  position: relative;
  ${props => props.img ? css`background-image: ${props => `url(${require(`../../assets/images/${props.img}.png`)})`}` 
    : css`background-color: ${darkBlue[400]}`} ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.size || 'cover'};
  width: 100%;
  min-height: 100vh;
  padding: 150px 5vw 60px;
  background-color: ${darkBlue[400]};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${darkBlue[400]};
  opacity: ${props => props.overlay || '.3'};
  }
  >*{
  position: relative;
  z-index: 2;
  }
  @media only screen and (min-width: 600px){
    min-height: 70vh;
    padding: 150px 12vw 60px;
  }
`;


export const GenericGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 100px;
  @media only screen and (min-width: 600px){
    grid-template-columns: ${props => `repeat(${props.num}, 1fr)`};
  }
`;

export const TwentyEightText = styled.h3`
  font-weight: normal;
  font-size: 1rem;
  color: ${props => props.color};
  text-align: center;
  line-height: 140%;
  @media only screen and (min-width: 600px){
  font-size: ${typeScale[20]};
  }
  @media only screen and (min-width: 1300px){
  font-size: ${typeScale[28]};
  }
`;

export const VirtualBlueHeader = styled.h2`
  font-size: ${typeScale[32]};
  color: ${lightBlue[500]};
  font-weight: 500;
  text-align: center;
  margin-bottom: 50px;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.phoneGap ? props.phoneGap : props.gap};
  @media only screen and (min-width: 992px){
    grid-gap: ${props => props.gap};
    grid-template-columns: ${props => props.num && `repeat(${props.num}, 1fr)`};
    ${props => props.columns && css`
      grid-template-columns: ${props.columns};
    `}
    ${props => props.top && css`align-items: flex-start`}
    ${props => props.center && css`justify-items: center`}
  }
`;

export const Image = styled.img`
  width: ${props => props.wide ? props.wide : 'auto'};
  height: ${props => props.high ? props.high : 'auto'};
`;

export const RoboFloat = styled.div`
    &:hover{
  img{
    -webkit-animation: float linear both alternate 2s infinite;
    animation: float linear both alternate 2s infinite;
  }
  }
  
  @-webkit-keyframes float{
  from{
    -webkit-transform: translateY(0);
  }
  to{
  -webkit-transform: translateY(-10px);
  }
  }
  @keyframes float{
  from{
    transform: translateY(0);
  }
  to{
  transform: translateY(-20px);
  }
  }
`;

export const SloganWrapper = styled.section`
  background-image: url("${require('../../assets/images/slogan.png')}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 5vw; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const VirtualTeamWrapper = styled(Grid)`
  background-color: ${darkBlue[400]};
  padding: 140px 5vw 50px;
  color: white;
  *{
    text-align: left;
    margin-left: 0;
  }
`;

export const TwoRowContainer = styled(Grid)`
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin: 50px 0;
  @media only screen and (min-width: 600px){
    grid-template-columns: .5fr 1fr;
  }
`;


export const ShadowBox = styled(AIFeatureContainer)`
  margin: 0;
  *{
  text-align: left;
  }
  @media only screen and (max-width: 600px){
    padding: 0;
  }
`;

export const Bolden = styled.span`
  font-weight: bold;
`;

export const SemiBolden = styled.span`
  font-weight: 600;
`;

export const LighterLink = styled.a`
  cursor: pointer;
  &:hover{
    color: ${darkBlue[400]} !important;
  } 
  &:hover >*{
    color: ${darkBlue[400]} !important;
  } 
`;

export const DeeperLink = styled.a`
  cursor: pointer;
  &:hover{
    color: ${lightBlue[100]} !important;
  } 
  &:hover >*{
    color: ${lightBlue[100]} !important;
  } 
`;


