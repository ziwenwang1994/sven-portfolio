"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const { id, github, link, logo, name, description, techs } = project;
  return (
    <article
      className="p-5 bg-[#ededed] my-3 text-[#252525] rounded-md 
    hover:bg-white transition-all duration-500 ease-in-out"
    >
      <Link className="h3" href={link} target="_blank">
        {name}
      </Link>
      <section className="flex items-center py-3">
        {logo && (
          <Image
            width="200"
            height="200"
            fit
            alt={id}
            src={logo}
            className="w-[64px] h-[64px] mr-3"
          />
        )}
        <div className="flex-1">
          <p className="leading-tight text-[#444444]">{description}</p>
        </div>
      </section>
    </article>
  );
};

export default ProjectCard;
