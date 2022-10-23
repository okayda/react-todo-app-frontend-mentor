export const modalAnimation = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },

  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const taskAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },

  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
