import { useEffect, useState, useContext, useCallback } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";

const Archive = () => {
  const { currentUser } = useContext(AuthContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nooks, setNooks] = useState([]);

  // Wrap fetchNooks in useCallback to stabilize its reference
  const fetchNooks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await apiRequest.get(`/nooks/fetch-nooks`, {
        params: { authorId: currentUser?.id },
      });
      setNooks(response.data.nooks);
    } catch (error) {
      console.error("Error fetching nooks:", error);
    } finally {
      setIsLoading(false);
      console.log(nooks);
    }
  }, [currentUser]); // Recreate only if currentUser changes

  useEffect(() => {
    if (currentUser && !hasSubmitted) {
      fetchNooks();
      setHasSubmitted(true);
    }
  }, [currentUser, hasSubmitted, fetchNooks]);

  return (
    <div className="flex min-h-screen -mt-[56px]  bg-periwinkle flex-col w-full">
      <div className="w-full h-1/3 flex flex-col p-4 m-auto">
        {nooks.length > 0 ? (
          <div>
            <div>
              {nooks.map((nook) => (
                <div key={nook.id}>{nook.name}</div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Archive;
