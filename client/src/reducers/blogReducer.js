import {
  GET_BLOGS,
  GET_NUMBER_OF_BLOGS,
  CREATE_BLOG,
  FIND_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  BLOGS_LOADING
} from '../actions/constants';

const initialState = {
  blogs: [],
  loading: false,
  numberOfBlogs: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return { 
        ...state, 
        blogs: action.payload,
        loading: false
      };
    case GET_NUMBER_OF_BLOGS:
      return { 
        ...state, 
        numberOfBlogs: action.payload
      };
    case CREATE_BLOG:
      return {
        ...state, 
        blogs: [...state.blogs, action.payload],
        numberOfBlogs: state.numberOfBlogs + 1 
      };
    case FIND_BLOG:
      return {
        ...state,
        blogs: [action.payload]
      }; 
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog)=>
          blog._id === action.id ? {...action.payload} : blog
        ) 
      }; 
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog._id !== action.payload),
        numberOfTodos: state.numberOfTodos - 1
      };
    case BLOGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};