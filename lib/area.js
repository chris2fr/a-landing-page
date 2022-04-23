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
        tag: 'span',
        label: 'Text Lead (span)',
        class: 'uk-text-lead'
      },
      {
        tag: 'span',
        label: 'Text Meta (span)',
        class: 'uk-text-meta'
      }
    ]
  },
  article: {},
  columns: {},
  button: {},
  'uikit-div': {}
};

const fullConfig = Object.assign({
  container: {}
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
  },
  basicConfig);

module.exports = {
  basicConfig,
  fullConfig,
  bulmaConfig,
  uikitConfig
};
