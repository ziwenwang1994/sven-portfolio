"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/const";

const Projects = () => {
  const [currentTab, setCurrentTab] = useState("Personal");
  const tabList = projects
    .map((project) => project.tab)
    ?.reduce((acc, curr) => {
      if (acc?.includes(curr)) return acc;
      acc.push(curr);
      return acc;
    }, [])
    .sort((a, b) => {
      if (a === "Personal") return -1;
      if (b === "Personal") return 1;
      return 0;
    });
  return (
    <main>
      <Tabs className="flex-wrap lg:flex hidden" defaultValue={tabList[0]}>
        <TabsList
          aria-label="Projects"
          className="lg:w-[200px] flex bg-accent lg:block"
        >
          {tabList.map((tab) => (
            <TabsTrigger
              key={`tabs-${tab}`}
              value={tab}
              className="w-full text-zinc-900 font-semibold"
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 p-2 px-6 h-[800px] overflow-auto bg-black">
          {tabList.map((tab) => (
            <motion.div
              initial={{ opacity: 0 }}
              key={`content-${tab}`}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.1, ease: "easeIn" },
              }}
            >
              <TabsContent value={tab}>
                {projects
                  .filter((project) => project.tab === currentTab)
                  ?.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
              </TabsContent>
            </motion.div>
          ))}
        </div>
      </Tabs>
      <div className="block lg:hidden"> {projects
                  .map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}</div>
    </main>
  );
};

export default Projects;
