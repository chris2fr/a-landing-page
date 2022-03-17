# Apostrophe Landing

This is [Apostrophe Landing](https://github.com/lesgrandsvoisins/a-landing-page) template for [ApostropheCMS](https://www.apostrophecms.com) and used for the website [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) and potentially yours. **See [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) for a live demo.** It consists of some public files and two modules : lagrandepage and two-column-widget. Everything is in the repository.

More credits: I, [@chris2fr](https://github.com/chris2fr/) am the initial author of this [Apostrophe Landing](https://github.com/chris2fr/), itself based on [My Landing Page project](https://github.com/wonderfullandingpage/mylandingpage), itself based on [React-Landing-Page-Template](https://github.com/issaafalkattan/React-Landing-Page-Template), itself based on [the "Interact" template from Free-CSS.com](https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/) and using the [Proton Javascript particule libarary](https://github.com/drawcall/Proton). I have removed JQuery and put everything in Bootstrap. Consider using Apostrophe CMS. It is good for you, your webserver, your editors and your viewers. 

## Features

* Up to 7 personalized content sections plus a header and a footer
* Responsive
* Generic
* Pretty

See [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) for a working demo.

## Installation Instructions

Follow installation instructions for ApostropheCMS and then plop the contents for this repository into the modules folder.

Add the following to `@apostrophe/page/index.js`:

```js
module.exports = {
  options: {
    types: [
      [...]
      {
        name: 'a-landing-page',
        label: 'Apostrophe Landing Page'
      },
      {
        name: 'a-landing-page-inside-page',
        label: 'Apostrophe Landing / Inside Page'
      }
    ]
  }
}
```


This code creates a page type called "A Landing Page." La Grande Page is the landing page. Sections will only appear if the title is present (eg. section 5 will be visible if section5title has some text). The "Short Titles" are only used for the menu. The alternative languages provide links to page names that are the two-letter codes indicated.



## To Do

I would like to put the libraries in modules, such as modules/bootstrap and modules/protonjs. These modules would bring just the library assets for the front end.

I would like to personalize the rich-text widget with a wrapper module. This wrapper module could be modules/custom-rich-text-widget. The idea would be to put the custom code there rather than @apostrophe/rich-text-widget. Just more elegant maybe.

Implement a guide from [apostrophecms/apostrophe-guides](https://github.com/apostrophecms/apostrophe-guides) specific to this module / page type. 

My i18n is hacked and I am sure there is a more harmonious way of doing it in Apostrophe. I also have lang="en" on the main page when the actual language is "fr" in my case. I need to figure out how to configure the current page language.

## Please Contribute if You Use

If you are able to improve things, or would just be so kind as to share your use of this template (even if intranet), I am appreciative. This is AGPL, so we try to share our improvements. 

There are quite a few issues, I am sure, with the correct use of Apostrophe CMS. I almost would like the bootstrap, proton and rich-text configuration options to be in separate modules rather than modifying files directly in modules/@apostrophecms. I don't quite understand how I can get a javascript defer call without using the global public repository. I am learning, so some patience with me please.


Yours,

Chris Mann  
[LesGrandsVoisins.com](https://www.lesgrandsvoisins.com)
