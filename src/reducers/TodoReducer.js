import { nanoid } from 'nanoid';
import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO,
  TOGGLE_VIEW_MODE_TODO,
  UPDATE_TODO,
} from 'utils/actionTypes';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let newArray = [
        {
          ...action.payload,
          id: nanoid(),
        },
        ...state,
      ];

      newArray.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });

      return newArray;
    }
    case UPDATE_TODO:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case DELETE_ALL_TODOS:
      return state.filter((item) => !item.checked);
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item,
      );
    case TOGGLE_ALL_TODOS: {
      const hasUnChecked = state.some((item) => !item.checked);

      return hasUnChecked
        ? state.map((item) => ({ ...item, checked: true }))
        : state.map((item) => ({ ...item, checked: false }));
    }
    case TOGGLE_VIEW_MODE_TODO:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, inViewMode: !item.inViewMode }
          : item,
      );
    default:
      return state;
  }
};

export default TodoReducer;
