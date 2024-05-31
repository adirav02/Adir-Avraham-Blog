import React, { useState } from "react";
import ConfirmationEmail from "../../emails/ConfirmationEmail";
import { render } from "@react-email/render";
import { v4 as uuidv4 } from "uuid";
import Popup from "../Popup";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOpenPopup = () => setIsPopupDisplayed(true);
  const handleClosePopup = () => setIsPopupDisplayed(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(formData);
    const fullName = " ";
    const id = uuidv4();
    console.log(id);

    const finalHtml = render(
      <ConfirmationEmail userFirstname={fullName as string} />,
      { pretty: true }
    );

    const finalText = render(
      <ConfirmationEmail userFirstname={fullName as string} />,
      { plainText: true }
    );

    // Add to db
    try {
      const res = await fetch("/api/addEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          fullName,
          email,
        }),
      });

      const { success, data, message } = await res.json();
      if (success) {
        console.log("Added to db, sending email...");

        // Send Email
        try {
          const res = await fetch("/api/sendEmail.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "adir@adiravraham.com",
              to: email,
              subject: "Hi!",
              html: finalHtml,
              text: finalText,
            }),
          });
          const data = await res.json();
          console.log(data);
          console.log("Success, email sent");
          // **Conditional Popup Display**
          setSuccess(true);
          setIsPopupDisplayed(true);
        } catch (e) {
          console.error(e);
          // Provide an error message (optional)
          setSuccess(false);
          setIsPopupDisplayed(true);
        }
      } else {
        throw new Error(message);
      }
    } catch (e) {
      if (e instanceof Error) {
        setSuccess(false);
        setIsPopupDisplayed(true);
      }
      console.error(e);
    } finally {
      setIsSubmitting(false);
      setEmail("");
    }
  };
  return (
    <div>
      <form
        className="px-6 flex flex-col justify-center gap-6 md:px-24 lg:flex-row lg:justify-normal lg:px-0"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Adress
          </label>
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
          className={`p-3 mt-3 text-xl bg-blue-600 text-white border border-solid border-blue-700 transition-all duration-300 rounded-sm lg:mt-0 lg:self-end hover:bg-blue-700 ${
            isSubmitting ? "disabled opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {isPopupDisplayed && (
        <Popup onClose={() => handleClosePopup()} success={success} />
      )}
    </div>
  );
};

export default EmailSignupForm;
