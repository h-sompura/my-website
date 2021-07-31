import styled from "styled-components";
import Image from "../assets/CardImage.png";
export const CardWrapper = styled.div`
    background:#242629;
    position:absolute;
    top:104px;
    margin:0 3.24em;
    width:80%;
    height:75vh;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2), 1px -1px 6px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    @media screen and (min-width:700px){
        width:35%;
        transform: translateX(90%);
    }
`;
export const CardImage = styled.div`
    background:url(${Image});
    margin-top:3em;
    margin-left:37%;
    width:106px;
    height:106px;
    border-radius:88px;
    @media screen and (min-width:700px){
        transform: translateX(40%);
    }
`;export const CardHeader = styled.h1`
    color:#FFFFFE;
    margin:1em 2em;
`;