const parseSortBy = (sortBy) => {
  let variableObject;
  switch (sortBy) {
    case "ASC":
      variableObject = {
        orderDirection: "ASC",
        orderBy: "RATING_AVERAGE",
      };
      break;
    case "DESC":
      variableObject = {
        orderDirection: "DESC",
        orderBy: "RATING_AVERAGE",
      };
      break;
    case "CREATED_AT":
      variableObject = {
        orderBy: "CREATED_AT",
      };
      break;
    case "":
      variableObject = {};
  }

  return variableObject;
};

export default parseSortBy;
