import React, { useContext, useEffect, useState } from 'react';
import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/Todo/TodoList';
import './HomePage.scss';
import Button from 'components/common/Button/Button';
import { TodoContext } from 'contexts/TodoContext';
import { deleteAllTodos, toggleAllTodos } from 'actions/TodoActions';
import classNames from 'classnames';
import InputSearch from 'components/InputSearch/InputSearch';
import nonAccentVietnamese from 'utils/nonAccentVietnamese';
import useWindowSize from 'hooks/useWindowSize';
import { BREAKPOINT } from 'utils/const';

// eslint-disable-next-line no-unused-vars
const HomePage = (props) => {
  const { state: todos, dispatch } = useContext(TodoContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterResult, setFilterResult] = useState([]);
  const [togglePanel, setTogglePanel] = useState(false);
  const { width: viewport } = useWindowSize();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    let strSearch = nonAccentVietnamese(searchTerm.toLowerCase().trim());

    setFilterResult(
      todos.filter(({ title, description }) => {
        let strTitle = nonAccentVietnamese(title.toLowerCase().trim());
        let strDescription = nonAccentVietnamese(
          description.toLowerCase().trim(),
        );

        return (
          strTitle.includes(strSearch) || strDescription.includes(strSearch)
        );
      }),
    );
  }, [todos, searchTerm]);

  return (
    <div className="screen">
      <div className="screen__container">
        <div className="screen__row">
          <div
            className={classNames('panel panel--left', {
              show: togglePanel,
            })}>
            <div className="mb-5 panel__title">
              <span>New Task</span>
              {viewport < BREAKPOINT && (
                <Button variant="info" onClick={() => setTogglePanel(false)}>
                  Todo List
                </Button>
              )}
            </div>
            <TodoForm />
          </div>
          <div className="panel panel--right" id="panel-right">
            <div className="mb-5 panel__title">
              {viewport < BREAKPOINT && (
                <Button variant="primary" onClick={() => setTogglePanel(true)}>
                  Add Todo
                </Button>
              )}
              <span>Todo List</span>
            </div>

            <InputSearch
              value={searchTerm}
              onSearch={handleSearch}
              className="mb-3"
              placeholder="Search..."
            />

            <TodoList todos={filterResult} />

            <div
              className={classNames('bulk', {
                'bulk--show': todos.some((item) => item.checked),
              })}>
              <div>Bulk Action:</div>
              <div>
                <Button
                  variant="primary"
                  onClick={() => dispatch(toggleAllTodos())}
                  className="me-2">
                  Toggle All
                </Button>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteAllTodos())}
                  disabled={!todos.some((item) => item.checked)}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
