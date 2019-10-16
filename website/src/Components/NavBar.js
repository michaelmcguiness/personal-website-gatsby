import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavWrapper, NavComponentWrapper, 
    StyledLink, NavTitle 
} from './Styling';

const NavBar = () => {
    return (
        <NavWrapper>
            <NavTitle>Michael McGuiness</NavTitle>
            <NavComponentWrapper>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About Me</StyledLink>
                <StyledLink to="/essays">Essays</StyledLink>
            </NavComponentWrapper>
        </NavWrapper>
    )


}

export default NavBar;