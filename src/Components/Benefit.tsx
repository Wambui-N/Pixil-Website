"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenefitProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const Benefit = ({ title, content, icon }: BenefitProps) => {
  return (
    <div className="overflow-visible">
      <motion.div
        className="bg-iron flex flex-col gap-8 p-6 rounded-xl"
        initial={{ opacity: 0, x: 200, y: 200 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{delay:0.2, duration: 0.5}}
      >
        <div>{icon}</div>
        <div className="flex flex-col gap-2">
          <h6 className="font-brule text-2xl uppercase">{title}</h6>
          <p>{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefit;
