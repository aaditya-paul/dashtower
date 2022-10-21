export const trimmer = (str, length) => {
  if (str.length > length) {
    return str.substring(0, length) + '...';
  }
  return str;
};

export const humanDate = (date) => {
  date = new Date(date);
  return date.toLocaleString(undefined, {
    dateStyle: 'long',
  });
};
