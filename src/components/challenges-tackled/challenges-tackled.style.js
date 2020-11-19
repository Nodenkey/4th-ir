import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";


export const ChallengeGrid = styled.div`
  padding: 100px 5vw;
  display: grid;
  grid-template-columns: 1fr;
  color: ${darkBlue[400]};
  grid-gap: 50px;
  align-items: center;
  *{
  text-align: left;
  }
  >h4{
  margin-bottom: 0 !important;
  }
  @media only screen and (max-width: 992px){
    >div{
    h4:first-of-type{
    font-size: ${typeScale[20]};
    }
    h4:last-of-type{
        font-size: ${typeScale[16]};
    }
  }
  }
  @media only screen and (min-width: 992px){
    grid-template-columns: 1fr .2fr 3fr;
    align-items: center;
  }
`;

export const Seperator = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${darkBlue[400]};
  margin: 0 auto;
  @media only screen and (min-width: 992px){
    height: 100%;
    width: 3px;
  }
`;
