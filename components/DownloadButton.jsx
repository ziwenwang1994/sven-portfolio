"use client"

import React from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import { downloadCV } from "@/lib/utils";

const DownloadButton = () => {

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2"
      onClick={downloadCV}
    >
      <span>Download CV</span> <FiDownload />
    </Button>
  );
};

export default DownloadButton;
