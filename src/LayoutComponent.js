import React from 'react'
import FormComponent from './FormComponent'
import CardComponent from './CardComponent'
import {CARD_NUMBER,NAME,CARD_EXPIRATION,CARD_BACK_CODE} from "/config"
import card_logo from "/images/card-logo.svg"

const LayoutComponent = () => {
  return (
    <div>
        <div>
            <CardComponent CARD_BACK_CODE={CARD_BACK_CODE}
              backgroundImage= "card__back-background"
            />
            <CardComponent 
             backgroundImage= "card__front-background"
              CARD_NUMBER={CARD_NUMBER} 
              NAME={NAME}
              CARD_EXPIRATION={CARD_EXPIRATION} 
              card_logo={card_logo}/>
        </div>
        <div>
            <FormComponent/>
        </div>
    </div>
  )
}

export default LayoutComponent