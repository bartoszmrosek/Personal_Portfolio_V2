import { useCallback, useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import messengerSrc from "./images/messenger-screenshot.png";
import hexagonalSrc from "./images/hexagonal-screenshot.png";
import dashboardSrc from "./images/dashboard-screenshot.png";
import type { Project } from "./project";
import ProjectMobileTemplate from "./ProjectMobileTemplate/ProjectMobileTemplate";

const Projects: React.FC = () => {
  const [isMobile] = useMobile(767);
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
        src: messengerSrc,
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
        src: hexagonalSrc,
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
        src: dashboardSrc,
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
                isActive: !project.imageInformations.isActive,
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

  return (
    <>
      {isMobile ? (
        <>
          {projects.map((project) => (
            <ProjectMobileTemplate
              key={project.title}
              chgImgView={chgImgView}
              imageInformations={project.imageInformations}
              title={project.title}
              links={project.links}
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
