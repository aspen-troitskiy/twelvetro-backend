
let instance;

function createInstance() {
  return {};
}

module.exports = {
  getInstance() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  },
};
