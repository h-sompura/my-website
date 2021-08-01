import styled from "styled-components";
import Image from "../assets/CardImage.png";
export const CardWrapper = styled.div`
    background:#242629;
    position:absolute;
    width:100%;
    top:104px;
    height:auto;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2), 1px -1px 6px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    @media screen and (min-width:700px){
        transform:translateX(-0%);
        width:80%;
        margin:0 3.6em;
    }
    @media screen and (min-width:1100px){
        width:35%;
        transform: translateX(90%);
        margin-bottom:4em;
    }
`;
export const CardImage = styled.div`
    background:url(${Image});
    margin-top:3em;
    margin-left:7em;
    width:106px;
    height:106px;
    border-radius:88px;
    @media screen and (min-width:400px){
        margin-left:10em;   
    }
    @media screen and (min-width:500px){
        margin-left:12em;
    }
    @media screen and (min-width:700px){
        transform: translateX(40%);
        margin-left:34%;
    }
    @media screen and (min-width:1100px){
        transform: translateX(60%);
    }
`;
export const CardHeader = styled.h1`
    color:#FFFFFE;
    margin-top:1em;
    margin-bottom:1em;
    margin-left:1.6em;
    @media screen and (min-width:400px){
        margin-left:2.6em;   
    }
    @media screen and (min-width:500px){
        margin-left:3.6em;
    }
    @media screen and (min-width:700px){
        transform: translateX(13%);
    }
    @media screen and (min-width:1100px){
        transform: translateX(0%);
    }
`;