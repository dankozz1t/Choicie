import React, { useState } from "react";

import Container from "shared/components/Container";
import Button from "shared/components/Button";
import Input from "shared/components/Input";

import "./SubscribeSection.scss";

const SubscribeSection = () => {
  const [input, setInput] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submit: ", input);
  };

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <section className="subscribe">
      <Container className="subscribe__container">
        <div>
          <h2 className="subscribe__title">
            Subscribe and become a part of Choicie
          </h2>
          <p className="subscribe__description">
            Leave your email and get all the information about product updates,
            blog updates, exclusive updates.
          </p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <Input
            className="subscribe__input--margin"
            value={input}
            placeholder="Your email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            required
          />
          <Button secondary medium type="submit" className="subscribe__button">
            Register to Newsletter
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default SubscribeSection;
