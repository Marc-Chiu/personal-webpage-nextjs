'use client';

import React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const asciiArt = `
  \`7MMM.     ,MMF'      db      \`7MM"""Mq.   .g8"""bgd       .g8"""bgd \`7MMF'  \`7MMF'\`7MMF'\`7MMF'   \`7MF'
    MMMb    dPMM       ;MM:       MM   \`MM..dP'     \`M     .dP'     \`M   MM      MM    MM    MM       M
    M YM   ,M MM      ,V^MM.      MM   ,M9 dM'       \`     dM'       \`   MM      MM    MM    MM       M
    M  Mb  M' MM     ,M  \`MM      MMmmdM9  MM              MM            MMmmmmmmMM    MM    MM       M
    M  YM.P'  MM     AbmmmqMA     MM  YM.  MM.             MM.           MM      MM    MM    MM       M
    M  \`YM'   MM    A'     VML    MM   \`Mb.\`Mb.     ,'     \`Mb.     ,'   MM      MM    MM    YM.     ,M
  .JML. \`'  .JMML..AMA.   .AMMA..JMML. .JMM. "\`bmmmd'        "\`bmmmd'  .JMML.  .JMML..JMML.   \`bmmmmd"'

                                    Web Dev. Data Scientist. SWE. Hire me :)`;
const asciiLetters = asciiArt.length;
const randomX = Array.from({ length: asciiLetters }, () =>
  Math.floor(Math.random() * 40),
);
const randomY = Array.from({ length: asciiLetters }, () =>
  Math.floor(Math.random() * 40),
);

const AnimatedLetter = (char, index, scrollYProgress, speed) => {
  const rotate = useTransform(scrollYProgress, [0.2, 0.5], [0, 360], {
    clamp: true,
  });
  const x = useTransform(
    scrollYProgress,
    [0.2, 1],
    [0, randomX[index] * speed],
  );
  const y = useTransform(
    scrollYProgress,
    [0.2, 1],
    [0, randomY[index] * speed],
    {
      clamp: true,
    },
  );
  if (char === '\n') {
    return <br key={index} />;
  }
  return (
    <motion.span
      key={index}
      style={{
        display: 'inline-block',
        x, // Horizontal shift based on scroll progress
        y, // Vertical shift based on scroll progress
        rotate, // Rotation based on scroll progress
      }}
    >
      {char}
    </motion.span>
  );
};

const WordCloud = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 1', '1 1'],
  });

  const speed = useMemo(() => 1 + Math.random(), []);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  const wrappedCharacters = asciiArt
    .split('')
    .map((char, index) => AnimatedLetter(char, index, scrollYProgress, speed));

  return (
    <div className="h-[200vh] relative" ref={ref}>
      <motion.pre
        className="fixed whitespace-pre text-tiny md:text-med lg:text-base"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          opacity,
          pointerEvents: 'none',
        }}
      >
        {wrappedCharacters}
      </motion.pre>
    </div>
  );
};

export default WordCloud;
