import { useEffect, useLayoutEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import StopBreath from "./StopBreath";
import ImagesSection from "./ImagesSection";
import Techniques from "./Techniques";
import BetterHealth from "./BetterHealth";
import { gsap } from "gsap";
import "./Tangan.scss";

function Tangan() {
  let [isLoad, setIsLoad] = useState(false);

  useLayoutEffect(() => {
    if (!isLoad) {
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    gsap.set(document.body, {
      backgroundColor: "#f5f5f5",
    });
    setIsLoad(true);
  });

  return (
    <>
      {/* NavBar home page */}
      <NavBar />
      {/* header home page */}
      <Header />
      {/* stop breath home page */}
      <StopBreath />
      {/* images section  home page */}
      <ImagesSection />
      {/* Techniques section home page */}
      <Techniques />
      {/* better health section home page */}
      <BetterHealth />
    </>
  );
}

export default Tangan;
