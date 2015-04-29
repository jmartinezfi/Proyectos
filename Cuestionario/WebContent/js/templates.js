angular.module("cuestionarios/Archivos.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("cuestionarios/Archivos.html", 
    		'<ul><li ng-repeat="listado in listados">'
    		+'<div ng-class="{positivo: listado.total>=0, negativo: listado.total<0}"><a href="" ng-click="seleccionar(listado)" >{{listado.pregunta}}</a> <a href="" ng-click="verificar(listado)" >Comprobar</a><div><br>'
    		+'<div class=row ng-repeat="alter in listado.alernativas"><label><input type={{listado.tipo}} name={{listado.id}} value={{alter.idA}} /> {{alter.des}}</label></div>'
    		+'</li></ul>')
}]);
angular.module("cuestionarios/Cabecera.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("cuestionarios/Cabecera.html", 
    		'<div class=masthead><h3>Cuestionariossss</h3><nav ><ul class="nav nav-justified"><li class=active><a href=#>Projectos</a></li><li><a href=#>Projectos 2</a></li></ul></nav></div>')
}]);