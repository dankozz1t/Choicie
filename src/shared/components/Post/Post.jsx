import classNames from "classnames";
import React, { useState } from "react";

import { toast } from "react-toastify";

import { getCommentService } from "shared/service/comments.service";

import Button from "shared/components/Button";
import Comment from "shared/components/Comment";

import "./Post.scss";
import { updatePostService } from "shared/service/posts.service";

const Post = ({ title, body, id, className, onDelete }) => {
  console.log("Post: ", id);

  const [comments, setComments] = useState([]);
  const [isUpdate, setIsUpdate] = useState();

  const [isShowComments, setIsShowComments] = useState();
  const [post, setPost] = useState({ title, body, id });

  const handleGetCommentsClick = () => {
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
    if (!isUpdate) {
      return setIsUpdate(!isUpdate);
    }

    updatePostService(id, { ...post, userId: 1 })
      .then((response) => {
        setPost(response.data);

        toast.success(`Status: ${response.status}`);
      })
      .finally(() => {
        setIsUpdate(!isUpdate);
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
          {isUpdate ? (
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleInputChange}
            />
          ) : (
            <span> {post.title}</span>
          )}
        </h2>

        {isUpdate ? (
          <input
            type="text"
            name="body"
            value={post.body}
            onChange={handleInputChange}
          />
        ) : (
          <p className="post__body">{post.body}</p>
        )}

        <Button
          secondary
          small
          className="post__comments-button"
          onClick={handleGetCommentsClick}
        >
          {isShowComments ? "close comments" : "open comments"}
        </Button>

        <Button
          primary
          small
          className="post__put-button"
          onClick={handlePutClick}
        >
          {isUpdate ? "Update / PUT" : "PUT"}
        </Button>

        <Button
          primary
          small
          onClick={() => onDelete(id)}
          className="post__delete-button"
        >
          DELETE
        </Button>
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
