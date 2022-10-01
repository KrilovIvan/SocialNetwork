import React, { useEffect, useState } from "react";
import s from "./ScrollButton.module.css";
const ScrollButton = (props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    showButton && (
      <button onClick={scrollToTop} className={s.button}>
        Наверх
      </button>
    )
  );
};

export default ScrollButton;
