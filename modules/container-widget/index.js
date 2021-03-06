const { stringify } = require('querystring');

module.exports = {
  extend: '@apostrophecms/widget-type',
  icons: {
    'border-outside': 'BorderOutside'
  },
  options: {
    label: 'Container',
    icon: 'border-outside'
  },
  fields: {
    add: {
      content: {
        type: 'area',
        options: {
          widgets: require('../../lib/area').basicConfig
        }
      },
      classes: {
        type: 'array',
        label: 'Classes',
        titleField: 'className',
        fields: {
          add: {
            className: {
              type: 'slug',
              label: 'Class'
            }
          }
        }
      },
      style: {
        type: 'string',
        label: 'Style Declarations'
      },
      backgroundColor: {
        type: 'color',
        label: 'Background Color',
        help: 'Background color of the container',
        options: {
          pickerOptions: {
            presetColors: require('../../lib/options').aposBrandColors
          }
        }
      },
      borderColor: {
        type: 'color',
        label: 'Border Color',
        help: 'Border color of the container',
        options: {
          pickerOptions: {
            presetColors: require('../../lib/options').aposBrandColors
          }
        }
      },
      radius: {
        type: 'boolean',
        label: 'Border Radius',
        help: 'Adds a 20px border radius',
        def: false
      }
    }
  }
};
