import React from 'react'
import card_logo from "/images/card-logo.svg"
import { CARD_EXPIRATION, CARD_NUMBER, NAME } from '../config'

const CardComponent = () => {
  return (
    <div>
        <img src={card_logo} alt="card-logo"/>
        <div>
            <p>
                {CARD_NUMBER}
            </p>
            <div>
                <p>
                    {NAME}
                </p>
                <p>
                    {CARD_EXPIRATION}
                </p>
            </div>
        </div>
    </div>
  )
}

export default CardComponent