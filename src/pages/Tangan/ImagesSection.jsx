import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Btn from "../../components/Btn";
import "./Tangan.scss";

export default function ImagesSection() {
  let leftImageRef = useRef(null);
  let rightImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    if (window.innerWidth <= 500) {
      gsap.to(rightImageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: "center 60%",
          end: "bottom 0%",
        },
      });
      gsap.to(leftImageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "center 90%",
          end: "bottom 0%",
        },
      });
    }

    gsap.to(rightImageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      duration: 1.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: rightImageRef.current,
        start: "center 90%",
        end: "bottom 0%",
        id: "triggerRightImage",
      },
    });
    gsap.to(leftImageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      duration: 1.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: leftImageRef.current,
        start: "+=550 80%",
        end: "bottom 0%",
        id: "triggerLeftImage",
      },
    });

    return () => {
      ScrollTrigger.getById("triggerRightImage").kill();
      ScrollTrigger.getById("triggerLeftImage").kill();
      ScrollTrigger.refresh();
    };
  });

  return (
    <>
      <div className="container-fluid images_section">
        <div className="row justify-content-end">
          <div className="col-8 col-lg-6">
            <div className="wrapper_right_image">
              <img
                ref={rightImageRef}
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604101c608caef5b642fd603_seance__physioscan.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604101c608caef5b642fd603_seance__physioscan.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-6">
            <div className="wrapper_left_image">
              <img
                ref={leftImageRef}
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040ffd9ffe7018b7b1f3880_home__seance-massage.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040ffd9ffe7018b7b1f3880_home__seance-massage.jpg"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="btn_imageSection">
              <Btn
                borderColor="#000"
                firstText="makean appointment"
                secondText="TAKE A BREAK"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
