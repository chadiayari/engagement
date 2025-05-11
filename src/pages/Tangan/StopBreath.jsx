import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import stopVideo from "../../assets/videos/stopBreath.mp4";
import "./Tangan.scss";

export default function StopBreath() {
  let titleStopBreath = useRef();
  let descStopBreath = useRef();
  let vidRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let splitTitle = new SplitText(titleStopBreath.current, { type: "lines" });

    if (window.innerWidth < 992) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleStopBreath.current,
          start: "top 70%",
          end: "bottom 10%",
        },
      });
      tl.fromTo(
        splitTitle.lines,
        {
          opacity: 0,
          y: 200,
          clipPath: "inset(0% 0% 100% 0%)",
          perspective: 100,
          rotate: "27deg",
          transformOrigin: "0% 100%",
        },
        {
          opacity: 1,
          perspective: 0,
          rotate: 0,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          stagger: 0.04,
          ease: "Expo.easeOut",
        }
      );
      tl.fromTo(
        descStopBreath.current,
        { opacity: 0, y: 50 },
        { opacity: 1, duration: 1.3, y: 0, ease: "Expo.easeOut" },
        "<0.3"
      );
    } else {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleStopBreath.current,
          start: "top 50%",
          end: "bottom 10%",
        },
      });

      tl.fromTo(
        splitTitle.lines,
        {
          opacity: 0,
          y: 200,
          clipPath: "inset(0% 0% 100% 0%)",
          perspective: 100,
          rotate: "27deg",
          transformOrigin: "0% 100%",
        },
        {
          opacity: 1,
          perspective: 0,
          rotate: 0,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          stagger: 0.04,
          ease: "Expo.easeOut",
        }
      );
      tl.fromTo(
        descStopBreath.current,
        { opacity: 0, y: 50 },
        { opacity: 1, duration: 1.3, y: 0, ease: "Expo.easeOut" },
        "<0.3"
      );
    }
  });

  return (
    <>
      <div className="container-fluid stop_breath">
        <div className="row">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="wrapper_stop_breath_video">
              <div>
                <video
                  ref={vidRef}
                  src={stopVideo}
                  autoPlay
                  muted
                  loop={true}
                ></video>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 order-1 order-lg-2">
            <p ref={titleStopBreath} className="title_stop_breath">
              stop, <br />
              breathe, <br />
              reconnect
            </p>
            <p ref={descStopBreath} className="desc_stop_breath">
              DIDIER MARTIN, PRACTITIONER IN ENERGY CARE, WELCOMES YOU WITH A
              HOLISTIC APPROACH TO HELP YOU RELEASE AND REVIVE YOUR VITAL
              ENERGIES. IT USES THREE COMPLEMENTARY CARE TECHNIQUES TO START
              ANEW ON A HEALTHY BASIS, THUS LEAVING THE BODY THE POSSIBILITY OF
              STARTING ITS MECHANISMS OF HOMEOSTASIS AND BALANCING.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
