import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavigationMobile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const hamburgerRef = useRef<HTMLInputElement>(null);

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

  const closeNavbar = useCallback(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.checked = false;
    }
  }, []);

  return (
    <>
      {isMobile === true ? (
        <nav className={styles.navbar}>
          <input
            id="hamburger"
            className={styles.hamburger}
            type="checkbox"
            ref={hamburgerRef}
          />
          <label className={styles.hamburger} htmlFor="hamburger">
            <i></i>
          </label>
          <section className={`${styles["drawer-list"]}`}>
            <ul>
              <li>
                <a href="#Home" className="neonYellow" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#Experience" className="neonRed" onClick={closeNavbar}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="neonBlue" onClick={closeNavbar}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="neonDarkBlue" onClick={closeNavbar}>
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="neonPurple" onClick={closeNavbar}>
                  Contact
                </a>
              </li>
            </ul>
          </section>
        </nav>
      ) : (
        <nav className={`${styles.navbar} ${styles["navbar-desktop"]}`}>
          <a>I</a>
          <NavigationLink href="#Home" className="neonYellow">
            Home
          </NavigationLink>
          <NavigationLink href="#Experience" className="neonRed">
            Experience
          </NavigationLink>
          <NavigationLink href="#" className="neonBlue">
            Projects
          </NavigationLink>
          <NavigationLink href="#" className="neonDarkBlue">
            About me
          </NavigationLink>
          <NavigationLink href="#" className="neonPurple">
            Contact
          </NavigationLink>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
