//= require webpack-bundle

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require login
//= require turbolinks
//= require bootstrap/js/bootstrap.min.js
//= require main
//= require moment
//= require notifier
//= require timeline
//= require modernizr

APP_URL = "http://localhost:3000"

$(document).ready(function(){
  $('#login-button').on('click', function(e){
    $.post('/core_box/people/login', {
      email: $('#login-username').val(),
      password: $('#login-password').val()
    }, function(data) {
      localStorage.setItem("token", data.token);
      $.ajaxSetup({
          headers: { 'token': localStorage.getItem("token") }
      });
      window.location.href = '/events'
    })
  })
  $('#signup-button').on('click', function(e){
    $.post('/core_box/people/signup', {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      password: $('#password').val()
    }, function(data) {
      localStorage.setItem("token", data.token);
      $.ajaxSetup({
          headers: { 'token': localStorage.getItem("token") }
      });
      window.location.href = '/events'
    })
  })
});
