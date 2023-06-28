import React from 'react'
import card_logo from "/images/card-logo.svg"


const CardComponent = ({CARD_NUMBER, NAME, CARD_EXPIRATION, card_logo,CARD_BACK_CODE}) => {
  return (
    <div>
        <p>{CARD_BACK_CODE}</p>
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