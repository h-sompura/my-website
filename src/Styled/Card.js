import styled from "styled-components";
export const Card = styled.div`
  width:100%;
  @media (min-width: 1300px) {
    display: grid;
<<<<<<< HEAD
    grid-template-columns: repeat(2, minmax(580px, 360px));
    grid-gap:40px;
=======
    grid-template-columns: repeat(2, minmax(500px, 360px));
    grid-gap:60px;
>>>>>>> 56447377794cbff27e0e4889b6bc30df753954c4
 }
`;
export const CardWrapper = styled.div`
  margin: 2em 0;
  max-height:100%;
  @media (min-width: 760px) {
      margin-left:2.45em;
   }
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
export const CardHeader = styled.h3`
    font-weight:800;
    color:#B8B8B8;
    line-height: 36px;
    margin:1em .4em;
    letter-spacing:0.03rem;
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
    margin:1em .4em;
    @media (min-width: 1300px) {
        width:29vw;
     }
`;
