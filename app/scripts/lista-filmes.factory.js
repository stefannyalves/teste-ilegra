angular.module("filmes").factory("listaFilmes", function($q, $http){
	return {
		listar: function() {
			var promessa = $q.defer();

			$http.get("https://swapi.co/api/films").then(
				function(result){
					var filmes = [];
					angular.forEach(result.data.results, function(filme){
						filmes.push(filme);
					});
					promessa.resolve(filmes);
				}
			);
			return promessa.promise;
		}
	};
});