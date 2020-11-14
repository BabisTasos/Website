import './MainPage.css';
import Desktop from './Menu/Desktop.js';
import Mobile from './Menu/Mobile.js';

import React, {useState,useEffect} from "react"


const App = () => {

  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const [k, setmenuCss] = useState(0);
  const handleResize = () => {
    if(windowSize < 785){
      setwindowSize(window.innerWidth)       
    }
    if(windowSize > 785){
      setwindowSize(window.innerWidth)    
    }
  }

  useEffect(() => {   
    window.addEventListener('resize', handleResize)
  },[])
  
  return (
    <div>
        {windowSize > 785 ? <Desktop/> : <Mobile/>}       
    </div>  
  );
}
export default App;