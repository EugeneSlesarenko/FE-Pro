////HOMEWORK
var color, memory;
do {
  color = prompt( 'Gold, Silver, Black', '' );
  if ( ( color === 'Gold' ) || (color === 'Silver') ||(color === 'Black') ) {
    break;
  }
} while (true);
do {
  memory = prompt( '32gb, 64gb, 128gb', '' )
  if ( memory === '32gb' ){
    alert('300$')
    break;
  }else if (  memory === '64gb' ) {
    alert('500$')
    break;
  }else if ( memory === '128gb' ) {
    alert( '700$' )
    break;
  }
} while (true);
document.write("<img src='img/" + color + ".png'>");
// !!!!!!!!!!


// MATRIX
var arr = [];
document.write('<br>');
document.write("<p>MATRIX</p>");

for (var a = 0; a < 3; a++) {
	arr[a] = new Array();
	for (var b = 0; b < 3; b++) {
		arr[a][b] = 8;
	}
  document.write('<br>');
  document.write(arr[a]);
}
// !!!!!!!!!!
