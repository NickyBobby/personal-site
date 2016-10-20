module.exports = {
  validateProject: (content) => {
    if (!content) {
      return "Every project needs a name!";
    }
  }
};
