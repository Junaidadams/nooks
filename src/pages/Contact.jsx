import ContactTiles from "../components/ContactTiles";
import { contactInformation } from "../../constants";
import { motion } from "framer-motion";
import { operatingHours } from "../../constants";
import Table from "../components/Table";

const Contact = () => {
  return (
    <div className="flex min-h-screen -mt-[56px] bg-space-cadet flex-col">
      <div className="w-3/4 lg:w-1/2 mt-20 m-auto text-center rounded-lg text-ghost-white">
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle font-black text-center">
          Contact us
        </motion.h1>
        <p>Feel free to reach out to us via your preferred contact method.</p>
        <ContactTiles contactInformation={contactInformation} />

        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle font-black text-center mt-8">
          Operating hours
        </motion.h1>
        <div className="p-2">
          <p>Here are our current operating hours.</p>
          <p>Public holidays might differ.</p>
        </div>
        <Table operatingHours={operatingHours} />
        {/* Operating hours table */}
      </div>
    </div>
  );
};

export default Contact;
