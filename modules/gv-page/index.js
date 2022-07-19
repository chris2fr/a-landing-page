// GV Page Module
// These are generic GV Pages
module.exports = {
  extend: '@apostrophecms/page-type',
  fields: {
    add: {
      subtitle: {
        type: 'string'
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'undo',
                'redo',
                '|',
                'styles',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList',
                '|',
                'blockquote',
                'horizontalRule',
                'codeBlock',
                '|',
                'alignLeft',
                'alignRight',
                'alignJustify'
              ],
              styles: [
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
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/html': {},
          }
        }
      }
    },
    group: {
      basics: {
        fields: ['title', 'subtitle', 'main']
      }
    }
  }
}