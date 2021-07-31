import styled from "styled-components";

export const ButtonWrapper = styled.div`
    background-color: #7F5AF0;
    width:15em;
    text-align:center;
    margin: 3em 5em;
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

`;