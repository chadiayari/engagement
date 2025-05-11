import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Btn from "../../components/Btn";
import GoalsItem from "./GoalsItem";
import GoalsItem768 from "./GoalsItem768";
import "./Reflexology.scss";

export default function Goals() {
  let scopeRef = useRef(null);
  let borderRightGoalsRef = useRef(null);
  let borderLeftGoalsRef = useRef(null);
  let stickyRef = useRef(null);
  let imgPrevent2Ref = useRef(null);
  let imgPreventRef = useRef(null);
  let endTriggerSticky = useRef(null);
  let [winWidth, setWinWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1400) {
        setWinWidth(1400);
      } else if (window.innerWidth >= 1200) {
        setWinWidth(1200);
      } else if (window.innerWidth >= 992) {
        setWinWidth(992);
      } else if (window.innerWidth >= 768) {
        setWinWidth(768);
      } else if (window.innerWidth >= 576) {
        setWinWidth(576);
      }
    });
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 992) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: borderRightGoalsRef.current,
            start: "top 30%",
            id: "borderRight",
            end: "+=1000 10%",
          },
        });
        tl.to(borderRightGoalsRef.current, {
          height: "100vh",
          duration: 1.5,
          ease: "Expo.easeOut",
        });
        tl.to(
          borderLeftGoalsRef.current,
          {
            height: "100vh",
            duration: 1.5,
            ease: "Expo.easeOut",
          },
          "<0.25"
        );
        gsap.to(stickyRef.current, {
          scrollTrigger: {
            trigger: stickyRef.current,
            endTrigger: endTriggerSticky.current,
            start: "top 0%",
            end: "bottom 100%",
            id: "imagePrevent",
            pin: true,
            pinSpacer: false,
            pinSpacing: false,
          },
        });
      } else {
        gsap.set(imgPrevent2Ref.current, {
          opacity: 0,
          scale: 2,
          clipPath: "inset(100% 0% 0% 0%)",
        });
        gsap.to(imgPrevent2Ref.current, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: imgPrevent2Ref.current,
            start: "center 75%",
            end: "center 0%",
            // markers: {
            //   startColor: "#ff0000",
            //   endColor: "#ffd700",
            //   fontSize: "20px",
            // },
          },
        });
      }
    }, scopeRef);

    return () => {
      if (winWidth >= 992) {
        ScrollTrigger.getById("borderRight").kill();
        ScrollTrigger.getById("imagePrevent").kill();
      }
      ctx.revert();
    };
  });

  return (
    <>
      {winWidth >= 992 ? (
        <>
          <div ref={scopeRef} className="container-fluid goals">
            <div ref={stickyRef} className="row sticky justify-content-start">
              <div className="col-12 col-lg-5 position-relative">
                <div className="wrapper_goals_title">
                  <p data-mix="true" className="goals_title">
                    Goals
                  </p>
                </div>
                <div
                  ref={borderRightGoalsRef}
                  className="border_right_goals"
                ></div>
              </div>
              <div className="col-12 col-lg-2 position-relative">
                <div
                  ref={borderLeftGoalsRef}
                  className="border_left_goals"
                ></div>
                <div className="wrapper_btn_goals">
                  <Btn
                    firstText="makean appointment"
                    secondText="take a break"
                    borderColor="#000"
                  />
                </div>
              </div>
            </div>
            <div className="row horizontal justify-content-end p-0">
              <div className="col-12 col-lg-5">
                {/* relax */}
                <GoalsItem
                  title={"relax"}
                  desc="RELAX THE BODY AND BRING GENERAL WELL-BEING, ESPECIALLY MENTAL WELL-BEING, THANKS TO MENTAL RELAXATION AND THE EVACUATION OF NEGATIVE EMOTIONS."
                />
                <GoalsItem
                  title={"Clear out"}
                  desc="EVACUATE THE STRESS AT THE ORIGIN OF MANY PHYSICAL AND PSYCHIC DYSFUNCTIONS."
                />
                <GoalsItem
                  title={"Enable"}
                  desc={`THE TECHNIQUES USED ALLOW FIRST OF ALL TO RELAX THE
                TISSUES AND THEN TO HAVE AN EFFECTIVE DRAINING
                ACTION, BY DISLODGING THE TOXINS AND ELIMINATING
                THEM. ACTIVATING AND IMPROVING VENOUS AND LYMPHATIC
                CIRCULATION.`}
                />
                <GoalsItem
                  title={"regulate"}
                  desc={`REGULATE THE CENTRAL NERVOUS SYSTEM WHICH ITSELF 
                INCREASES THE BODY'S SELF-REGULATION PROCESS.`}
                />
                <GoalsItem
                  title={"Prevent"}
                  desc={`PREVENT, RELIEVE, EVEN ELIMINATE A LARGE NUMBER OF
                DISORDERS IN ORDER TO PROMOTE HOMEOSTASIS (STATE OF
                BALANCE IN THE BODY).`}
                />
                <div ref={imgPreventRef} className="prevent_image"></div>
                <div
                  ref={endTriggerSticky}
                  className="border_bottom_goals"
                ></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container-fluid goals2">
          <div className="row">
            <div className="col-12">
              <div className="wrapper_title2_goals">
                <p className="title_goals2">goals</p>
              </div>
            </div>
            {/* relax */}
            <GoalsItem768
              title={"relax"}
              desc="RELAX THE BODY AND BRING GENERAL WELL-BEING, ESPECIALLY MENTAL WELL-BEING, THANKS TO MENTAL RELAXATION AND THE EVACUATION OF NEGATIVE EMOTIONS."
            />
            <GoalsItem768
              title={"Clear"}
              desc="EVACUATE THE STRESS AT THE ORIGIN OF MANY PHYSICAL AND PSYCHIC DYSFUNCTIONS."
            />
            <GoalsItem768
              title={"Enable"}
              desc={`THE TECHNIQUES USED ALLOW FIRST OF ALL TO RELAX THE
                TISSUES AND THEN TO HAVE AN EFFECTIVE DRAINING
                ACTION, BY DISLODGING THE TOXINS AND ELIMINATING
                THEM. ACTIVATING AND IMPROVING VENOUS AND LYMPHATIC 
                CIRCULATION.`}
            />
            <GoalsItem768
              title={"regulate"}
              desc={`REGULATE THE CENTRAL NERVOUS SYSTEM WHICH ITSELF
                INCREASES THE BODY'S SELF-REGULATION PROCESS.`}
            />
            <GoalsItem768
              title={"Prevent"}
              desc={`PREVENT, RELIEVE, EVEN ELIMINATE A LARGE NUMBER OF 
                DISORDERS IN ORDER TO PROMOTE HOMEOSTASIS (STATE OF
                BALANCE IN THE BODY).`}
            />
            <div className="col-12 px-0 overflow-hidden">
              <div ref={imgPrevent2Ref} className="image_prevent_goals2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
