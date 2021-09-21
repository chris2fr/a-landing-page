module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Les Grands Voisins'
  },
  fields: {
    add: {
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
      langcode1: {
        label: 'Alternative Language Code 1 (2-Letters)',
        type: 'string'
      },
      langcode2: {
        label: 'Alternative Language Code 2 (2-Letters)',
        type: 'string'
      },
      langcode3: {
        label: 'Alternative Language Code 3 (2-Letters)',
        type: 'string'
      },
      langcode4: {
        label: 'Alternative Language Code 4 (2-Letters)',
        type: 'string'
      },
      langcode5: {
        label: 'Alternative Language Code 5 (2-Letters)',
        type: 'string'
      },
      langcode6: {
        label: 'Alternative Language Code 6 (2-Letters)',
        type: 'string'
      },
      section1title: {
        label: 'Section 1 (Header) Title',
        type: 'string'
      },
      section1shorttitle: {
        label: 'Section 1 (Header) Short Title',
        type: 'string'
      },
      section1content: {
        type: 'area',
        label: 'Section 1 (Header) Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section2title: {
        label: 'Section 2 Title',
        type: 'string'
      },
      section2shorttitle: {
        label: 'Section 2 Short (Menu) Title',
        type: 'string'
      },
      section2content: {
        type: 'area',
        label: 'Section 2 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section3title: {
        label: 'Section 3 Title',
        type: 'string'
      },
      section3shorttitle: {
        label: 'Section 3 Short (Menu) Title',
        type: 'string'
      },
      section3content: {
        type: 'area',
        label: 'Section 3 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section4title: {
        label: 'Section 4 Title',
        type: 'string'
      },
      section4shorttitle: {
        label: 'Section 4 Short Title',
        type: 'string'
      },
      section4content: {
        type: 'area',
        label: 'Section 4 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section5title: {
        label: 'Section 5 Title',
        type: 'string'
      },
      section5shorttitle: {
        label: 'Section 5 Short Title',
        type: 'string'
      },
      section5content: {
        type: 'area',
        label: 'Section 5 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section6title: {
        label: 'Section 6 Title',
        type: 'string'
      },
      section6shorttitle: {
        label: 'Section 6 Short Title',
        type: 'string'
      },
      section6content: {
        type: 'area',
        label: 'Section 6 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section7title: {
        label: 'Section 7 Title',
        type: 'string'
      },
      section7shorttitle: {
        label: 'Section 7 Short Title',
        type: 'string'
      },
      section7content: {
        type: 'area',
        label: 'Section 7 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section8title: {
        label: 'Section 8 Title',
        type: 'string'
      },
      section8shorttitle: {
        label: 'Section 8 Short Title',
        type: 'string'
      },
      section8content: {
        type: 'area',
        label: 'Section 8 Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
      section9title: {
        label: 'Section 9 (Footer) Title',
        type: 'string'
      },
      section9shorttitle: {
        label: 'Section 9 (Footer) Short Title',
        type: 'string'
      },
      section9content: {
        type: 'area',
        label: 'Section 9 (Footer) Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'two-column': {},
            '@apostrophecms/html': {}
          }
        }
      },
    },
    group: {
      basics: {
        label: 'Header',
        fields: [
          'title',
          'section1title',
          'section1shorttitle',
          'section1content'        ]
      },
      sections: {
        label: 'Sections',
        fields: [
          'section2title',
          'section2shorttitle',
          'section2content',
          'section3title',
          'section3shorttitle',
          'section3content',
          'section4title',
          'section4shorttitle',
          'section4content',
          'section5title',
          'section5shorttitle',
          'section5content',
          'section6title',
          'section6shorttitle',
          'section6content',
          'section7title',
          'section7shorttitle',
          'section7content',
          'section8title',
          'section8shorttitle',
          'section8content',
        ]
      },
      footer: {
        label: "Footer",
        fields: [
          'section9title',
          'section9shorttitle',
          'section9content'
        ]
      },
      languages: {
        label: "Languages",
        fields: [
          'langcode1',
          'langcode2',
          'langcode3',
          'langcode4',
          'langcode5',
          'langcode6'
        ]
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
