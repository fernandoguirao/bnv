
/* EL AJAX */


window.fadeaIn = function(obj) {
    $(obj).fadeTo('slow', 1);
}

$('.anverso li').each(function() {

    $(this).click(function() {

        funcionajax(this, true);


    });
});

var funcionajax = function(elp, nav) {
    $('#vistaproyectos img').fadeTo('0', 0, function() {

        if (nav) {
            $('.normalli,.segunda,.colapsar').fadeTo('fast', 0, function() {
                $('.casosli').clearQueue().show().fadeTo('slow', 1);
                $('.normalli,.segunda,.colapsar').hide();
                $('.logoletras').addClass('iphoneoculta');
            });
        }

        $('.procentra').html('');

        var clase = $(elp).attr('class');

        $.getJSON('proyectos.json', function(data) {

            $.each(data, function(entryIndex, entry) {

                if (entry['clase'] == clase) {

                    $('#vistaproyectos').addClass(clase);
                    $('.procentra').html('');

                    $.each(this.entrada, function(entryIndex, entry) {



                        if (entry.posicion == 'centro') {

                            $('.procentra').append('<h1>' + entry.titulo + '</h1><div class="linea"></div><h5>' + entry.subtitulo + '</h5><img onload="fadeaIn(this)" src="' + entry.imagen + '" alt="">');

                        } else if (entry.posicion == 'cincuenta') {

                            $('.procentra').append('<div class="columna50 izqu"><h1>' + entry.titulo + '</h1><p>' + entry.texto + '</p></div><div class="columna50"><img onload="fadeaIn(this)" src="' + entry.imagen + '" alt=""></div>');

                        } else if (entry.posicion == 'sesentaycinco') {
                            $('.procentra').append('<div class="columna65 izqu"><img onload="fadeaIn(this)" src="' + entry.imagen + '" alt=""></div><div class="columna35"><h5>' + entry.subtitulo + '</h5><p>' + entry.texto + '</p></div>');

                        } else if (entry.posicion == 'imagenes') {
                            $('.procentra').append('<img onload="fadeaIn(this)" src="' + entry.imagen + '" alt="">');
                        } else if (entry.posicion == 'imagenes50') {
                            $('.procentra').append('<h1>' + entry.titulo + '</h1><div class="linea"></div><h5>' + entry.subtitulo + '</h5><div class="columna50 izqu"><img onload="fadeaIn(this)" src="' + entry.imagen1 + '" alt=""></div><div class="imagenex columna50"><img onload="fadeaIn(this)" src="' + entry.imagen2 + '" alt=""></div>');
                        }

                    });

                    $.each(this.presentacion, function(entryIndex, entry) {
                        if (entry.extendido == "si") {
                            $('#vistaproyectos .titulo').html(entry.titulo);
                            $('#vistaproyectos #masinfo').show();
                            $('#proheader').css({
                                "padding": "96px 0 0"
                            });
                            $('#vistaproyectos .subtitulo').html(entry.subtitulo);
                            $('#vistaproyectos .acerca p').html(entry.acerca);
                            $('#vistaproyectos .funciones p').html(entry.funciones);
                            $("#vistaproyectos .mascaimg img").attr("src", entry.imagen);
                        } else {
                            $('#vistaproyectos .titulo').html(entry.titulo);
                            $('#vistaproyectos .subtitulo').html(entry.subtitulo);
                            $('#vistaproyectos #masinfo').hide();
                            $('#proheader').css({
                                "padding": "65px 0 30px"
                            });
                            $("#vistaproyectos .mascaimg img").attr("src", entry.imagen);
                        }
                    });
                } else {
                    $('#vistaproyectos').removeClass(entry['clase']);
                }
            });
        });

    });
}

//====================================================
//! Función para crear el lienzo del corazón
//====================================================

var $filas = $('.dibujo').data('filas');
var $columnas = $('.dibujo').data('columnas');

var fil = 0;

(function addFila() {
    if (fil++ < $filas) {
        var col = 0;
        (function addColumna() {
            if (col++ < $columnas) {
                $('.dibujo').append("<div class='f" + fil + " c" + col + " hole negro'></div>");
                addColumna();
            }
        })()
        $('.dibujo').append('<br>');
        addFila();
    }
})()

function arraay(fila, arraycolumnas, coloradd, colorremove) {
    for (var i = 0; i < arraycolumnas.length; i++) {
        $(fila + arraycolumnas[i]).removeClass(colorremove).addClass(coloradd);
    }
}

/* FIGURA CORAZÓN */

arraay('.f1', ['.c12', '.c13', '.c14'], 'gris', 'negro');
arraay('.f2', ['.c2', '.c3', '.c4', '.c11', '.c12', '.c13', '.c14', '.c15'], 'gris', 'negro');
arraay('.f3', ['.c2', '.c3', '.c4', '.c5', '.c6', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f4', ['.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f5', ['.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f6', ['.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f7', ['.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f8', ['.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15', '.c16'], 'gris', 'negro');
arraay('.f9', ['.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15'], 'gris', 'negro');
arraay('.f10', ['.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14', '.c15'], 'gris', 'negro');
arraay('.f11', ['.c4', '.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12', '.c13', '.c14'], 'gris', 'negro');
arraay('.f12', ['.c5', '.c6', '.c7', '.c8', '.c9', '.c10', '.c11', '.c12'], 'gris', 'negro');
arraay('.f13', ['.c6', '.c7', '.c8', '.c9', '.c10'], 'gris', 'negro');

//==========================================================
//! FUNCIÓN PARA LANZAR LÍNEA VERTICAL DE AGUJEROS ROJOS
//==========================================================

var arr = [".f8.c3", ".f10.c5", ".f6.c6", ".f11.c12", ".f6.c12", ".f9.c7", ".f12.c9", ".f10.c10", ".f7.c10", ".f4,.c13"];

function lanzaragujeros() {
    setTimeout(function() {
        jQuery.each(arr, function(indexInArray) {
            setTimeout(function() {
                var actual = arr[indexInArray];
                var actualarr = actual.split('.');
                var a = actualarr[1],
                    b = actualarr[2];
                var nfila = a.split(/ /)[0].replace(/[^\d]/g, '');
                var ncolumna = b.split(/ /)[0].replace(/[^\d]/g, '');
                var indice = 0;
                (function previos() {
                    if (indice++ < nfila) {
                        $('.c' + ncolumna + '.f' + indice).addClass('rojo');
                        if (indice > 0) {
                            var indicen = indice - 1;
                            $('.c' + ncolumna + '.f' + indicen).removeClass('rojo');
                        }
                        setTimeout(function() {
                            previos();
                        }, 80);
                    }
                })()
            }, indexInArray * 800);
        });
    }, 2000);

    setTimeout(function() {

    }, 11000);

}

//=============================================
//! FUNCIÓN PARA ASOCIAR CÍCULOS A AGUJEROS
//=============================================



var numElem = $('div.circulo').size();
$('.circulo').each(function() {
    $(this).remove();
    eltexto = $(this).html();
    sufila = $(this).data('fila');
    sucolumna = +$(this).data('columna');
    $('.c' + sucolumna + '.f' + sufila).append($(this).clone()).append('<div class="agujeeero"></div>');

    /* functiondentro(sufila,sucolumna,eltexto); */
})

$('.agujeeero').click(function() {
    $('.circulo').removeClass('grande');
    /* 	$('.circulo').removeClass('nogrande'); */
    console.log($(this).html());
    $(this).prev().addClass('grande');
    $('#intro .container').fadeTo('slow', 0, function() {

    });
})

$('.agujeeero').hover(function() {
    $(this).parent().addClass('hoover')
}, function() {
    $(this).parent().removeClass('hoover')
})

/*
var oftopmore = $('#more').offset().left;

$('.circulo.grande').css({
	'left':	$('#more .m-btn').offset().left
	});
*/





/* TAMAÑO DE IMÁGENES EN CÍRCULOS */
/* imgmasc */
/*
var altoimg = $('.imgmasc img').height();
var anchoimg = $('.imgmasc img').width();
if (altoimg > anchoimg) {
	$('.imgmasc img').css({
		"width":$('.imgmasc').width(),
		"height":"auto",
		"position":"absolute",
		"left":"0"
	});
	width();
} else {
	$('.imgmasc img').css({
		"height":$('.imgmasc').height(),
		"width":"auto",
		"position":"absolute",
		"left":"0"
		})
}
*/


/* FUNCIÓN PARA QUE LOS ROJOS NO OCUPEN ESPACIOS NEGROS */
/*
function functiondentro(sufilaa,sucolumnaa,eltextoo){
	if($('.c'+sucolumnaa+'.f'+sufilaa).children().length > 0 && $('.c'+sucolumnaa+'.f'+sufilaa).hasClass('negro')) {
	sucolumna2 = sucolumnaa+1;
		functiondentro(sufilaa,sucolumna2,eltextoo);
	} else {
		$('.c'+sucolumnaa+'.f'+sufilaa).append(eltextoo);
	}
	
	}
*/

/*
	var functionHolder = function (counter) {
    output(counter);
    if (counter > 0) {
        functionHolder(counter-1);
    }
}
*/


/*
$('.titulo').click(function(){
	$(this).parent().parent().addClass('nogrande');
})
*/

//====================================
//! QUE SEAN CLICABLES LOS CÍRCULOS
//====================================

/*
$(document).ready(function(){
var altointro = $('#intro').height();
var anchointro = $('#intro').width();
$('#introfondo').height(altointro);
});
*/

var offsetintro = $('#intro').offset();
var offsettopintro = offsetintro.top;

var offsetservices = $('#services-top').offset();
var offsettopservices = offsetservices.top;

var resta = offsettopservices - offsettopintro;

var tamanow = $(window).height();

var nuevah = tamanow - 77;

$('#introfondo').height(nuevah);

$(window).resize(function() {
    offsetintro = $('#intro').offset();
    offsettopintro = offsetintro.top;

    offsetservices = $('#services-top').offset();
    offsettopservices = offsetservices.top;

    resta = offsettopservices - offsettopintro;

    tamanow = $(window).height();

    nuevah = tamanow - 77;

    $('#introfondo').height(nuevah);
})

/* CAROUSEL DE FRASES DEL PRINCIPIO */

/*
$('#carousel_fade_intro').bind('slid',function(){
	alert('funciona');
})
*/

/* FONDO MOVIMIENTO CLIENTES */

var scrollSpeed = 1; // Speed in milliseconds
var step = 1; // How many pixels to move per step
var current = 0; // The current pixel row
var imageWidth = 2247; // Background image width
var headerWidth = 1280; // How wide the header is.

//The pixel row where to start a new loop
var restartPosition = -(imageWidth - headerWidth);

function scrollBg() {
    //Go to next pixel row.
    current -= step;

    //If at the end of the image, then go to the top.
    if (current == restartPosition) {
        current = 0;
    }

    //Set the CSS of the header.
    $('#clientescroll').css("background-position", "0 " + current + "px");
}

//Calls the scrolling function repeatedly
var init = setInterval("scrollBg()", scrollSpeed);

/* DRAGGABLE TIMELINE */

jQuery(function($) {
    /* $('.timelementos').pep({constrainToParent: true,axis: 'x'}); */
    $('.timelementos').pep({
        constrainToParent: true,
        axis: 'x',
        drag: function(ev, obj) {
            /* $(obj.el).css({ background: 'blue' })  */
            $pos = $(obj.el).offset();
            $posx = $pos.left;

            if ($posx < -(1520 + ($(window).width()))) {
                /* obj.forceStop(); */
                /* $('.timelementos').css({"left":$(window).width()}); */
                /* $('.capacidadeslink').click(); */
            }
        },
        stop: function(ev, obj) {
            /* $(obj.el).css({ background: 'blue' })  */
            $pos = $(obj.el).offset();
            $posx = $pos.left;

            if ($posx < -($(obj.el).width() - ($(window).width()))) {
                /* obj.forceStop(); */
                $('.timelementos').css({
                    "left": $(window).width() + 60
                });
                /* $('.capacidadeslink').click(); */
            }
        },
        rest: function(ev, obj) {
            /* $(obj.el).css({ background: 'blue' })  */
            $pos = $(obj.el).offset();
            $posx = $pos.left;

            if ($posx < -(1520 + ($(window).width()))) {
                /* obj.forceStop(); */
                /* $('.timelementos').css({"left":$(window).width()}); */
                /* $('.capacidadeslink').click(); */
            }
        }
    })
});

/* QUE HAYA AUTOSCROLL AL HACER SCROLL DE LA VENTANA  */

/* variable == 1; */

//=================================
//! ELEMENTOS ANIMADOS CON SCROLL
//=================================


$(window).scroll(function() {

    /* TIMELINE */

    if ($(this).scrollTop() < 1085 /* || $(this).scrollTop() > 1700 */ ) {
        $('.timelementos').stop().fadeTo("slow", 0);

    } else {
        $('.timelementos').stop().fadeTo("slow", 1);
    }

    /* SEPARADOR SERVICIOS */

    if ($(this).scrollTop() > 1750 /* && $(this).scrollTop() < 2300 */ ) {
        $('.separaador').stop().animate({
            "height": "193px"
        }, function() {

        });


    } else {
        $('.separaador').stop().animate({
            "height": "403px"
        });
    }

    /* CASOS */
    if ($(this).scrollTop() > 3150) {
        crearherramientas();
    }
    /* 	$if($(this).scrollTop() > 2792 && $(this).scrollTop() < 4065) { */

    /* SI HAY MOVIMIENTO DE DIVS */

    /*
	if ($(this).scrollTop() > 2995 && $(this).scrollTop() < 4065) {
		$('#eltitulo2').stop().animate({'left':'-225px'});
		$('#pintediv').stop().animate({'margin-left':'0'});
	} else {
		$('#eltitulo2').stop().animate({'left':'0'});
		$('#pintediv').stop().animate({'margin-left':'100%'});
	}
*/


    /* SI NO LO HAY */

    /*
$('#pintediv').stop().fadeTo('slow',0);
$('#pintediv').stop().animate({'margin-left':'0'});

	if ($(this).scrollTop() > 2995 && $(this).scrollTop() < 4065) {
		$('#eltitulo2').stop().animate({'left':'-225px'});
		$('#pintediv').stop().fadeTo('slow',1);
	} else {
		$('#eltitulo2').stop().animate({'left':'0'});
		$('#pintediv').stop().fadeTo('slow',0);
	}
*/

    /* EQUIPO */

    if ($(this).scrollTop() > 3982 && $(this).scrollTop() < 4512 + ($('#team').height() - 585)) {
        $('#menuequipo').stop().css({
            "position": "fixed",
            "z-index": "8"
        }).animate({
            'bottom': '0'
        });
        /*
		$('.leyenda').stop().css({
			"position":"fixed",
			"top":"77px"
		})
*/
    } else {
        $('#menuequipo').stop().animate({
            'bottom': '-111'
        }, function() {
            $(this).css({
                "position": "absolute",
                "z-index": "-1"
            })
        });
        /*
		$('.leyenda').stop().css({
				"position":"absolute",
				"top":"inherit"
			})
*/

    }

    /* 	SCROLL SPY CASERO */

    if ($(window).scrollTop() + 50 > $('#fernando').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.fer').addClass('active');
    }
    if ($(window).scrollTop() + 50 > $('#sara').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.sara').addClass('active');
    }
    if ($(window).scrollTop() + 50 > $('#toni').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.toni').addClass('active');
    }
    if ($(window).scrollTop() + 50 > $('#veronica').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.vero').addClass('active');
    }
    if ($(window).scrollTop() + 50 > $('#eva').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.eva').addClass('active');
    }
    if ($(window).scrollTop() + 50 > $('#jordi').offset().top - 25) {
        $('#miniequipo a').removeClass('active');
        $('.jordi').addClass('active');
    }


    /*
	cuando window scrolltop => 2793 y <= 4065

animación de #eltitulo2 
	aparece
	desaparece
	ponemos en contenedor a pinterest 'pintedivs'
	movemos a la izquierda a pintedivs

else (es decir cuando es menor o mayor de 4065)
	#eltitulo2 desaparece
	pintedivs vuelve a la derecha
*/

})


$(window).scroll(function() {
    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1900) {

        $('.timelementos').css({
            "left": +3641 - ((($(this).scrollTop()) * 1.2) - 1000)
        });
    }
})

/* $('.timelementos li').slideToggle("slow"); */

/*
$(document).ready(function(){

	$('.timelementos li').each(function(ev){
		ofof = $(this).offset();
		ofleft = ofof.left;
	
		if( ofleft < 500) {
			$(this).fadeTo('slow',0.4);
		} else {
			$(this).fadeTo('slow',0.8);
		}
	})
})
*/

/* QUICKSAND */
/* TEXTOS QUICKSAND */

$('li.span8').fadeOut();

/* TEXTOS QUICKSAND */



$(document).ready(function() {
    // get the action filter option item on page load
    var $filterType = $('#filterOptions li.active a').attr('class');

    // get and assign the ourHolder element to the
    // $holder varible for use later
    var $holder = $('ul.ourHolder');

    // clone all items within the pre-assigned $holder element
    var $data = $holder.clone();

    // attempt to call Quicksand when a filter option
    // item is clicked
    $('#filterOptions li a').click(function(e) {
        /* TEXTOS QUICKSAND */


        // reset the active class on all the buttons
        $('#filterOptions li').removeClass('active');

        // assign the class of the clicked filter option
        // element to our $filterType variable
        var $filterType = $(this).attr('class');
        $(this).parent().addClass('active');
        if ($filterType == 'all') {

            /*  $('li.span8').fadeTo(); */
            // assign all li items to the $filteredData var when
            // the 'All' filter option is clicked
            var $filteredData = $data.find('li');
        } else {
            $('li.span8').fadeIn();
            // find all li elements that have our required $filterType
            // values for the data-type element
            var $filteredData = $data.find('li[data-type=' + $filterType + ']');
        }

        // call quicksand and assign transition parameters
        $holder.quicksand($filteredData, {
            duration: 800,
            easing: 'easeInOutQuad'
        })

        if ($filterType == 'all') {
            $('li.span8').fadeOut();

        }

        return false;
    });
});

/*   MINIATURAS EQUIPO */

$('#miniequipo a').each(function() {
    /*
	$(this).click(function(){
		$('#miniequipo a').removeClass('active');
		$(this).addClass('active');
	})
*/
})

/* POPOVERS DE CASOS PARA BORRAR  */
/*

var tmp = $.fn.popover.Constructor.prototype.show;
$.fn.popover.Constructor.prototype.show = function () {
  tmp.call(this);
  if (this.options.callback) {
    this.options.callback();
  }
}



var img = 'En las próximas semanas incluiremos este contenido. Gracias.';


	$('.c2').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
    $(".c3,.c4,.c5,.c6,.c7,.c8").stop().popover('hide');
  }  });

	$('.c3').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c4,.c5,.c6,.c7,.c8").stop().popover('hide');}
	});
	
	$('.c4').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c3,.c5,.c6,.c7,.c8").stop().popover('hide');}
	});

	$('.c5').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c4,.c3,.c6,.c7,.c8").stop().popover('hide');}
	});
	
	$('.c6').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c4,.c5,.c3,.c7,.c8").stop().popover('hide');}
	});
	
	$('.c7').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c4,.c5,.c6,.c3,.c8").stop().popover('hide');}
	});
	
	$('.c8').popover({ title: 'Sección en construcción', content: img, trigger:'click',callback: function() { 
		$(".c2,.c4,.c5,.c6,.c7,.c3").stop().popover('hide');}
	});
	
	$(window).scroll(function () {
		$('.espan4').stop().popover('hide');
	})
*/



/* EFECTO 3d contacto */

$('.elboton,.hidden-phone .escribe').click(function() {
    $('.derechoo').addClass('unfold');
    $('.izquierdoo').addClass('fold');
    $('.escribe').addClass('activvo');
    $('.visita,.conekta').removeClass('activvo');
    $('.escribe').removeClass('pasivvo');
    $('.visita,.conekta').addClass('pasivvo');
});


$('.volver,.hidden-phone .visita').click(function() {
    $('.derechoo').removeClass('unfold');
    $('.izquierdoo').removeClass('fold');
    $('.visita').addClass('activvo');
    $('.visita').removeClass('pasivvo');
    $('.escribe,.conekta').removeClass('activvo');
    $('.escribe,.conekta').addClass('pasivvo');
});



/*
$(function() {
    
    var center = new google.maps.LatLng(44.230065,-76.50000);
    
    var svOptions = {
        position: center
    };
    
    var sv = new google.maps.StreetViewPanorama(document.getElementById('sv'),svOptions);

    
    $('#toggle').click(function() {
        $('#sv').toggle();
        google.maps.event.trigger(sv, 'resize')
    });
    
});
*/

/*

	$('.elboton').click().parent().parent().child().addClass('hhh');
*/

/* API DE YAHOO CLIMA */

(function addFila() {
    var localidad_id = 'SPXX0082';

    if (localidad_id) {
        //parametros para buscar la ciudad
        var parametros = {};
        parametros.op = 'clima';
        parametros.localidad_id = localidad_id;

        //llamamos al script php mediante ajax
        $.post('ajax.php', parametros, function(resultado) {
            if (resultado.error) alert(resultado.mensaje);
            else {
                var clima = resultado.clima;

                $('#lblFecha').html(clima.fecha);
                $('#lblEstado').html(clima.estado);
                $('#lblTemperatura').html(clima.temperatura);
                $('#imgEstado').html('<img src="img/iconos_clima/' + clima.codigo + '.png">');
                $('#panelResultados').css('display', 'block');
            }
        }, 'json');
    }
})()

/* 	TABS */

jQuery(document).ready(function($) {
    $('#tabs').tab();
});

/*     GRADO HERRAMIENTAS */

function crearherramientas() {
    $('.gradobar').each(function() {
        $(this).animate({
            'width': $(this).data('grado') + '%',
            'opacity': (($(this).data('grado')) / 100) * (($(this).data('grado')) / 100)
        }, 5000);
    });
}

/* VERSIONES ADAPTATIVAS */



var vuelvodeiphone = 0;

function checkWidth() {
    var windowsize = $(window).width();

    /* SI ES IPHONE */

    if (windowsize < 767) {

        $('.nav.pull-right.segunda').slideUp();
        $('.colapsar').click(function() {
            if ($('.nav.pull-right.segunda').is(':hidden')) {
                $('.nav.pull-right.segunda').stop().slideDown(function() {
                    $(document).mouseup(function(e) {
                        if ($('.nav.pull-right.segunda').has(e.target).length === 0) {

                            $('.nav.pull-right.segunda').stop().slideUp();

                        }
                    })
                });
            }
            /*
else {
	        $('.nav.pull-right.segunda').slideDown();
        }
*/
        })

        /*
$('.fotodcha').prev().css({
			"top":"262px",
			"position":"relative"
		});
*/

        $('.fotodcha').prev().addClass('cambioposi1');

        vuelvodeiphone = 1;

        /* FIN DE IPHONE */

    } else if (windowsize < 979) {
        if (vuelvodeiphone > 0) {
            /*
$('.fotodcha').prev().css({
				"top":"inherit"
			});
			
*/


            $('.eltext').removeClass('cambioposi2');

            $('.nav.pull-right.segunda').show();

        }

        /*
		$('.fotoizda').next().css({
			"margin-left":"10px",
			"margin-right":"0	"
		});
*/
        $('.eltext').removeClass('cambioposi1');
        $('.fotoizda').prev().addClass('cambioposi2');

        vuelvodeiphone = 1;

        /* FIN DE IPHONE */

    } else {
        if (vuelvodeiphone > 0) {
            /*
$('.fotodcha').prev().css({
				"top":"inherit"
			});
			
*/


            $('.eltext').removeClass('cambioposi2');

            $('.nav.pull-right.segunda').show();
        }
    }
}

checkWidth();

$(window).resize(checkWidth);

/* CÓDIGO KONAMI */
$('.avatar').hide();
/*
if (konamii) {
    (function($) {
        "use strict";

        $.fn.konami = function(options) {

            var opts, masterKey, controllerCode, code, bIsValid, i, l;

            var opts = $.extend({}, $.fn.konami.defaults, options);
            return this.each(function() {

                masterKey = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
                controllerCode = [];
                $(window).keyup(function(evt) {

                    code = evt.keyCode ? evt.keyCode : evt.which;
                    controllerCode.push(code);
                    if (10 === controllerCode.length) {

                        bIsValid = true;
                        for (i = 0, l = masterKey.length; i < l; i++) {

                            if (masterKey[i] !== controllerCode[i]) {
                                bIsValid = false;
                            }

                        }

                        if (bIsValid) {
                            opts.cheat();
                        }

                        controllerCode = [];

                    }

                });

            });

        };


        $.fn.konami.defaults = {
            cheat: null
        };

    }(jQuery))



    $(window).konami({
        cheat: function() {
            $('.audio').get(0).play();
            $('#team').addClass("easter");
            $('.avatar').show();
            $('.avatar').css({
                'display': 'inline!important'
            });
            $('.normal').hide();
            $('.equipoboton').click();


        }
    });
}
*/
/* IF IE8 ESCRIBENOS */

var isIE8 = $.browser.msie && +$.browser.version === 8;

if (isIE8) {
    $('#skribe').click(function() {
        window.open('mailto:"hello@bueninvento.es"');
        return false;
    });
}

/* PROYECTOS */

$('.anverso li').click(function() {
    $('#vistaproyectos').animate({
        'left': '0%'
    }, function() {
        $('#supercontenedor').hide();
        $('#vistaproyectos').css({
            'position': 'absolute'
        });
        $('html,body').animate({
            scrollTop: 0
        }, {
            duration: 0
        });
    });
    $('.casosli.cerrar,.brand').click(function() {
        $('.casosli').clearQueue().fadeTo('fast', 0, function() {
            $('.normalli,.segunda,.colapsar').fadeTo('fast', 1);

            if ($(window).width() < 767) {
                $('.nav.pull-right.segunda').slideUp();
            }
            $('.casosli').hide();
            $('.logoletras').removeClass('iphoneoculta');
        });
        /*
		$('#supercontenedor').show();
		$('#supercontenedor').css({'position':'absolute'},function(){
*/

        $('#supercontenedor').css({
            "opacity": 0
        });
        $('#supercontenedor').show(function() {

            $('#supercontenedor').fadeTo(1000, 1);
            $(window).scrollTop(3346);
        });



        $('#vistaproyectos').animate({
            'left': '100%'
        }, function() {
            $('#vistaproyectos').css({
                'position': 'fixed',
                'top': '76px'
            });
        });

        /*
$('#vistaproyectos').animate({
			'left':'100%'
		},function(){
			$('#vistaproyectos').css({'position':'fixed','top':'76px'});
		});
*/
    })
})



$('.casosli.siguiente').click(function() {
    if ($('#vistaproyectos').hasClass('p01')) {
        funcionajax('.p06');
    } else if ($('#vistaproyectos').hasClass('p02')) {
        funcionajax('.p01');
    } else if ($('#vistaproyectos').hasClass('p03')) {
        funcionajax('.p02');
    } else if ($('#vistaproyectos').hasClass('p04')) {
        funcionajax('.p03');
    } else if ($('#vistaproyectos').hasClass('p05')) {
        funcionajax('.p04');
    } else if ($('#vistaproyectos').hasClass('p06')) {
        funcionajax('.p05');
    }
})

$('.casosli.anterior').click(function() {
    if ($('#vistaproyectos').hasClass('p01')) {
        funcionajax('.p02');
    } else if ($('#vistaproyectos').hasClass('p02')) {
        funcionajax('.p03');
    } else if ($('#vistaproyectos').hasClass('p03')) {
        funcionajax('.p04');
    } else if ($('#vistaproyectos').hasClass('p04')) {
        funcionajax('.p05');
    } else if ($('#vistaproyectos').hasClass('p05')) {
        funcionajax('.p06');
    } else if ($('#vistaproyectos').hasClass('p06')) {
        funcionajax('.p01');
    }
}) 