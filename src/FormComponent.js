import React from 'react'

const FormComponent = () => {
  return (
    <form>
      <label for="">
        Cardholder Name
        <input type="" name="" value="" placeholder='e.g. Jane Appleseed'/>
      </label>
      
      <label for="">
        Card Number
        <input type="" name="" value="" placeholder='e.g. 1234 5678 9123 0000'/>
      </label>

      <label for="">
        Exp. Date (MM/YY)
        <input type="date" name="" value="" placeholder=''/>
        <input type="date" name="" value="" placeholder=''/>
      </label>
      
      <label for="">
        CVC
        <input type="" name="" value="" placeholder='e.g. 123'/>
      </label>
      
      
      <button type="">Confirm</button>
    </form>
  )
}

export default FormComponent