const Popup = ({ onClose, success }) => {
  return (
    <div
      className={`popup fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        onClose ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-6 rounded-sm shadow-md">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">Thank you!</h3>
        <p>The workout log is sent to your email</p>
        <button
          className={`p-3 w-full text-xl bg-blue-600 text-white border border-solid border-blue-600 transition-all duration-300 rounded-sm lg:mt-0 lg:self-end hover:bg-blue-700`}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
