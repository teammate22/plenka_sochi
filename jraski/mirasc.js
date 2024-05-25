$(function() {
  $("#creation .steps-nav a").click(function(event){
      event.preventDefault()
  var step = $(this).text();
      $("#creation .active").removeClass("active");
      $(this).addClass("active");
      $("#creation li:nth-child("+step+")").addClass("active");
});
});


$(function() {
var boxesMin = 1;
var boxesMax = 1000;
  var boxesDefault = 100;

$("#boxes").slider({
  animate: true,
  min: boxesMin,
  max: boxesMax,
  value: boxesDefault,
  create: function(event, ui){
    $(this).find(".ui-slider-handle").html("<span class='current'>"+boxesDefault+"</span>");
  },
  slide: function(event, ui){
    $("#price-good-current").val(ui.value);
    $(this).find(".current").text(ui.value);
  },
  stop: function(event, ui) {
    $("#price-good-current").val($("#operations").slider("value"));
    change_price();
  }
});
});

$(function() {
$("#calculate").click(function(){
      var amount = $("#calculator [name=amount]");
  var type = $("#calculator [name=type] :checked");

  $(amount).keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;
    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;
    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);
    if(!/\d/.test(keyChar))	return false;
  });
  if ($(type).is(":disabled")) {
      $(type).parent().addClass("input-error");
      return;
  }
  else {
          $(type).parent().removeClass("input-error");
  }
  if (!(/^[\0-9]{1,5}$/).test(amount.val())) {
      $(amount).addClass("input-error");
      return;
  }
  else {
      $(amount).removeClass("input-error");
  }

      var price = $(type).data("price") * $(amount).val();
  if ($("#unit-2").is(":checked")) {
          var price = price / $(type).data("kg");
  }
    $('#total span').text(price.toFixed(0).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 "));
      $('#calculator .total').slideDown(500);
});
});