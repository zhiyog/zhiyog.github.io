import { Card } from "@/components/ui/card";
import { Mail, GraduationCap, Calendar, Briefcase } from "lucide-react";
import { useState } from "react";
import { VideoText } from "@/components/magicui/video-text";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`w-[310px] p-6 space-y-4 transition-all duration-300 transform ${
        isHovered ? "shadow-xl scale-105" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center space-y-4  items-center ">
        <div className="space-y-2 mt-5">
          <div className="relative h-[100px] w-[260px] text-sm font-medium">
            <VideoText fontSize="80" src="https://cdn.magicui.design/ocean-small.webm">
              zhiyog
            </VideoText>
          </div>
          <AnimatedGradientText className="text-sm font-medium mt-0 ">
            Welcome to my blog!
          </AnimatedGradientText>
        </div>
        <div className="space-y-3 pt-2 ml-5 mb-3">
          {[
            { icon: <GraduationCap className="h-4 w-4 text-gray-500" />, text: "CSU" },
            { icon: <Calendar className="h-4 w-4 text-gray-500" />, text: "2022" },
            { icon: <Briefcase className="h-4 w-4 text-gray-500" />, text: "Front-end Engineer" },
            { icon: <Mail className="h-4 w-4 text-gray-500" />, text: "3550245033@qq.com" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                isHovered ? "translate-x-2" : ""
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
