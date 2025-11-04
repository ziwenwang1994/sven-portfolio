import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import SkillComponent from "@/components/SkillComponent";
import DownloadButton from "@/components/DownloadButton";
const frontendSkills = [
  { size: [64, 64], src: "/assets/ts-240.png", description: "TypeScript" },
  { size: [64, 64], src: "/assets/react-480.png", description: "React" },
  { size: [64, 64], src: "/assets/vue-240.png", description: "Vue" },
  { size: [64, 64], src: "/assets/nuxt-480.png", description: "Nuxt" },
  { size: [64, 64], src: "/assets/next-256.png", description: "Next" },
  { size: [64, 64], src: "/assets/remix.png", description: "Remix" },
  { size: [64, 64], src: "/assets/sass-480.png", description: "SASS" },
  {
    size: [64, 64],
    src: "/assets/tailwindcss-480.png",
    description: "TailwindCSS",
  },
];
const backendSkills = [
  { size: [64, 64], src: "/assets/nodejs-240.png", description: "Node.js" },
  { size: [64, 64], src: "/assets/graphql.png", description: "GraphQL" },
  { size: [64, 64], src: "/assets/php-480.png", description: "PHP" },
  { size: [64, 64], src: "/assets/laravel-100.png", description: "Laravel" },
  { size: [64, 64], src: "/assets/silverstripe.png", description: "SilverStripe" },
  { size: [64, 64], src: "/assets/prisma.png", description: "Prisma" },
  {
    size: [64, 64],
    src: "/assets/postgresql-480.png",
    description: "PostgreSQL",
  },
  { size: [64, 64], src: "/assets/mongodb-480.png", description: "MongoDB" },
  { size: [64, 64], src: "/assets/docker-240.png", description: "Docker" },
  { size: [64, 64], src: "/assets/aws-256.png", description: "AWS" },
];
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
              {
                "Software Engineer @ ArchiPro | React, Remix, Vue, TypeScript, Node, GraphQL, PHP, MySQL, and more | ex Opera Software. Dream to be an artist of software engineering."
              }
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton />
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap">
          <section className="flex-1">
            <h3 className="text-accent font-semibold h3">
              {"Front-end skills:"}
            </h3>
            <div className="flex gap-4 mt-4 flex-wrap">
              {frontendSkills.map(({ src, size, description, alt }) => (
                <SkillComponent
                  key={description}
                  src={src}
                  size={size}
                  description={description}
                  alt={alt}
                />
              ))}
            </div>
          </section>
          <section  className="flex-1">
            <h3 className="text-accent font-semibold h3">
              {"Back-end skills:"}
            </h3>
            <div className="flex gap-4 mt-4 flex-wrap">
              {backendSkills.map(({ src, size, description, alt }) => (
                <SkillComponent
                  key={description}
                  src={src}
                  size={size}
                  description={description}
                  alt={alt}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
