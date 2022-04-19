module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'A Landing Image'
  },
  fields: {
    add: {
      image: {
        label: 'The Image',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {
              className: "a-landing-section-image"
            }
          }
        }
      },
      style: {
        label: 'Style par of the image',
        type: 'string'
      },
      divClassName: {
        label: 'Class Name of the enclosing Div',
        type: 'slug'
      }
    }
  }
};