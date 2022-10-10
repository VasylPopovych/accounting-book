export const filterData = (data, filtersValues) => {
  let comparedData = [].concat(...data);

  for (let value of filtersValues) {
    if (value[0] === "last_updated_utc_from") {
      comparedData = comparedData.filter((tiker) => {
        if (new Date(tiker.last_updated_utc).getTime() > new Date(value[1].trim()).getTime()) return true;
      });
    } else if (value[0] === "last_updated_utc_to") {
      comparedData = comparedData.filter((tiker) => {
        if (new Date(tiker.last_updated_utc).getTime() < new Date(value[1].trim()).getTime()) return true;
      });
    } else {
      comparedData = comparedData.filter((tiker) => tiker[value[0]] == value[1].trim());
    }
  }
  return comparedData;
};
