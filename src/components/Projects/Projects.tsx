import { useCallback, useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import styles from "./Projects.module.css";
import messengerSrc from "./messenger-screenshot.png";
import hexagonSrc from "./hexagonal-screenshot.png";
import dashboardSrc from "./dashboard-screenshot.png";

interface ProjectImgProps {
  id: number;
  isActive: boolean;
  handleImgClick: (id: number) => void;
  src: string;
}
const ProjectImg: React.FC<ProjectImgProps> = ({
  id,
  isActive,
  handleImgClick,
  src,
}) => {
  const handleClick = useCallback(() => {
    handleImgClick(id);
  }, [handleImgClick]);
  return (
    <img
      src={src}
      className={`${styles.preview} ${isActive ? styles.active : null}`}
      onClick={handleClick}
    />
  );
};

const Projects: React.FC = () => {
  const [isMobile] = useMobile(767);
  const initialImages = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ];
  const [images, setImages] =
    useState<{ id: number; isActive: boolean }[]>(initialImages);

  const handleImgClick = useCallback((id: number) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id
          ? { ...image, isActive: !image.isActive }
          : { ...image, isActive: false }
      )
    );
  }, []);

  return (
    <>
      <section className={styles.project}>
        <h1>Messenger App</h1>
        <ProjectImg
          isActive={images[0].isActive}
          id={images[0].id}
          handleImgClick={handleImgClick}
          src={messengerSrc}
        />
      </section>
      <section className={styles.project}>
        <h1>Hexagonal 2048</h1>
        <ProjectImg
          isActive={images[1].isActive}
          id={images[1].id}
          handleImgClick={handleImgClick}
          src={hexagonSrc}
        />
      </section>
      <section className={styles.project}>
        <h1>E-commerce dasboard</h1>
        <ProjectImg
          isActive={images[2].isActive}
          id={images[2].id}
          handleImgClick={handleImgClick}
          src={dashboardSrc}
        />
      </section>
    </>
  );
};

export default Projects;
