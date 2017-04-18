
require('font-awesome/css/font-awesome.css');

require('reveal.js/css/reveal.css');

require('./my-theme.scss');
require('./style.scss');

require('script-loader!reveal.js/js/reveal.js');

require("html-loader!./index.html");

Reveal.initialize({
  center: false
});
