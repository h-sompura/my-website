import styled from "styled-components";
export const CardWrapper = styled.div`
    background:#242629;
    position:absolute;
    top:104px;
    margin:0 1.56em;
    width:90%;
    height:70vh;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2), 1px -1px 6px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    @media screen and (min-width:700px){
        width:35%;
        transform: translateX(90%);
    }
`;
