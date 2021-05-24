import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
    @media (min-width: 768px) {
        max-width:65vw;
        margin-left:4.3em;
        margin:0 4em;
    }
    @media (min-width: 1300px) {
        max-width:70vw;
        margin:0 7em;
        margin-left:0;
        height:100vh;
    }
`;
