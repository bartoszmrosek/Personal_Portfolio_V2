export type Project = {
  imageInformations: {
    id: number;
    isActive: boolean;
    src: string;
  };
  title: string;
  links: {
    liveLink: string;
    repoLink: string;
  };
};
