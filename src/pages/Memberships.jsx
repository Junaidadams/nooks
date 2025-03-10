import { membershipInformation } from "../../constants";
import PropTypes from "prop-types";

const MembershipTile = ({ tier, price, icon: Icon, benefits }) => {
  return (
    <div className="bg-ghost-white flex flex-col rounded-2xl shadow-lg p-6 w-full max-w-md text-center border-2 border-gray-200 hover:border-blue-500 transition-all">
      <div className="flex justify-center items-center mb-4">
        <Icon className="text-blue-500 text-5xl" />
      </div>
      <h2 className="text-xl font-bold">{tier}</h2>
      <p className="text-gray-600 mb-4">{price}</p>
      <ul className="text-left space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <benefit.icon className="text-blue-400 mr-2" />
            {benefit.text}
          </li>
        ))}
      </ul>
      <a href="/" className="bg-slate-800 p-2 rounded-lg mt-auto">
        <button>Sign up</button>
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
const Memberships = () => {
  return (
    <div className="flex min-h-screen -mt-[56px] bg-delft-blue flex-col items-center p-8">
      <div className="m-auto">
        <h1 className="text-white text-3xl font-bold mb-6">Memberships</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipInformation.map((membership) => (
            <MembershipTile key={membership.tier} {...membership} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memberships;
