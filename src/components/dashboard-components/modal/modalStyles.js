import styled from "styled-components";
import {darkBlue, lightBlue} from "../../../utils";

export const AdminModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminModalMain = styled.div`
  width: 90%;
  max-width: 600px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 5px;
  border: 3px solid ${darkBlue[400]};
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
  align-items: flex-start;
  >p:first-of-type {
    color: ${lightBlue[400]};
  }
  p {
    padding: 0;
    margin: 0 10px;
    width: 100%;
  }
  .list p {
    display: inline-block;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 20px;
    grid-column-gap: 30px;
  }
`;