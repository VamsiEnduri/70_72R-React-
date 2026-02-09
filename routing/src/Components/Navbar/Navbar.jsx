import "./nav.css";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div id="nav">
      <h2>VamsiSolutions</h2>
      <div id="nav_links">
        
        <Link to="/about">
        <span>About</span>
        </Link>


        <Link to="/contact">
        <span>Contact</span>
        </Link>

        <Link to="/recipes">
        <span>Recipes</span>
        </Link>
        
      </div>
    </div>
  );
}
export default Navbar;
