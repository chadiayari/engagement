import NavBar from "../../components/NavBar";
import Header from "./Header";
import GoalsPhysio from "./GoalsPhysio";
import TakeCare from "./TakeCare";
import TechnicalPhysio from "./TechnicalPhysio";
import { gsap } from "gsap";
import FooterPhysio from "./FooterPhysio";
import "./Physioscan.scss";
import { useEffect } from "react";

function Physioscan() {
  window.addEventListener("load", () => {}, { once: true });

  let changeBG = () => {
    gsap.to(document.body, {
      duration: 0.1,
      backgroundColor: "#fff",
    });
  };

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    window.addEventListener("load", changeBG);

    return () => {
      window.removeEventListener("load", changeBG);
    };
  });

  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* header */}
      <Header />
      {/* GoalsPhysio */}
      <GoalsPhysio />
      {/* TakeCare */}
      <TakeCare />
      {/* Technical */}
      <TechnicalPhysio />
      {/* FooterPhysio */}
      <FooterPhysio />
    </>
  );
}

export default Physioscan;
