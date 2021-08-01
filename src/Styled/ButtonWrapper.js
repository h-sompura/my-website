import styled from "styled-components";

export const ButtonWrapper = styled.div`
    background-color: #7F5AF0;
    margin-left:3.2em;
    margin-top:2em;
    margin-bottom:2em;
    width:75%;
    text-align:center;
    border-radius:24px;
    transition:150ms;
    & a{
        text-decoration:none;
        color:inherit;
    }
    & .btn{
        border:none;
        background:none;
        padding:1em 3em;
    }
    & .btn:focus, a:focus{
        outline:none !important;
        box-shadow: none;
    }
    &:hover{
        background-color:#2CB67D;
        border: 3px solid #010101;
        & .btn{
            color:#010101;
            font-weight:bold;
        }
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    @media screen and (min-width:400px){
        margin-left:2em;   
    }
    @media screen and (min-width:700px){
        margin: 3em 5em;
        width:15em;
    }
`;