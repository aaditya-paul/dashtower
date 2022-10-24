export const trimmer = (str: string, length: number): string => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

export const humanDate = (date: Date): string => {
  date = new Date(date);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
