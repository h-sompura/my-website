import React from 'react'
import { CardWrapper,CardImage, CardHeader} from '../Styled/CardWrapper'
import CardTabs from './CardTabs'
const Card = () => {
    return (
        <CardWrapper>
             <CardImage />
             <CardHeader>Harshitha Sompura</CardHeader>
             <CardTabs />
             <p>hi</p>
        </CardWrapper>
   
    )
}
export default Card;