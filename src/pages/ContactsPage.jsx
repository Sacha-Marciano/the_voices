import { LangContext } from "@/contexts/LangContext";
import React, { useContext, useState } from "react";

import { form } from "@/config";

const ContactsPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const { lang } = useContext(LangContext);

  const text = form[lang];

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="lg:flex items-center justify-center p-4 gap-6">
      <div className="bg-primary w-full self-start text-white p-4 rounded-lg">
        <h2 className="text-3xl font-extrabold mb-4">{text.title}</h2>
        {text.description.split(",").map((item, index) => {
          return (
            <p className="font-bold my-2" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col min-w-[50%]">
        <label
          className="p-2 font-semibold text-2xl text-primary"
          htmlFor="name"
        >
          {text.name}
        </label>
        <input
          className="mb-4 p-2 rounded-lg"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
        <label
          className="p-2 font-semibold text-2xl text-primary"
          htmlFor="phone"
        >
          {text.phone}
        </label>
        <input
          className="mb-4 p-2 rounded-lg"
          name="phone"
          id="phone"
          type="tel"
          required
          onChange={handleChange}
        />
        <label
          className="p-2 font-semibold text-2xl text-primary"
          htmlFor="email"
        >
          {text.email}
        </label>
        <input
          className="mb-4 p-2 rounded-lg"
          name="email"
          id="email"
          type="email"
          required
          onChange={handleChange}
        />
        <label
          className="p-2 font-semibold text-2xl text-primary"
          htmlFor="note"
        >
          {text.note}
        </label>
        <textarea
          className="mb-4 p-2 rounded-lg h-36"
          name="note"
          id="note"
          type="text"
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-primary rounded-lg text-white text-3xl p-2 self-center"
        >
          {text.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactsPage;
