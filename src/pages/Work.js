import {React} from 'react';
import {ProjectCard} from "../components";
import Hero from "./Hero";
import { SecondaryText } from "../Styled/SecondaryText";
import { Divider } from "../Styled/Divider";
function Work() {
    return (
        <div id="work">
            <Hero />
            <Divider />
            <SecondaryText>Work</SecondaryText>
            <ProjectCard />
            <Divider/>
        </div>
    )
}
export default Work
