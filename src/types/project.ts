export type Project = {
  id: string;
  title: string;
  tagline?: string;
  logo?: string;
  overviewImage?: string;
  description: string;
  bullets?: string[];
  techStack: string[];
  year?: string;
  role?: string;
  links?: { label: string; url: string }[];
  gallery?: string[];
};
