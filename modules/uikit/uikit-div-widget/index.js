module.exports = {
  extend: '@apostrophecms/widget-type',
  icons: {
    'border-outside': 'BorderOutside'
  },
  options: {
    name: 'uikit-div',
    label: 'UIKit Div',
    icon: 'border-outside',
  },
  fields: {
    add: {
      insidePart: {
        type: 'area',
        options: {
          widgets: require('../../../lib/area').uikitConfig
        }
      },
      className: require('../../../lib/uikitparams').divClasses,
      extraClasses: {
        type: 'string',
        label: 'Extra Classes'
      },
      style: {
        type: 'string',
        label: 'Style Declarations'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'insidePart',
          'className',
          'style'
        ]
      }
    }
  }
};
