import React from "react";
import Btn from "../../components/Btn";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PhysioItem768 from "./PhysioItem768";
import "./Physioscan.scss";

export default function GoalsPhysio() {
  let [widthSize, setWidthSize] = useState(window.innerWidth);

  let GoalsPhysioRef = useRef(null);
  let borderLeftRef = useRef(null);
  let borderRightRef = useRef(null);
  let titleRef = useRef(null);
  let stickyRef = useRef(null);
  let imageReinformRef = useRef(null);

  let scanTitleRef = useRef(null);
  let scanDescRef = useRef(null);
  let scanBorder = useRef(null);

  let targetTitleRef = useRef(null);
  let targetDescRef = useRef(null);
  let targetBorder = useRef(null);

  let rebalanceTitleRef = useRef(null);
  let rebalanceDescRef = useRef(null);
  let rebalanceBorder = useRef(null);

  let ReinformTitleRef = useRef(null);
  let ReinformDescRef = useRef(null);
  let ReinformBorder = useRef(null);
  let imgReinform2Ref = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthSize(window.innerWidth);
    });
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (widthSize >= 992) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: borderLeftRef.current,
            start: "top 30%",
            id: "borderLeft",
            end: "top 0%",
          },
        });
        tl.to(borderLeftRef.current, {
          height: "115vh",
          duration: 2,
          ease: "Expo.easeOut",
        });
        tl.to(
          borderRightRef.current,
          {
            height: "115vh",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.15"
        );

        gsap.fromTo(
          titleRef.current,
          { y: -120 },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "Expo.easeOut",
            scrollTrigger: {
              trigger: titleRef.current,
              id: "title",
              start: "top 20%",
              end: "bottom 0%",
            },
          }
        );
        gsap.to(stickyRef.current, {
          duration: 1,
          scrollTrigger: {
            trigger: stickyRef.current,
            endTrigger: imageReinformRef.current,
            start: "top 0%",
            end: "bottom 100%",
            id: "sticky",
            pin: true,
            pinSpacer: false,
            pinSpacing: false,
          },
        });

        // animate borders

        // scan border
        let scanTl = gsap.timeline({
          scrollTrigger: {
            trigger: scanTitleRef.current,
            start: "center 80%",
            id: "scanTrigger",
            end: "bottom 10%",
          },
        });
        scanTl.fromTo(
          scanTitleRef.current,
          { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "Expo.easeOut",
            duration: 1,
          }
        );
        scanTl.fromTo(
          scanDescRef.current,
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
        scanTl.to(
          scanBorder.current,
          {
            width: "110%",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );

        // target border
        let targetTl = gsap.timeline({
          scrollTrigger: {
            trigger: targetTitleRef.current,
            start: "center 80%",
            end: "bottom 10%",
            id: "targetTrigger",
          },
        });
        targetTl.fromTo(
          targetTitleRef.current,
          { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "Expo.easeOut",
            duration: 1,
          }
        );
        targetTl.fromTo(
          targetDescRef.current,
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
        targetTl.to(
          targetBorder.current,
          {
            width: "110%",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );

        // rebalance border
        let rebalanceTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.querySelector(".Rebalance_title"),
            start: "center 80%",
            end: "bottom 10%",
            id: "rebalanceTrigger",
          },
        });
        rebalanceTl.fromTo(
          rebalanceTitleRef.current,
          { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "Expo.easeOut",
            duration: 1,
          }
        );
        rebalanceTl.fromTo(
          rebalanceDescRef.current,
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
        rebalanceTl.to(
          rebalanceBorder.current,
          {
            width: "110%",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );

        // Reinform border
        let reinformTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.querySelector(".Reinform_title"),
            start: "center 80%",
            end: "bottom 10%",
            id: "ReinformTrigger",
          },
        });
        reinformTl.fromTo(
          ReinformTitleRef.current,
          { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "Expo.easeOut",
            duration: 1,
          }
        );
        reinformTl.fromTo(
          ReinformDescRef.current,
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
        reinformTl.to(
          ReinformBorder.current,
          {
            width: "110%",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );
        reinformTl.to(
          imageReinformRef.current,
          {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 2,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );
      } else {
        gsap.set(imgReinform2Ref.current, {
          scale: 2,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        });
        gsap.to(imgReinform2Ref.current, {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: imgReinform2Ref.current,
            start: "center 90%",
            end: "bottom 0%",
          },
        });
      }
    }, GoalsPhysioRef);

    return () => {
      if (widthSize >= 992) {
        ScrollTrigger.getById("borderLeft").kill();
        ScrollTrigger.getById("title").kill();
        ScrollTrigger.getById("sticky").kill();
        ScrollTrigger.getById("scanTrigger").kill();
        ScrollTrigger.getById("targetTrigger").kill();
        ScrollTrigger.getById("rebalanceTrigger").kill();
        ScrollTrigger.getById("ReinformTrigger").kill();
        ctx.revert();
      }
    };
  });

  return (
    <>
      {widthSize >= 992 ? (
        <>
          <div ref={GoalsPhysioRef} className="contianer-fluid GoalsPhysio">
            <div
              ref={stickyRef}
              className="row sticky_GoalsPhysio justify-content-start"
            >
              <div className="col-12 col-lg-5 position-relative">
                <div className="wrapper_title_goalsphysio">
                  <p ref={titleRef} className="title_goalsPhysio">
                    Goals
                  </p>
                </div>
                <div
                  ref={borderLeftRef}
                  className="border_left_goalsphysio"
                ></div>
              </div>
              <div className="col-12 col-lg-2 position-relative">
                <div
                  ref={borderRightRef}
                  className="border_right_goalsphysio"
                ></div>
                <div className="wrapper_btn_GoalsPhysio">
                  <Btn
                    firstText="makean appointment"
                    secondText="take a break"
                    borderColor="#000"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-12 col-lg-5">
                {/* to scan  */}
                <div className="wrapper_scan">
                  <p ref={scanTitleRef} className="scan_title">
                    To scan
                  </p>
                  <p ref={scanDescRef} className="scan_desc">
                    THE PHYSIOSCAN MAKES IT POSSIBLE TO CARRY OUT A RAPID AND
                    PRECISE ASSESSMENT OF THE ENERGY LEVEL OF THE VARIOUS
                    SYSTEMS WHICH DETERMINE THE BALANCE OF THE INDIVIDUAL.
                  </p>
                  <div ref={scanBorder} className="scan_border"></div>
                </div>
                {/* Target  */}
                <div className="wrapper_Target">
                  <p ref={targetTitleRef} className="Target_title">
                    Target
                  </p>
                  <p ref={targetDescRef} className="Target_desc">
                    BY READING VIBRATORY INFORMATION, THE PHYSIOSCAN MAKES IT
                    POSSIBLE TO CARRY OUT AN ENERGY AND INFORMATIONAL ANALYSIS
                    IN ORDER TO IDENTIFY OR CONFIRM A PERCEIVED IMBALANCE.
                  </p>
                  <div ref={targetBorder} className="Target_border"></div>
                </div>
                {/* Rebalance  */}
                <div className="wrapper_Rebalance">
                  <p ref={rebalanceTitleRef} className="Rebalance_title">
                    Rebalance
                  </p>
                  <p ref={rebalanceDescRef} className="Rebalance_desc">
                    THE PHYSIOSCAN MAKES IT POSSIBLE TO HARMONIZE WELL-BEING BY
                    FREQUENCY RE-INFORMATION, CALLED "META-RESONANCE" OR
                    "META-THERAPY".
                  </p>
                  <div ref={rebalanceBorder} className="Rebalance_border"></div>
                </div>
                {/* Reinform  */}
                <div className="wrapper_Reinform">
                  <p ref={ReinformTitleRef} className="Reinform_title">
                    Reinform
                  </p>
                  <p ref={ReinformDescRef} className="Reinform_desc">
                    MANY HARMONIZING FREQUENCIES ARE OFFERED BY THE PHYSIOSCAN,
                    FROM HERBAL MEDICINE, HOMEOPATHY, PHYSIOLOGY, BIOENERGY. BY
                    SENDING THE OPTIMALLY ADAPTED FREQUENCIES TO DIFFERENT AREAS
                    OF THE BODY (CELLS, TISSUES, ORGANS) YOU CONTRIBUTE TO THE
                    RESTORATION OF GENERAL HOMEOSTASIS.
                  </p>
                  <div ref={ReinformBorder} className="Reinform_border"></div>
                  <div className="wrapper_image_Reinform">
                    <img
                      ref={imageReinformRef}
                      className="image_Reinform"
                      src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604223488bf2e87510398bb4_physioscan__01.jpg"
                      alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604223488bf2e87510398bb4_physioscan__01.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container-fluid GoalsPhysio2">
          <div className="row">
            <div className="col-12">
              <div className="wrapper_titleGoalsPhysio2">
                <p className="title_GoalsPhysio2">Goals</p>
              </div>
            </div>
            <PhysioItem768
              title="To scan"
              desc="THE PHYSIOSCAN MAKES IT POSSIBLE TO CARRY OUT A RAPID AND
                PRECISE ASSESSMENT OF THE ENERGY LEVEL OF THE VARIOUS
                SYSTEMS WHICH DETERMINE THE BALANCE OF THE INDIVIDUAL."
            />
            <PhysioItem768
              title="Target"
              desc="BY READING VIBRATORY INFORMATION, THE PHYSIOSCAN MAKES IT
                POSSIBLE TO CARRY OUT AN ENERGY AND INFORMATIONAL ANALYSIS
                IN ORDER TO IDENTIFY OR CONFIRM A PERCEIVED IMBALANCE."
            />
            <PhysioItem768
              title="Rebalance"
              desc='THE PHYSIOSCAN MAKES IT POSSIBLE TO HARMONIZE WELL-BEING BY
                FREQUENCY RE-INFORMATION, CALLED "META-RESONANCE" OR
                "META-THERAPY".'
            />
            <PhysioItem768
              title="Reinform"
              desc="MANY HARMONIZING FREQUENCIES ARE OFFERED BY THE PHYSIOSCAN,
                FROM HERBAL MEDICINE, HOMEOPATHY, PHYSIOLOGY, BIOENERGY. BY
                SENDING THE OPTIMALLY ADAPTED FREQUENCIES TO DIFFERENT AREAS
                OF THE BODY (CELLS, TISSUES, ORGANS) YOU CONTRIBUTE TO THE
                RESTORATION OF GENERAL HOMEOSTASIS."
            />
            <div className="col-12 px-0 overflow-hidden">
              <div
                ref={imgReinform2Ref}
                className="image_Reinform_goals2"
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
