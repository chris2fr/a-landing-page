module.exports = {
  options: {
    defaultOptions: {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'alignLeft',
                'alignCenter',
                'alignRight',
                '|',
                'bulletList',
                'orderedList',
                'blockquote',
                'codeBlock',
                'horizontalRule',
                '|',
                'undo',
                'redo'
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
    }
  }
};
