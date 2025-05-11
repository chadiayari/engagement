import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Btn.scss";

export default function Btn({ firstText, secondText, borderColor }) {
  let [isHover, setIsHover] = useState(false);
  let btnTextRef = useRef();
  let imageSecRef = useRef();
  let btmMouseEnter = () => {
    setIsHover(true);
    let el = btnTextRef.current;
    el.innerText = secondText;
    el.style.color = "#000";
    imageSecRef.current.style.borderColor = borderColor;
  };
  let btmMouseLeave = () => {
    setIsHover(false);
    let el = btnTextRef.current;
    el.innerText = "MAKEAN APPOINTMENT";
    el.style.color = "#f0f8ff";
    imageSecRef.current.style.borderColor = "#f0f8ff";
  };

  let btnVariants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8,
      },
    },
  };
  let btnBGCVariants = {
    default: {
      clipPath: "circle(50% at 50% 50%)",
    },
    hover: {
      clipPath: "circle(0% at 50% 50%)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.div
        onMouseEnter={btmMouseEnter}
        onMouseLeave={btmMouseLeave}
        variants={btnVariants}
        animate={isHover ? "hover" : "default"}
        className="image_section_button"
        ref={imageSecRef}
      >
        <motion.div
          variants={btnBGCVariants}
          animate={isHover ? "hover" : "default"}
          className="bgButton"
        ></motion.div>
        <span ref={btnTextRef} className="text_image_btn">
          {firstText}
        </span>
      </motion.div>
    </>
  );
}
