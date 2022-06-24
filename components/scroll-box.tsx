import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// const boxVariant: Variants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 },
// };

// function ScrollBox({ children, id }: { children: any; id: number }) {
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//       className="w-full flex flex-col justify-center items-center"
//     >
//       {children}
//     </motion.div>
//   );
// }

const variants: Variants = {
  enter: (direction: "forward" | "backward") => {
    return {
      y: direction === "forward" ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: "forward" | "backward") => {
    return {
      y: direction === "forward" ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.5 },
    };
  },
};

function ScrollBox({
  children,
  id,
  direction,
}: {
  children: any;
  id: number;
  direction: "forward" | "backward";
}) {
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={id}
        variants={variants}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default ScrollBox;
