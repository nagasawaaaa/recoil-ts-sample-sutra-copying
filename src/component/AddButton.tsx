import React, {useCallback} from "react";
import {Todo} from "../types";
import {SetterOrUpdater, useRecoilValue, useSetRecoilState} from "recoil";
import {todoListState} from "../atoms/TodoListAtom";
import {todoTitleFormState} from "../atoms/TodoTitleFormAtom";

const AddButton: React.FC = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);
  const setTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  const onClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }]);
    setTitleFormValue('');
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);

  return <button onClick={onClick}>追加</button>
}

export default AddButton;
