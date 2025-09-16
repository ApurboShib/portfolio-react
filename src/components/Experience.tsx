import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Meta (Facebook)',
      position: 'Senior ML Engineer',
      duration: '2022 - Present',
      location: 'Menlo Park, CA',
      description: 'Leading the development of recommendation algorithms serving 2B+ users daily. Built distributed training infrastructure reducing model training time by 40%.',
      achievements: [
        'Improved feed ranking accuracy by 15% using multi-task learning',
        'Led team of 6 engineers in ML infrastructure modernization',
        'Published 3 papers at top-tier ML conferences'
      ],
      technologies: ['PyTorch', 'Distributed Systems', 'GraphQL', 'React'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      company: 'Uber Technologies',
      position: 'ML Engineer II',
      duration: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed computer vision models for autonomous vehicle perception systems. Optimized real-time object detection achieving 99.5% accuracy at 60fps.',
      achievements: [
        'Reduced false positive rates by 35% in pedestrian detection',
        'Deployed models to 1000+ autonomous vehicles',
        'Mentored 4 junior engineers and interns'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'CUDA', 'ROS'],
      gradient: 'from-green-600 to-cyan-600'
    },
    {
      company: 'Google DeepMind',
      position: 'Research Scientist Intern',
      duration: '2019 - 2020',
      location: 'London, UK',
      description: 'Conducted research on reinforcement learning for robotics applications. Developed novel algorithms for continuous control tasks.',
      achievements: [
        'Co-authored paper accepted at NeurIPS 2020',
        'Achieved SOTA results on 5 robotic manipulation tasks',
        'Collaborated with world-class researchers'
      ],
      technologies: ['JAX', 'Reinforcement Learning', 'Robotics', 'Python'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      company: 'Stanford AI Lab',
      position: 'Graduate Research Assistant',
      duration: '2017 - 2019',
      location: 'Stanford, CA',
      description: 'Researched natural language processing and computer vision under Prof. Andrew Ng. Focused on multimodal learning and attention mechanisms.',
      achievements: [
        'Published 2 first-author papers in top venues',
        'Won best paper award at ICML 2018 workshop',
        'Graduated with distinction (3.9/4.0 GPA)'
      ],
      technologies: ['PyTorch', 'Transformers', 'BERT', 'Vision'],
      gradient: 'from-red-600 to-orange-600'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From academic research to industry impact—a timeline of building AI systems 
            that have shaped how billions of people interact with technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50" />
                
                {/* Content */}
                <div className="ml-20 w-full">
                  <div className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl text-purple-400 font-semibold">{exp.company}</h4>
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

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="flex items-center text-green-400 font-semibold mb-3">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <TrendingUp className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-cyan-400 font-semibold mb-3">Technologies Used</h5>
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

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            <Users className="w-5 h-5 mr-2" />
            Let's Build Something Amazing Together
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;