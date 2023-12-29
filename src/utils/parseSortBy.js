const parseSortBy = (sortBy) => {
  let variableObject;
  switch (sortBy) {
    case "ASC":
      variableObject = {
        orderDirection: "ASC",
      };
      break;
    case "DESC":
      variableObject = {
        orderDirection: "DESC",
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
