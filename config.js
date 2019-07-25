/* global module */

let config = {
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    "sprite-svg",
    "nice-select",
    "input",
    "editor",
    // "sprite-png",
    // "object-fit-polyfill",
  ],
  "addStyleBefore": [
    "src/scss/bootstrap.scss",
    "src/scss/variables.scss",
    "src/scss/mixins.scss",
    "src/scss/helpers/normalize.scss",
    "src/scss/helpers/placeholders.scss",
    "src/scss/helpers/fonts.scss",
    "src/scss/helpers/base.scss",
    "src/scss/vendors/quill.scss",
  ],
  "addStyleAfter": [
    // "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js",
    "./dashboard.js",
  ],
  "addAssets": {
    "src/img/demo-*.{png,svg,jpg,jpeg}": "img/",
    "src/js/bootstrap.min.js": "js/",
    // "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
