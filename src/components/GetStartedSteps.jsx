import PropTypes from "prop-types";

const GetStartedSteps = ({ getStartedArray }) => {
  return (
    <div className="grid grid-cols-1">
      {getStartedArray.map((step) => (
        <div key={step.key} className="my-4 text-center text-ghost-white">
          <h2 className="text-2xl font-bold">
            {step.key}. {step.name}
          </h2>
          <p className="text-periwinkle">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

GetStartedSteps.propTypes = {
  getStartedArray: PropTypes.array.isRequired,
};

export default GetStartedSteps;
