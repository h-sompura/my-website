import styled from 'styled-components';
export const FooterDiv = styled.div`
    margin-top:50px;
    background-color:#abaaec;
    color:#212121;
    letter-spacing:0.02em;
    height:90px;
    bottom:0;
    width:100%;
    padding:11px 0;
    @media (min-width: 768px) {
        display:block;
        text-align:center;
    }
    @media (min-width: 1300px) {
        margin-top: 1400px;
    }
`;
export const FooterHeader = styled.p`
    color:inherit;
    margin-top:1em;
    font-size:.8rem;
    font-weight: 500;
    text-align:center;
    @media (min-width: 1300px) {
        font-size:1.1rem;
        margin-left:40px;
    }
`;
export const FooterItems = styled.ul`
    list-style: none;
    @media (min-width: 411px) {
        display:block;
        text-align:center;
    }
`;

export const FooterItem = styled.a`
    margin-right:18px;
    cursor: pointer;
    transition: 100ms;
    cursor: pointer;
    color: inherit;
    font-weight: 500;
    line-height: 31px;
    font-size:1rem;
    text-decoration-line: underline;
    &:hover {
        text-decoration:underline;
        font-weight:bold;
    }
    @media only screen and (min-width:400px){ 
        font-size:.9rem;  
        margin-right:30px;
    }
    @media only screen and (min-width:768px){
        margin:0 30px;
        font-size:1.27rem;
        margin-right:20px;
    }
`;
