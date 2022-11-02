import ContentLoader from "react-content-loader";
import { motion } from "framer-motion";
import { loaderAnimation } from "../../Animation/Animation";

const ContentLoad = function () {
  return (
    <motion.div
      variants={loaderAnimation}
      initial={"hidden"}
      animate="visible"
      exit="exit"
    >
      <ContentLoader
        speed={5}
        width="100%"
        height={400}
        style={{
          width: "100%",
        }}
        viewBox="0 0 400 460"
        backgroundColor="#fff"
        foregroundColor="#e1e1fd"
      >
        <rect x="0" y="0" rx="2" ry="2" width="100%" height="24" />
        <rect x="0" y="34" rx="2" ry="2" width="100%" height="76" />
        <rect x="0" y="126" rx="2" ry="2" width="100%" height="24" />
        <rect x="0" y="160" rx="2" ry="2" width="100%" height="76" />
        <rect x="0" y="250" rx="2" ry="2" width="100%" height="24" />
        <rect x="0" y="284" rx="2" ry="2" width="100%" height="76" />
        <rect x="0" y="375" rx="2" ry="2" width="100%" height="55" />
      </ContentLoader>
    </motion.div>
  );
};

export default ContentLoad;
