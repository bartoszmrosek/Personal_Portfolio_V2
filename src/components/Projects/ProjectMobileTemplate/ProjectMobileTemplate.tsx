import { forwardRef, useCallback } from "react";
import styles from "./ProjectMobileTemplate.module.css";
import type { Project } from "../project";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="2rem"
            height="2rem"
            fill="currentColor"
          >
            <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 98 96"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
});

export default ProjectMobileTemplate;
