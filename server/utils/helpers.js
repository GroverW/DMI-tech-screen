/* 
helper function used to pause app an amount of ms.
used so loading spinner will display in test.
*/
const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

module.exports = {
  sleep,
};
