
require('font-awesome/css/font-awesome.css');
require('@typopro/web-junction/TypoPRO-Junction.css');
require('@typopro/web-montserrat/TypoPRO-Montserrat.css');

require('reveal.js/css/reveal.css');

require('./my-theme.scss');
require('./style.scss');

require('script-loader!reveal.js/js/reveal.js');

require("html-loader!./index.html");

Reveal.initialize({
  center: false,
  progress: false,
  controls: false
});
