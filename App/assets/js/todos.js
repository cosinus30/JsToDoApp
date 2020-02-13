// Check of specific todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});

//Click on X to delete todo
$("span").click(function(event) {
  event.stopPropagation(); //stop the event bubbling.
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});
