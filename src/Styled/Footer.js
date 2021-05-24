import styled from 'styled-components';
export const FooterDiv = styled.div`
    padding: 20px;
    margin-top:48px;
    background-color:#abaaec;
    color:#212121;
    letter-spacing:0.02em;
    height:110px;
    bottom:0;
    @media (min-width: 768px) {
        display:block;
        text-align:center;
        bottom:0;
    }
    @media (min-width: 1300px) {
        margin-top: 1200px;
   
`;
export const FooterHeader = styled.p`
    color:inherit;
    letter-spacing:0.02em;
    margin-top:2em;
    font-size:1.2rem;
    font-weight: 500;
    margin-left:1em;
`;
export const FooterItems = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    margin-left:1.4em;
    align-items: center;
    @media (min-width: 768px) {
        display:block;
        text-align:center;
        margin-left:2.75em;
    }
`;

export const FooterItem = styled.a`
    margin-right: 44px;
    cursor: pointer;
    transition: 100ms;
    cursor: pointer;
    color: inherit;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 31px;
    text-decoration-line: underline;
    &:hover {
        text-decoration:underline;
        font-weight:bold;
    }
`;
