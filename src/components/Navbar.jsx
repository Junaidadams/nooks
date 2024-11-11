import { navigationLinks } from "../../constants";
const Navbar = () => {
  return (
    <div className="z-20 flex justify-between items-center min-w-screen backdrop-blur-[50px] sticky top-0 min-h-[56px] ">
      <ul className="space-x-8 capitalize flex flex-row py-4 mx-auto">
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
