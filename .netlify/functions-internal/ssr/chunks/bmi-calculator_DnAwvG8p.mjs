import { w as Fragment, _ as __astro_tag_component__, v as createVNode } from './astro_CYUZCzrY.mjs';
import '@astrojs/internal-helpers/path';
import { a as $$Image } from './pages/__QRq_72KW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCm, setHeightCm] = useState("");
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
    setHeightFeet("");
    setHeightInches("");
    setHeightCm("");
    setBmi(null);
    setCategory("");
    setRecommendation("");
  };
  const calculateBMI = () => {
    if (weight && (unit === "metric" ? heightCm : heightFeet && heightInches)) {
      const w = parseFloat(weight);
      let bmiValue;
      if (unit === "metric") {
        const h = parseFloat(heightCm);
        bmiValue = w / (h / 100) ** 2;
      } else {
        const hFeet = parseFloat(heightFeet);
        const hInches = parseFloat(heightInches);
        const hTotalInches = hFeet * 12 + hInches;
        bmiValue = w / hTotalInches / hTotalInches * 703;
      }
      setBmi(bmiValue.toFixed(2));
      determineCategory(bmiValue);
    }
  };
  const determineCategory = (bmi2) => {
    if (bmi2 < 18.5) {
      setCategory("Underweight");
      setRecommendation(
        "You should consider gaining weight through a balanced diet and strength training."
      );
    } else if (bmi2 >= 18.5 && bmi2 < 24.9) {
      setCategory("Normal weight");
      setRecommendation(
        "You have a healthy weight. Maintain it through a balanced diet and regular exercise."
      );
    } else if (bmi2 >= 25 && bmi2 < 29.9) {
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
    if (!bmi)
      return null;
    const bmiValue = parseFloat(bmi);
    const minBMI = 10;
    const maxBMI = 40;
    let position = (bmiValue - minBMI) / (maxBMI - minBMI) * 100;
    if (position < 0)
      position = 0;
    if (position > 100)
      position = 100;
    const categoryColors = {
      Underweight: "#93c5fd",
      "Normal weight": "#6ee7b7",
      Overweight: "#fde68a",
      Obese: "#fca5a5"
    };
    const categoryLimits = {
      Underweight: 18.5,
      "Normal weight": 24.9,
      Overweight: 29.9,
      Obese: 30
    };
    const calculateLimitPosition = (limit) => {
      return (limit - minBMI) / (maxBMI - minBMI) * 100;
    };
    return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-bold mb-2", children: [
        "Your BMI: ",
        bmi,
        " (",
        category,
        ")"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full h-16 bg-gray-300 rounded-full", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 left-0 h-16 rounded-full",
            style: {
              width: `${position}%`,
              backgroundColor: categoryColors[category]
            }
          }
        ),
        Object.keys(categoryLimits).map((key) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 h-16 border-r-2",
            style: {
              left: `${calculateLimitPosition(categoryLimits[key])}%`,
              borderColor: categoryColors[key],
              zIndex: 1
            }
          },
          key
        )),
        /* @__PURE__ */ jsxs("div", { className: "absolute w-full h-full flex justify-between items-center text-lg font-bold text-black px-2 ", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-1/4 text-center text-blue-600",
              style: { marginLeft: "-1%" },
              children: "Underweight"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-1/4 text-center text-green-600",
              style: { marginLeft: "-1%" },
              children: "Normal"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-1/4 text-center text-yellow-600",
              style: { marginLeft: "-1%" },
              children: "Overweight"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-1/4 text-center text-red-600",
              style: { marginLeft: "-1%" },
              children: "Obese"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-lg font-bold mt-2 text-gray-700", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1/4 text-center", children: "< 18.5" }),
        /* @__PURE__ */ jsx("span", { className: "w-1/4 text-center", children: "18.5 - 24.9" }),
        /* @__PURE__ */ jsx("span", { className: "w-1/4 text-center", children: "25 - 29.9" }),
        /* @__PURE__ */ jsx("span", { className: "w-1/4 text-center", children: ">= 30" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-gray-700", children: recommendation }) })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto p-6 bg-white rounded-md shadow-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-blue-600", children: "BMI Calculator" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          value: "metric",
          checked: unit === "metric",
          onChange: () => handleUnitChange("metric"),
          className: "sr-only",
          id: "unit-metric"
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "unit-metric",
          className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${unit === "metric" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
          children: "kg/cm"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          value: "imperial",
          checked: unit === "imperial",
          onChange: () => handleUnitChange("imperial"),
          className: "sr-only",
          id: "unit-imperial"
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "unit-imperial",
          className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${unit === "imperial" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
          children: "lbs/ft+in"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: [
        "Weight (",
        unit === "metric" ? "kg" : "lbs",
        "):"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          value: weight,
          onChange: (e) => setWeight(e.target.value),
          required: true,
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          max: "999",
          min: "0"
        }
      )
    ] }),
    unit === "metric" ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Height (cm):" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          value: heightCm,
          onChange: (e) => setHeightCm(e.target.value),
          required: true,
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          max: "300",
          min: "0"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Height:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: heightFeet,
            onChange: (e) => setHeightFeet(e.target.value),
            required: true,
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
            max: "9",
            min: "0",
            placeholder: "ft"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: heightInches,
            onChange: (e) => setHeightInches(e.target.value),
            required: true,
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
            max: "11",
            min: "0",
            placeholder: "in"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: calculateBMI,
        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300",
        children: "Calculate BMI"
      }
    ) }),
    renderBarSpectrum()
  ] });
};

const frontmatter = {
  "title": "BMI Calculator",
  "description": "Estimate your BMI with our simple calculator to understand your weight category and its health implications!",
  "cover": "../../assets/post-images/bmi-calculator-image.jpg",
  "coverAlt": "BMI Calculator",
  "tags": ["Nutrition", "Build Muscle", "Fat Loss"],
  "relatedPosts": ["how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same", "is-all-this-cardio-really-necessary-for-fat-loss"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "understanding-your-bmi",
    "text": "Understanding Your BMI"
  }, {
    "depth": 2,
    "slug": "how-to-calculate-your-bmi",
    "text": "How to Calculate Your BMI"
  }, {
    "depth": 2,
    "slug": "bmi-categories-and-their-implications",
    "text": "BMI Categories and Their Implications"
  }, {
    "depth": 2,
    "slug": "recommendations-based-on-your-bmi",
    "text": "Recommendations Based on Your BMI"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "understanding-your-bmi",
      children: "Understanding Your BMI"
    }), "\n", createVNode(_components.p, {
      children: "Body Mass Index (BMI) is a simple calculation using a person’s height and weight. The formula is BMI = kg/m² where kg is a person’s weight in kilograms and m² is their height in meters squared. A BMI between 18.5 and 24.9 is considered normal, while a BMI below 18.5 is considered underweight, and a BMI of 25 or above is considered overweight or obese."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-calculate-your-bmi",
      children: "How to Calculate Your BMI"
    }), "\n", createVNode(_components.p, {
      children: "Calculating your BMI can give you a general idea of whether you’re underweight, normal weight, overweight, or obese. However, it doesn’t measure body fat directly. Therefore, it’s important to consider other factors like muscle mass, bone density, and overall body composition when interpreting your BMI."
    }), "\n", createVNode(_components.p, {
      children: "Below, you can use our simple BMI calculator to find out your BMI. Just enter your weight and height, and select the unit of measurement."
    }), "\n", createVNode(BMICalculator, {
      "client:load": true,
      "client:component-path": "C:/Users/adira/Desktop/Website/src/components/tools/BMICalculator.jsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "bmi-categories-and-their-implications",
      children: "BMI Categories and Their Implications"
    }), "\n", createVNode(_components.p, {
      children: "Your BMI falls into one of several categories, each of which has different implications for your health:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Underweight (BMI < 18.5)"
        }), ": Being underweight can be a sign of malnutrition, underlying disease, or other health issues. It’s advisable to consult with a healthcare provider to determine the cause and appropriate steps."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Normal weight (BMI 18.5 - 24.9)"
        }), ": This range is considered healthy for most people. Maintaining this weight can help reduce the risk of developing serious health conditions."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Overweight (BMI 25 - 29.9)"
        }), ": Being overweight increases the risk of cardiovascular diseases, type 2 diabetes, and other health issues. Lifestyle changes, such as improved diet and increased physical activity, can help manage weight."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Obese (BMI ≥ 30)"
        }), ": Obesity significantly increases the risk of serious health conditions, including heart disease, diabetes, and certain cancers. It’s important to seek medical advice to create a weight loss plan that includes diet, exercise, and possibly medical interventions."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "recommendations-based-on-your-bmi",
      children: "Recommendations Based on Your BMI"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Underweight"
        }), ": Consider gaining weight through a balanced diet that includes nutritious, calorie-dense foods. Strength training exercises can help build muscle mass."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Normal weight"
        }), ": Maintain your healthy weight by continuing to eat a balanced diet and engaging in regular physical activity."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Overweight"
        }), ": Aim to lose weight by making dietary changes, increasing physical activity, and possibly seeking guidance from a healthcare provider."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Obese"
        }), ": Consult with a healthcare provider to develop a comprehensive weight loss plan that includes dietary changes, increased physical activity, and possibly medical treatments."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "BMI is a useful screening tool to understand your weight category and its potential impact on your health. However, it should be used as part of a broader assessment of your overall health. Always consult with healthcare professionals for personalized health advice."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/tools/bmi-calculator.mdx";
const file = "C:/Users/adira/Desktop/Website/src/content/tools/bmi-calculator.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/adira/Desktop/Website/src/content/tools/bmi-calculator.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
