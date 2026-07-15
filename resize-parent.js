(function () {
  function postHeight() {
    var height = Math.ceil(document.documentElement.scrollHeight);
    window.parent.postMessage({ source: "app-ad-banner", height: height }, "*");
  }

  window.addEventListener("load", postHeight);
  window.addEventListener("resize", postHeight);

  if ("ResizeObserver" in window) {
    new ResizeObserver(postHeight).observe(document.body);
  }
})();
