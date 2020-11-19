import React from 'react';
import {
    HomeIndustryWrapper,
    IndustryContainer,
    IndustryName,
    IndustryRow,
    SubIndustryText
} from "./home-industry.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import Health from "../../assets/images/health.png";
import Wealth from "../../assets/images/wealth.png";
import Risk from "../../assets/images/risk.png";
import Law from "../../assets/images/law.png";
import {LogoOne} from "../svg/svg.component";
import {Link} from "react-router-dom";

const HomeIndustry = () => {
    return (
        <HomeIndustryWrapper>
            <PageHeader>Make AI work for your industry</PageHeader>
            <IndustryRow>
                <Link to='/health'><IndustryContainer style={{backgroundImage: `url(${Health})`}}>
                    <Container><LogoOne/><IndustryName>Health</IndustryName></Container>
                    <SubIndustryText>Deploy AI-powered solutions 4 Health</SubIndustryText>
                </IndustryContainer></Link>
                <Link to='/wealth'><IndustryContainer style={{backgroundImage: `url(${Wealth})`}}>
                    <Container><LogoOne/><IndustryName>Wealth</IndustryName></Container>
                    <SubIndustryText>Make AI work 4 wealth</SubIndustryText>
                </IndustryContainer></Link>
                <Link to='/risk'><IndustryContainer style={{backgroundImage: `url(${Risk})`}}>
                    <Container><LogoOne/><IndustryName>Risk</IndustryName></Container>
                    <SubIndustryText>Reduce risk with AI 4 Risk</SubIndustryText>
                </IndustryContainer></Link>
                <Link to='/law'><IndustryContainer style={{backgroundImage: `url(${Law})`}}>
                    <Container><LogoOne/><IndustryName>Legal</IndustryName></Container>
                    <SubIndustryText>Leverage the power of AI 4 Law</SubIndustryText>
                </IndustryContainer></Link>
            </IndustryRow>
        </HomeIndustryWrapper>
    );
};

export default HomeIndustry;
