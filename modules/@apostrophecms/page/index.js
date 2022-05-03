// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'uikit',
        label: 'UIKit Template'
      }, 
      {
        name: 'uikit-page01',
        label: 'UIKit Page 01'
      }, 
      {
        name: 'another-landing-page',
        label: 'another-landing-page'
      }, 
      {
        name: 'clean',
        label: 'Clean Template'
      }, 
      /*
      {
        name: 'bulma',
        label: 'Bulma Template'
      }, 
      */
      {
        name: 'html5-boilerplate',
        label: 'html5-boilerplate'
      },
      // Adding the event page type
      {
        name: '@apostrophecms/event',
        label: 'Event Page'
      },
      {
        name: 'another-default-page',
        label: 'another-default-page'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Initial Home'
      },
    ]
  }
};
