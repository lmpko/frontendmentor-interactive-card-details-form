import React from 'react'
import FormComponent from './FormComponent'
import CardComponent from './CardComponent'

const LayoutComponent = () => {
  return (
    <div>
        <div>
            <img src="" alt=""/>
            <CardComponent/>
        </div>
        <div>
            <FormComponent/>
        </div>
    </div>
  )
}

export default LayoutComponent