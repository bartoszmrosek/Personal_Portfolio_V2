import { useCallback, useEffect, useRef, useState } from "react";
import { useMobile } from "../../hooks/useMobile";

import jackBetDesktopSrc from "./images/blackjack/bet-desktop.png";
import jackDecisionDesktopSrc from "./images/blackjack/decision-desktop.png";
import jackHomepageDesktopSrc from "./images/blackjack/homepage-desktop.png";
import jackPreviewDesktopSrc from "./images/blackjack/preview-desktop.png";
import jackRoomsDesktopSrc from "./images/blackjack/rooms-desktop.png";
import jackBetMobileSrc from "./images/blackjack/bet-mobile.png";
import jackDecisionMobileSrc from "./images/blackjack/decision-mobile.png";
import jackHomePageMobileSrc from "./images/blackjack/homepage-mobile.png";
import jackPreviewMobileSrc from "./images/blackjack/preview-mobile.png";
import jackRoomsMobileSrc from "./images/blackjack/rooms-mobile.png";

import messMainDesktopSrc from "./images/messenger/main-desktop.png";
import messSearchDesktopSrc from "./images/messenger/search-desktop.png";
import messRegisterDesktopSrc from "./images/messenger/register-desktop.png";
import messChatMobileSrc from "./images/messenger/chat-mobile.png";
import messMainMobileSrc from "./images/messenger/main-mobile.png";
import messSearchMobileSrc from "./images/messenger/search-mobile.png";
import messRegisterMobileSrc from "./images/messenger/register-mobile.png";

import hexagonalStartMobileSrc from "./images/hexagonal/start-mobile.png";
import hexagonalGameMobileSrc from "./images/hexagonal/game-mobile.png";
import hexagonalStartDesktopSrc from "./images/hexagonal/start-desktop.png";
import hexagonalGameDesktopSrc from "./images/hexagonal/game-desktop.png";

import type { Project } from "./Project.interface";
import ProjectMobileTemplate from "./ProjectMobileTemplate/ProjectMobileTemplate";
import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";

const initalProjects: Project[] = [
  {
    title: "Online blackjack app",
    description: `I have developed a professional implementation of the popular card game 'blackjack'. The application allows multiple players to enjoy the game together. The front and backend are built with Typescript, using ReactJS with Vite bundler for the front-end and Node.js for the back-end. Communication is facilitated through REST API endpoints and the socket-io library. Thorough testing was conducted using POSTMAN for the backend and VITEST for front-end unit tests to ensure key features are robust.`,
    links: {
      liveLink: "https://bartoszmrosek.github.io/Blackjack-Game/",
      repoLinks: [
        "https://github.com/bartoszmrosek/Blackjack-Game",
        "https://github.com/bartoszmrosek/Blackjack-API",
      ],
    },
    imageInformations: {
      id: 0,
      isActive: false,
      mobileSrc: [
        jackBetMobileSrc,
        jackDecisionMobileSrc,
        jackPreviewMobileSrc,
        jackRoomsMobileSrc,
        jackHomePageMobileSrc,
      ],
      dekstopSrc: [
        jackBetDesktopSrc,
        jackDecisionDesktopSrc,
        jackPreviewDesktopSrc,
        jackRoomsDesktopSrc,
        jackHomepageDesktopSrc,
      ],
    },
  },
  {
    title: "Messenger app",
    description:
      "The project serves as a practical exercise in real-time communication and cloud database storage. Built entirely in Typescript, the frontend features a combination of ReactJs and Tailwindcss, while the backend utilizes NodeJs with ExpressJs. Communication is facilitated through both REST API and WebSocket connections, powered by Socket-io technology. Messages are stored in a MySQL database for optimal data management.",
    links: {
      liveLink: "https://emotekpl-messenger-dev.netlify.app/",
      repoLinks: ["https://github.com/bartoszmrosek/messenger_app"],
    },
    imageInformations: {
      id: 1,
      isActive: false,
      mobileSrc: [
        messChatMobileSrc,
        messMainMobileSrc,
        messSearchMobileSrc,
        messRegisterMobileSrc,
      ],
      dekstopSrc: [
        messMainDesktopSrc,
        messSearchDesktopSrc,
        messRegisterDesktopSrc,
      ],
    },
  },
  {
    title: "Hexagonal 2048",
    description:
      "This application is a unique implementation of the popular 2048 game using a hexagonal grid. Developed with React and Typescript, the codebase is nearly entirely covered with unit tests, achieving an impressive 90% coverage rate (with only the animation API remaining untested).",
    links: {
      liveLink: "https://bmrosek-hex2048.netlify.app/",
      repoLinks: [
        "https://gitfront.io/r/user-6612724/b2GvwXv3uNCv/Hexagonal-2048/",
      ],
    },
    imageInformations: {
      id: 2,
      isActive: false,
      mobileSrc: [hexagonalGameMobileSrc, hexagonalStartMobileSrc],
      dekstopSrc: [hexagonalGameDesktopSrc, hexagonalStartDesktopSrc],
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
