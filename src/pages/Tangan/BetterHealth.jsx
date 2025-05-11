import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import "./Tangan.scss";

export default function BetterHealth() {
  let titleBetterHealth = useRef(null);
  let descBetterHealth = useRef(null);
  let betterHealthRef = useRef(null);
  let logoRef = useRef(null);

  useLayoutEffect(() => {
    let techniquessSection = document.querySelector(".techniquess");
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.refresh();

    gsap.set(logoRef.current, {
      opacity: 0,
    });
    gsap.to(logoRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top 40%",
        end: "bottom 0%",
        id: "trigger1",
        toggleActions: "restart reverse restart reverse",
        // markers: true,
      },
    });

    let hiddenTechniques = () => {
      gsap.to(document.body, {
        backgroundColor: "#f5f5f5",
        duration: 0.35,
        ease: "ease",
      });
      gsap.to(techniquessSection, {
        opacity: 0,
        ease: "Expo.easeOut",
        duration: 0.7,
      });
    };
    let leaveTechniques = () => {
      gsap.to(document.body, {
        backgroundColor: "#f5f5f5",
        duration: 0.35,
        ease: "ease",
      });
      gsap.to(techniquessSection, {
        opacity: 1,
        duration: 0.7,
        ease: "Expo.easeOut",
      });
    };
    let showTechniques = () => {
      gsap.to(document.body, {
        backgroundColor: "#000",
        duration: 0.35,
        ease: "ease",
      });
      gsap.to(techniquessSection, {
        opacity: 1,
        duration: 0.7,
        ease: "Expo.easeOut",
      });
    };
    gsap.to(betterHealthRef.current, {
      duration: 0.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: betterHealthRef.current,
        start: "top 70%",
        end: "bottom 5%",
        id: "trigger2",
        onEnter: hiddenTechniques,
        onEnterBack: hiddenTechniques,
        onLeave: leaveTechniques,
        onLeaveBack: showTechniques,
      },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleBetterHealth.current,
        start: "center 65%",
        end: "bottom 5%",
      },
    });
    let splitTitle = new SplitText(titleBetterHealth.current, {
      type: "chars",
    });
    let splitDesc = new SplitText(descBetterHealth.current, { type: "lines" });
    gsap.set(splitTitle.chars, {
      opacity: 0,
      perspective: 200,
      scale: 0,
      x: 30,
      y: -80,
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
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "Back.easeOut.config(1.4)",
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
    return () => {
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    };
  });

  return (
    <>
      <div ref={betterHealthRef} className="container-fluid better_health">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="wrapper_logo5">
              <svg
                ref={logoRef}
                width="38vh"
                height="60vh"
                className="”number_bold”"
                viewBox="0 0 537 927"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M502.96 101.636H503.366L503.449 101.238L523.782 3.37267L523.888 2.86331L523.374 2.77777L515.75 1.5068L515.288 1.42984L515.181 1.8855C512.655 12.6199 508.401 20.8023 502.806 27.0461C497.21 33.2904 490.254 37.6186 482.292 40.6145C466.346 46.6149 446.421 47.2551 425.442 47.2551H100.121H99.6905L99.6267 47.6809L34.8167 479.813L34.7595 480.195L35.1142 480.347L44.0097 484.16L44.4126 484.332L44.6365 483.956C96.6508 396.406 184.174 346.935 280.572 346.935C349.023 346.935 396.835 376.396 427.561 425.026C458.306 473.686 471.961 541.576 471.961 618.424C471.961 698.426 453.232 772.672 416.45 826.901C379.68 881.113 324.867 915.332 252.615 915.332C189.228 915.332 146.47 890.299 117.17 858.143C87.8541 825.97 71.996 786.649 62.472 758.073C58.0133 744.695 53.2123 736.653 47.8725 731.959C42.51 727.246 36.6577 725.957 30.228 725.957C22.5109 725.957 15.0728 728.208 9.55858 733.236C4.03563 738.273 0.5 746.043 0.5 756.96C0.5 771.404 7.55158 789.219 20.2647 807.784C32.9864 826.361 51.4113 845.741 74.2415 863.324C119.9 898.488 183.226 926.5 253.886 926.5C397.761 926.5 536.5 816.972 536.5 614.611C536.5 519.184 507.556 449.459 461.057 403.59C414.562 357.725 350.569 335.767 280.572 335.767C180.856 335.767 98.6517 384.589 50.1074 454.929L103.093 101.636H502.96Z"
                  fill="#F5F5F5"
                  stroke="#1A1A1A"
                ></path>
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="wrapper_betterHealth_desc">
              <p ref={titleBetterHealth} className="title_betterHealth">
                Axes<span>&nbsp;</span>for<span>&nbsp;</span>a <br />
                better<span>&nbsp;</span>health
              </p>
              <p ref={descBetterHealth} className="desc_betterHealth">
                THE SOURCES OF THE IMBALANCE ARE OUR ENVIRONMENT. INDEED, THE
                SELF-HEALING PROCESSES ARE CARRIED OUT ON THEIR OWN BUT FIRST
                NEED OUR CONSENT. OUR BODY IS OUR VEHICLE, IT JUST NEEDS GOOD
                MAINTENANCE, THERE IS OUR CONSENT. IT IS OUR ENVIRONMENT THAT
                ALLOWS US OR NOT TO BE IN GOOD HEALTH. IT'S UP TO US TO
                DECIDE...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-md-none">
            <div className="home_title_ticker_better_health">
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
    </>
  );
}
