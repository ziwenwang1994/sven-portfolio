import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];
const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>{
    socials.map(item => <Link key={item.path} href={item.path} className={iconStyles}>{item.icon}</Link>)
  }</div>;
};

export default Socials;
