module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Clean Page',
    pluralLable: 'Clean Pages'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').basicConfig
        }
      },
      arbitraryLinks: {
        label: "Arbitrary Links",
        type: "array",
        titleField: "displayText",
        fields: {
          add: {
            displayText: {
              type: "string",
              label: "Text to Display",
            },
            url: {
              type: "string",
              label: "url",
            },
            sameWindow: {
              type: "boolean",
              label: "Open in Same Window?",
            },
          },
        },
      },
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