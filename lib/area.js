const basicConfig = {
  '@apostrophecms/image': {
    sizes: '() Unbounded, (max-width: 15rem;max-height: 15rem) 15 REM Box'
  },
  '@apostrophecms/video': {},
  '@apostrophecms/rich-text': {
    toolbar: [
      'styles',
      'bold',
      'italic',
      'strike',
      'link',
      'bulletList',
      'orderedList',
      'blockquote',
      'alignLeft',
      'alignCenter',
      'alignRight'
    ],
    styles: [
      // you may also use a `class` property with these
      {
        tag: 'p',
        label: 'Paragraph (P)'
      },
      {
        tag: 'h2',
        label: 'Heading 2 (H2)'
      },
      {
        tag: 'h3',
        label: 'Heading 3 (H3)'
      },
      {
        tag: 'h4',
        label: 'Heading 4 (H4)'
      },
      {
        tag: 'h5',
        label: 'Meta (H5)',
        class: 'meta'
      },
      {
        tag: 'span',
        label: 'Section: Sub-Heading',
        class: 'section-subheading'
      }
    ]
  },
  columns: {},
  container: {},
  button: {}
};

const fullConfig = Object.assign({
  article: {}
}, basicConfig);

module.exports = {
  basicConfig,
  fullConfig
};
