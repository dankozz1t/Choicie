import React, { useState } from "react";
import { toast } from "react-toastify";

import Container from "shared/components/Container";
import Post from "shared/components/Post";
import Button from "shared/components/Button";

import PostForm from "./components/PostForm";

import {
  createPostService,
  deletePostService,
  getPostsService,
} from "shared/service/posts.service";

import "./DemoSection.scss";

const DemoSection = () => {
  const [posts, setPosts] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);

  const handleGetClick = () => {
    getPostsService()
      .then((response) => {
        setPosts(response.data);

        toast.success(`Status: ${response.status}`);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
      });
  };

  const handlePostClick = () => {
    setIsShowForm(!isShowForm);
  };

  const handleDeleteClick = (id) => {
    deletePostService(id)
      .then((response) => {
        const newPost = posts.filter((value) => value.id !== id);
        setPosts(newPost);
        toast.success(`Status: ${response.status}`);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
      });
  };

  const handleFormSubmit = (e, post) => {
    e.preventDefault();

    createPostService({ ...post, userId: 1 })
      .then((response) => {
        setPosts([response.data]);

        setIsShowForm(!isShowForm);
        toast.success(`Status: ${response.status}`);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
      });
  };

  return (
    <section className="demo">
      <Container>
        <h1 className="demo__title">This is demo of external API calls</h1>
        <h2 className="demo__title">
          <strong>Important:</strong> resource will not be really updated on the
          server but it will be faked as if.
        </h2>

        <ul className="demo__button-list">
          <li>
            <Button
              primary
              medium
              onClick={handleGetClick}
              className="demo__button"
            >
              GET
            </Button>
          </li>
          <li>
            <Button
              primary
              medium
              onClick={handlePostClick}
              className="demo__button"
            >
              POST
            </Button>
          </li>
        </ul>

        {isShowForm && <PostForm onSubmit={handleFormSubmit} />}

        <ul className="demo__post-list">
          {posts.map(({ title, body, id }) => (
            <li key={id} className="demo__post-item">
              <Post
                onDelete={handleDeleteClick}
                className="demo__post"
                title={title}
                body={body}
                id={id}
              ></Post>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DemoSection;
