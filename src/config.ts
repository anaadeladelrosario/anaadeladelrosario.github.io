import { LanguageItem } from "./config";
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astrofy | Personal Portfolio Website Template";
export const SITE_DESCRIPTION =
  "Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

export const Config = {
  SiteName: "Ana d a r r c v",
  MyName: "Ana Adela del Rosario",
  MyGitHub: "https://github.com/anaadeladelrosario",
  MyLinkedIn: "https://www.linkedin.com/in/ana-d-72a63192",
};

export type EducationItem = {
  QualificationLevel: string;
  QualificationName: string;
  YearStart: number;
  YearEnd: number;
  InstituteName: string;
};
export const Education: Array<EducationItem> = [
  {
    QualificationLevel: "Bachelor of Science",
    QualificationName: "Computer and Systems Science",
    YearStart: 2016,
    YearEnd: 2019,
    InstituteName: "Stockholm University",
  },
  {
    QualificationLevel:
      "Bachelor of Science in Sociology & Master of Science in Sociology",
    QualificationName: "Computer and Systems Science",
    YearStart: 2003,
    YearEnd: 2009,
    InstituteName: "Universidad de la Habana",
  },
];

export type LanguageItem = {
  Name: string;
  Level: string;
};
export const Languages: Array<LanguageItem> = [
  { Name: "Spanish", Level: "Native" },
  { Name: "English", Level: "Fluent" },
  { Name: "Swedish", Level: "Fluent" },
];
