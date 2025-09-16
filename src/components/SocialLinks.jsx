import React from "react";
import { Github, Linkedin, BookOpen, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ApurboShib",
    icon: Github,
    color: "hover:text-white text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joy-shib-a65847300/",
    icon: Linkedin,
    color: "hover:text-white text-gray-300",
  },
  {
    name: "Medium",
    href: "https://medium.com/@222115111",
    icon: BookOpen,
    color: "hover:text-white text-gray-300",
  },
  {
    name: "Email",
    href: "mailto:joyshib2001@gmail.com",
    icon: Mail,
    color: "hover:text-white text-gray-300",
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socials.map(({ name, href, icon: Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`group relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-800/40 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm`}
        >
          <Icon className={`w-5 h-5 transition-colors duration-300 ${color}`} />
          <span className="absolute -bottom-7 text-xs font-medium text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
