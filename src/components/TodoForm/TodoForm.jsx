import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
import Select from 'components/common/Select/Select';
import { PRIORITY_OPTIONS } from 'utils/const';
import DatePicker from 'components/DatePicker/DatePicker';
import { TodoContext } from 'contexts/TodoContext';
import { addTodo, updateTodo } from 'actions/TodoActions';
import classNames from 'classnames';
import './TodoForm.scss';

const TodoForm = (props) => {
  const { context, defaultValues } = props;
  const { id, title, description, dueDate, priority } = defaultValues;
  const { dispatch } = useContext(TodoContext);
  const [submittedData, setSubmittedData] = useState({});
  const isUpdateContext = context === 'update';

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (isUpdateContext) {
      dispatch(updateTodo({ ...data, id }));
    } else {
      dispatch(addTodo(data));
    }

    setSubmittedData(data);
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    if (isUpdateContext) {
      reset(submittedData);
    } else {
      reset({
        title: '',
        description: '',
        priority: 'Normal',
        dueDate: new Date(),
      });
    }
  }, [reset, submittedData, isSubmitSuccessful]);

  return (
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <Input
          placeholder="Add new task"
          defaultValue={title}
          {...register('title', { required: true })}
          className={errors.title && 'input--invalid'}
        />
        {errors.title?.type === 'required' && (
          <div className="text-danger fs-sm">This field is required!</div>
        )}
      </div>

      <div className="mb-3">
        <div className="fw-bold">Description</div>
        <Input
          defaultValue={description}
          as="textarea"
          rows={4}
          {...register('description')}
        />
      </div>

      <div className="todo-form__group">
        <div className="mb-3">
          <div className="fw-bold">Due Date</div>
          <Controller
            name="dueDate"
            control={control}
            defaultValue={new Date(dueDate)}
            render={({ field }) => {
              return <DatePicker {...field} minDate={new Date()} />;
            }}
          />
        </div>

        <div className="mb-3">
          <div className="fw-bold">Priority</div>
          <Select
            options={PRIORITY_OPTIONS}
            defaultValue={priority}
            {...register('priority')}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="success"
        className={classNames('w-100', {
          'mt-4': isUpdateContext,
          'mt-5': !isUpdateContext,
        })}>
        {isUpdateContext ? 'Update' : 'Add'}
      </Button>
    </form>
  );
};

TodoForm.defaultProps = {
  context: 'add',
  defaultValues: {
    title: '',
    description: '',
    priority: 'Normal',
    dueDate: new Date(),
  },
};

TodoForm.propTypes = {
  context: PropTypes.oneOf(['add', 'update']),
  defaultValues: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.any,
    checked: PropTypes.bool,
    inViewMode: PropTypes.bool,
  }),
};

export default TodoForm;
