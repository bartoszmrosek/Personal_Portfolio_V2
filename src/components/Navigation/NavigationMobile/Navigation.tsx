import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

const NavigationMobile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile === true ? (
        <nav className={styles.navbar}>
          <input id="hamburger" className={styles.hamburger} type="checkbox" />
          <label className={styles.hamburger} htmlFor="hamburger">
            <i></i>
            <svg>
              <text>
                <tspan className={styles.close}>close</tspan>
                <tspan className={styles.open}>menu</tspan>
              </text>
            </svg>
          </label>
          <section className={styles["drawer-list"]}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </section>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">About me</a>
          <a href="#">Contact</a>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
