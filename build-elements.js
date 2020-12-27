const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-web-component-example/runtime.js',
    './dist/angular-web-component-example/polyfills.js',
    './dist/angular-web-component-example/styles.js',    
    './dist/angular-web-component-example/vendor.js',
    './dist/angular-web-component-example/main.js'
  ];
  await fs.ensureDir('./dist/elements');
  await concat(files, './dist/elements/my-element.js');
})();