import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Tangan.scss";

export default function Header() {
  let homeHeaderTitleRef = useRef();
  let homeHeaderTickerRef = useRef();
  let wrapperHeaderRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();

      if (window.innerWidth > 500) {
        gsap.set(wrapperHeaderRef.current, {
          backgroundPosition: "0% 20%",
        });
        tl.to(wrapperHeaderRef.current, {
          opacity: 1,
          backgroundSize: "150%",
          duration: 2,
          delay: 0.6,
          ease: "Expo.easeOut",
        });
        tl.to(
          wrapperHeaderRef.current,
          {
            backgroundPosition: "0% 100%",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.5"
        );
        tl.fromTo(
          homeHeaderTitleRef.current,
          { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 300 },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 0.9,
            ease: "Expo.easeOut",
          },
          "<.85"
        );
        tl.to(
          homeHeaderTickerRef.current,
          {
            opacity: 1,
            duration: 0.7,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      } else {
        gsap.set(wrapperHeaderRef.current, {
          backgroundPosition: "0% 100%",
        });
        tl.to(wrapperHeaderRef.current, {
          opacity: 1,
          backgroundSize: "150%",
          duration: 2,
          delay: 0.4,
          ease: "Expo.easeOut",
        });
        tl.fromTo(
          homeHeaderTitleRef.current,
          { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 300 },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 0.9,
            ease: "Expo.easeOut",
          },
          "<.85"
        );
        tl.to(
          homeHeaderTickerRef.current,
          {
            opacity: 1,
            duration: 0.7,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      }
    }, wrapperHeaderRef);

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div className="container-fluid home_header">
        <div className="row">
          <div className="col-12">
            <div ref={wrapperHeaderRef} className="wrapper_home_header">
              <p ref={homeHeaderTitleRef} className="title_home_header">
                TANGAN*
              </p>
              <div
                ref={homeHeaderTickerRef}
                className="home_title_ticker_header"
              >
                <div className="inner_content">
                  <span>Physioscan</span>
                  <span>Réflexologie plantaire</span>
                  <span> Massage Abhyanga</span>
                </div>
                <div className="inner_content2">
                  <span>Physioscan</span>
                  <span>Réflexologie plantaire</span>
                  <span> Massage Abhyanga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
