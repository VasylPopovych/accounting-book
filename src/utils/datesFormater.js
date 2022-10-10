export const getDateFormat = (date) => {
  const formated = new Date(date);
  let formatedDay = formated.getDate();
  if (formatedDay < 10) formatedDay = "0" + formatedDay;
  let formatedMonth = formated.getMonth() + 1;
  if (formatedMonth < 10) formatedMonth = "0" + formatedMonth;
  const formatedDate = `${formatedDay}.${formatedMonth}.${formated.getFullYear().toString().slice(2)}`;
  const formatedTime = `${formated.toTimeString().slice(0, 5)}`;
  return formatedDate + " " + formatedTime;
};
