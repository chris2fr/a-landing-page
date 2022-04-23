module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'UIKit Page',
    pluralLabel: 'UIKit Pages'
  },
  fields: {
    add: {
      middlePart: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').uikitConfig
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'middlePart'
        ]
      }
    }
  }
};
