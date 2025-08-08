import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import ProfileCard from "./profileCard";
import { BorderBeam } from "../magicui/border-beam";
import { RetroGrid } from "../magicui/retro-grid";

// 导入静态资源
import nowcoderSvg from "@/assets/nowcoder.svg";
import githubSvg from "@/assets/github.svg";
import reactSvg from "@/assets/light_react.svg";
import viteSvg from "@/assets/vite.svg";
import headPicture from "@/assets/head_picture.png";

export function OrbitingCirclesSelf() {
  return (
    <div>
      <div className="relative flex h-[860px] w-full flex-col items-center justify-center overflow-hidden mt-0 mb-20">
        <RetroGrid className="w-screen	 h-full" />
        <ProfileCard />
        <OrbitingCircles radius={280} iconSize={40} speed={2}>
          <Icons.gitHub />
          <Icons.react />
          <Icons.vite />
          <Icons.nowcoder />
        </OrbitingCircles>
        <OrbitingCircles radius={340} iconSize={200} reverse speed={2}>
          <Icons.head />
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icons = {
  nowcoder: () => (
    <div>
      <img src={nowcoderSvg} alt="Icon" width="100" height="100" />
    </div>
  ),
  gitHub: () => (
    <div>
      <img src={githubSvg} alt="Icon" width="100" height="100" />
    </div>
  ),
  react: () => (
    <div>
      <img src={reactSvg} alt="Icon" width="100" height="100" />
    </div>
  ),
  vite: () => (
    <div>
      <img src={viteSvg} alt="Icon" width="100" height="100" />
    </div>
  ),
  head: () => (
    <div
      style={{
        width: "200px", // 确保父容器的宽度和高度相等
        height: "200px", // 确保父容器的宽度和高度相等
        borderRadius: "50%", // 使父容器变为圆形
        overflow: "hidden", // 防止图片溢出父容器
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // 居中对齐图片和子元素
      }}
    >
      <img
        src={headPicture}
        width="200"
        height="200"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <BorderBeam duration={4} size={200} colorFrom="black" colorTo="black" />
    </div>
  ),
};
