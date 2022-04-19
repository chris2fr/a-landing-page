require('apostrophe')({
  shortName: 'a-landing-page',
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
    'two-column-widget': {},
    'three-column-widget': {},
    '@apostrophecms/seo': {},
    '@apostrophecms/sitemap': {
            options: {
            baseUrl:"https://www.lesgv.com"
            }
    },
    '@apostrophecms/redirect': {},
    //'apostrophe-redirects': {},
    //'apostrophe-dialog-box': {},
    //'apostrophe-dialog-box-modal': {},
    // optional index page for dialog boxes, useful if dialog styles conflict with apos modal styles
    //'apostrophe-dialog-box-pages': {}
    //'apostophecms/favicons': {},
    '@apostrophecms/open-graph': {},
    // The main form module
    '@apostrophecms/form': {},
    // The form widget module, allowing editors to add forms to content areas
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
    // The event page module
    '@apostrophecms/event-page': {},
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    'lagrandepage': {},
    'pagevoisine': {}
  }
});
