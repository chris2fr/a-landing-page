module.exports = {
  extend: '@apostrophecms/rich-text-widget',
  options: {
    name: 'bulma-title-subtitle',
    label: 'Title with Subtitle',
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
};
