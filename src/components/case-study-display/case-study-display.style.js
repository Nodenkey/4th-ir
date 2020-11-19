import styled from "styled-components";
import {Grid} from "../toolbelt/toolbelt.style";


export const DisplayWrapper = styled(Grid)`
  padding: 100px 5vw;
  justify-items: center;
  a{
    position: relative;
    transition: 500ms ease-in-out;
    &::before{
        transition: 500ms ease-in-out;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 2;
        display: inline-block;
        background: none
    }
    &:hover{
        &::before{
          background-color: rgb(3, 41, 55, .5);
        }
  }
  }
  img{
  width: 100%;
  max-height: 350px;
  max-width: 600px;
  @media only screen and (min-width: 600px){
    height: 350px;
  }
  }
`;
