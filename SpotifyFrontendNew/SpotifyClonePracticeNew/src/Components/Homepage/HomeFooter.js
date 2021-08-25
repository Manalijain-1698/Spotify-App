import { Fragment } from "react";
import stylesForFooter from "./HomeFooter.module.css";
import spotifyIcon from "../../Images/spotifyIcon7.jpg";
import instaIcon from "../../Images/instaIcon7.jpg";
import twitterIcon from "../../Images/twitterLogo4.jpg";
import fbIcon from "../../Images/fbLogo4.jpg";

const HomeFooter = () => {
  return (
    <Fragment>
      <div className={stylesForFooter.mainContainer}>
        <ul>
          <li>
            <div className={stylesForFooter.container}>
              <ul>
                <li>
                  <img src={spotifyIcon} alt="Spotify Icon" />
                </li>
                <li style={{ marginTop: "100px" }}>
                  <b>Spotify</b>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={stylesForFooter.companyContainer}>
              <ul>
                <li>
                  <b>COMPANY</b>
                </li>
                <li>
                  <a href="https://www.spotify.com/in-en/about-us/contact/">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://www.lifeatspotify.com/?_gl=1*idazn9*_gcl_aw*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..*_gcl_dc*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.3558899.275204625.1628664893-1770488756.1627474391&_gac=1.228084207.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="https://newsroom.spotify.com/?_gl=1%2Aidazn9%2A_gcl_aw%2AR0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..%2A_gcl_dc%2AR0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.3558899.275204625.1628664893-1770488756.1627474391&_gac=1.228084207.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    For the Record
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={stylesForFooter.communitiesContainer}>
              <ul>
                <li>
                  <b>COMMUNITIES</b>
                </li>
                <li>
                  <a href="https://artists.spotify.com/?_gl=1*idazn9*_gcl_aw*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..*_gcl_dc*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.3558899.275204625.1628664893-1770488756.1627474391&_gac=1.228084207.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    For Artists
                  </a>
                </li>
                <li>
                  <a href="https://developer.spotify.com/?_gl=1*18gawei*_gcl_aw*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..*_gcl_dc*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.228595423.275204625.1628664893-1770488756.1627474391&_gac=1.49488212.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="https://ads.spotify.com/en-US/?_gl=1*18gawei*_gcl_aw*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..*_gcl_dc*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.228595423.275204625.1628664893-1770488756.1627474391&_gac=1.49488212.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    Advertising
                  </a>
                </li>
                <li>
                  <a href="https://investors.spotify.com/home/default.aspx">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="https://spotifyforvendors.com/">Vendors</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={stylesForFooter.usefulContainer}>
              <ul>
                <li>
                  <b>USEFUL LINKS</b>
                </li>
                <li>
                  <a href="https://support.spotify.com/in-en/?_gl=1*1yyhqn5*_gcl_aw*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..*_gcl_dc*R0NMLjE2Mjg2NjQ4OTMuQ2p3S0NBand4OGlJQmhCd0Vpd0EycXVhcTdYMWJqaHozdHFYWW1QQU1sNEh0ejZKbUVVQTd6UUFCREw3N3NYWlJKZzNMcTRXaFRUT0hCb0MzSE1RQXZEX0J3RQ..&_ga=2.159923710.275204625.1628664893-1770488756.1627474391&_gac=1.49497812.1628664955.CjwKCAjwx8iIBhBwEiwA2quaq7X1bjhz3tqXYmPAMl4Htz6JmEUA7zQABDL77sXZRJg3Lq4WhTTOHBoC3HMQAvD_BwE">
                    Support
                  </a>
                </li>
                <li>
                  <a href="https://www.spotify.com/in-en/">Web Player</a>
                </li>
                <li>
                  <a href="https://www.spotify.com/in-en/free/">
                    Free Mobile App
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={stylesForFooter.socialMediaContainer}>
              <ul>
                <li>
                  <a href="https://www.instagram.com/spotify/">
                    <img src={instaIcon} alt="instagram icon" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/spotify">
                    <img src={twitterIcon} alt="twitter icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Spotify">
                    <img src={fbIcon} alt="fb icon" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default HomeFooter;
