import styled from "styled-components";
import {GenericLandingSubtitle} from "../toolbelt/toolbelt.style";
import {darkBlue} from "../../utils";

export const ProductsAdvWrapper = styled.div`
  display: grid;
  padding: 100px 5vw;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  align-items: center;
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProductsAdvText = styled(GenericLandingSubtitle)`
  color: ${darkBlue[400]};
  font-weight: 600;
  margin-top: 0;
`;