import type { PropsWithChildren } from "react";
import styles from "./NavigationLink.module.css";

interface NavigationLinkProps {
  href?: string;
  className?: string;
}

const NavigationLink: React.FC<PropsWithChildren & NavigationLinkProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <a className={`${styles.navlink} ${className}`} href={href}>
      <span>
        <span>
          <span>{children}</span>
        </span>
      </span>
    </a>
  );
};

export default NavigationLink;
