module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Another Landing Page',
    pluralLabel: 'Another-Landing Pages'
  },
  fields: {
    add: {
      header:{
        type: 'area',
        options: {
          widgets: require('../../lib/area').fullConfig
        }
      },
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
