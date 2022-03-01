import React from "react";
import Description from "./Description";
import { motion, AnimatePresence } from "framer-motion";

const Question = ({ question, answer }) => {
  const [showAnswers, setShowAnswers] = React.useState(false);
  const onClick = () => setShowAnswers(!showAnswers);

  return (
    <div className="border-b">
      <div
        className="flex justify-between gap-x-8 mx-auto cursor-pointer"
        onClick={onClick}
      >
        <h2 className="font-Montserrat font-semibold text-dark-gray text-lg text-left leading-normal my-auto py-4 lg:text-xl">
          {question}
        </h2>
        <div className="p-2 my-auto">
          <motion.h2
            initial={{ rotate: 0 }}
            animate={{
              rotate: showAnswers ? 180 : 0,
              opacity: [1, 0.5, 1],
            }}
            className="font-Montserrat text-brand-green text-4xl text-left leading-normal "
          >
            {showAnswers ? "-" : "+"}
          </motion.h2>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showAnswers ? (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {answer.split("~").map((str) => (
              <Description text={str} />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Question;
