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
          widgets: require('../../../lib/area').basicConfig
        }
      },
      className: {
        type: 'checkboxes',
        label: 'Classes',
        choices: [
          { value: 'uk-alert', label: 'uk-alert'},
          { value: 'uk-alert-primary', label: 'uk-alert-primary'},
          { value: 'uk-alert-success', label: 'uk-alert-success'},
          { value: 'uk-alert-warning', label: 'uk-alert-warning'},
          { value: 'uk-alert-danger', label: 'uk-alert-danger'},
          { value: 'uk-align-left', label: 'uk-align-left'},
          { value: 'uk-align-center', label: 'uk-align-center'},
          { value: 'uk-align-right', label: 'uk-align-right'},
          { value: 'uk-animation-fade', label: 'uk-animation-fade'},
          { value: 'uk-animation-scale-up', label: 'uk-animation-scale-up'},
          { value: 'uk-animation-scale-down', label: 'uk-animation-scale-down'},
          { value: 'uk-animation-slide-top', label: 'uk-animation-slide-top'},
          { value: 'uk-animation-slide-bottom', label: 'uk-animation-slide-bottom'},
          { value: 'uk-animation-slide-left', label: 'uk-animation-slide-left'},
          { value: 'uk-animation-slide-right', label: 'uk-animation-slide-right'},
          { value: 'uk-animation-shake', label: 'uk-animation-shake'},
          { value: 'uk-animation-reverse', label: 'uk-animation-reverse'},
          { value: 'uk-background-primary', label: 'uk-background-primary'},
          { value: 'uk-background-secondary', label: 'uk-background-secondary'},
          { value: 'uk-background-default', label: 'uk-background-default'},
          { value: 'uk-background-muted', label: 'uk-background-muted'},
          { value: 'uk-background-cover', label: 'uk-background-cover'},
          { value: 'uk-column-1-2', label: 'uk-column-1-2'},
        ]
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
