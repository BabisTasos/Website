import './MainPage.css';
import image1 from '../../img/image1.jpg';
import image2 from '../../img/image2.jpg';

function App() {
  return (
    <div id = "container">
        <div id = "header">   
        <ul>
        <li>
          <div className="dropdown">
              <button className = "dropdown">Games</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
          <div className="dropdown">
              <button className = "dropdown">Tech news</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
          <div className="dropdown">
              <button className = "dropdown">Hardware</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>

          
          <a style = {{top: '17px', left: '50%', transform: 'translate(-50%,-50%)', position:'absolute',cursor: 'pointer'}} href = "https://www.google.com">Logo</a> 
          {/* TODO react here */}
          
          <li className = "login_register"><button>Είσοδος</button></li>
          <li className = "login_register"><button>Εγγραφή</button></li>
          <li className = "login_register"><button>Επικοινωνία</button></li>
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
export default App;