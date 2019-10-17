import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*=========MAGIC NUMBERS==========*/
const mobileWidth = "1000px";

/*=========NAVBAR STYLING=========*/
export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;

    @media only screen and (max-width: ${mobileWidth}) {
        flex-direction: column;;
    }
`;

export const NavComponentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    margin: 0 20px;

    @media only screen and (max-width: ${mobileWidth}) {
        width: 100%;
        justify-content: center;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    margin: 20px;
`;

export const NavTitle = styled.h1`
    font-size: 2.0rem;
    font-weight: normal;
    margin: 20px 40px;
`;

/*=========HOMEPAGE STYLING=========*/
export const HomeWrapper = styled.div`
    width: 60%;
    margin: 50px auto;

    @media only screen and (max-width: ${mobileWidth}) {
        width: 90%;
    }
`;

/*=========ESSAY STYLING=========*/
export const EssayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EssayTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: normal;
    margin: 20px 40px;
    text-decoration: underline;
`;

export const Tag = styled(Link)`
    text-decoration: none;
    color: dodgerblue;
    margin: 10px;
`;

export const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 1.2rem;
    width: 100%;
`;

export const P = styled.p`
    text-indent: 50px;
`;

export const Q = styled.p`
    font-style: italic;
    margin: 50px;
`;

export const Source = styled.a`
    text-decoration: none;
    color: dodgerblue;
`;