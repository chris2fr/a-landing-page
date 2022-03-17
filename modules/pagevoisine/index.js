module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Page voisine'
  },
  fields: {
    add: {
      title: {
        label: 'Title of this website',
        type: 'string'
      },
      subtitle: {
        label: 'Subtitle of this website',
        type: 'string'
      },
      menuTitle: {
        label: 'A Short title for Menus',
        type: 'string'
      },
      main: {
        type: 'area',
        label: 'Section Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      footer: {
        type: 'area',
        label: 'Footer / Pied de page Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Page',
        fields: [
          'title',
          'subtitle',
          'menuTitle',
          'main',
          'footer'
        ]
      }
    }
  }
};
