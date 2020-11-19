import styled from "styled-components";
import {grey} from "../../utils";
import {Grid} from "../toolbelt/toolbelt.style";

export const ChallengeListWrapper = styled(Grid)`
  background-color: ${grey[500]};
  padding: 100px 5vw;
  width: 100%;
  justify-items: center;
  @media only screen and (min-width: 600px){
    padding: 100px 10vw;
  }
`;
