import React from 'react'
import { motion } from "framer-motion";
import './AnimatedText.css'

export default function AnimatedText({text, secondaryText}) {
    //?for framer motion
    const words = text.split(" ");
    const secondaryTextWords = secondaryText.split(" ");
    // Variants for Container of words.
      const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.16, delayChildren: 0.44 * i },
        }),
      };
    
    // Variants for each word.
    
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };
    //?for framer motion
    
  return (
    <motion.div
    className="textContainer"
    style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
    variants={container}
    initial="hidden"
    animate="visible"
    >
    <div>
      {words.map((word, index) => (
        <motion.span
          className="primary-heading"
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </div>
    <div>
      {secondaryTextWords.map((words, i) => (
        <motion.span
          className="secondary-heading"
          variants={child}
          style={{ marginRight: "5px" }}
          key={i}
        >
          {words}
        </motion.span>
      ))}
    </div>
    
  </motion.div>
  )
}
