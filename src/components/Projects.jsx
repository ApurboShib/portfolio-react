import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const project = {
    title: "MU-Portal",
    subtitle: "Campus Knowledge & Resource Hub",
    description:
      "A comprehensive university student portal for sharing resources, materials, results, and organizing academic collaboration. Built as an end‑to‑end full stack project to learn architecture, authentication, and clean feature iteration.",
    stack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
    ],
    features: [
      "User profiles with academic info & resource contributions",
      "Materials repository (notes, PDFs, links) with tagging",
      "Results section for semester / course records",
      "Role-based access (student / moderator) groundwork",
      "Search + basic filtering for resources",
    ],
    learning: [
      "Structured folder organization & separation of concerns",
      "State management patterns with React hooks",
      "REST API design & pagination basics",
      "JWT auth + protected routes",
      "Handling file metadata & storage strategy planning",
    ],
    roadmap: [
      "Add file upload + presigned storage integration",
      "Introduce comments & reactions on resources",
      "Implement course-based grouping and subscription",
      "Add simple recommendation (most starred / recent)",
      "Set up tests (Vitest + supertest API layer)",
    ],
    gradient: "from-green-600 to-cyan-600",
    demo: false,
    github: true,
    links: {
      github: "#", // replace with your repo URL
      live: null, // add when deployed
      demoVideo: null,
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Featured Project
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Starting strong with a single meaningful build. Iterating on depth
            rather than inflating quantity. MU‑Portal is my learning sandbox for
            architecture, usability, and deployment.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />
            <div className="relative p-10 space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 font-semibold">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {project.links.demoVideo && (
                    <a
                      href={project.links.demoVideo}
                      className="p-2 bg-green-600/20 rounded-lg border border-green-500/30 hover:bg-green-600/30 transition-colors"
                    >
                      <Play className="w-4 h-4 text-green-400" />
                    </a>
                  )}
                  {project.github && project.links.github && (
                    <a
                      href={project.links.github}
                      className="p-2 bg-gray-600/20 rounded-lg border border-gray-500/30 hover:bg-gray-600/30 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="p-2 bg-cyan-600/20 rounded-lg border border-cyan-500/30 hover:bg-cyan-600/30 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Core Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-400">
                    What I Learned
                  </h4>
                  <ul className="space-y-2">
                    {project.learning.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-300 border border-cyan-500/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">
                  Next Iterations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.roadmap.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900/60 rounded-lg text-xs md:text-sm text-gray-300 border border-gray-600/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
