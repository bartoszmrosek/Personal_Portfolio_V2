import { forwardRef, useCallback } from "react";
import styles from "./ProjectMobileTemplate.module.css";
import type { Project } from "../project";
import SvgRepo from "../../Graphics/SvgRepo";

interface ProjectImgProps {
  id: number;
  isActive: boolean;
  chgImgView: (id: number) => void;
  src: string;
}
const ProjectImg: React.FC<ProjectImgProps> = ({
  id,
  isActive,
  chgImgView: chgImgView,
  src,
}) => {
  const handleClick = useCallback(() => {
    chgImgView(id);
  }, [chgImgView]);
  return (
    <img
      src={src}
      className={`${styles.preview} ${isActive ? styles.active : null}`}
      onClick={handleClick}
    />
  );
};

const ProjectMobileTemplate = forwardRef<
  HTMLDivElement,
  Project & { chgImgView: (id: number) => void }
>(function ProjectMobileTemplate(
  { imageInformations, title, links, chgImgView: chgImgView },
  ref
) {
  return (
    <section className={styles.project}>
      <h1 className={`${styles.projectHeader} neonWhite`}>{title}</h1>
      <div
        className={styles.imageWrapper}
        ref={ref}
        id={`Image#${imageInformations.id}`}
      >
        <ProjectImg
          isActive={imageInformations.isActive}
          id={imageInformations.id}
          chgImgView={chgImgView}
          src={imageInformations.mobileSrc}
        />
      </div>
      <div className={styles.links}>
        <a
          href={links.liveLink}
          className={`${styles.liveLink} ${styles.link}`}
        >
          <span>Live</span>
          <SvgRepo type="Link" size={{ width: "2rem", height: "2rem" }} />
        </a>
        <a
          href={links.repoLink}
          className={`${styles.repoLink} ${styles.link} ${
            links.repoLink.trim().length < 1 ? styles.notAvailable : null
          }`}
        >
          <span>
            {links.repoLink.trim().length > 0 ? "Repo" : "Not available"}
          </span>
          <SvgRepo type="Github" size={{ width: "2rem", height: "2rem" }} />
        </a>
      </div>
    </section>
  );
});

export default ProjectMobileTemplate;
