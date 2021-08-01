import styled from "styled-components";

export const WorkWrapper = styled.div`
    margin:2em 1em;
    background:#89A1B2;
    color:#010101;
    padding:1em 2em;
    border-radius:24px;
    font-weight:800;
    @media screen and (min-width:700px){
        transform: translateX(-18%);
        margin-bottom:2em;
    }
    @media screen and (min-width:400px){
        margin-left:-.8em;   
    }
    @media screen and (min-width:1200px){
        margin-left:-1em; 
    }
`;