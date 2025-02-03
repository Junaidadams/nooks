import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import SubmitButton from "../components/SubmitButton";
import { nookTags } from "../../constants";

const NewNook = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComplete(false);
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const res = await apiRequest.post(
        "/nooks/create",
        Object.fromEntries(formData)
      );
      setSuccess(true);
    } catch (error) {
      console.error(error.response?.data?.message || "An error has occurred");
      setError("Failed to create nook." + " " + error.response?.data?.message);
    } finally {
      setIsLoading(false);
      setComplete(true);
    }
  };
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-space-cadet to-delft-blue -mt-[56px] flex-col p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-space-cadet text-ghost-white p-8 rounded-xl shadow-lg border border-periwinkle"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create a New Nook
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="type">
            Type
          </label>
          <input
            name="type"
            type="text"
            id="type"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="image">
            Image URL
          </label>
          <input
            name="image"
            type="url"
            id="image"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            className="block text-lg font-semibold mb-1"
            htmlFor="location"
          >
            Location
          </label>
          <input
            name="location"
            type="text"
            id="location"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Contact Info */}
        <div className="mb-4">
          <label
            className="block text-lg font-semibold mb-1"
            htmlFor="contactInfo"
          >
            Contact Info
          </label>
          <input
            name="contactInfo"
            type="text"
            id="contactInfo"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}

        <div className="mb-6">
          <label
            className="block text-lg font-semibold mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <div className="mb-6">
          {/* Dropdown for Tags */}
          <label
            className="block text-lg font-semibold mt-4 mb-1"
            htmlFor="tags"
          >
            Select a Tag
          </label>
          <select
            id="tags"
            name="tags"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full p-3 rounded-lg bg-delft-blue border border-periwinkle focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose a Tag</option>
            {nookTags.map((tag) => (
              <option key={tag.label} value={tag.label}>
                {tag.icon} {tag.label}
              </option>
            ))}
          </select>
        </div>
        {/* Submit Button */}
        <SubmitButton
          preSubmissionText="Create Nook"
          postSubmissionText="Nook Created"
          isLoading={isLoading}
          success={success}
          error={error}
          complete={complete}
          reattempt={true}
        />
      </form>
    </div>
  );
};

export default NewNook;
