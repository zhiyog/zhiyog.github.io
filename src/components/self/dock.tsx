"use client";
import { MailIcon } from "lucide-react";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

// 导入静态资源
import nowcoderSvg from "@/assets/nowcoder.svg";
import githubSvg from "@/assets/github.svg";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: () => <MailIcon className="w-20" />,
  nowcoder: () => (
    <div>
      <img src={nowcoderSvg} alt="Icon" width="22" height="22" />
    </div>
  ),
  github: () => (
    <div>
      <img src={githubSvg} alt="Icon" width="22" height="22" />
    </div>
  ),
};

const DATA = {
  navbar: [
    { href: "#zhiyog", label: "zhiyog" },
    { href: "#code", label: "code" },
    { href: "#blog", label: "blog" },
  ],
  contact: {
    social: {
      gitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
      nowcoder: {
        name: "Nowcoder",
        url: "#",
        icon: Icons.nowcoder,
      },
    },
  },
};

export function DockSelf() {
  return (
    <div className="flex flex-col items-center justify-center mt-0">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label} className="ml-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 ")}
                  >
                    {item.label}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
