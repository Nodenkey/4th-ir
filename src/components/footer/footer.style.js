import styled from "styled-components";
import {darkBlue, lightBlue, typeScale} from "../../utils";
import FooterBackground from "../../assets/images/footer.png";
import {Flex} from "../toolbelt/toolbelt.style";

export const FooterWrapper = styled.footer`
  width: 100vw;
  background-color: ${darkBlue[400]};
  height: auto;
`;

export const FooterSectionOne = styled.section`
  min-height: 500px;
  position: relative;
  width: 100%;
  padding: 100px 5vw;
  color: white;
  background-color: ${darkBlue[400]};
  background-image: url(${FooterBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  >*{
  z-index: 2;
  }
  &::before{
  position: absolute;
  content: '';
  background-color: rgba(0, 49, 69, .7);
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  }
  @media only screen and (min-width: 600px){
    padding: 150px 10vw;
  }
`;

export const FooterOneHead = styled.p`
  font-weight: 600;
  font-size: ${typeScale[30]};
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[40]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[50]};
  }
`;

export const FooterOneText = styled.p`
  font-size: ${typeScale[17]};
  line-height: 170%;
  margin: 60px 0 90px;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[24]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[40]};
  }
`;

export const FooterSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 5vw;
`;

export const ListSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 40px;
  a:hover p{
  color: ${lightBlue[100]} !important;
  }
  @media only screen and (max-width: 992px){
  &>div{
  text-align: center;
  }
  }
 
  @media only screen and (min-width: 992px){
    grid-template-columns: .8fr 1fr 1fr 2fr 1.2fr;
    grid-gap: 5vw;
  }
  //>div{
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //}
`;

export const FooterHeaderTwo = styled.p`
  color: white;
  font-size: ${typeScale[20]};
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[24]};
  }
`;

export const FooterTwoNormal = styled.p`
  font-size: ${typeScale[17]};
  margin-bottom: 16px;
  margin-top: 0;
  color: white;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[22]};
  }
`;

export const LinkedInLink = styled.a`
  svg{
  &:hover{
  .a{
    fill: ${lightBlue[100]};
  }
  }
  .a{
  transition: 300ms ease-in-out;
  fill:#fff;
  }
  width: 40px;
  }
`;

export const FooterDivider = styled.div`
  height: 1px;
  width: 100%;
  margin: 30px 0;
  background-color: ${darkBlue[500]};
`;

export const CopyrightSection = styled.section`
  padding: 0 5vw 40px;
  text-align: center;
  a:hover *{
    color: ${lightBlue[100]};
  }
`;

export const IconsContainer = styled(Flex)`
  justify-content: center;
  @media only screen and (min-width: 992px){
    padding-right: 30%;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  min-width: 200px;
  max-width: 400px;
`;
