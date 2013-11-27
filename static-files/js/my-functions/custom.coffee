frases = ->
  $("#carousel_fade_intro,#carousel_fade_intro2").carousel
    interval: 2500
    pause: "false"

showRequest = (formData, jqForm, options) ->
  queryString = $.param(formData)
  true
showResponse = (responseText, statusText) ->
cnt = $("#carousel_fade_intro .item,#carousel_fade_intro2 .item").length
$("#carousel_fade_intro,#carousel_fade_intro2").on "slid", "", ->
  cnt--
  if cnt is 1
    $("#carousel_fade_intro,#carousel_fade_intro2").carousel "pause"
    window.setTimeout (->
      $("#carousel_fade_intro,#carousel_fade_intro2").addClass "mover"
    ), 1000

$("#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2").carousel interval: false
$ ->
  $("#intro").css height: ($(window).height()) + "px"
  $(window).resize ->
    $("#intro").css height: ($(window).height()) + "px"

$(document).ready ->
  $("html").niceScroll()

$(document).ready ->
  options =
    target: ".alert"
    beforeSubmit: showRequest
    success: showResponse

  $("#contactForm").ajaxForm options

$.fn.clearForm = ->
  @each ->
    type = @type
    tag = @tagName.toLowerCase()
    return $(":input", this).clearForm()  if tag is "form"
    if type is "text" or type is "password" or tag is "textarea"
      @value = ""
    else if type is "checkbox" or type is "radio"
      @checked = false
    else @selectedIndex = -1  if tag is "select"

$ ->
  $("#more a, .nav a, .nav li a, .brand, #footer li a,#miniequipo a").bind "click", (event) ->
    $anchor = $(this)
    $("[data-spy=\"scroll\"]").each ->
      $spy = $(this).scrollspy("refresh")

    $("html, body").stop().animate
      scrollTop: $($anchor.attr("href")).offset().top - 61
    , 1500, "easeInOutExpo"
    event.preventDefault()

$("[data-thumb=tooltip]").tooltip()

$(".nav a").click ->
  $(".nav-collapse").collapse "hide"
