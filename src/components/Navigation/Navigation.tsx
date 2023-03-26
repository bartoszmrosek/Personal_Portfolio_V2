import { useCallback, useEffect, useRef, useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import styles from "./Navigation.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavigationMobile: React.FC = () => {
  const hamburgerRef = useRef<HTMLInputElement>(null);
  const [isMobile] = useMobile(768);

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
                <a href="#Projects" className="neonBlue" onClick={closeNavbar}>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#AboutMe"
                  className="neonDarkBlue"
                  onClick={closeNavbar}
                >
                  About me
                </a>
              </li>
              <li>
                <a href="#Contact" className="neonPurple" onClick={closeNavbar}>
                  Contact
                </a>
              </li>
            </ul>
          </section>
        </nav>
      ) : (
        <nav
          className={`${styles.navbar} ${styles["navbar-desktop"]}`}
          id="desktopNavLinks"
        >
          <a>I</a>
          <NavigationLink href="#Home" className="neonYellow neonBorder">
            Home
          </NavigationLink>
          <NavigationLink href="#Experience" className="neonRed">
            Experience
          </NavigationLink>
          <NavigationLink href="#Projects" className="neonBlue">
            Projects
          </NavigationLink>
          <NavigationLink href="#AboutMe" className="neonDarkBlue">
            About me
          </NavigationLink>
          <NavigationLink href="#Contact" className="neonPurple">
            Contact
          </NavigationLink>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
