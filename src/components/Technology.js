import React, { useState } from "react";
import { motion } from "framer-motion";
import rocketBig from "../assets/technology/image-launch-vehicle-portrait.jpg";
import rocketSmall from "../assets/technology/image-launch-vehicle-landscape.jpg";
import portBig from "../assets/technology/image-spaceport-portrait.jpg";
import portSmall from "../assets/technology/image-spaceport-landscape.jpg";
import capsuleBig from "../assets/technology/image-space-capsule-portrait.jpg";
import capsuleSmall from "../assets/technology/image-space-capsule-landscape.jpg";
import data from "../data.json";

const Technology = () => {
  const [tech, setTech] = useState(0);
  const displayWidth = window.innerWidth;
  let rocket, port, capsule;

  if (displayWidth >= 992) {
    rocket = rocketBig;
    port = portBig;
    capsule = capsuleBig;
  }
  else {
    rocket = rocketSmall;
    port = portSmall;
    capsule = capsuleSmall;
  }

  return (
    <motion.main className="technology">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="technology__subheading"
      >
        <span className="technology__subheading-number">03</span>
        <span className="technology__subheading-text">Space launch 101</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="technology__buttons"
      >
        <button
          className={
            tech === 0 ? "technology__button_active" : "technology__button"
          }
          onClick={() => setTech(0)}
        >
          1
        </button>
        <button
          className={
            tech === 1 ? "technology__button_active" : "technology__button"
          }
          onClick={() => setTech(1)}
        >
          2
        </button>
        <button
          className={
            tech === 2 ? "technology__button_active" : "technology__button"
          }
          onClick={() => setTech(2)}
        >
          3
        </button>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="technology__label"
      >
        the terminology...
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="technology__heading"
      >
        {data.technology[tech].name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="technology__paragraph"
      >
        {data.technology[tech].description}
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={tech === 0 ? rocket : tech === 1 ? port : capsule}
        alt="technology image"
        className="technology__image"
      />
    </motion.main>
  );
};

export default Technology;
