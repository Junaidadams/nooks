import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const IconBorder = (img, verified, premium, isHovered) => {
  return (
    <div
      className={`relative ${
        premium
          ? "bg-gradient-to-tr from-amber-500 to-amber-200"
          : "bg-periwinkle"
      } rounded-full w-16 h-16 sm:h-20 sm:w-20 flex shadow-lg p-1 mr-4`}
    >
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDz6yWvbQS0-tmNQjbMcOl11jXk38fj9xtWeMQVidumoj9Imn2ioRiYubBoTVUkAt-yUCjnJ2WU4_ZxexGo9QQxQkxJn0UoyAD-yAOIw"
        className="rounded-full object-cover h-full w-full"
      />
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HiOutlineBadgeCheck
          color="#E4D9FF"
          className="h-6 w-6 sm:h-8 sm:w-8 z-10 absolute bottom-0 right-0 transform bg-space-cadet p-0 rounded-full"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bottom-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap"
            >
              Verified
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

IconBorder.propTypes = {
  img: PropTypes.any.isRequired,
  verified: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
};

export default IconBorder;
