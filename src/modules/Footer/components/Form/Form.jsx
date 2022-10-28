import React, { useState } from "react";
import Button from "shared/components/Button";
import Input from "shared/components/Input";

import "./Form.scss";

const initialValue = {
  name: "",
  email: "",
  text: "",
};

const Form = () => {
  const [data, setData] = useState(initialValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submit: ", data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <Input
        className="form__input--margin"
        value={data.name}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        id="name"
        type="text"
        name="name"
        onChange={handleInputChange}
        required
      />

      <Input
        className="form__input--margin"
        value={data.email}
        placeholder="Your email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
        id="email"
        type="email"
        name="email"
        onChange={handleInputChange}
        required
      />

      <Input
        className="form__input--margin"
        value={data.text}
        placeholder="Enter text"
        id="text"
        type="text"
        name="text"
        onChange={handleInputChange}
      />

      <Button secondary medium type="submit" style={{ width: "298px" }}>
        Send
      </Button>
    </form>
  );
};

export default Form;
