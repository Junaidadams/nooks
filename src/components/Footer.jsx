import { footerLinks, websiteInformation } from "../../constants";
import { motion } from "framer-motion";

// Destructure the first item from websiteInformation
const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="flex bg-delft-blue py-20">
      <ul className="my-auto ml-auto mr-6 p-4 capitalize text-periwinkle grid grid-cols-2 md:grid-cols-">
        {footerLinks.map((link) => (
          <motion.li whileHover={{ x: 4 }} key={link.key}>
            <a href={link.link}>{link.name}</a>
          </motion.li>
        ))}
      </ul>

      <ul className="my-auto mr-auto ml-6 text-periwinkle">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <motion.li whileHover={{ x: 4 }} key={key}>
            <a href={link} className="flex space-x-2 ">
              <Logo />
              <p>{name}</p>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
