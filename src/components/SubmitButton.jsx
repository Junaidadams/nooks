import React from "react";
import PropTypes from "prop-types";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="rounded-md font-semibold bg-ghost-white hover:bg-delft-blue hover:text-ghost-white hover:shadow-2xl text-delft-blue px-4 py-2 ml-auto w-full"
    >
      Submit
    </button>
  );
};

SubmitButton.propTypes = {};

export default SubmitButton;
