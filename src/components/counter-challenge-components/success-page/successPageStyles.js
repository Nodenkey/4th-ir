import styled from "styled-components";
import CounterImage from "../../../assets/images/counter-banner.png";
import {Flex} from "../../toolbelt/toolbelt.style";

export const SuccessPageWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background-image: url(${CounterImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  svg {
    font-size: 5rem;
    color: white;
  }
  h4 {
    color: white;
    margin: 30px auto 10px;
  }
  h3 {
    color: #EDEDED;
  }
`;