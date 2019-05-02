import axios from 'axios';
import { 
  GET_BLOGS,
  GET_NUMBER_OF_BLOGS,
  CREATE_BLOG,
  FIND_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  BLOGS_LOADING
 } from './constants';

export const getBlogs = (pageNumber = 1) => dispatch => {
  dispatch(setBlogsLoading());
  dispatch(getNumberOfBlogs()); 
  axios.get(`/api/blogs?page=${pageNumber}`).then(res =>
    dispatch({
      type: GET_BLOGS,
      payload: res.data
    })
  ).catch(err => console.log(err));
};

export const getNumberOfBlogs = () => dispatch => {
  axios.get('/api/blogs/length').then(res =>
    dispatch({
      type: GET_NUMBER_OF_BLOGS,
      payload: res.data
    })
  ).catch(err => console.log(err));
};

export const createBlog = blog => dispatch => {
  axios.post('/api/blogs', blog).then(res =>
    dispatch({
      type: CREATE_BLOG,
      payload: res.data
    })
  ).catch(err => console.log(err));
  window.location = "/blogs";
};

export const findBlog = id => dispatch => {
  axios.get(`/api/blogs/${id}`).then(res =>
    dispatch({
      type: FIND_BLOG,
      payload: res.data
    })
  ).catch(err => console.log(err));
}; 

export const updateBlog = blog => dispatch => {
  axios.put(`/api/blogs/${blog.id}`, blog).then(res => 
    dispatch({
      id: blog.id,
      type: UPDATE_BLOG,
      payload: blog 
    })
  ).catch(err => console.log(err));
  window.location = "/blogs";
};

export const deleteBlog = id => dispatch => {
  axios.delete(`/api/blogs/${id}`).then(res =>
    dispatch({
      type: DELETE_BLOG,
      payload: id
    })
  ).catch(err => console.log(err));
  window.location = "/blogs";
};

export const setBlogsLoading = () => {
  return {
    type: BLOGS_LOADING
  };
};