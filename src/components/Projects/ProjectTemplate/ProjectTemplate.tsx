import { useCallback, useState } from "react";
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
  const [carouselItem, setCarouselItem] = useState(0);

  const interceptor = useCallback((e: React.MouseEvent) => {
    if (links.repoLink.trim().length < 1) {
      e.preventDefault();
    }
  }, []);

  const changeCarouselFromIndicator = useCallback((newItem: number)=>{
    setCarouselItem(newItem);
  }, [])
  
  const moveCarouselRight = useCallback(()=>{
    setCarouselItem(itemNumber => itemNumber+1 < imageInformations.dekstopSrc.length ? itemNumber+1 : itemNumber)
  }, [])
  
  const moveCarouselLeft = useCallback(()=>{
    setCarouselItem(itemNumber => itemNumber-1 >= 0 ? itemNumber-1 : itemNumber)
  }, [])

  return (
    <section className={`${styles.wrapper} ${invert ? styles.invert : null}`}>
      <div className={styles.imgWrapper}>
        <div className={styles.imgContainer}>
          <div className={styles.controlsWrapper}>
            <button className={styles.controlBtn} onClick={moveCarouselLeft}>
              <img src="./controlArrow.svg" className={styles.controlArrow} />
            </button>
            <section className={styles.imageIndicators}>
              {imageInformations.dekstopSrc.map((_e, i)=><button key={i} className={`${styles.indicator} ${i === carouselItem ? styles.activeIndicator : null}`} onClick={()=>changeCarouselFromIndicator(i)} />)}
            </section>
            <button className={styles.controlBtn} onClick={moveCarouselRight}>
              <img src="./controlArrow.svg" className={`${styles.controlArrow} ${styles.rightControl}`} />
            </button>
          </div>
          <div className={styles.carousel} style={{transform: `translate(-${105*carouselItem}% ,0)`}}>
          {imageInformations.dekstopSrc.map((src)=>
            <img
            src={src}
            key={src}
            className={styles.image}
            alt={`${title} page screenshot`}
            />
            )}
          </div>
        </div>
      </div>
      <section className={styles.content}>
        <h1 className={`${styles.header} neonWhite`}>{title}</h1>
        <p>{description}</p>
        <div className={styles.links}>
          <a
            href={links.liveLink}
            className={styles.liveLink}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <span>Live</span>
            <SvgRepo type="Link" size={{ width: "2rem", height: "2rem" }} />
          </a>
          <a
            href={links.repoLink}
            className={`${styles.repoLink} ${
              links.repoLink.trim().length < 1 ? styles.notAvailable : null
            }`}
            onClick={interceptor}
            target="_blank"
            referrerPolicy="no-referrer"
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
