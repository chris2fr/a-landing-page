module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Another Default Page',
    pluralLabel: 'Another-Default Pages'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').basicConfig
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
