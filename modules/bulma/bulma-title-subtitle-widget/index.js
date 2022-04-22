module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Bulma Title & Subtitle'
  },
  fields: {
    add: {
      titleSubtitle: {
        type: 'area',
        options: {
          '@apostrophecms/rich-text': {
            class: 'container',
            toolbar: [
              'styles',
              'bold',
              'italic',
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
                label: 'Subtitle',
                class: 'subtitle'
              }    
            ]
          }
        }
      }
    }
  }
};