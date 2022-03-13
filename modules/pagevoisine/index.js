module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Page voisine'
  },
  fields: {
    add: {
      siteTitle: {
        label: 'Title of this website',
        type: 'string'
      },
      description: {
        label: 'Description of this page (for SEO)',
        type: 'string'
      },
      imageUrl: {
        label: 'URL of an image of this page (for SEO)',
        type: 'string'
      },
      url: {
        label: 'URL of this page (for SEO)',
        type: 'string'
      },
      extracss: {
        label: 'Extra CSS Code for this Page',
        type: 'string'
      },
      headJavascript: {
        label: 'Javascript at end of Header (GAnalytics or Plausible.io)',
        type: 'string'
      },
      title: {
        label: 'Section 1 (Header) Title',
        type: 'string'
      },
      content: {
        type: 'area',
        label: 'Section 1 (Header) Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            'three-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
    },
    group: {
      basics: {
        label: 'Header',
        fields: [
          'siteTitle',
          'title',
          'content'        ]
      },
      seo: {
        label: "SEO and CSS",
        fields: [
          'description',
          'url',
          'imageUrl',
          'extracss',
          'headJavascript'
        ]
      }
    }
  }
};
