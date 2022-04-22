const { stringify } = require('querystring');

module.exports = {
  extend: '@apostrophecms/widget-type',
  icons: {
    'border-outside': 'BorderOutside'
  },
  options: {
    label: 'UIKit Div',
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
              label: 'Class',
              choices: [
                { value: 'uk-alert', label: 'uk-alert'},
                { value: 'uk-align-center', label: 'uk-align-center'},
                { value: 'uk-animation-fade uk-animation-reverse', label: 'uk-animation-fade uk-animation-reverse'},
                { value: 'uk-background-primary', label: 'uk-background-primary'},
                { value: 'uk-background-secondary', label: 'uk-background-secondary'},
                { value: 'uk-column-1-2', label: 'uk-column-1-2'},
              ]
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