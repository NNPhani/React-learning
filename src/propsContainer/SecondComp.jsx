
import React from 'react'

const SecondComp = (props) => {

    const {model, storage, price, battery, country} = props.phone

  return (
    <>
    <div>{model}</div>
    <div>{storage}</div>
    <div>{price}</div>
    <div>{battery}</div>
    <div>{country}</div>
    </>
  )
}

export default SecondComp