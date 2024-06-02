export const YYYYMMDD = (date: string) => {
  return date.split('.')[0].split('T')[0];
};
