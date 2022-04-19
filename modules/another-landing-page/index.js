module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Another Landing Page',
    pluralLabel: 'Another-Landing Pages'
  },
  fields: {
    add: {
        arbitraryLinks: {
        label: 'Arbitrary Links',
        type: 'array',
        titleField: 'displayText',
        fields: {
          add: {
            displayText: {
              type: 'string',
              label: 'Text to Display'
            },
            url: {
              type: 'string',
              label: 'url'
            },
            sameWindow: {
              type: 'boolean',
              label: 'Open in Same Window?',
            }
          }
        }
      },
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
          'arbitraryLinks',
          'header',
          'sections',
          'footer'
        ]
      }
    }
  }
};
