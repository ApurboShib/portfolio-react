import React, { useState, useEffect } from "react";

const TrainingMetrics = ({ isTraining }) => {
  const [accuracy, setAccuracy] = useState(0.923);
  const [loss, setLoss] = useState(0.154);
  const [epoch, setEpoch] = useState(127);

  useEffect(() => {
    if (isTraining) {
      const interval = setInterval(() => {
        setAccuracy((prev) => Math.min(0.999, prev + Math.random() * 0.01));
        setLoss((prev) => Math.max(0.001, prev - Math.random() * 0.01));
        setEpoch((prev) => prev + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isTraining]);

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="text-center p-3 bg-gray-700/30 rounded-lg border border-green-500/20">
        <div className="text-2xl font-bold text-green-400 font-mono">
          {(accuracy * 100).toFixed(1)}%
        </div>
        <div className="text-xs text-gray-400">Accuracy</div>
      </div>
      <div className="text-center p-3 bg-gray-700/30 rounded-lg border border-red-500/20">
        <div className="text-2xl font-bold text-red-400 font-mono">
          {loss.toFixed(3)}
        </div>
        <div className="text-xs text-gray-400">Loss</div>
      </div>
      <div className="text-center p-3 bg-gray-700/30 rounded-lg border border-blue-500/20">
        <div className="text-2xl font-bold text-blue-400 font-mono">
          {epoch}
        </div>
        <div className="text-xs text-gray-400">Epoch</div>
      </div>
    </div>
  );
};

export default TrainingMetrics;
