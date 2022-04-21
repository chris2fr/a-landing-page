module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'HTML5 Boilerplate',
    pluralLable: 'HTML5 BOILERPLATES'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').fullConfig
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};