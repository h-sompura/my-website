import React from 'react';
import {FooterDiv, FooterHeader,FooterItems,FooterItem} from '../Styled/Footer';
function Footer() {
    return (
        <FooterDiv>
            <FooterItems>
            <FooterItem href="https://www.behance.net/harshitha_sompura" target="_blank">Behance</FooterItem>
            <FooterItem href="https://dribbble.com/harshitha_sompura" target="_blank">Dribbble</FooterItem>
            <FooterItem href="https://www.linkedin.com/in/harshithasompura/" target="_blank">Linkedin</FooterItem>
            </FooterItems>
            <FooterHeader>© 2021 Built with 💜 by Harshitha Sompura</FooterHeader>
        </FooterDiv>
    )
}

export default Footer
