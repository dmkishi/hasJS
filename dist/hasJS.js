// hasJS v1.0.4 (2016-05-04T16:00:47.290Z)
// Most basic JavaScript detector. Replaces '.no-js' with '.js' in the HTML tag, and that's it.
// <https://github.com/dmkishi/hasJS>
(function() {
  var html = document.getElementsByTagName('html')[0];
  html.className = html.className.replace(/\bno-js\b/, 'js');
})();
