import styled from "styled-components";
import {darkBlue} from "../../utils";
import {ShadowBox} from "../toolbelt/toolbelt.style";

export const ChallengeCardWrapper = styled(ShadowBox)`
  max-width: 500px;
  padding: 0;
`;

export const ChallengeBanner = styled.div`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  padding: 30px 5vw;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${darkBlue[400]};
  color: white;
  h4 {
    margin: 0;
    font-weight: 600;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    padding: 30px 50px;
  }
`;

export const ChallengeText = styled.div`
  padding: 30px 5vw;
  p {
    color: ${darkBlue[400]};
    text-align: left;
  }
  p:last-of-type {
    font-weight: 600;
    margin-top: 40px;
  }
  button {
    display: block;
    font-size: 1rem;
    margin: 30px auto 0
  }
  @media only screen and (min-width: 600px) {
    padding: 30px;
    p {
      text-align: center;
  }
  }
`;
