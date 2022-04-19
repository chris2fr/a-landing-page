// modules/two-column-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Flow 30rem Columns'
  },
  fields: {
    add: {
      content: {
        type: 'area',
        label: 'Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/html': {},
            'a-landing-image': {}
          }
        }
      },
      width: {
        type: 'integer',
        label: 'Width (REM)',
        min: 0,
        max: 200,
        def: 30,
        help: 'Length of column in normalized character REM widths (default 30)'
      }
    }
  }
};


