// Assemble the email address at runtime so it never appears in the HTML source.
(function () {
  var addr = ['ali.alsabeh', 'usca.edu'].join(String.fromCharCode(64));
  document.querySelectorAll('.js-email').forEach(function (el) {
    el.href = 'mailto:' + addr;
  });
})();
