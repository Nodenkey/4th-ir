import styled from "styled-components";


export const BuildTeamWrapper = styled.section`
  padding: 135px 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4:last-of-type{
    margin-bottom: 0;
    font-size: 1.3rem;
  }
  img{
    max-width: 300px;
  }
  @media only screen and (min-width: 600px){
  img{
    max-width: initial;
    width: 400px;
  }
  h4:last-of-type{
    margin-bottom: 0;
    font-size: 1.7rem;
  }
  }
`;
