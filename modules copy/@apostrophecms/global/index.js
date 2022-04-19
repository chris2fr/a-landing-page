module.exports = {
  fields: {
    add: {
      siteName: {
        type: 'string',
        label: 'Website name'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['siteName']
      }
    }
  }
}
