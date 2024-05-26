import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    resetForm();
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setRecommendation("");
  };

  const calculateBMI = () => {
    if (weight && height) {
      const w = parseFloat(weight);
      const h = parseFloat(height);

      let bmiValue;
      if (unit === "metric") {
        bmiValue = w / (h / 100) ** 2;
      } else {
        bmiValue = (w / h / h) * 703;
      }

      setBmi(bmiValue.toFixed(2));
      determineCategory(bmiValue);
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory("Underweight");
      setRecommendation(
        "You should consider gaining weight through a balanced diet and strength training."
      );
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory("Normal weight");
      setRecommendation(
        "You have a healthy weight. Maintain it through a balanced diet and regular exercise."
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      setCategory("Overweight");
      setRecommendation(
        "Consider losing weight through a balanced diet and regular exercise."
      );
    } else {
      setCategory("Obese");
      setRecommendation(
        "It's advisable to lose weight. Consult with a healthcare provider for personalized advice."
      );
    }
  };

  const renderBarSpectrum = () => {
    if (!bmi) return null;

    const bmiValue = parseFloat(bmi);
    const minBMI = 10;
    const maxBMI = 40;
    let position = ((bmiValue - minBMI) / (maxBMI - minBMI)) * 100; // Calculate position on the bar spectrum

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    const categoryColors = {
      Underweight: "#93c5fd",
      "Normal weight": "#6ee7b7",
      Overweight: "#fde68a",
      Obese: "#fca5a5",
    };

    const categoryLimits = {
      Underweight: 18.5,
      "Normal weight": 24.9,
      Overweight: 29.9,
      Obese: 30,
    };

    const calculateLimitPosition = (limit) => {
      return ((limit - minBMI) / (maxBMI - minBMI)) * 100;
    };

    return (
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">
          Your BMI: {bmi} ({category})
        </h2>
        <div className="relative w-full h-16 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-16 rounded-full"
            style={{
              width: `${position}%`,
              backgroundColor: categoryColors[category],
            }}
          ></div>
          {Object.keys(categoryLimits).map((key) => (
            <div
              key={key}
              className="absolute top-0 h-16 border-r-2"
              style={{
                left: `${calculateLimitPosition(categoryLimits[key])}%`,
                borderColor: categoryColors[key],
                zIndex: 1,
              }}
            ></div>
          ))}
          <div className="absolute w-full h-full flex justify-between items-center text-lg font-bold text-black px-2 ">
            <span
              className="w-1/4 text-center text-blue-600"
              style={{ marginLeft: "-1%" }}
            >
              Underweight
            </span>
            <span
              className="w-1/4 text-center text-green-600"
              style={{ marginLeft: "-1%" }}
            >
              Normal
            </span>
            <span
              className="w-1/4 text-center text-yellow-600"
              style={{ marginLeft: "-1%" }}
            >
              Overweight
            </span>
            <span
              className="w-1/4 text-center text-red-600"
              style={{ marginLeft: "-1%" }}
            >
              Obese
            </span>
          </div>
        </div>
        <div className="flex justify-between text-lg font-bold mt-2 text-gray-700">
          <span className="w-1/4 text-center">{"< 18.5"}</span>
          <span className="w-1/4 text-center">18.5 - 24.9</span>
          <span className="w-1/4 text-center">25 - 29.9</span>
          <span className="w-1/4 text-center">{">= 30"}</span>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-700">
            {recommendation}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">BMI Calculator</h1>
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
          kg/cm
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
          lbs/inches
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Weight ({unit === "metric" ? "kg" : "lbs"}):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 hover:border-blue-600"
          max="999"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Height ({unit === "metric" ? "cm" : "inches"}):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 hover:border-blue-600"
          max="300"
          min="0"
        />
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={calculateBMI}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Calculate BMI
        </button>
      </div>
      {renderBarSpectrum()}
    </div>
  );
};

export default BMICalculator;
