import React from 'react';
import PropTypes from 'prop-types';
import Empty from 'components/common/Empty/Empty';
import Todo from './Todo';

// eslint-disable-next-line no-unused-vars
const TodoList = ({ todos }) => {
  if (!todos.length) return <Empty />;

  return todos.map((item) => <Todo key={item.id} {...item} />);
};

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.string,
      dueDate: PropTypes.any,
      checked: PropTypes.bool,
      inViewMode: PropTypes.bool,
    }),
  ),
};

export default TodoList;
