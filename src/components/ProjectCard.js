import React from 'react'
import { Card,CardWrapper, CardImage, CardHeader, CardDescription } from "../Styled/Card";
import Fasmho from "../assets/Fasmho.png";
import ChildSafe from "../assets/ChildSafe.png";
import Progress from "../assets/In-progress.png";
function ProjectCard() {
    return (
        <Card>
        <CardWrapper>
            <CardImage src={ChildSafe} alt="ChildSafe - Parental App UX Case Study"/>
            <CardHeader>ChildSafe - Parental App UX Case Study</CardHeader>
            <CardDescription><i>UX/UI, Mobile, Product Design - May 2021</i></CardDescription>
            <CardDescription>Helping parents supervise and protect their child's digital devices.</CardDescription>
            <a href="https://www.figma.com/proto/tC2UfkQAajTQH0OkDMIzy3/ChildSafe-Presentation?page-id=0%3A1&node-id=83%3A0&viewport=321%2C516%2C0.059185802936553955&scaling=contain" download rel="noopener noreferrer" target="_blank">Figma Presentation</a>
        </CardWrapper>
        <CardWrapper>
        <CardImage src={Fasmho} alt="Fasmho Energy Systems- Website Redesign"/>
        <CardHeader>Fasmho Energy Systems - Website Redesign</CardHeader>
        <CardDescription><i>Visual, Website Design - Mar 2021</i></CardDescription>
            <CardDescription>Redesigning website for Fasmho - an Electrical/Electronic Manufacturing startup based in India.</CardDescription>
            <a href="https://www.figma.com/proto/JP3AMJyBUurYhv4z2Z3Vni/Fasmho?page-id=0%253A1&node-id=22%3A6&viewport=-3266%252C-118%252C0.19964806735515594&scaling=contain" download rel="noopener noreferrer" target="_blank">Figma Presentation</a>
    </CardWrapper>
    <CardWrapper>
        <CardImage src={Progress} alt="Angy Cats - React/Framer Project"/>
        <CardHeader>Angy Cats - React/Framer Project</CardHeader>
        <CardDescription><i>UI, Web, Interaction Design - Jun 2021</i></CardDescription>
            <CardDescription>[In progress]</CardDescription>
    </CardWrapper>
    </Card>
    )
}

export default ProjectCard
