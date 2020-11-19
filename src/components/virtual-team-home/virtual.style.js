import styled from "styled-components";
import {darkBlue, grey,typeScale} from "../../utils";
import {PageHeader, RoboFloat} from "../toolbelt/toolbelt.style";


export const VirtualTeamWrapper = styled.section`
  padding: 50px 5vw 0;
  color: white;
`;

export const TeamRowOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;
  justify-content: center;
  @media only screen and (min-width: 600px){
    grid-template-columns: repeat(2, minmax(200px, 400px));
  } 
  @media only screen and (min-width: 992px){
    grid-template-columns: repeat(3, minmax(200px, 400px));
  }
`;

export const TeamRowTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;
  justify-content: center;
  margin-top: 70px;
  @media only screen and (min-width: 600px){
    grid-template-columns: repeat(2, minmax(200px, 400px));
  }
`;

export const TeamCard = styled(RoboFloat)`
  display: flex;
  padding: 50px 5vw;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${darkBlue[400]};
  align-items: center;
  -webkit-box-shadow: 0 5px 10px 0 ${grey[100]};
  -moz-box-shadow: 0 5px 10px 0 ${grey[100]};
  box-shadow: 0 5px 10px 0 ${grey[100]};
  @media only screen and (min-width: 600px){
    padding: 50px;
    min-height: 400px;
    height: 100%;
  }
`;

export const CardTitle = styled(PageHeader)`
  font-size: ${typeScale[20]};
  text-transform: capitalize;
  color: white;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[30]};
  }
`;

export const CardAction = styled.p`
  font-size: ${typeScale[24]};
  margin-bottom: 0;
  color: white;
  margin-top: 20px;
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[30]};
  }
`;
