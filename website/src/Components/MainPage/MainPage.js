import '../../Css/MainPage.css';
import image1 from '../../image1.jpg';
import image2 from '../../image2.jpg';

function App() {
  return (
    <div id = "container">
        <div id = "header">   
        <ul>
          <li><button >Αρχική</button></li>
          <li><button>Επικοινωνία</button></li>
          <li><button>Κατηγορίες</button></li>
          <a style = {{top: '17px', left: '50%', transform: 'translate(-50%,-50%)', position:'absolute',cursor: 'pointer'}} href = "https://www.google.com">Logo</a> 
          {/* TODO react here*/}
          <li className = "login_register"><button>Είσοδος</button></li>
          <li className = "login_register"><button>Εγγραφή</button></li>
        </ul>
        </div>   
          <div className = "stories">
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
                <img src = {image2} className = "latest" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image2} className = "latest" alt= "alt"/>
              </a>
              <a href = "https://www.google.com">
                <img src = {image2} className = "latest" alt= "alt"/>
              </a>       
              <a href = "https://www.google.com">
                <img src = {image2} className = "latest" alt= "alt"/>
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
