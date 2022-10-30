import React, { useState } from "react";
import { toast } from "react-toastify";
import classNames from "classnames";

import { getCommentService } from "shared/service/comments.service";
import {
  updateAllPostService,
  updateBodyPostService,
} from "shared/service/posts.service";

import Button from "shared/components/Button";
import Comment from "shared/components/Comment";

import "./Post.scss";

const Post = ({ title, body, id, className, onDelete }) => {
  const [post, setPost] = useState({ title, body, id });
  const [comments, setComments] = useState([]);

  const [isUpdatePut, setIsUpdatePut] = useState();
  const [isUpdatePatch, setIsUpdatePatch] = useState();

  const [isShowComments, setIsShowComments] = useState();

  const handleGetCommentsClick = () => {
    if (isShowComments) {
      return setIsShowComments(!isShowComments);
    }

    getCommentService(id)
      .then((response) => {
        setComments(response.data);

        toast.success(`Status: ${response.status}`);
      })
      .finally(() => {
        setIsShowComments(!isShowComments);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handlePutClick = () => {
    if (!isUpdatePut) {
      return setIsUpdatePut(!isUpdatePut);
    }

    updateAllPostService(id, { ...post, userId: 1 })
      .then((response) => {
        setPost(response.data);

        toast.success(`Status: ${response.status}`);
      })
      .finally(() => {
        setIsUpdatePut(!isUpdatePut);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
        setPost({ title, body, id });
      });
  };

  const handlePatchClick = () => {
    if (!isUpdatePatch) {
      return setIsUpdatePatch(!isUpdatePatch);
    }

    updateBodyPostService(id, { body: post.body, userId: 1 })
      .then((response) => {
        setPost(response.data);

        toast.success(`Status: ${response.status}`);
      })
      .finally(() => {
        setIsUpdatePatch(!isUpdatePatch);
      })
      .catch((error) => {
        toast.error(`Eroor: ${error.message}`);
        setPost({ title, body, id });
      });
  };

  return (
    <>
      <div className={classNames("post", className)}>
        <h2 className="post__title">
          №{post.id}
          {isUpdatePut ? (
            <input
              type="text"
              name="title"
              value={post.title}
              className="post__title post__title-edit"
              onChange={handleInputChange}
            />
          ) : (
            <span> {post.title}</span>
          )}
        </h2>

        {isUpdatePut || isUpdatePatch ? (
          <textarea
            type="text"
            name="body"
            value={post.body}
            className="post__title post__title-edit"
            onChange={handleInputChange}
          />
        ) : (
          <p className="post__body">{post.body}</p>
        )}

        <ul className="post__button-list">
          <li>
            <Button
              secondary
              small
              className="post__comments-button"
              onClick={handleGetCommentsClick}
            >
              {isShowComments ? "close comments" : "open comments"}
            </Button>
          </li>
          <li>
            <Button
              primary
              small
              className="post__put-button"
              onClick={handlePutClick}
            >
              {isUpdatePut ? "Send (PUT)" : "Update All (PUT)"}
            </Button>
          </li>
          <li>
            <Button
              primary
              small
              className="post__put-button"
              onClick={handlePatchClick}
            >
              {isUpdatePatch ? "Send / (PATCH)" : "Update only text (PATCH)"}
            </Button>
          </li>
          <li>
            <Button
              primary
              small
              onClick={() => onDelete(id)}
              className="post__delete-button"
            >
              DELETE
            </Button>
          </li>
        </ul>
      </div>

      {isShowComments && (
        <ul className="post_comment-list">
          {comments.length ? (
            comments.map(({ email, name, body, id }) => (
              <li key={id} className="post_comment-item">
                <Comment
                  className="post_comment"
                  title={name}
                  body={body}
                  name={email}
                ></Comment>
              </li>
            ))
          ) : (
            <h3> No comments</h3>
          )}
        </ul>
      )}
    </>
  );
};

export default React.memo(Post);
