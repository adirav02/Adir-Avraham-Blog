import { w as Fragment, _ as __astro_tag_component__, v as createVNode } from './astro_CYUZCzrY.mjs';
import '@astrojs/internal-helpers/path';
import { a as $$Image } from './pages/__QRq_72KW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

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
    if (age && weight && neck && waist && (height || feet && inches)) {
      const w = parseFloat(weight);
      const n = parseFloat(neck);
      const wa = parseFloat(waist);
      let h;
      if (unit === "metric") {
        h = parseFloat(height);
      } else {
        h = parseFloat(feet) * 30.48 + parseFloat(inches) * 2.54;
      }
      if (isNaN(w) || isNaN(n) || isNaN(wa) || isNaN(h) || w <= 0 || n <= 0 || wa <= 0 || h <= 0) {
        setError("Please enter valid and realistic values.");
        return;
      }
      let bodyFatPercentage;
      if (gender === "male") {
        bodyFatPercentage = 86.01 * Math.log10(wa - n) - 70.041 * Math.log10(h) + 36.76;
      } else {
        bodyFatPercentage = 163.205 * Math.log10(wa + (unit === "metric" ? 0 : 2.54) - n) - 97.684 * Math.log10(h) - 78.387;
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
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto p-4 bg-white rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-blue-600", children: "Body Fat Calculator" }),
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
          children: "Metric"
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
          children: "Imperial"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Age:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          value: age,
          onChange: (e) => setAge(e.target.value),
          max: "150",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block mb-1", children: [
        "Weight (",
        unit === "metric" ? "kg" : "lbs",
        "):"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          value: weight,
          onChange: (e) => setWeight(e.target.value),
          max: "999",
          min: "0"
        }
      )
    ] }),
    unit === "metric" ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Height (cm):" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          value: height,
          onChange: (e) => setHeight(e.target.value),
          max: "999",
          min: "0"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Height (ft):" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
            value: feet,
            onChange: (e) => setFeet(e.target.value),
            max: "9",
            min: "0"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Height (in):" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
            value: inches,
            onChange: (e) => setInches(e.target.value),
            max: "11",
            min: "0"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block mb-1", children: [
        "Neck (",
        unit === "metric" ? "cm" : "inches",
        "):"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          value: neck,
          onChange: (e) => setNeck(e.target.value),
          max: "999",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block mb-1", children: [
        "Waist (",
        unit === "metric" ? "cm" : "inches",
        "):"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          value: waist,
          onChange: (e) => setWaist(e.target.value),
          max: "999",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Gender:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            value: "male",
            checked: gender === "male",
            onChange: () => setGender("male"),
            className: "sr-only",
            id: "gender-male"
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "gender-male",
            className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${gender === "male" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
            children: "Male"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            value: "female",
            checked: gender === "female",
            onChange: () => setGender("female"),
            className: "sr-only",
            id: "gender-female"
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "gender-female",
            className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${gender === "female" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
            children: "Female"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300",
        onClick: calculateBodyFat,
        children: "Calculate"
      }
    ),
    error && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-red-100 rounded-lg text-red-700", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: "Error" }),
      /* @__PURE__ */ jsx("p", { children: error })
    ] }),
    bodyFat && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-gray-100 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-blue-600 mb-2", children: "Results" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "Body Fat Percentage: ",
        /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
          bodyFat,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-2", children: "To reduce body fat, consider a balanced diet and regular exercise. Consult a healthcare provider for personalized advice." })
    ] })
  ] });
};

const frontmatter = {
  "title": "Body Fat Calculator",
  "description": "Estimate your body fat percentage to better understand your fitness level and set realistic health goals!",
  "cover": "../../assets/post-images/body-fat-calculator-image.jpg",
  "coverAlt": "Body Fat Calculator",
  "tags": ["Nutrition", "Build Muscle", "Fat Loss"],
  "relatedPosts": ["how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same", "is-all-this-cardio-really-necessary-for-fat-loss"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "body-fat-calculator",
    "text": "Body Fat Calculator"
  }, {
    "depth": 2,
    "slug": "how-to-calculate-your-body-fat",
    "text": "How to Calculate Your Body Fat"
  }, {
    "depth": 2,
    "slug": "interpreting-your-body-fat-results",
    "text": "Interpreting Your Body Fat Results"
  }, {
    "depth": 2,
    "slug": "recommendations-based-on-your-body-fat-percentage",
    "text": "Recommendations Based on Your Body Fat Percentage"
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
      id: "body-fat-calculator",
      children: "Body Fat Calculator"
    }), "\n", createVNode(_components.p, {
      children: "Understanding your body fat percentage is crucial for assessing your fitness level and overall health. It provides insights into the proportion of fat and lean mass in your body, which can help in setting realistic fitness goals and tracking progress."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-calculate-your-body-fat",
      children: "How to Calculate Your Body Fat"
    }), "\n", createVNode(_components.p, {
      children: "Calculating body fat percentage can be done using various methods such as skinfold measurements, bioelectrical impedance, and more. Our Body Fat Calculator simplifies this process by using readily available inputs to provide an estimate of your body fat percentage."
    }), "\n", createVNode(_components.p, {
      children: "Below, you can use our Body Fat Calculator. Enter the required information to get an estimate of your body fat percentage."
    }), "\n", createVNode(BodyFatCalculator, {
      "client:load": true,
      "client:component-path": "C:/Users/adira/Desktop/Website/src/components/tools/BodyFatCalculator.jsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "interpreting-your-body-fat-results",
      children: "Interpreting Your Body Fat Results"
    }), "\n", createVNode(_components.p, {
      children: "Understanding your body fat percentage helps you gauge your fitness and health status:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Essential Fat"
        }), ": Essential fat is necessary for normal bodily functions. For women, it’s typically 10-13%, and for men, it’s around 2-5%."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Athletes"
        }), ": Athletes usually have a body fat percentage of 14-20% for women and 6-13% for men, reflecting higher muscle mass and lower fat."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Fitness"
        }), ": For individuals who exercise regularly but are not athletes, a healthy range is 21-24% for women and 14-17% for men."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Average"
        }), ": The average body fat percentage is around 25-31% for women and 18-24% for men."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Obese"
        }), ": A body fat percentage over 32% for women and over 25% for men is considered obese."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "recommendations-based-on-your-body-fat-percentage",
      children: "Recommendations Based on Your Body Fat Percentage"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "High Body Fat"
        }), ": Focus on a balanced diet and regular exercise. Incorporate both cardio and strength training to reduce body fat."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Moderate Body Fat"
        }), ": Maintain your current routine but consider fine-tuning your diet and exercise for improved results."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Low Body Fat"
        }), ": Ensure you have a balanced intake of nutrients to support your body’s needs. Avoid extreme diets that might lead to nutrient deficiencies."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "The Body Fat Calculator is a valuable tool for anyone looking to understand their body composition better. By knowing your body fat percentage, you can tailor your fitness and nutrition plans to meet your specific goals. Always consider seeking advice from a healthcare professional for personalized recommendations."
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

const url = "src/content/tools/body-fat-calculator.mdx";
const file = "C:/Users/adira/Desktop/Website/src/content/tools/body-fat-calculator.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/adira/Desktop/Website/src/content/tools/body-fat-calculator.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
