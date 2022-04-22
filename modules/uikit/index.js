module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'UIKit Page',
    pluralLable: 'UIKit Pages'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').uikitConfig,
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