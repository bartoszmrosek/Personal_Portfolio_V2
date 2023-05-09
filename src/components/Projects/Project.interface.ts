export type Project = {
  imageInformations: {
    id: number;
    isActive: boolean;
    mobileSrc: string[];
    dekstopSrc: string[];
  };
  title: string;
  description: string;
  links: {
    liveLink: string;
    repoLinks: string[];
  };
};
