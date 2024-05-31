import { w as Fragment, _ as __astro_tag_component__, v as createVNode } from './astro_CYUZCzrY.mjs';
import '@astrojs/internal-helpers/path';
import { a as $$Image } from './pages/__QRq_72KW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

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
        bmrValue = 10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161);
      } else {
        const weightInKg = w * 0.453592;
        const heightInCm = h * 2.54;
        bmrValue = 10 * weightInKg + 6.25 * heightInCm - 5 * a + (gender === "male" ? 5 : -161);
      }
      setBmr(bmrValue.toFixed(2));
      setCalories((bmrValue * parseFloat(activity)).toFixed(2));
    } else {
      setError("Please fill in all fields correctly.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto p-4 bg-white rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-blue-600", children: "BMR Calculator" }),
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
          children: "kg"
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
          children: "lbs"
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
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs("label", { className: "block mb-1", children: [
        "Height (",
        unit === "metric" ? "cm" : "inches",
        "):"
      ] }),
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
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "block mb-1", children: "Activity Level:" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          className: "w-full p-2 border border-gray-300 rounded focus:outline-blue-700 hover:border-blue-600 transition duration-300",
          value: activity,
          onChange: (e) => setActivity(e.target.value),
          children: [
            /* @__PURE__ */ jsx("option", { value: "1.2", children: "Sedentary: little or no exercise" }),
            /* @__PURE__ */ jsx("option", { value: "1.375", children: "Exercise 1-3 times/week" }),
            /* @__PURE__ */ jsx("option", { value: "1.55", children: "Exercise 4-5 times/week" }),
            /* @__PURE__ */ jsx("option", { value: "1.725", children: "Daily exercise or intense exercise 3-4 times/week" }),
            /* @__PURE__ */ jsx("option", { value: "1.9", children: "Intense exercise 6-7 times/week" }),
            /* @__PURE__ */ jsx("option", { value: "2.2", children: "Very intense exercise daily, or physical job" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300",
        onClick: calculateBMR,
        children: "Calculate"
      }
    ),
    error && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-red-100 rounded-lg text-red-700", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: "Error" }),
      /* @__PURE__ */ jsx("p", { children: error })
    ] }),
    bmr && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-gray-100 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-blue-600 mb-2", children: "Results" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "BMR: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: bmr }),
        " kcal/day"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "Daily Calories: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: calories }),
        " ",
        "kcal/day"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg mt-2", children: [
        "For muscle building:",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: (calories * 1.15).toFixed(2) }),
        " ",
        "kcal/day"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "For weight loss:",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: (calories * 0.85).toFixed(2) }),
        " ",
        "kcal/day"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-2 text-gray-700", children: "These values are estimates and individual needs may vary. Consult with a nutritionist or healthcare provider for personalized advice." })
    ] })
  ] });
};

const frontmatter = {
  "title": "BMR Calculator",
  "description": "Calculate your Basal Metabolic Rate (BMR) to understand your daily caloric needs for effective weight management!",
  "cover": "../../assets/post-images/bmr-calculator-image.jpg",
  "coverAlt": "BMR Calculator",
  "tags": ["Nutrition", "Build Muscle", "Fat Loss"],
  "relatedPosts": ["how-i-boosted-my-bench-press-from-80kg-to-145kg-in-2-years-tips-to-help-you-do-the-same", "is-all-this-cardio-really-necessary-for-fat-loss"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "understanding-your-basal-metabolic-rate-bmr",
    "text": "Understanding Your Basal Metabolic Rate (BMR)"
  }, {
    "depth": 2,
    "slug": "how-to-calculate-your-bmr",
    "text": "How to Calculate Your BMR"
  }, {
    "depth": 2,
    "slug": "interpreting-your-bmr-results",
    "text": "Interpreting Your BMR Results"
  }, {
    "depth": 2,
    "slug": "recommendations-based-on-your-bmr",
    "text": "Recommendations Based on Your BMR"
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
      id: "understanding-your-basal-metabolic-rate-bmr",
      children: "Understanding Your Basal Metabolic Rate (BMR)"
    }), "\n", createVNode(_components.p, {
      children: "Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic physiological functions like breathing, circulation, and cell production while at rest. Knowing your BMR can help you manage your weight more effectively, as it provides a baseline for understanding your daily caloric needs."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-calculate-your-bmr",
      children: "How to Calculate Your BMR"
    }), "\n", createVNode(_components.p, {
      children: "Calculating your BMR requires considering factors such as age, gender, weight, and height. These factors influence the rate at which your body burns calories at rest. By estimating your BMR, you can make more informed decisions about your diet and exercise routine."
    }), "\n", createVNode(_components.p, {
      children: "Below, you can use our BMR calculator to find out your BMR. Just enter your details, including weight, height, age, gender, and activity level, and select the unit of measurement."
    }), "\n", createVNode(BMRCalculator, {
      "client:load": true,
      "client:component-path": "C:/Users/adira/Desktop/Website/src/components/tools/BasalMetabolicRateCalculator.jsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "interpreting-your-bmr-results",
      children: "Interpreting Your BMR Results"
    }), "\n", createVNode(_components.p, {
      children: "Once you have calculated your BMR, you can use this information to better understand your body’s energy requirements:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Daily Caloric Needs"
        }), ": Your BMR represents the number of calories you would burn if you were at rest all day. To estimate your total daily caloric needs, you need to factor in your activity level. Our calculator does this for you by allowing you to select your typical activity level."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Weight Management"
        }), ": To maintain your current weight, you should consume calories equal to your total daily caloric needs. To lose weight, you should consume fewer calories, and to gain weight, you should consume more."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "recommendations-based-on-your-bmr",
      children: "Recommendations Based on Your BMR"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Maintaining Weight"
        }), ": Ensure your daily calorie intake matches your total daily caloric needs. Focus on a balanced diet with a mix of macronutrients (proteins, fats, and carbohydrates)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Losing Weight"
        }), ": Aim to create a calorie deficit by consuming fewer calories than your total daily caloric needs. Combine a balanced diet with regular physical activity."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Gaining Weight"
        }), ": Increase your calorie intake above your total daily caloric needs. Choose nutrient-dense foods and consider strength training to build muscle mass."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Understanding your BMR is a crucial step in managing your weight and overall health. By knowing your BMR and adjusting your caloric intake accordingly, you can achieve your weight goals more effectively. Always consult with healthcare professionals for personalized advice."
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

const url = "src/content/tools/bmr-calculator.mdx";
const file = "C:/Users/adira/Desktop/Website/src/content/tools/bmr-calculator.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/adira/Desktop/Website/src/content/tools/bmr-calculator.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
