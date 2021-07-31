import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonWrapper } from '../Styled/ButtonWrapper';
import { HiOutlineMail } from 'react-icons/hi';
import {AiFillLinkedin, AiFillGithub, AiOutlineDribbble} from 'react-icons/ai'
const SocialButtons = () => {
    return (
        <>
            <ButtonWrapper>
                <Button><a target="_blank" href="mailto:sompharshi23@gmail.com"><HiOutlineMail style={{marginTop: '-.2em',marginRight:'.4em'}} size={22} /> Email</a></Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button><a target="_blank" href="https://www.linkedin.com/in/harshithasompura/"><AiFillLinkedin style={{marginTop: '-.2em',marginRight:'.3em'}} size={22} />Linkedin</a></Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button><a target="_blank" href="https://github.com/h-sompura"><AiFillGithub style={{marginTop: '-.2em',marginRight:'.3em'}} size={22}/>Github </a></Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button><a target="_blank" href="https://dribbble.com/harshitha_sompura"><AiOutlineDribbble style={{marginTop: '-.2em',marginRight:'.3em'}} size={22}/>Dribbble </a></Button>
            </ButtonWrapper>
        </>
    )
}
export default SocialButtons;