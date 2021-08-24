# Apostrophe Landing

This is a landing-page template for [ApostropheCMS](https://www.apostrophecms.com) and used for the website [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) and potentially yours. **See [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) for a live demo.** It consists of some public files and two modules : lagrandepage and two-column-widget. Everything is in the repository.

More credits: I, [@chris2fr](https://github.com/chris2fr/) am the initial author of this [Apostrophe Landing](https://github.com/chris2fr/), itself based on [My Landing Page project](https://github.com/wonderfullandingpage/mylandingpage), itself based on [React-Landing-Page-Template](https://github.com/issaafalkattan/React-Landing-Page-Template), itself based on [the "Interact" template from Free-CSS.com](https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/) and using the [Proton Javascript particule libarary](https://github.com/drawcall/Proton). I have removed JQuery and put everything in Bootstrap. Consider using Apostrophe CMS. It is good for you, your webserver, your editors and your viewers. 

## Features

* Up to 7 personalized content sections plus a header and a footer
* Fully Bootstrap
* Responsive
* Generic
* Pretty
* Multilingual (but I think I may have butted heads with Apostrophe CMS in their multilingual logic)

See [lesgrandsvoisins.com](https://www.lesgrandsvoisins.com) for a working demo.

## Installation Instructions

Follow installation instructions for ApostropheCMS and then plop the contents for this repository into the root folder. I know this could be improved, but it would be nice if someone else could do the improving.

This code creates a page type called "La Grande Page." La Grande Page is the landing page. Sections will only appear if the title is present (eg. section 5 will be visible if section5title has some text). The "Short Titles" are only used for the menu. The alternative languages provide links to page names that are the two-letter codes indicated.

## Please Contribute if You Use

If you are able to improve things, or would just be so kind as to share your use of this template (even if intranet), I am appreciative. This is AGPL, so we try to share our improvements. 

There are quite a few issues, I am sure, with the correct use of Apostrophe CMS. I almost would like the bootstrap, proton and rich-text configuration options to be in separate modules rather than modifying files directly in modules/@apostrophecms. I don't quite understand how I can get a javascript defer call without using the global public repository. I am learning, so some patience with me please.


Yours,

Chris Mann  
LesGrandsVoisins.com
