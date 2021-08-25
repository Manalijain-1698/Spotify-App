import stylesForNavbar from "./NavbarHome.module.css";
import spotifyIcon from "../../Images/spotifyIcon7.jpg";
import {Link} from 'react-router-dom';
const NavbarHome = () => {
  return (
    <div className={stylesForNavbar.navbarHome}>
      <ul>
        <li>
          <img src={spotifyIcon} alt="Spotify Logo"></img>
        </li>
        <li>
          <p>
            <b>Spotify</b>
          </p>
        </li>
        <nav className={stylesForNavbar.homeNavbar}>
          <b>
            <li>
              <a href="https://www.spotify.com/in-en/">Support </a>
            </li>
            <li>
              <Link to="/Registration">Sign up</Link>
            </li>
            <li>
              <Link to="/Login">Log in</Link>
            </li>
          </b>
        </nav>
      </ul>
    </div>
  );
};

export default NavbarHome;
