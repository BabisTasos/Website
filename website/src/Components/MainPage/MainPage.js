import './MainPage.css';
import Menu from './Menu/Menu.js';
import Menu2 from './Menu/Menu2.js';

import React, {useState,useEffect} from "react"


const App = () => {

  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    if(windowSize < 785){
      setwindowSize(window.innerWidth)
      console.log("1")            
    }
    if(windowSize > 785){
      setwindowSize(window.innerWidth)
      console.log("2")      
    }
  }

  useEffect(() => {   
    console.log("3")
    window.addEventListener('resize', handleResize)     
  },[])
  
  return (
    <div>
        {windowSize > 785 ? <div><Menu/></div> : <div><Menu2/> </div>}       
    </div>  
  );
}
export default App;