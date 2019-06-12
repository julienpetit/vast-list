(function() {

  function moveWebview(x, y) {
    var maxSize = window.mraid.getMaxSize();
    maxSize.height -= 24;
    window.mraid.ogyUpdateWebView('controller', {
      position: { x: x, y: y },
      size: maxSize
    });
  }

  function moveX50() {
    var size = window.mraid.getMaxSize();
    var x = Math.floor(size.width / 2) - 100;

    moveWebview(x, 0);
  }


  function moveX50to100() {
    var size = window.mraid.getMaxSize();
    var x = Math.floor(size.width / 2) + 100;

    moveWebview(x, 0);
  }


  function moveXfrom100() {
    var size = window.mraid.getMaxSize();
    var x = size.width + 100;

    moveWebview(x, 0);
  }


  function moveY50() {
    var size = window.mraid.getMaxSize();
    var y = Math.floor(size.height / 2) - 100;

    moveWebview(0, y);
  }


  function moveY50to100() {
    var size = window.mraid.getMaxSize();
    var y = Math.floor(size.height / 2) + 100;

    moveWebview(0, y);
  }


  function moveYfrom100() {
    var size = window.mraid.getMaxSize();
    var y = size.height + 100;

    moveWebview(0, y);
  }

  function createButton(id, text, callback) {
    var button = document.createElement("button");
    button.id = id;
    button.innerHTML = text;
    button.style.cssText = "padding: 10px;";
    button.addEventListener('click', callback);
    return button;
  }

  function createButtons() {
    var div = document.createElement("div");
    div.style.cssText = "position: fixed; bottom: 30px; left: 0; right: 0; text-align: center;";

    var buttonX50 = createButton('x50', "x < 50%", moveX50);
    var buttonX50to100 = createButton('x50to100', "50% < x < 100%", moveX50to100);
    var buttonXfrom100 = createButton('xfrom100', "x > 100%", moveXfrom100);
    var buttonY50 = createButton('y50', "y < 50%", moveY50);
    var buttonY50to100 = createButton('y50to100', "50% < y < 100%", moveY50to100);
    var buttonYfrom100 = createButton('yfrom100', "y > 100%", moveYfrom100);

    div.appendChild(buttonX50);
    div.appendChild(buttonX50to100);
    div.appendChild(buttonXfrom100);
    div.appendChild(buttonY50);
    div.appendChild(buttonY50to100);
    div.appendChild(buttonYfrom100);

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(div);


  }

  createButtons();

})();