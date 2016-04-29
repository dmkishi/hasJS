/* Minimal JavaScript detector.
 * Replaces '.no-js' with '.js' in the html tag.
 */
(function() {
  var html = document.getElementsByTagName('html')[0];
  html.className = html.className.replace(/\bno-js\b/, 'js');
})();
