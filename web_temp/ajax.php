<?php

//funcion que regresa los valores si existen para evitar deshabilitar los warnings
function obtener_parametro($nombre_parametro) {
	if (isset($_REQUEST[$nombre_parametro]))
		return trim($_REQUEST[$nombre_parametro]);
		
	return '';
}


$op = trim(obtener_parametro('op'));
$resultado = array();

/*
if ($op == 'busqueda') {
	$ciudad = trim(obtener_parametro('ciudad'));
	$resultado['ciudades'] = array();
	
	if ($ciudad != '') {
		$url = "http://xoap.weather.com/weather/search/search?where={$ciudad}";
		$xml = simplexml_load_file($url);
		
		foreach($xml->loc as $localidad) {
			$item = array();
			$attributos = $localidad->attributes();
			
			$item['localidad_id'] = $attributos['id']."";
			$item['nombre'] = $localidad."";
			
			//agregar el item a los resultados
			$resultado['ciudades'][] = $item;
		}
	}
	
} else
*/ if ($op == 'clima') {
	$localidad_id = trim(obtener_parametro('localidad_id'));
	$resultado['clima'] = array();
	
	/*
	 * traduccion de los codigos de estado ver:
	 * http://developer.yahoo.com/weather/#codes
	 */
	
	$mensajes = array(
		0 => 'Tornado',
		0 => 'Tormenta Tropical',
		0 => 'Hurac&aacute;n',
		0 => 'Tormentas El&eacute;ctricas Severas',
		0 => 'Tormentas El&eacute;ctricas',
		5 => 'Lluvia y Nieve',
		5 => 'Lluvia y Aguanieve',
		13 => 'Nieve y Aguanieve',
		5 => 'Llovizna congelada',
		8 => 'Llovizna',
		5 => 'Lluvia congelada',
		8 => 'Lluvia',
		8 => 'Lluvia',
		13 => 'R&aacute;fagas de Nieve',
		13 => 'Nevada ligera',
		13 => 'Nieve con viento',
		13 => 'Nieve',
		13 => 'Granizo',
		13 => 'Aguanieve',
		19 => 'Polvo',
		19 => 'Neblina',
		19 => 'Niebla ligera',
		19 => 'Neblina', //no creo que sea exacta esta traduccion
		19 => 'Vendaval',
		19 => 'Con viento',
		19 => 'Helado',
		19 => 'Nublado',
		19 => 'Muy nublado (noche)',
		19 => 'Muy nublado (dia)',
		19 => 'Parcialmente nublado (noche)',
		19 => 'Parcialmente nublado (dia)',
		31 => 'Despejado (noche)',
		32 => 'Soleado',
		31 => 'Despejado (noche)',
		32 => 'Despejado (dia)',
		5 => 'Lluvia y Granizo',
		32 => 'Caluroso',
		0 => 'Tormentas el&eacute;ctricas aisladas',
		0 => 'Tormentas el&eacute;ctricas dispersas',
		0 => 'Tormentas el&eacute;ctricas dispersas',
		8 => 'Lluvia dispersa',
		13 => 'Nieve densa',
		13 => 'Nieve y lluvia dispersas',
		13 => 'Nieve densa',
		19 => 'Parcialmente nublado',
		0 => 'Tormentas el&eacute;ctricas',
		13 => 'Nieve',
		0 => 'Tormentas el&eacute;ctricas aisladas',
		0 => 'No disponible',
	);
	
	if ($localidad_id != '') {
		$url = "http://weather.yahooapis.com/forecastrss?p={$localidad_id}&u=c";
		
		$namespace_yweather = 'http://xml.weather.yahoo.com/ns/rss/1.0';
		
		$xml_string = file_get_contents($url);
		$xml = new DOMDocument();
		$xml->loadXML($xml_string);
		
		$clima = $xml->getElementsByTagNameNS($namespace_yweather, 'condition');
		$clima = $clima->item(0);
		
		$resultado['clima']['codigo'] = $clima->getAttribute('code');
		$resultado['clima']['estado'] = $mensajes[$resultado['clima']['codigo']];
		$resultado['clima']['temperatura'] = $clima->getAttribute('temp');
		$resultado['clima']['fecha_unix'] = strtotime($clima->getAttribute('date'));
		$resultado['clima']['fecha'] = date('d/m/Y h:i:s', $resultado['clima']['fecha_unix']);			
	}
} else {
	$resultado = array('error' => 1, 'mensaje' => 'Operacion no valida');	
}

header('Content-Type: text/javascript');
//evitar cache

print json_encode($resultado);

?>