import { h } from 'preact';

export default function Item({ item }) {
  return <li className={`${item.isCompleted ? 'completed' : ''}`}><span className="todo-id">{item.id}.</span> <input type="checkbox" checked={item.isCompleted} /> <span className={`${item.isCompleted ? 'strike' : ''}`}>{item.name}</span></li>;
}
