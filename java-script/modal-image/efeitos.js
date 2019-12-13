$(document).ready(function () {
  var modal = $("#myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = $("#img01");
  var captionText = $("#caption");

  $("#myImg").click(function () {
    $(modal).show();
    $(modalImg).attr("src", $(this).attr("src"));
    $(captionText).text($(this).attr("alt"));
  });

  // Get the <span> element that closes the modal
  var span = $(".close")[0];

  // When the user clicks on <span> (x), close the modal
  $(span).click(function(){
    $(modal).hide();
  });
});