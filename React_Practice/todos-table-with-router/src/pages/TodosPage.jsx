import React, {useEffect, useState} from 'react';
import {TodoTable} from '../components/TodoTable';
import {getTodos} from '../api/api';

export const TodosPage = ({match}) => {
  const [todos, setTodos] = useState([]);
  const todoId = +match.params.todoId || 0;

  useEffect(() => {
    getTodos()
      .then(setTodos);
  }, [])

  return <>
    <h2 className="subtitle">Todos page</h2>
    <TodoTable
      todos={todos}
      selectedTodoId={todoId}
    />
  </>
};
