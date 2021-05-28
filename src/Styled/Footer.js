import styled from 'styled-components';
export const FooterDiv = styled.div`
    padding: 20px;
    margin-top:48px;
    background-color:#abaaec;
    color:#212121;
    letter-spacing:0.02em;
    height:120px;
    bottom:0;
    max-width:100%;
    @media (min-width: 768px) {
        display:block;
        text-align:center;
        bottom:0;
    }
    @media (min-width: 1300px) {
        margin-top: 1300px;
   
`;
export const FooterHeader = styled.p`
    color:inherit;
    letter-spacing:0.02em;
    text-align:center;
    margin-top:2em;
    font-size:1.1rem;
    font-weight: 500;
`;
export const FooterItems = styled.ul`
    text-align:center;
    list-style: none;
    max-width:100%;
    @media (min-width: 768px) {
        display:block;
        text-align:center;
        margin-left:2.75em;
    }
    @media (min-width: 1200px) {
        margin-left:0.2em;
    }
`;

export const FooterItem = styled.a`
    margin-right:28px;
    cursor: pointer;
    transition: 100ms;
    cursor: pointer;
    color: inherit;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 31px;
    text-decoration-line: underline;
    &:hover {
        text-decoration:underline;
        font-weight:bold;
    }
`;
