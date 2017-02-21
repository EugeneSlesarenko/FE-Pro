(function(){

  function Circle(){

    var top, left, width, height, backgroundColor;

    setCoordinates = function( newTop, newLeft ){
      top = newTop - newWidth.value / 2 +'px';
      left = newLeft - newWidth.value / 2 +'px';
    }

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

    setColor = function() {
      backgroundColor = newColor.value;
    }

    this.create = function( event ){
      var element = document.createElement('div'); //создали элемент
      element.className = 'circle';
      setCoordinates( event.layerY, event.layerX );
      setSize();
      setColor();
      element.style.top = top;
      element.style.left = left;
      element.style.width = width;
      element.style.height = height;
      element.style.backgroundColor = backgroundColor;
      area.appendChild(element); // добавить в area созданный лемент
    }

  }

  var c = new Circle();
  area.addEventListener( 'click', c.create )

}())
