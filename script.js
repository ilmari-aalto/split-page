function changeSiteLeft() {
  var site = $('#leftForm').val();
  if (!site.startsWith('http')) {
    site = "https://" + site
  }
  var iframe = document.getElementById('leftIframe');
  iframe.src = site;
  iframe.src = iframe.src;
}

function changeSiteRight() {
  var site = $('#rightForm').val();
  if (!site.startsWith('http')) {
    site = "https://" + site
  }
  var iframe = document.getElementById('rightIframe');
  iframe.src = site;
  iframe.src = iframe.src;
}
