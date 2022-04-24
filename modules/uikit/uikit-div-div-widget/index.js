module.exports = {
  extend: '@apostrophecms/widget-type',
  icons: {
    'border-outside': 'BorderOutside'
  },
  options: {
    name: 'uikit-div-div',
    label: 'UIKit Div Div',
    icon: 'border-outside',
  },
  fields: {
    add: {
            outsidePartClasses: require('../../../lib/uikitparams').divClasses,
            outsideExtraClasses: {
              type: 'string',
              label: 'extraClasses'
            },
            outsideExtraStyle: {
              type: 'string',
              label: 'Extra Outside Style'
      },
      insideParts: {
        type: "array",
        label: 'Inside Divs',
        titleField: 'name',
        fields: {
          add: {
            name: {
              type: 'string',
              label: 'Name'
            },
            ukClasses: require('../../../lib/uikitparams').divClasses,
            extraClasses: {
              type: 'string',
              label: 'Extra Class Declarations'
            },
            extraStyle: {
              type: 'string',
              label: 'Extra Style'
            },
            main: {
              type: 'area',
              options: {
                widgets: require('../../../lib/area').uikitConfig
              }
            }
          }
        }
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