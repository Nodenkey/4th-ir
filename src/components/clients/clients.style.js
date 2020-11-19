import styled from "styled-components";
import {darkBlue, typeScale} from "../../utils";

export const ClientsWrapper = styled.section`
  >h4{
  padding: 50px 5vw;
  margin-bottom: 0;
  }
`;

export const CarouselWrapper = styled.div`
  padding: 50px 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TestimonialText = styled.p`
  font-size: ${typeScale[16]};
  color: #313131;
  line-height: 180%;
  max-width: 750px;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale[24]};
  }
  @media only screen and (min-width: 1300px){
    font-size: ${typeScale[28]};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  @media only screen and (min-width: 600px){
  flex-direction: row;
  margin-left: 15%;
  }
`;

export const CompanyImage = styled.img`
  width: 100px !important;
  height: fit-content;
  margin-right: 30px;
  @media only screen and (min-width: 600px){
    width: 190px !important;
  }
`;

export const ClientName = styled.p`
  font-size: ${typeScale[22]};
  margin: 20px 0 10px;
  font-weight: 600;
  color: ${darkBlue[400]};
  @media only screen and (min-width: 600px){
  font-size: ${typeScale[24]};
  margin: 0 0 10px;
  }
`;

export const ClientPosition = styled.p`
  font-size: ${typeScale[16]};
  font-weight: normal;
  color: ${darkBlue[400]};
  margin: 0;
  @media only screen and (min-width: 600px){
  font-size: ${typeScale[22]};
  }
`;
