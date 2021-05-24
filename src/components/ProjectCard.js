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
        </CardWrapper>
        <CardWrapper>
        <CardImage src={Fasmho} alt="Fasmho Energy Systems- Website Redesign"/>
        <CardHeader>Fasmho Energy Systems - Website Redesign</CardHeader>
        <CardDescription><i>Visual, Website Design - Mar 2021</i></CardDescription>
            <CardDescription>Redesigning the website for Fasmho - a Electrical/Electronic Manufacturing startup based in India.</CardDescription>
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
