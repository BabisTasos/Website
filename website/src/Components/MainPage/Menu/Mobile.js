import './Mobile.css'
import image1 from '../../../img/image1.jpg';
import image2 from '../../../img/image2.jpg';
import React, { useState } from 'react';

export default function Menu2() {
  const [menuCss, setmenuCss] = useState("content");
  const [menuCssGames, setmenuCssGames] = useState("content");
  const [menuCssTech_News, setmenuCssTech_News] = useState("content");
  const [menuCssHardware, setmenuCssHardware] = useState("content");

  const toggle = (x, text) => {
    if(x === "content")
    {
      if(text === "M")
      {
        setmenuCss("dropdown_mobile-content")
        setmenuCssGames("content")
        setmenuCssTech_News("content")
        setmenuCssHardware("content")
      }
      else if(text === "Games")
      {
        setmenuCssGames("dropdown_mobile-content")
        setmenuCssTech_News("content")
        setmenuCssHardware("content")
      }
      else if(text === "Tech_News")
      {
        setmenuCssTech_News("dropdown_mobile-content")
        setmenuCssGames("content")
        setmenuCssHardware("content")
      }
      else if(text === "Hardware")
      {
        setmenuCssHardware("dropdown_mobile-content")
        setmenuCssGames("content")
        setmenuCssTech_News("content")
      }
    }
    else
    {
      if(text === "M")
      {
        setmenuCss("content")
      }
      else if(text === "Games")
      {
        setmenuCssGames("content")
      }
      else if(text === "Tech_News")
      {
        setmenuCssTech_News("content")
      }
      else if(text === "Hardware")
      {
        setmenuCssHardware("content")
      }
    }  
  }
    return(
      <div id = "container">           
      <div id = "header">
      <ul>
        
          <div className="dropdown_mobile">
            <button onClick = {() => toggle(menuCss, "M")} className = "dropbtn_mobile">M</button>
              <div className = {menuCss}>            
                <li>
                  <div className="dropdown_mobile">
                  <button onClick = {() => toggle(menuCssGames, "Games")} className = "dropbtn_mobile">Games</button>
                      <div className = {menuCssGames}>
                        <a href="https:pornhub.com">Link 1</a>                       
                    </div>
                    </div>
                  </li>
                  <li>
                  <div className="dropdown_mobile">
                    <button onClick = {() => toggle(menuCssTech_News, "Tech_News")} className = "dropbtn_mobile">Tech news</button>
                      <div className = {menuCssTech_News}>
                        <a href="https:pornhub.com">Link 1</a>                       
                      </div>
                    </div>
                </li>
                  <li>
                  <div className="dropdown_mobile">
                      <button onClick = {() => toggle(menuCssHardware, "Hardware")} className = "dropbtn_mobile">Hardware</button>
                      <div className = {menuCssHardware}>
                        <a href="https:pornhub.com">Link 1</a>          
                    </div>
                    </div>
                  </li>
                  
                  {/* TODO react here */}       
                  <li><button className = "dropbtn_mobile dropdown_mobile">Είσοδος</button></li>
                  <li><button className = "dropbtn_mobile dropdown_mobile">Εγγραφή</button></li>
                  <li><button className = "dropbtn_mobile dropdown_mobile">Επικοινωνία</button></li>
              </div>
          </div>
          <a style = {{top: '17px', left: '50%', transform: 'translate(-50%,-50%)', position:'absolute',cursor: 'pointer'}} href = "https://www.google.com">Logo</a> 
        
      </ul>
      </div>   
          <div className = "stories">
            <div id="ad1">
                  AD1
            </div>
            <div className = "highlights">
            <a href = "https://www.google.com">
                <img src = {image2} className = "highlights_img" alt= "alt"/>
            </a> 
            </div> 
            <div className = "stories1">
            <div id = "ad2">
                ad2
            </div>
            <a href = "https://www.google.com">
                <img src = {image1} className = "popular" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image1} className = "popular" alt= "alt"/>
              </a>
              <a href = "https://www.google.com">
                <img src = {image1} className = "popular" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image1} className = "popular" alt= "alt"/>
              </a>
            </div>
            <div className = "stories2">
            <div id = "ad3">
                ad3
            </div>
            <a href = "https://www.google.com">
                <img src = {image1} className = "latest" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image1} className = "latest" alt= "alt"/>
              </a>
              <a href = "https://www.google.com">
                <img src = {image1} className = "latest" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image1} className = "latest" alt= "alt"/>
              </a>             
            </div> 
            <div id = "footer">
                Footer
            </div>                      
          </div>          
    </div>
          );
}
