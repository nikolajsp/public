
var mainModule = angular.module('mainModule', []);
function mainController($scope) {

    $scope.images = [
        {id: 1, navn: 'Pizza', billede: './images/pizza.jpg', rating: '5'},
        {id: 2, navn: 'Lasagne', billede: './images/lasagne.jpg' , rating: '5'},
        {id: 3, navn: 'Burger', billede: './images/burger.jpg', rating: '4'},
        {id: 4, navn: 'Sandwich', billede: './images/sandwich.jpg', rating: '5'}
    ];

    // Tilføjer billeder
    $scope.createImage = function () {
        $scope.images.push({"id":$scope.id, "navn":$scope.navn, "billede":$scope.billede, "rating":$scope.rating});
    };

    // Sletter billeder
    $scope.deleteImage = function (image) {
        var index = $scope.images.indexOf(image);
        $scope.images.splice(index, 1);
    };
}
