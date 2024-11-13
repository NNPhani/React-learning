import React from 'react'

const FourthComp = (props) => {
  const {model, storage, price, battery, country} = props.newPhone

  return (
    <div>
    <h1>{model}</h1>
    <h1>{storage}</h1>
    <h1>{price}</h1>
    <h1>{battery}</h1>
    <h1>{country}</h1>
        </div>
  )
}

export default FourthComp