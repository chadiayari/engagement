import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Physioscan.scss";

export default function TechnicalPhysioItems({
  title,
  desc1,
  desc2,
  desc3,
  desc4,
}) {
  let TechnicalPhysioItemsTitleRef = useRef(null);
  let TechnicalPhysioItemsDescRef = useRef(null);
  let TechnicalPhysioItemsBorderRef = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let TechnicalPhysioItemsTl = gsap.timeline({
        scrollTrigger: {
          trigger: TechnicalPhysioItemsTitleRef.current,
          start: "center 70%",
          end: "bottom 10%",
          id: "VibrationTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      TechnicalPhysioItemsTl.fromTo(
        TechnicalPhysioItemsTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      TechnicalPhysioItemsTl.fromTo(
        TechnicalPhysioItemsDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      TechnicalPhysioItemsTl.to(
        TechnicalPhysioItemsBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div className="wrapper_TechnicalPhysioItems">
        <p
          ref={TechnicalPhysioItemsTitleRef}
          className="TechnicalPhysioItems_title"
        >
          {title}
        </p>
        <p
          ref={TechnicalPhysioItemsDescRef}
          className="TechnicalPhysioItems_desc"
        >
          <span>{desc1 ? desc1 : null}</span>
          <span>{desc2 ? desc2 : null}</span>
          <span>{desc3 ? desc3 : null}</span>
          <span>{desc4 ? desc4 : null}</span>
        </p>
        <div
          ref={TechnicalPhysioItemsBorderRef}
          className="TechnicalPhysioItems_border"
        ></div>
      </div>
    </>
  );
}
