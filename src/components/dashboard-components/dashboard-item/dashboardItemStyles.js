import styled from "styled-components";
import {darkBlue} from "../../../utils";

export const DashboardItemWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr;
  grid-column-gap: 20px;
  position: relative;
  border-bottom: 2px solid ${darkBlue[300]};
  padding: 30px 5vw;
  cursor: pointer;
  transition: 300ms ease-in-out;
  font-size: .7rem;
  color: #F9F9F9;
  &:hover {
    background-color: ${darkBlue[300]};
  }
  div {
    display: flex;
    justify-content: space-between;
    min-height: 20px;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: 2fr 2fr 2fr 2fr 1.5fr;
    font-size: .9rem;
  }
`;

export const Bar = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${darkBlue[300]};
`;