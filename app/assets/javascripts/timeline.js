$(document).ready(function() {

});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    alert("bottom!");
    // $.ajax({
    //   url: $(this).attr('href'),
    //   dataType: 'script'
    // })
  }
});
