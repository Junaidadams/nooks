import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar bgColorMobile="bg-[#164e63]" scrollPercentageSwitch={15} />
      {children}
      <Footer color="bg-[#f5f5f5]" />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
