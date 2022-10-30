import { publicApi } from "./http/http";

const defaultParams = {
  _page: 1,
  _limit: 5,
};

export const getPostsService = async () => {
  return await publicApi.get(`/posts`, { params: { ...defaultParams } });
};

export const createPostService = async (body) => {
  return await publicApi.post(`/posts`, body);
};

export const updatePostService = async (id, body) => {
  return await publicApi.put(`/posts/${id}`, body);
};

export const deletePostService = async (id) => {
  return await publicApi.delete(`/posts/${id}`);
};
