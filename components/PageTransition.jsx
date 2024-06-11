"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, ease: "easeInOut" } }}
        >{children}</motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
