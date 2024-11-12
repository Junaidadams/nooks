// Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../constants";
import Toggle from "./Toggle";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20 flex justify-between items-center min-w-screen backdrop-blur-[50px] sticky top-0 min-h-[56px] px-4">
      {/* Navigation Links */}
      {/* <a>
        <img src={logo} className="h-14 w-fit py-2" />
      </a> */}
      <ul className="space-x-8 capitalize hidden md:flex flex-row py-4 mx-auto">
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.link}
              className="text-delft-blue hover:text-indigo-600 font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle Button */}
      <div className="md:hidden ">
        <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full bg-delft-blue shadow-lg flex flex-col space-y-6 px-4 pt-2 pb-10 capitalize md:hidden "
          >
            <div className="md:hidden ">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {navigationLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-ghost-white hover:text-periwinkle m-auto "
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
