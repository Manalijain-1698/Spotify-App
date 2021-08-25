import stylesForMainBody from "./HomeMainBody.module.css";
import mainImage from "../../Images/spotifyHomeBackground2.jpg";

const HomeMainBody = () => {
  return (
      <div className={stylesForMainBody.mainImageDiv}>
        <img src={mainImage} alt="Spotify background" />
        <div className={stylesForMainBody.bodyTextOne}>
          <b>Listening is</b>
        </div>
        <div className={stylesForMainBody.bodyTextTwo}>
          <b>everything</b>
        </div>
        <div className={stylesForMainBody.bodyTextThree}>
          <b>Millions of songs for free. No credit card needed.</b>
        </div>
      </div>
  );
};

export default HomeMainBody;
