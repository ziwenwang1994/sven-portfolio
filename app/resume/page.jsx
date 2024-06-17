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
          <section className="flex items-center mt-6">
            <Image
              width={100}
              height={100}
              src="/assets/opera.png"
              quality={100}
              className="w-[44px] h-[44px]"
              alt=""
            />
            <div className="ml-4">
              <Link
                className="text-xl font-semibold"
                href="https://www.opera.com"
                target="_blank"
              >
                Opera Software AS | China
              </Link>
              <p className="italic text-white/80">
                Software Engineer | 07/2021 - 02/2024
              </p>
            </div>
          </section>
          <section className="flex items-center mt-6">
            <Image
              width={100}
              height={100}
              src="/assets/jisuanke.svg"
              quality={100}
              className="w-[44px] h-[44px]"
              alt=""
            />
            <div className="ml-4">
              <Link
                className="text-xl font-semibold"
                href="https://www.jisuanke.com"
                target="_blank"
              >
                Jisuanke | China
              </Link>
              <p className="italic text-white/80">
                Software Engineer Intern | 02/2021 - 06/2021
              </p>
            </div>
          </section>
          <section className="flex items-center mt-6">
            <Image
              width={100}
              height={100}
              src="/assets/sichuang.jpg"
              quality={100}
              className="w-[44px] h-[44px]"
              alt=""
            />
            <div className="ml-4">
              <Link className="text-xl font-semibold" href="">
                Sichuang Software | China
              </Link>
              <p className="italic text-white/80">
                Software Engineer Intern | 04/2020 - 10/2020
              </p>
            </div>
          </section>
        </article>

        <article className="mt-12 py-4">
          <h3 className="h3 text-accent">Education</h3>
          <section className="flex items-center mt-6">
            <Image
              width={100}
              height={100}
              src="/assets/uq.png"
              quality={100}
              className="w-[44px] h-[44px]"
              alt=""
            />
            <div className="ml-4">
              <Link className="text-xl font-semibold" href="https://uq.edu.au" target="_blank">
                The University of Queensland
              </Link>
              <p className="italic text-white/80">
                Master of IT | 07/2019 - 07/2021
              </p>
            </div>
          </section>
          <section className="flex items-center mt-6">
            <Image
              width={100}
              height={100}
              src="/assets/cqu.png"
              quality={100}
              className="w-[44px] h-[44px]"
              alt=""
            />
            <div className="ml-4">
              <Link className="text-xl font-semibold" href="https://cqu.edu.cn" target="_blank">
                Chongqing University
              </Link>
              <p className="italic text-white/80">
                Bachelor of Engineering | 09/2013 - 06/2017
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Resume;
