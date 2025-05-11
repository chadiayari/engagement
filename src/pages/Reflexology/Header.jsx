import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import "./Reflexology.scss";

export default function Header() {
  let titleHeaderRef = useRef(null);
  let HeaderImageRef = useRef(null);
  let descHeaderRef = useRef(null);
  let scopeRef = useRef(null);
  let titleStickyTexts = useRef(null);
  let priceReflexology = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.update();
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      let splitTitleHeader = new SplitText(titleHeaderRef.current, {
        type: "lines",
      });

      for (const title of splitTitleHeader.lines) {
        title.setAttribute("data-mix", "true");
      }

      gsap.set(priceReflexology.current, {
        y: -80,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(splitTitleHeader.lines[0], {
        y: -120,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(splitTitleHeader.lines[1], {
        y: 120,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(HeaderImageRef.current, { y: "11rem", opacity: 0 });

      gsap.to(priceReflexology.current, {
        opacity: 1,
        duration: 1.5,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "Expo.easeOut",
        delay: 0.7,
      });
      gsap.to(splitTitleHeader.lines[0], {
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        delay: 0.7,
      });
      gsap.to(splitTitleHeader.lines[1], {
        y: 0,
        duration: 1.5,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "Expo.easeOut",
        delay: 0.7,
      });
      gsap.to(HeaderImageRef.current, {
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        opacity: 1,
        delay: 0.7,
      });

      gsap.to(HeaderImageRef.current, {
        clipPath: "inset(0% 0%)",
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: HeaderImageRef.current,
          start: "-=180 50%",
          end: "center 50%",
          scrub: 1.2,
          id: "imageHeader",
        },
      });

      gsap.to(scopeRef.current, {
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: scopeRef.current,
          anticipatePin: 1,
          endTrigger: descHeaderRef.current,
          id: "descHeaderImage",
          start: "top 0%",
          end: "center 60%",
          pin: true,
          pinSpacing: false,
          pinSpacer: false,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });

      let splitStickyTitle = new SplitText(titleStickyTexts.current, {
        type: "lines",
      });

      gsap.fromTo(
        splitStickyTitle.lines,
        {
          opacity: 0,
          perspective: 200,
          rotate: "20deg",
          y: 200,
          clipPath: "inset(100% 0% 0% 0%)",
          transformOrigin: "0% 100%",
        },
        {
          opacity: 1,
          perspective: 0,
          rotate: 0,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.01,
          scrollTrigger: {
            trigger: titleStickyTexts.current,
            start: "center 100%",
            end: "bottom 5%",
            id: "titleSticky",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        }
      );
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("descHeaderImage").kill();
      ScrollTrigger.getById("titleSticky").kill();
      ScrollTrigger.getById("imageHeader").kill();
      ctx.revert();
    };
  });

  return (
    <>
      <div className="container-fluid header_reflexology">
        <div className="row">
          <div className="col-12">
            <div ref={priceReflexology} className="price_reflexology">
              <span>50€</span>
              <span className="line_price"></span>
              <span>1h00</span>
            </div>
            <p ref={titleHeaderRef} className="title_header_reflexology">
              reflexology <br />
              plantar
            </p>
          </div>
          <div ref={scopeRef} className="col-12 px-0 scope">
            <div
              data-mix="true"
              ref={HeaderImageRef}
              className="header_image"
            ></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 sticky_texts">
            <p ref={titleStickyTexts} className="title_header_image">
              REBALANCE A <br />
              PHYSICAL DISORDER, <br />
              EMOTIONAL OR <br />
              ENERGY. <br />
            </p>
            <p ref={descHeaderRef} className="desc_header_image">
              AN ANCESTRAL PRACTICE, REFLEXOLOGY IS A GENTLE MANUAL METHOD
              CONSIDERING THE INDIVIDUAL AS A WHOLE, FROM A HOLISTIC POINT OF
              VIEW.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
