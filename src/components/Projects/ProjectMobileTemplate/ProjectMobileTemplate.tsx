import { forwardRef, useCallback, useState } from "react";
import styles from "./ProjectMobileTemplate.module.css";
import type { Project } from "../Project.interface";
import SvgRepo from "../../Graphics/SvgRepo";

const ProjectMobileTemplate = forwardRef<
  HTMLDivElement,
  Project & { chgImgView: (id: number) => void }
>(function ProjectMobileTemplate(
  { imageInformations, title, links, chgImgView: chgImgView },
  ref
) {
  const [carouselItem, setCarouselItem] = useState(0);

  const changeCarouselFromIndicator = useCallback((newItem: number) => {
    setCarouselItem(newItem);
  }, []);

  const moveCarouselRight = useCallback(() => {
    setCarouselItem((itemNumber) =>
      itemNumber + 1 < imageInformations.mobileSrc.length
        ? itemNumber + 1
        : itemNumber
    );
  }, []);

  const moveCarouselLeft = useCallback(() => {
    setCarouselItem((itemNumber) =>
      itemNumber - 1 >= 0 ? itemNumber - 1 : itemNumber
    );
  }, []);
  return (
    <section className={styles.project}>
      <h1 className={`${styles.projectHeader} neonWhite`}>{title}</h1>
      <div
        className={styles.imageContainer}
        ref={ref}
        id={`Image#${imageInformations.id}`}
      >
        <div
          className={styles.carousel}
          style={{ transform: `translate(-${100 * carouselItem}% ,0)` }}
        >
          {imageInformations.mobileSrc.map((src) => (
            <div className={styles.imgWrapper} key={src}>
              <img
                src={src}
                className={`${styles.preview} ${
                  imageInformations.isActive ? styles.active : null
                }`}
                alt={`${title} mobile screenshot`}
              />
            </div>
          ))}
        </div>
        <div
          className={styles.controlsWrapper}
          onClick={() => chgImgView(imageInformations.id)}
        >
          <button className={styles.controlBtn} onClick={moveCarouselLeft}>
            <img src="./controlArrow.svg" className={styles.controlArrow} />
          </button>
          <section
            className={`${styles.imageIndicators} ${
              imageInformations.isActive && styles.activeIndicators
            }`}
          >
            {imageInformations.mobileSrc.map((_e, i) => (
              <button
                key={i}
                className={`${styles.indicator} ${
                  i === carouselItem ? styles.activeIndicator : null
                }`}
                onClick={() => changeCarouselFromIndicator(i)}
              />
            ))}
          </section>
          <button className={styles.controlBtn} onClick={moveCarouselRight}>
            <img
              src="./controlArrow.svg"
              className={`${styles.controlArrow} ${styles.rightControl}`}
            />
          </button>
        </div>
      </div>
      <div className={styles.links}>
        <a
          href={links.liveLink}
          className={`${styles.liveLink} ${styles.link}`}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <span>Live</span>
          <SvgRepo type="Link" size={{ width: "2rem", height: "2rem" }} />
        </a>
        {links.repoLinks.map((link) => (
          <a
            key={link}
            href={link}
            className={`${styles.repoLink} ${styles.link} ${
              link.trim().length < 1 ? styles.notAvailable : null
            }`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <span>{link.trim().length > 0 ? "Repo" : "Not available"}</span>
            <SvgRepo type="Github" size={{ width: "2rem", height: "2rem" }} />
          </a>
        ))}
      </div>
    </section>
  );
});

export default ProjectMobileTemplate;
