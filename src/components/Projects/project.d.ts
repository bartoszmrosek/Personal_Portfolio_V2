export type Project = {
  imageInformations: {
    id: number;
    isActive: boolean;
    mobileSrc: string;
    dekstopSrc: string;
  };
  title: string;
  links: {
    liveLink: string;
    repoLink: string;
  };
};
