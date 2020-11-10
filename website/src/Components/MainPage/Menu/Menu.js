import '../MainPage.css';
import image1 from '../../../img/image1.jpg';
import image2 from '../../../img/image2.jpg';
export default function Menu() {
    return(
      
      <div id = "container">
      <div id = "ad2">
        ad2
      </div>
      <div id = "ad3">
        ad3
      </div>
      <div id = "header">
      <ul>
        <li>
          <div className="dropdown">
          <button className = "dropbtn">Games</button>
              <div className="dropdown-content">
              <a href="https:pornhub.com">Link 1</a>
                <a href="https:pornhub.com">Link 2</a>
                <a href="https:pornhub.com">Link 3</a>
            </div>
            </div>
          </li>
          <li>
          <div className="dropdown">
            <button className = "dropbtn">Tech news</button>
              <div className="dropdown-content">
                <a href="https:pornhub.com">Link 1</a>
              <a href="https:pornhub.com">Link 2</a>
              <a href="https:pornhub.com">Link 3</a>
              </div>
            </div>
        </li>
          <li>
          <div className="dropdown">
              <button className = "dropbtn">Hardware</button>
              <div className="dropdown-content">
                <a href="https:pornhub.com">Link 1</a>
                <a href="https:pornhub.com">Link 2</a>
                <a href="https:pornhub.com">Link 3</a>
            </div>
            </div>
          </li>
          <a style = {{top: '17px', left: '50%', transform: 'translate(-50%,-50%)', position:'absolute',cursor: 'pointer'}} href = "https://www.google.com">Logo</a> 
          {/* TODO react here */}       
          <li><button className = "login_register">Είσοδος</button></li>
          <li><button className = "login_register">Εγγραφή</button></li>
          <li><button className = "login_register">Επικοινωνία</button></li>
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
