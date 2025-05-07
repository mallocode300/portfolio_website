'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample project data - would typically come from a database or CMS
const projects = [
  {
    id: 1,
    title: "AI Project 1",
    description: "A comprehensive machine learning platform for predictive analytics that processes large datasets to provide actionable business insights.",
    longDescription: "This project combined deep learning techniques with traditional statistical methods to create a hybrid approach that outperforms conventional models. Built with PyTorch and deployed on AWS, this solution processes millions of data points daily.",
    technologies: ["Python", "PyTorch", "AWS", "React"],
    image: "/project-1-placeholder.jpg",
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "AI Project 2",
    description: "Natural language processing system that analyzes customer feedback across multiple channels to identify sentiment and key topics.",
    longDescription: "Developed a custom NLP pipeline that processes customer feedback from various sources including social media, support tickets, and reviews. The system categorizes feedback, identifies sentiment, and extracts actionable insights.",
    technologies: ["NLP", "TensorFlow", "Google Cloud", "Node.js"],
    image: "/project-2-placeholder.jpg",
    category: "Natural Language Processing"
  },
  {
    id: 3,
    title: "AI Project 3",
    description: "Computer vision application that automates quality control in manufacturing by detecting defects in real-time video feeds.",
    longDescription: "Implemented a convolutional neural network that processes video feeds from manufacturing lines to detect product defects with 99.7% accuracy. The system integrates with existing manufacturing equipment to provide real-time alerts.",
    technologies: ["Computer Vision", "OpenCV", "TensorFlow", "Docker"],
    image: "/project-3-placeholder.jpg",
    category: "Computer Vision"
  },
  {
    id: 4,
    title: "AI Project 4",
    description: "Recommendation engine for an e-commerce platform that increased conversion rates by 32% through personalized product suggestions.",
    longDescription: "Developed a hybrid recommendation system that combines collaborative filtering and content-based approaches. The system analyzes user behavior, purchase history, and product characteristics to generate personalized recommendations.",
    technologies: ["Recommendation Systems", "Python", "MongoDB", "FastAPI"],
    image: "/project-3-placeholder.jpg",
    category: "Recommendation Systems"
  },
  {
    id: 5,
    title: "AI Project 5",
    description: "Intelligent chatbot for customer service that handles over 70% of inquiries without human intervention.",
    longDescription: "Built a conversational AI system using state-of-the-art language models and reinforcement learning. The chatbot integrates with CRM systems to provide context-aware responses and can escalate complex issues to human agents.",
    technologies: ["Conversational AI", "Python", "GPT", "React"],
    image: "/project-2-placeholder.jpg",
    category: "Conversational AI"
  },
  {
    id: 6,
    title: "AI Project 6",
    description: "Anomaly detection system for financial transactions that identifies potential fraud in real-time.",
    longDescription: "Created an ensemble model that uses unsupervised learning techniques to establish normal behavior patterns and identify outliers. The system processes millions of transactions daily with minimal false positives.",
    technologies: ["Anomaly Detection", "Python", "Kafka", "Elasticsearch"],
    image: "/project-1-placeholder.jpg",
    category: "Anomaly Detection"
  },
];

// Extract unique categories
const categories = ["All", ...new Set(projects.map(project => project.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Projects</h1>
        <p className="text-lg text-text-default max-w-2xl">
          A collection of AI and machine learning projects that showcase my expertise in building intelligent systems 
          that solve real-world problems.
        </p>
      </header>

      {/* Project Categories */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button 
                key={category}
                className={`px-5 py-2 rounded-full transition-colors ${
                  isActive
                    ? 'bg-accent-dark text-white font-bold shadow-md ring-1 ring-accent' 
                    : 'bg-primary-dark text-text-darker hover:bg-primary-darker font-medium'
                }`}
                onClick={() => setActiveCategory(category)}
                aria-current={isActive ? 'page' : undefined}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group">
            <div className="relative h-52 mb-4 rounded-lg overflow-hidden bg-primary-dark">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mb-2">
              <button 
                onClick={() => setActiveCategory(project.category)}
                className={`text-sm font-medium ${
                  activeCategory === project.category
                    ? 'text-accent-dark font-semibold'
                    : 'text-accent hover:text-accent-dark'
                }`}
              >
                {project.category}
              </button>
            </div>
            <h3 className="text-xl font-medium text-text-dark mb-2 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-text-default mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-primary-dark text-text-dark rounded">
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="text-accent hover:text-accent-dark font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 