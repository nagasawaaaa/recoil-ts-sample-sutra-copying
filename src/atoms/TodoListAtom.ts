import { atom } from 'recoil';
import { Todo } from '../types/Todo';

/**
 * タスク一覧
 */
export const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [{ title: 'one' }, { title: 'two' }, { title: 'three' }],
});
