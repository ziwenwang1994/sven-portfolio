export const desktopLinks = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "playground", path: "/playground" },
];

export const mobileLinks = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
];

export const WorkExperience = [
  {
    company: "Opera Software AS | China",
    role: "Software Engineer",
    duration: "07/2021 - 02/2024",
    logo: "/assets/opera.png",
    link: "https://www.opera.com",
  },
  {
    company: "Jisuanke | China",
    role: "Software Engineer Intern",
    duration: "02/2021 - 06/2021",
    logo: "/assets/jisuanke.svg",
    link: "https://www.jisuanke.com",
  },
  {
    company: "Sichuang Software | China",
    role: "Software Engineer Intern",
    duration: "04/2020 - 10/2020",
    logo: "/assets/sichuang.jpg",
    link: "",
  },
];

export const educationExperience = [
  {
    institution: "The University of Queensland",
    degree: "Master of IT",
    duration: "2019 - 2021",
    logo: "/assets/uq.png",
    link: "https://uq.edu.au",
  },
  {
    institution: "Chongqing University",
    degree: "Bachelor of Engineering",
    duration: "2013 - 2017",
    logo: "/assets/cqu.png",
    link: "https://cqu.edu.cn",
  },
];

export const projects = [
  {
    id: "portfolio",
    github: "https://github.com/ziwenwang1994/sven-portfolio",
    link: "/",
    logo: "/assets/logo.png",
    name: "Sven Portfolio",
    description: `
          This is a portfolio project inspired by youtube video. Customized by me to suit my needs. Implemented my resume, and developed a pixel painting board for fun.
          `,
    techs: [
      "React.js",
      "Next.js",
      "Vite",
      "Radix UI",
      "TailwindCSS",
      "Framer Motion",
    ],
    preview: "",
    tab: "Personal",
  },
  {
    id: "football-h5",
    github: "",
    link: "https://www.apex-football.com",
    logo: "/assets/football-h5-logo.png",
    name: "Apex-Football H5",
    description: `
        Africa's most popular football website developed by Opera Software AS. I worked mostly on the Front-End using Vue and SCSS, and also handled SEO optimization and performance improvements. The site achieved peak DAU over 3M.
        `,
    techs: [
      "Vue",
      "Nuxt.js",
      "Webpack",
      "SASS",
      "Express.js",
      "WebSocket",
      "SEO",
    ],
    preview: "",
    tab: "Opera Software AS",
  },
  {
    id: "football-app",
    github: "",
    link: "https://www.opera.com/products/apex-football",
    logo: "/assets/football-app-logo.webp",
    name: "Apex-Football App",
    description: `
        A popular football content app by Opera Software AS, with a 4.3 rating and over 5M downloads. I developed the webview of match detail, team detail, and tournament detail pages using Nuxt.js SSR, interacting with the native app via JS API for features like dark mode and subscription.
        `,
    techs: ["Vue", "Nuxt.js", "Webpack", "SASS", "Express.js", "WebSocket"],
    preview: "",
    tab: "Opera Software AS",
  },
  {
    id: "shakewin",
    github: "",
    link: "https://www.youtube.com/watch?v=sqUiKWuVpBo",
    logo: "/assets/shake_win.png",
    name: "Shake & Win",
    description: `
        A popular campaign running on Opera Mobile Browser webviews in Africa and Brazil. Developed the front-end using React, Redux, TypeScript, and SCSS. Implemented OAuth2 authorization process, which later transitioned to Firebase Google login.
        `,
    techs: ["ReactJS", "TypeScript", "Webpack", "SASS", "Express.js"],
    preview: "/assets/SW-Blogpost.png",
    tab: "Opera Software AS",
  },
  {
    id: "football-cms",
    github: "",
    link: "",
    logo: "",
    name: "CMS for Apex-Football",
    description: `
        Internal CMS developed for managing the Apex-Football website. Developed RESTful APIs using Node.js (Express) and MongoDB, and front-end functions using Vue, SCSS, and ElementUI.
        `,
    techs: ["Vue", "Webpack", "SASS", "Express.js", "MongoDB"],
    preview: "",
    tab: "Opera Software AS",
  },
  {
    id: "Jisuanke",
    github: "",
    link: "https://www.jisuanke.com/",
    logo: "/assets/jisuanke.png",
    name: "Jisuanke",
    description: `
        Online Computer Science Courses for Teenagers. Developed RESTful APIs for the Competition enrollment system using Vue2, Laravel, and MariaDB. Developed Internal UI component library using Vue2.
        `,
    techs: ["Vue", "TypeScript", "Express.js", "Laravel PHP", "MariaDB"],
    preview: "",
    tab: "Jisuanke Edu",
  },
  {
    id: "suantai",
    github: "",
    link: "",
    logo: "",
    name: "Suantai - Jisuanke CRM",
    description: `
        Internal teaching system at Jisuanke. Developed web pages for Stock Management, Payment Management, and Staff Management sections using Vue3, TypeScript, Express, MariaDB, and ElementUI.
        `,
    techs: [
      "Vue",
      "TypeScript",
      "ElementUI",
      "Express.js",
      "Laravel PHP",
      "MariaDB",
    ],
    preview: "",
    tab: "Jisuanke Edu",
  },
];