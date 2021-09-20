import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO,
  TOGGLE_VIEW_MODE_TODO,
  UPDATE_TODO,
} from 'utils/actionTypes';

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const toggleAllTodos = () => ({
  type: TOGGLE_ALL_TODOS,
});

export const toggleViewModeTodo = (id) => ({
  type: TOGGLE_VIEW_MODE_TODO,
  payload: id,
});
