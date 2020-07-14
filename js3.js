var animals = ['パンダ', 'ライオン', 'キリン'];

var animal = prompt('入力してください');

var i = 0;
while (i < animals.length) {
  if(animal == 'ライオン'){
    break;
  }
  alert(animals[i]);
  i++;
}
