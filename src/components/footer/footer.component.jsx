import React from 'react';
import {
    CopyrightSection,
    FooterDivider,
    FooterHeaderTwo,
    FooterSectionTwo, FooterTwoNormal,
    FooterWrapper, IconsContainer, LinkedInLink, ListSection, LogoImage
} from "./footer.style";
import {Link} from "react-router-dom";
import {Container, Flex} from "../toolbelt/toolbelt.style";
import {LinkedInSvg, TwitterSvg} from "../svg/svg.component";
import WhiteLogo from "../../assets/images/white_logo.png";

const Footer = () => {

    const d = new Date();
    const currentYear = d.getFullYear();
    return (
        <FooterWrapper>
            <FooterSectionTwo>
                <ListSection>
                    <Flex>
                        <Link to='/' style={{margin: 'auto'}}><LogoImage src={WhiteLogo} alt='4th-ir logo' width='150px'/></Link>
                    </Flex>
                    <Container>
                        <FooterHeaderTwo>Locations</FooterHeaderTwo>
                        <FooterTwoNormal>Luzern, Switzerland</FooterTwoNormal>
                        <FooterTwoNormal>New York, USA</FooterTwoNormal>
                        <FooterTwoNormal>Vancouver, Canada</FooterTwoNormal>
                    </Container>
                    <Container>
                        <FooterHeaderTwo>Industries</FooterHeaderTwo>
                        <Link to='/health'><FooterTwoNormal>4 Health</FooterTwoNormal></Link>
                        <Link to='/wealth'><FooterTwoNormal>4 Wealth</FooterTwoNormal></Link>
                        <Link to='risk'><FooterTwoNormal>4 Risk</FooterTwoNormal></Link>
                        <Link to='law'><FooterTwoNormal>4 Legal</FooterTwoNormal></Link>
                    </Container>
                    <Container>
                        <FooterHeaderTwo>Products</FooterHeaderTwo>
                        <Link to='/vds'><FooterTwoNormal>Virtual Data Steward</FooterTwoNormal></Link>
                        <Link to='/vcp'><FooterTwoNormal>Virtual Claims Processor </FooterTwoNormal></Link>
                        <Link to='vsi'><FooterTwoNormal>Virtual System Integrator</FooterTwoNormal></Link>
                        <Link to='/vcia'><FooterTwoNormal>Virtual Clinical Imaging Analyst</FooterTwoNormal></Link>
                        <Link to='/vca'><FooterTwoNormal>Virtual Customer Assistant</FooterTwoNormal></Link>
                    </Container>
                    <Container>
                        <FooterHeaderTwo>Contact us</FooterHeaderTwo>
                        <FooterTwoNormal>USA +1 (630) 345-0912</FooterTwoNormal>
                        <FooterTwoNormal>EU +49 172-8295-895</FooterTwoNormal>
                        <FooterTwoNormal>Email: info @4th-ir.com</FooterTwoNormal>
                        <IconsContainer>
                            <LinkedInLink href="https://www.linkedin.com/company/4th-ir/" rel='noopener' target='_blank' alt='4th-IR linkedIn'><LinkedInSvg
                                /></LinkedInLink>
                            <LinkedInLink href="https://twitter.com/ir_4th" rel='noopener'
                                          style={{marginLeft: '20px'}} alt='4th-IR twitter' target='_blank'><TwitterSvg/></LinkedInLink>
                        </IconsContainer>
                    </Container>
                </ListSection>
            </FooterSectionTwo>
            <FooterDivider/>
            <CopyrightSection>
                <a href={require('../../assets/pdf/privacy_policy.pdf')} download="privacy policy"><FooterTwoNormal style={{fontWeight: '500'}}>Privacy Policy</FooterTwoNormal></a>
                <FooterTwoNormal style={{marginBottom: 0}}>©{currentYear} 4th-IR. All Rights Reserved.</FooterTwoNormal>
            </CopyrightSection>
        </FooterWrapper>
    );
};

export default Footer;
