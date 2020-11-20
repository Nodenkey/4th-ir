import styled from "styled-components";
import Background from "../../assets/images/risk.png"

export const AdminWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  >div {
    width: 90vw;
    height: auto;
    margin: auto 5vw;
    padding: 50px 5vw;
  }
  @media only screen and (min-width: 600px) {
    >div {
      width: 50vw;
      padding: 50px;
    }
  }
`;