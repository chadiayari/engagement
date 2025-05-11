import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import SplitText from "../../plugins/SplitText";
import "./Physioscan.scss";

export default function PhysioItem768({ title, desc }) {
  let borderBottomRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let splitDesc = new SplitText(descRef.current, { type: "lines" });

    gsap.set(titleRef.current, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 80,
    });
    gsap.set(splitDesc.lines, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 80,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 0%",
      },
    });

    tl.to(titleRef.current, {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      duration: 1.5,
      ease: "Expo.easeOut",
    });
    tl.to(
      splitDesc.lines,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      "<0"
    );
    tl.to(
      borderBottomRef.current,
      {
        width: "100vw",
        duration: 2,
        ease: "Expo.easeOut",
      },
      "<0.3"
    );
  });

  return (
    <>
      <div className="col-12">
        <div className="wrapper_item_GoalsPhysio2">
          <p ref={titleRef} className="title_item_GoalsPhysio2">
            {title}
          </p>
          <p ref={descRef} className="desc_item_GoalsPhysio2">
            {desc}
          </p>
        </div>
        <div
          ref={borderBottomRef}
          className="border_bottemItem_GoalsPhysio2"
        ></div>
      </div>
    </>
  );
}
