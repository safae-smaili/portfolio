import '../../style/footer.css'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router';
// import photo from '../../src/assets/logoo.PNG'
function Foter(){
    return(        
    <footer className="footer">
         {/* <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>
            <img src="https://raw.githubusercontent.com/safae-smaili/movies/refs/heads/main/src/assets/logoo.PNG" alt="Logo" className="logo" />
        </Link> */}
            <div className="social-icons">
                <a href="https://github.com/safae-smaili" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="mailto:safaesamaili.s@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail/>
                </a>
            </div>
             <p className="copyright">© 2025 Smaili Safae. All rights reserved.</p>
           </footer>
)
}
export default Foter;