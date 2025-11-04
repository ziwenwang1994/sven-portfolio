import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function downloadCV() {
  const fileUrl =
    "https://files.catbox.moe/3tluyy.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank";
  link.download = "CV_Ziwen_Wang.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}