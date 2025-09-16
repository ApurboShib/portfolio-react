import React from "react";
import { Terminal, Zap } from "lucide-react";
import SocialLinks from "../SocialLinks.jsx";

const HeroText = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-sm">joy_shib.init();</span>
        </div>
        <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-white">Joy</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400">
            Shib
          </span>
        </h1>
        <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
          <p>Full Stack Developer & NLP Blogger</p>
          <p className="text-cyan-400 font-mono">
            Building • Learning • Sharing in Public
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg text-gray-400 leading-relaxed">
          I craft end‑to‑end projects with React, Node.js, and Python while
          exploring modern NLP (tokenization, transformers, embeddings). I turn
          what I learn into practical Medium articles so others can follow the
          journey—focusing on clarity, reproducibility, and real-world problem
          solving.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>View Projects</span>
          </button>
          <button className="px-6 py-3 border border-cyan-500/30 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm">
            Resume (Soon)
          </button>
        </div>
        <SocialLinks className="pt-2" />
      </div>
      <div className="flex items-center space-x-6 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Open to Learn and Work.</span>
        </div>
        <div>🌍 Remote / Open to relocate</div>
      </div>
    </div>
  );
};

export default HeroText;
