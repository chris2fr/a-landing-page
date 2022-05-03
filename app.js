require('apostrophe')({
  shortName: 'web',
  nestedModuleSubdirs: true,
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      },
    },
    '@apostrophecms/html-widget': {},
    '@apostrophecms/seo': {},
    '@apostrophecms/sitemap': {
            options: {
            baseUrl:"https://web.lesgrandsvoisins.com"
            }
    },
    '@apostrophecms/redirect': {},
    '@apostrophecms/open-graph': {},
    '@apostrophecms/form': {},
    '@apostrophecms/form-widget': {},
    // Form field widgets, used by the main form module to build forms.
    '@apostrophecms/form-text-field-widget': {},
    '@apostrophecms/form-textarea-field-widget': {},
    '@apostrophecms/form-select-field-widget': {},
    '@apostrophecms/form-radio-field-widget': {},
    '@apostrophecms/form-file-field-widget': {},
    '@apostrophecms/form-checkboxes-field-widget': {},
    '@apostrophecms/form-boolean-field-widget': {},
    '@apostrophecms/form-conditional-widget': {},
    // The main event piece type module
    '@apostrophecms/event': {},
    '@apostrophecms/event-page': {},
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'html5-boilerplate': {},
    'clean': {},
    //'bulma-title-subtitle': {},
    'a-landing-page': {},
    'uikit':{},
    'uikit-page01':{},
    'uikit-div-widget': {},
    'uikit-div-div-widget': {}
  }
});
