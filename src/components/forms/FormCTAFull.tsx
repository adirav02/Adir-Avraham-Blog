import { render } from "@react-email/render";
import React, { useState } from "react";
import ConfirmationEmail from "../../emails/ConfirmationEmail";

const InputForm = ({ btnText }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "full-name") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Set button to disabled state
    const formData = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(formData);

    const finalHtml = render(
      <ConfirmationEmail userFirstname={fullName as string} />,
      { pretty: true }
    );

    const finalText = render(
      <ConfirmationEmail userFirstname={fullName as string} />,
      { plainText: true }
    );

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "adir@adiravraham.com",
          to: email,
          subject: `Hi ${fullName}!`,
          html: finalHtml,
          text: finalText,
        }),
      });
      const data = await res.json();
      console.log(data);
      alert("Worked"); // Provide a success message
    } catch (e) {
      console.error(e);
      alert("Error sending email"); // Provide an error message
    } finally {
      setIsSubmitting(false); // Reset button state after processing
    }
  };

  return (
    <form
      className="px-6 flex flex-col justify-center gap-6 lg:max-w-96"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          className="p-3 w-full text-lg border border-solid border-blue-700 rounded-sm placeholder:text-neutral-700 focus:outline-blue-700"
          id="full-name"
          type="text"
          placeholder="First Name"
          name="full-name"
          required
          value={fullName}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="p-3 w-full text-lg border border-solid border-blue-700 rounded-sm placeholder:text-neutral-700 focus:outline-blue-700"
          id="email"
          type="email"
          placeholder="Your Email Address"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className={`p-3 mt-3 w-full text-xl bg-blue-600 text-white border border-solid border-blue-600 transition-all duration-300 rounded-sm lg:mt-0 lg:self-end hover:bg-blue-700 ${
          isSubmitting ? "disabled opacity-50 cursor-not-allowed" : ""
        }`} // Apply disable styles conditionally
      >
        {isSubmitting ? "Sending..." : btnText}
      </button>
    </form>
  );
};

export default InputForm;
