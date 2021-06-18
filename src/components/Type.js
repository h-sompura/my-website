import React from 'react'
import { TextWrapper, Heading, Paragraph,SocialButton,FooterText } from '../Styled/Typo'
const Type = () => {
    return (
        <TextWrapper>
            <Heading>Hey there!</Heading>
            <Paragraph>This website is getting a makeover. ✨  Please check back at a later time for the results.</Paragraph>
            <Paragraph>Meanwhile, you can reach out to me on these platforms: </Paragraph>
            <SocialButton href="mailto:sompharshi123@gmail.com" target="_Blank">Email</SocialButton>
            <SocialButton href="https://www.behance.net/harshitha_sompura" target="_Blank">Behance</SocialButton>
            <SocialButton href="https://www.linkedin.com/in/harshithasompura/" target="_Blank">Linkedin</SocialButton>
            <FooterText>© 2021 | Harshitha Sompura</FooterText>
        </TextWrapper>
    )
}
export default Type;