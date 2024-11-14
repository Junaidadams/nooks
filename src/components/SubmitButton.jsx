import PropTypes from "prop-types";

const SubmitButton = ({
  complete,
  sucches,
  isLoading,
  error,
  preSubmissionText,
  postSubmissionText,
  reattempt,
}) => {
  return (
    <button
      type="submit"
      className="rounded-md font-semibold bg-ghost-white hover:bg-delft-blue hover:text-ghost-white hover:shadow-2xl text-delft-blue px-4 py-2 ml-auto w-full"
    >
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  complete: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  preSubmissionText: PropTypes.string.isRequired,
  postSubmissionText: PropTypes.string.isRequired,
  reattempt: PropTypes.bool,
};

export default SubmitButton;
