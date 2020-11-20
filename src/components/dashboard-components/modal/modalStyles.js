import styled from "styled-components";
import {lightBlue} from "../../../utils";

export const AdminModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminModalMain = styled.div`
  width: 90%;
  max-width: 600px;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 6px 4px 7px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 6px 4px 7px -1px rgba(0, 0, 0, 0.3);
  color: black;
  padding: 20px 3vw;
  p {
    color: black;
    font-size: .8rem;
    align-items: center;
    margin-bottom: 10px;
  }
  span {
    color: grey;
    width: 30px;
    display: inline;
    position: relative;
    margin: 20px;
  }
  @media only screen and (min-width: 600px){
    width: 60%;
    padding: 50px;
    p {
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
  }
`;

export const AdminModalGrid = styled.div`
  display: grid;
  grid-template-columns: .3fr 1fr;
  grid-column-gap: 20px;
  >p:first-of-type {
    color: ${lightBlue[400]};
  }
  p {
    padding: 0;
    margin: 10px;
  }
  .list p {
    display: inline-block;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 20px;
    grid-column-gap: 30px;
  }
`;