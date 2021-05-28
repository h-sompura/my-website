import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    margin:0;
    @media only screen and (min-width: 768px) {
        max-width:70%;
        margin-left:4.3em;
        margin:0 4em;
    }
    @media only screen and (min-width: 1300px) {
        max-width:55%;
        margin-left:0;
        height:100vh;
    }
`;
