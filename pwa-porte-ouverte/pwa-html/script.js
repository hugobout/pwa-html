document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".collapsible").collapsible();
});
var instance = M.Collapsible.getInstance(elem);
instance.open(3);
instance.close(3);
instance.destroy();
