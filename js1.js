var answer = prompt('数値を入力してください');
if (answer > 0) {
  alert('正の数');
} else　if(answer < 0) {
  alert('負の数');
}else if(isNaN(answer)){
  alert("数値を入力してください");
}
