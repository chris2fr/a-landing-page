// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'lagrandepage',
        label: 'La Grande Page'
      },
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: 'pagevoisine',
        label: 'Page Voisine'
      },
      {
        name: 'a-landing-page',
        label: 'A Landing Page'
      }
    ]
  }
}