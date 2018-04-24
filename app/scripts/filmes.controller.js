(function(){
  angular
  .module('filmes')
  .controller('FilmesController', function($scope, listaFilmes) {
    $scope.titulo = "Filmes";

    $scope.filmes = [];

    var carregarFilmes = function(){
      listaFilmes.listar().then(function(filmes){
        $scope.filmes = filmes;
      });
    }

    carregarFilmes();

  });
})();