import React, { useState } from "react";
import UnsubscribePopup from "./UnsubscribePopup";
import { navigate } from "astro:transitions/client";

const EmailSettings = ({ id, email, currentFullName }) => {
  const [fullName, setFullName] = useState(currentFullName);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "full-name") {
      setFullName(value);
    }
  };

  const handlePatch = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      await fetch(`/api/${id}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName }),
      });
      alert("Patched");
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await fetch(`/api/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenPopup = () => setIsPopupDisplayed(true);
  const handleClosePopup = () => setIsPopupDisplayed(false);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 gap-10 w-full max-w-96  mx-auto">
      {/* Update email */}
      <form onSubmit={handlePatch} className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Name:</label>
          <input
            className="p-3 text-lg border border-solid border-blue-700 rounded-sm placeholder:text-neutral-700 focus:outline-blue-700"
            id="full-name"
            type="text"
            placeholder="First Name"
            name="full-name"
            value={fullName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg">Email:</label>
          <input
            className="p-3 bg-neutral-300 text-lg border border-solid border-neutral-600 rounded-sm cursor-not-allowed focus:outline-none"
            id="email"
            type="text"
            name="email"
            required
            readOnly
            value={email}
          />
        </div>

        <button
          type="submit"
          className={`p-3 text-xl bg-blue-600 text-white border border-solid border-blue-600 transition-all duration-300 rounded-sm hover:bg-blue-700 ${
            isSubmitting ? "disabled opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Update"}
        </button>
      </form>

      <hr className="w-full" />

      {/* Unsubscribe */}
      <div className="w-full">
        <button
          className="p-3 w-full text-xl bg-red-600 text-white border border-solid border-red-600 transition-all duration-300 rounded-sm hover:bg-red-700"
          onClick={handleOpenPopup}
        >
          Unsubscribe
        </button>
      </div>
      {isPopupDisplayed && (
        <UnsubscribePopup
          onClose={handleClosePopup}
          onUnsubscribe={handleUnsubscribe}
        />
      )}
    </div>
  );
};

export default EmailSettings;
