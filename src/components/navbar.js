import resume from "../assets/files/Scott-Shaw-CV.pdf";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav class="site-header sticky-top py-1 navbar navbar-expand-sm navbar-dark bg-dark">
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="navbar-toggler-icon"></span>
	      </button>
	      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	        <div class="navbar-nav container d-flex flex-column flex-md-row justify-content-between">
	          <Link class="nav-item nav-link" to={"/"}>Home</Link>
	          <Link class="nav-item nav-link" to={"/research"}>Research</Link>
            <Link class="nav-item nav-link" to={"/experiments"}>Robot Experiments</Link>
	          <a class="nav-item nav-link" href={resume}>Resume</a>
	        </div>
	      </div>
	    </nav>
    );
}

export default Navbar;

