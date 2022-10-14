var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    //console.log(mutation)
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // element added to DOM
      var mTarget = [].some.call(mutation.addedNodes, function (el) {
        if (el.classList.contains("bcst-player")) {
          // element has class `bcst-player`
          console.log('element ".bcst-player" added');
          makeDraggable(el);
        } else {
          return false;
        }
      });
    }
  });
});

var config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
};

var bcasts = document.getElementById("broadcastSlots");
observer.observe(bcasts, config);

function makeDraggable(el) {
  jQuery(el).addClass("draggable");
  jQuery(el).draggable();
}
