import React, { useState } from "react";

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState(null);
  const [unit, setUnit] = useState("kg"); // Default unit is kilograms
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState("");

  const calculateOneRepMax = (weight, reps) => {
    if (unit === "kg") {
      return Math.round(weight * (1 + reps / 30));
    } else {
      // Convert weight to kilograms
      const weightKg = weight * 0.453592; // 1 pound = 0.453592 kilograms
      return Math.round(weightKg * (1 + reps / 30));
    }
  };

  const handleCalculate = () => {
    setError("");
    if (weight && reps) {
      const w = parseFloat(weight);
      const r = parseInt(reps);

      if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0) {
        setError("Please enter valid and realistic values.");
        return;
      }

      const max = calculateOneRepMax(w, r);
      setOneRepMax(max);
      setShowTable(true);
    } else {
      setError("Please fill in all fields correctly.");
    }
  };

  const handleUnitChange = (selectedUnit) => {
    if (selectedUnit !== unit) {
      setUnit(selectedUnit);
      setWeight("");
      setReps("");
      setOneRepMax(null);
      setShowTable(false);
    }
  };

  const renderTable = () => {
    if (!showTable) return null;

    const percentages = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5];
    return (
      <div>
        <h2 className="text-lg font-bold mt-4 mb-2">1RM Table</h2>
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">
                1RM Percentage
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Calculated 1RM
              </th>
            </tr>
          </thead>
          <tbody>
            {percentages.map((percentage) => (
              <tr key={percentage}>
                <td className="border border-gray-400 px-4 py-2">
                  {Math.round(percentage * 100)}%
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {Math.round(percentage * oneRepMax)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        One Rep Max Calculator
      </h1>
      <div className="mb-4 flex items-center gap-1">
        <input
          type="radio"
          value="kg"
          checked={unit === "kg"}
          onChange={() => handleUnitChange("kg")}
          className="sr-only"
          id="unit-kg"
        />
        <label
          htmlFor="unit-kg"
          className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
            unit === "kg" ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          } hover:border-blue-600`}
        >
          kg
        </label>
        <input
          type="radio"
          value="lbs"
          checked={unit === "lbs"}
          onChange={() => handleUnitChange("lbs")}
          className="sr-only"
          id="unit-lbs"
        />
        <label
          htmlFor="unit-lbs"
          className={`text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${
            unit === "lbs" ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          } hover:border-blue-600`}
        >
          lbs
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Weight ({unit === "kg" ? "kg" : "lbs"}):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Reps:
        </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline"
          max="50"
          min="0"
        />
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={handleCalculate}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Calculate 1RM
        </button>
      </div>
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg text-red-700">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
      {oneRepMax !== null && (
        <h2 className="text-lg font-bold mb-4">
          Your estimated 1RM is {oneRepMax} {unit}
        </h2>
      )}
      {renderTable()}
    </div>
  );
};

export default OneRepMaxCalculator;
