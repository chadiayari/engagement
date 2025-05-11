import React, { useEffect, useRef, useState } from "react";
import Btn from "../../components/Btn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TechnicalPhysioItems from "./TechnicalPhysioItems";
import Techno768 from "./Techno768";
import "./Physioscan.scss";

export default function TechnicalPhysio() {
  let [widthSize, setWidthSize] = useState(window.innerWidth);

  let TechnicalPhysioRef = useRef(null);
  let borderLeftRef = useRef(null);
  let borderRightRef = useRef(null);
  let titleRef = useRef(null);
  let stickyRef = useRef(null);
  let imageInvestigateRef = useRef(null);
  let imageVibrationRef = useRef(null);
  let imgTechno2Ref = useRef(null);
  let title2TechnoRef = useRef(null);
  let imgTechnoInvestigateRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthSize(window.innerWidth);
    });
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 992) {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: borderLeftRef.current,
            start: "top 0%",
            end: "top 0%",
            id: "borderLeftTrigger",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        });
        tl.to(borderLeftRef.current, {
          height: "100vh",
          duration: 2,
          delay: 0.2,
          ease: "Expo.easeOut",
        });
        tl.to(
          borderRightRef.current,
          {
            height: "100vh",
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
              start: "top 20%",
              end: "bottom 0%",
              id: "titleTrigger",
            },
          }
        );
        gsap.to(stickyRef.current, {
          duration: 1,
          scrollTrigger: {
            trigger: stickyRef.current,
            endTrigger: imageInvestigateRef.current,
            start: "top 0%",
            end: "center 65%",
            id: "stickyTrigger",
            pin: true,
            pinSpacer: false,
            pinSpacing: false,
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        });

        gsap.fromTo(
          imageVibrationRef.current,
          { scale: 1.5, clipPath: "inset(0% 0% 100% 0%)" },
          {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "Expo.easeOut",
            scrollTrigger: {
              trigger: imageVibrationRef.current,
              start: "center 85%",
              end: "bottom 0%",
              id: "imageVibration",
              // markers: {
              //   startColor: "#ffd700",
              //   endColor: "#ff0000",
              //   fontSize: "20px",
              // },
            },
          }
        );
        gsap.fromTo(
          imageInvestigateRef.current,
          { scale: 1.5, clipPath: "inset(0% 0% 100% 0%)" },
          {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "Expo.easeOut",
            scrollTrigger: {
              trigger: imageInvestigateRef.current,
              start: "center 85%",
              end: "bottom 0%",
              id: "imageVibration",
              // markers: {
              //   startColor: "#ffd700",
              //   endColor: "#ff0000",
              //   fontSize: "20px",
              // },
            },
          }
        );
      } else {
        gsap.set(title2TechnoRef.current, {
          opacity: 0,
          y: 80,
          clipPath: "inset(0% 0% 100% 0%)",
        });
        gsap.set(imgTechno2Ref.current, {
          opacity: 0,
          scale: 2,
          clipPath: "inset(0% 0% 100% 0%)",
        });
        gsap.set(imgTechnoInvestigateRef.current, {
          opacity: 0,
          scale: 2,
          clipPath: "inset(0% 0% 100% 0%)",
        });

        gsap.to(title2TechnoRef.current, {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: title2TechnoRef.current,
            start: "top 40%",
            end: "bottom 0%",
          },
        });
        gsap.to(imgTechno2Ref.current, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: imgTechno2Ref.current,
            start: "top 40%",
            end: "bottom 0%",
          },
        });
        gsap.to(imgTechnoInvestigateRef.current, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: imgTechnoInvestigateRef.current,
            start: "top 40%",
            end: "bottom 0%",
          },
        });
      }
    }, TechnicalPhysioRef);

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      {widthSize >= 992 ? (
        <div
          ref={TechnicalPhysioRef}
          className="contianer-fluid TechnicalPhysio position-relative"
        >
          <div
            ref={stickyRef}
            className="row sticky_TechnicalPhysio justify-content-start"
          >
            <div className="col-12 col-lg-5 position-relative">
              <div className="wrapper_title_TechnicalPhysio">
                <p ref={titleRef} className="title_TechnicalPhysio">
                  Technical
                </p>
              </div>
              <div
                ref={borderLeftRef}
                className="border_left_TechnicalPhysio"
              ></div>
            </div>
            <div className="col-12 col-lg-2 position-relative">
              <div
                ref={borderRightRef}
                className="border_right_TechnicalPhysioo"
              ></div>
              <div className="wrapper_btn_TechnicalPhysio">
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
              {/* Physioquantato scan  */}
              <TechnicalPhysioItems
                title={"Physioquanta"}
                desc1={`DISCOVER THE REFERENCE SITE ON THE PHYSIOSCAN
                PHYSIOQUANTA.COM/PHYSIOSCAN`}
              />
              {/* Vibration  */}
              <TechnicalPhysioItems
                title={"Vibration frequencies"}
                desc1={`THIS PRINCIPLE IS BASED ON THE ASSUMPTION THAT ALL ORGANS HAVE
                CHARACTERISTIC VIBRATIONAL FREQUENCIES WHEN THEY ARE HEALTHY
                AND THAT DISEASE IS THE BODY'S NATURAL RESPONSE TO STRESS. THE
                LATTER LEADS TO A CHANGE IN THE FREQUENCY OF ENERGY WHICH
                AFFECTS THE STATE OF HEALTH OF AN ORGAN AND MODIFIES ITS
                VIBRATIONAL STATE.`}
                desc2={`The change in the function of an organ is caused by the
              increase or decrease of these vibrations caused by a chemical,
              mechanical or thermal element exerting a tension. The system
              compares its measurement to a database and evaluates the state
              of stress, the system, the organ, the tissue or the cell
              evaluated.`}
                desc3={`The Physioscan is a decoder-analyzer that assesses the
              functional level of each organ and each tissue of the human
              body. Its operation is based on bio-feedback of cellular
              information. It gives the state of tension of an organ or a
              tissue as well as the pathological risks. Indeed, any
              physiological dysfunction results in a frequency modification
              of the electromagnetic fields emitted by the organs involved.`}
                desc4={`A dynamic graph also presents the quality of the information
              exchanged between the organ (or the analyzed tissue) and its
              environment.`}
              />
              <div className="wrapper_image_Vibration">
                <img
                  ref={imageVibrationRef}
                  className="Vibration_image"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                />
              </div>
              {/* Energy  */}
              <TechnicalPhysioItems
                title={"Energy rebalancing by Meta-therapy"}
                desc1={`THE PHYSIOSCAN OFFERS THE POSSIBILITY OF "RE-INFORMING" THE
                TISSUES CONCERNED IN A FREQUENTIAL WAY IN ORDER TO RESTART THE
                FUNCTIONING OF THE DEFICIENT ORGANS. THIS QUANTUM BIOTECHNOLOGY
                IS INFORMATIVE, GENTLE, NON-BINDING, THEREFORE IN TOTAL RESPECT
                WITH THE UNIQUENESS OF THE LIVING BODY.`}
              />
              {/* Investigate  */}
              <TechnicalPhysioItems
                title={"Investigate and correct vibrational fields"}
                desc1={`THE PHYSIOSCAN IS A DEVICE THAT USES WAVE NANOTECHNOLOGY, THE
                PURPOSE OF WHICH IS TO INVESTIGATE AND CORRECT THE VIBRATIONAL
                FIELDS OF SUBTLE INFORMATION (ELF WAVES) EMITTED BY THE HUMAN
                BODY VIA THE BRAIN. BASED ON THE IDENTIFICATION OF HUMAN
                BIO-FREQUENCIES, IT MAKES IT POSSIBLE TO PERFORM A HIGHLY
                PRECISE ENERGY SCAN AND A VIBRATIONAL HARMONIZATION OF THE
                ORGANISM.`}
                desc2={`The investigation presents an astonishing rapidity in taking
              measurements and in interpreting the results observed. It
              brings a lot of valuable information about organs, tissues,
              specific cells and biochemical structures.`}
              />
              <div className="wrapper_image_Investigate">
                <img
                  ref={imageInvestigateRef}
                  className="image_Investigate"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60422374863caf2a190d9315_physioscan_03-p-800.jpeg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60422374863caf2a190d9315_physioscan_03-p-800.jpeg"
                />
              </div>
              <div className="border_bottom_TechnicalPhysio"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid TechnicalPhysio2">
          <div className="row">
            <div className="col-12">
              <div className="wrapper_titleTechnicalPhysio22">
                <p ref={title2TechnoRef} className="title_TechnicalPhysio2">
                  Technical
                </p>
              </div>
            </div>
            <Techno768
              title="Physioquanta"
              desc="DISCOVER THE REFERENCE SITE ON THE PHYSIOSCAN 
                PHYSIOQUANTA.COM/PHYSIOSCAN"
            />
            <Techno768
              title="Vibration frequencies"
              desc={`THIS PRINCIPLE IS BASED ON THE ASSUMPTION THAT ALL ORGANS HAVE CHARACTERISTIC VIBRATIONAL FREQUENCIES WHEN THEY ARE HEALTHY AND THAT DISEASE IS THE BODY'S NATURAL RESPONSE TO STRESS. THE LATTER LEADS TO A CHANGE IN THE FREQUENCY OF ENERGY WHICH AFFECTS THE STATE OF HEALTH OF AN ORGAN AND MODIFIES ITS VIBRATIONAL STATE.`}
              desc2={`The change in the function of an organ is caused by the increase or decrease of these vibrations caused by a chemical, mechanical or thermal element exerting a tension. The system compares its measurement to a database and evaluates the state of stress, the system, the organ, the tissue or the cell evaluated.`}
              desc3={`The Physioscan is a decoder-analyzer that assesses the functional level of each organ and each tissue of the human body. Its operation is based on bio-feedback of cellular information. It gives the state of tension of an organ or a tissue as well as the pathological risks.
                Indeed, any physiological dysfunction results in a frequency modification of the electromagnetic fields emitted by the organs involved.`}
              desc4={`A dynamic graph also presents the quality of the information exchanged between the organ (or the analyzed tissue) and its environment.`}
            />
            <div className="col-12 px-0 overflow-hidden">
              <div
                ref={imgTechno2Ref}
                className="image_Vibration_techno2"
              ></div>
            </div>
            <Techno768
              title="Energy rebalancing by Meta-therapy"
              desc={`THE PHYSIOSCAN OFFERS THE POSSIBILITY OF "RE-INFORMING" THE TISSUES CONCERNED IN A FREQUENTIAL WAY IN ORDER TO RESTART THE FUNCTIONING OF THE DEFICIENT ORGANS. THIS QUANTUM BIOTECHNOLOGY IS INFORMATIVE, GENTLE, NON-BINDING, THEREFORE IN TOTAL RESPECT WITH THE UNIQUENESS OF THE LIVING BODY.`}
            />
            <Techno768
              title="Investigate and correct vibrational fields"
              desc={`THE PHYSIOSCAN IS A DEVICE THAT USES WAVE NANOTECHNOLOGY, THE PURPOSE OF WHICH IS TO INVESTIGATE AND CORRECT THE VIBRATIONAL FIELDS OF SUBTLE INFORMATION (ELF WAVES) EMITTED BY THE HUMAN BODY VIA THE BRAIN. BASED ON THE IDENTIFICATION OF HUMAN BIO-FREQUENCIES, IT MAKES IT POSSIBLE TO PERFORM A HIGHLY PRECISE ENERGY SCAN AND A VIBRATIONAL HARMONIZATION OF THE ORGANISM.`}
              desc2={`The investigation presents an astonishing rapidity in taking measurements and in interpreting the results observed. It brings a lot of valuable information about organs, tissues, specific cells and biochemical structures.`}
            />
            <div className="col-12 px-0 overflow-hidden">
              <div
                ref={imgTechnoInvestigateRef}
                className="image_Investigate_techno2"
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
