import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import TodoReducer from 'reducers/TodoReducer';

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, {}, () => {
    const localData = localStorage.getItem('todos');

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    if (Array.isArray(state)) {
      localStorage.setItem('todos', JSON.stringify(state));
    }
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.element,
};

export default TodoProvider;
