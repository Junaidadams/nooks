// Navbar.jsx
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, signedInNavLinks } from "../../constants";
import Toggle from "./Toggle";

import { AuthContext } from "../context/AuthContext";
import { BsChevronDoubleDown } from "react-icons/bs";

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
  const [miniMenuIsOpen, setMiniMenuIsOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="z-20 flex justify-between items-center min-w-screen sticky top-0 min-h-[56px] px-4 backdrop-blur-lg">
      {/* Navigation Links */}

      <ul className="space-x-8 capitalize hidden md:flex flex-row p-2 mx-auto bg-periwinkle rounded-full">
        {navigationLinks.map((link) => (
          <li key={link.key} className="">
            <a
              href={link.link}
              className="text-space-cadet  py-2 px-3 rounded-full hover:text-indigo-600 font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
        {!currentUser ? (
          <li>
            {" "}
            <a
              href="/login"
              className="text-space-cadet  py-2 px-3 rounded-full hover:text-indigo-600 font-semibold"
            >
              Login
            </a>
          </li>
        ) : (
          ""
        )}
        {!currentUser ? (
          <li>
            {" "}
            <a
              href="/register"
              className="text-space-cadet  py-2 px-3 rounded-full hover:text-indigo-600 font-semibold"
            >
              Register
            </a>
          </li>
        ) : (
          ""
        )}
      </ul>

      {/* Signed in menu desktop */}

      {currentUser ? (
        <div className="z-20 hidden md:flex fixed flex-col mt-2">
          <button
            onClick={() => setMiniMenuIsOpen(!miniMenuIsOpen)}
            className="shadow-lg bg-space-cadet py-2 px-3 rounded-full flex"
          >
            <div className="my-auto mr-2">
              <BsChevronDoubleDown color="#e4d9ff" />
            </div>
            <span className="text-periwinkle">Hi, {currentUser.username}</span>
          </button>
          <div
            className={`${
              miniMenuIsOpen ? "flex" : "hidden"
            } absolute mt-10 bg-white shadow-lg rounded-md flex-col`}
          >
            {signedInNavLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="px-4 py-2 hover:bg-gray-100 capitalize"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

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
            className="absolute top-0 left-0 w-full bg-delft-blue shadow-lg flex flex-col space-y-6 px-4 pt-2 pb-10 capitalize md:hidden"
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
            {currentUser ? (
              <a
                href="/profile"
                className="text-ghost-white hover:text-periwinkle m-auto "
              >
                Profile
              </a>
            ) : (
              <div className="m-auto flex space-y-6 flex-col">
                <a
                  href="/login"
                  className="text-ghost-white hover:text-periwinkle m-auto "
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-ghost-white hover:text-periwinkle m-auto "
                >
                  Register
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
