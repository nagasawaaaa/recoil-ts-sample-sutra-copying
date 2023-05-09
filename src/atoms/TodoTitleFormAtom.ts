import { atom } from 'recoil';

/**
 * 追加したいタスク名のフィールド
 */
export const todoTitleFormState = atom<string>({
  key: 'todoTitleForm',
  default: '',
});
