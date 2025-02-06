import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen -mt-[56px] bg-delft-blue flex-col">
      <div className="w-3/4 lg:w-1/2 mt-20 m-auto text-center">
        <div className="flex flex-col sm:flex-row my-auto bg-space-cadet p-4 rounded-md">
          <div className="flex">
            <div
              className={`${
                !currentUser.premium
                  ? "bg-gradient-to-tr from-amber-500 to-amber-200"
                  : "bg-periwinkle"
              } rounded-full w-16 h-16 sm:h-20 sm:w-20 flex shadow-lg p-1 mr-4`}
            >
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDz6yWvbQS0-tmNQjbMcOl11jXk38fj9xtWeMQVidumoj9Imn2ioRiYubBoTVUkAt-yUCjnJ2WU4_ZxexGo9QQxQkxJn0UoyAD-yAOIw"
                className="rounded-full object-cover h-full w-full"
              />
            </div>
            <div className="my-auto text-left">
              <motion.h1
                className={`text-xl sm:text-2xl md:text-3xl text-periwinkle font-black my-auto mr-auto`}
              >
                {currentUser.username}
              </motion.h1>
              <p className="text-ghost-white font-thin">Profile view</p>
            </div>
          </div>
          <div className="sm:my-auto sm:ml-auto">
            <button className="bg-periwinkle px-2 py-1 rounded-md">
              Change
            </button>
          </div>
        </div>
        <div className="mt-4 text-left space-y-4 text-ghost-white">
          <div className="p-4 rounded-md bg-space-cadet">
            <h2 className="text-lg font-semibold">Username</h2>
            <p className="">{currentUser.username}</p>
          </div>
          <div className="p-4 rounded-md bg-space-cadet">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="">{currentUser.email}</p>
          </div>
          {/* <div className="p-4 rounded-md bg-space-cadet">
            <h2 className="text-lg font-semibold">Premium Status</h2>
            <p className="">{currentUser.premium ? "Yes" : "No"}</p>
          </div> */}
          <div className="p-4 rounded-md bg-space-cadet">
            <h2 className="text-lg font-semibold">Nooks</h2>
            <p className="">Nook 1</p>
            <p className="">Nook 1</p>
            <p className="">Nook 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
