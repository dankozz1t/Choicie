import React, { useState } from "react";

import Button from "shared/components/Button";

import "./PostForm.scss";

const initialValue = {
  title: "",
  body: "",
};

const PostForm = ({ onSubmit }) => {
  const [post, setPost] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      type="action"
      onSubmit={(e) => onSubmit(e, post)}
      className="demo-form"
    >
      <input
        className="demo-form__input"
        value={post.title}
        placeholder="title"
        id="title"
        type="text"
        name="title"
        onChange={handleInputChange}
        required
      />

      <input
        className="demo-form__input"
        value={post.body}
        placeholder="body"
        id="body"
        type="text"
        name="body"
        onChange={handleInputChange}
        required
      />
      <Button secondary small type="submit" className="demo-form__button">
        create
      </Button>
    </form>
  );
};

export default PostForm;
