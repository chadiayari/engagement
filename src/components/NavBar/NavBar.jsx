import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { BubblyLink } from "react-bubbly-transitions";
import "./NavBar.scss";

export default function NavBar() {
  let wrapperNavRef = useRef();
  let scopeRef = useRef();
  let wrapperNavbarRef = useRef();
  let item1Ref = useRef();
  let item2Ref = useRef();
  let item3Ref = useRef();
  let [widthSize, setWidthSize] = useState(window.innerWidth);
  let [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let handlerResize = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);
    let ctx = gsap.context(() => {
      if (widthSize >= 768) {
        gsap.to(wrapperNavRef.current, {
          opacity: 1,
          duration: 1.5,
          delay: 0.7,
          ease: "Expo.easeOut",
        });
      }
    }, scopeRef);

    //

    return () => {
      window.removeEventListener("resize", handlerResize);
      ctx.revert();
    };
  });

  let handlerNavbar = () => {
    setIsOn(!isOn);

    if (!isOn) {
      let tl = gsap.timeline();
      tl.to(wrapperNavbarRef.current, {
        clipPath: "circle(100% at 50% 50%)",
        duration: 0.6,
      });
      tl.to(
        item1Ref.current,
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
      tl.to(
        item2Ref.current,
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
      tl.to(
        item3Ref.current,
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
    } else {
      let tl = gsap.timeline();
      tl.to(item3Ref.current, {
        y: 70,
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      });
      tl.to(
        item2Ref.current,
        {
          y: 80,
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.05"
      );
      tl.to(
        item1Ref.current,
        {
          y: 80,
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.09"
      );
      tl.to(
        wrapperNavbarRef.current,
        {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.4,
        },
        "<0.1"
      );
    }
  };

  return (
    <>
      {widthSize >= 768 ? (
        <div ref={scopeRef} className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="container_Navbar">
                <ul ref={wrapperNavRef} className="wrapper_nav">
                  <li className="mai_page">
                    <a className="tangan_link" href="/tangan">
                      TANGAN
                    </a>
                  </li>
                  <li>
                    <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/">
                      REFLEXOLOGIE
                    </BubblyLink>
                  </li>
                  <li>
                    <BubblyLink
                      colorStart="#000"
                      colorEnd="#f5f5f5"
                      to="/physioscan"
                    >
                      PHYSIOSCAN
                    </BubblyLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid navbar2">
            <div className="row">
              <div className="col-12">
                <p className="fixed_tangan">
                  <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/tangan">
                    TANGAN
                  </BubblyLink>
                </p>
                <div onClick={handlerNavbar} className="wrapper_navbar_icon">
                  <div data-isOn={isOn} className="line_up"></div>
                  <div data-isOn={isOn} className="line_down"></div>
                </div>
                <ul ref={wrapperNavbarRef} className="wrapper_navbar2">
                  <li ref={item1Ref} className="items_navbar2">
                    <BubblyLink
                      colorStart="#3b2b2b"
                      colorEnd="#f5f5f5"
                      to="/tangan"
                    >
                      TANGAN
                    </BubblyLink>
                  </li>
                  <li ref={item2Ref} className="items_navbar2">
                    <BubblyLink colorStart="#3b2b2b" colorEnd="#f5f5f5" to="/">
                      REFLEXOLOGIE
                    </BubblyLink>
                  </li>
                  <li ref={item3Ref} className="items_navbar2">
                    <BubblyLink
                      colorStart="#3b2b2b"
                      colorEnd="#f5f5f5"
                      to="/physioscan"
                    >
                      PHYSIOSCAN
                    </BubblyLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
