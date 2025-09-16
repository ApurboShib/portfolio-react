import React, { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  Terminal,
  BookOpen,
} from "lucide-react";

const Contact = () => {
  const [terminalOutput, setTerminalOutput] = useState([
    "$ whoami",
    "Joy Shib",
    "$ pwd",
    "/home/joy/projects/portfolio",
    "$ status",
    "Open to collaborate & learn",
    "$ _",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommand = (cmd) => {
    const commands = {
      help: ["Available commands: whoami, skills, contact, clear, hire"],
      whoami: ["Joy Shib - Full Stack Developer & NLP Blogger"],
      skills: ["React, Node.js, Python, NLP, Tailwind, Express"],
      contact: [
        "Email: joyshib2001@gmail.com",
        "LinkedIn: /in/joy-shib-a65847300/",
        "GitHub: /ApurboShib",
        "Medium: medium.com/@222115111",
      ],
      clear: [],
      hire: [
        "Initializing collaboration sequence...",
        "Let's build and learn together! 🚀",
      ],
    };
    const output = [...terminalOutput];
    output.push(`$ ${cmd}`);
    if (commands[cmd]) {
      if (cmd === "clear") {
        setTerminalOutput(["$ _"]);
        return;
      }
      output.push(...commands[cmd]);
    } else {
      output.push(
        `Command not found: ${cmd}. Type 'help' for available commands.`
      );
    }
    output.push("$ _");
    setTerminalOutput(output);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ApurboShib",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joy-shib-a65847300/",
      color: "hover:text-blue-400",
    },
    {
      icon: BookOpen,
      label: "Medium",
      href: "https://medium.com/@222115111",
      color: "hover:text-purple-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:joyshib2001@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on cutting-edge AI projects or discuss the
            latest in machine learning? I'm always excited to connect with
            fellow innovators and explore new opportunities.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-500/30 overflow-hidden">
            <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-green-500/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-green-400 font-mono text-sm">
                  joy@ml-terminal
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-black rounded-lg p-4 mb-4 h-64 overflow-y-auto font-mono text-sm">
                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith("$") ? "text-green-400" : "text-gray-300"
                    } ${line === "$ _" ? "animate-pulse" : ""}`}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-green-400" />
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && currentCommand) {
                      handleCommand(currentCommand);
                      setCurrentCommand("");
                    }
                  }}
                  placeholder="Type a command (try 'help')"
                  className="flex-1 bg-transparent border border-green-500/30 rounded px-3 py-2 text-green-400 font-mono text-sm focus:outline-none focus:border-green-400"
                />
                <button
                  onClick={() => {
                    if (currentCommand) {
                      handleCommand(currentCommand);
                      setCurrentCommand("");
                    }
                  }}
                  className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded text-green-400 hover:bg-green-600/30 transition-colors"
                >
                  Run
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Project collaboration opportunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-8">
            Connect on Social
          </h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 text-gray-400 ${link.color} transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg`}
                  title={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700/30 text-center text-gray-400">
          <p className="mb-2">
            © 2024 Joy Shib. Built with React & Tailwind CSS.
          </p>
          <p className="font-mono text-sm text-cyan-400">
            "The future belongs to those who understand and shape artificial
            intelligence"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
