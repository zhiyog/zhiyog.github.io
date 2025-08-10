import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

// 导入图片资源
import headPicture from "@/assets/head_picture.png";
import zhenguoSvg from "@/assets/zhenguo.svg";
import xiaomiSvg from "@/assets/xiaomi.svg";
import nowcoderSvg from "@/assets/nowcoder.svg";
import chartsSvg from "@/assets/charts.svg";
import githubSvg from "@/assets/gitHub.svg";

const projects = [
  {
    name: "Personal Blog",
    description: "A personal tech blog built with React、TailwindCSS and Headless UI.",
    icon: headPicture,
  },
  {
    name: "Zhenguo APP",
    description:
      "During my internship, I was responsible for the host terminal of the Meituan Zhenguo app.",
    icon: zhenguoSvg,
  },
  {
    name: "Xiaomi Fusion Cloud",
    description:
      "During my internship, I was fortunate enough to participate in the infrastructure development of the cloud platform.",
    icon: xiaomiSvg,
  },
  {
    name: "Nowcoder",
    description:
      "I share some daily on Nowcoder, I hope to have the opportunity to become a blogger in the future.",
    icon: nowcoderSvg,
  },
  {
    name: "LowCode Insight",
    description: "An unfinished low-code visual component library (may be shelved by me).",
    icon: chartsSvg,
  },
  {
    name: "Github",
    description: "I often share some code and learning materials on github.",
    icon: githubSvg,
  },
];

const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

const ProjectCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: string;
}) => {
  return (
    <div rel="noopener noreferrer" className="mx-4">
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          // transition
          "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        )}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <figcaption className="text-base font-medium dark:text-white">{name}</figcaption>
          </div>
          <div className="rounded-full overflow-hidden bg-gray-100 flex items-center justify-center w-9 h-9">
            <img src={icon} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-left">{description}</blockquote>
      </figure>
    </div>
  );
};

export function MarqueeSelf() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <h2 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-10">
        <LineShadowText className="italic" shadowColor="black">
          Projects
        </LineShadowText>
      </h2>
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
