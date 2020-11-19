import styled from "styled-components";
import {ChallengesBannerWrapper} from "../../challenges-banner/challengesStyles";
import CounterImage from "../../../assets/images/counter-banner.png";


export const PeopleCounterBannerWrapper = styled(ChallengesBannerWrapper)`
    background-image: url(${CounterImage});
`;

export const CounterBannerText = styled.div`
  min-height: 50vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 5vw 0;
`;

export const CounterBannerHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1300px){
    font-size: 3.4375rem;
  }
`;

export const Hash = styled.p`
  font-size: 1rem;
  color: #F8F8F8;
  @media only screen and (min-width: 600px) {
      font-size: 1.2rem;
  }
`;

