import React, {useState, useEffect} from 'react';
import TodoInfo from "../components/TodoInfo";
import {Loader} from "../components/Loader/";
import {withRouter} from "react-router-dom";
import {getTodo} from "../api/api";

export const TodoPage = withRouter(
  ({match, history}) => {
    const [todo, setTodo] = useState(null);
    const {todoId} = match.params;

    useEffect(() => {
      getTodo(todoId)
        .then(setTodo)
        .catch(() => {
          history.push('/todos')
        })
    }, [todoId]);

    if (!todo) {
      return <Loader/>
    }
    return (
      <div>
        <TodoInfo todo={todo}/>
      </div>
    );
  }
)
