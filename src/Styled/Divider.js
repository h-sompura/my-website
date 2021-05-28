import styled from 'styled-components';

export const Divider = styled.hr`
    border:1px solid #59565D;
    width:98%;
    @media (min-width: 768px) {
        margin-left:2em;
        width:70vw;
     }
    @media (min-width: 1300px) {
        margin-left:10em;
        width:67vw;
     }
`;