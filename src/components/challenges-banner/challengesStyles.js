import styled from "styled-components";
import {darkBlue, lightBlue} from "../../utils";
import ChallengeImage from "../../assets/images/footer.png";

export const ChallengesBannerWrapper = styled.div`
  min-height: 50vh;
  padding-bottom: 50px;
  width: 100%;
  background-color: ${darkBlue[400]};
  background-image: url(${ChallengeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ChallengeBannerTextContainer = styled.div`
  min-height: 50vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 10vw 0;
  h2 {
    text-align: left;
    margin-left: 0;
  }
  h4 {
    text-align: left;
    max-width: 900px;
    margin-left: 0;
  }
`;

export const ChallengeBar = styled.div`
  padding: 10px 10vw;
  background-color: ${lightBlue[100]};
  color: white;
  h4 {
    margin-top: 0;
    text-align: left;
  }
`;
