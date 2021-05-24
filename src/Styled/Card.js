import styled from "styled-components";
export const Card = styled.div`
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap:3em;
 }
`;
export const CardWrapper = styled.div`
  margin: 4em 1em;
  max-width:100%;
  max-height:100%;
  @media (min-width: 1300px) {
    margin-left:11em;
    margin-top:30px;
   }
`;
export const CardImage = styled.img`
    height:100%;
    width:100%;
    object-fit: cover;
    @media (min-width: 1300px) {
        width:550px;
        height:350px;
     }
`;
export const CardHeader = styled.h2`
    font-weight:800;
    color:#B8B8B8;
    line-height: 36px;
    @media (min-width: 1300px) {
       width:50vw;  
       margin-top:2em;      
     }
`;
export const CardDescription = styled.p`
    margin-top:-12px;
    font-size:1.37rem;
    font-weight:400;
    color:#B8B8B8;
    line-height: 42px;
    @media (min-width: 1300px) {
        width:30vw;
     }
`;