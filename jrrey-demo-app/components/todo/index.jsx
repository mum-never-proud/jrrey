import { h } from 'preact';
import { menuItems, todoCommands } from 'constants';
import { useEffect, useState } from 'preact/compat';
import TodoItem from 'components/todo/item';
import jrrey from 'utils/jrrey';
import sampleTodos from 'constants/todos';
import './style.css';

export default function Notes({ isJrreyListening }) {
  const [filter, setFilter] = useState({ name: 'All', options: {} });
  const [todos, setTodos] = useState(sampleTodos);
  const isValidTodoIndex = (index, length) => (index > 0 && index <= length);
  const filterTodos = (todos, option = {}) => {
    return todos.filter((todo) => {
      for (const [key, value] of Object.entries(option)) {
        if (todo[key] !== value || todo[key] === undefined) {
          return false;
        }
      }

      return true;
    });
  };
  const createTodo = (id, name) => ({ id, name, isCompleted: false, createdAt: Date.now() });
  const addItem = ([phrase]) => setTodos((currentTodos) => [...currentTodos, createTodo(currentTodos.length + 1, phrase[1])]);
  const completeItem = ([phrase]) => setTodos((currentTodos) => {
    if (isValidTodoIndex(phrase[1], currentTodos.length)) {
      currentTodos[phrase[1] - 1].isCompleted = true;
    } else {
      alert('Invalid todo item ID');
    }

    return [...currentTodos];
  });
  const filteredTodos = filterTodos(todos, filter.options);

  useEffect(() => {
    jrrey.onCommand(/new item (.*)/, addItem);
    jrrey.onCommand(/complete item (\d)/, completeItem);
    jrrey.onCommand(/show all items/, () => setFilter({ name: 'All', options: {} }));
    jrrey.onCommand(/show active items/, () => setFilter({ name: 'Active', options: { isCompleted: false } }));
    jrrey.onCommand(/show completed items/, () => setFilter({ name: 'Completed', options: { isCompleted: true } }));
  }, []);

  return (
    <div className="col-12 mt-3 todos-container">
      <div>Todo Commands</div>
      <ul>
        <li className={`font-weight-bold ${isJrreyListening ? '' : 'strike'}`}>
          {
            todoCommands.map((todoCommand) => (<li>{todoCommand}</li>))
          }
        </li>
      </ul>
      <div className="card mt-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {
              menuItems.map((menuItem) => (
                <li className="nav-item">
                  <a className={`nav-link ${menuItem === filter.name ? 'active' : ''}`} href="#">{menuItem}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="card-body">
          {
            filteredTodos.length
              ? (
                <ul className="todos">
                  {
                    filteredTodos.map((todo, index) => <TodoItem key={index} item={todo} />)
                  }
                </ul>)
              : 'No Todos here yet!'
          }
        </div>
      </div>
    </div>
  );
}
