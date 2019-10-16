import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavWrapper, NavComponentWrapper, 
    StyledLink, Title 
} from './Styling';

const NavBar = () => {
    return (
        <NavWrapper>
            <Title>Michael McGuiness</Title>
            <NavComponentWrapper>
                <Router>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About Me</StyledLink>
                    <StyledLink to="/essays">Essays</StyledLink>
                </Router>
            </NavComponentWrapper>
        </NavWrapper>
    )


}

export default NavBar;