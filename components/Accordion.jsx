import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import data from "../data";

export default () => {
  return data.map((item, index) => <Accordion key={item.category} item={item} index={index} />);
};

const Accordion = ({ item, index }) => {
  const [expanded, setExpanded] = useState(index === 0 ? true : false);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        className="accordion-header"
        initial={false}
        animate={{ backgroundColor: expanded ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(!expanded)}
      >
        {item.category}
      </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {item.questions.map((question, index) => (
              <div key={question.content} className="question-card">
                <span>
                  {index + 1}- {question.content}
                </span>
                {question.notes && (
                  <div style={{ width: "100%" }}>
                    <hr />
                    <span>{question.notes}</span>
                  </div>
                )}
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
