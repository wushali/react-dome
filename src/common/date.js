import fillzero from './fillzero'
const date = (time) => {
  var d = new Date();
  d.setTime(time);
  return d.getFullYear();
};

export default date;