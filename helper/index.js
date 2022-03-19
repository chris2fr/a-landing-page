const aLandingPage = require("..");

module.exports = {
  options: {
    alias: 'helper'
  },
  init(self) {
    self.addHelpers({
      findHomePage: (page) => {
        if (!page) {
          return;
        }
        let thisIsHome = page;
        // if (page._ancestors.length > 0) {
        //   thisIsHome = page._ancestors[page._ancestors.length - 1];
        // }
        thisIsHome.limitedAncestors = [];

        if (!page.breadcrumbIsRoot) {
          for (var i = 0; i < page._ancestors.length; i++) {
            if (page._ancestors[i].breadcrumbIsRoot) {
              thisIsHome.limitedAncestors = [];
              thisIsHome = page._ancestors[i];
            } else {
              thisIsHome.limitedAncestors.push(page._ancestors[i])
            }
          }
        }

        if (!thisIsHome.siteTitle) {
          thisIsHome.siteTitle = thisIsHome.title;
        }
        return thisIsHome;
      },
      getMenuTitle: (page) => {
        if (!page) {
          return;
        }
        if (page.menuTitle) {
         return page.menuTitle;
        } else {
          return page.title;
        }
      }
    });
  }
};
//     self.addHelpers({

//       }
//     });
//   }
// }