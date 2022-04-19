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
      sections: {
        type: 'area',
        label: 'Sections',
        options: {
          max: 7,
          widgets: {
            'another-landing-section': {}
          }
        }
      },
      footer: {
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
          'header',
          'main',
          'footer'
        ]
      }
    }
  }
};
