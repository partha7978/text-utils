import React from 'react'
import './NavBar.css'
import { motion } from "framer-motion";

export default function NavBar({logoName}) {


  //?for framer motion 
  const words = logoName.split('');
   // Variants for Container of words.
   const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.44 * i },
    }),
  };

// Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  //?for framer motion 
  return (
    <div className="navBar">
      <motion.ul
        className="navBarUl"
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
       {words.map((word, index) => (
      <motion.li
        className="navBarLi"
        variants={child}
        key={index}
      >
        {word}
      </motion.li>
      ))}
      </motion.ul>
    </div>
  )
}
