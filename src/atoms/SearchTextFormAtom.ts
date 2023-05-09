import { atom } from 'recoil';

/**
 * 検索文字列のフィールド
 */
export const searchTextFormState = atom<string>({
  key: 'searchTextForm',
  default: '',
});
