export const filterData = (data, keys) => {
  let comparedData = [].concat(...data);
  for (let key of keys) {
    comparedData = comparedData.filter((item) => Object.values(item).includes(key));
  }
  return comparedData;
};
