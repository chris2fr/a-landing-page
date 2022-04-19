// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'another-landing-page',
        label: 'another-landing-page'
      },
      {
        name: 'another-default-page',
        label: 'another-default-page'
      },
      {
        name: 'a-landing-page',
        label: 'A Landing Page'
      },
      {
        name: 'a-landing-inside-page',
        label: 'A Landing Inside Page'
      },
      {
        name: 'default-page',
        label: 'Initial Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Initial Home'
      },
    ]
  }
};
