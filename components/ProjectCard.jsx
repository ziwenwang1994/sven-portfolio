import React from "react";

const ProjectCard = ({ project }) => {
  const { id, github, link, logo, name, description, techs } = project;
  return <div>{name}</div>;
};

export default ProjectCard;
