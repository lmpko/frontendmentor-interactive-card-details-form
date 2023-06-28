import React from 'react'

const CardComponent = ({CARD_NUMBER, NAME, CARD_EXPIRATION, card_logo,CARD_BACK_CODE,backgroundImage}) => {
   
  return (
    <div className={`card ${backgroundImage}`}>
        {CARD_BACK_CODE && <span>{CARD_BACK_CODE}</span>}
        
        {card_logo && <img src={card_logo} alt="card-logo"/>}

        {CARD_NUMBER &&
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
        }
    </div>
  )
}

export default CardComponent