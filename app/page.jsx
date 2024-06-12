import { FileDownIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 ">
              {"Hello I'm"}
              <br />
              <span className="text-accent">Ziwen Wang</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am dreaming to be an artist of Software Engineering, and I am
              preficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <span>Download CV</span> <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                   items-center text-accent text-base hover:bg-accent hover:text-primary
                    hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo /></div>
        </div>
      </div>
    </section>
  );
}
