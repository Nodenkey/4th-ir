import styled from "styled-components";
import {ContactWrapper} from "../contact/contact.style";
import {darkBlue} from "../../utils";

export const CounterRegisterWrapper = styled(ContactWrapper)`
  h1, h2 {
    font-family: Ubuntu,sans-serif;
    color: white;
    text-align: center;
  }
  h2 {
    font-weight: 400;
    margin: 20px auto;
  }
  >div {
    max-width: 885px;
    padding: 24px 20px 50px;
  }
  .radio-label {
    font-weight: 400;
    color: ${darkBlue[300]};
    flex-direction: row;
    align-items: center;
    input {
      margin: 0 20px 0 0;
      height: 10px;
    }
  }
  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2.1875rem;
    }
    >div {
      padding: 24px 50px 50px;
    }
  }
`;