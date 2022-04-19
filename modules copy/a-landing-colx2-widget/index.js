// modules/two-column-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two Columns'
  },
  fields: {
    add: {
      columnOne: {
        type: 'area',
        label: 'Column One',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {},
            'a-landing-image': {}

          }
        }
      },
      columnTwo: {
        type: 'area',
        label: 'Column Two',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {},
            'a-landing-image': {}

          }
        }
      }
    }
  }
};


