import { selector } from 'recoil';
import { todoListState } from '../atoms/TodoListAtom';
import { searchTextFormState } from '../atoms/SearchTextFormAtom';
import { Todo } from '../types';

export const searchedTodoListSelector = selector<Todo[]>({
  key: 'searchedTodoListSelector',
  get: ({ get }) => {
    const todoList: Todo[] = get(todoListState);
    const searchText: string = get(searchTextFormState);
    return searchText
      ? todoList.filter((todo) => todo.title.includes(searchText))
      : todoList;
  },
});
