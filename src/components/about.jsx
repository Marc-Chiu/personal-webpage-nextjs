'use client';

import React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import CardFront from './card-front';
import CardBack from './card-back';
import FlippingCard from './flipcard';

const WebSkills = [
  { skill: 'JavaScript', stars: 5 },
  { skill: 'React', stars: 5 },
  { skill: 'Node.js', stars: 5 },
  { skill: 'SQL', stars: 5 },
  { skill: 'HTML5', stars: 4 },
  { skill: 'MongoDB', stars: 4 },
  { skill: 'Express.js', stars: 4 },
  { skill: 'REST APIs', stars: 4 },
  { skill: 'D3', stars: 4 },
  { skill: 'Webpack', stars: 3 },
  { skill: 'NPM/Yarn', stars: 3 },
  { skill: 'AWS', stars: 3 },
  { skill: 'Jest', stars: 2 },
  { skill: 'Redis', stars: 2 },
];

const DataSkills = [
  { skill: 'Python', stars: 5 },
  { skill: 'SQL', stars: 5 },
  { skill: 'Data Visualization', stars: 5 },
  { skill: 'Linear Algebra', stars: 5 },
  { skill: 'Git', stars: 4 },
  { skill: 'Java', stars: 4 },
  { skill: 'Machine Learning', stars: 4 },
  { skill: 'CI/CD', stars: 3 },
  { skill: 'Bash', stars: 3 },
  { skill: 'Docker', stars: 3 },
  { skill: 'Spark', stars: 3 },
  { skill: 'C', stars: 2 },
];

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: ref,
    offset: ['0 1', '0.5 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scale, opacity: opacity }}
        className="grid grid-cols-1 md:grid-cols-2 mx-[15%] md:mt-[100px] gap-3"
      >
        <FlippingCard>
          <CardFront>
            {' '}
            <h1 className="montserrat text-3xl">Full Stack Engineer</h1>
            <p className="py-3">
              I recently graduated with a B.S. in Computer Science from NYU and
              I am looking for work as a Full Stack Developer. I experience with
              React, Node.js, SQL and much more. Let's Talk!
            </p>
          </CardFront>
          <CardBack skills={WebSkills} />
        </FlippingCard>
        <FlippingCard>
          <CardFront>
            {' '}
            <h1 className="montserrat text-3xl">Software Engineer</h1>
            <p className="py-3">
              {' '}
              I have relevant experience as a Software Engineer Intern at
              Dailmer Trucks where I worked on creating a new API to compute
              truck stress metrics. And at DPlexbio bio where I mananged a data
              pipeline and implemented ML models for semenatic segmentation.
            </p>
          </CardFront>
          <CardBack skills={DataSkills} />
        </FlippingCard>
      </motion.div>
    </>
  );
}

export default About;
