import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

import apiRequest from "../../lib/apiRequest";

import SubmitButton from "../components/SubmitButton";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import IconBorder from "../components/IconBorder";

const ProfilePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    bio: currentUser.bio || "",
    email: currentUser.email,
    avatarUrl: currentUser.avatar,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComplete(false);
    setIsLoading(true);

    try {
      const res = await apiRequest.post("/auth/update-profile", formData);
      const { token, ...userData } = res.data;
      console.log(res.data);

      localStorage.setItem("authToken", token);

      setSuccess(true);
      updateUser(userData);
    } catch (error) {
      console.error(error.response?.data?.message || "An error has occurred.");
      setError("Profile update failed" + " " + error.response?.data?.message);
    } finally {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <div className="flex min-h-screen -mt-[56px] bg-delft-blue flex-col">
      <div className="w-3/4 lg:w-1/2 mt-20 m-auto text-center">
        <div className="flex flex-col sm:flex-row my-auto bg-space-cadet p-4 rounded-md">
          <div className="flex">
            <IconBorder
              premium={currentUser.premium}
              verified={currentUser.verified}
              img={currentUser.avatar}
            />
            <div className="my-auto text-left">
              <motion.h1 className="text-xl sm:text-2xl md:text-3xl text-periwinkle font-black">
                {formData.username}
              </motion.h1>
              <p className="text-ghost-white font-thin">Profile view</p>
            </div>
          </div>
          <div className="sm:my-auto sm:ml-auto">
            <button
              className="bg-periwinkle px-2 py-1 rounded-md"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>
        <div className="mt-4 text-left space-y-4 text-ghost-white">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-4 rounded-md bg-space-cadet">
                <label className="text-lg font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 bg-gray-800 rounded-md text-white"
                />
              </div>
              <div className="p-4 rounded-md bg-space-cadet">
                <label className="text-lg font-semibold">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 bg-gray-800 rounded-md text-white"
                />
              </div>
              <div className="p-4 rounded-md bg-space-cadet">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 bg-gray-800 rounded-md text-white"
                />
              </div>
              {!currentUser.premium ? (
                <div className="p-4 rounded-md bg-space-cadet">
                  <h6 className="text-lg font-semibold">Premium</h6>
                  <p className="w-full p-2 mt-1 bg-gray-800 rounded-md text-white">
                    Upgrade to premium membership?
                  </p>
                  <a href="/memberships">
                    <button className="bg-periwinkle px-2 py-1 rounded-md text-black">
                      Upgrade now
                    </button>
                  </a>
                </div>
              ) : (
                ""
              )}
              <SubmitButton
                preSubmissionText="Submit"
                postSubmissionText="Submitted"
                isLoading={isLoading}
                success={success}
                error={error}
                complete={complete}
                reattempt={false}
              />
            </form>
          ) : (
            <>
              <div className="p-4 rounded-md bg-space-cadet">
                <h2 className="text-lg font-semibold">Bio</h2>
                <p>{currentUser.bio || "Add a bio..."}</p>
              </div>
              <div className="p-4 rounded-md bg-space-cadet">
                <h2 className="text-lg font-semibold">Email</h2>
                <p>{currentUser.email}</p>
              </div>
              {currentUser.nooks ? (
                <div className="p-4 rounded-md bg-space-cadet">
                  <h2 className="text-lg font-semibold">nooks</h2>
                  <p>{currentUser.nooks}</p>
                </div>
              ) : (
                <div className="p-4 rounded-md bg-space-cadet">
                  <h2 className="text-lg font-semibold">Nooks</h2>
                  <p>
                    You do not currently have any nooks listed{" "}
                    <a href="/new-nook">list one here</a>
                  </p>
                </div>
              )}
              {currentUser.reviews ? (
                <div className="p-4 rounded-md bg-space-cadet">
                  <h2 className="text-lg font-semibold">reviews</h2>
                  <p>{currentUser.reviews}</p>
                </div>
              ) : (
                <div className="p-4 rounded-md bg-space-cadet">
                  <h2 className="text-lg font-semibold">Reviews</h2>
                  <p>
                    You do not currently have any reviews listed{" "}
                    <a href="/new-nook">list one here</a>
                  </p>
                </div>
              )}

              <div className="p-4 rounded-md bg-space-cadet">
                <h6 className="text-lg font-semibold">Premium</h6>
                <p className="w-full p-2 mt-1 bg-gray-800 rounded-md text-white">
                  Upgrade to premium membership?
                </p>
                <a href="/memberships">
                  <button className="bg-periwinkle px-2 py-1 rounded-md text-black">
                    Upgrade now
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
