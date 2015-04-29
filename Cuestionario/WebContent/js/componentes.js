angular.module('componentes',[])
.directive('cabecera',function(){
	return {
		restrict : 'E',
		transclude : true,
		scope: {},
		templateUrl: 'cuestionarios/Cabecera.html',
		replace : true
	};
})
.directive('listado',function(){
	return {
		restrict : 'C',
		transclude : true,
		scope: {},
		controller : function($scope){
			$scope.nombreListado = 'Nombre del Listado';
		},
		templateUrl : 'html/template.html',
		replace : true
	};
})
.directive('listadoCuestionario',function(){
	return {
		restrict : 'C',
		transclude : true,
		scope: {},
		controller : function($scope){
			$scope.listados=[{id:"P01",total : -1,valor:'',tipo:"radio",desc:'Descripcion de la pregunta',pregunta:'Pregunta numero 1?',resultado:'negativo',correcta :'1',alernativas:[{idA:"1",des:"Descripcion 1"},{idA:"2",des:"Descripcion 2"},{idA:"3",des:"Descripcion 3"}]},
			                 {id:"P02",total : -1,valor:'',tipo:"checkbox",desc:'Descripcion de la pregunta 2',pregunta:'Pregunta numero 2?',resultado:'negativo',correcta :'2',alernativas:[{idA:"1",des:"Descripcion 4"},{idA:"1",des:"Descripcion 5"}]}];
			$scope.seleccionar = function(listado){
				listado.total = -1;
				listado.listado='positivo';
				alert(listado.desc);
			}
			$scope.verificar = function(listado){
				//console.log(JSON.stringify(listado));
				listado.total = 1;
			}
		},
		templateUrl : 'cuestionarios/Archivos.html',
		replace : true
	};
})
.directive('pie',function(){
	return {
		restrict : 'E',
		transclude : true,
		scope: {},
		template: '<footer class=footer><p> &copy; AngularJS </p> </footer>',
		replace : true
	};
})