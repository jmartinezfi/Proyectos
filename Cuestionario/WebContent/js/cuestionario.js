"use strict";
angular.module('CuestionarioApp',['componentes','cuestionarios/Archivos.html','cuestionarios/Cabecera.html'])
.controller('CuestionarioController', function($scope){
	$scope.cuestionarios=['cuestionario 1', 'cuestionario 2'];
});