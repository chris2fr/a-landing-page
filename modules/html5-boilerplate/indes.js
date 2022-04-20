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
    utility: {
      label:"A Landing",
      fields: [
        'title',
        'slug',
        'visibility'
      ]
    },
  }
};