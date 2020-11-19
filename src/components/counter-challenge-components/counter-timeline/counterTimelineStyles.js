import styled from "styled-components";
import {darkBlue} from "../../../utils";

export const CounterTimelineWrapper = styled.div`
  background-color: ${darkBlue[400]};
  position: relative;
  padding: 50px 5vw;
  h4, h3 {
    color: white;
  }
  h3 {
    font-weight: 500;
    text-align: left;
    height: auto; 
  }
  >h3{
    max-width: 300px;
    line-height: 180%;
    @media only screen and (min-width: 900px) {
      margin: 30px 0 0;
      width: 100%;
    }
  }
`;

export const TimelineSection = styled.div`
  h3:first-of-type {
    margin-bottom: 80px;
    min-height: 80px;
  }
  h3:last-of-type {
    font-size: .8rem;
  }
  @media only screen and (min-width: 900px){
    h3:last-of-type {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 1300px){
    h3:last-of-type {
      font-size: 24px;
    }
 }
  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 20vw 20vw;
    grid-gap: 40vw;
    h3:first-of-type {
      height: auto;
    }
  }
`;

export const TimelineBar = styled.div`
  height: 25px;
  width: 90vw;
  position: absolute;
  top: 18%;
  background: rgb(22,115,142);
  background: linear-gradient(90deg, rgba(22,115,142,1) 0%, rgba(33,150,169,1) 35%, rgba(50,204,212,1) 100%);
  @media only screen and (min-width: 900px){
    top: 50%;
  }
  @media only screen and (min-width: 1300px){
    top: 240px
  }
  @media only screen and (max-width: 900px) {
    height: 65%;
    width: 25px;
    top: 12%;
    background: linear-gradient(180deg, rgba(22,115,142,1) 0%, rgba(33,150,169,1) 35%, rgba(50,204,212,1) 100%);
    left: 50vw;
  }
`;