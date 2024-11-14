import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";

const Spinner = ({ isLoading, complete }) => {
  return (
    <div className="w-fit my-auto mr-auto ml-2">
      {isLoading && (
        <span className="">
          <FaSpinner width={20} height={20} className="m-auto animate-spin" />
        </span>
      )}
      {complete && <></>}
    </div>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired,
};

export default Spinner;
