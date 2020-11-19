import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {darkBlue, lightBlue, typeScale} from "../../utils";


const activeClassName = 'active';

export const HeaderWrapper = styled.header`
  transition: 500ms ease-in-out;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${darkBlue[400]};
  padding: 15px 0;
  z-index: 3;
  @media only screen and (max-width: 992px){
  a:hover{
  color: #cb8db9;
  }
  }
  @media only screen and (min-width: 992px){
    align-items: center;
    padding: 30px 0;
    background-color: transparent;
  }
`;

export const MenuButton  = styled.div`
  margin-right: 5vw;
  >div:first-child {
      transform: ${({ open }) => open ? 'rotate(46deg) translateY(15px)' : 'rotate(0) translateY(0)'};
    }
  >div:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
  >div:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-46deg) translateY(-14px)' : 'rotate(0)'};
    }
  @media only screen and (min-width: 992px){
    display: none;
  }
`
export const MenuBar = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 3px;
  background-color: white;
  transition: all 0.3s linear;
`;

export const Nav = styled.nav`
  transition: 300ms ease-in-out;
  width: 100vw;
  transform-origin: top;
  transform: ${props => props.show ? 'translateY(0px)' : 'translateY(-600px)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  background-color: ${darkBlue[400]};
  *{
  margin-bottom: 10px;
  }
  

  @media only screen and (min-width: 992px){
    width: auto;
    flex-direction: row;
    background-color: transparent;
    padding: 0;
    margin-right: 5vw;
    & *:last-of-type{
      margin-right: 0;
    }
    *{
      margin-right: 50px;
      margin-bottom: 0;
    }
    transform: none;
  }
  @media only screen and (max-width: 992px){
    top: 0 !important;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 50px;
  }
`;

export const NavWrapper = styled.div`
  @media only screen and (max-width: 992px){
      position: absolute;
      top: 0;
      left: 0;
      max-height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      z-index: -1;
      display: ${props => !props.show && "none"} 
  } 
`;

export const NavItem = styled(NavLink).attrs({
    activeClassName: activeClassName,
})`
  text-decoration: none;
  position: relative;
  font-size: ${typeScale[17]};
  margin-bottom: 30px;
  color: white;
   &.${activeClassName} {
   &::after{
   width: 100%;
   content: '';
   position: absolute;
   height: 4px;
   background-color: ${lightBlue[100]};
   top: 110%;
   left: 0;
   border-radius: 4px;
   }
  }
  &:hover{
    color: white;
  }
  @media only screen and (min-width: 992px){
      margin-bottom: 0;
     &.${activeClassName} {
    color: white;
  }
  }
  @media only screen and (min-width: 992px){
    font-size: ${typeScale[20]};
  }
`;

export const ContactItem = styled(NavLink)`
  text-decoration: none;
  position: relative;
  font-size: ${typeScale[20]};
  color: white;
  border: 3px solid ${lightBlue[400]};
  padding: 10px 15px;
`;

export const Brand = styled.img`
  width: 100px;
  margin-left: 5vw;
  @media only screen and (min-width: 992px){
    width: 200px;
  }
`;

export const AboutDropDown = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  color: ${darkBlue[400]};
  font-weight: 500;
  padding: 20px 50px;
  background-color: white;
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  top: 40px;
  a{
  color: ${darkBlue[400]};
  margin: 10px 0;
  width: max-content;
  }
  @media (min-width: 992px){
    position: absolute;
    display: none;
  }
`;

export const ProductsDropDown = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  color: ${darkBlue[400]};
  padding: 20px 10px;
  font-weight: 500;
  background-color: white;
  z-index: 999;
  justify-content: center;
  top: 40px;
  right: calc(-50% - 300px);
  a{
  color: ${darkBlue[400]};
  margin: 10px 0;
  }
  a:hover{
    color: ${lightBlue[200]};
  }
  a:last-of-type, .underline{
    margin-top: 30px;
    text-decoration: underline;
  }
  @media (min-width: 992px){
    position: absolute;
    display: none;
    padding: 20px 50px;
    a{
      width: max-content;
   }
  }
  @media (max-width: 992px){
   max-width: 96vw;
   margin: 0 2vw;
  }
`;

export const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    p{
    color: ${darkBlue[400]};
    font-weight: bold;
    margin: 0 0 20px 0;
    font-size: 20px;
    }
    a{
      display: flex;
      align-items: center;
    }
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: auto;
  background-color: #043E57;
  @media only screen and (max-width: 992px){
    margin: 0 10px;
  }
`;

export const NavHover = styled.div` 
  >p{
      text-decoration: none;
      cursor: pointer;
      position: relative;
      font-size: ${typeScale[17]};
      margin-bottom: 30px;
      margin-top: 0;
      text-align: center;
      color: white;
      @media only screen and (min-width: 992px){
       margin-bottom: 0;
      }
      @media only screen and (min-width: 992px){
        font-size: ${typeScale[20]};
      }
  }
  
  @media only screen and (min-width: 992px){
      position: relative;
      margin-right: 50px !important;
      &:hover div{
        display: flex;
      }
  }
`;

export const Buffer = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
`;

export const LogoTwoWrapper = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px !important;
`;


