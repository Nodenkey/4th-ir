import React from 'react';
import {ButtonWrapper, ButtonWrapperFourth, ButtonWrapperSecondary, ButtonWrapperTertiary} from "./button.style";
import {NavLink} from "react-router-dom";

const Button = ({children, type, link, name, color}) => {
        if (type === 'tertiary'){
            return <NavLink to={link}><ButtonWrapperTertiary color={color}>
                {children}
            </ButtonWrapperTertiary></NavLink>
        }else if (type === 'secondary'){
            return <NavLink to={link}><ButtonWrapperSecondary color={color}>
                {children}
            </ButtonWrapperSecondary></NavLink>
        }else if (type === 'fourth'){
            return <NavLink to={link}><ButtonWrapperFourth color={color}>
                {children}
            </ButtonWrapperFourth></NavLink>
        }else if (type === 'download'){
          return  <a href={link} download={name}><ButtonWrapper color={color}>
              {children}
          </ButtonWrapper></a>
        } else {
            return  <NavLink to={link}><ButtonWrapper color={color}>
                {children}
            </ButtonWrapper></NavLink>
        }
};

export default Button;
