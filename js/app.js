angular.module('testApp',[])
  .controller('mainCtrl',function($scope){

    $scope.title = 'Formation Angular';
    $scope.title = 'blabla';

    $scope.clients = ['client1','client2', 'client3'];

    var joueur1 = {
      firstname: 'Paul',
      lastname: 'pogba',
      number: 15,
      selected:true
    };

    var joueur2 = {
      firstname: 'Hugo',
      lastname: 'lloris',
      number: 1,
      selected:true
    };

    var joueur3 = {
      firstname: 'toto',
      lastname: 'titi',
      number: 17,
      selected:false
    };


    $scope.joueurs = [joueur1,joueur2,joueur3];

  });
