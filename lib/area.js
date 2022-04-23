const basicConfig = {
  '@apostrophecms/image': {},
  '@apostrophecms/video': {},
  '@apostrophecms/html': {},
  '@apostrophecms/rich-text': {
    class: 'container',
    className: 'container',
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
        label: 'Heading 2 (H2)',
        class: 'title'
      },
      {
        tag: 'h3',
        label: 'Heading 3 (H3)',
        class: 'title'
      },
      {
        tag: 'h4',
        label: 'Heading 4 (H4)',
        class: 'title'
      },
      {
        tag: 'h5',
        label: 'Meta (H5)',
        class: 'title'
      }
    ]
  }
};

const fullConfig = Object.assign({
  article: {},
  columns: {},
  container: {},
  button: {}
}, basicConfig);

const bulmaConfig = Object.assign({
  'bulma-title-subtitle': {
     toolbar: [
       'styles',
       'bold',
       'italic',
       'strike',
       'alignLeft',
       'alignCenter',
       'alignRight'
     ],
     styles: [
       // you may also use a `class` property with these
       {
         tag: 'h2',
         label: 'Heading 2 (H2)',
         class: 'title'
       },
       {
         tag: 'h3',
         label: 'Heading 3 (H3)',
         class: 'title'

       },
       {
         tag: 'h4',
         label: 'Heading 4 (H4)',
         class: 'title'

       },
       {
         tag: 'p',
         label: 'SubHeading Paragraph (P)',
         class: 'subtitle'
       }
     ]
  }
}, basicConfig);

const uikitConfig = Object.assign({
  'uikit-div': {}},
  basicConfig);

module.exports = {
  basicConfig,
  fullConfig,
  bulmaConfig,
  uikitConfig
};
