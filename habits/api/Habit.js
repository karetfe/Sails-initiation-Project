module.exports = {
  attributes: {
    name: {
      type: 'string',
      maxLength: 31,
      minLength: 4,
      required: true
    },
    occurence: {
      type: 'integer',
      defaultsTo: 0
    },
    user: {
      model: 'user',
      required: true
    }
  }
};
