import styled from 'styled-components';

export const SecondaryText = styled.p`
    font-size:1.45rem;
    max-width:100%;
    font-weight:800;
    color:#B8B8B8;
    margin-top:30px;
    line-height: 38px;
    letter-spacing:0.07rem;
    @media (min-width: 768px) {
        font-size:2.25rem;
        font-weight:600;
        line-height: 50px;
    }
    @media (min-width: 1300px) {
       margin-left:5em;
       margin-top:2em;
    }
`;
