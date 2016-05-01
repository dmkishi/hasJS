/* Most minimal JavaScript detector.
 * Replaces '.no-js' with '.js' in the HTML tag, and that's it.
 */
(function() {
  var html = document.getElementsByTagName('html')[0];
  html.className = html.className.replace(/\bno-js\b/, 'js');
})();
