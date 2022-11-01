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

export const specificMenuAnimation = {
  hidden: {
    x: "40vh",
    opacity: 0,
  },

  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const loaderAnimation = {
  hidden: {
    x: "-40vh",
    opacity: 0,
  },

  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },

  exit: {
    x: "-40vh",
    opacity: 0,
    duration: 1,
  },
};
