import styled from "styled-components";
export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
margin: 0 1em;
@media(min-width:900px){
    float:right;
    width:40%;
    margin-top:4%;
}
`;
export const Heading = styled.p`
    font-size:2.25rem;
    font-weight:500;
    @media(min-width:900px){
        font-size:3.75rem;
    }
`;
export const Paragraph = styled.p`
    font-size:1.125rem;
    font-weight:medium;
    line-height:1.75rem;
    top:-1.5em;
    position:relative;
    @media(min-width:900px){
        font-size:1.5rem;
        width:80%;
        line-height:2.2rem;
        top:-2em;
    }
`;
export const SocialButton = styled.a`
    padding:1rem .5rem;
    background-color:#212121;
    border-radius:.5rem;
    width:50%;
    align-self:center;
    text-align:center;
    color:#B8B8B8;
    cursor:pointer;
    position:relative;
    top:-1em;
    margin:.75em 0;
    transition:100ms;
    text-decoration:none;
    letter-spacing:.05em;
    &:hover{
        font-weight:bold;
        text-decoration:underline;
        transform:scale(1.04);
        color:#A09FE9;
    }
    @media(min-width:900px){
        font-size:1.2rem;
        width:150px;
        top:-3em;
        align-self:flex-start;
        width:50%;
    }
    `;
    export const FooterText =styled.p`
        font-weight:300;
        text-align:center;
        margin-top:1.75em;
        @media(min-width:900px){
           bottom:0;
           position:absolute;
           margin-left:-15%;
        }
    `;