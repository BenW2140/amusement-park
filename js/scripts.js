$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const height = parseInt($("input#height").val());
    if (height <= 122) {
      $(".hidden#kid").show();
      $(".hidden#classic").hide();
      $(".hidden#fast").hide();
    } else if (height >= 168) {
      $(".hidden#kid").hide();
      $(".hidden#classic").show();
      $(".hidden#fast").show();
    } else {
      $(".hidden#kid").show();
      $(".hidden#classic").show();
      $(".hidden#fast").hide();
    }
  });
});