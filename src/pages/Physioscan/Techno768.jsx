import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../plugins/SplitText";
import "./Physioscan.scss";

export default function Techno768({ title, desc, desc2, desc3, desc4 }) {
  let borderBottomRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();
  let desc2Ref = useRef();
  let desc3Ref = useRef();
  let desc4Ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let splitDesc = new SplitText(descRef.current, { type: "lines" });
    let splitDesc2 = new SplitText(desc2Ref.current, { type: "lines" });
    let splitDesc3 = new SplitText(desc3Ref.current, { type: "lines" });
    let splitDesc4 = new SplitText(desc4Ref.current, { type: "lines" });

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
    gsap.set(splitDesc2.lines, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 80,
    });
    gsap.set(splitDesc3.lines, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 80,
    });
    gsap.set(splitDesc4.lines, {
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
      splitDesc2.lines,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      "<0.25"
    );
    tl.to(
      splitDesc3.lines,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      "<0.25"
    );
    tl.to(
      splitDesc4.lines,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      "<0.25"
    );
    tl.to(
      borderBottomRef.current,
      {
        width: "100vw",
        duration: 2,
        ease: "Expo.easeOut",
      },
      "<0.4"
    );
  });

  return (
    <>
      <div className="col-12">
        <div className="wrapper_item_TechnoPhysio2">
          <p ref={titleRef} className="title_item_TechnoPhysio2">
            {title}
          </p>
          <p ref={descRef} className="desc_item_TechnoPhysio2">
            {desc}
          </p>
          <p ref={desc2Ref} className="desc_item_TechnoPhysio2">
            {desc2}
          </p>
          <p ref={desc3Ref} className="desc_item_TechnoPhysio2">
            {desc3}
          </p>
          <p ref={desc4Ref} className="desc_item_TechnoPhysio2">
            {desc4}
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
