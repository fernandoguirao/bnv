
#sliders autoplay
#intro slider
frases = ->
  $("#carousel_fade_intro,#carousel_fade_intro2").carousel
    interval: 2500
    pause: "false"


#Stop intro slider on last item

#works sliders

#make section height of window

#custom scrollbar

#contact form
showRequest = (formData, jqForm, options) ->
  queryString = $.param(formData)
  true
showResponse = (responseText, statusText) ->

#smooth scroll on page

#gallery image hover tooltip trigger

#collapse menu on click on mobile and tablet devices

# MAPA FONDO 
initialize = ->
  mapOptions =
    center: new google.maps.LatLng(39.47849, -0.357264)
    zoom: 15
    scrollwheel: false
    mapTypeId: google.maps.MapTypeId.ROADMAP

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)

# EL AJAX 

#====================================================
#! Función para crear el lienzo del corazón
#====================================================
arraay = (fila, arraycolumnas, coloradd, colorremove) ->
  i = 0

  while i < arraycolumnas.length
    $(fila + arraycolumnas[i]).removeClass(colorremove).addClass coloradd
    i++

# FIGURA CORAZÓN 

#==========================================================
#! FUNCIÓN PARA LANZAR LÍNEA VERTICAL DE AGUJEROS ROJOS
#==========================================================
lanzaragujeros = ->
  setTimeout (->
    jQuery.each arr, (indexInArray) ->
      setTimeout (->
        actual = arr[indexInArray]
        actualarr = actual.split(".")
        a = actualarr[1]
        b = actualarr[2]
        nfila = a.split(RegExp(" "))[0].replace(/[^\d]/g, "")
        ncolumna = b.split(RegExp(" "))[0].replace(/[^\d]/g, "")
        indice = 0
        (previos = ->
          if indice++ < nfila
            $(".c" + ncolumna + ".f" + indice).addClass "rojo"
            if indice > 0
              indicen = indice - 1
              $(".c" + ncolumna + ".f" + indicen).removeClass "rojo"
            setTimeout (->
              previos()
            ), 80
        )()
      ), indexInArray * 800

  ), 2000
  setTimeout (->
  ), 11000

#=============================================
#! FUNCIÓN PARA ASOCIAR CÍCULOS A AGUJEROS
#=============================================

# functiondentro(sufila,sucolumna,eltexto); 

# 	$('.circulo').removeClass('nogrande'); 

#
#var oftopmore = $('#more').offset().left;
#
#$('.circulo.grande').css({
#	'left':	$('#more .m-btn').offset().left
#	});
#

# TAMAÑO DE IMÁGENES EN CÍRCULOS 

# imgmasc 

#
#var altoimg = $('.imgmasc img').height();
#var anchoimg = $('.imgmasc img').width();
#if (altoimg > anchoimg) {
#	$('.imgmasc img').css({
#		"width":$('.imgmasc').width(),
#		"height":"auto",
#		"position":"absolute",
#		"left":"0"
#	});
#	width();
#} else {
#	$('.imgmasc img').css({
#		"height":$('.imgmasc').height(),
#		"width":"auto",
#		"position":"absolute",
#		"left":"0"
#		})
#}
#

# FUNCIÓN PARA QUE LOS ROJOS NO OCUPEN ESPACIOS NEGROS 

#
#function functiondentro(sufilaa,sucolumnaa,eltextoo){
#	if($('.c'+sucolumnaa+'.f'+sufilaa).children().length > 0 && $('.c'+sucolumnaa+'.f'+sufilaa).hasClass('negro')) {
#	sucolumna2 = sucolumnaa+1;
#		functiondentro(sufilaa,sucolumna2,eltextoo);
#	} else {
#		$('.c'+sucolumnaa+'.f'+sufilaa).append(eltextoo);
#	}
#	
#	}
#

#
#	var functionHolder = function (counter) {
#    output(counter);
#    if (counter > 0) {
#        functionHolder(counter-1);
#    }
#}
#

#
#$('.titulo').click(function(){
#	$(this).parent().parent().addClass('nogrande');
#})
#

#====================================
#! QUE SEAN CLICABLES LOS CÍRCULOS
#====================================

#
#$(document).ready(function(){
#var altointro = $('#intro').height();
#var anchointro = $('#intro').width();
#$('#introfondo').height(altointro);
#});
#

# CAROUSEL DE FRASES DEL PRINCIPIO 

#
#$('#carousel_fade_intro').bind('slid',function(){
#	alert('funciona');
#})
#

# FONDO MOVIMIENTO CLIENTES 
# Speed in milliseconds
# How many pixels to move per step
# The current pixel row
# Background image width
# How wide the header is.

#The pixel row where to start a new loop
scrollBg = () ->
  
  #Go to next pixel row.
  current -= step
  
  #If at the end of the image, then go to the top.
  current = 0  if current is restartPosition
  
  #Set the CSS of the header.
  $("#clientescroll").css "background-position", "0 " + current + "px"

#Calls the scrolling function repeatedly

# DRAGGABLE TIMELINE 

# $('.timelementos').pep({constrainToParent: true,axis: 'x'}); 

# $(obj.el).css({ background: 'blue' })  

# obj.forceStop(); 

# $('.timelementos').css({"left":$(window).width()}); 

# $('.capacidadeslink').click(); 

# $(obj.el).css({ background: 'blue' })  

# obj.forceStop(); 

# $('.capacidadeslink').click(); 

# $(obj.el).css({ background: 'blue' })  

# obj.forceStop(); 

# $('.timelementos').css({"left":$(window).width()}); 

# $('.capacidadeslink').click(); 

# QUE HAYA AUTOSCROLL AL HACER SCROLL DE LA VENTANA  

# variable == 1; 

#=================================
#! ELEMENTOS ANIMADOS CON SCROLL
#=================================

# TIMELINE 
# || $(this).scrollTop() > 1700 

# SEPARADOR SERVICIOS 
# && $(this).scrollTop() < 2300 

# CASOS 

# 	$if($(this).scrollTop() > 2792 && $(this).scrollTop() < 4065) { 

# SI HAY MOVIMIENTO DE DIVS 

#
#	if ($(this).scrollTop() > 2995 && $(this).scrollTop() < 4065) {
#		$('#eltitulo2').stop().animate({'left':'-225px'});
#		$('#pintediv').stop().animate({'margin-left':'0'});
#	} else {
#		$('#eltitulo2').stop().animate({'left':'0'});
#		$('#pintediv').stop().animate({'margin-left':'100%'});
#	}
#

# SI NO LO HAY 

#
#$('#pintediv').stop().fadeTo('slow',0);
#$('#pintediv').stop().animate({'margin-left':'0'});
#
#	if ($(this).scrollTop() > 2995 && $(this).scrollTop() < 4065) {
#		$('#eltitulo2').stop().animate({'left':'-225px'});
#		$('#pintediv').stop().fadeTo('slow',1);
#	} else {
#		$('#eltitulo2').stop().animate({'left':'0'});
#		$('#pintediv').stop().fadeTo('slow',0);
#	}
#

# EQUIPO 

#
#		$('.leyenda').stop().css({
#			"position":"fixed",
#			"top":"77px"
#		})
#

#
#		$('.leyenda').stop().css({
#				"position":"absolute",
#				"top":"inherit"
#			})
#

# 	SCROLL SPY CASERO 

#
#	cuando window scrolltop => 2793 y <= 4065
#
#animación de #eltitulo2 
#	aparece
#	desaparece
#	ponemos en contenedor a pinterest 'pintedivs'
#	movemos a la izquierda a pintedivs
#
#else (es decir cuando es menor o mayor de 4065)
#	#eltitulo2 desaparece
#	pintedivs vuelve a la derecha
#

# $('.timelementos li').slideToggle("slow"); 

#
#$(document).ready(function(){
#
#	$('.timelementos li').each(function(ev){
#		ofof = $(this).offset();
#		ofleft = ofof.left;
#	
#		if( ofleft < 500) {
#			$(this).fadeTo('slow',0.4);
#		} else {
#			$(this).fadeTo('slow',0.8);
#		}
#	})
#})
#

# QUICKSAND 

# TEXTOS QUICKSAND 

# TEXTOS QUICKSAND 

# get the action filter option item on page load

# get and assign the ourHolder element to the
# $holder varible for use later

# clone all items within the pre-assigned $holder element

# attempt to call Quicksand when a filter option
# item is clicked

# TEXTOS QUICKSAND 

# reset the active class on all the buttons

# assign the class of the clicked filter option
# element to our $filterType variable

#  $('li.span8').fadeTo(); 

# assign all li items to the $filteredData var when
# the 'All' filter option is clicked

# find all li elements that have our required $filterType
# values for the data-type element

# call quicksand and assign transition parameters

#   MINIATURAS EQUIPO 

#
#	$(this).click(function(){
#		$('#miniequipo a').removeClass('active');
#		$(this).addClass('active');
#	})
#

# POPOVERS DE CASOS PARA BORRAR  

#
#
#var tmp = $.fn.popover.Constructor.prototype.show;
#$.fn.popover.Constructor.prototype.show = function () {
#  tmp.call(this);
#  if (this.options.callback) {
#    this.options.callback();
#  }
#}
#
#
#
#var img = 'En las próximas semanas incluiremos este contenido. Gracias.';
#
#
#	$('.c2').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#    $(".c3,.c4,.c5,.c6,.c7,.c8").stop().popover('hide');
#  }  });
#
#	$('.c3').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c4,.c5,.c6,.c7,.c8").stop().popover('hide');}
#	});
#	
#	$('.c4').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c3,.c5,.c6,.c7,.c8").stop().popover('hide');}
#	});
#
#	$('.c5').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c4,.c3,.c6,.c7,.c8").stop().popover('hide');}
#	});
#	
#	$('.c6').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c4,.c5,.c3,.c7,.c8").stop().popover('hide');}
#	});
#	
#	$('.c7').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c4,.c5,.c6,.c3,.c8").stop().popover('hide');}
#	});
#	
#	$('.c8').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
#		$(".c2,.c4,.c5,.c6,.c7,.c3").stop().popover('hide');}
#	});
#	
#	$(window).scroll(function () {
#		$('.espan4').stop().popover('hide');
#	})
#

# EFECTO 3d contacto 

#
#$(function() {
#    
#    var center = new google.maps.LatLng(44.230065,-76.50000);
#    
#    var svOptions = {
#        position: center
#    };
#    
#    var sv = new google.maps.StreetViewPanorama(document.getElementById('sv'),svOptions);
#
#    
#    $('#toggle').click(function() {
#        $('#sv').toggle();
#        google.maps.event.trigger(sv, 'resize')
#    });
#    
#});
#

#
#
#	$('.elboton').click().parent().parent().child().addClass('hhh');
#

# API DE YAHOO CLIMA 

#parametros para buscar la ciudad

#llamamos al script php mediante ajax

# 	TABS 

#     GRADO HERRAMIENTAS 
crearherramientas = ->
  $(".gradobar").each ->
    $(this).animate
      width: $(this).data("grado") + "%"
      opacity: (($(this).data("grado")) / 100) * (($(this).data("grado")) / 100)
    , 5000


# VERSIONES ADAPTATIVAS 
checkWidth = ->
  windowsize = $(window).width()
  
  # SI ES IPHONE 
  if windowsize < 767
    $(".nav.pull-right.segunda").slideUp()
    $(".colapsar").click ->
      if $(".nav.pull-right.segunda").is(":hidden")
        $(".nav.pull-right.segunda").stop().slideDown ->
          $(document).mouseup (e) ->
            $(".nav.pull-right.segunda").stop().slideUp()  if $(".nav.pull-right.segunda").has(e.target).length is 0



    #
    #else {
    #	        $('.nav.pull-right.segunda').slideDown();
    #        }
    #
    
    #
    #$('.fotodcha').prev().css({
    #			"top":"262px",
    #			"position":"relative"
    #		});
    #
    $(".fotodcha").prev().addClass "cambioposi1"
    vuelvodeiphone = 1
  
  # FIN DE IPHONE 
  else if windowsize < 979
    if vuelvodeiphone > 0
      
      #
      #$('.fotodcha').prev().css({
      #				"top":"inherit"
      #			});
      #			
      #
      $(".eltext").removeClass "cambioposi2"
      $(".nav.pull-right.segunda").show()
    
    #
    #		$('.fotoizda').next().css({
    #			"margin-left":"10px",
    #			"margin-right":"0	"
    #		});
    #
    $(".eltext").removeClass "cambioposi1"
    $(".fotoizda").prev().addClass "cambioposi2"
    vuelvodeiphone = 1
  
  # FIN DE IPHONE 
  else
    if vuelvodeiphone > 0
      
      #
      #$('.fotodcha').prev().css({
      #				"top":"inherit"
      #			});
      #			
      #
      $(".eltext").removeClass "cambioposi2"
      $(".nav.pull-right.segunda").show()
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

(loadmapa = ->
  center = new google.maps.LatLng(39.47849, -0.357264)
  svOptions =
    position: center
    addressControl: false
    linksControl: false
    panControl: false
    zoomControlOptions:
      style: google.maps.ZoomControlStyle.SMALL

    enableCloseButton: false

  sv = new google.maps.StreetViewPanorama(document.getElementById("mapastreet"), svOptions)
)()
google.maps.event.addDomListener window, "load", initialize
window.fadeaIn = (obj) ->
  $(obj).fadeTo "slow", 1
  alert 'hola'

$(".anverso li").each ->
  $(this).click ->
    funcionajax this, true


funcionajax = (elp, nav) ->
  $("#vistaproyectos img").fadeTo "0", 0, ->
    if nav
      $(".normalli,.segunda,.colapsar").fadeTo "fast", 0, ->
        $(".casosli").clearQueue().show().fadeTo "slow", 1
        $(".normalli,.segunda,.colapsar").hide()
        $(".logoletras").addClass "iphoneoculta"

    $(".procentra").html ""
    clase = $(elp).attr("class")
    $.getJSON "static/scripts/proyectos.json", (data) ->
      console.log "getjson ok"
      $.each data, (entryIndex, entry) ->
        if entry["clase"] is clase
          console.log "1/ clase"
          $("#vistaproyectos").addClass clase
          $(".procentra").html ""
          $.each @entrada, (entryIndex, entry) ->
            if entry.posicion is "centro"
              console.log "2/ posicion centro"
              $(".procentra").append "<h1>" + entry.titulo + "</h1><div class=\"linea\"></div><h5>" + entry.subtitulo + "</h5><img onload=\"fadeaIn(this)\" src=\"" + entry.imagen + "\" alt=\"\">"
            else if entry.posicion is "cincuenta"
              console.log "2/ posicion cincuenta"
              $(".procentra").append "<div class=\"columna50 izqu\"><h1>" + entry.titulo + "</h1><p>" + entry.texto + "</p></div><div class=\"columna50\"><img onload=\"fadeaIn(this)\" src=\"" + entry.imagen + "\" alt=\"\"></div>"
            else if entry.posicion is "sesentaycinco"
              console.log "3/ posicion 65"
              $(".procentra").append "<div class=\"columna65 izqu\"><img onload=\"fadeaIn(this)\" src=\"" + entry.imagen + "\" alt=\"\"></div><div class=\"columna35\"><h5>" + entry.subtitulo + "</h5><p>" + entry.texto + "</p></div>"
            else if entry.posicion is "imagenes"
              console.log "3/ posicion imagen"
              $(".procentra").append "<img onload=\"fadeaIn(this)\" src=\"" + entry.imagen + "\" alt=\"\">"
            else if entry.posicion is "imagenes50"
              console.log "3/ imagenes 50"
              $(".procentra").append "<h1>" + entry.titulo + "</h1><div class=\"linea\"></div><h5>" + entry.subtitulo + "</h5><div class=\"columna50 izqu\"><img onload=\"fadeaIn(this)\" src=\"" + entry.imagen1 + "\" alt=\"\"></div><div class=\"imagenex columna50\"><img onload=\"fadeaIn(this)\" src=\"" + entry.imagen2 + "\" alt=\"\"></div>"

          $.each @presentacion, (entryIndex, entry) ->
            if entry.extendido is "si"
              $("#vistaproyectos .titulo").html entry.titulo
              $("#vistaproyectos #masinfo").show()
              $("#proheader").css padding: "96px 0 0"
              $("#vistaproyectos .subtitulo").html entry.subtitulo
              $("#vistaproyectos .acerca p").html entry.acerca
              $("#vistaproyectos .funciones p").html entry.funciones
              $("#vistaproyectos .mascaimg img").attr "src", entry.imagen
            else
              $("#vistaproyectos .titulo").html entry.titulo
              $("#vistaproyectos .subtitulo").html entry.subtitulo
              $("#vistaproyectos #masinfo").hide()
              $("#proheader").css padding: "65px 0 30px"
              $("#vistaproyectos .mascaimg img").attr "src", entry.imagen

        else
          $("#vistaproyectos").removeClass entry["clase"]




$filas = $(".dibujo").data("filas")
$columnas = $(".dibujo").data("columnas")
fil = 0
(addFila = ->
  if fil++ < $filas
    col = 0
    (addColumna = ->
      if col++ < $columnas
        $(".dibujo").append "<div class='f" + fil + " c" + col + " hole negro'></div>"
        addColumna()
    )()
    $(".dibujo").append "<br>"
    addFila()
)()
arraay ".f1", [".c12", ".c13", ".c14"], "gris", "negro"
arraay ".f2", [".c2", ".c3", ".c4", ".c11", ".c12", ".c13", ".c14", ".c15"], "gris", "negro"
arraay ".f3", [".c2", ".c3", ".c4", ".c5", ".c6", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f4", [".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f5", [".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f6", [".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f7", [".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f8", [".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16"], "gris", "negro"
arraay ".f9", [".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15"], "gris", "negro"
arraay ".f10", [".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15"], "gris", "negro"
arraay ".f11", [".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14"], "gris", "negro"
arraay ".f12", [".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12"], "gris", "negro"
arraay ".f13", [".c6", ".c7", ".c8", ".c9", ".c10"], "gris", "negro"
arr = [".f8.c3", ".f10.c5", ".f6.c6", ".f11.c12", ".f6.c12", ".f9.c7", ".f12.c9", ".f10.c10", ".f7.c10", ".f4,.c13"]
numElem = $("div.circulo").size()
$(".circulo").each ->
  $(this).remove()
  eltexto = $(this).html()
  sufila = $(this).data("fila")
  sucolumna = +$(this).data("columna")
  $(".c" + sucolumna + ".f" + sufila).append($(this).clone()).append "<div class=\"agujeeero\"></div>"

$(".agujeeero").click ->
  $(".circulo").removeClass "grande"
  $(this).prev().addClass "grande"
  $("#intro .container").fadeTo "slow", 0, ->


$(".agujeeero").hover (->
  $(this).parent().addClass "hoover"
), ->
  $(this).parent().removeClass "hoover"

offsetintro = $("#intro").offset()
offsettopintro = offsetintro.top
offsetservices = $("#services-top").offset()
offsettopservices = offsetservices.top
resta = offsettopservices - offsettopintro
tamanow = $(window).height()
nuevah = tamanow - 77
$("#introfondo").height nuevah
$(window).resize ->
  offsetintro = $("#intro").offset()
  offsettopintro = offsetintro.top
  offsetservices = $("#services-top").offset()
  offsettopservices = offsetservices.top
  resta = offsettopservices - offsettopintro
  tamanow = $(window).height()
  nuevah = tamanow - 77
  $("#introfondo").height nuevah

scrollSpeed = 1
step = 1
current = 0
imageWidth = 2247
headerWidth = 1280
restartPosition = -(imageWidth - headerWidth)
init = setInterval("scrollBg()", scrollSpeed)
jQuery ($) ->
  $(".timelementos").pep
    constrainToParent: true
    axis: "x"
    drag: (ev, obj) ->
      $pos = $(obj.el).offset()
      $posx = $pos.left
      $posx < -(1520 + ($(window).width()))

    stop: (ev, obj) ->
      $pos = $(obj.el).offset()
      $posx = $pos.left
      $(".timelementos").css left: $(window).width() + 60  if $posx < -($(obj.el).width() - ($(window).width()))

    rest: (ev, obj) ->
      $pos = $(obj.el).offset()
      $posx = $pos.left
      $posx < -(1520 + ($(window).width()))


$(window).scroll ->
  if $(this).scrollTop() < 1085
    $(".timelementos").stop().fadeTo "slow", 0
  else
    $(".timelementos").stop().fadeTo "slow", 1
  if $(this).scrollTop() > 1750
    $(".separaador").stop().animate
      height: "193px"
    , ->

  else
    $(".separaador").stop().animate height: "403px"
  crearherramientas()  if $(this).scrollTop() > 3150
  if $(this).scrollTop() > 3982 and $(this).scrollTop() < 4512 + ($("#team").height() - 585)
    $("#menuequipo").stop().css(
      position: "fixed"
      "z-index": "8"
    ).animate bottom: "0"
  else
    $("#menuequipo").stop().animate
      bottom: "-111"
    , ->
      $(this).css
        position: "absolute"
        "z-index": "-1"


  if $(window).scrollTop() + 50 > $("#fernando").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".fer").addClass "active"
  if $(window).scrollTop() + 50 > $("#sara").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".sara").addClass "active"
  if $(window).scrollTop() + 50 > $("#toni").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".toni").addClass "active"
  if $(window).scrollTop() + 50 > $("#veronica").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".vero").addClass "active"
  if $(window).scrollTop() + 50 > $("#eva").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".eva").addClass "active"
  if $(window).scrollTop() + 50 > $("#jordi").offset().top - 25
    $("#miniequipo a").removeClass "active"
    $(".jordi").addClass "active"

$(window).scroll ->
  $(".timelementos").css left: +3641 - ((($(this).scrollTop()) * 1.2) - 1000)  if $(this).scrollTop() > 1000 and $(this).scrollTop() < 1900

$("li.span8").fadeOut()
$(document).ready ->
  $filterType = $("#filterOptions li.active a").attr("class")
  $holder = $("ul.ourHolder")
  $data = $holder.clone()
  $("#filterOptions li a").click (e) ->
    $("#filterOptions li").removeClass "active"
    $filterType = $(this).attr("class")
    $(this).parent().addClass "active"
    if $filterType is "all"
      $filteredData = $data.find("li")
    else
      $("li.span8").fadeIn()
      $filteredData = $data.find("li[data-type=" + $filterType + "]")
    $holder.quicksand $filteredData,
      duration: 800
      easing: "easeInOutQuad"

    $("li.span8").fadeOut()  if $filterType is "all"
    false


$("#miniequipo a").each ->

$(".elboton,.hidden-phone .escribe").click ->
  $(".derechoo").addClass "unfold"
  $(".izquierdoo").addClass "fold"
  $(".escribe").addClass "activvo"
  $(".visita,.conekta").removeClass "activvo"
  $(".escribe").removeClass "pasivvo"
  $(".visita,.conekta").addClass "pasivvo"

$(".volver,.hidden-phone .visita").click ->
  $(".derechoo").removeClass "unfold"
  $(".izquierdoo").removeClass "fold"
  $(".visita").addClass "activvo"
  $(".visita").removeClass "pasivvo"
  $(".escribe,.conekta").removeClass "activvo"
  $(".escribe,.conekta").addClass "pasivvo"

(addFila = ->
  localidad_id = "SPXX0082"
  if localidad_id
    parametros = {}
    parametros.op = "clima"
    parametros.localidad_id = localidad_id
    $.post "static/scripts/ajax.php", parametros, ((resultado) ->
      unless resultado.error
        clima = resultado.clima
        $("#lblFecha").html clima.fecha
        $("#lblEstado").html clima.estado
        $("#lblTemperatura").html clima.temperatura
        $("#imgEstado").html "<img src=\"static/iconos_clima/" + clima.codigo + ".png\">"
        $("#panelResultados").css "display", "block"
    ), "json"
)()
jQuery(document).ready ($) ->
  $("#tabs").tab()

vuelvodeiphone = 0
checkWidth()
$(window).resize checkWidth

# CÓDIGO KONAMI 
$(".avatar").hide()

#
#if (konamii) {
#	(function( $ ) {
#		"use strict";
#	
#		$.fn.konami = function( options ) {
#	
#			var opts, masterKey, controllerCode, code, bIsValid, i, l;
#	
#			var opts = $.extend({}, $.fn.konami.defaults, options);
#			return this.each(function() {
#	
#				masterKey = [38,38,40,40,37,39,37,39,66,65];
#				controllerCode = [];
#				$( window ).keyup(function( evt ) {
#	
#					code = evt.keyCode ? evt.keyCode : evt.which;
#					controllerCode.push( code );
#					if( 10 === controllerCode.length ) {
#	
#						bIsValid = true;
#						for( i = 0, l = masterKey.length; i < l; i++ ) {
#	
#							if( masterKey[i] !== controllerCode[i] ) {
#								bIsValid = false;
#							} 
#	
#						} 
#	
#						if( bIsValid ) {
#							opts.cheat();
#						} 
#	
#						controllerCode = [];
#	
#					} 
#	
#				}); 
#	
#			}); 
#	
#		};
#	
#
#	$.fn.konami.defaults = {
#		cheat: null
#	};
#
#}(jQuery))
#
#
#
#
#$( window ).konami({  
#        cheat: function() {
#           $('.audio').get(0).play();
#           $('#team').addClass("easter");
#            $('.avatar').show();
#            $('.avatar').css({'display':'inline!important'});
#            $('.normal').hide();
#            $('.equipoboton').click();
#            
#           
#        }
#    });
#}
#

# IF IE8 ESCRIBENOS 
isIE8 = $.browser.msie and +$.browser.version is 8
if isIE8
  $("#skribe").click ->
    window.open "mailto:\"hello@bueninvento.es\""
    false


# PROYECTOS 
$(".anverso li").click ->
  $("#vistaproyectos").animate
    left: "0%"
  , ->
    $("#supercontenedor").hide()
    $("#vistaproyectos").css position: "absolute"
    $("html,body").animate
      scrollTop: 0
    ,
      duration: 0


  $(".casosli.cerrar,.brand").click ->
    $(".casosli").clearQueue().fadeTo "fast", 0, ->
      $(".normalli,.segunda,.colapsar").fadeTo "fast", 1
      $(".nav.pull-right.segunda").slideUp()  if $(window).width() < 767
      $(".casosli").hide()
      $(".logoletras").removeClass "iphoneoculta"

    
    #
    #		$('#supercontenedor').show();
    #		$('#supercontenedor').css({'position':'absolute'},function(){
    #
    $("#supercontenedor").css opacity: 0
    $("#supercontenedor").show ->
      $("#supercontenedor").fadeTo 1000, 1
      $(window).scrollTop 3346

    $("#vistaproyectos").animate
      left: "100%"
    , ->
      $("#vistaproyectos").css
        position: "fixed"
        top: "76px"





#
#$('#vistaproyectos').animate({
#			'left':'100%'
#		},function(){
#			$('#vistaproyectos').css({'position':'fixed','top':'76px'});
#		});
#
$(".casosli.siguiente").click ->
  if $("#vistaproyectos").hasClass("p01")
    funcionajax ".p06"
  else if $("#vistaproyectos").hasClass("p02")
    funcionajax ".p01"
  else if $("#vistaproyectos").hasClass("p03")
    funcionajax ".p02"
  else if $("#vistaproyectos").hasClass("p04")
    funcionajax ".p03"
  else if $("#vistaproyectos").hasClass("p05")
    funcionajax ".p04"
  else funcionajax ".p05"  if $("#vistaproyectos").hasClass("p06")

$(".casosli.anterior").click ->
  if $("#vistaproyectos").hasClass("p01")
    funcionajax ".p02"
  else if $("#vistaproyectos").hasClass("p02")
    funcionajax ".p03"
  else if $("#vistaproyectos").hasClass("p03")
    funcionajax ".p04"
  else if $("#vistaproyectos").hasClass("p04")
    funcionajax ".p05"
  else if $("#vistaproyectos").hasClass("p05")
    funcionajax ".p06"
  else funcionajax ".p01"  if $("#vistaproyectos").hasClass("p06")

$(window).load ->
  (foo = ->
    $("#status").queue ->
      $(this).fadeOut()
      $("#preloader").delay(0).fadeOut "slow", ->
        lanzaragujeros()
        frases()


  )()
