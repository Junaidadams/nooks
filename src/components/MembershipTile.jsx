import PropTypes from "prop-types";

export const MembershipTile = ({ tier, price, icon: Icon, benefits }) => {
  return (
    <div className="bg-ghost-white flex flex-col rounded-2xl shadow-lg p-6 w-full max-w-md text-center border-2 border-gray-200 hover:border-blue-500 transition-all hover:bg-slate-50">
      <div className="flex justify-center items-center mb-4">
        <Icon className="text-delft-blue text-5xl" />
      </div>
      <h2 className="text-xl font-bold">{tier}</h2>
      <p className="text-gray-600 mb-4">{price}</p>
      <ul className="text-left space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <benefit.icon className="text-delft-blue mr-2" />
            {benefit.text}
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="bg-gradient-to-tr to-blue-800 from-delft-blue p-2 rounded-lg mt-auto hover:shadow-2xl"
      >
        <button className="text-white font-semibold">Sign up</button>
      </a>
    </div>
  );
};

MembershipTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool,
  onUpgrade: PropTypes.func,
  benefits: PropTypes.array,
  tier: PropTypes.string,
  icon: PropTypes.any,
};
