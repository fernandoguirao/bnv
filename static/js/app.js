var $columnas,$filas,addFila,arr,arraay,checkWidth,cnt,crearherramientas,current,fil,frases,funcionajax,headerWidth,imageWidth,init,initialize,isIE8,lanzaragujeros,loadmapa,nuevah,numElem,offsetintro,offsetservices,offsettopintro,offsettopservices,resta,restartPosition,scrollBg,scrollSpeed,showRequest,showResponse,step,tamanow,vuelvodeiphone;frases=function(){return $("#carousel_fade_intro,#carousel_fade_intro2").carousel({interval:2500,pause:"false"})};showRequest=function(c,b,a){var d;d=$.param(c);return true};showResponse=function(a,b){};initialize=function(){var b,a;a={center:new google.maps.LatLng(39.47849,-0.357264),zoom:15,scrollwheel:false,mapTypeId:google.maps.MapTypeId.ROADMAP};return b=new google.maps.Map(document.getElementById("map-canvas"),a)};arraay=function(d,f,c,e){var b,a;b=0;a=[];while(b<f.length){$(d+f[b]).removeClass(e).addClass(c);a.push(b++)}return a};lanzaragujeros=function(){setTimeout((function(){return jQuery.each(arr,function(a){return setTimeout((function(){var d,j,f,c,i,e,g,h;j=arr[a];f=j.split(".");d=f[1];c=f[2];g=d.split(RegExp(" "))[0].replace(/[^\d]/g,"");e=c.split(RegExp(" "))[0].replace(/[^\d]/g,"");i=0;return(h=function(){var b;if(i++<g){$(".c"+e+".f"+i).addClass("rojo");if(i>0){b=i-1;$(".c"+e+".f"+b).removeClass("rojo")}return setTimeout((function(){return h()}),80)}})()}),a*800)})}),2000);return setTimeout((function(){}),11000)};scrollBg=function(){var a;a-=step;if(a===restartPosition){a=0}return $("#clientescroll").css("background-position","0 "+a+"px")};crearherramientas=function(){return $(".gradobar").each(function(){return $(this).animate({width:$(this).data("grado")+"%",opacity:(($(this).data("grado"))/100)*(($(this).data("grado"))/100)},5000)})};checkWidth=function(){var a,b;b=$(window).width();if(b<767){$(".nav.pull-right.segunda").slideUp();$(".colapsar").click(function(){if($(".nav.pull-right.segunda").is(":hidden")){return $(".nav.pull-right.segunda").stop().slideDown(function(){return $(document).mouseup(function(c){if($(".nav.pull-right.segunda").has(c.target).length===0){return $(".nav.pull-right.segunda").stop().slideUp()}})})}});$(".fotodcha").prev().addClass("cambioposi1");return a=1}else{if(b<979){if(a>0){$(".eltext").removeClass("cambioposi2");$(".nav.pull-right.segunda").show()}$(".eltext").removeClass("cambioposi1");$(".fotoizda").prev().addClass("cambioposi2");return a=1}else{if(a>0){$(".eltext").removeClass("cambioposi2");return $(".nav.pull-right.segunda").show()}}}};cnt=$("#carousel_fade_intro .item,#carousel_fade_intro2 .item").length;$("#carousel_fade_intro,#carousel_fade_intro2").on("slid","",function(){cnt--;if(cnt===1){$("#carousel_fade_intro,#carousel_fade_intro2").carousel("pause");return window.setTimeout((function(){return $("#carousel_fade_intro,#carousel_fade_intro2").addClass("mover")}),1000)}});$("#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2").carousel({interval:false});$(function(){$("#intro").css({height:($(window).height())+"px"});return $(window).resize(function(){return $("#intro").css({height:($(window).height())+"px"})})});$(document).ready(function(){return $("html").niceScroll()});$(document).ready(function(){var a;a={target:".alert",beforeSubmit:showRequest,success:showResponse};return $("#contactForm").ajaxForm(a)});$.fn.clearForm=function(){return this.each(function(){var a,b;b=this.type;a=this.tagName.toLowerCase();if(a==="form"){return $(":input",this).clearForm()}if(b==="text"||b==="password"||a==="textarea"){return this.value=""}else{if(b==="checkbox"||b==="radio"){return this.checked=false}else{if(a==="select"){return this.selectedIndex=-1}}}})};$(function(){return $("#more a, .nav a, .nav li a, .brand, #footer li a,#miniequipo a").bind("click",function(b){var a;a=$(this);$('[data-spy="scroll"]').each(function(){var c;return c=$(this).scrollspy("refresh")});$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-61},1500,"easeInOutExpo");return b.preventDefault()})});$("[data-thumb=tooltip]").tooltip();$(".nav a").click(function(){return $(".nav-collapse").collapse("hide")});(loadmapa=function(){var a,b,c;a=new google.maps.LatLng(39.47849,-0.357264);c={position:a,addressControl:false,linksControl:false,panControl:false,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},enableCloseButton:false};return b=new google.maps.StreetViewPanorama(document.getElementById("mapastreet"),c)})();google.maps.event.addDomListener(window,"load",initialize);window.fadeaIn=function(a){return $(a).fadeTo("slow",1)};$(".anverso li").each(function(){return $(this).click(function(){return funcionajax(this,true)})});funcionajax=function(a,b){return $("#vistaproyectos img").fadeTo("0",0,function(){var c;if(b){$(".normalli,.segunda,.colapsar").fadeTo("fast",0,function(){$(".casosli").clearQueue().show().fadeTo("slow",1);$(".normalli,.segunda,.colapsar").hide();return $(".logoletras").addClass("iphoneoculta")})}$(".procentra").html("");c=$(a).attr("class");return $.getJSON("static/scripts/proyectos.json",function(d){console.log("getjson ok");return $.each(d,function(e,f){if(f.clase===c){console.log("1/ clase");$("#vistaproyectos").addClass(c);$(".procentra").html("");$.each(this.entrada,function(g,h){if(h.posicion==="centro"){console.log("2/ posicion centro");return $(".procentra").append("<h1>"+h.titulo+'</h1><div class="linea"></div><h5>'+h.subtitulo+'</h5><img onload="fadeaIn(this)" src="'+h.imagen+'" alt="">')}else{if(h.posicion==="cincuenta"){console.log("2/ posicion cincuenta");return $(".procentra").append('<div class="columna50 izqu"><h1>'+h.titulo+"</h1><p>"+h.texto+'</p></div><div class="columna50"><img onload="fadeaIn(this)" src="'+h.imagen+'" alt=""></div>')}else{if(h.posicion==="sesentaycinco"){console.log("3/ posicion 65");return $(".procentra").append('<div class="columna65 izqu"><img onload="fadeaIn(this)" src="'+h.imagen+'" alt=""></div><div class="columna35"><h5>'+h.subtitulo+"</h5><p>"+h.texto+"</p></div>")}else{if(h.posicion==="imagenes"){console.log("3/ posicion imagen");return $(".procentra").append('<img onload="fadeaIn(this)" src="'+h.imagen+'" alt="">')}else{if(h.posicion==="imagenes50"){console.log("3/ imagenes 50");return $(".procentra").append("<h1>"+h.titulo+'</h1><div class="linea"></div><h5>'+h.subtitulo+'</h5><div class="columna50 izqu"><img onload="fadeaIn(this)" src="'+h.imagen1+'" alt=""></div><div class="imagenex columna50"><img onload="fadeaIn(this)" src="'+h.imagen2+'" alt=""></div>')}}}}}});return $.each(this.presentacion,function(g,h){if(h.extendido==="si"){$("#vistaproyectos .titulo").html(h.titulo);$("#vistaproyectos #masinfo").show();$("#proheader").css({padding:"96px 0 0"});$("#vistaproyectos .subtitulo").html(h.subtitulo);$("#vistaproyectos .acerca p").html(h.acerca);$("#vistaproyectos .funciones p").html(h.funciones);return $("#vistaproyectos .mascaimg img").attr("src",h.imagen)}else{$("#vistaproyectos .titulo").html(h.titulo);$("#vistaproyectos .subtitulo").html(h.subtitulo);$("#vistaproyectos #masinfo").hide();$("#proheader").css({padding:"65px 0 30px"});return $("#vistaproyectos .mascaimg img").attr("src",h.imagen)}})}else{return $("#vistaproyectos").removeClass(f.clase)}})})})};$filas=$(".dibujo").data("filas");$columnas=$(".dibujo").data("columnas");fil=0;(addFila=function(){var b,a;if(fil++<$filas){a=0;(b=function(){if(a++<$columnas){$(".dibujo").append("<div class='f"+fil+" c"+a+" hole negro'></div>");return b()}})();$(".dibujo").append("<br>");return addFila()}})();arraay(".f1",[".c12",".c13",".c14"],"gris","negro");arraay(".f2",[".c2",".c3",".c4",".c11",".c12",".c13",".c14",".c15"],"gris","negro");arraay(".f3",[".c2",".c3",".c4",".c5",".c6",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f4",[".c1",".c2",".c3",".c4",".c5",".c6",".c7",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f5",[".c1",".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f6",[".c1",".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f7",[".c1",".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f8",[".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15",".c16"],"gris","negro");arraay(".f9",[".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15"],"gris","negro");arraay(".f10",[".c3",".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14",".c15"],"gris","negro");arraay(".f11",[".c4",".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12",".c13",".c14"],"gris","negro");arraay(".f12",[".c5",".c6",".c7",".c8",".c9",".c10",".c11",".c12"],"gris","negro");arraay(".f13",[".c6",".c7",".c8",".c9",".c10"],"gris","negro");arr=[".f8.c3",".f10.c5",".f6.c6",".f11.c12",".f6.c12",".f9.c7",".f12.c9",".f10.c10",".f7.c10",".f4,.c13"];numElem=$("div.circulo").size();$(".circulo").each(function(){var b,c,a;$(this).remove();b=$(this).html();a=$(this).data("fila");c=+$(this).data("columna");return $(".c"+c+".f"+a).append($(this).clone()).append('<div class="agujeeero"></div>')});$(".agujeeero").click(function(){$(".circulo").removeClass("grande");$(this).prev().addClass("grande");return $("#intro .container").fadeTo("slow",0,function(){})});$(".agujeeero").hover((function(){return $(this).parent().addClass("hoover")}),function(){return $(this).parent().removeClass("hoover")});offsetintro=$("#intro").offset();offsettopintro=offsetintro.top;offsetservices=$("#services-top").offset();offsettopservices=offsetservices.top;resta=offsettopservices-offsettopintro;tamanow=$(window).height();nuevah=tamanow-77;$("#introfondo").height(nuevah);$(window).resize(function(){offsetintro=$("#intro").offset();offsettopintro=offsetintro.top;offsetservices=$("#services-top").offset();offsettopservices=offsetservices.top;resta=offsettopservices-offsettopintro;tamanow=$(window).height();nuevah=tamanow-77;return $("#introfondo").height(nuevah)});scrollSpeed=1;step=1;current=0;imageWidth=2247;headerWidth=1280;restartPosition=-(imageWidth-headerWidth);init=setInterval("scrollBg()",scrollSpeed);jQuery(function(a){return a(".timelementos").pep({constrainToParent:true,axis:"x",drag:function(c,e){var b,d;b=a(e.el).offset();d=b.left;return d<-(1520+(a(window).width()))},stop:function(c,e){var b,d;b=a(e.el).offset();d=b.left;if(d<-(a(e.el).width()-(a(window).width()))){return a(".timelementos").css({left:a(window).width()+60})}},rest:function(c,e){var b,d;b=a(e.el).offset();d=b.left;return d<-(1520+(a(window).width()))}})});$(window).scroll(function(){if($(this).scrollTop()<1085){$(".timelementos").stop().fadeTo("slow",0)}else{$(".timelementos").stop().fadeTo("slow",1)}if($(this).scrollTop()>1750){$(".separaador").stop().animate({height:"193px"},function(){})}else{$(".separaador").stop().animate({height:"403px"})}if($(this).scrollTop()>3150){crearherramientas()}if($(this).scrollTop()>3982&&$(this).scrollTop()<4512+($("#team").height()-585)){$("#menuequipo").stop().css({position:"fixed","z-index":"8"}).animate({bottom:"0"})}else{$("#menuequipo").stop().animate({bottom:"-111"},function(){return $(this).css({position:"absolute","z-index":"-1"})})}if($(window).scrollTop()+50>$("#fernando").offset().top-25){$("#miniequipo a").removeClass("active");$(".fer").addClass("active")}if($(window).scrollTop()+50>$("#sara").offset().top-25){$("#miniequipo a").removeClass("active");$(".sara").addClass("active")}if($(window).scrollTop()+50>$("#toni").offset().top-25){$("#miniequipo a").removeClass("active");$(".toni").addClass("active")}if($(window).scrollTop()+50>$("#veronica").offset().top-25){$("#miniequipo a").removeClass("active");$(".vero").addClass("active")}if($(window).scrollTop()+50>$("#eva").offset().top-25){$("#miniequipo a").removeClass("active");$(".eva").addClass("active")}if($(window).scrollTop()+50>$("#jordi").offset().top-25){$("#miniequipo a").removeClass("active");return $(".jordi").addClass("active")}});$(window).scroll(function(){if($(this).scrollTop()>1000&&$(this).scrollTop()<1900){return $(".timelementos").css({left:+3641-((($(this).scrollTop())*1.2)-1000)})}});$("li.span8").fadeOut();$(document).ready(function(){var a,b,c;b=$("#filterOptions li.active a").attr("class");c=$("ul.ourHolder");a=c.clone();return $("#filterOptions li a").click(function(f){var d;$("#filterOptions li").removeClass("active");b=$(this).attr("class");$(this).parent().addClass("active");if(b==="all"){d=a.find("li")}else{$("li.span8").fadeIn();d=a.find("li[data-type="+b+"]")}c.quicksand(d,{duration:800,easing:"easeInOutQuad"});if(b==="all"){$("li.span8").fadeOut()}return false})});$("#miniequipo a").each(function(){});$(".elboton,.hidden-phone .escribe").click(function(){$(".derechoo").addClass("unfold");$(".izquierdoo").addClass("fold");$(".escribe").addClass("activvo");$(".visita,.conekta").removeClass("activvo");$(".escribe").removeClass("pasivvo");return $(".visita,.conekta").addClass("pasivvo")});$(".volver,.hidden-phone .visita").click(function(){$(".derechoo").removeClass("unfold");$(".izquierdoo").removeClass("fold");$(".visita").addClass("activvo");$(".visita").removeClass("pasivvo");$(".escribe,.conekta").removeClass("activvo");return $(".escribe,.conekta").addClass("pasivvo")});(addFila=function(){var b,a;b="SPXX0082";if(b){a={};a.op="clima";a.localidad_id=b;return $.post("static/scripts/ajax.php",a,(function(d){var c;if(!d.error){c=d.clima;$("#lblFecha").html(c.fecha);$("#lblEstado").html(c.estado);$("#lblTemperatura").html(c.temperatura);$("#imgEstado").html('<img src="static/iconos_clima/'+c.codigo+'.png">');return $("#panelResultados").css("display","block")}}),"json")}})();jQuery(document).ready(function(a){return a("#tabs").tab()});vuelvodeiphone=0;checkWidth();$(window).resize(checkWidth);$(".avatar").hide();isIE8=$.browser.msie&&+$.browser.version===8;if(isIE8){$("#skribe").click(function(){window.open('mailto:"hello@bueninvento.es"');return false})}$(".anverso li").click(function(){$("#vistaproyectos").animate({left:"0%"},function(){$("#supercontenedor").hide();$("#vistaproyectos").css({position:"absolute"});return $("html,body").animate({scrollTop:0},{duration:0})});return $(".casosli.cerrar,.brand").click(function(){$(".casosli").clearQueue().fadeTo("fast",0,function(){$(".normalli,.segunda,.colapsar").fadeTo("fast",1);if($(window).width()<767){$(".nav.pull-right.segunda").slideUp()}$(".casosli").hide();return $(".logoletras").removeClass("iphoneoculta")});$("#supercontenedor").css({opacity:0});$("#supercontenedor").show(function(){$("#supercontenedor").fadeTo(1000,1);return $(window).scrollTop(3346)});return $("#vistaproyectos").animate({left:"100%"},function(){return $("#vistaproyectos").css({position:"fixed",top:"76px"})})})});$(".casosli.siguiente").click(function(){if($("#vistaproyectos").hasClass("p01")){return funcionajax(".p06")}else{if($("#vistaproyectos").hasClass("p02")){return funcionajax(".p01")}else{if($("#vistaproyectos").hasClass("p03")){return funcionajax(".p02")}else{if($("#vistaproyectos").hasClass("p04")){return funcionajax(".p03")}else{if($("#vistaproyectos").hasClass("p05")){return funcionajax(".p04")}else{if($("#vistaproyectos").hasClass("p06")){return funcionajax(".p05")}}}}}}});$(".casosli.anterior").click(function(){if($("#vistaproyectos").hasClass("p01")){return funcionajax(".p02")}else{if($("#vistaproyectos").hasClass("p02")){return funcionajax(".p03")}else{if($("#vistaproyectos").hasClass("p03")){return funcionajax(".p04")}else{if($("#vistaproyectos").hasClass("p04")){return funcionajax(".p05")}else{if($("#vistaproyectos").hasClass("p05")){return funcionajax(".p06")}else{if($("#vistaproyectos").hasClass("p06")){return funcionajax(".p01")}}}}}}});$(window).load(function(){var a;return(a=function(){return $("#status").queue(function(){$(this).fadeOut();return $("#preloader").delay(0).fadeOut("slow",function(){lanzaragujeros();return frases()})})})()});