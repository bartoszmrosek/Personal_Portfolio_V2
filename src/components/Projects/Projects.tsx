import { useCallback, useEffect, useRef, useState } from "react";
import { useMobile } from "../../hooks/useMobile";

import messengerSrc from "./images/messenger-screenshot.png";
import hexagonalSrc from "./images/hexagonal-screenshot.png";
import dashboardSrc from "./images/dashboard-screenshot.png";

import messengerDesktopSrc from "./images/messenger-desktop-screenshot.png";
import hexagonalDesktopSrc from "./images/hexagonal-desktop-screenshot.png";
import dashboardDesktopSrc from "./images/dashboard-desktop-screenshot.png";

import type { Project } from "./project";
import ProjectMobileTemplate from "./ProjectMobileTemplate/ProjectMobileTemplate";

const Projects: React.FC = () => {
  const [isMobile] = useMobile(767);
  const imageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ] as const;
  const ownRef = useRef(true);
  const initalProjects: Project[] = [
    {
      title: "Messenger app",
      links: {
        liveLink: "https://emotekpl-messenger-dev.netlify.app/",
        repoLink: "https://github.com/bartoszmrosek/messenger_app",
      },
      imageInformations: {
        id: 1,
        isActive: false,
        mobileSrc: messengerSrc,
        dekstopSrc: messengerDesktopSrc,
      },
    },
    {
      title: "Hexagonal 2048",
      links: {
        liveLink: "https://bmrosek-hex2048.netlify.app/",
        repoLink: "",
      },
      imageInformations: {
        id: 2,
        isActive: false,
        mobileSrc: hexagonalSrc,
        dekstopSrc: hexagonalDesktopSrc,
      },
    },
    {
      title: "E-commerce dashboard",
      links: {
        liveLink: "https://bmrosek-commerce.netlify.app/dashboard",
        repoLink: "https://github.com/bartoszmrosek/E_commerce_webpage",
      },
      imageInformations: {
        id: 3,
        isActive: false,
        mobileSrc: dashboardSrc,
        dekstopSrc: dashboardDesktopSrc,
      },
    },
  ];
  const [projects, setProjects] = useState<Project[]>(initalProjects);

  const chgImgView = useCallback((id: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.imageInformations.id === id
          ? {
              ...project,
              imageInformations: {
                ...project.imageInformations,
                isActive: true,
              },
            }
          : {
              ...project,
              imageInformations: {
                ...project.imageInformations,
                isActive: false,
              },
            }
      )
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const entryId =
              parseInt(entry.target.id.at(entry.target.id.length - 1)!) ?? 0;
            chgImgView(entryId);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );
    if (
      imageRefs.every((imageRef) => imageRef.current !== null) &&
      ownRef.current
    ) {
      // Checks for nulls so typescript shouldn`t have problem about it
      imageRefs.forEach((imgRef) => observer.observe(imgRef.current!));
      ownRef.current = false;
    }
  }, [imageRefs]);

  return (
    <>
      {isMobile ? (
        <>
          {projects.map((project, index) => (
            <ProjectMobileTemplate
              key={project.title}
              chgImgView={chgImgView}
              imageInformations={project.imageInformations}
              title={project.title}
              links={project.links}
              // Weird workaround for intersection observer
              ref={imageRefs[2 - index]}
            />
          ))}
        </>
      ) : (
        <>Placeholder</>
      )}
    </>
  );
};

export default Projects;
