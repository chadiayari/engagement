import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BubblyLink } from "react-bubbly-transitions";
import "./Physioscan.scss";

export default function FooterPhysio() {
  let titleFooterRef = useRef(null);
  let title1Ref = useRef(null);
  let title2Ref = useRef(null);
  let hoverimageRef = useRef();
  let scopeRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(title1Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: -200,
        perspective: 200,
      });
      gsap.set(title2Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 200,
        perspective: 200,
      });

      if (window.innerWidth <= 500) {
        gsap.to(title1Ref.current, {
          y: 0,
          perspective: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleFooterRef.current,
            start: "top 50%",
            end: "bottom 0%",
            id: "titleFooter",
          },
        });
        gsap.to(title2Ref.current, {
          y: 0,
          perspective: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleFooterRef.current,
            start: "top 50%",
            end: "bottom 0%",
            id: "titleFooter2",
          },
        });
      } else {
        gsap.to(title1Ref.current, {
          y: 0,
          perspective: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleFooterRef.current,
            start: "top 40%",
            end: "bottom 0%",
            id: "titleFooter",
          },
        });
        gsap.to(title2Ref.current, {
          y: 0,
          perspective: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleFooterRef.current,
            start: "top 40%",
            end: "bottom 0%",
            id: "titleFooter2",
          },
        });
      }
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("titleFooter").kill();
      ScrollTrigger.getById("titleFooter2").kill();
      ctx.revert();
    };
  });

  let hoverON = (e) => {
    gsap.to(hoverimageRef.current, {
      opacity: 1,
      clipPath: "inset(0% 0%)",
      x: e.clientX - 100,
      y: e.clientY - 100,
      duration: 0.5,
    });
  };
  let hoverOff = () => {
    gsap.to(hoverimageRef.current, {
      opacity: 0,
      clipPath: "inset(100% 0%)",
      duration: 0.5,
    });
  };
  let moveImage = (e) => {
    if (window.innerWidth >= 992) {
      gsap.to(hoverimageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 324,
        duration: 0.5,
      });
    } else {
      gsap.to(hoverimageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 280,
        duration: 0.5,
      });
    }
  };

  return (
    <>
      <div ref={scopeRef} className="contianer-fluid Footer_Physio">
        <div className="row">
          <div className="col-12">
            <div className="wrapper_title_footer">
              <p className="next_page">Next treatment</p>
              <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/">
                <span
                  onMouseEnter={hoverON}
                  onMouseLeave={hoverOff}
                  onMouseMove={moveImage}
                  ref={titleFooterRef}
                  className="title_footer"
                >
                  <span ref={title1Ref} className="title1">
                    reflexology
                  </span>
                  <br />
                  <span ref={title2Ref} className="title2">
                    plantar
                  </span>
                </span>
              </BubblyLink>
              <img
                ref={hoverimageRef}
                className="hover_title_footer"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fdb54f39f8bd4daab088d0e_home-thumb_reflexologie.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fdb54f39f8bd4daab088d0e_home-thumb_reflexologie.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
