import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";
import LandingImage from "../../assets/images/background_web.png";


export const HomeLandingWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 5vw;
  background-color: ${darkBlue[400]};
  background-image: url(${LandingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >div{
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  button{
  margin-top: 35px;
  }
  @media only screen and (min-width: 600px){
   button{
  margin-top: 59.5px;
  }
  }
`;

export const SubText = styled.p`
  font-size: ${typeScale[20]};
  line-height: 150%;
  margin-top: 30px;
  text-align: center;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[30]};
    margin-top: 48.5px;
  }
`;


