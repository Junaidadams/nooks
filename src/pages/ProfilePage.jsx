import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen -mt-[56px] bg-delft-blue flex-col">
      <div className="w-3/4 lg:w-1/2 mt-20 m-auto text-center">
        <div className="flex my-auto w-fit">
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
          <motion.h1 className={`text-4xl sm:text-5xl md:text-6xl text-periwinkle font-black text-center my-auto mr-auto`}>
            {currentUser.username}
          </motion.h1>
        </div>
        <div className="mt-10 text-left space-y-4 text-ghost-white">
          <div className="p-4 rounded-md bg-mainWhite bg-space-cadet">
            <h2 className="text-lg font-semibold">Username</h2>
            <p className="">{currentUser.username}</p>
          </div>
          <div className="p-4 rounded-md bg-mainWhite">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="">{currentUser.email}</p>
          </div>
          <div className="p-4 rounded-md bg-mainWhite">
            <h2 className="text-lg font-semibold">Premium Status</h2>
            <p className="">{currentUser.premium ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
