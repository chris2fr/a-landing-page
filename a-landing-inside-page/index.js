module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'An Inside Page'
  },
  fields: {
    add: {
      cssExtra: {
        label: 'Extra CSS Code for this Page',
        type: 'string'
      },
      javascriptHeadExtra: {
        label: 'Javascript at end of Header (GAnalytics or Plausible.io)',
        type: 'string'
      },
      menuTitle: {
        label: 'A Short title for Menus',
        type: 'string'
      },
      sections: {
        type: 'area',
        label: 'Section of the A Landing Page',
        options: {
          max: 7,
          widgets: {
            'a-landing-section': {}
          }
        }
      }
    }
  }
};
