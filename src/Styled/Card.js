import styled from "styled-components";
export const Card = styled.div`
  max-width:100%;
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(500px, 360px));
    grid-gap:60px;
 }
`;
export const CardWrapper = styled.div`
  margin: 3em 0;
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
    display:block;
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
    font-size:1.2rem;
    font-weight:400;
    color:#B8B8B8;
    line-height: 36px;
    @media (min-width: 1300px) {
        width:30vw;
     }
`;
