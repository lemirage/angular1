angular.module('testApp',[])
  .controller('mainCtrl',function($scope){

    $scope.title = 'Formation Angular';
    //  $scope.title = 'blabla';

    $scope.clients = ['client1','client2', 'client3'];

    var joueur1 = {
      firstname: 'Paul',
      lastname: 'pogba',
      number: 15,
      selected:true,
      img:"pogba.jpg"
    };

    var joueur2 = {
      firstname: 'Hugo',
      lastname: 'lloris',
      number: 1,
      selected:true,
      img:"lloris.jpg"
    };

    var joueur3 = {
      firstname: 'toto',
      lastname: 'titi',
      number: 17,
      selected:false,
      img:""
    };

    $scope.playerNumber = 89;
    $scope.joueurs = [joueur1,joueur2,joueur3];

    $scope.majus = function(){
      console.log("click sur le boutton");
      console.log($scope.joueurs);
      for (var i = 0; i < $scope.joueurs.length; i++) {
        $scope.joueurs[i].firstname = $scope.joueurs[i].firstname.toUpperCase();
      }
    };

    $scope.displayImg = function(joueur){
      console.log("in");

      console.log( $scope.imgjoueur);
      $scope.playerNumber = joueur.number;
    //  $scope.imgjoueur.src=img;
      //$scope.imgjoueur.display = "block";



    };
    $scope.hideImg = function(joueur){
      console.log("out");
      $scope.playerNumber = "joueur.number";
    //  $scope.imgjoueur.display = "none";
    };

  }) // fin de premier controller
  .controller('playerCtrl',function($scope){
    $scope.title = "Je suis là";
  });
