import React from 'react'
import './App.css'
import FirstComp from './propsContainer/FirstComp'
import SecondComp from './propsContainer/SecondComp'
import ThirdComp from './propsContainer/ThirdComp'
import FourthComp from './propsContainer/FourthComp'
import StateMgm from './StateMgm'
import SetTimer from './NameForm'
import NameForm from './NameForm'
import ClickEvent from './ClickEvent'

let a = "mangoes"
let b = "bananas"

const user = {
  name:"Phani",
  designation:"Software developer",
  city:"Bengaluru"
}

const exampleCarObj = {
  model:"Tata Nexon",
  color:"Red",
  year:"2024",
  price:"10 lac"
}

const newPhone = {
  model:"Iphone 16 pro max",
  storage:'512 GB',
  price:"90,000/-",
  Battery:"100%",
  country:"India"
}

function App() {
  return (
    <div>
      <ClickEvent />
    </div>
  )
}

export default App