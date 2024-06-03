import {
  MOVIE_CATEGORY,
  DATE_SORT,
  MENU_OPTIONS,
  VIEW_TYPE,
} from './../constants/index';

export type Menu = keyof typeof MENU_OPTIONS;
export type MovieCategory = keyof typeof MOVIE_CATEGORY;
export type Sort = keyof typeof DATE_SORT;
export type Filter = keyof typeof MOVIE_CATEGORY;
export type View = keyof typeof VIEW_TYPE;

export interface Post {
  id: string;
  title: string;
  content: string;
  category: MovieCategory;
  date: string;
  author: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  date: string;
  like: number;
}
