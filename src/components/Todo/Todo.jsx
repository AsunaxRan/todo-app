import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/common/Checkbox/Checkbox';
import Button from 'components/common/Button/Button';
import { TodoContext } from 'contexts/TodoContext';
import {
  deleteTodo,
  toggleTodo,
  toggleViewModeTodo,
} from 'actions/TodoActions';
import './Todo.scss';
import TodoForm from 'components/TodoForm/TodoForm';

const Todo = (props) => {
  const { id, title, description, priority, dueDate, checked, inViewMode } =
    props;
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="todo">
      <div className="todo__main">
        <div className="todo__checkbox">
          <Checkbox
            checked={checked}
            onChange={() => dispatch(toggleTodo(id))}
          />
        </div>
        <div className="todo__content">{title}</div>
        <div className="todo__actions">
          <Button
            variant="info"
            onClick={() => dispatch(toggleViewModeTodo(id))}>
            Detail
          </Button>
          <Button variant="danger" onClick={() => dispatch(deleteTodo(id))}>
            Remove
          </Button>
        </div>
      </div>

      {inViewMode && (
        <div className="todo__detail">
          <TodoForm
            context="update"
            defaultValues={{
              id,
              title,
              description,
              priority,
              dueDate,
            }}
          />
        </div>
      )}
    </div>
  );
};

Todo.defaultProps = {
  title: '',
  description: '',
  priority: 'Normal',
  dueDate: new Date(),
  checked: false,
  inViewMode: false,
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  dueDate: PropTypes.any,
  checked: PropTypes.bool,
  inViewMode: PropTypes.bool,
};

export default Todo;
