import React from "react";
import { Code2, Brain, Rocket, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Projects",
      description: "Building apps with React, Node.js, Express, and Tailwind",
    },
    {
      icon: Brain,
      title: "NLP Focus",
      description: "Exploring tokenization, embeddings & transformer basics",
    },
    {
      icon: Rocket,
      title: "Learning in Public",
      description: "Writing Medium blogs to solidify and share concepts",
    },
    {
      icon: BookOpen,
      title: "Competitive Programming",
      description: "Sharpening problem solving & algorithmic thinking",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m an early‑stage developer focused on full stack engineering and
            natural language processing. I enjoy turning ideas into small but
            polished projects—then breaking down what I learned in accessible
            Medium posts. My goal right now: deepen fundamentals while building
            a portfolio that reflects curiosity, consistency, and growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl border border-purple-500/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Current Focus
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I believe progress comes from shipping small, honest iterations.
                Instead of chasing titles, I’m sharpening core skills: clean
                code structure, data handling, API design, and explainable
                learning workflows. I document my process—mistakes included—so
                others starting out can accelerate faster.
              </p>
              <p className="text-cyan-400 font-medium">— Joy Shib</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">JavaScript / React</span>
                <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Node.js / Express</span>
                <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Python / NLP</span>
                <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-7/12"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Problem Solving (CP)</span>
                <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full w-8/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
