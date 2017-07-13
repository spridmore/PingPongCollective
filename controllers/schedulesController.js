angular
  .module("pingPongApp")
  .controller("schedulesController", function($scope,schedulesService,playersService) {

      // Dropdown Meanu
    $(document).ready(function(){
      $(".dropdown-toggle").dropdown();
    });
// [{id:
    $scope.players = playersService.getPlayers();

    $scope.matchups = []

    var Matchup = function(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }

    var getRandomPlayer = function() {
      return $scope.players[Math.floor(Math.random() * $scope.players.length)];
    }

    for (var i = 0; i < $scope.players.length; i++) {
      $scope.matchups.push(new Matchup(getRandomPlayer(), getRandomPlayer());
    }


    // (ISAAC)This gives us a date
      $scope.today = new Date();

    })
