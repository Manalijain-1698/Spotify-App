import { Fragment } from "react";
import NavbarHome from "./NavbarHome";
import HomeMainBody from "./HomeMainBody";
import HomeFooter from "./HomeFooter";

const Homepage = () => {
  return (
    <Fragment>
      <NavbarHome />
      <HomeMainBody />
      <HomeFooter />
    </Fragment>
  );
};

export default Homepage;
