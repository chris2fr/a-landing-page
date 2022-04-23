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
          { value: 'uk-card', label: 'uk-card'},
          { value: 'uk-card-body', label: 'uk-card-body'},
          { value: 'uk-card-default', label: 'uk-card-default'},
          { value: 'uk-card-primary', label: 'uk-card-primary'},
          { value: 'uk-card-secondary', label: 'uk-card-secondary'},
          { value: 'uk-card-hover', label: 'uk-card-hover'},
          { value: 'uk-card-small', label: 'uk-card-small'},
          { value: 'uk-card-large', label: 'uk-card-large'},
          { value: 'uk-card-title', label: 'uk-card-title'},
          { value: 'uk-card-header', label: 'uk-card-header'},
          { value: 'uk-card-footer', label: 'uk-card-footer'},
          { value: 'uk-card-media-top', label: 'uk-card-media-top'},
          { value: 'uk-card-media-bottom', label: 'uk-card-media-bottom'},
          { value: 'uk-card-badge', label: 'uk-card-badge'},
          { value: 'uk-label', label: 'uk-label'},
          { value: 'uk-leader', label: 'uk-leader'},
          { value: 'uk-lightbox', label: 'uk-lightbox'},
          { value: 'uk-margin', label: 'uk-margin'},
          { value: 'uk-margin-top', label: 'uk-margin-top'},
          { value: 'uk-margin-left', label: 'uk-margin-left'},
          { value: 'uk-margin-right', label: 'uk-margin-right'},
          { value: 'uk-margin-bottom', label: 'uk-margin-bottom'},
          { value: 'uk-margin-small', label: 'uk-margin-small'},
          { value: 'uk-tile-default', label: 'uk-tile-default'},
          { value: 'uk-tile-muted', label: 'uk-tile-muted'},
          { value: 'uk-tile-primary', label: 'uk-tile-primary'},
          { value: 'uk-tile-secondary', label: 'uk-tile-secondary'},
          { value: 'uk-padding', label: 'uk-padding'},
          { value: 'uk-padding-remove', label: 'uk-padding-remove'},
          { value: 'uk-sortable', label: 'uk-sortable'},
          { value: 'uk-sortable-handle', label: 'uk-sortable-handle'},
          { value: 'uk-sticky', label: 'uk-sticky'},
          { value: 'uk-text-lead', label: 'uk-text-lead'},
          { value: 'uk-text-meta', label: 'uk-text-meta'},
          { value: 'uk-width-1-2', label: 'uk-width-1-2'},
          { value: 'uk-width-1-3', label: 'uk-width-1-3'},
          { value: 'uk-width-2-3', label: 'uk-width-2-3'},
          { value: 'uk-width-1-4', label: 'uk-width-1-4'},
          { value: 'uk-width-3-4', label: 'uk-width-3-4'},
          { value: 'uk-column-1-2', label: 'uk-column-1-2'},
          { value: 'uk-column-1-3', label: 'uk-column-1-3'},
          { value: 'uk-column-1-4', label: 'uk-column-1-4'},
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
