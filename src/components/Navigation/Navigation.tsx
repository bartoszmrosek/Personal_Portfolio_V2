import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

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
          </label>
          <section className={`${styles["drawer-list"]}`}>
            <ul>
              <li>
                <a href="#" className="neonYellow">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="neonRed">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="neonBlue">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="neonDarkBlue">
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="neonPurple">
                  Contact
                </a>
              </li>
            </ul>
          </section>
        </nav>
      ) : (
        <nav className={`${styles.navbar} ${styles["navbar-desktop"]}`}>
          <a>I</a>
          <NavigationLink href="#" className="neonYellow">
            Home
          </NavigationLink>
          <NavigationLink href="#" className="neonRed">
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
