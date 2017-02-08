// HOMEWORK


var building = {
  firstfloor: 'Ресторан',
  secondfloor: "Клуб",
  thirdfloor : 'Зал',
  // fourthfloor: 'Кинотеатр'
}

function test(){
  if ('fourthfloor' in building) {
    console.log('ERROR');
  }else {
    building.fourthfloor = 'Клуб';
    building.secondfloor = "Магазин"
  }
}

test()
console.log(building);
// !!!!!!!!!
