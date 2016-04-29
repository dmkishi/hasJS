/* Most minimal JavaScript detector.
 * Just replaces '.no-js' with '.js' in the HTML tag.
 */
(function() {
  var html = document.getElementsByTagName('html')[0];
  html.className = html.className.replace(/\bno-js\b/, 'js');
})();
