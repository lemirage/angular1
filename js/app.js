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
      img:"llois.jpg"
    };


    $scope.playerNumber = 89;
    $scope.joueurs = [joueur1,joueur2];

    $scope.majus = function(){
      console.log("click sur le boutton");
      console.log($scope.joueurs);
      for (var i = 0; i < $scope.joueurs.length; i++) {
        $scope.joueurs[i].firstname = $scope.joueurs[i].firstname.toUpperCase();
      }
    };

    $scope.visible = {
      'opacity':'1',
      'max-height':'150px'
    };
    $scope.imgjoueur = $scope.joueurs[0].img;
    /*Permet de Reset l'Element choisi*/
    $scope.reset = function(toReset){
      $scope[toReset] = '';
    };


    $scope.displayImg = function(joueur){
      console.log("in");

      $scope.playerNumber = joueur.number;
      $scope.imgjoueur =  joueur.img;

        console.log(  $scope.imgjoueur);
        $scope.visible = {
          'opacity':'1',
            'max-height':'150px'
        };
      //$scope.imgjoueur.display = "block";
    };
    $scope.hideImg = function(joueur){
      $scope.playerNumber = "joueur.number";
      $scope.visible = {
        'opacity':'0',
          'max-height':'150px'
      };

    };

    $scope.alert={
      'color':'red',
      'text-decoration' : 'underline'
    };

  }) // fin de premier controller
  .controller('playerCtrl',function($scope){
    $scope.title = "Je suis là";
  });
