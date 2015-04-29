angular.module('modulo', []).controller("moduloCtrl", function() {
	this.dato = "Inicializando ... Esto funciona! Gracias Angular";
}).controller('acumuladorAppCtrl', controladorPrincipal);
function controladorPrincipal() {
	// esta función es mi controlador
	var scope = this;
	scope.total = 0;
	scope.cuanto = 0;

	scope.sumar = function() {
		scope.total += parseInt(scope.cuanto);
	}
	scope.restar = function() {
		scope.total -= parseInt(scope.cuanto);
	}
};