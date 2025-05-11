import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "./Header";
import Goals from "./Goals";
import MoreAbout from "./MoreAbout";
import gsap from "gsap";
import Footer from "./Footer";
import "./Reflexology.scss";

function Reflexology() {
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });

  useLayoutEffect(() => {
    setIsLoaded(true);
    gsap.to(document.body, {
      duration: 0.1,
      backgroundColor: "#f5f5f5",
    });
  });

  return (
    <>
      <Header />
      <Goals />
      <MoreAbout />
      <Footer />
    </>
  );
}

export default Reflexology;
