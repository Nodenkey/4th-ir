import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";

export const TransformBusinessWrapper = styled.section`
  padding: 0 5vw 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px){
    padding: 50px 5vw 100px;
  }
`;

export const TransformServicesGrid = styled.div`
  display: grid;
  margin-top: 50px;
  padding: 40px 0;
  grid-template-columns: 1fr;
  grid-gap: 50px 100px;
  align-items: center;
  justify-items: center;
  >div{
    position: relative;
    max-width: 600px;
    height: 100%;
  }
  >div >div{
      display: flex;
      padding: 50px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
      background: white;
      height: 100%;
  }
  h4{
  font-size: ${typeScale[20]};
  line-height: 150%;
  margin-bottom: 0;
  }
  @media only screen and (min-width: 600px){
  grid-template-columns: 1fr 1fr;
  grid-gap: 200px 100px;
  h4{
  font-size: ${typeScale[24]};
  }
  }
  @media only screen and (min-width: 1300px){
  h4{
  font-size: ${typeScale[30]};
  }
  }
`;

export const TransportContainer = styled.div`
  background-color: ${darkBlue[400]};
  padding: 20px 5vw;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: ${props => props.pos};
  background-repeat: no-repeat;
  >*{
  color: white;
  margin: 0;
  }
`;

export const RotateCube = styled.img`
  width: 50%;
  height: 150%;
  position: absolute;
  z-index: 1;
  top: -25%;
  left: 25%;
  animation: rotate 4s linear both infinite;
  
  @-webkit-keyframes rotate {
  to {
    transform: rotate(360deg);
  }
  }
  @keyframes rotate {
  to {
    transform: rotate(360deg);
  }
  }
  @media only screen and (max-width: 600px){
    display: none;
  }
`;
