function stamp2Date(time) {
  return new Date(time * 1000).toLocaleDateString();
}

export default {
  stamp2Date,
};
