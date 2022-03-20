module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'A Landing Page'
  },
  fields: {
    add: {
      siteTitle: {
        label: 'Website Title (Top Left text)',
        type: 'string'
      },
      cssExtra: {
        label: 'Extra CSS Code for this Page',
        type: 'string'
      },
      javascriptHeadExtra: {
        label: 'Javascript at end of Header (GAnalytics or Plausible.io)',
        type: 'string'
      },
      isBreadcrumbRoot: {
        label: 'Is this the top of the local navigation (breadcrumbs) ? ',
        type: 'boolean'
      },
      menuTitle: {
        label: 'A Short title for Menus',
        type: 'string'
      },
      header: {
        type: 'area',
        label: 'Header Content',
        options: {
          max: 1,
          widgets: {
            'a-landing-section': {}
          }
        }
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
      },
      footer: {
        type: 'area',
        label: 'Footer Content',
        options: {
          max: 1,
          widgets: {
            'a-landing-section': {}
          }
        }
      },
      colophon: {
        type: 'area',
        label: 'Colophon',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'a-landing-colx2': {},
            'a-landing-colx3': {},
            '@apostrophecms/html': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Header',
        fields: [
          'siteTitle',
          'header',
          'menuTitle',
          'isBreadcrumbRoot'
        ]
      },
      sections: {
        label: 'Sections',
        fields: [
          'sections'
        ]
      },
      footer: {
        label: "Footer",
        fields: [
          'footer',
          'colophon'
        ]
      },
      scripts: {
        label: "Scripts",
        fields: [
          'cssExtra',
          'javascriptHeadExtra'
        ]
      }
    }
  }
};
