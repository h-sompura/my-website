import styled from "styled-components";
export const TabWrapper = styled.div`
    & .nav-tabs{
        border:none;
        margin-left:4em;    
    }
    & .nav-link{    
        border-radius:17px;
        border:none;
        color:#FFFFFE;
        background:none;  
    }
    & .nav-link.active {
        color:#FFFFFE;
        background:#3D3E40;    
    }
    @media screen and (min-width:400px){
        margin-left:2em;   
    }
    @media screen and (min-width:1100px){
        & .nav-tabs{
        margin-left:5.6em;
        }
    }
    @media screen and (min-width:700px){
        transform: translateX(20%);
        margin:0 1em;
    }
`;