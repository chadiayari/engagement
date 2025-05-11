import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function MoreAbout() {
  let topTitle1Ref = useRef(null);
  let topTitle2Ref = useRef(null);
  let topTitle3Ref = useRef(null);
  let topTitle4Ref = useRef(null);

  let bottomTitle1Ref = useRef(null);
  let bottomTitle2Ref = useRef(null);
  let bottomTitle3Ref = useRef(null);
  let bottomTitle4Ref = useRef(null);

  let topLine1Ref = useRef(null);
  let topLine2Ref = useRef(null);
  let topLine3Ref = useRef(null);
  let topLine4Ref = useRef(null);

  let bottomLine1Ref = useRef(null);
  let bottomLine2Ref = useRef(null);
  let bottomLine3Ref = useRef(null);
  let bottomLine4Ref = useRef(null);

  let moreAboutRef = useRef(null);
  let imageMoreRef = useRef(null);
  let imageMoreRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // animate titles line
      let darkerText1 = () => {
        gsap.to(topTitle1Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightText1 = () => {
        gsap.to(topTitle1Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerText2 = () => {
        gsap.to(topTitle2Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightText2 = () => {
        gsap.to(topTitle2Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerText3 = () => {
        gsap.to(topTitle3Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightText3 = () => {
        gsap.to(topTitle3Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerText4 = () => {
        gsap.to(topTitle4Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightText4 = () => {
        gsap.to(topTitle4Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      gsap.to(topLine1Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: topTitle1Ref.current,
          start: "center 60%",
          end: "+=300 0%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerText1,
          onEnterBack: darkerText1,
          onLeave: lightText1,
          onLeaveBack: lightText1,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(topLine2Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: topTitle2Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerText2,
          onEnterBack: darkerText2,
          onLeave: lightText2,
          onLeaveBack: lightText2,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(topLine3Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: topTitle3Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerText3,
          onEnterBack: darkerText3,
          onLeave: lightText3,
          onLeaveBack: lightText3,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(topLine4Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: topTitle4Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerText4,
          onEnterBack: darkerText4,
          onLeave: lightText4,
          onLeaveBack: lightText4,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });

      gsap.to(imageMoreRef.current, {
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageMoreRef.current,
          start: "center 90%",
          end: "bottom 0%",
        },
      });

      // animate titles line
      let darkerBottomText1 = () => {
        gsap.to(bottomTitle1Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightBottomText1 = () => {
        gsap.to(bottomTitle1Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerBottomText2 = () => {
        gsap.to(bottomTitle2Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightBottomText2 = () => {
        gsap.to(bottomTitle2Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerBottomText3 = () => {
        gsap.to(bottomTitle3Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightBottomText3 = () => {
        gsap.to(bottomTitle3Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      let darkerBottomText4 = () => {
        gsap.to(bottomTitle4Ref.current, {
          color: "#787070",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };
      let lightBottomText4 = () => {
        gsap.to(bottomTitle4Ref.current, {
          color: "#f5f5f5",
          duration: 1,
          ease: "Expo.easeOut",
        });
      };

      gsap.to(bottomLine1Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: bottomLine1Ref.current,
          start: "center 60%",
          end: "+=300 0%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerBottomText1,
          onEnterBack: darkerBottomText1,
          onLeave: lightBottomText1,
          onLeaveBack: lightBottomText1,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(bottomLine2Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: bottomLine2Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerBottomText2,
          onEnterBack: darkerBottomText2,
          onLeave: lightBottomText2,
          onLeaveBack: lightBottomText2,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(bottomLine3Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: bottomLine3Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerBottomText3,
          onEnterBack: darkerBottomText3,
          onLeave: lightBottomText3,
          onLeaveBack: lightBottomText3,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(bottomLine4Ref.current, {
        duration: 0.7,
        width: "100%",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: bottomLine4Ref.current,
          start: "center 65%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          onEnter: darkerBottomText4,
          onEnterBack: darkerBottomText4,
          onLeave: lightBottomText4,
          onLeaveBack: lightBottomText4,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(imageMoreRef2.current, {
        scale: 1,
        duration: 1.5,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageMoreRef2.current,
          start: "center 90%",
          end: "bottom 0%",
        },
      });
    }, moreAboutRef);

    return () => {
      ctx.revert();
    };
  });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let hiddenGoals = () => {
      if (window.innerWidth >= 992) {
        gsap.to(document.querySelector(".goals"), {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        });
      } else {
        gsap.to(document.querySelector(".goals2"), {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        });
      }
    };
    let showGoals = () => {
      if (window.innerWidth >= 992) {
        gsap.to(document.querySelector(".goals"), {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        });
      } else {
        gsap.to(document.querySelector(".goals2"), {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        });
      }
    };
    gsap.to(document.body, {
      backgroundColor: "#000",
      duration: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: moreAboutRef.current,
        endTrigger: bottomTitle4Ref.current,
        start: "top 90%",
        toggleActions: "restart reverse restart reverse",
        end: "bottom 0%",
        onEnter: hiddenGoals,
        onEnterBack: hiddenGoals,
        onLeave: showGoals,
        onLeaveBack: showGoals,
      },
    });
  });

  return (
    <>
      <div ref={moreAboutRef} className="container_fluid moreAbout">
        <div className="row">
          <div className="col-12 order-2 order-lg-1 col-lg-9">
            <div className="wrapper_more_descs">
              <span ref={topTitle1Ref} className="titles_more1">
                STRESS
                <span ref={topLine1Ref} className="line_title1"></span>
              </span>
              <span ref={topTitle2Ref} className="titles_more2">
                MIGRAINE
                <span ref={topLine2Ref} className="line_title2"></span>
              </span>
              <span ref={topTitle3Ref} className="titles_more3">
                URINARY DISORDER
                <span ref={topLine3Ref} className="line_title3"></span>
              </span>
              <span ref={topTitle4Ref} className="titles_more4">
                DIGESTIVE DISORDER
                <span ref={topLine4Ref} className="line_title4"></span>
              </span>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-2 col-lg-3">
            <div className="wrapper_image_more">
              <img
                ref={imageMoreRef}
                className="image_more_section"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f0058fb2888251090654_reflexo-03.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f0058fb2888251090654_reflexo-03.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 order-1 order-lg-1 col-lg-3">
            <div className="wrapper_left_image_more">
              <img
                ref={imageMoreRef2}
                className="image_left_more_section"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006f868eb0c4ce0536a_reflexo-01.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006f868eb0c4ce0536a_reflexo-01.jpg"
              />
            </div>
          </div>
          <div className="col-12 order-2 order-lg-2 col-lg-9">
            <div className="wrapper_more_descs2">
              <span ref={bottomTitle1Ref} className="titles_bottom_more1">
                TROUBLES DU SOMMEIL
                <span
                  ref={bottomLine1Ref}
                  className="line_bottom_title1"
                ></span>
              </span>
              <span ref={bottomTitle2Ref} className="titles_bottom_more2">
                MAUX DE DOS
                <span
                  ref={bottomLine2Ref}
                  className="line_bottom_title2"
                ></span>
              </span>
              <span ref={bottomTitle3Ref} className="titles_bottom_more3">
                DOULEURS ARTICULAIRES
                <span
                  ref={bottomLine3Ref}
                  className="line_bottom_title3"
                ></span>
              </span>
              <span ref={bottomTitle4Ref} className="titles_bottom_more4">
                DOULEURS DE RÈGLES…
                <span
                  ref={bottomLine4Ref}
                  className="line_bottom_title4"
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
