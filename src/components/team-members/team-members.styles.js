import styled from "styled-components";
import {darkBlue} from "../../utils";

export const TeamMemberWrapper = styled.section`
  padding: 100px 10vw;
  color: ${darkBlue[400]};
`;

export const Avatar = styled.img`
  vertical-align: middle;
  object-fit: cover;
  object-position: 50% 20%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
`;

