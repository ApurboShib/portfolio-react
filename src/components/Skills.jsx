import React, { useState } from "react";
import { Code, Brain, BarChart } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ml");

  const skillCategories = {
    ml: {
      title: "Machine Learning (Foundations)",
      icon: Brain,
      color: "cyan",
      skills: [
        { name: "Scikit-learn (basics)", level: 55, experience: "Learning" },
        { name: "Hugging Face (intro)", level: 40, experience: "Exploring" },
        { name: "Metrics & Evaluation", level: 50, experience: "Learning" },
        { name: "Data Preprocessing", level: 60, experience: "Practice" },
        { name: "Embeddings Concepts", level: 35, experience: "Intro" },
        { name: "Transformer Basics", level: 30, experience: "Reading" },
      ],
    },
    programming: {
      title: "Programming Languages",
      icon: Code,
      color: "purple",
      skills: [
        { name: "Python", level: 70, experience: "Core usage" },
        { name: "JavaScript", level: 65, experience: "Projects" },
        { name: "Java", level: 45, experience: "Basics" },
        { name: "C++", level: 40, experience: "Competitive" },
        { name: "Assembly (intro)", level: 25, experience: "Learning" },
        { name: "SQL (basics)", level: 50, experience: "Queries" },
      ],
    },
    data: {
      title: "Data Skills",
      icon: BarChart,
      color: "green",
      skills: [
        { name: "Pandas", level: 60, experience: "Practice" },
        { name: "NumPy", level: 55, experience: "Practice" },
        { name: "EDA (Exploration)", level: 50, experience: "Learning" },
        { name: "Basic Visualization", level: 45, experience: "Matplotlib" },
        { name: "Data Cleaning", level: 55, experience: "Practice" },
        { name: "Basic Statistics", level: 40, experience: "Learning" },
      ],
    },
    learning: {
      title: "Learning Roadmap",
      icon: Brain,
      color: "blue",
      skills: [
        { name: "Docker (soon)", level: 10, experience: "Planned" },
        { name: "Auth Patterns", level: 35, experience: "In projects" },
        { name: "Testing (Vitest)", level: 20, experience: "Starter" },
        { name: "Deployment Basics", level: 15, experience: "Research" },
        { name: "Vector Search", level: 10, experience: "Reading" },
        { name: "CI/CD Concepts", level: 8, experience: "Queued" },
      ],
    },
  };

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: "from-cyan-500 to-blue-500",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/25",
      },
      purple: {
        bg: "from-purple-500 to-pink-500",
        border: "border-purple-500/30",
        text: "text-purple-400",
        glow: "shadow-purple-500/25",
      },
      green: {
        bg: "from-green-500 to-emerald-500",
        border: "border-green-500/30",
        text: "text-green-400",
        glow: "shadow-green-500/25",
      },
      blue: {
        bg: "from-blue-500 to-indigo-500",
        border: "border-blue-500/30",
        text: "text-blue-400",
        glow: "shadow-blue-500/25",
      },
    };
    return colorMap[color];
  };

  const active = skillCategories[activeCategory];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An honest snapshot of where I am now: core programming, early ML
            foundations, practical data handling, and a clear roadmap of what
            I'm intentionally learning next.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${colors.bg} text-white shadow-lg ${colors.glow}`
                    : `bg-gray-800/40 border ${colors.border} ${colors.text} hover:bg-gray-700/40`
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {active.skills.map((skill, index) => {
            const colors = getColorClasses(active.color);
            return (
              <div
                key={index}
                className={`p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border ${colors.border} hover:border-opacity-80 transition-all duration-300 hover:transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className={`text-sm font-mono ${colors.text}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${colors.bg} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Experience: {skill.experience}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-2xl border border-gray-600/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              "Progress over perfection. I’m focusing on depth in fundamentals
              before advanced tooling—building projects, documenting lessons,
              and expanding this list as skills become real, not just listed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
