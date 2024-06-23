import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/ziwenwang1994" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ziwen-wang-62742a12a/" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link key={item.path} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
