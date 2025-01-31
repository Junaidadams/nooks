import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ContactTiles = ({ contactInformation }) => {
  return (
    <div className=" rounded-md grid grid-cols-1 sm:grid-cols-2">
      {contactInformation.map(({ key, name, address, icon: Icon }) => (
        <motion.a
          href={address}
          key={key}
          whileHover={{ y: -3 }}
          className="hover:bg-opacity-5 bg-gradient-to-t from-delft-blue to-space-cadet t p-2 m-4 rounded-sm"
        >
          <div className="border-space-cadet bg-ghost-white border p-4 rounded-sm">
            <div className="flex flex-row ">
              <Icon
                size={30}
                color="#1e2749"
                className="ml-auto mr-2 my-auto"
              />
              <h1 className="text-space-cadet text-2xl font-bold mr-auto ml-2 my-auto">
                {name}
              </h1>
            </div>
            <div className="w-full">
              <p className="text-lg text-space-cadet text-center w-full">
                {address}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

ContactTiles.propTypes = {
  contactInformation: PropTypes.array.isRequired,
};

export default ContactTiles;
