export const gigasecond = (inputData) => { 
  inputData = Date.parse(inputData) + 1000000000000;
  var time = new Date();
  time.setTime(inputData)
  return time
};
