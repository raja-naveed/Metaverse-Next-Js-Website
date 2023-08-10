"use client";
import { motion } from "framer-motion";
import { navVariants } from "./../utils/motion";
import styles from "../styles";
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search logo"
        className="w-[24px] h-[24] object-contain cursor-pointer"
      />
      <h2 
      className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVURSES
      </h2>
      <img
        src="/menu.svg"
        alt="search logo"
        className="w-[24px] h-[24] object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
