import React from 'react'
import { PrimaryText } from "../Styled/PrimaryText";
import { SecondaryText } from "../Styled/SecondaryText";
function Hero() {
    return (
        <div>
           
            <PrimaryText>👋🏼 Hi, I'm Harshitha!</PrimaryText>
            <SecondaryText>Frontend developer/UX Designer focused on Product and Visual Design. I design and build things for the web(just like this one😀).</SecondaryText>
            <PrimaryText>Have a project in mind? Let's<span style={{color:'#abaaec'}}> chat </span><a href="mailto:sompharshi123@gmail.com"><u>📧</u></a></PrimaryText>
            <br />
        </div>
    )
}
export default Hero
