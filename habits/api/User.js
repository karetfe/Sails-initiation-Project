module.exports = {
  attributes: {
    name: {
      type: 'string',
      maxLength: 28,
      minLength: 2
    },
    habits: {
      collection: 'habit',
      via: 'user'
    }
  }
};
