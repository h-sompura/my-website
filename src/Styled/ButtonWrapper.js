import styled from "styled-components";

export const ButtonWrapper = styled.div`
    background-color: #7F5AF0;
    width:12em;
    text-align:center;
    margin: 2em 6.4em;
    border-radius:24px;
    transition:150ms;
    & .btn{
        border:none;
        background:none;
        padding:1em 3em;
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