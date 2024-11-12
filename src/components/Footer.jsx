import { navigationLinks, websiteInformation } from "../../constants";

// Destructure the first item from websiteInformation
const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="flex ">
      <ul className="my-auto ml-auto mr-6 p-4 capitalize">
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="my-auto mr-auto ml-6">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <li key={key}>
            <a href={link} className="flex space-x-2 ">
              <Logo />
              <p>{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
