import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BubblyLink } from "react-bubbly-transitions";
import "./Reflexology.scss";
import EngagementPartyForm from "./Form";

export default function Footer() {
  let titleFooterRef = useRef(null);
  let hoverImageRef = useRef(null);
  let scopeRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(titleFooterRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: -150,
        perspective: 200,
      });
      gsap.to(titleFooterRef.current, {
        y: 0,
        perspective: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: titleFooterRef.current,
          start: "top 40%",
          id: "titleFooter",
          end: "bottom 0%",
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("titleFooter").kill();

      ctx.revert();
    };
  });

  let hoverON = (e) => {
    gsap.to(hoverImageRef.current, {
      opacity: 1,
      clipPath: "inset(0% 0%)",
      x: e.clientX - 100,
      y: e.clientY - 100,
      duration: 0.5,
    });
  };
  let hoverOff = () => {
    gsap.to(hoverImageRef.current, {
      opacity: 0,
      clipPath: "inset(100% 0%)",
      duration: 0.5,
    });
  };
  let moveImage = (e) => {
    if (window.innerWidth >= 992) {
      gsap.to(hoverImageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 324,
        duration: 0.5,
      });
    } else {
      gsap.to(hoverImageRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0%)",
        x: e.clientX - 324,
        y: e.clientY - 400,
        duration: 0.5,
      });
    }
  };

  // Function to show form and scroll to bottom
  const showFormAndScroll = () => {
    setShowForm(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100); // Small timeout to ensure form is rendered before scrolling
  };

  return (
    <>
      <div
        id="#form"
        ref={scopeRef}
        className="contianer-fluid footer_reflexology"
      >
        <div className="row">
          <div className="col-12">
            <div className="wrapper_title_footer">
              <p className="next_page">AMONG THE VIP?</p>
              {showForm ? (
                <EngagementPartyForm />
              ) : (
                <button
                  onClick={showFormAndScroll}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                  }}
                >
                  <span
                    ref={titleFooterRef}
                    onMouseEnter={hoverON}
                    onMouseLeave={hoverOff}
                    onMouseMove={moveImage}
                    className="title_footer"
                  >
                    JOIN NOW
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
