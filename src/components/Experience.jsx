import React from "react";
import { Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Learning Phase",
      position: "Foundations & Web Dev",
      duration: "Early 2024",
      location: "Getting Started",
      description:
        "Focused on core programming (JavaScript, Python) and built first static sites + simple REST APIs to understand request/response cycles and deployment basics.",
      achievements: [
        "Deployed first React + Express demo app",
        "Learned Git workflow & branching",
        "Published first learning summary blog",
      ],
      technologies: ["HTML/CSS", "JavaScript", "Git", "React"],
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      company: "Project Iteration",
      position: "Full Stack Practice",
      duration: "Mid 2024",
      location: "Hands-on Building",
      description:
        "Built CRUD applications with authentication and basic state management. Introduced database persistence and structured API layering for cleaner separation of concerns.",
      achievements: [
        "Implemented JWT auth & protected routes",
        "Refactored to modular service architecture",
        "Improved page load with code splitting",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React Router"],
      gradient: "from-green-600 to-emerald-600",
    },
    {
      company: "NLP Exploration",
      position: "Beginner NLP Engineer",
      duration: "Late 2024",
      location: "Language Focus",
      description:
        "Dived into tokenization, word embeddings, and transformer fundamentals. Rebuilt mini versions of preprocessing pipelines and compared model outputs for different tasks.",
      achievements: [
        "Published Medium series on embeddings",
        "Trained text classifier baseline",
        "Explored vector similarity search",
      ],
      technologies: ["Python", "spaCy", "scikit-learn", "HuggingFace"],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      company: "Public Sharing",
      position: "Learning in Public",
      duration: "2025",
      location: "Open Source / Blogging",
      description:
        "Iterating on portfolio projects while writing transparent dev logs, focusing on clarity, reproducibility, and gradual scope expansion (performance, testing, deployment).",
      achievements: [
        "Consistent weekly blogging cadence",
        "Added testing to key projects",
        "Optimized API response times",
      ],
      technologies: ["Vitest", "TailwindCSS", "CI/CD", "Docker (basic)"],
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Growth Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent progression of skills built through projects,
            consistency, and curiosity—no titles yet, just momentum.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50" />
                <div className="ml-20 w-full">
                  <div className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl text-purple-400 font-semibold">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-400 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-mono">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mb-6">
                        <h5 className="flex items-center text-green-400 font-semibold mb-3">
                          <Award className="w-4 h-4 mr-2" />
                          Key Milestones
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-gray-300"
                            >
                              <TrendingUp className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-cyan-400 font-semibold mb-3">
                          Stack & Tools
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/30 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            <Users className="w-5 h-5 mr-2" />
            Ready for Internship / First Role
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
