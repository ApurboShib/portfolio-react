import React from "react";

const NeuralNetwork = ({ isTraining }) => {
  const layers = [4, 6, 6, 3];
  return (
    <div className="relative h-64 flex items-center justify-center">
      <svg width="100%" height="100%" className="absolute inset-0">
        {layers.map((currentLayerSize, layerIndex) => {
          if (layerIndex === layers.length - 1) return null;
          const nextLayerSize = layers[layerIndex + 1];
          const currentX = 20 + layerIndex * 120;
          const nextX = 20 + (layerIndex + 1) * 120;
          return Array.from({ length: currentLayerSize }).map((_, i) =>
            Array.from({ length: nextLayerSize }).map((_, j) => {
              const currentY = 50 + i * (160 / currentLayerSize);
              const nextY = 50 + j * (160 / nextLayerSize);
              return (
                <line
                  key={`${layerIndex}-${i}-${j}`}
                  x1={currentX}
                  y1={currentY}
                  x2={nextX}
                  y2={nextY}
                  stroke={isTraining ? "#22d3ee" : "#374151"}
                  strokeWidth="1"
                  opacity={isTraining ? "0.6" : "0.3"}
                  className={isTraining ? "animate-pulse" : ""}
                />
              );
            })
          );
        })}
        {layers.map((layerSize, layerIndex) => {
          const x = 20 + layerIndex * 120;
          return Array.from({ length: layerSize }).map((_, nodeIndex) => {
            const y = 50 + nodeIndex * (160 / layerSize);
            return (
              <circle
                key={`${layerIndex}-${nodeIndex}`}
                cx={x}
                cy={y}
                r="8"
                fill={isTraining ? "#06b6d4" : "#1f2937"}
                stroke={isTraining ? "#22d3ee" : "#4b5563"}
                strokeWidth="2"
                className={isTraining ? "animate-pulse" : ""}
              />
            );
          });
        })}
      </svg>
      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
        <span className="text-xs text-gray-400 font-mono">Input</span>
        <span className="text-xs text-gray-400 font-mono">Hidden</span>
        <span className="text-xs text-gray-400 font-mono">Hidden</span>
        <span className="text-xs text-gray-400 font-mono">Output</span>
      </div>
      {isTraining && (
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"
              style={{
                left: `${10 + i * 30}%`,
                top: `${40 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NeuralNetwork;
