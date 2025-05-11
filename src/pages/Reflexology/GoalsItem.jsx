import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Reflexology.scss";

export default function GoalsItem({ title, desc }) {
  let goalsItem1TitleRef = useRef();
  let goalsItem1DescRef = useRef();
  let goalsItem1BorderRef = useRef();
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let goalsItem1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: goalsItem1TitleRef.current,
          start: "center 80%",
          end: "bottom 10%",
          id: "goalsItem1",
        },
      });
      goalsItem1Tl.fromTo(
        goalsItem1TitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      goalsItem1Tl.fromTo(
        goalsItem1DescRef.current,
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
      goalsItem1Tl.to(
        goalsItem1BorderRef.current,
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
    <div ref={scopeRef} className="wrapper_goalsItem1">
      <p ref={goalsItem1TitleRef} className="title_goalsItem1">
        {title}
      </p>
      <p ref={goalsItem1DescRef} className="desc_goalsItem1">
        {desc}
      </p>
      <div ref={goalsItem1BorderRef} className="border_goalsItem1"></div>
    </div>
  );
}
