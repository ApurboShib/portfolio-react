import React, { useState, useEffect } from "react";
import { Brain, Code, Database } from "lucide-react";
import NeuralNetwork from "./hero/NeuralNetwork";
import TrainingMetrics from "./hero/TrainingMetrics";
import HeroText from "./hero/HeroText";

const Hero = () => {
  const [isTraining, setIsTraining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTraining((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start md:items-center">
        <HeroText />
        <div className="relative mt-8 md:mt-0 order-first md:order-none">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-500/20 w-full max-w-md mx-auto md:max-w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Neural Network Training
              </h3>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isTraining
                    ? "bg-green-500/20 text-green-400 animate-pulse"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {isTraining ? "Training..." : "Idle"}
              </div>
            </div>
            <NeuralNetwork isTraining={isTraining} />
            <TrainingMetrics isTraining={isTraining} />
          </div>
          <div className="hidden sm:block absolute -top-6 -left-6 p-3 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-purple-500/30 animate-bounce">
            <Brain className="w-6 h-6 text-purple-400" />
          </div>
          <div className="hidden sm:block absolute -top-6 -right-6 p-3 bg-cyan-600/20 backdrop-blur-sm rounded-lg border border-cyan-500/30 animate-bounce delay-75">
            <Code className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -left-6 p-3 bg-green-600/20 backdrop-blur-sm rounded-lg border border-green-500/30 animate-bounce delay-150">
            <Database className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
