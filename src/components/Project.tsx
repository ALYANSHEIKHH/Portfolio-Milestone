"use client";
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import './project.css';

const projects = [
  {
    title: 'Travel Agency Website',
    description: 'A modern, responsive travel agency website built with Next.js and Tailwind CSS.',
    imageUrl: '/F1.jpg', // Replace with the correct image path
    githubUrl: 'https://github.com/ALYANSHEIKHH/travel-agency',
  },
  {
    title: 'E-commerce Template',
    description: 'A fully responsive e-commerce template designed with Next.js, Tailwind CSS, and ShadCN.',
    imageUrl: '/F2.jpg', // Replace with the correct image path
    githubUrl: 'https://github.com/ALYANSHEIKHH/ecommerce-template',
  },
  {
    title: 'E-commerce Store Website',
    description: 'A modern, responsive e-commerce store website.',
    imageUrl: '/F3.jpg', // Replace with the correct image path
    githubUrl: 'https://github.com/ALYANSHEIKHH/portfolio',
  },
];

const Project = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

<Image 
  src={project.imageUrl} 
  alt={project.title} 
  className="project-image" 
  width={400} 
  height={300} 
/>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link href={project.githubUrl} target="_blank" className="project-link">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
