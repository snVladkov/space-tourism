import React, { useState } from "react";
import { motion } from "framer-motion";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import data from "../data.json";

const Destination = () => {
  const [dest, setDest] = useState(0);

  return (
    <main className="destination">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__subheading"
      >
        <span className="destination__subheading-number">01</span>
        <span className="destination__subheading-text">
          Pick your destination
        </span>
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={
          dest === 0 ? moon : dest === 1 ? mars : dest === 2 ? europa : titan
        }
        alt="moon"
        className="destination__image"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__buttons"
      >
        <button
          className={
            dest === 0 ? "destination__button_active" : "destination__button"
          }
          onClick={() => setDest(0)}
        >
          Moon
        </button>
        <button
          className={
            dest === 1 ? "destination__button_active" : "destination__button"
          }
          onClick={() => setDest(1)}
        >
          Mars
        </button>
        <button
          className={
            dest === 2 ? "destination__button_active" : "destination__button"
          }
          onClick={() => setDest(2)}
        >
          Europa
        </button>
        <button
          className={
            dest === 3 ? "destination__button_active" : "destination__button"
          }
          onClick={() => setDest(3)}
        >
          Titan
        </button>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__heading"
      >
        {data.destinations[dest].name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__paragraph"
      >
        {data.destinations[dest].description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__rule"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__distance-label"
      >
        avg. distance
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__distance-value"
      >
        {data.destinations[dest].distance}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__time-label"
      >
        est. travel time
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination__time-value"
      >
        {data.destinations[dest].travel}
      </motion.span>
    </main>
  );
};

export default Destination;
