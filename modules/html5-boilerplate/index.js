module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'HTML5 Boilerplate'
  },
  fields: {
    add: {
      contents: {
        type: 'string',
        label: 'contents'
      }
    }
  },
  group: {
  }
};