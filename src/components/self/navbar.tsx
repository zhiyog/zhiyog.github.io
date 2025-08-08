"use client";

import * as React from "react";
import { GithubIcon, NowcoderIcon } from "@/components/icons"; // 自定义 GitHub 和 牛客图标

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [, setIsExpanded] = React.useState(false);

  // Toggle dynamic effect on scroll or trigger
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/zhiyog">Zhiyog</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* 组件列表导航 */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/code">Code</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* 其他导航 */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/footprints">Footprints</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* 右侧展示 GitHub 和 牛客图标的动态效果 */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/leisure">Leisure</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <GithubIcon />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NowcoderIcon />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
