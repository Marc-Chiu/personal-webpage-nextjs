'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlippingCard = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [frontcard, backcard] = children;

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flex items-center justify-center h-auto bg-white rounded-lg">
      <div
        className="flip-card w-[400px] h-[500px] cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%] shadow-lg rounded-lg"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg relative overflow-hidden">
            {frontcard}
          </div>
          <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] rounded-lg">
            {backcard}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlippingCard;
