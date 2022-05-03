module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Another Landing Page",
    pluralLabel: "Another-Landing Pages",
  },
  fields: {
    add: {
      arbitraryLinks: {
        label: "Arbitrary Links",
        type: "array",
        titleField: "displayText",
        fields: {
          add: {
            displayText: {
              type: "string",
              label: "Text to Display",
            },
            url: {
              type: "string",
              label: "url",
            },
            sameWindow: {
              type: "boolean",
              label: "Open in Same Window?",
            },
          },
        },
      },
      header: {
        type: "area",
        options: {
          widgets: require("../../lib/area").bloatedConfig,
        },
      },
      sections: {
        type: "area",
        label: "Sections",
        options: {
          max: 7,
          widgets: {
            "another-landing-section": {},
          },
        },
      },
      footer: {
        type: "area",
        options: {
          widgets: require("../../lib/area").bloatedConfig,
        },
      },
      arbitraryCSS: {
        type: "string",
        label: "Arbitrary CSS",
      },
      cssStyles: {
        type: "array",
        label: "CSS Styles for this page",
        titleField: "selector",
        fields: {
          add: {
            selector: {
              type: "string",
              label: "CSS Selector",
            },
            rules: {
              type: "string",
              label: "CSS Rules",
            },
            activate: {
              type: "boolean",
              label: "Activate ?",
              default: true,
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "arbitraryLinks", "header", "sections", "footer"],
      },
    },
  },
};
