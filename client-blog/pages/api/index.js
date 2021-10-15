import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5035',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
})

export const createPost = payload => api.post(`/api/posts`, payload, { headers: { "Content-Type": "application/json" } })
// export const getAllPost = () => api.get(`/api/posts`)
export const updatePost = (id, payload) => api.put(`/api/posts/${id}`, payload, { headers: { "Content-Type": "application/json" } })
export const deletePost = id => api.delete(`/api/posts/${id}`)
export const getPostBySlug = slug => api.get(`/api/posts/${slug}`)

const apis = {
  createPost,
  // getAllPost,
  updatePost,
  deletePost,
  getPostBySlug
}

export default apis