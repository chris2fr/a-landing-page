module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Bulma Page',
    pluralLable: 'Bulma Pages'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: require('./area').fullConfig,
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