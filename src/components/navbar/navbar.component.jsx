import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {
    AboutDropDown,
    Brand, Buffer,
    ContactItem,
    HeaderWrapper, LogoTwoWrapper,
    MenuBar,
    MenuButton,
    Nav,
    NavHover,
    NavItem, NavWrapper, ProductsDropDown, ProductSection, VerticalDivider
} from "./navbar.style";
import Logo from "../../assets/images/logo.png";
import LogoTwo from "../../assets/images/logo2.svg";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [about, setAbout] = useState(false);
    const [products, setProducts] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
        setAbout(false);
        setProducts(false)
    }


    const toggleAbout = () => {
        setAbout(!about);
        setProducts(false);
    }

    const toggleProducts = () => {
        setAbout(false);
        setProducts(!products)
    }

    const aboutItemClick = () => {
        toggleMenu();
        setAbout(false);
    }

    const productItemClick = () => {
        toggleMenu();
        setProducts(false);
    }

    return (
        <HeaderWrapper>
            <NavLink to='/'><Brand src={Logo} alt='logo'/></NavLink>
            <NavWrapper show={toggle}>
                <Nav show={toggle}>
                    <NavItem exact to='/' onClick={toggleMenu}>Home</NavItem>
                    <NavHover>
                        <p onClick={toggleProducts}>Products</p>
                        <Buffer/>
                        <ProductsDropDown show={products}>
                            <ProductSection>
                               <Link to='/virtual-team'><p>Our Virtual Team</p></Link>
                                <NavLink to='/vds' onClick={productItemClick}>Virtual Data Steward</NavLink>
                                <NavLink to='/vcp' onClick={productItemClick}>Virtual Claims Processor</NavLink>
                                <NavLink to='/vsi' onClick={productItemClick}>Virtual Systems Integrator</NavLink>
                                <NavLink to='/vcia' onClick={productItemClick}>Virtual Clinical Imaging
                                    Analyst</NavLink>
                                <NavLink to='/vca' onClick={productItemClick}>Virtual Customer Assistant</NavLink>
                                <NavLink to='/virtual-team' onClick={productItemClick}>Build your own Team</NavLink>
                            </ProductSection>
                            <VerticalDivider/>
                            <ProductSection>
                                <Link to='/industry'><p>Industry</p></Link>
                                <NavLink to='/health' onClick={productItemClick}><LogoTwoWrapper src={LogoTwo}
                                                                                                 alt='logo'/>Health</NavLink>
                                <NavLink to='/wealth' onClick={productItemClick}><LogoTwoWrapper src={LogoTwo}
                                                                                                 alt='logo'/>Wealth</NavLink>
                                <NavLink to='/risk' onClick={productItemClick}><LogoTwoWrapper src={LogoTwo}
                                                                                               alt='logo'/>Risk</NavLink>
                                <NavLink to='/law' onClick={productItemClick}><LogoTwoWrapper src={LogoTwo} alt='logo'/>Legal</NavLink>
                                <NavLink to='/case-study' onClick={productItemClick} className='underline'>Case Studies</NavLink>
                                <NavLink to='/innovation-challenges' onClick={productItemClick} className='underline' style={{marginTop: 10}}>Innovation Challenges</NavLink>
                            </ProductSection>
                        </ProductsDropDown>
                    </NavHover>
                    <NavHover>
                        <p className='about' onClick={toggleAbout}>
                            About us</p>
                        <Buffer/>
                        <AboutDropDown show={about}>
                            <NavLink to='/vision' onClick={aboutItemClick}>Our Vision</NavLink>
                            <NavLink to='/team' onClick={aboutItemClick}>Our Team</NavLink>
                            <NavLink to='/partners' onClick={aboutItemClick}>Our Partners</NavLink>
                        </AboutDropDown>
                    </NavHover>
                    <ContactItem to='/contact' onClick={toggleMenu}>Contact us</ContactItem>
                </Nav>
            </NavWrapper>
            <MenuButton aria-label="Toggle menu" aria-expanded={toggle} open={toggle} onClick={toggleMenu}>
                <MenuBar/>
                <MenuBar style={{margin: '7px 0'}}/>
                <MenuBar/>
            </MenuButton>
        </HeaderWrapper>
    );
};

export default NavBar;
