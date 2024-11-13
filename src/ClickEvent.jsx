
import React, {useState, useEffect} from 'react'

const Resize = () => {

const [screenSize,setScreenSize] = useState({
    width:window.innerWidth,
    height:window.innnerHeight
})

const updateScreenSize = () => {
    setScreenSize({
        width:window.innerWidth,
    height:window.innnerHeight
    })
};

useEffect(() => {
    window.addEventListener('resize',updateScreenSize);
    return () => {
        window.removeEventListener('resize',updateScreenSize);
    };
},[])

  return (
    <div>
        <h1>Screen Size Example</h1>
        <p>Resixe the window to:</p>
        <p>width:{screenSize.width}</p>
        <p>height:{screenSize.height}</p>   

    </div>
  )
}

export default Resize