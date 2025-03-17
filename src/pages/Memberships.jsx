import { membershipInformation } from "../../constants";
import { MembershipTile } from "../components/MembershipTile";
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
