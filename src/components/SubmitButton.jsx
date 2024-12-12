import PropTypes from "prop-types";
import Spinner from "./Spinner";

const SubmitButton = ({
  complete,
  success,
  isLoading,
  error,
  preSubmissionText,
  postSubmissionText,
  reattempt,
}) => {
  return (
    <div>
      <button
        disabled={complete && !reattempt}
        type="submit"
        className="rounded-md font-semibold bg-ghost-white hover:bg-delft-blue hover:text-ghost-white hover:shadow-2xl text-delft-blue px-4 py-2 ml-auto w-full"
      >
        {complete && success != "" ? (
          <span className="w-fit m-auto">{postSubmissionText}</span>
        ) : (
          <div className="m-auto flex flex-row">
            <span className="w-fit ml-auto mr-2">{preSubmissionText}</span>
            <Spinner isLoading={isLoading} complete={complete} />
          </div>
        )}
      </button>
      {error && <span className="text-red-500 mt-2">{error}</span>}
    </div>
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
