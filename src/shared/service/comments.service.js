import { publicApi } from "./http/http";

export const getCommentService = async (id) => {
  return await publicApi.get(`post/${id}/comments`);
};
