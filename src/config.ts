// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "CV Portfolio Website Ana";
export const SITE_DESCRIPTION =
  "Personal Portfolio Website built with Astro and TailwindCSS.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

export const Config = {
  SiteName: "Ana d a r r c v",
  MyName: "Ana",
  MyGitHub: "https://github.com/anaadeladelrosario",
  MyLinkedIn: "https://www.linkedin.com/in/ana-d-72a63192",
};

type EducationItem = {
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
    QualificationLevel: "Bachelor of Science",
    QualificationName: "Sociology",
    YearStart: 2003,
    YearEnd: 2006,
    InstituteName: "Universidad de la Habana",
  },
  {
    QualificationLevel: "Master of Science",
    QualificationName: "Sociology",
    YearStart: 2008,
    YearEnd: 2009,
    InstituteName: "Universidad de la Habana",
  },
];

type LanguageItem = {
  Id: string;
  Name: string;
  Level: string;
  Example: string;
};
export const Languages: Array<LanguageItem> = [
  { Name: "Spanish", Level: "Native", Example: "Hola!", Id: "es" },
  { Name: "English", Level: "Fluent", Example: "Hi!", Id: "gb" },
  { Name: "Swedish", Level: "Fluent", Example: "Hej!", Id: "sv" },
];

type ExperienceItem = {
  Role: string;
  Description: string;
  Company: string;
  StartYear: number;
  EndYear?: number | null;
  City: string;
  Country: string;
};

export const Experiences: Array<ExperienceItem> = [
  {
    Role: "Software Engineer",
    StartYear: 2021,
    EndYear: 2024,
    Company: "Ericsson AB",
    City: "Stockholm",
    Country: "Sweden",
    Description: `As a Software Engineer, I initially worked on Poc, where I learned React, JavaScript, TypeScript, and Storybook. I gained hands-on experience in internal API integration using Node.js and improved my skills in version control with Git/GitHub. By writing APIs and using Postman, I developed an understanding of backend communication and testing.\n
    I then contributed to a WebRTC-based project, developing a Teams app for screen sharing and pair programming. I worked on the frontend using React and gained valuable experience in project management by guiding interns, organizing tasks, and collaborating with cross-functional teams. Through this experience, I learned to manage deadlines, make presentations, and address team challenges, while also deepening my understanding of WebRTC and frontend development. In parallel, I worked on building reusable components for Ericsson’s internal design system, collaborating with cross-functional teams to iterate on design improvements and enhance the user experience. This project helped me strengthen my React skills, and I gained hands-on experience with agile workflows, code reviews, and fast feedback loops—knowledge I applied while working on the WebRTC project.\n\n
    Lately, I joined a larger, remote team. During this time, I put more focus on understanding React frontend architecture such as structuring components, managing states, optimizing performance, implementing routing, and writing Unit and Integration tests using Jest framework for running the tests and React Testing Library for testing user interactions. I introduced Mock Service Worker (MSW) for mocking API calls, and contributed to improving code security by integrating SAST and DAST tools. I actively worked on enhancing team workflows by creating flowcharts and driving the adoption of more efficient processes. Additionally, I collaborated with the UX team to refine the user interface, resulting in a more intuitive and user-friendly product. Throughout all these projects, I continually learned new technologies, refined my problem-solving skills, and contributed to creating more efficient and secure processes, all while fostering a culture of collaboration and continuous improvement. On the side, participated in multiple Ericsson Hackathons, winning 1st place twice for best idea, scalability, and implementation readiness. Gained experience working with OpenAI APIs and integrating them with Azure DevOps. Participated in Ericsson’s culture of continuous learning, dedicating time each week to explore new technologies. 
`,
  },
  {
    Role: "IT Trainee/ICT DevOps Engineer",
    StartYear: 2020,
    EndYear: 2021,
    Company: "Ericsson AB",
    City: "Stockholm",
    Country: "Sweden",
    Description: `During my first year as an IT trainee at Ericsson AB, I gained experience in various roles, starting with the Portfolio team. I was introduced to tools like JIRA and Confluence, where I helped create documentation for existing applications and improved my skills in utilizing Microsoft 365 platforms. I was involved in using PowerApps to streamline processes between business teams and order placements, enhancing order efficiency and customer satisfaction.\n
      Additionally, I honed my presentation skills by preparing business cases and engaging a wide audience, learning to create compelling, effective PowerPoint presentations using Ericsson’s templates.\n
      I also completed the Engine Yellow Belt Certification, which equipped me with Lean, Agile, and Six Sigma methodologies. I became adept in using the DMAIC framework to drive process improvements, manage change initiatives, and apply data-driven solutions. \n
      My second rotation was in the Automation and AI division, where I contributed to the 5G Smart Factory team. I worked on building systems with Azure Cloud services, learning about automation, Industrial IoT, and agile development practices. I also expanded my technical expertise by automating tasks using Excel VBA, creating reports, and learning Power BI to analyze and visualize data.\n
      In the cloud team, I played a key role in developing a dashboard for the procurement team, where I contributed ideas, worked with stakeholders to define design, and collaborated with a Tableau expert to build a functional prototype. This dashboard became a useful tool for the team, and I learned how to translate business needs into impactful visual solutions. Throughout my time at Ericsson, \n
      I also focused on building a strong professional network and worked cross-functionally with colleagues from diverse backgrounds, refining my communication and teamwork skills.
      `,
  },
];

type CertificationItem = {
  Name: string;
  ProvidedBy?: string;
  Year: number;
};

export const Certifications: Array<CertificationItem> = [
  { Name: "IT Trainee program", ProvidedBy: "Ericsson AB", Year: 2021 },
  { Name: "Azure Fundamentals", ProvidedBy: "Microsoft", Year: 2021 },
  { Name: "Lean Six Sigma Yellow Belt", ProvidedBy: "Ericsson AB", Year: 2021 },
];

type SkillItem = {
  Item: string;
};

export const Skills: Array<SkillItem> = [
  { Item: "JavaScript" },
  { Item: "TypeScript" },
  { Item: "CSS" },
  { Item: "HTML" },
  { Item: "React Testing Library" },
  { Item: "React Library" },
  { Item: "Node.js" },
  { Item: "Java" },
  { Item: "SQL" },
  { Item: ".Net Core" },
  { Item: "NoSQL" },
  { Item: "C#" },
  { Item: "SOAP" },
  { Item: "Network Security" },
  { Item: "Digital Forensics" },
  { Item: "TCP/IP" },
  { Item: "Windows OS" },
  { Item: "Linux OS (basics)" },
  { Item: "AzureDevOps" },
];

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
