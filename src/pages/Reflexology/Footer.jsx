import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BubblyLink } from "react-bubbly-transitions";
import "./Reflexology.scss";

export default function Footer() {
  let titleFooterRef = useRef(null);
  let hoverImageRef = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(titleFooterRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: -150,
        perspective: 200,
      });
      gsap.to(titleFooterRef.current, {
        y: 0,
        perspective: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: titleFooterRef.current,
          start: "top 40%",
          id: "titleFooter",
          end: "bottom 0%",
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("titleFooter").kill();

      ctx.revert();
    };
  });

  let hoverON = (e) => {
    gsap.to(hoverImageRef.current, {
      opacity: 1,
      clipPath: "inset(0% 0%)",
      x: e.clientX - 100,
      y: e.clientY - 100,
      duration: 0.5,
    });
  };
  let hoverOff = () => {
    gsap.to(hoverImageRef.current, {
      opacity: 0,
      clipPath: "inset(100% 0%)",
      duration: 0.5,
    });
  };
  let moveImage = (e) => {
    if (window.innerWidth >= 992) {
      gsap.to(hoverImageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 324,
        duration: 0.5,
      });
    } else {
      gsap.to(hoverImageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 400,
        duration: 0.5,
      });
    }
  };

  return (
    <>
      <div ref={scopeRef} className="contianer-fluid footer_reflexology">
        <div className="row">
          <div className="col-12">
            <div className="wrapper_title_footer">
              <p className="next_page">Next treatment</p>
              <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/physioscan">
                <span
                  ref={titleFooterRef}
                  onMouseEnter={hoverON}
                  onMouseLeave={hoverOff}
                  onMouseMove={moveImage}
                  className="title_footer"
                >
                  PHYSIOSCAN
                </span>
              </BubblyLink>
              <img
                ref={hoverImageRef}
                className="hover_title_footer"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/602a88e1239abee3048bf523_thumb_physioscan.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/602a88e1239abee3048bf523_thumb_physioscan.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
