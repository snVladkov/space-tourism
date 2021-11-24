import React, { useState } from "react";
import { motion } from "framer-motion";
import doug from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import vic from "../assets/crew/image-victor-glover.webp";
import an from "../assets/crew/image-anousheh-ansari.webp";
import data from "../data.json";

const Crew = () => {
  const [member, setMember] = useState(0);

  return (
    <main className="crew">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="crew__subheading"
      >
        <span className="crew__subheading-number">02</span>
        <span className="crew__subheading-text">Meet your crew</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="crew__role"
      >
        {data.crew[member].role}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="crew__heading"
      >
        {data.crew[member].name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="crew__paragraph"
      >
        {data.crew[member].bio}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="crew__buttons"
      >
        <button
          className={member === 0 ? "crew__button_active" : "crew__button"}
          onClick={() => setMember(0)}
        ></button>
        <button
          className={member === 1 ? "crew__button_active" : "crew__button"}
          onClick={() => setMember(1)}
        ></button>
        <button
          className={member === 2 ? "crew__button_active" : "crew__button"}
          onClick={() => setMember(2)}
        ></button>
        <button
          className={member === 3 ? "crew__button_active" : "crew__button"}
          onClick={() => setMember(3)}
        ></button>
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={
          member === 0 ? doug : member === 1 ? mark : member === 2 ? vic : an
        }
        alt="commander doug"
        className="crew__image"
      />
    </main>
  );
};

export default Crew;
