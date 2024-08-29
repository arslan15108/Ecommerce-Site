import { delay } from "framer-motion";

const ulVarients = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.5 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const navItemVarients = {
    open: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100, delay : custom * 0.2 , duration : .5}, 
      }
    }),
    closed: (custom) => ({
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 , delay : custom * 0.1 }
      }
    })
  };






export {ulVarients , navItemVarients}
