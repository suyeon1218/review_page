export const DATE_SORT = Object.freeze({
  DATE_DESCENDING: '최신 순',
  DATE_ASCENDING: '오래된 순',
  RATING_ASCENDING: '평점 낮은 순',
  RATING_DESCENDING: '평점 높은 순',
});

export const MOVIE_CATEGORY = Object.freeze({
  ROMANCE: '로맨스',
  COMIC: '코믹',
  HORROR: '공포',
  ACTION: '액션',
  ANIMATION: '애니메이션',
  SF: 'SF',
  THRILLER: '스릴러',
  SPORT: '스포츠',
  FANTASY: '판타지',
  MUSIC: '음악',
});

export const VIEW_TYPE = Object.freeze({
  LIST: '리스트 뷰',
  CARD: '카드 뷰',
});

export const MENU_OPTIONS = Object.freeze({
  DATE_SORT,
  CATEGORY_FILTER: MOVIE_CATEGORY,
  VIEW_TYPE,
});

export const BADEG_COLOR: Record<keyof typeof MOVIE_CATEGORY, string> =
  Object.freeze({
    ROMANCE: 'red',
    COMIC: 'orange',
    HORROR: 'yellow',
    ACTION: 'green',
    ANIMATION: 'blue',
    SF: 'purple',
    THRILLER: 'gray',
    SPORT: 'cyan',
    FANTASY: 'pink',
    MUSIC: 'teal',
  });

export const MY_ID = 'suyeon';
