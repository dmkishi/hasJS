// hasJS v1.0.4 (2016-05-02T20:07:42.017Z)
// Most basic JavaScript detector. Replaces '.no-js' with '.js' in the HTML tag, and that's it.

(function() {
  var html = document.getElementsByTagName('html')[0];
  html.className = html.className.replace(/\bno-js\b/, 'js');
})();
