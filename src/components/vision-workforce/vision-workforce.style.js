import styled from "styled-components";
import {darkBlue} from "../../utils";
import {RoboFloat} from "../toolbelt/toolbelt.style";


export const VisionWorkforceWrapper = styled.section`
  background-color: ${darkBlue[400]};
  padding: 50px 5vw;
  margin-top: 50px;
  *{
  color: white;
  }
  @media only screen and (max-width: 600px){
  >h4:last-of-type{
  font-size: 1rem;
  }
  }
`;

export const WorkforceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 200px;
  grid-gap: 70px 10px;
  margin-top: 50px;
  >div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const VisionContainer = styled(RoboFloat)`
  font-weight: bold;
  text-align: center;
  img{
    margin-bottom: 30px;
  }
`;
