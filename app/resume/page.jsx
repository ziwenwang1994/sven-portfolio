import { educationExperience, WorkExperience } from "@/lib/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Resume = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <article className="py-4">
          <h3 className="h3 text-accent">About Ziwen</h3>
          <p className="mt-6 text-sm lg:text-base text-justify text-white/80">
            {
              "Hi visitors, this is Ziwen, and you can call me Sven as it is easier to pronounce. I am a passionate software engineer with a strong background in both front-end and back-end development. With a Master's degree in Information Technology from the University of Queensland and professional experience at Opera Software, I have honed my skills in creating and maintaining complex web applications. I thrive on solving challenging problems and continuously learning new technologies to deliver high-quality, user-centric solutions. Welcome to my portfolio, where you can explore my projects and see the impact of my work."
            }
          </p>
        </article>

        <article className="mt-12 py-4">
          <h3 className="h3 text-accent">Work Experience</h3>
          {WorkExperience.map((job) => (
            <section className="flex items-center mt-6 hover:bg-white/5 transition-all ease-in-out duration-300" key={job.company}>
              <Image
                width={100}
                height={100}
                src={job.logo}
                quality={100}
                className="w-[44px] h-[44px]"
                alt={`${job.company} logo`}
              />
              <div className="ml-4">
                <Link
                  className="text-xl font-semibold"
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.company}
                </Link>
                <p className="italic text-white/80">
                  {job.role} | {job.duration}
                </p>
              </div>
            </section>
          ))}
        </article>

        <article className="mt-12 py-4">
          <h3 className="h3 text-accent">Education</h3>
          {educationExperience.map((edu) => (
            <section className="flex items-center mt-6 hover:bg-white/5 transition-all ease-in-out duration-300" key={edu.institution}>
              <Image
                width={100}
                height={100}
                src={edu.logo}
                quality={100}
                className="w-[44px] h-[44px]"
                alt={`${edu.institution} logo`}
              />
              <div className="ml-4">
                <Link
                  className="text-xl font-semibold"
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edu.institution}
                </Link>
                <p className="italic text-white/80">
                  {edu.degree} | {edu.duration}
                </p>
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Resume;
