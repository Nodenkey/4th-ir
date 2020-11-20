import styled from "styled-components";
import {Flex} from "../../toolbelt/toolbelt.style";
import {ButtonWrapper} from "../../button/button.style";
import {darkBlue} from "../../../utils";

export const DashboardHeadWrapper = styled(Flex)`
  color: ${darkBlue[400]};
  a {
    color: ${darkBlue[400]};
  }
  justify-content: space-between;
  padding: 30px 5vw 0;
  >p {
    color: ${darkBlue[400]};
    font-weight: 500;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    >p {
      font-size: 1.3rem;
    }
  }
`;

export const DashboardButton = styled(ButtonWrapper)`
  padding: 10px 5px;
  font-size: .7rem;
  svg {
    margin-right: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: .9rem;
    padding: 15px;
  }
`;

export const DashboardElement = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  p {
    font-size: .8rem;
  }
  >div {
    margin-right: 10px;
  }
  @media only screen and (min-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const DashboardHeadGrid = styled.div`
  color: ${darkBlue[400]};
  display: grid;
  overflow-x: hidden;
  padding: 0 5%;
  grid-template-columns: 2fr 2fr;
  margin: 0 5vw;
  >div {
    display: flex;
  }
  p {
    margin: 0 0 0 10px;
    font-weight: 600;
    font-size: .8rem;
  }
  svg {
    font-size: .8rem;
  }
  @media only screen and (min-width: 600px) {
    margin: 30px 5vw;
    grid-template-columns: 2fr 2fr 2fr 2fr 1.5fr;
    p {
      font-size: 1.1rem;
    }
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const DashboardTitle = styled.div`
  background-color: ${darkBlue[400]};
  padding: 10px;
  width: 90%;
  text-align: center;
  margin: 20px 5%;
  color: white;
  font-weight: 500;
`;