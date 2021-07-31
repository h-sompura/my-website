import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonWrapper } from '../Styled/ButtonWrapper';
const SocialButtons = () => {
    return (
        <>
            <ButtonWrapper>
                <Button>Email</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button>Linkedin</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button>Github</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button>Dribbble</Button>
            </ButtonWrapper>
        </>
    )
}
export default SocialButtons;