import { w as Fragment, _ as __astro_tag_component__, v as createVNode } from './astro_CYUZCzrY.mjs';
import '@astrojs/internal-helpers/path';
import { a as $$Image } from './pages/__QRq_72KW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState(null);
  const [unit, setUnit] = useState("kg");
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState("");
  const calculateOneRepMax = (weight2, reps2) => {
    if (unit === "kg") {
      return Math.round(weight2 * (1 + reps2 / 30));
    } else {
      const weightKg = weight2 * 0.453592;
      return Math.round(weightKg * (1 + reps2 / 30));
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
    if (!showTable)
      return null;
    const percentages = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5];
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold mt-4 mb-2", children: "1RM Table" }),
      /* @__PURE__ */ jsxs("table", { className: "border-collapse border border-gray-400 w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "border border-gray-400 px-4 py-2", children: "1RM Percentage" }),
          /* @__PURE__ */ jsx("th", { className: "border border-gray-400 px-4 py-2", children: "Calculated 1RM" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: percentages.map((percentage) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsxs("td", { className: "border border-gray-400 px-4 py-2", children: [
            Math.round(percentage * 100),
            "%"
          ] }),
          /* @__PURE__ */ jsx("td", { className: "border border-gray-400 px-4 py-2", children: Math.round(percentage * oneRepMax) })
        ] }, percentage)) })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto p-6 bg-white rounded-md shadow-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-blue-600", children: "One Rep Max Calculator" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          value: "kg",
          checked: unit === "kg",
          onChange: () => handleUnitChange("kg"),
          className: "sr-only",
          id: "unit-kg"
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "unit-kg",
          className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${unit === "kg" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
          children: "kg"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          value: "lbs",
          checked: unit === "lbs",
          onChange: () => handleUnitChange("lbs"),
          className: "sr-only",
          id: "unit-lbs"
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "unit-lbs",
          className: `text-gray-700 text-lg font-bold py-2 px-4 rounded select-none cursor-pointer hover:shadow-hover hover:shadow-blue-600 focus:outline-none transition duration-300 ${unit === "lbs" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:border-blue-600`,
          children: "lbs"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: [
        "Weight (",
        unit === "kg" ? "kg" : "lbs",
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
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Reps:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          value: reps,
          onChange: (e) => setReps(e.target.value),
          required: true,
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-700 hover:border-blue-600 leading-tight focus:outline-none transition duration-300 focus:shadow-outline",
          max: "50",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleCalculate,
        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300",
        children: "Calculate 1RM"
      }
    ) }),
    error && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-red-100 rounded-lg text-red-700", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: "Error" }),
      /* @__PURE__ */ jsx("p", { children: error })
    ] }),
    oneRepMax !== null && /* @__PURE__ */ jsxs("h2", { className: "text-lg font-bold mb-4", children: [
      "Your estimated 1RM is ",
      oneRepMax,
      " ",
      unit
    ] }),
    renderTable()
  ] });
};

const frontmatter = {
  "title": "1 Rep Max Calculator",
  "description": "Estimate your maximum lift capacity with our 1 Rep Max Calculator",
  "cover": "../../assets/post-images/1rm-calculator-image.jpg",
  "coverAlt": "1 Rep Max Calculator",
  "tags": ["Strength", "Build Muscle"],
  "relatedPosts": ["how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same", "is-all-this-cardio-really-necessary-for-fat-loss"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "1-rep-max-calculator",
    "text": "1 Rep Max Calculator"
  }, {
    "depth": 2,
    "slug": "how-to-calculate-your-1rm",
    "text": "How to Calculate Your 1RM"
  }, {
    "depth": 2,
    "slug": "interpreting-your-1rm-results",
    "text": "Interpreting Your 1RM Results"
  }, {
    "depth": 2,
    "slug": "recommendations-based-on-your-1rm",
    "text": "Recommendations Based on Your 1RM"
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
      id: "1-rep-max-calculator",
      children: "1 Rep Max Calculator"
    }), "\n", createVNode(_components.p, {
      children: "Knowing your one-rep max (1RM) is crucial for understanding your strength capacity for any given lift. It represents the maximum weight you can lift for a single repetition of an exercise and serves as a benchmark for setting training goals and tracking progress."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-calculate-your-1rm",
      children: "How to Calculate Your 1RM"
    }), "\n", createVNode(_components.p, {
      children: "Calculating your 1RM can be done using various formulas, but the most practical method is to use a calculator that estimates your 1RM based on the weight you lifted and the number of repetitions performed. This method is safer than attempting a true 1RM lift, which can carry a risk of injury."
    }), "\n", createVNode(_components.p, {
      children: "Below, you can use our 1 Rep Max Calculator. Enter the weight you lifted and the number of reps to get an estimate of your 1RM. Choose the unit of measurement (kg or lbs) as per your preference."
    }), "\n", createVNode(OneRepMaxCalculator, {
      "client:load": true,
      "client:component-path": "C:/Users/adira/Desktop/Website/src/components/tools/OneRepMaxCalculator.jsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "interpreting-your-1rm-results",
      children: "Interpreting Your 1RM Results"
    }), "\n", createVNode(_components.p, {
      children: "Understanding your 1RM can help you design an effective workout program:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Strength Training"
        }), ": Use your 1RM to determine the appropriate weights for different exercises. For example, for strength training, you might work at 75-85% of your 1RM."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Progress Tracking"
        }), ": Regularly calculating your 1RM helps you monitor progress and adjust your training regimen accordingly."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Goal Setting"
        }), ": Set realistic strength goals based on your current 1RM and plan your training to progressively achieve higher weights."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "recommendations-based-on-your-1rm",
      children: "Recommendations Based on Your 1RM"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Building Strength"
        }), ": Train with weights that are 70-85% of your 1RM. Focus on low repetitions (4-6 reps) with higher sets (3-5 sets)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Muscle Endurance"
        }), ": Use lighter weights, around 50-70% of your 1RM, with higher repetitions (12-15 reps) and moderate sets (3-4 sets)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hypertrophy (Muscle Growth)"
        }), ": Lift weights that are 60-75% of your 1RM with moderate repetitions (8-12 reps) and sets (3-4 sets)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "The 1 Rep Max Calculator is an invaluable tool for anyone looking to improve their strength training regimen. By understanding and utilizing your 1RM, you can optimize your workouts, track your progress, and achieve your fitness goals more effectively. Always prioritize safety and consider consulting with a fitness professional for personalized guidance."
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

const url = "src/content/tools/1-rep-max-calculator.mdx";
const file = "C:/Users/adira/Desktop/Website/src/content/tools/1-rep-max-calculator.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/adira/Desktop/Website/src/content/tools/1-rep-max-calculator.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
