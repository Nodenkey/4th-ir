import styled from "styled-components";
import {darkBlue} from "../../../utils";

export const DashboardItemWrapper = styled.div`
  display: grid;
  width: 90%;
  margin: 0 5%;
  grid-template-columns: 2fr 2fr;
  grid-column-gap: 20px;
  position: relative;
  padding: 20px 5vw;
  cursor: pointer;
  transition: 300ms ease-in-out;
  font-size: .8rem;
  font-weight: 500;
  color: ${darkBlue[400]};
  &:hover {
    -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);  
    -moz-box-shadow:    0 3px 3px rgba(0, 0, 0, 0.2);  
    box-shadow:         0 3px 3px rgba(0, 0, 0, 0.2);
  }
  div {
    display: flex;
    justify-content: space-between;
    min-height: 20px;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: 2fr 2fr 2fr 2fr 1.5fr;
    font-size: 1rem;
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${darkBlue[300]};
`;