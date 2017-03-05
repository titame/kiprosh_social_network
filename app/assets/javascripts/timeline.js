$(document).ready(function () {
  var token = localStorage.getItem("token");
  token = "de7374db290424cff6d7be44447eaabf";
  console.log('here')
  var offset = 0;
  $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
          alert("bottom!");

          $.ajax({
              url: APP_URL+"/api/v1/events?token="+token+"&offset="+offset,
              type: 'GET',
              error: function (result) {
                  $("#err").html(result.responseText);
              },
              success: function (result) {
                  var text = "";
                  console.log(result);
                  for (var i = 0; i < result.length; i++) {
                      text = '<div class="cd-timeline-block">'
                          + '<div class="cd-timeline-img" style="background:'+result[i].event_type_color+'">'
                          + '<img src="'+result[i].event_type_image_url+'" alt="Picture"></div>'
                          + '<div class="cd-timeline-content">'
                          + '<h2>' + result[i].name + '</h2>'
                          + '<p>' + result[i].description + '</p>'
                          + '<a href="#0" class="cd-read-more">Read more</a>'
                          + '<span class="cd-date">' + moment(result[i].start_date_time).format('Do,MMM YYYY - ') + moment(result[i].end_date_time).format('Do,MMM YYYY') + '</span>'
                          + '</div>'
                          + '</div>';
                      $("#cd-timeline").append(text);
                  }
                  offset = offset + result.length;
                  setBounce();
              }
          });
      }
  });

  function setBounce() {
      var timelineBlocks = $('.cd-timeline-block'),
offset = 0.8;

      //hide timeline blocks which are outside the viewport
      hideBlocks(timelineBlocks, offset);

      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function () {
          (!window.requestAnimationFrame)
              ? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
              : window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
      });

      function hideBlocks(blocks, offset) {
          blocks.each(function () {
              ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
          });
      }

      function showBlocks(blocks, offset) {
          blocks.each(function () {
              ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          });
      }



  }
});
