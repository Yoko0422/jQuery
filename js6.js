var animals = [
{'name': 'パンダ', 'weight' :80},
{'name': 'ライオン', 'weight': 200},
{'name': 'キリン', 'weight': 300}
];

var animal = prompt('入力してください');

var i = 0;
while (i < animals.length) {
  if(animal == animals[i].name){
    alert(animals[i].weight);
   }
   i++;
}
