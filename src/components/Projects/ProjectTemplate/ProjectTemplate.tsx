import { useCallback } from "react";
import SvgRepo from "../../Graphics/SvgRepo";
import type { Project } from "../project";
import styles from "./ProjectTemplate.module.css";

const ProjectTemplate: React.FC<Project & { invert?: boolean }> = ({
  imageInformations,
  title,
  description,
  links,
  invert = false,
}) => {
  const interceptor = useCallback((e: React.MouseEvent) => {
    if (links.repoLink.trim().length < 1) {
      e.preventDefault();
    }
  }, []);

  return (
    <section className={`${styles.wrapper} ${invert ? styles.invert : null}`}>
      <div className={styles.imgWrapper}>
        <img src={imageInformations.dekstopSrc} className={styles.image} />
      </div>
      <section className={styles.content}>
        <h1 className={`${styles.header} neonWhite`}>{title}</h1>
        <p>{description}</p>
        <div className={styles.links}>
          <a href={links.liveLink} className={styles.liveLink}>
            <span>Live</span>
            <SvgRepo type="Link" size={{ width: "2rem", height: "2rem" }} />
          </a>
          <a
            href={links.repoLink}
            className={`${styles.repoLink} ${
              links.repoLink.trim().length < 1 ? styles.notAvailable : null
            }`}
            onClick={interceptor}
          >
            <span>Repo</span>
            <SvgRepo type="Github" size={{ width: "2rem", height: "2rem" }} />
          </a>
        </div>
      </section>
    </section>
  );
};

export default ProjectTemplate;
