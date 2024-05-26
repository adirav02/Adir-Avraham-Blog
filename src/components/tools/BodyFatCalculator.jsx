import React, { useState } from "react";

const BodyFatCalculator = () => {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [gender, setGender] = useState("male");
  const [bodyFat, setBodyFat] = useState(null);
  const [error, setError] = useState("");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    resetForm();
  };

  const resetForm = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setFeet("");
    setInches("");
    setNeck("");
    setWaist("");
    setGender("male");
    setBodyFat(null);
    setError("");
  };

  const calculateBodyFat = () => {
    setError("");
    if (age && weight && neck && waist && (height || (feet && inches))) {
      const w = parseFloat(weight);
      const n = parseFloat(neck);
      const wa = parseFloat(waist);

      let h;
      if (unit === "metric") {
        h = parseFloat(height);
      } else {
        h = parseFloat(feet) * 30.48 + parseFloat(inches) * 2.54;
      }

      if (
        isNaN(w) ||
        isNaN(n) ||
        isNaN(wa) ||
        isNaN(h) ||
        w <= 0 ||
        n <= 0 ||
        wa <= 0 ||
        h <= 0
      ) {
        setError("Please enter valid and realistic values.");
        return;
      }

      let bodyFatPercentage;
      if (gender === "male") {
        bodyFatPercentage =
          86.01 * Math.log10(wa - n) - 70.041 * Math.log10(h) + 36.76;
      } else {
        bodyFatPercentage =
          163.205 * Math.log10(wa + (unit === "metric" ? 0 : 2.54) - n) -
          97.684 * Math.log10(h) -
          78.387;
      }

      if (isNaN(bodyFatPercentage) || bodyFatPercentage <= 0) {
        setError("Please enter valid and realistic values.");
      } else {
        setBodyFat(bodyFatPercentage.toFixed(2));
      }
    } else {
      setError("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Body Fat Calculator
      </h1>
      <div className="mb-4 flex items-center gap-1">
        <input
          type="radio"
          value="metric"
          checked={unit === "metric"}
          onChange={() => handleUnitChange("metric")}
          className="sr-only"
          id="unit-metric"
        />
        <label
          htmlFor="unit-metric"
          className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
            unit === "metric"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } hover:border-blue-600`}
        >
          Metric
        </label>
        <input
          type="radio"
          value="imperial"
          checked={unit === "imperial"}
          onChange={() => handleUnitChange("imperial")}
          className="sr-only"
          id="unit-imperial"
        />
        <label
          htmlFor="unit-imperial"
          className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
            unit === "imperial"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } hover:border-blue-600`}
        >
          Imperial
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Age:</label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          max="150"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Weight ({unit === "metric" ? "kg" : "lbs"}):
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          max="999"
          min="0"
        />
      </div>
      {unit === "metric" ? (
        <div className="mb-4">
          <label className="block mb-1">Height (cm):</label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            max="999"
            min="0"
          />
        </div>
      ) : (
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block mb-1">Height (ft):</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              max="9"
              min="0"
            />
          </div>
          <div>
            <label className="block mb-1">Height (in):</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              max="11"
              min="0"
            />
          </div>
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-1">
          Neck ({unit === "metric" ? "cm" : "inches"}):
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          value={neck}
          onChange={(e) => setNeck(e.target.value)}
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Waist ({unit === "metric" ? "cm" : "inches"}):
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Gender:</label>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
            className="sr-only"
            id="gender-male"
          />
          <label
            htmlFor="gender-male"
            className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
              gender === "male"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } hover:border-blue-600`}
          >
            Male
          </label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
            className="sr-only"
            id="gender-female"
          />
          <label
            htmlFor="gender-female"
            className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
              gender === "female"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } hover:border-blue-600`}
          >
            Female
          </label>
        </div>
      </div>
      <button
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={calculateBodyFat}
      >
        Calculate
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg text-red-700">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
      {bodyFat && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Results</h2>
          <p className="text-lg">
            Body Fat Percentage: <span className="font-bold">{bodyFat}%</span>
          </p>
          <p className="text-lg mt-2">
            To reduce body fat, consider a balanced diet and regular exercise.
            Consult a healthcare provider for personalized advice.
          </p>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;
