import Image from "next/image";
import React from "react";

const SkillComponent = ({ size, src, alt, description }) => {
  return (
    <div className="hover:scale-105 transition-all ease-in-out duration-500 w-[100px] h-[100px]">
      <Image
        src={src || ""}
        priority
        quality={100}
        width={size?.[0] || 0}
        height={size?.[1] || 0}
        alt={alt || ""}
        className="mx-auto"
      />
      <p className="text-center">{description || ""}</p>
    </div>
  );
};

export default SkillComponent;
