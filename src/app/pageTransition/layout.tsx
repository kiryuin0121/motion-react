"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const variants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity:0
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity:1
    },
    exit: {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
    }
  };
  return (
    <AnimatePresence mode="sync">

    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:1}}
      // style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}

    >
      {children}
    </motion.div>
    </AnimatePresence>
  );

};

export default Layout;
