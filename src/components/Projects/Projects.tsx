import { useCallback, useEffect, useRef, useState } from "react";
import { useMobile } from "../../hooks/useMobile";

import messengerSrc from "./images/messenger/messenger-screenshot.png";
import hexagonalSrc from "./images/hexagonal/hexagonal-screenshot.png";

import messengerDesktopSrc from "./images/messenger/messenger-desktop-screenshot.png";
import hexagonalDesktopSrc from "./images/hexagonal/hexagonal-desktop-screenshot.png";

import type { Project } from "./project";
import ProjectMobileTemplate from "./ProjectMobileTemplate/ProjectMobileTemplate";
import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";

const initalProjects: Project[] = [
  {
    title: "Messenger app",
    description:
      "The project serves as a practical exercise in real-time communication and cloud database storage. Built entirely in Typescript, the frontend features a combination of ReactJs and Tailwindcss, while the backend utilizes NodeJs with ExpressJs. Communication is facilitated through both REST API and WebSocket connections, powered by Socket-io technology. Messages are stored in a MySQL database for optimal data management.",
    links: {
      liveLink: "https://emotekpl-messenger-dev.netlify.app/",
      repoLink: "https://github.com/bartoszmrosek/messenger_app",
    },
    imageInformations: {
      id: 1,
      isActive: false,
      mobileSrc: [messengerSrc],
      dekstopSrc: [messengerDesktopSrc, hexagonalDesktopSrc, messengerDesktopSrc, hexagonalDesktopSrc],
    },
  },
  {
    title: "Hexagonal 2048",
    description:
      "This application is a unique implementation of the popular 2048 game using a hexagonal grid. Developed with React and Typescript, the codebase is nearly entirely covered with unit tests, achieving an impressive 90% coverage rate (with only the animation API remaining untested).",
    links: {
      liveLink: "https://bmrosek-hex2048.netlify.app/",
      repoLink:
        "https://gitfront.io/r/user-6612724/b2GvwXv3uNCv/Hexagonal-2048/",
    },
    imageInformations: {
      id: 2,
      isActive: false,
      mobileSrc: [hexagonalSrc],
      dekstopSrc: [hexagonalDesktopSrc],
    },
  },
];

const Projects: React.FC = () => {
  const [isMobile] = useMobile(940);
  const imageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ] as const;
  const ownRef = useRef(true);
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
    if (isMobile) {
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
        { rootMargin: "0px", threshold: [0.33, 0.66] }
      );
      if (
        imageRefs.every((imageRef) => imageRef.current !== null) &&
        ownRef.current
      ) {
        // Checks for nulls so typescript shouldn`t have problem about it
        imageRefs.forEach((imgRef) => observer.observe(imgRef.current!));
        ownRef.current = false;
      }
    }
    return () => {
      ownRef.current = true;
    };
  }, [imageRefs]);
  return (
    <>
      {isMobile ? (
        <>
          {projects.map((project, index) => (
            <ProjectMobileTemplate
              key={project.title}
              chgImgView={chgImgView}
              description={project.description}
              imageInformations={project.imageInformations}
              title={project.title}
              links={project.links}
              // Weird workaround for intersection observer
              ref={imageRefs[2 - index]}
            />
          ))}
        </>
      ) : (
        <>
          {projects.map((project, index) => (
            <ProjectTemplate
              description={project.description}
              key={project.title}
              imageInformations={project.imageInformations}
              title={project.title}
              links={project.links}
              invert={index % 2 === 1}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Projects;
