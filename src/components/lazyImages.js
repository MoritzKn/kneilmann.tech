document.addEventListener("DOMContentLoaded", function() {
  if (!window.IntersectionObserver) {
    var nodeList = document.querySelectorAll(".img noscript");
    for (var i = 0; i < nodeList.length; i++) {
      nodeList[i].outerHTML = nodeList[i].innerText;
    }
    return;
  }

  var options = {
    rootMargin: "100%",
    threshold: 0
  };

  var io = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (entry.isIntersecting) {
        var noscript = entry.target.querySelector("noscript");
        if (noscript) {
          noscript.outerHTML = noscript.innerText;
        }
      }
    }
  }, options);

  var imgs = document.querySelectorAll(".img");
  for (var i = 0; i < imgs.length; i++) {
    io.observe(imgs[i]);
  }
});
