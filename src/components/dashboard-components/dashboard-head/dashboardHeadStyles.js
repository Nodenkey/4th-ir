import styled from "styled-components";
import {Flex} from "../../toolbelt/toolbelt.style";
import {ButtonWrapper} from "../../button/button.style";

export const DashboardHeadWrapper = styled(Flex)`
  color: white;
  a {
    color: white;
  }
  justify-content: space-between;
  padding: 30px 5vw 0;
`;

export const DashboardButton = styled(ButtonWrapper)`
  padding: 10px 5px;
  font-size: .7rem;
  svg {
    margin-right: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1.1rem;
    padding: 20px;
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
  color: white;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 2fr 2fr;
  margin: 50px 5vw 30px;
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
    grid-template-columns: 2fr 2fr 2fr 2fr 1.5fr;
    p {
      font-size: 1.2rem;
    }
    svg {
      font-size: 1.2rem;
    }
  }
`;