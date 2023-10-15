cgv = new CGV.Viewer('#my-viewer', {
    height: 800,
    width: 900
  });
  
  
  var request = new XMLHttpRequest();
  request.open('GET', './NZ_CP010546.json', true);
  request.onload = function() {
    var response = request.response;
    const json = JSON.parse(response);
    cgv.io.loadJSON(json);
    cgv.draw()
  };
  request.send();