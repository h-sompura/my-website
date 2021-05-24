import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Nav = styled.nav`
    display: flex;
    padding: 20px;
    align-items: center;
    margin-bottom: 40px;
    letter-spacing:0.02em;
`;

export const NavItems = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;
`;

export const NavHeader = styled(Link)`
    flex-grow: 1;
    font-weight: 500;
    cursor: pointer;
    transition: 100ms;
    cursor: pointer;
    color: #abaaec;
    text-decoration: none;
    &:hover {
        text-decoration:underline;
        font-weight:800;
    }
`;

export const NavItem = styled(Link)`
    margin-right: 20px;
    cursor: pointer;
    transition: 100ms;
    cursor: pointer;
    color: #abaaec;
    text-decoration: none;
    &:hover {
        text-decoration:underline;
        font-weight:bold;
    }
`;
