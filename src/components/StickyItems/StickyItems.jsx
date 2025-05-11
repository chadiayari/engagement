import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../plugins/SplitText";
import "./StickyItems.scss";

export default function StickyItems({ lineCount, title, desc, src }) {
  let titleRef = useRef(null);
  let descRef = useRef(null);
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        endTrigger: descRef.current,
        start: "top 75%",
        end: "bottom 0%",
      },
    });
    let splitDesc = new SplitText(descRef.current, { type: "lines" });
    let splitTitle = new SplitText(titleRef.current, { type: "lines" });

    // set some property on title , desc and image each item
    gsap.set(splitTitle.lines, {
      y: 100,
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
    });
    gsap.set(splitDesc.lines, {
      y: 100,
      opacity: 0,
      clipPath: "inset% 0% 100% 0%)",
    });
    gsap.set(imageRef.current, {
      scale: 2.5,
      clipPath: "inset(100% 0% 0% 0%)",
    });

    tl.to(splitTitle.lines, {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "Expo.easeOut",
      stagger: 0.15,
    });
    tl.to(
      splitDesc.lines,
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
        stagger: 0.15,
      },
      "<0.2"
    );

    gsap.to(imageRef.current, {
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "center 85%",
        end: "bottom 0%",
      },
    });
  });

  return (
    <>
      <div className="col-12">
        <div className="wrapper_item">
          <div className="wrapper_numbers_item">
            <span> {lineCount} </span>
            <span></span>
            <span>03</span>
          </div>
          <p ref={titleRef} className="title_items">
            {title}
          </p>
          <p ref={descRef} className="desc_items">
            {desc}
          </p>
          <div className="wrapper_image_item">
            <img ref={imageRef} src={src} alt={src} className="image_item" />
          </div>
        </div>
      </div>
    </>
  );
}
