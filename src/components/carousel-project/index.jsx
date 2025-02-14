'use client';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ProjectCard from '../project-card';
import { useMediaQuery } from 'react-responsive';
import './carousel-project.css';

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 768px)',
    defaultMatches: true,
  });

  // Recalculate the transform mapping based on the current screen size.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? ['0%', '0%'] : ['50%', '-55%'],
  );

  return (
    <div className="carousel " ref={ref} style={{ position: 'relative' }}>
      <div className="contentContainer md:w-[200vw] p-[20px]">
        <motion.div className="project-items" style={{ x }}>
          <div className="project-item hover:scale-110 transition-transform duration-200">
            <ProjectCard
              src="/bgrm.png"
              description="Image Background Remover"
              url="https://rmbg-100034238209.us-central1.run.app"
            />
          </div>
          <div className="project-item hover:scale-110 transition-transform duration-200">
            <ProjectCard
              src="/old-webpage.png"
              description="My Old Webpage"
              url="https://marc-chiu.github.io"
            />
          </div>
          <div className="project-item transition-transform duration-200 hover:scale-110">
            <ProjectCard
              src="/prem-dashboard.png"
              description="Fantasy Premier League Dashboard"
              url="https://main.dshah91lojxju.amplifyapp.com"
            />
          </div>
          <div className="project-item transition-transform duration-200 hover:scale-110">
            <ProjectCard
              src="/julia-set.png"
              description="Julia Set Visualizer"
              url="https://github.com/Marc-Chiu/JuliaSet"
            />
          </div>
          <div className="project-item transition-transform duration-200 hover:scale-110">
            <ProjectCard
              src="/vpn.png"
              description="VPN Traffic Classification"
              url="https://github.com/Svk319/EncryptedTrafficClassificationByCNN"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
