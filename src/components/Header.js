
  import { HashLink } from 'react-router-hash-link';
  import logo from "../images/logo.png";
  import burger from "../images/burger-icon.png";
  


  const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md custom-nav">
      <div className="container-fluid">
        <HashLink smooth to="/#home" className="navbar-brand"
          ><img src={logo} height="40px"
        /></HashLink>
        <button class="d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span><img src={burger}/></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <HashLink smooth to="/#home" className="nav-link">home</HashLink>
            </li>
            <li class="nav-item px-2">
              <HashLink smooth to="/#work" className="nav-link">work</HashLink>
            </li>
            <li class="nav-item px-2">
              <HashLink smooth to="/#about" className="nav-link">about</HashLink>
            </li>
            <li class="nav-item px-2">
              <HashLink smooth to="/#contact" className="nav-link">contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
   
  };

  export default Header;
  