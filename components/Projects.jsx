"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projects = [
    {
      id: "portfolio",
      github: "",
      link: "",
      logo: "",
      name: "Sven Portfolio",
      description: `
          This is a portfolio project inspired by youtube video https://www.youtube.com/watch?v=dImgZ_AH7uA&t=4117s.
          Customized by me to suit my needs. Implemented my resume, and developed a pixel painting board for fun.
          `,
      techs: [
        "React.js",
        "Next.js",
        "Vite",
        "Radix UI",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      id: "football-h5",
      github: "",
      link: "https://www.apex-football.com",
      logo: "",
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
    },
    {
      id: "football-app",
      github: "",
      link: "https://play.google.com/store/apps/details?id=com.opera.app.sports",
      logo: "",
      name: "Apex-Football App",
      description: `
        A popular football content app by Opera Software AS, with a 4.3 rating and over 5M downloads. I developed the webview of match detail, team detail, and tournament detail pages using Nuxt.js SSR, interacting with the native app via JS API for features like dark mode and subscription.
        `,
      techs: ["Vue", "Nuxt.js", "Webpack", "SASS", "Express.js", "WebSocket"],
    },
    {
      id: "shakewin",
      github: "",
      link: "https://www.youtube.com/watch?v=sqUiKWuVpBo",
      logo: "",
      name: "Shake & Win",
      description: `
        A popular campaign running in Africa and Brazil. Developed the front-end using React, Redux, TypeScript, and SCSS. Implemented OAuth2 authorization process, which later transitioned to Firebase Google login.
        `,
      techs: ["ReactJS", "TypeScript", "Webpack", "SASS", "Express.js"],
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
    },
    {
      id: "Jisuanke",
      github: "",
      link: "https://www.jisuanke.com/",
      logo: "",
      name: "Jisuanke",
      description: `
        Online Computer Science Courses for Teenagers. Developed RESTful APIs for the Competition enrollment system using Vue2, Laravel, and MariaDB. Developed Internal UI component library using Vue2.
        `,
      techs: ["Vue", "TypeScript", "Express.js", "Laravel PHP", "MariaDB"],
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
    },
  ];
  

const Projects = () => {
  return (
    <main>
      <Tabs className="flex">
        <TabsList
          defaultValue="portfolio"
          aria-label="Projects"
          className="w-[200px] block bg-accent"
        >
          {projects.map((project) => (
            <TabsTrigger
              key={`tab-${project.id}`}
              value={project.id}
              className="w-full"
            >
              {project.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <section className="ml-4 flex-1 bg-amber-800/50">
          {projects.map(project => <TabsContent key={`content-${project.id}`} value={project.id} >
          <ProjectCard project={project} />
        </TabsContent>)}
        </section>
       
        
      </Tabs>
    </main>
  );
};

export default Projects;
