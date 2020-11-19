import styled from "styled-components";
import {Grid} from "../toolbelt/toolbelt.style";
import {darkBlue} from "../../utils";

export const TeamFeaturesWrapper = styled(Grid)`
  padding: 30px 5vw;
  color: ${darkBlue[400]};
  >div{
   padding: 10px 20px;
   min-height: 300px;
   height: 100%;
   width: 100%; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   max-width: initial !important;
   >*:first-of-type{
    margin-bottom: 50px;
   }
   >*:last-of-type{
    margin-top: 50px;
   }
  }
  img{
  width: 100px;
  height: 100px;
  }
  h3{
    text-align: center;
  }
`;
