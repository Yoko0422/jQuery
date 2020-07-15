(function($, window) {
  //課題２
   $("#btn1").on("click", function() {
    $("#spn2").text($("#index").text());
  });
   $("#btn2").on("click", function() {
    $("#spn2").text($("#index").html());
  });

//課題３
$("ul#index").append("<li class="li4">メソッド</li>");

/*課題４
li = document.getElementsByTagName("ul");
var i = 1;
while (i <= li) {
  alert(li[i].length);
  i++;
};
*/
  })(jQuery, window);
