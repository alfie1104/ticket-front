import { motion, useAnimation, Variants } from "framer-motion";

const boxVariant: Variants = {
  visible: { opacity: 1, scale: 2 },
  hidden: { opacity: 0, scale: 0 },
};
function ScrollBox({ children }: { children: any }) {
  return (
    <motion.div
      className="border border-gray-400 w-4/12 m-6"
      variants={boxVariant}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default ScrollBox;
