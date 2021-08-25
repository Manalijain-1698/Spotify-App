import spotifyIcon from "../../Images/spotifyIcon7.jpg";
import stylesForSpotTitle from "./SpotifyTitle.module.css";

const SpotifyTitle = () => {
  return (
    <div className={stylesForSpotTitle.spotifyLogo}>
      <ul>
        <li>
          <img src={spotifyIcon} alt="Spotify Logo"></img>
        </li>
        <li>
          <p>
            <b>Spotify</b>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SpotifyTitle;
