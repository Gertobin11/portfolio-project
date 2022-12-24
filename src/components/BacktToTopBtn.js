import React from "react";
import styles from "../styles/BackToTopBtn.module.css";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const BacktToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleShowBtn = () => {
    setShowBtn(window.pageYOffset > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowBtn);
  }, []);

  return (
    <>
      {showBtn ? (
        <div className={styles.wrapper} onClick={scrollToTop}>
          <FontAwesomeIcon icon={solid("arrow-up-long")} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BacktToTopBtn;
