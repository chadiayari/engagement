import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import Btn from "../../components/Btn";

export default function Technical() {
  let [widthSize, setWidthSize] = useState(window.innerWidth);

  let scope = useRef();
  let borderTopRef = useRef();
  let borderRightRef = useRef();
  let borderBottomRef = useRef();
  let borderLeftRef = useRef();
  let stickyRowRef = useRef();
  let image1Techno2Ref = useRef();

  let ReflexzonesTitleRef = useRef();
  let ReflexzonesDescRef = useRef();
  let ReflexzonesDesc2Ref = useRef();

  let Reflexzones2TitleRef = useRef();
  let Reflexzones2DescRef = useRef();
  let Reflexzones2Desc2Ref = useRef();

  let AncestralTitleRef = useRef();
  let AncestralDesc1Ref = useRef();
  let AncestralDesc2Ref = useRef();

  let Ancestral2TitleRef = useRef();
  let Ancestral2Desc1Ref = useRef();
  let Ancestral2Desc2Ref = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthSize(window.innerWidth);
    });

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx = gsap.context(() => {
      if (widthSize >= 992) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: borderTopRef.current,
            start: "top 15%",
            end: "top 0%",
            id: "bordertop",
          },
        });
        tl.to(borderTopRef.current, {
          width: "100%",
          duration: 2.5,
          ease: "Expo.easeOut",
        });
        tl.to(
          borderRightRef.current,
          {
            height: "100vh",
            duration: 3,
            ease: "Expo.easeOut",
          },
          "<0.3"
        );
        tl.to(
          borderLeftRef.current,
          {
            height: "100vh",
            duration: 3,
            ease: "Expo.easeOut",
          },
          "<0.1"
        );

        gsap.to(stickyRowRef.current, {
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: stickyRowRef.current,
            endTrigger: AncestralDesc2Ref.current,
            start: "top 0%",
            end: "center 65%",
            id: "stickyRow",
            pin: true,
            pinSpacer: false,
            pinSpacing: false,
          },
        });
      }
    }, scope);

    if (widthSize >= 992) {
      let splitDesc1 = new SplitText(ReflexzonesDescRef.current, {
        type: "lines",
      });
      let splitDesc2 = new SplitText(ReflexzonesDesc2Ref.current, {
        type: "lines",
      });

      gsap.set(ReflexzonesTitleRef.current, {
        opacity: 0,
        y: 100,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(splitDesc1.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(splitDesc2.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.to(ReflexzonesTitleRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ReflexzonesTitleRef.current,
          start: "top 65%",
          end: "bottom 0",
          id: "ReflexzonesTitleTrigger",
          // markers: true,
        },
      });
      gsap.to(splitDesc1.lines, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ReflexzonesDescRef.current,
          start: "top 65%",
          end: "bottom 0",
          id: "Reflexzonesdesc1Trigger",
          // markers: true,
        },
      });
      gsap.to(splitDesc2.lines, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ReflexzonesDesc2Ref.current,
          start: "top 65%",
          end: "bottom 0",
          id: "Reflexzonesdesc2Trigger",
          // markers: true,
        },
      });

      let splitAncestral1 = new SplitText(AncestralDesc1Ref.current, {
        type: "lines",
      });
      let splitAncestral2 = new SplitText(AncestralDesc2Ref.current, {
        type: "lines",
      });

      gsap.set(AncestralTitleRef.current, {
        opacity: 0,
        y: 100,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(splitAncestral1.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(splitAncestral2.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      let tlAncestral = gsap.timeline({
        scrollTrigger: {
          trigger: AncestralTitleRef.current,
          start: "top 80%",
          end: "bottom 0%",
        },
      });
      tlAncestral.to(AncestralTitleRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
      });
      tlAncestral.to(
        splitAncestral1.lines,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.5,
          ease: "Expo.easeOut",
          stagger: 0.08,
        },
        "<0"
      );
      tlAncestral.to(
        splitAncestral2.lines,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.5,
          ease: "Expo.easeOut",
          stagger: 0.08,
        },
        "<0.4"
      );
    } else {
      //
      let splitDescAncestral = new SplitText(Ancestral2Desc1Ref.current, {
        type: "lines",
      });
      let splitDesc2Ancestral = new SplitText(Ancestral2Desc2Ref.current, {
        type: "lines",
      });

      gsap.set(Ancestral2TitleRef.current, {
        opacity: 0,
        y: 100,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(splitDescAncestral.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(splitDesc2Ancestral.lines, {
        opacity: 0,
        y: 80,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      gsap.to(Ancestral2TitleRef.current, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: Ancestral2TitleRef.current,
          start: "top 75%",
          end: "bottom 0%",
        },
      });
      gsap.to(splitDescAncestral.lines, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: splitDescAncestral.lines,
          start: "top 75%",
          end: "bottom 0%",
        },
      });
      gsap.to(splitDesc2Ancestral.lines, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: splitDesc2Ancestral.lines,
          start: "top 75%",
          end: "bottom 0%",
        },
      });

      gsap.to(image1Techno2Ref.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: image1Techno2Ref.current,
          start: "center 125%",
          end: "bottom 0%",
        },
      });
    }

    return () => {
      if (widthSize >= 992) {
        ScrollTrigger.getById("bordertop").kill();
        ScrollTrigger.getById("stickyRow").kill();
        ScrollTrigger.getById("ReflexzonesTitleTrigger").kill();
        ctx.revert();
      }
    };
  });

  return (
    <>
      {widthSize >= 992 ? (
        <>
          <div ref={scope} className="container-fluid Technical">
            <div ref={borderTopRef} className="border_top_technical"></div>
            <div
              ref={stickyRowRef}
              className="row stickyRow justify-content-start"
            >
              <div className="col-12 col-lg-5 position-relative">
                <div className="wrapper_Technical_title">
                  <p data-mix="true" className="Technical_title">
                    Technical
                  </p>
                </div>
                <div
                  ref={borderRightRef}
                  className="border_right_Technical"
                ></div>
              </div>
              <div className="col-12 col-lg-2 position-relative">
                <div
                  ref={borderLeftRef}
                  className="border_left_Technical"
                ></div>
                <div className="wrapper_btn_Technical">
                  <Btn
                    firstText="makean appointment"
                    secondText="take a break"
                    borderColor="#000"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div
                ref={borderBottomRef}
                className="border_bottom_technical"
              ></div>
              <div className="col-12 col-lg-5">
                <div className="wrapper_Reflexzones">
                  <p ref={ReflexzonesTitleRef} className="Reflexzones_title">
                    Reflex zones
                  </p>
                  <p ref={ReflexzonesDescRef} className="Reflexzones_desc1">
                    THIS ALTERNATIVE CARE TECHNIQUE IS PRACTICED BY DIGITAL
                    PRESSURE ON __ THE ENTIRE FOOT, IN ORDER TO DETECT AND
                    RELEASE TENSION. REFLEXOLOGY __AIMS TO MOBILIZE THE BODY'S
                    SELF-HEALING PROCESS WHICH REBALANCES A __ PHYSICAL,
                    EMOTIONAL OR ENERGETIC DISORDER.
                  </p>
                  <p ref={ReflexzonesDesc2Ref} className="Reflexzones_desc2">
                    The reflex zones of the foot are massaged according to a
                    very precise protocol linked to __ the fact that each part
                    of the body is represented at a specific place on the foot,
                    called the __ reflex zone. This is the miniature projection
                    of this part. The tensions present and the __ texture of the
                    skin indicate the places on which it will be necessary to
                    insist. Nevertheless, __ during each session the entire
                    reflex zones will be treated.
                  </p>
                </div>
                <div className="wrapper_image1_technical">
                  <img
                    src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca1ebc46ece50791c880e_feet-map-01-p-800.jpeg"
                    alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca1ebc46ece50791c880e_feet-map-01-p-800.jpeg"
                  />
                </div>
                <div className="wrapper_image2_technical">
                  <img
                    src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca3329c74e6ab9561347a_feet-map-02-p-800.jpeg"
                    alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca3329c74e6ab9561347a_feet-map-02-p-800.jpeg"
                  />
                </div>
                <div className="wrapper_image3_technical">
                  <img
                    src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca347aac908296c5fbeae_feet-map-03-p-800.jpeg"
                    alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca347aac908296c5fbeae_feet-map-03-p-800.jpeg"
                  />
                </div>
                <div className="wrapper_image4_technical">
                  <img
                    src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca35bd91ad311edfd674a_feet-map-04-p-800.jpeg"
                    alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca35bd91ad311edfd674a_feet-map-04-p-800.jpeg"
                  />
                </div>
                <div className="wrapper_Ancestral">
                  <p ref={AncestralTitleRef} className="Ancestral_title">
                    Ancestral method
                  </p>
                  <p ref={AncestralDesc1Ref} className="Ancestral_desc1">
                    THE CHINESE AND EGYPTIANS, OVER 2000 BC, USED A FORM OF
                    REFLEXOLOGY DURING ANTIQUITY. IN CHINA, THE IDEOGRAM “FOOT”
                    LITERALLY MEANS “PART OF THE BODY THAT SAFEGUARDS HEALTH”.
                    IT WAS
                  </p>
                  <p ref={AncestralDesc2Ref} className="Ancestral_desc2">
                    in 1917 that Zone therapy, or relieving pain at home
                    appeared , Fitzgerald's discovery which led him to establish
                    a map of the “connected” regions of the body. Reflexology is
                    also based on the work of Eunice Ingham (1889-1974),
                    American nurse and physiotherapist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container-fluid Technical2">
          <div className="row">
            <div className="col-12">
              <div className="wrapper_Technical2_title">
                <p className="Technical2_title">Technical</p>
              </div>
            </div>
            <div className="col-12">
              <div className="wrapper_Reflexzones2">
                <p ref={Reflexzones2TitleRef} className="Reflexzones2_title">
                  Reflex zones
                </p>
                <p ref={Reflexzones2DescRef} className="Reflexzones2_desc1">
                  The reflex zones of the foot are massaged according to a very
                  precise protocol linked to the fact that each part of the body
                  is represented at a specific place on the foot, called the
                  reflex zone. This is the miniature projection of this part.
                  The tensions present and the texture of the skin indicate the
                  places on which it will be necessary to insist. Nevertheless,
                  during each session the entire reflex zones will be treated.
                </p>
                <p ref={Reflexzones2Desc2Ref} className="Reflexzones2_desc2">
                  THIS ALTERNATIVE CARE TECHNIQUE IS PRACTICED BY DIGITAL
                  PRESSURE ON THE ENTIRE FOOT, IN ORDER TO DETECT AND RELEASE
                  TENSION. REFLEXOLOGY AIMS TO MOBILIZE THE BODY'S SELF-HEALING
                  PROCESS WHICH REBALANCES A PHYSICAL, EMOTIONAL OR ENERGETIC
                  DISORDER.
                </p>
              </div>
            </div>
            <div className="col-12 px-0 overflow-hidden">
              <div ref={image1Techno2Ref} className="image1_Technical2"></div>
            </div>
            <div className="col-12 px-0">
              <div className="image2_Technical2"></div>
            </div>
            <div className="col-12 px-0">
              <div className="image3_Technical2"></div>
            </div>
            <div className="col-12 px-0">
              <div className="image4_Technical2"></div>
            </div>
            <div className="col-12">
              <div className="wrapper_Ancestral2">
                <p ref={Ancestral2TitleRef} className="Ancestral2_title">
                  Ancestral method
                </p>
                <p ref={Ancestral2Desc1Ref} className="Ancestral2_desc1">
                  THE CHINESE AND EGYPTIANS, OVER 2000 BC, USED A FORM OF
                  REFLEXOLOGY DURING ANTIQUITY. IN CHINA, THE IDEOGRAM “FOOT”
                  LITERALLY MEANS “PART OF THE BODY THAT SAFEGUARDS HEALTH”. IT
                  WAS
                </p>
                <p ref={Ancestral2Desc2Ref} className="Ancestral2_desc2">
                  in 1917 that Zone therapy, or relieving pain at home appeared
                  , Fitzgerald's discovery which led him to establish a map of
                  the “connected” regions of the body. Reflexology is also based
                  on the work of Eunice Ingham (1889-1974), American nurse and
                  physiotherapist.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
