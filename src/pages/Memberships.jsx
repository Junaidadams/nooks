import { membershipInformation } from "../../constants";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MembershipTile = ({ tier, price, icon: Icon, benefits }) => {
  return (
    <div className="bg-ghost-white flex flex-col rounded-2xl shadow-lg p-6 w-full max-w-md text-center border-2 border-gray-200 hover:border-blue-500 transition-all">
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
        className="bg-gradient-to-tr from-slate-800 to-delft-blue p-2 rounded-lg mt-auto"
      >
        <button className="text-white">Sign up</button>
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
      <div className="w-3/4 lg:w-1/2 m-auto text-center flex flex-col my-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-ghost-white text font-black">
          Memberships
        </h1>
        <p className="py-8 text-ghost-white font-semibold text-lg">
          We have some memberships available for those interested in further
          supporting the platform. We are grateful for any users that use and
          promote our platform regardless of whether or not financial support is
          involved.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 m-auto">
          {membershipInformation.map((membership) => (
            <MembershipTile key={membership.tier} {...membership} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memberships;
