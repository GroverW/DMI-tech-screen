const statusCategory = statusCode => Math.floor(statusCode / 100);

const formatErrors = errorsArray =>
  errorsArray.map(error => Object.values(error)[0]);

const getErrors = error =>
  statusCategory(error.status) === 4
    ? formatErrors(error.data.message)
    : ['Something went wrong. Please try again later.'];

export default getErrors;
