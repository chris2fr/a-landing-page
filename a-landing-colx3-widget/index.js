// modules/two-column-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Three Columns'
  },
  // 👇 The widget type's field schema
  fields: {
    add: {
      // 👇 The first column area
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
            '@apostrophecms/html': {}
          }
        }
      },
      // 👇 The second column area
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
            '@apostrophecms/html': {}

          }
        }
      },
      
      // 👇 The second column area
      columnThree: {
        type: 'area',
        label: 'Column Three',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {}

          }
        }
      }
    }
  }
};


