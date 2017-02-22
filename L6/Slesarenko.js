(function(){

  function Circle(){

    var top, left, width, height, bgc, figure;

    setSize = function(){
      if (newWidth.value >= 600) {
        alert('NO!');
        newWidth.value = 0;
        width = newWidth.value+ 'px';
      }else {
        width = newWidth.value+ 'px';
      }
      height = width;
    }

    setCoordinates = function( newTop, newLeft ){
      top = newTop - newWidth.value / 2 +'px';
      left = newLeft - newWidth.value / 2 +'px';
      // if (top <= newWidth.value) {
      //   top = newTop + newWidth.value / 10 +'px';
      // }
      // if (left <= newWidth.value) {
      //   left = newLeft + newWidth.value / 10 +'px';
      // }

    }


    setColor = function() {
      bgc = newColor.value;

    // циклом(for) прогнать РГБ, если цвет почти белый и добавить рамку
    }

    setFigure = function() {
      var radios = document.getElementsByName("figure");
      for (var i = 0; i < radios.length; i++) {
        if ( radios[i].checked ) {
          figure = radios[i].value;
        }
      }
    }

    this.create = function( event ){
      var element = document.createElement('div');
      setFigure();
      element.className = figure;
      setCoordinates( event.layerY, event.layerX );
      setSize();
      setColor();
      element.style.top = top;
      element.style.left = left;
      element.style.width = width;
      element.style.height = height;
      element.style.backgroundColor = bgc;
      area.appendChild(element);
    }


  }

  var c = new Circle();
  area.addEventListener( 'click', function(event) {
    if ((event.target.className == "square") || (event.target.className == 'circle')) {
      area.removeEventListener('click', c.create)
      // event.target.hidden = true;
      console.log(event);
      console.log(event.target.style.backgroundColor); // color of element
      elementWidth.value = event.target.clientWidth+'px';
      document.getElementById('elementWidthT').innerHTML = '<h1>'+event.target.clientWidth+'px</h1>'
    }else{
      area.addEventListener( "click", c.create )
    }
  });

}())
