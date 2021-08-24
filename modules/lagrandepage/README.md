# La Grande Page Apostrophe CMS Plugin

## From Discord

```
Alex Bea
Magical!

If the code is only used by a widget then a widget player would be the correct way. If it is used outside widgets (make the whole page background into fireworks) then the onReadyAndRefresh utility is the right place: https://v3.docs.apostrophecms.org/guide/front-end-helpers.html#general-utility-methods. It makes sure the code will run every time the page content refreshes (which is a lot while editing content).
Front end helper methods | Apostrophe 3 Documentation
```

```
Alex Bea — 08/18/2021
If it simply adds functionality to the window then putting it in a public directory seems like it would be fine. You could put it to the top of your modules object in app.js to have it load earlier (this is why we often have an asset module simply for managing global assets).

If it does need to reconnect to DOM elements that are refreshing then onReadyAndRefresh would be The Way.
```

```
I needed this comment right now. Good timing.
I spent way more time than I would like to admit on the subject, ad kind of did everything in the public folders. 
result:
https://apostrophe.lesgrandsvoisins.com/
source
https://chiselapp.com/user/chris2fr/repository/apostrophe-lesgrandsvoisins-com/dir?ci=trunk
```

```
boutell — Yesterday at 8:16 PM
@chris2fr when editing, parts of the page can be reloaded. If the editable content is the part of the page that your js is concerned with, you should wrap it:

apos.onReadyAndRefresh(() => { ... your code here ... })


Then it is guaranteed to run both at page load time and any time the editor refreshes the main content section of the page.
```
