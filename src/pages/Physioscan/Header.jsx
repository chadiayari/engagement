import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../plugins/SplitText";
import "./Physioscan.scss";

export default function Header() {
  let scopeRef = useRef(null);
  let titleHeaderRef = useRef(null);
  let wrapperHeaderImageRef = useRef(null);
  let stickySection = useRef(null);
  let imageHeaderRef = useRef(null);
  let titleStickyTexts = useRef(null);
  let descHeaderRef = useRef(null);
  let title1Ref = useRef(null);
  let title2Ref = useRef(null);
  let pricePhysioscanRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      ScrollTrigger.refresh();

      gsap.set(pricePhysioscanRef.current, {
        y: -80,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(title1Ref.current, {
        y: -150,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(title2Ref.current, {
        y: 150,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(wrapperHeaderImageRef.current, { y: "11rem", opacity: 0 });

      gsap.to(pricePhysioscanRef.current, {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        delay: 0.7,
      });
      gsap.to(title1Ref.current, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        delay: 0.7,
      });
      gsap.to(title2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        clipPath: "inset(0% 0% 0% 0%)",
        delay: 0.7,
        ease: "Expo.easeOut",
      });
      gsap.to(wrapperHeaderImageRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.7,
        ease: "Expo.easeOut",
      });

      gsap.to(imageHeaderRef.current, {
        clipPath: "inset(0% 0%)",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: imageHeaderRef.current,
          start: "-=20 62%",
          end: "center 20%",
          id: "imageHeader",
          scrub: 1.3,
        },
      });

      gsap.to(stickySection.current, {
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: scopeRef.current,
          anticipatePin: 1,
          endTrigger: descHeaderRef.current,
          start: "top 0%",
          end: "center 60%",
          id: "stickySection",
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
      ScrollTrigger.getById("imageHeader").kill();
      ScrollTrigger.getById("stickySection").kill();
      ScrollTrigger.getById("titleSticky").kill();
      ctx.revert();
      ScrollTrigger.refresh();
    };
  });

  return (
    <>
      <div className="container-fluid header_physioscan">
        <div className="row">
          <div className="col-12">
            <div ref={pricePhysioscanRef} className="price_physioscan">
              <span>60€</span>
              <span className="line_price"></span>
              <span>1h15</span>
            </div>
            <p ref={titleHeaderRef} className="title_header_physioscan">
              <span ref={title1Ref} className="title_part1">
                Physio
              </span>
              <span ref={title2Ref} className="title_part2">
                scanning
              </span>
            </p>
          </div>
          <div ref={scopeRef} className="col-12 px-0 scope">
            <div ref={wrapperHeaderImageRef} className="wrapper_header_image">
              <div ref={stickySection}>
                <div className="zxa" ref={imageHeaderRef}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 sticky_texts_physioscan">
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
