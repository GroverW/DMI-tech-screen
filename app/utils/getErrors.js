/* 
get first digit of statusCode
*/
const statusCategory = statusCode => Math.floor(statusCode / 100);

/*
return array of errors if status code in 400s
else received server error and return default message
*/
const getErrors = error =>
  statusCategory(error.status) === 4
    ? error.data.message
    : ['Something went wrong. Please try again later.'];

export default getErrors;
