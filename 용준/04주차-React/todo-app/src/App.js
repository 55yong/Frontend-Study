import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [categories] = useState([
    { key: 'private', title: '[개인]' },
    { key: 'work', title: '[업무]' },
    { key: 'family', title: '[가족]' },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextTodoId = useRef(1);

  const onInsert = useCallback((text, category) => {
    const todo = {
      id: nextTodoId.current,
      text,
      category,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextTodoId.current += 1; // nextId 1씩 더하기
  });

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert categories={categories} onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
