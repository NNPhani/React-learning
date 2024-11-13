import React from 'react'

const FirstComp = (props) => {
    const {model,color,year,price} = props.car
  return (
    <>
    <div>{model}</div>
    <div>{color}</div>
    <div>{year}</div>
    <div>{price}</div>
    </>

  )
}

export default FirstComp