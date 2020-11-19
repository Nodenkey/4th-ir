import styled from "styled-components";
import {darkBlue} from "../../utils";


export const PotentialWrapper = styled.section`
  padding: 50px 5vw;
  color: ${darkBlue[400]};
`;

export const PotentialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 80px 10vw;
  margin-top: 120px;
  align-items: flex-start;
  >div{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  >div h4:first-of-type{
  margin-top: 0;
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
       >div h4:first-of-type{
  margin-top: 50px;
  }
  }
`;
