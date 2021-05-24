import React from 'react'
import { PrimaryText } from "../Styled/PrimaryText";
import { SecondaryText } from "../Styled/SecondaryText";
import { Card,CardWrapper, CardImage} from "../Styled/Card";
import { Divider } from "../Styled/Divider";
import Catto from "../assets/catto.jpg";
import Ducko from "../assets/ducko.jpg";
function About() {
    return (
        <div id="about">
            <SecondaryText>About moi! :)</SecondaryText>
            <PrimaryText>I’m a self-taught UX/UI designer and front-end developer based in Bangalore, 🇮🇳. </PrimaryText>
            <PrimaryText>As a creative kid, I’ve always been fascinated by intricate details, colours and aesthetics. Combining my observational skills and technical knowledge from engineering has made me design consciously. 🌏</PrimaryText>
            <PrimaryText>My goal is to build things I design, hence I'm always learning and unlearning. 🌈</PrimaryText>
            <PrimaryText>When I'm not on Figma, I'm jamming to some questionable songs 🎶, flushing out my creativity into digital art/illustrations 🎨 or enjoying some cat videos😺. </PrimaryText>
            <br/>
            <SecondaryText>Some art</SecondaryText>
            <Card>
                <CardWrapper>
                    <CardImage src={Catto} alt="" />
                </CardWrapper>
            </Card>
            <Card>
                <CardWrapper>
                    <CardImage src={Ducko} alt="" />
                </CardWrapper>
            </Card>
            <Divider/>
            <br/>
        </div>
    )
}

export default About
