import styled from 'styled-components';
import { Link } from 'react-router-dom';


/*=========UNIVERSAL=========*/
export const P = styled.p`
    font-size: 1.2rem;
`;
/*=========NAVBAR STYLING=========*/
export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
`;

export const NavComponentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    text-decoration: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    margin: 20px 40px;
`;

export const Title = styled.h1`
    font-size: 2.0rem;
    font-weight: normal;
    margin: 20px 40px;
`;

/*=========HOMEPAGE STYLING=========*/
export const HomeWrapper = styled.div`
    width: 60%;
    margin: 50px auto;
`;

