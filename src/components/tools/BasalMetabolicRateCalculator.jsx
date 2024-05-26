import React, { useState } from "react";

const BMRCalculator = () => {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [bmr, setBmr] = useState(null);
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    resetForm();
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setActivity("1.2");
    setBmr(null);
    setCalories(null);
    setError("");
  };

  const calculateBMR = () => {
    setError("");
    if (weight && height && age) {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseInt(age);

      if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
        setError("Please enter valid and realistic values.");
        return;
      }

      let bmrValue;
      if (unit === "metric") {
        // Metric BMR calculation
        bmrValue = 10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161);
      } else {
        // Imperial BMR calculation
        const weightInKg = w * 0.453592;
        const heightInCm = h * 2.54;
        bmrValue =
          10 * weightInKg +
          6.25 * heightInCm -
          5 * a +
          (gender === "male" ? 5 : -161);
      }

      setBmr(bmrValue.toFixed(2));
      setCalories((bmrValue * parseFloat(activity)).toFixed(2));
    } else {
      setError("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">BMR Calculator</h1>
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
          kg
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
          lbs
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Weight ({unit === "metric" ? "kg" : "lbs"}):
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded focus:border-blue-700 hover:border-blue-600 transition duration-300"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Height ({unit === "metric" ? "cm" : "inches"}):
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded focus:border-blue-700 hover:border-blue-600 transition duration-300"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Age:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded focus:border-blue-700 hover:border-blue-600 transition duration-300"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          max="150"
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
      <div className="mb-4">
        <label className="block mb-1">Activity Level:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded focus:border-blue-700 hover:border-blue-600 transition duration-300"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="1.2">Sedentary: little or no exercise</option>
          <option value="1.375">Exercise 1-3 times/week</option>
          <option value="1.55">Exercise 4-5 times/week</option>
          <option value="1.725">
            Daily exercise or intense exercise 3-4 times/week
          </option>
          <option value="1.9">Intense exercise 6-7 times/week</option>
          <option value="2.2">
            Very intense exercise daily, or physical job
          </option>
        </select>
      </div>
      <button
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={calculateBMR}
      >
        Calculate
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg text-red-700">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
      {bmr && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Results</h2>
          <p className="text-lg">
            BMR: <span className="font-bold">{bmr}</span> kcal/day
          </p>
          <p className="text-lg">
            Daily Calories: <span className="font-bold">{calories}</span>{" "}
            kcal/day
          </p>
          <p className="text-lg mt-2">
            For muscle building:{" "}
            <span className="font-bold">{(calories * 1.15).toFixed(2)}</span>{" "}
            kcal/day
          </p>
          <p className="text-lg">
            For weight loss:{" "}
            <span className="font-bold">{(calories * 0.85).toFixed(2)}</span>{" "}
            kcal/day
          </p>
          <p className="text-sm mt-2 text-gray-700">
            These values are estimates and individual needs may vary. Consult
            with a nutritionist or healthcare provider for personalized advice.
          </p>
        </div>
      )}
    </div>
  );
};

export default BMRCalculator;
