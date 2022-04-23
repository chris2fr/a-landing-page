

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
      }
    }
  }
};
