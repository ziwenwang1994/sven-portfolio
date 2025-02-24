"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { id, github, link, logo, name, description, techs } = project;
  return (
    <article
      className="p-5 bg-[#ededed] my-3 text-[#252525] rounded-md 
    hover:bg-white transition-all duration-500 ease-in-out"
    >
      {link ? (
        <Link
          className="h3 hover:font-bold hover:underline transition-all"
          href={link}
          target="_blank"
        >
          {name} {">"}
        </Link>
      ) : (
        <h3 className="h3 text-slate-400"> {name}</h3>
      )}
      <section className="flex items-center py-3 overflow-auto">
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
      <section>
        <span className="font-bold text-lime-900">Tech Stack: </span>
        <span className="text-lime-700">{techs?.join(" | ")}</span>
      </section>
      {github && (
        <section>
          <FaGithubSquare
            className="text-3xl hover:text-lime-900 transition-all duration-250 ease-in-out cursor-pointer hover:scale-125"
            onClick={() => window.open(github)}
          />
        </section>
      )}
    </article>
  );
};

export default ProjectCard;
