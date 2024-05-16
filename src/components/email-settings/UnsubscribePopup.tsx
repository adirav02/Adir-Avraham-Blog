import React from "react";

const UnsubscribePopup = ({ onClose, onUnsubscribe }) => (
  <div
    className={`popup fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
      onClose ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="mb-3 text-2xl font-bold text-gray-900">
        Important: Unsubscribing will permanently remove you from receiving
        updates.
      </h3>
      <p>Click "Unsubscribe" to confirm.</p>
      <button
        className={`p-3 w-full text-xl bg-red-600 text-white border border-solid border-red-600 transition-all duration-300 rounded-sm lg:mt-0 lg:self-end hover:bg-red-700`}
        onClick={onUnsubscribe}
      >
        Unsubscribe
      </button>
    </div>
  </div>
);

export default UnsubscribePopup;
