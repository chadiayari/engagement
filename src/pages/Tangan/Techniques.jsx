import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import { motion } from "framer-motion";
import StickyItems from "../../components/StickyItems";
import "./Tangan.scss";
import { useLocation } from "react-router-dom";

export default function Techniques() {
  let techniquessRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();
  let triggerStickyRef = useRef();
  let scopeRef = useRef();
  let imageScroll1 = useRef();
  let imageScroll2 = useRef();
  let imageScroll3 = useRef();
  let borderRef = useRef();
  let TopBorder1Ref = useRef();
  let TopBorder2Ref = useRef();
  let TopBorder3Ref = useRef();
  let number01 = useRef();
  let number02 = useRef();
  let number03 = useRef();
  let title0101 = useRef();
  let title0102 = useRef();
  let title0201 = useRef();
  let title0202 = useRef();
  let title03 = useRef();
  let descText01 = useRef();
  let descText02 = useRef();
  let descText03 = useRef();
  let topTitleRef = useRef();
  let bottomTitleRef = useRef();
  let triggerTitleTop = useRef();
  let triggerTitleBottom = useRef();
  let borderWritterRef = useRef();
  let imageWritterRef = useRef();
  let endTriggerTech = useRef();
  let [enterBorder, setEnterBorder] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);

  let { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    gsap.to(document.body, {
      backgroundColor: "#000",
      duration: 0.35,
      ease: "ease",
      scrollTrigger: {
        trigger: techniquessRef.current,
        endTrigger: endTriggerTech.current,
        start: "top 50%",
        end: "bottom 30%",
        id: "bodyDarker",
        toggleActions: "play none restart reverse",
      },
    });

    let splitTopTitle = new SplitText(topTitleRef.current, { type: "chars" });
    let splitBottomTitle = new SplitText(bottomTitleRef.current, {
      type: "chars",
    });

    gsap.set(splitTopTitle.chars, {
      opacity: 0,
      perspective: 1500,
      rotate: "27deg",
      y: "5rem",
      clipPath: "inset(0% 0% 100% 0%)",
    });
    gsap.set(splitBottomTitle.chars, {
      opacity: 0,
      perspective: 1500,
      y: "5rem",
      rotate: "27deg",
      clipPath: "inset(0% 0% 100% 0%)",
    });

    gsap.to(splitTopTitle.chars, {
      opacity: 1,
      y: 0,
      perspective: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      rotate: "0deg",
      duration: 1,
      stagger: 0.01,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: triggerTitleTop.current,
        start: "top 70%",
        end: "bottom 0%",
        id: "trigger1",
      },
    });
    gsap.to(splitBottomTitle.chars, {
      opacity: 1,
      y: 0,
      rotate: "0deg",
      perspective: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      stagger: 0.01,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: triggerTitleBottom.current,
        start: "top 30%",
        end: "bottom 0%",
        id: "trigger2",
        // markers: true,
      },
    });

    if (window.innerWidth >= 768) {
      gsap.set(title0101.current, {
        y: -140,
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(title0102.current, {
        y: 90,
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(title0201.current, {
        y: -140,
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(title03.current, {
        y: "-25rem",
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(descText01.current, {
        y: 135,
        opacity: 0,
        clipPath: "inset(% 0% 100% 0%)",
      });

      let enterImage1 = () => {
        let tl = gsap.timeline();
        tl.to(title0101.current, {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        });
        tl.to(
          title0102.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText01.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let leaveImage1 = () => {
        let tl = gsap.timeline();
        tl.to(number01.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          number02.current,
          {
            opacity: 1,
            y: "-3rem",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0101.current,
          {
            opacity: 0,
            y: -140,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0201.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0102.current,
          {
            opacity: 0,
            y: 90,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0202.current,
          {
            opacity: 1,
            y: "-8.5rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText01.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText02.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let enterBackImage1 = () => {
        let tl = gsap.timeline();
        tl.to(number02.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          number01.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0201.current,
          {
            opacity: 0,
            y: -140,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0202.current,
          {
            opacity: 0,
            y: 90,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText02.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0101.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0102.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText01.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let leaveImage2 = () => {
        let tl = gsap.timeline();
        tl.to(number02.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          title0201.current,
          {
            opacity: 0,
            y: -140,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0202.current,
          {
            opacity: 0,
            y: 90,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText02.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          number03.current,
          {
            opacity: 1,
            y: "-3rem",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title03.current,
          {
            opacity: 1,
            y: "-10rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText03.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let enterBackImage2 = () => {
        let tl = gsap.timeline();
        tl.to(number03.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          number02.current,
          {
            opacity: 1,
            y: "-3rem",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title03.current,
          {
            opacity: 0,
            y: "-25rem",
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0201.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0202.current,
          {
            opacity: 1,
            y: "-8.5rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText03.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText02.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let leaveBackImage2 = () => {
        let tl = gsap.timeline();
        tl.to(number02.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(title0201.current, {
          opacity: 0,
          y: -140,
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          title0202.current,
          {
            opacity: 0,
            y: 90,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText02.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };

      let enterBackImage3 = () => {
        let tl = gsap.timeline();
        tl.to(number02.current, {
          opacity: 0,
          y: -80,
          duration: 0.4,
          ease: "Expo.easeOut",
        });
        tl.to(
          number03.current,
          {
            opacity: 1,
            y: "-3rem",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0101.current,
          {
            opacity: 0,
            y: "-25rem",
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title03.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          title0102.current,
          {
            opacity: 0,
            y: 90,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText01.current,
          {
            opacity: 0,
            y: 135,
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.4,
            ease: "Expo.easeOut",
          },
          "<0"
        );
        tl.to(
          descText03.current,
          {
            opacity: 1,
            y: "-15rem",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0"
        );
      };
      let leaveImage3 = () => {
        gsap.to(title03.current, {
          opacity: 0,
          y: -140,
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.4,
          ease: "Expo.easeOut",
        });
      };

      gsap.registerPlugin(ScrollTrigger, SplitText);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          endTrigger: descRef.current,
          start: "top 70%",
          end: "bottom 0%",
          id: "trigger3",
        },
      });
      let ctx = gsap.context(() => {
        gsap.to(triggerStickyRef.current, {
          scrollTrigger: {
            trigger: triggerStickyRef.current,
            endTrigger: imageScroll3.current,
            start: "top 0%",
            end: "bottom 126%",
            pin: true,
            // markers: {
            //   startColor: "#fff",
            //   endColor: "#fff",
            //   fontSize: "20px",
            // },
          },
        });
      }, scopeRef);

      let splitTitle = new SplitText(titleRef.current, { type: "chars" });
      let splitDesc = new SplitText(descRef.current, { type: "lines" });
      gsap.set(splitTitle.chars, {
        opacity: 0,
        y: 200,
        clipPath: "inset(0% 0% 100% 0%)",
        perspective: 100,
        // rotate: "27deg",
        transformOrigin: "0% 100%",
      });
      gsap.set(splitDesc.lines, {
        opacity: 0,
        perspective: 200,
        scaleY: 0,
        rotate: "5deg",
        y: 100,
      });

      tl.to(splitTitle.chars, {
        opacity: 1,
        perspective: 0,
        rotate: 0,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        stagger: 0.04,
        ease: "Expo.easeOut",
      });
      tl.to(
        splitDesc.lines,
        {
          opacity: 1,
          perspective: 0,
          scaleY: 1,
          y: 0,
          rotate: "0deg",
          duration: 1,
          stagger: 0.05,
          ease: "Expo.easeOut",
        },
        "<0.5"
      );

      // scroll images section animations

      gsap.set(imageScroll1.current, {
        opacity: 0,
        scale: 3,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(imageScroll2.current, {
        opacity: 0,
        scale: 3,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(imageScroll3.current, {
        opacity: 0,
        scale: 3,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      gsap.to(borderRef.current, {
        height: "100%",
        duration: 0.7,
        ease: "ease",
        scrollTrigger: {
          trigger: borderRef.current,
          start: "top 0%",
          id: "trigger4",
          end: "bottom 0%",
        },
      });

      gsap.to(TopBorder1Ref.current, {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: TopBorder1Ref.current,
          start: "top 65%",
          end: "top 0%",
          id: "trigger5",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.to(TopBorder2Ref.current, {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: TopBorder2Ref.current,
          start: "top 65%",
          end: "top 0%",
          id: "trigger6",
          toggleActions: "restart reverse restart reverse",
          // markers: {
          //   startColor: "#fff",
          //   endColor: "#fff",
          //   fontSize: "20px",
          // },
        },
      });
      gsap.to(TopBorder3Ref.current, {
        width: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: TopBorder3Ref.current,
          start: "top 65%",
          end: "top 0%",
          id: "trigger7",
          toggleActions: "restart reverse restart reverse",
          // markers: {
          //   startColor: "#fff",
          //   endColor: "#fff",
          //   fontSize: "20px",
          // },
        },
      });

      gsap.to(imageScroll1.current, {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageScroll1.current,
          start: "center 73%",
          end: "+=200 15%",
          toggleActions: "restart reverse restart reverse",
          onEnter: enterImage1,
          id: "trigger8",
          onLeave: leaveImage1,
          onEnterBack: enterBackImage1,
        },
      });
      gsap.to(imageScroll2.current, {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageScroll2.current,
          start: "center 80%",
          end: "+=200 20%",
          toggleActions: "play reverse restart reverse",
          id: "trigger9",
          onLeave: leaveImage2,
          onEnterBack: enterBackImage2,
          onLeaveBack: leaveBackImage2,
        },
      });
      gsap.to(imageScroll3.current, {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageScroll3.current,
          start: "top 15%",
          id: "trigger10",
          end: "bottom 0%",
          onEnterBack: enterBackImage3,
          onLeave: leaveImage3,
          toggleActions: "restart reverse restart reverse",
        },
      });
      ScrollTrigger.update();
      return () => {
        ctx.revert();
        ScrollTrigger.refresh();
      };
    }

    return () => {
      ScrollTrigger.getById("bodyDarker").kill();
      ScrollTrigger.getById("trigger1").kill();
      ScrollTrigger.getById("trigger2").kill();
      ScrollTrigger.refresh();
    };

    // // // // //
  });

  let borderVariants = {
    default: {
      width: 0,
    },
    animate: {
      width: "100%",
    },
  };

  let enterBorderHandler = () => {
    setEnterBorder(true);
  };

  return (
    <>
      <div ref={techniquessRef} className="container-fluid techniquess">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="wrapper_number3">
              <svg
                height="60vh"
                className="number_bold"
                viewBox="0 0 408 643"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M202.625 643C284.225 643 408 584.295 408 444.872C408 310.952 297.061 279.765 252.135 285.268C299.811 262.337 360.324 202.715 360.324 131.168C360.324 52.2839 290.643 0 214.544 0C129.276 0 31.173 74.2982 31.173 123.83C31.173 136.672 39.4247 144.01 49.5101 144.01C59.5955 144.01 67.8472 140.341 75.182 119.244C91.6854 71.5464 132.027 7.3381 214.544 7.3381C299.811 7.3381 317.231 76.1327 317.231 136.672C317.231 205.466 290.643 257.75 232.881 288.02L144.863 333.883L148.53 341.221L215.461 306.365C233.798 297.193 245.717 292.606 261.303 292.606C325.483 292.606 362.157 338.469 362.157 444.872C362.157 569.619 301.645 635.662 202.625 635.662C131.11 635.662 69.6809 599.889 39.4247 489.817C33.9236 469.638 25.6719 468.72 18.3371 468.72C9.16854 468.72 0 476.058 0 490.735C0 554.943 94.4359 643 202.625 643Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="wrapper_techniques">
              <p ref={titleRef} className="title_techniques">
                Techniques <br /> care
              </p>
              <p ref={descRef} className="desc_techniques">
                TO HELP RELAUNCH HIS SELF-HEALING MECHANISM AND REGAIN HIS
                BALANCE. THE TREATMENTS OFFERED MAKE IT POSSIBLE TO CLEANSE
                STAGNANT OR WORN-OUT ENERGIES, RECHARGE, RELAUNCH THE
                CIRCULATION OF THESE VITAL ENERGIES, WHICH HELPS THE BODY IN ITS
                HOMEOSTASIS MECHANISM.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="home_title_ticker_techniquess">
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
        {window.innerWidth >= 768 ? (
          <div className="row sticky_section">
            <div ref={scopeRef} className="col-12 col-md-7 p-0">
              <div ref={triggerStickyRef} className="wrapper_sticky_descs">
                <div ref={borderRef} className="border_right"></div>
                <div className="descs1">
                  <div className="numbers">
                    {/*  */}
                    <span ref={number01}>01</span>
                    <span className="line_numbers"></span>
                    <span>03</span>
                    {/*  */}
                    <span ref={number02}>02</span>
                    <span className="line_numbers"></span>
                    <span>03</span>
                    {/*  */}
                    <span ref={number03}>03</span>
                    <span className="line_numbers"></span>
                    <span>03</span>
                    {/*  */}
                  </div>
                  <div className="titles">
                    {/*  */}
                    <p ref={title0101}>Réflexologie</p>
                    <p ref={title0102}>plantaire</p>
                    {/*  */}
                    <p ref={title0201}>massage</p>
                    <p ref={title0202}>Abhyanga</p>
                    {/*  */}
                    <p ref={title03}>Physioscan</p>
                  </div>
                  <div className="descs">
                    {/*  */}
                    <p ref={descText01}>
                      Permet d’obtenir des informations précises sur l’état
                      énergétique de tous les systèmes du corps humain :
                      endocrinien, nerveux, osseux, digestif, lymphatique...
                    </p>
                    {/*  */}
                    <p ref={descText02}>
                      Permet d’obtenir des informations précises sur l’état
                      énergétique de tous les systèmes du corps humain :
                      endocrinien, nerveux, osseux, digestif, lymphatique...
                    </p>
                    {/*  */}
                    <p ref={descText03}>
                      PERMET D’OBTENIR DES INFORMATIONS PRÉCISES SUR L’ÉTAT
                      ÉNERGÉTIQUE DE TOUS LES SYSTÈMES DU CORPS HUMAIN :
                      ENDOCRINIEN, NERVEUX, OSSEUX, DIGESTIF, LYMPHATIQUE...
                    </p>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 p-0">
              <div className="wrapper_sticky_images">
                <div className="wrapper_image1">
                  <div ref={imageScroll1} className="bgImage1"></div>
                  <div ref={TopBorder1Ref} className="image1_bt"></div>
                  <div className="image1_bbottom"></div>
                </div>
                <div className="wrapper_image2">
                  <div ref={imageScroll2} className="bgImage2"></div>
                  <div ref={TopBorder2Ref} className="image2_bt"></div>
                  <div className="image2_bbottom"></div>
                </div>
                <div className="wrapper_image3">
                  <div ref={imageScroll3} className="bgImage3"></div>
                  <div ref={TopBorder3Ref} className="image3_bt"></div>
                  <div className="image3_bbottom"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <StickyItems
              lineCount="01"
              title="Réflexologie plantaire"
              desc="PRATIQUE ANCESTRALE, CETTE TECHNIQUE DE SOIN ALTERNATIVE SE PRATIQUE PAR DIGITO-PRESSIONS SUR L’ENSEMBLE DU PIED, AFIN DE DÉTECTER ET DE LIBÉRER LES TENSIONS."
              src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6041025d0a4449ca9a54c916_home__thumb__reflexologie.jpg"
            />
            <StickyItems
              lineCount="02"
              title="Massage Abhyanga"
              desc="MASSAGE DE BIEN-ÊTRE CONNU POUR SES VERTUS PRÉVENTIVES ET SA FACULTÉ À FAVORISER LA RÉPARTITION DE L’ÉNERGIE DANS TOUT LE CORPS, TANT SUR LE PLAN PHYSIQUE QUE MENTAL"
              src={
                "https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fdb6b895eb1707637673a58_mobile_home_thumb_massage.jpg"
              }
            />
            <StickyItems
              lineCount="03"
              title="Physioscan"
              desc={
                "PERMET D’OBTENIR DES INFORMATIONS PRÉCISES SUR L’ÉTAT ÉNERGÉTIQUE DE TOUS LES SYSTÈMES DU CORPS HUMAIN : ENDOCRINIEN, NERVEUX, OSSEUX, DIGESTIF, LYMPHATIQUE..."
              }
              src={
                "https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fb1a5e7d1c7a011978fe8b7_physioscan.jpg"
              }
            />
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <div ref={triggerTitleTop} className="wrapper_top_title">
              <p ref={topTitleRef} className="top_title">
                THE<span>&nbsp;</span>PROCESS
                <br />
                SELF ~ HEALING
                <br />
                COME<span>&nbsp;</span>TRUE<span>&nbsp;</span>ON
                <span>&nbsp;</span>THEIR<span>&nbsp;</span>OWN,
              </p>
            </div>
            <div ref={triggerTitleBottom} className="wrapper_bottom_title">
              <p ref={bottomTitleRef} className="bottom_title">
                BUT<span>&nbsp;</span>NOT<span>&nbsp;</span>WITHOUT
                <span>&nbsp;</span>OUR
                <br />
                TOTAL<span>&nbsp;</span>CONSENT.
              </p>
            </div>
          </div>
        </div>
        <div className="row about_writter">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <div className="wrapper_descs_writter">
              <p className="about_writter_title">
                I have become a passionate follower of well-being. My philosophy
                is now '' a break for oneself '', to stop, breathe, reconnect
                with oneself, its essential.
              </p>
              <motion.div
                variants={borderVariants}
                onViewportEnter={enterBorderHandler}
                initial="default"
                animate={enterBorder ? "animate" : "default"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                ref={borderWritterRef}
                className="border_bottom_writter"
              ></motion.div>
              <p className="writter_name">DIDIER MARTIN</p>
            </div>
          </div>
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="wrapper_all_writter">
              <div className="wrapper_image_writter">
                <img
                  ref={imageWritterRef}
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60351bb3a3529d0417b01022_portrait__didier_martin.jpg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60351bb3a3529d0417b01022_portrait__didier_martin.jpg"
                />
              </div>
              <div className="wrapper_image_description">
                <p ref={endTriggerTech} className="writter_image_description">
                  A PHYSICIST BY TRAINING AND PROFESSION, DIDIER MARTIN
                  UNDERSTOOD THAT EVERYTHING IS ENERGY, THAT IT IS IN THE
                  PRESENT, HENCE THE IMPORTANCE OF THIS BREAK. IT WAS THE ENERGY
                  TREATMENTS THAT HELPED HIM REGAIN HIS BALANCE OF BODILY,
                  PSYCHOLOGICAL AND EMOTIONAL HEALTH. THIS NEW AWARENESS
                  DIRECTED HIM TOWARDS THEIR APPRENTICESHIPS FOR SEVERAL YEARS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
